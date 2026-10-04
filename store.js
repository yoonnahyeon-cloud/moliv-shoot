/* MOLIV CONTENT PLANNER · storage layer
   All reads and writes go through this adapter so it can be swapped for a server API later.
   Records are flat and keyed by id (shots, refs, crew, notes), with foreign keys (projectId, stepId, shotId)
   and a numeric `sort`, which maps 1:1 to database tables.
   - JSON state  -> localStorage  (key: moliv.planner.v2.<projectId>)
   - Uploaded media (GIF/image/video) -> IndexedDB  (db: moliv-media, store: blobs, key: blobKey) */
(function(){
  const LEGACY_KEY='moriv-shoot-checklist-v1';
  const key=pid=>'moliv.planner.v2.'+pid;
  const clone=o=>JSON.parse(JSON.stringify(o));

  function seed(project){
    const now=new Date().toISOString();
    return {
      schema:3, projectId:project.id, createdAt:now, updatedAt:now,
      shots:project.shots.map(s=>Object.assign(clone(s),{projectId:project.id,status:'todo',statusAt:null,updatedAt:now})),
      refs:project.refs.map(r=>Object.assign(clone(r),{projectId:project.id})),
      notes:project.steps.map(s=>({id:'note-'+s.id,stepId:s.id,text:''})),
      trash:[],
      prefs:{device:'ALL'}
    };
  }

  // carry over checks made on the first version of the site (same browser)
  function migrateLegacy(state){
    try{
      const raw=localStorage.getItem(LEGACY_KEY); if(!raw) return;
      const old=JSON.parse(raw)||{}; const map={1:'done',2:'retake'};
      state.shots.forEach(s=>{const v=old.status&&old.status[s.origin&&s.origin.code]; if(map[v]){s.status=map[v];}});
    }catch(e){}
  }

  // schema 2 (steps by surgery phase, per-device crew) -> schema 3 (steps by the day's route)
  function fromSchema2(old,project){
    const next=seed(project); const map=project.legacyStepMap||{};
    const seedIds=new Set(next.shots.map(s=>s.id));
    const oldById=Object.fromEntries((old.shots||[]).map(s=>[s.id,s]));
    const legacyCodes=/^[REBDA]\d{2}$/;
    const keep=['title','content','method','angle','action','caution','use','required','retakeable','memo','usage','status','statusAt'];
    // cuts deleted on site stay deleted
    next.shots=next.shots.filter(s=>!(legacyCodes.test(s.id)&&['B12','D06','D07','A11'].indexOf(s.id)<0&&!oldById[s.id]));
    next.shots.forEach(s=>{const o=oldById[s.id]; if(o) keep.forEach(k=>{if(o[k]!==undefined) s[k]=o[k];});});
    (old.shots||[]).filter(s=>!seedIds.has(s.id)).forEach(s=>{
      const st=map[s.stepId]||s.stepId; const last=next.shots.filter(x=>x.stepId===st).reduce((m,x)=>Math.max(m,x.sort),0);
      next.shots.push(Object.assign({},s,{stepId:st,sort:last+10,assignee:typeof s.assignee==='string'&&!/^c\d$/.test(s.assignee)?s.assignee:null}));
    });
    const ids=new Set(next.shots.map(s=>s.id));
    (old.refs||[]).filter(r=>!r.builtIn&&ids.has(r.shotId)).forEach(r=>next.refs.push(r));
    next.refs=next.refs.filter(r=>ids.has(r.shotId));
    (old.notes||[]).forEach(n=>{if(!n.text) return; const t=next.notes.find(x=>x.stepId===(map[n.stepId]||n.stepId)); if(t) t.text=(t.text?t.text+'\n':'')+n.text;});
    next.trash=(old.trash||[]).map(t=>Object.assign({},t,{shot:Object.assign({},t.shot,{stepId:map[t.shot.stepId]||t.shot.stepId})}));
    next.prefs=old.prefs||next.prefs;
    return next;
  }

  const LocalAdapter={
    load(project){
      let state=null;
      try{const raw=localStorage.getItem(key(project.id)); if(raw) state=JSON.parse(raw);}catch(e){}
      if(state&&state.schema===2) state=fromSchema2(state,project);
      if(!state||state.schema!==3){state=seed(project); migrateLegacy(state);}
      this.save(state);
      return state;
    },
    save(state){
      state.updatedAt=new Date().toISOString();
      try{localStorage.setItem(key(state.projectId),JSON.stringify(state)); return true;}catch(e){return false;}
    },
    reset(project){ const s=seed(project); this.save(s); return s; },
    seed
  };

  // IndexedDB blob store for uploaded references
  let dbp=null;
  function db(){
    if(dbp) return dbp;
    dbp=new Promise((res,rej)=>{
      if(!('indexedDB' in window)) return rej(new Error('no idb'));
      const rq=indexedDB.open('moliv-media',1);
      rq.onupgradeneeded=()=>rq.result.createObjectStore('blobs');
      rq.onsuccess=()=>res(rq.result); rq.onerror=()=>rej(rq.error);
    });
    return dbp;
  }
  const Blobs={
    async put(k,blob){const d=await db(); return new Promise((res,rej)=>{const t=d.transaction('blobs','readwrite'); t.objectStore('blobs').put(blob,k); t.oncomplete=()=>res(k); t.onerror=()=>rej(t.error);});},
    async get(k){const d=await db(); return new Promise((res,rej)=>{const r=d.transaction('blobs').objectStore('blobs').get(k); r.onsuccess=()=>res(r.result||null); r.onerror=()=>rej(r.error);});}
  };

  window.MolivStore={adapter:LocalAdapter,blobs:Blobs};
})();
