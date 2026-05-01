/* ============================================
   AR Coffee Menu - Main Script
   Mengelola interaksi AR: rotasi, zoom, ganti menu,
   info card, dan status marker.
   ============================================ */

// ---------- Data Menu Kopi ----------
var coffeeMenus = [
  { id:1, name:"Espresso", price:"Rp 25.000", description:"Kopi hitam pekat dengan crema tebal, diseduh dengan tekanan tinggi. Rasa bold dan intens.", category:"Classic", liquidColor:"#2b130d", cupScale:"0.35 0.35 0.35" },
  { id:2, name:"Cappuccino", price:"Rp 32.000", description:"Perpaduan espresso, steamed milk, dan foam susu yang lembut. Cocok untuk pecinta kopi creamy.", category:"Milk Based", liquidColor:"#9a6a43", cupScale:"0.35 0.35 0.35" },
  { id:3, name:"Caramel Latte", price:"Rp 38.000", description:"Latte manis dengan sirup karamel premium dan art foam. Minuman favorit sepanjang masa.", category:"Signature", liquidColor:"#b87949", cupScale:"0.35 0.35 0.35" },
  { id:4, name:"Matcha Latte", price:"Rp 35.000", description:"Teh hijau matcha Jepang premium dicampur susu segar. Segar, creamy, dan kaya antioksidan.", category:"Non-Coffee", liquidColor:"#6f8f45", cupScale:"0.35 0.35 0.35" },
  { id:5, name:"Cold Brew", price:"Rp 30.000", description:"Kopi yang diseduh dingin selama 18 jam. Rasa smooth, rendah asam, dan menyegarkan.", category:"Iced", liquidColor:"#24120d", cupScale:"0.35 0.35 0.35" }
];

// ---------- State ----------
var currentMenuIndex = 0;
var isRotating = false;
var isInfoVisible = true;
var markerVisible = false;
var currentScale = 0.35;
var MIN_SCALE = 0.2;
var MAX_SCALE = 0.6;
var SCALE_STEP = 0.05;

var BASE_CUP_POSITION = "0 0.1 0";
var BASE_CUP_ROTATION = "0 0 0";
var SPIN_CUP_ROTATION = "0 360 0";

// ---------- DOM Elements ----------
var menuCard = document.getElementById("menu-card");
var menuName = document.getElementById("menu-name");
var menuPrice = document.getElementById("menu-price");
var menuDesc = document.getElementById("menu-desc");
var menuBadge = document.getElementById("menu-badge");
var btnRotate = document.getElementById("btn-rotate");
var btnNext = document.getElementById("btn-next");
var btnInfo = document.getElementById("btn-info");
var btnZoomIn = document.getElementById("btn-zoom-in");
var btnZoomOut = document.getElementById("btn-zoom-out");
var markerHint = document.getElementById("marker-hint");
var statusDot = document.getElementById("status-dot");
var statusText = document.getElementById("status-text");
var counterText = document.getElementById("counter-text");

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", function() {
  updateMenuDisplay();
  setupMarkerEvents();
  setupButtonEvents();
  updateCounter();
});

// ---------- Update Menu Display ----------
function updateMenuDisplay() {
  var menu = coffeeMenus[currentMenuIndex];
  if (menuName) menuName.textContent = menu.name;
  if (menuPrice) menuPrice.textContent = menu.price;
  if (menuDesc) menuDesc.textContent = menu.description;
  if (menuBadge) menuBadge.textContent = menu.category;
  updateCoffeeModel(menu);
  updateCounter();
}

function updateCounter() {
  if (counterText) {
    counterText.textContent = (currentMenuIndex + 1) + "/" + coffeeMenus.length;
  }
}

// ---------- Update 3D Model ----------
function updateCoffeeModel(menu) {
  var cupGroup = document.getElementById("cup-group");
  var coffeeLiquid = document.getElementById("coffee-liquid");
  var labelName = document.getElementById("label-name");
  var labelPrice = document.getElementById("label-price");

  if (cupGroup) {
    cupGroup.setAttribute("position", BASE_CUP_POSITION);
    var s = currentScale;
    cupGroup.setAttribute("scale", s + " " + s + " " + s);
    if (!isRotating) {
      cupGroup.setAttribute("rotation", BASE_CUP_ROTATION);
    }
  }
  if (coffeeLiquid) coffeeLiquid.setAttribute("color", menu.liquidColor);
  if (labelName) labelName.setAttribute("value", menu.name);
  if (labelPrice) labelPrice.setAttribute("value", menu.price);
}

// ---------- Marker Events ----------
function setupMarkerEvents() {
  var marker = document.getElementById("ar-marker");
  if (!marker) return;

  marker.addEventListener("markerFound", function() {
    markerVisible = true;
    updateMarkerStatus(true);
    if (markerHint) markerHint.classList.add("hidden");
  });

  marker.addEventListener("markerLost", function() {
    markerVisible = false;
    updateMarkerStatus(false);
    if (markerHint) markerHint.classList.remove("hidden");
  });
}

function updateMarkerStatus(found) {
  if (statusDot) statusDot.classList.toggle("active", found);
  if (statusText) statusText.textContent = found ? "Marker Terdeteksi" : "Cari Marker...";
}

// ---------- Button Events ----------
function setupButtonEvents() {
  if (btnRotate) btnRotate.addEventListener("click", toggleRotation);
  if (btnNext) btnNext.addEventListener("click", nextMenu);
  if (btnInfo) btnInfo.addEventListener("click", toggleInfo);
  if (btnZoomIn) btnZoomIn.addEventListener("click", zoomIn);
  if (btnZoomOut) btnZoomOut.addEventListener("click", zoomOut);
}

// ---------- Rotation ----------
function toggleRotation() {
  isRotating = !isRotating;
  var cupGroup = document.getElementById("cup-group");
  if (cupGroup) {
    if (isRotating) {
      cupGroup.setAttribute("rotation", BASE_CUP_ROTATION);
      cupGroup.setAttribute("animation__spin", {
        property: "rotation", from: BASE_CUP_ROTATION, to: SPIN_CUP_ROTATION,
        loop: true, dur: 4000, easing: "linear"
      });
    } else {
      cupGroup.removeAttribute("animation__spin");
      cupGroup.setAttribute("rotation", BASE_CUP_ROTATION);
    }
  }
  if (btnRotate) {
    btnRotate.classList.toggle("active", isRotating);
    var label = btnRotate.querySelector(".btn-label");
    if (label) label.textContent = isRotating ? "Stop" : "Rotate";
  }
}

// ---------- Zoom ----------
function zoomIn() {
  if (currentScale < MAX_SCALE) {
    currentScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
    applyScale();
  }
}

function zoomOut() {
  if (currentScale > MIN_SCALE) {
    currentScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
    applyScale();
  }
}

function applyScale() {
  var cupGroup = document.getElementById("cup-group");
  if (cupGroup) {
    var s = currentScale;
    cupGroup.setAttribute("scale", s + " " + s + " " + s);
  }
}

// ---------- Next Menu ----------
function nextMenu() {
  currentMenuIndex = (currentMenuIndex + 1) % coffeeMenus.length;
  if (menuCard) {
    menuCard.style.transform = "translateY(8px) scale(0.97)";
    menuCard.style.opacity = "0.5";
    setTimeout(function() {
      updateMenuDisplay();
      menuCard.style.transform = "translateY(0) scale(1)";
      menuCard.style.opacity = "1";
    }, 180);
  } else {
    updateMenuDisplay();
  }
  if (isRotating) toggleRotation();
}

// ---------- Toggle Info ----------
function toggleInfo() {
  isInfoVisible = !isInfoVisible;
  if (menuCard) menuCard.classList.toggle("hidden", !isInfoVisible);
  if (btnInfo) {
    var label = btnInfo.querySelector(".btn-label");
    if (label) label.textContent = isInfoVisible ? "Info" : "Show";
  }
}
