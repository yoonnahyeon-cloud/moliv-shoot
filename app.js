/* MOLIV CONTENT PLANNER · field call sheet */
(function(){
'use strict';
const PROJECTS=window.MOLIV_PROJECTS||[];
const qp=new URLSearchParams(location.search).get('p');
const P=PROJECTS.find(p=>p.id===qp)||PROJECTS[PROJECTS.length-1];
const {adapter,blobs}=window.MolivStore;
let S=adapter.load(P);

const USAGES=['후기형','체험형','공통','사진'];
const STATUS={todo:'대기',done:'완료',retake:'재촬영'};
const NEXT={todo:'done',done:'retake',retake:'todo'};
const STEP=Object.fromEntries(P.steps.map(s=>[s.id,s]));
const TODAY=P.steps.filter(s=>s.phase==='today');

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=p=>p+'-'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const clone=o=>JSON.parse(JSON.stringify(o));

let open=new Set(), editMode=false, saveT=null;

/* ---------- data helpers ---------- */
function save(){clearTimeout(saveT); saveT=setTimeout(()=>{if(!adapter.save(S)) toast('저장 공간이 부족해 저장하지 못했습니다');},120);}
const shotsOf=stepId=>S.shots.filter(s=>s.stepId===stepId).sort((a,b)=>a.sort-b.sort);
const shot=id=>S.shots.find(s=>s.id===id);
const refsOf=id=>S.refs.filter(r=>r.shotId===id);
const whoText=s=>(s.assignee&&String(s.assignee).trim())||((STEP[s.stepId]||{}).owner)||'';
const visible=()=>true;
function stepState(id){
  const list=shotsOf(id); const done=list.filter(s=>s.status==='done').length;
  const reqLeft=list.filter(s=>s.required&&s.status!=='done').length;
  return {total:list.length,done,reqLeft,complete:list.length>0&&done===list.length,started:done>0};
}
function currentStep(){const s=TODAY.find(s=>!stepState(s.id).complete); return s?s.id:TODAY[TODAY.length-1].id;}
function normalize(stepId){shotsOf(stepId).forEach((s,i)=>s.sort=(i+1)*10);}
const methodOf=s=>s.method||'';

/* ---------- media ---------- */
const urlCache={};
function kindOfUrl(u){const x=u.split('?')[0].toLowerCase(); if(/\.(mp4|webm|mov|m4v)$/.test(x)) return 'video'; if(/\.(gif|png|jpe?g|webp|avif)$/.test(x)) return 'image'; return 'link';}
async function srcOf(r){
  if(r.src) return r.src;
  if(r.blobKey){ if(urlCache[r.blobKey]) return urlCache[r.blobKey];
    try{const b=await blobs.get(r.blobKey); if(b){return urlCache[r.blobKey]=URL.createObjectURL(b);}}catch(e){} }
  return null;
}
function renderKind(r){ if(r.kind==='url') return kindOfUrl(r.src||''); return r.kind==='gif'?'image':r.kind; }
/* fill a container with the media for ref r. opts.auto: muted autoplay loop controlled by the viewport observer */
function mountMedia(box,r,opts={}){
  const k=renderKind(r);
  if(k==='link'){box.innerHTML=`<div class="lnk">영상 링크</div>`; return;}
  srcOf(r).then(src=>{
    if(!src){box.innerHTML='<div class="lnk">이 기기에 파일 없음</div>'; return;}
    if(k==='video'){
      const v=document.createElement('video'); v.muted=true; v.loop=true; v.playsInline=true; v.setAttribute('playsinline',''); v.preload=opts.full?'auto':'metadata';
      if(r.poster) v.poster=r.poster; v.src=src;
      if(opts.full){v.controls=true; v.autoplay=true; v.play().catch(()=>{});} else if(opts.auto){v.dataset.auto='1'; io&&io.observe(v);}
      box.prepend(v);
    } else { const i=document.createElement('img'); i.alt=r.label||''; i.loading='lazy'; i.src=src; box.prepend(i); }
  });
}
/* play loops only while on screen, at most 3 at a time */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>{
  es.forEach(e=>{const v=e.target;
    if(e.isIntersecting&&e.intersectionRatio>=.6){ if($$('video[data-auto]').filter(x=>!x.paused).length<3) v.play().catch(()=>{}); }
    else v.pause();});
},{threshold:[0,.6]}):null;

/* ---------- small renderers ---------- */
const devTags=()=>'';
const whoTag=s=>whoText(s)?`<span class="who-t">담당 ${esc(whoText(s))}</span>`:'';
const useTag=u=>u?`<span class="use">${esc(u)}</span>`:'';
const reqTags=()=>'';
const stBtn=s=>`<button class="stb" data-act="cycle" aria-label="상태 ${STATUS[s.status]}, 눌러서 변경"><span class="sq">${s.status==='done'?'✓':s.status==='retake'?'R':''}</span><span class="lb">${STATUS[s.status]}</span></button>`;

function card(s){
  const rs=refsOf(s.id);
  return `<article class="card st-${s.status}" data-id="${s.id}">
    <div class="media" data-media="${rs[0]?rs[0].id:''}">
      ${rs.length?`<button class="zoom" data-act="zoom" aria-label="레퍼런스 크게 보기"></button>${rs.length>1?`<span class="cnt">+${rs.length-1}</span>`:''}`
        :`<button class="addref" data-act="addref"><b>+</b>레퍼런스 추가</button>`}
    </div>
    <div class="info">
      <div class="tags">${useTag(s.usage)}${whoTag(s)}</div>
      <h4>${esc(s.title)}</h4>
      ${s.content?`<p class="dir">${esc(s.content)}</p>`:''}
      ${s.angle?`<p class="ang">구도 · ${esc(s.angle)}</p>`:''}
      ${s.caution?`<p class="warn">${esc(s.caution)}</p>`:''}
      <div class="row-end">${stBtn(s)}<div class="tags"><button class="more" data-act="menu" aria-label="더보기">···</button></div></div>
    </div>
  </article>`;
}
function row(s){
  const rs=refsOf(s.id); const o=open.has('c:'+s.id);
  return `<div class="cut st-${s.status}" data-id="${s.id}">
    <div class="cut-r">${stBtn(s)}
      <button class="open" data-act="toggle" aria-expanded="${o}"><span class="t">${esc(s.title)}</span>
        <span class="tags">${devTags(s)}${useTag(s.usage)}${reqTags(s)}${s.status==='retake'?'<span class="rt">재촬영 필요</span>':''}${rs.length?'<span class="who-t">레퍼런스</span>':''}</span></button>
      <button class="more" data-act="menu" aria-label="더보기">···</button></div>
    <div class="cut-d" ${o?'':'hidden'}>${o?detail(s):''}</div>
  </div>`;
}
function detail(s){
  const rs=refsOf(s.id);
  const f=[['담당',whoText(s)],['촬영',s.content],['방법',methodOf(s)],['구도',s.angle],['모델',s.action],['주의',s.caution,'w'],['사용처',s.use],['메모',s.memo]];
  return `<dl class="f">${f.filter(x=>x[1]).map(([k,v,c])=>`<dt>${k}</dt><dd class="${c||''}">${esc(v)}</dd>`).join('')}</dl>
    ${rs.length?`<div class="thumbs">${rs.map(r=>`<button data-act="zoom" data-ref="${r.id}" data-media="${r.id}" aria-label="레퍼런스 크게 보기"></button>`).join('')}</div>`:''}`;
}

/* ---------- page sections ---------- */
function renderHero(){
  $('#pcode').textContent=P.id;
  $('#overview').innerHTML=`<div class="eyebrow">${esc(P.code)}</div>
    <h1>${esc(P.title)}</h1>
    <div class="meta"><span class="mono">${esc(P.dateLabel)}</span><span>${esc(P.model)}</span></div>
    <div class="today"><div class="eyebrow ko">촬영</div><div class="crewline">${P.crewLine.map(([n,e])=>`<span><b>${esc(n)}</b> ${esc(e)}</span>`).join('')}</div>
    ${P.note?`<p class="hnote">${esc(P.note)}</p>`:''}</div>`;
  $('#outputs').hidden=true;
}
function renderCrew(){ $('#crew').hidden=true; }
function renderTop(){
  const all=S.shots.filter(s=>(STEP[s.stepId]||{}).phase==='today'); const done=all.filter(s=>s.status==='done').length; const pct=all.length?Math.round(done/all.length*100):0;
  $('#totalPct').textContent=pct+'%'; $('#totalBar').style.width=pct+'%';
  const cur=currentStep();
  $('#dots').innerHTML=TODAY.map(s=>{const st=stepState(s.id);
    return `<li><button data-act="gostep" data-step="${s.id}" class="${st.complete?'done':st.started?'on':''} ${s.id===cur?'cur':''}" aria-label="${s.no}. ${esc(s.name)} ${st.complete?'완료':st.started?'진행 중':'대기'}"><span class="d"></span><span>${esc(s.short)}</span></button></li>`;}).join('');
}
function stepHead(st,isOpen,cur){
  const s=stepState(st.id);
  return `<button class="step-h" data-act="step" aria-expanded="${isOpen}">
    <span class="sno">${st.phase==='today'?'':'STEP'}<b>${esc(st.no)}</b></span>
    <span><span class="splace">${esc([st.when,st.place].filter(Boolean).join(' · '))}</span><h3>${esc(st.name)}</h3>
      <span class="sdetail">${esc(st.detail||'')}</span>
      <span class="sstat">${st.owner?`<span class="own">담당 ${esc(st.owner)}</span>`:''}<span>${s.total?(s.complete?'완료':s.done+' / '+s.total):'컷 없음'}</span>${st.shoot===false?'<span>촬영 없음</span>':''}</span></span>
    <span style="display:flex;gap:10px;align-items:center">${st.id===cur&&!s.complete?'<span class="now">NOW</span>':''}<span class="chev">›</span></span>
  </button>`;
}
function stepBlock(st,cur){
  const s=stepState(st.id); const isOpen=editMode||open.has('s:'+st.id);
  return `<div class="step ${isOpen?'open':''} ${s.complete?'done':''}" id="step-${st.id}" data-step="${st.id}">
    ${stepHead(st,isOpen,cur)}
    ${isOpen?`<div class="step-b">${editMode?editBody(st):stepBody(st)}</div>`:''}
  </div>`;
}
function renderSteps(){
  const cur=currentStep(); const after=P.steps.filter(s=>s.phase!=='today');
  $('#steps').innerHTML=`<div class="bh"><h2>오늘 동선</h2><span class="side">${TODAY.length}단계</span></div>
    ${editMode?`<div class="editbar"><span>컷을 끌어서 순서나 단계를 바꾸세요</span><button data-act="editdone">완료</button></div>`
      :`<div class="tools"><button class="tbtn ghost" data-act="editmode">촬영 순서 편집</button></div>`}
    ${TODAY.map(st=>stepBlock(st,cur)).join('')}
    ${after.length?`<div class="bh after-h"><h2>수술 이후</h2><span class="side">경과 촬영 ${after.length}회</span></div>${after.map(st=>stepBlock(st,cur)).join('')}`:''}`;
  hydrate($('#steps'));
  if(editMode) initSortable();
}
function stepBody(st){
  const list=shotsOf(st.id);
  const reqs=[], rest=list;
  const note=S.notes.find(n=>n.stepId===st.id)||{text:''};
  return `${st.note?`<p class="step-note">${esc(st.note)}</p>`:''}
    ${reqs.length?`<div><div class="sub">필수 컷 · ${reqs.length}</div><div class="reqs">${reqs.map(card).join('')}</div></div>`:''}
    <div>${rest.length||!reqs.length?`<div class="sub">${st.shoot===false?'할 일':'촬영 컷'} · ${rest.length}</div>`:''}
      ${rest.length?`<div class="cuts">${rest.map(row).join('')}</div>`:(reqs.length?'':'<div class="empty">아직 등록한 컷이 없습니다.</div>')}
      <button class="addcut" data-act="add" data-step="${st.id}"><b>+</b>컷 추가</button></div>
    <div><div class="sub">현장 메모</div><textarea class="memo" data-note="${st.id}" placeholder="이 단계 메모">${esc(note.text)}</textarea></div>`;
}
function editBody(st){
  const list=shotsOf(st.id);
  return `<div class="elist" data-step="${st.id}">${list.map(s=>`<div class="erow" data-id="${s.id}"><span class="handle" aria-label="끌어서 이동">≡</span>
    <span class="t">${esc(s.title)}<span class="tags">${useTag(s.usage)}${s.required?'<span class="req-t">필수</span>':''}</span></span></div>`).join('')}</div>`;
}
function renderMissing(){
  const inToday=s=>(STEP[s.stepId]||{}).shoot!==false;
  const req=S.shots.filter(s=>s.required&&s.status!=='done'&&inToday(s)); const re=S.shots.filter(s=>s.status==='retake');
  const total=S.shots.filter(s=>s.required&&inToday(s)).length;
  const li=s=>`<li><button data-act="jump" data-id="${s.id}"><span>${esc(s.title)}</span><span class="s ${s.status==='retake'?'r':''}">${STATUS[s.status]}</span></button></li>`;
  const groups=TODAY.map(st=>{const l=req.filter(s=>s.stepId===st.id).sort((a,b)=>a.sort-b.sort); return l.length?`<div class="mgroup"><h3>${esc(st.no)}. ${esc(st.name)} <span class="who-t">${esc(st.place||'')}</span></h3><ul class="mlist">${l.map(li).join('')}</ul></div>`:'';}).join('');
  $('#missing').innerHTML=`<div class="bh"><h2>빠뜨린 컷</h2><span class="side">촬영 ${total}컷 기준</span></div>
    <div class="miss-top"><div class="${req.length?'bad':''}"><b>${req.length}</b><small>아직 안 찍은 컷</small></div><div class="${re.length?'bad':''}"><b>${re.length}</b><small>재촬영 필요</small></div></div>
    ${req.length?groups:'<p class="ok">모든 컷을 촬영했습니다.</p>'}
    ${re.length?`<div class="mgroup"><h3>재촬영 필요</h3><ul class="mlist">${re.map(li).join('')}</ul></div>`:''}`;
}
function renderFoot(){
  $('#foot').innerHTML=`<div class="links">
      <button data-act="add">새 컷 추가</button>
      <button data-act="trash">삭제한 컷${S.trash.length?' ('+S.trash.length+')':''}</button>
      <button data-act="export">백업 내보내기</button>
      <button data-act="import">백업 가져오기</button>
      <button data-act="reset">처음 기획으로 되돌리기</button></div>
    <div>체크, 메모, 컷 편집은 이 휴대폰에 저장됩니다. 다른 휴대폰과 맞추려면 백업 내보내기 파일을 공유해 가져오기 하세요.</div>
    <div class="mono">MOLIV CONTENT PLANNER · ${esc(P.code)}${PROJECTS.length>1?' · '+PROJECTS.map(p=>`<a href="?p=${p.id}">${p.id}</a>`).join(' '):''}</div>`;
}
function hydrate(root){
  $$('[data-media]',root).forEach(box=>{const id=box.dataset.media; if(!id||box.dataset.done) return; const r=S.refs.find(x=>x.id===id); if(!r) return; box.dataset.done='1'; mountMedia(box,r,{auto:box.classList.contains('media')});});
}
function renderAll(){renderTop(); renderSteps(); renderMissing(); renderFoot();}
function refreshStatus(){renderTop(); renderMissing();
  // update step headers without rebuilding open bodies
  P.steps.forEach(st=>{const el=$('#step-'+st.id); if(!el) return; const s=stepState(st.id);
    el.classList.toggle('done',s.complete);
    const h=$('.step-h',el); h.outerHTML=stepHead(st,el.classList.contains('open'),currentStep());});
}

/* ---------- actions ---------- */
function setStatus(id,v){const s=shot(id); if(!s) return; s.status=v; s.statusAt=new Date().toISOString(); save();
  $$(`[data-id="${id}"]`).forEach(el=>{el.classList.remove('st-todo','st-done','st-retake'); el.classList.add('st-'+v); const b=$('.stb',el); if(b) b.outerHTML=stBtn(s);});
  $$(`.cut[data-id="${id}"] .open .tags`).forEach(t=>{t.innerHTML=`${devTags(s)}${useTag(s.usage)}${reqTags(s)}${s.status==='retake'?'<span class="rt">재촬영 필요</span>':''}${refsOf(id).length?'<span class="who-t">레퍼런스</span>':''}`;});
  refreshStatus();
}
function openStep(id,scroll){open.add('s:'+id); renderSteps(); if(scroll) scrollTo$('#step-'+id);}
function scrollTo$(sel){const el=typeof sel==='string'?$(sel):sel; if(!el) return; const h=$('#top').offsetHeight+6; window.scrollTo({top:el.getBoundingClientRect().top+scrollY-h,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
function jump(id){const s=shot(id); if(!s) return; closeLayer(); if(!rvBox.hidden){rvBox.hidden=true; rvBox.innerHTML=''; document.body.style.overflow='';} open.add('s:'+s.stepId); if(!s.required) open.add('c:'+id); renderSteps(); setTimeout(()=>scrollTo$(`#step-${s.stepId} [data-id="${id}"]`),30);}

function removeShot(id){
  const s=shot(id); if(!s) return; const rs=refsOf(id);
  S.trash.unshift({id:uid('trash'),shot:clone(s),refs:clone(rs),deletedAt:new Date().toISOString()}); S.trash=S.trash.slice(0,30);
  S.shots=S.shots.filter(x=>x.id!==id); S.refs=S.refs.filter(r=>r.shotId!==id); save(); renderAll();
  toast('컷을 삭제했습니다',{label:'실행 취소',fn:()=>restore(S.trash[0].id)});
}
function restore(tid){
  const t=S.trash.find(x=>x.id===tid); if(!t) return;
  if(!STEP[t.shot.stepId]) t.shot.stepId=P.steps[0].id;
  S.shots.push(t.shot); S.refs.push(...t.refs); S.trash=S.trash.filter(x=>x.id!==tid); normalize(t.shot.stepId); save(); renderAll(); toast('컷을 복구했습니다');
}
function duplicate(id){
  const s=shot(id); if(!s) return; const n=clone(s); n.id=uid('cut'); n.title=s.title+' 복제'; n.status='todo'; n.statusAt=null; n.sort=s.sort+5; n.origin=Object.assign({},s.origin||{},{duplicatedFrom:s.id});
  S.shots.push(n); refsOf(id).forEach(r=>S.refs.push(Object.assign(clone(r),{id:uid('ref'),shotId:n.id})));
  normalize(s.stepId); save(); open.add('s:'+s.stepId); renderAll(); editSheet(n.id,{dup:true});
}

/* ---------- layers ---------- */
const layer=$('#layer');
const rvBox=document.createElement('div'); rvBox.className='reqview'; rvBox.hidden=true; document.body.appendChild(rvBox);
function showLayer(html,cls){layer.innerHTML=html; layer.hidden=false; layer.className='layer '+(cls||''); document.body.style.overflow='hidden'; hydrate(layer);}
function closeLayer(){$$('video',layer).forEach(v=>v.pause()); layer.hidden=true; layer.innerHTML=''; layer.onclick=null; document.body.style.overflow=rvBox&&!rvBox.hidden?'hidden':'';}
layer.addEventListener('click',e=>{if(e.target===layer) closeLayer();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!layer.hidden) closeLayer();});

function menu(id){
  const s=shot(id);
  showLayer(`<div class="menu" role="menu"><div class="mt">${esc(s.title)}</div>
    <button data-m="edit">수정</button><button data-m="dup">복제</button><button data-m="ref">레퍼런스 추가</button>
    <button data-m="order">순서 변경</button><button data-m="del" class="danger">삭제</button><button data-m="close">닫기</button></div>`);
  layer.onclick=e=>{const b=e.target.closest('[data-m]'); if(e.target===layer) return closeLayer(); if(!b) return; const m=b.dataset.m; closeLayer(); layer.onclick=null;
    if(m==='edit') editSheet(id); else if(m==='dup') duplicate(id); else if(m==='ref') refSheet(id);
    else if(m==='order'){editMode=true; renderSteps(); scrollTo$(`.erow[data-id="${id}"]`);} else if(m==='del') confirmDel(id);};
}
function confirmDel(id){
  const s=shot(id);
  showLayer(`<div class="dialog" role="alertdialog" aria-labelledby="dlg-t"><h3 id="dlg-t">이 촬영 컷을 삭제할까요?</h3><p>${esc(s.title)}<br>삭제한 컷은 아래 '삭제한 컷'에서 복구할 수 있습니다.</p>
    <div class="acts"><button class="btn" data-d="no">취소</button><button class="btn danger" data-d="yes">삭제</button></div></div>`);
  layer.onclick=e=>{const b=e.target.closest('[data-d]'); if(e.target===layer){closeLayer(); layer.onclick=null; return;} if(!b) return; closeLayer(); layer.onclick=null; if(b.dataset.d==='yes') removeShot(id);};
}
function confirmBox(title,text,okLabel,fn){
  showLayer(`<div class="dialog" role="alertdialog"><h3>${esc(title)}</h3><p>${esc(text)}</p><div class="acts"><button class="btn" data-d="no">취소</button><button class="btn danger" data-d="yes">${esc(okLabel)}</button></div></div>`);
  layer.onclick=e=>{const b=e.target.closest('[data-d]'); if(e.target===layer){closeLayer(); layer.onclick=null; return;} if(!b) return; closeLayer(); layer.onclick=null; if(b.dataset.d==='yes') fn();};
}

/* edit / add form */
function chips(name,opts,sel,multi,mono){return `<div class="chips ${mono?'mono':''}" data-chips="${name}" data-multi="${multi?1:0}">${opts.map(([v,l])=>`<button type="button" data-v="${esc(v)}" aria-pressed="${multi?sel.includes(v):sel===v}">${esc(l)}</button>`).join('')}</div>`;}
let pendingRefs=[];
function editSheet(id,opt={}){
  const isNew=!id; const s=isNew?{title:'',stepId:opt.step||currentStep(),devices:[],usage:'',assignee:null,method:'',angle:'',action:'',content:'',caution:'',required:false,retakeable:true,memo:''}:shot(id);
  pendingRefs=[];
  const extraOpen=!isNew;
  showLayer(`<form class="sheet form" id="cutForm" novalidate>
    <div class="sheet-h"><h3>${isNew?'새 촬영 컷':opt.dup?'복제한 컷 수정':'촬영 컷 수정'}</h3><button type="button" class="x" data-close aria-label="닫기">×</button></div>
    ${opt.dup?'<p class="hint" style="margin-top:-8px">바꿀 부분만 고쳐서 저장하면 됩니다.</p>':''}
    <div class="fld"><label for="f-title">컷 이름 <b>필수</b></label><input id="f-title" name="title" type="text" value="${esc(s.title)}" placeholder="예) 수술 전 헤어라인 근접" autocomplete="off"></div>
    <div class="fld"><span class="l">촬영 단계 <b>필수</b></span>${chips('stepId',P.steps.map(x=>[x.id,x.short]),s.stepId,false)}</div>
    <button type="button" class="more-f" data-extra aria-expanded="${extraOpen}">${extraOpen?'세부 항목 접기':'세부 항목 입력 (선택)'}</button>
    <div class="form" data-extra-box ${extraOpen?'':'hidden'}>
      <div class="fld"><span class="l">콘텐츠 용도</span>${chips('usage',USAGES.map(u=>[u,u]),s.usage,false)}</div>
      <div class="fld"><label for="f-as">담당자</label><input id="f-as" name="assignee" type="text" value="${esc(s.assignee&&!/^c\d$/.test(s.assignee)?s.assignee:'')}" placeholder="비워 두면 단계 담당(${esc((STEP[s.stepId]||{}).owner||'없음')})" autocomplete="off"></div>
      <div class="fld"><label for="f-content">촬영 내용</label><textarea id="f-content" name="content">${esc(s.content)}</textarea></div>
      <div class="fld"><label for="f-method">촬영 방법</label><textarea id="f-method" name="method" placeholder="예) 사진과 영상 모두">${esc(s.method)}</textarea></div>
      <div class="fld"><label for="f-angle">촬영 구도</label><input id="f-angle" name="angle" type="text" value="${esc(s.angle)}"></div>
      <div class="fld"><label for="f-action">모델 행동</label><input id="f-action" name="action" type="text" value="${esc(s.action)}"></div>
      <div class="fld"><label for="f-caution">주의사항</label><textarea id="f-caution" name="caution">${esc(s.caution)}</textarea></div>
      <div class="two"><label class="toggle">필수 컷<input type="checkbox" name="required" ${s.required?'checked':''}></label><label class="toggle">재촬영 가능<input type="checkbox" name="retakeable" ${s.retakeable?'checked':''}></label></div>
      <div class="fld"><span class="l">레퍼런스</span><div class="reflist" data-reflist>${(isNew?[]:refsOf(id)).map(refItem).join('')}</div>${refAdder()}</div>
      <div class="fld"><label for="f-memo">메모</label><textarea id="f-memo" name="memo">${esc(s.memo)}</textarea></div>
    </div>
    <div class="sheet-f"><button type="button" class="btn" data-close>취소</button><button type="submit" class="btn solid">${isNew?'컷 추가':'저장'}</button></div>
  </form>`);
  const f=$('#cutForm'); layer.onclick=e=>{if(e.target===layer){closeLayer(); layer.onclick=null;}};
  f.addEventListener('click',e=>{
    const c=e.target.closest('[data-chips] button'); if(c){const g=c.parentElement; if(g.dataset.multi==='1') c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')!=='true'); else $$('button',g).forEach(b=>b.setAttribute('aria-pressed',String(b===c&&b.getAttribute('aria-pressed')!=='true'||(b===c&&g.dataset.chips==='stepId'))));}
    if(e.target.closest('[data-close]')){closeLayer(); layer.onclick=null;}
    const x=e.target.closest('[data-extra]'); if(x){const box=$('[data-extra-box]',f); box.hidden=!box.hidden; x.setAttribute('aria-expanded',String(!box.hidden)); x.textContent=box.hidden?'세부 항목 입력 (선택)':'세부 항목 접기';}
    const rm=e.target.closest('[data-rmref]'); if(rm){const rid=rm.dataset.rmref; if(rid.startsWith('pending')) pendingRefs=pendingRefs.filter(p=>p.id!==rid); else S.refs=S.refs.filter(r=>r.id!==rid); rm.parentElement.remove();}
    const au=e.target.closest('[data-addurl]'); if(au){const inp=$('[data-url]',f); const u=inp.value.trim(); if(!/^https?:\/\//.test(u)){toast('http로 시작하는 주소를 넣어 주세요'); return;} const r={id:'pending-'+uid('u'),kind:'url',src:u,label:'영상 링크'}; pendingRefs.push(r); $('[data-reflist]',f).insertAdjacentHTML('beforeend',refItem(r)); inp.value='';}
  });
  f.addEventListener('change',async e=>{if(e.target.matches('[data-files]')){for(const file of e.target.files){const r=await fileRef(file); if(r){r.id='pending-'+uid('f'); pendingRefs.push(r); $('[data-reflist]',f).insertAdjacentHTML('beforeend',refItem(r)); hydrate($('[data-reflist]',f));}} e.target.value='';}});
  f.addEventListener('submit',e=>{e.preventDefault();
    const val=n=>{const g=$(`[data-chips="${n}"]`,f); const on=$$('button[aria-pressed="true"]',g).map(b=>b.dataset.v); return g.dataset.multi==='1'?on:(on[0]||'');};
    const title=f.title.value.trim(), stepId=val('stepId'), devices=isNew?[]:(shot(id).devices||[]);
    if(!title){toast('컷 이름을 입력해 주세요'); f.title.focus(); return;}
    if(!stepId){toast('촬영 단계를 골라 주세요'); return;}
    const now=new Date().toISOString();
    const data={title,stepId,devices,usage:val('usage'),assignee:f.assignee.value.trim()||null,content:f.content.value.trim(),method:f.method.value.trim(),angle:f.angle.value.trim(),action:f.action.value.trim(),caution:f.caution.value.trim(),required:f.required.checked,retakeable:f.retakeable.checked,memo:f.memo.value.trim(),updatedAt:now};
    let target;
    if(isNew){target=Object.assign({id:uid('cut'),projectId:P.id,sort:(shotsOf(stepId).slice(-1)[0]||{sort:0}).sort+10,status:'todo',statusAt:null,use:'',origin:{createdOnSite:true},createdAt:now},data); S.shots.push(target);}
    else{target=shot(id); const moved=target.stepId!==stepId; Object.assign(target,data); if(moved) target.sort=(shotsOf(stepId).filter(x=>x.id!==target.id).slice(-1)[0]||{sort:0}).sort+10;}
    pendingRefs.forEach(r=>{r.id=uid('ref'); r.shotId=target.id; r.projectId=P.id; r.createdAt=now; S.refs.push(r);}); pendingRefs=[];
    normalize(stepId); save(); closeLayer(); layer.onclick=null; open.add('s:'+stepId); renderAll(); toast(isNew?'컷을 추가했습니다':'저장했습니다');
    setTimeout(()=>scrollTo$(`#step-${stepId} [data-id="${target.id}"]`),40);
  });
  if(isNew) setTimeout(()=>f.title.focus(),50);
}
function refItem(r){return `<div class="ri" data-media="${r.id.startsWith('pending')?'':r.id}">${r.kind==='url'&&kindOfUrl(r.src)==='link'?`<div class="lnk">${esc(r.src.replace(/^https?:\/\//,'').slice(0,40))}</div>`:''}<button type="button" class="rm" data-rmref="${r.id}" aria-label="레퍼런스 삭제">×</button></div>`;}
function refAdder(){return `<div class="refadd"><label class="tbtn" style="text-align:center">GIF · 이미지 · 영상 업로드<input data-files type="file" accept="image/*,video/*" multiple hidden></label>
  <div class="urlrow"><input data-url type="url" placeholder="영상 URL (인스타그램, 유튜브, mp4)" style="border:1px solid var(--line);padding:10px;font-size:16px"><button type="button" class="tbtn" data-addurl>추가</button></div></div>`;}
async function fileRef(file){
  const kind=file.type==='image/gif'?'gif':file.type.startsWith('image/')?'image':file.type.startsWith('video/')?'video':null;
  if(!kind){toast('이미지나 영상 파일만 올릴 수 있습니다'); return null;}
  const blobKey=uid('blob');
  try{await blobs.put(blobKey,file);}catch(e){toast('파일을 저장하지 못했습니다'); return null;}
  urlCache[blobKey]=URL.createObjectURL(file);
  return {kind,blobKey,name:file.name,mime:file.type,size:file.size,label:file.name};
}
// pending refs are previewed through the same cache
const _srcOf=srcOf;
srcOf=async r=>{if(r.blobKey&&urlCache[r.blobKey]) return urlCache[r.blobKey]; return _srcOf(r);};
// hydrate pending items in the form
const _hydrate=hydrate;
hydrate=root=>{_hydrate(root); $$('.ri',root).forEach(el=>{if(el.dataset.done) return; const rid=$('[data-rmref]',el).dataset.rmref; const r=pendingRefs.find(p=>p.id===rid)||S.refs.find(x=>x.id===rid); if(!r||(r.kind==='url'&&kindOfUrl(r.src)==='link')) return; el.dataset.done='1'; mountMedia(el,r,{});});};

function refSheet(id){
  const s=shot(id); pendingRefs=[];
  showLayer(`<div class="sheet form" id="refForm"><div class="sheet-h"><h3>레퍼런스 추가</h3><button class="x" data-close aria-label="닫기">×</button></div>
    <p class="hint" style="margin-top:-8px">${esc(s.title)}</p>
    <div class="reflist" data-reflist>${refsOf(id).map(refItem).join('')}</div>${refAdder()}
    <div class="sheet-f"><button class="btn solid" data-close>완료</button></div></div>`);
  const f=$('#refForm'); hydrate(f);
  const commit=r=>{r.id=uid('ref'); r.shotId=id; r.projectId=P.id; r.createdAt=new Date().toISOString(); S.refs.push(r); save(); $('[data-reflist]',f).insertAdjacentHTML('beforeend',refItem(r)); hydrate(f);};
  layer.onclick=e=>{if(e.target===layer){closeLayer(); layer.onclick=null; renderAll();}};
  f.addEventListener('click',e=>{
    if(e.target.closest('[data-close]')){closeLayer(); layer.onclick=null; renderAll();}
    const rm=e.target.closest('[data-rmref]'); if(rm){S.refs=S.refs.filter(r=>r.id!==rm.dataset.rmref); save(); rm.parentElement.remove();}
    if(e.target.closest('[data-addurl]')){const inp=$('[data-url]',f); const u=inp.value.trim(); if(!/^https?:\/\//.test(u)){toast('http로 시작하는 주소를 넣어 주세요'); return;} commit({kind:'url',src:u,label:'영상 링크'}); inp.value='';}
  });
  f.addEventListener('change',async e=>{if(e.target.matches('[data-files]')){for(const file of e.target.files){const r=await fileRef(file); if(r) commit(r);} e.target.value='';}});
}

function lightbox(id,refId){
  const s=shot(id); const rs=refsOf(id); if(!rs.length) return refSheet(id);
  let i=Math.max(0,rs.findIndex(r=>r.id===refId));
  const draw=()=>{const r=rs[i]; const k=renderKind(r);
    showLayer(`<div class="lightbox" role="dialog" aria-label="레퍼런스">
      <div class="lb-h"><span class="c">${rs.length>1?(i+1)+' / '+rs.length:''} ${esc(r.label||'')}</span><button class="x" data-close aria-label="닫기">×</button></div>
      <div class="lb-m" id="lbm">${k==='link'?`<div class="lnkbox"><p>외부 영상 링크입니다.</p><a href="${esc(r.src)}" target="_blank" rel="noopener">영상 열기</a></div>`:''}
        ${rs.length>1?'<button class="nav p" data-nav="-1" aria-label="이전"></button><button class="nav n" data-nav="1" aria-label="다음"></button>':''}</div>
      <div class="lb-i"><div class="tags">${useTag(s.usage)}${whoTag(s)}${reqTags(s)}</div><h4>${esc(s.title)}</h4>
        <dl class="f">${[['방법',methodOf(s)],['구도',s.angle],['촬영',s.content],['주의',s.caution,'w']].filter(x=>x[1]).map(([k,v,c])=>`<dt>${k}</dt><dd class="${c||''}">${esc(v)}</dd>`).join('')}</dl></div>
    </div>`,'full');
    if(k!=='link') mountMedia($('#lbm'),r,{full:true});
  };
  draw();
  layer.onclick=e=>{if(e.target.closest('[data-close]')){closeLayer(); layer.onclick=null; return;} const n=e.target.closest('[data-nav]'); if(n){i=(i+ +n.dataset.nav+rs.length)%rs.length; draw();}};
}

function reqView(){
  const groups=P.steps.map(st=>{const l=shotsOf(st.id).filter(s=>s.required&&visible(s)); if(!l.length) return '';
    const left=l.filter(s=>s.status!=='done').length;
    return `<div class="rv-g"><h3><span class="eyebrow">${esc(st.phase==='today'?(st.no+'. '+(st.place||'')):(st.when||''))}</span>${esc(st.name)}<span class="who-t">${left?left+'개 남음':'완료'}</span></h3><div class="reqs">${l.map(card).join('')}</div></div>`;}).join('');
  const total=S.shots.filter(s=>s.required&&visible(s)); const left=total.filter(s=>s.status!=='done').length;
  rvBox.innerHTML=`<div class="rv-h"><div class="wrap"><div><h2>필수 컷</h2><div class="c">${left}개 남음</div></div><button class="x" data-act="rvclose" aria-label="닫기">×</button></div></div>
    <div class="wrap" style="padding-bottom:60px">${groups||'<p class="ok">필수 컷이 없습니다.</p>'}</div>`;
  rvBox.hidden=false; rvBox.scrollTop=0; document.body.style.overflow='hidden'; hydrate(rvBox);
}
function closeReqView(){$$('video',rvBox).forEach(v=>v.pause()); rvBox.hidden=true; rvBox.innerHTML=''; document.body.style.overflow=''; renderAll();}
function trashView(){
  showLayer(`<div class="sheet"><div class="sheet-h"><h3>삭제한 컷</h3><button class="x" data-close aria-label="닫기">×</button></div>
    ${S.trash.length?`<ul class="mlist">${S.trash.map(t=>`<li><button data-restore="${t.id}"><span>${esc(t.shot.title)} <span class="who-t">· ${esc((STEP[t.shot.stepId]||{}).name||'')}</span></span><span class="s">복구</span></button></li>`).join('')}</ul>`:'<p class="ok">삭제한 컷이 없습니다.</p>'}</div>`);
  layer.onclick=e=>{if(e.target===layer||e.target.closest('[data-close]')){closeLayer(); layer.onclick=null; return;} const r=e.target.closest('[data-restore]'); if(r){closeLayer(); layer.onclick=null; restore(r.dataset.restore);}};
}

/* ---------- drag & drop ordering ---------- */
let sortables=[];
function initSortable(){
  sortables.forEach(s=>s.destroy()); sortables=[];
  if(!window.Sortable){toast('순서 편집 도구를 불러오지 못했습니다. 컷의 수정에서 단계를 바꿀 수 있습니다'); return;}
  $$('.elist').forEach(el=>sortables.push(Sortable.create(el,{group:'cuts',handle:'.handle',animation:150,scroll:true,bubbleScroll:true,scrollSensitivity:90,forceFallback:true,fallbackTolerance:3,
    onEnd:()=>{ $$('.elist').forEach(list=>{const st=list.dataset.step; $$('.erow',list).forEach((r,i)=>{const s=shot(r.dataset.id); if(s){s.stepId=st; s.sort=(i+1)*10;}});}); save(); renderTop(); renderMissing();}})));
}

/* ---------- toast ---------- */
let toastT;
function toast(msg,action){const t=$('#toast'); t.innerHTML=`<span>${esc(msg)}</span>${action?`<button>${esc(action.label)}</button>`:''}`; t.hidden=false;
  if(action) $('button',t).onclick=()=>{t.hidden=true; action.fn();};
  clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true,action?7000:2200);}

/* ---------- backup ---------- */
function exportJSON(){
  const data={app:'moliv-content-planner',schema:2,exportedAt:new Date().toISOString(),projectId:P.id,state:S};
  const b=new Blob([JSON.stringify(data,null,1)],{type:'application/json'}); const a=document.createElement('a');
  a.href=URL.createObjectURL(b); a.download=`moliv-${P.id}-${new Date().toISOString().slice(0,16).replace(/[:T]/g,'')}.json`; document.body.appendChild(a); a.click(); a.remove();
  toast('백업 파일을 저장했습니다. 직접 올린 레퍼런스 파일은 포함되지 않습니다');
}
$('#importFile').addEventListener('change',async e=>{const f=e.target.files[0]; e.target.value=''; if(!f) return;
  try{const d=JSON.parse(await f.text()); if(!d.state||d.state.schema!==2||d.projectId!==P.id) throw 0;
    confirmBox('백업을 가져올까요?','이 휴대폰의 체크, 메모, 컷 편집 내용이 백업 내용으로 바뀝니다.','가져오기',()=>{S=d.state; S.projectId=P.id; save(); renderAll(); renderCrew(); toast('백업을 가져왔습니다');});
  }catch(err){toast('이 프로젝트의 백업 파일이 아닙니다');}
});

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-act]'); if(!a||(!layer.hidden&&!layer.contains(a))) return;
  const host=a.closest('[data-id]'); const id=host&&host.dataset.id; const act=a.dataset.act;
  if(layer.contains(a)&&!['cycle','menu','zoom','addref'].includes(act)) return;
  switch(act){
    case 'cycle': setStatus(id,NEXT[shot(id).status]); break;
    case 'toggle': { const k='c:'+id; const d=$('.cut-d',host); if(open.has(k)){open.delete(k); d.hidden=true; d.innerHTML='';} else {open.add(k); d.innerHTML=detail(shot(id)); d.hidden=false; hydrate(d);} a.setAttribute('aria-expanded',open.has(k)); break; }
    case 'menu': menu(id); break;
    case 'zoom': lightbox(id,a.dataset.ref); break;
    case 'addref': refSheet(id); break;
    case 'step': { const st=a.closest('.step').dataset.step; if(editMode) break; const k='s:'+st; open.has(k)?open.delete(k):open.add(k); renderSteps(); if(open.has(k)) scrollTo$('#step-'+st); break; }
    case 'gostep': openStep(a.dataset.step,true); break;
    case 'reqview': reqView(); break;
    case 'rvclose': closeReqView(); break;
    case 'editmode': editMode=true; renderSteps(); scrollTo$('#steps'); break;
    case 'editdone': editMode=false; sortables.forEach(s=>s.destroy()); sortables=[]; renderAll(); toast('순서를 저장했습니다'); break;
    case 'add': editSheet(null,{step:a.dataset.step}); break;
    case 'jump': jump(id); break;
    case 'trash': trashView(); break;
    case 'export': exportJSON(); break;
    case 'import': $('#importFile').click(); break;
    case 'reset': confirmBox('처음 기획으로 되돌릴까요?','체크, 메모, 추가하거나 수정한 컷이 모두 처음 기획 상태로 돌아갑니다. 먼저 백업 내보내기를 권장합니다.','되돌리기',()=>{S=adapter.reset(P); open=new Set(['s:'+currentStep()]); renderCrew(); renderAll(); toast('처음 기획으로 되돌렸습니다');}); break;
    case 'outref': { const box=$(`[data-outrefs="${a.dataset.out}"]`); const o=P.outputs.find(x=>x.id===a.dataset.out);
      if(box.hidden&&!box.dataset.done){box.dataset.done='1'; box.innerHTML=o.refs.map(r=>`<figure>${r.type==='video'?`<video src="${esc(r.src)}" poster="${esc(r.poster||'')}" controls playsinline preload="none"></video>`:`<img src="${esc(r.src)}" alt="${esc(r.title)}" loading="lazy">`}<figcaption>${esc(r.title)}</figcaption></figure>`).join('');}
      box.hidden=!box.hidden; a.setAttribute('aria-expanded',String(!box.hidden)); a.textContent=box.hidden?`레퍼런스 ${o.refs.length}개 보기`:'레퍼런스 접기'; break; }
  }
});
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.dataset.crew){const c=S.crew.find(x=>x.id===t.dataset.crew)||(S.crew.push({id:t.dataset.crew,name:''}),S.crew[S.crew.length-1]); c.name=t.value; save();}
  if(t.dataset.note){let n=S.notes.find(x=>x.stepId===t.dataset.note); if(!n){n={id:'note-'+t.dataset.note,stepId:t.dataset.note,text:''}; S.notes.push(n);} n.text=t.value; save();}
});
document.addEventListener('change',e=>{if(e.target.dataset.crew){renderSteps(); renderMissing();}});

/* keep the screen awake on set */
let lock=null; async function wake(){try{if('wakeLock' in navigator&&!lock&&document.visibilityState==='visible'){lock=await navigator.wakeLock.request('screen'); lock.addEventListener('release',()=>lock=null);}}catch(e){}}
document.addEventListener('pointerdown',wake,{once:true}); document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible') wake();});

/* ---------- boot ---------- */
document.title=`MOLIV ${P.id} 촬영 콜시트`;
open.add('s:'+currentStep());
renderHero(); renderCrew(); renderAll();
})();
