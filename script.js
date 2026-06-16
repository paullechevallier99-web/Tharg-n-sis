function s(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function togglePanel(){
  const p=document.getElementById('epanel');
  p.style.display=p.style.display==='block'?'none':'block';
}
function g(id){return document.getElementById(id)}
function v(id){return g(id)?g(id).value:''}
function applyAll(){
  const name=v('e-name');
  g('nav-name').textContent=name;
  g('h-name').textContent=name;
  g('footer-name').textContent=name;
  g('mairie-title').textContent='La Mairie de '+name;
  g('pop-title').textContent='Qui sont les '+name+'iens ?';
  g('h-slogan').textContent=v('e-slogan');
  g('h-desc').textContent=v('e-desc');
  g('footer-tagline').textContent=v('e-footer-tagline');
  const tags=v('e-tags').split(',').map(t=>t.trim()).filter(Boolean);
  g('h-tags').innerHTML=tags.map(t=>`<span class="htag">${t}</span>`).join('');
  const c1=v('e-c1'),c2=v('e-c2');
  g('hero-bg').style.background=`linear-gradient(135deg,${c1} 0%,${c1}bb 40%,${c2} 100%)`;
  g('swatch1').style.background=c1;
  g('swatch2').style.background=c2;
  ['s1','s2','s3','s4','s5'].forEach(k=>{g(k+'v').textContent=v('e-'+k+'v');g(k+'l').textContent=v('e-'+k+'l')});
  g('id-title').textContent=v('e-id-title');
  g('id-text').textContent=v('e-id-text');
  g('style-badge').textContent=v('e-style');
  g('benchmark-txt').textContent=v('e-bench');
  g('jumelage-txt').textContent=v('e-jumelage');
  const tgts=v('e-targets').split(',').map(t=>t.trim()).filter(Boolean);
  g('targets').innerHTML=tgts.map(t=>`<span class="chip">${t}</span>`).join('');
  g('bank-name').textContent=v('e-bank-name');
  g('bank-desc').textContent=v('e-bank-desc');
  g('assur-name').textContent=v('e-assur-name');
  g('assur-desc').textContent=v('e-assur-desc');
  g('immo-name').textContent=v('e-immo-name');
  g('immo-desc').textContent=v('e-immo-desc');
  g('super-name').textContent=v('e-super-name');
  g('super-desc').textContent=v('e-super-desc');
  g('maire-name').textContent=v('e-maire-name');
  g('maire-type').textContent=v('e-maire-type');
  g('maire-loc').textContent=v('e-maire-loc');
  g('maire-innov').textContent=v('e-maire-innov');
  g('maire-partners').textContent=v('e-maire-partners');
  g('persona-name').textContent=v('e-persona-name');
  g('persona-desc').textContent=v('e-persona-desc');
  const ptags=v('e-persona-tags').split(',').map(t=>t.trim()).filter(Boolean);
  g('persona-tags').innerHTML=ptags.map(t=>`<span class="persona-tag">${t}</span>`).join('');
  g('com-site').textContent=v('e-com-site');
  g('com-social').textContent=v('e-com-social');
  g('com-ambass').textContent=v('e-com-ambass');
  g('com-event').textContent=v('e-com-event');
  document.getElementById('epanel').style.display='none';
}