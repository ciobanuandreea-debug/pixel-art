
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }

    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {
            navbar.style.padding = "8px 0";
            navbar.style.transition = "0.3s ease";
            navbar.style.background = "rgba(0,0,0,0.95)";
        } else {
            navbar.style.padding = "15px 0";
            navbar.style.background = "rgba(0,0,0,0.85)";
        }

    });

}


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

    });

});
function openModal(packageName) {
    document.getElementById("orderModal").style.display = "flex";
    document.getElementById("selectedPackage").innerText = "Pachet: " + packageName;
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("orderModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}