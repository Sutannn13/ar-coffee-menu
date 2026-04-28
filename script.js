/* ============================================
   AR Coffee Menu - Main Script
   Mengelola interaksi AR: rotasi, ganti menu,
   info card, dan status marker.
   ============================================ */

// ---------- Data Menu Kopi ----------
const coffeeMenus = [
  {
    id: 1,
    name: "Espresso",
    price: "Rp 25.000",
    description: "Kopi hitam pekat dengan crema tebal, diseduh dengan tekanan tinggi. Rasa bold dan intens.",
    category: "Classic",
    color: "#3e2723",       // warna gelap kopi
    lidColor: "#5d4037",
    cupScale: "1 1 1",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "Rp 32.000",
    description: "Perpaduan espresso, steamed milk, dan foam susu yang lembut. Cocok untuk pecinta kopi creamy.",
    category: "Milk Based",
    color: "#795548",
    lidColor: "#efebe9",
    cupScale: "1.1 1.1 1.1",
  },
  {
    id: 3,
    name: "Caramel Latte",
    price: "Rp 38.000",
    description: "Latte manis dengan sirup karamel premium dan art foam. Minuman favorit sepanjang masa.",
    category: "Signature",
    color: "#a1887f",
    lidColor: "#d7ccc8",
    cupScale: "1.15 1.2 1.15",
  },
  {
    id: 4,
    name: "Matcha Latte",
    price: "Rp 35.000",
    description: "Teh hijau matcha Jepang premium dicampur susu segar. Segar, creamy, dan kaya antioksidan.",
    category: "Non-Coffee",
    color: "#558b2f",
    lidColor: "#c5e1a5",
    cupScale: "1.1 1.15 1.1",
  },
  {
    id: 5,
    name: "Cold Brew",
    price: "Rp 30.000",
    description: "Kopi yang diseduh dingin selama 18 jam. Rasa smooth, rendah asam, dan menyegarkan.",
    category: "Iced",
    color: "#4e342e",
    lidColor: "#8d6e63",
    cupScale: "1 1.3 1",
  },
];

// ---------- State ----------
let currentMenuIndex = 0;
let isRotating = false;
let isInfoVisible = true;
let markerVisible = false;

// ---------- DOM Elements ----------
const menuCard = document.getElementById("menu-card");
const menuName = document.getElementById("menu-name");
const menuPrice = document.getElementById("menu-price");
const menuDesc = document.getElementById("menu-desc");
const menuBadge = document.getElementById("menu-badge");
const btnRotate = document.getElementById("btn-rotate");
const btnNext = document.getElementById("btn-next");
const btnInfo = document.getElementById("btn-info");
const markerHint = document.getElementById("marker-hint");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");

// ---------- Inisialisasi ----------
document.addEventListener("DOMContentLoaded", () => {
  updateMenuDisplay();
  setupMarkerEvents();
  setupButtonEvents();
});

// ---------- Update Tampilan Menu ----------
function updateMenuDisplay() {
  const menu = coffeeMenus[currentMenuIndex];

  if (menuName) menuName.textContent = menu.name;
  if (menuPrice) menuPrice.textContent = menu.price;
  if (menuDesc) menuDesc.textContent = menu.description;
  if (menuBadge) menuBadge.textContent = menu.category;

  // Update 3D model
  updateCoffeeModel(menu);
}

// ---------- Update Model 3D Kopi ----------
function updateCoffeeModel(menu) {
  const cupBody = document.getElementById("cup-body-3d");
  const cupLid = document.getElementById("cup-lid-3d");
  const cupGroup = document.getElementById("cup-group");
  const labelName = document.getElementById("label-name");
  const labelPrice = document.getElementById("label-price");

  if (cupBody) {
    cupBody.setAttribute("color", menu.color);
  }

  if (cupLid) {
    cupLid.setAttribute("color", menu.lidColor);
  }

  if (cupGroup) {
    cupGroup.setAttribute("scale", menu.cupScale);
  }

  if (labelName) {
    labelName.setAttribute("value", menu.name);
  }

  if (labelPrice) {
    labelPrice.setAttribute("value", menu.price);
  }
}

// ---------- Marker Events ----------
function setupMarkerEvents() {
  const marker = document.getElementById("ar-marker");

  if (!marker) return;

  marker.addEventListener("markerFound", () => {
    markerVisible = true;
    updateMarkerStatus(true);
    if (markerHint) markerHint.classList.add("hidden");
  });

  marker.addEventListener("markerLost", () => {
    markerVisible = false;
    updateMarkerStatus(false);
    if (markerHint) markerHint.classList.remove("hidden");
  });
}

function updateMarkerStatus(found) {
  if (statusDot) {
    statusDot.classList.toggle("active", found);
  }
  if (statusText) {
    statusText.textContent = found ? "Marker Terdeteksi" : "Cari Marker...";
  }
}

// ---------- Button Events ----------
function setupButtonEvents() {
  // Tombol Rotate
  if (btnRotate) {
    btnRotate.addEventListener("click", toggleRotation);
  }

  // Tombol Next Menu
  if (btnNext) {
    btnNext.addEventListener("click", nextMenu);
  }

  // Tombol Info
  if (btnInfo) {
    btnInfo.addEventListener("click", toggleInfo);
  }
}

// ---------- Toggle Rotasi ----------
function toggleRotation() {
  isRotating = !isRotating;

  const cupGroup = document.getElementById("cup-group");
  if (cupGroup) {
    if (isRotating) {
      cupGroup.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: true,
        dur: 4000,
        easing: "linear",
      });
    } else {
      cupGroup.removeAttribute("animation");
    }
  }

  if (btnRotate) {
    btnRotate.classList.toggle("active", isRotating);
    const label = btnRotate.querySelector(".btn-label");
    if (label) {
      label.textContent = isRotating ? "Stop" : "Rotate";
    }
  }
}

// ---------- Next Menu ----------
function nextMenu() {
  currentMenuIndex = (currentMenuIndex + 1) % coffeeMenus.length;

  // Animasi transisi pada card
  if (menuCard) {
    menuCard.style.transform = "translateY(10px) scale(0.96)";
    menuCard.style.opacity = "0.5";

    setTimeout(() => {
      updateMenuDisplay();
      menuCard.style.transform = "translateY(0) scale(1)";
      menuCard.style.opacity = "1";
    }, 200);
  } else {
    updateMenuDisplay();
  }

  // Reset rotasi saat ganti menu
  if (isRotating) {
    toggleRotation();
  }
}

// ---------- Toggle Info Card ----------
function toggleInfo() {
  isInfoVisible = !isInfoVisible;

  if (menuCard) {
    menuCard.classList.toggle("hidden", !isInfoVisible);
  }

  if (btnInfo) {
    const label = btnInfo.querySelector(".btn-label");
    if (label) {
      label.textContent = isInfoVisible ? "Info" : "Show";
    }
  }
}
