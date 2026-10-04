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
      schema:2, projectId:project.id, createdAt:now, updatedAt:now,
      crew:project.crew.map(c=>({id:c.id,name:c.name||''})),
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

  const LocalAdapter={
    load(project){
      let state=null;
      try{const raw=localStorage.getItem(key(project.id)); if(raw) state=JSON.parse(raw);}catch(e){}
      if(!state||state.schema!==2){state=seed(project); migrateLegacy(state); this.save(state);}
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
