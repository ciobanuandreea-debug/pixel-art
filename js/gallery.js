/* =========================
   SIMPLE LIGHTBOX GALLERY
========================= */

const images = document.querySelectorAll(".portfolio-img, .img-fluid");

let currentIndex = 0;

/* Creăm lightbox-ul */
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="closeBtn">&times;</span>
    <img id="lightboxImg" src="">
    <div id="prev">&#10094;</div>
    <div id="next">&#10095;</div>
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

/* =========================
   DESCHIDERE LIGHTBOX
========================= */

images.forEach((img, index) => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

/* =========================
   ÎNCHIDERE LIGHTBOX
========================= */

function closeLightbox() {
    lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

/* =========================
   NAVIGARE NEXT / PREV
========================= */

function showImage(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
}

nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
});