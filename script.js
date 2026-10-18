
/*
  PEJUANG SANGU BEAR NEW GENERATION
  Ubah nomor WhatsApp di bagian KONFIGURASI.
*/

const CONFIG = {
  // Ganti dengan nomor WhatsApp resmi.
  // Format: kode negara + nomor, tanpa +, spasi, atau tanda -.
  whatsapp: "6281572725258"
};

// MENU NAVIGASI HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Tutup menu setelah salah satu tautan dipilih.
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.textContent = "☰";
  });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();

// WHATSAPP
function setupWhatsApp() {
  const number = CONFIG.whatsapp.replace(/\D/g, "");

  const message =
    "Halo Pejuang Sangu Bear New Generation, " +
    "gw ingin mengetahui informasi tentang organisasi.";

  const whatsappURL =
    "https://wa.me/" + number +
    "?text=" + encodeURIComponent(message);

  document.getElementById("whatsappLink").href = whatsappURL;
  document.getElementById("floatingWA").href = whatsappURL;
}

setupWhatsApp();

// GALERI
const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxTitle.textContent =
      item.dataset.title || "Kegiatan Organisasi";

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function hideLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}

closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideLightbox();
  }
});
