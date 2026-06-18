// Navigation
function s(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Carte modal
function show2D(){
  document.getElementById("map-2d").style.display = "block";
  document.getElementById("map-3d").style.display = "none";
}
function show3D(){
  document.getElementById("map-2d").style.display = "none";
  document.getElementById("map-3d").style.display = "block";
}
function openMap(){
  document.getElementById("map-modal").style.display = "flex";
  show2D();
}
function closeMap(){
  document.getElementById("map-modal").style.display = "none";
}

// Brochure modal
function openBrochure(){
  document.getElementById("brochure-modal").style.display = "flex";
}
function closeBrochure(){
  document.getElementById("brochure-modal").style.display = "none";
}

// Affiche modal
function openAffiche(){
  document.getElementById("affiche-modal").style.display = "flex";
}
function closeAffiche(){
  document.getElementById("affiche-modal").style.display = "none";
}

// Carrousel — déclaré globalement, assigné après DOMContentLoaded
function slideRS(dir){
  if(window._rsGo) window._rsGo(dir);
}

document.addEventListener('DOMContentLoaded', function(){

  // Budget
  function updateBudget(total, remaining){
    const used = total - remaining;
    const percent = (used / total) * 100;
    const fill = document.getElementById("budget-fill");
    const pct  = document.getElementById("budget-percent");
    const rem  = document.getElementById("budget-remaining");
    const disp = document.getElementById("budget-display");
    if(fill) fill.style.width = percent + "%";
    if(pct)  pct.textContent  = percent.toFixed(1) + "% utilisé";
    if(rem)  rem.textContent  = "Restant: $" + (remaining / 1000000).toFixed(0) + "M";
    if(disp) disp.textContent = "$" + (used / 1000000).toFixed(0) + " M";
  }
  setTimeout(() => updateBudget(2000000000, 12000000), 500);

  // Hero scroll
  const heroScroll = document.querySelector('.hero-scroll');
  if(heroScroll){
    heroScroll.addEventListener('click', () => s('identity'));
    heroScroll.style.cursor = 'pointer';
  }

  // Fermer modals en cliquant dehors + Échap
  ['map-modal','brochure-modal','affiche-modal'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', e => { if(e.target === el) el.style.display = 'none'; });
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      closeMap(); closeBrochure(); closeAffiche();
    }
  });

  // Carrousel RS
  const track = document.getElementById('rs-track');
  if(track){
    const slides = track.querySelectorAll('.rs-slide');
    const dotsContainer = document.getElementById('rs-dots');
    const max = slides.length - 3;
    let current = 0;

    for(let i = 0; i <= max; i++){
      const d = document.createElement('button');
      d.className = 'rs-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goRS(i));
      dotsContainer.appendChild(d);
    }

    function getSlideWidth(){
      return slides[0].getBoundingClientRect().width + 16;
    }

    function goRS(n){
      current = Math.max(0, Math.min(n, max));
      track.style.transform = 'translateX(-' + (current * getSlideWidth()) + 'px)';
      dotsContainer.querySelectorAll('.rs-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    window._rsGo = function(dir){ goRS(current + dir); };
    window.addEventListener('resize', () => goRS(current));
  }

});
