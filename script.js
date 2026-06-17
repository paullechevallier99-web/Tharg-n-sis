function s(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}

const total = 2000000000;
const used = total - 34000000;

const percent = (used / total) * 100;

function updateBudget(total, remaining){
  const used = total - remaining;
  const percent = (used / total) * 100;

  document.getElementById("budget-fill").style.width = percent + "%";
  document.getElementById("budget-percent").textContent =
    percent.toFixed(1) + "% utilisé";
}

updateBudget(2000000000, 34000000);

function toggleMap(){
  document.getElementById("map-modal").style.display = "block";
  show2D();
}

function toggleMap3D(){
  document.getElementById("map-modal").style.display = "block";
  show3D();
}

function closeMap(){
  document.getElementById("map-modal").style.display = "none";
}
