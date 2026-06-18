/* =========================
   FADE-IN ON SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".service-card, .price-card, .section-title, img");
hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* =========================
   COUNTER ANIMATION (ABOUT PAGE)
========================= */

const counters = document.querySelectorAll(".counter");

function runCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

/* Pornim counter-ele doar dacă există în pagină */
if (counters.length > 0) {
    runCounters();
}

/* =========================
   SCROLL REVEAL CLASSES
========================= */

/* Adaugă stiluri dinamice */
const style = document.createElement("style");

style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}
`;

document.head.appendChild(style);



window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero div");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(20px)";

        setTimeout(() => {
            heroText.style.transition = "1s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 300);
    }
});