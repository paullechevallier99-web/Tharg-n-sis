// Navigation scroll fluide
function s(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'})
}

// Budget
const total = 2000000000;
const used = total - 34000000;
const percent = (used / total) * 100;

function updateBudget(total, remaining){
  const used = total - remaining;
  const percent = (used / total) * 100;

  document.getElementById("budget-fill").style.width = percent + "%";
  document.getElementById("budget-percent").textContent = percent.toFixed(1) + "% utilisé";
  document.getElementById("budget-remaining").textContent = "Restant: $" + (remaining / 1000000).toFixed(0) + "M";
  document.getElementById("budget-display").textContent = "$" + (used / 1000000).toFixed(0) + " M";
}

// Initialiser le budget au chargement
updateBudget(2000000000, 34000000);

// Afficher/Masquer les cartes 2D et 3D
function show2D(){
  document.getElementById("map-2d").style.display = "block";
  document.getElementById("map-3d").style.display = "none";
  console.log("Vue 2D activée");
}

function show3D(){
  document.getElementById("map-2d").style.display = "none";
  document.getElementById("map-3d").style.display = "block";
  console.log("Vue 3D activée");
}

// Ouvrir et fermer la modal de la carte
function openMap(){
  const modal = document.getElementById("map-modal");
  modal.style.display = "flex";
  // Afficher la 2D par défaut
  show2D();
  console.log("Modal carte ouverte");
}

function closeMap(){
  const modal = document.getElementById("map-modal");
  modal.style.display = "none";
  console.log("Modal carte fermée");
}

// Fermer la modal en cliquant en dehors
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("map-modal");
  
  if(modal) {
    modal.addEventListener('click', function(event) {
      if(event.target === modal) {
        closeMap();
      }
    });
  }
  
  // Effet de scroll sur le bouton "EXPLORER"
  const heroScroll = document.querySelector('.hero-scroll');
  if(heroScroll) {
    heroScroll.addEventListener('click', function() {
      s('identity');
    });
    heroScroll.style.cursor = 'pointer';
  }
  
  // Animation du budget au chargement
  setTimeout(() => {
    updateBudget(2000000000, 34000000);
  }, 500);
});

// Support toucher pour le scroll
document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape') {
    closeMap();
  }
});



