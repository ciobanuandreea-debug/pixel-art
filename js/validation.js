/* =========================
   CONTACT FORM VALIDATION
========================= */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // inputuri
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const event = document.getElementById("event").value;
        const message = document.getElementById("message").value.trim();

        let errors = [];

        /* =========================
           VALIDARE NUME
        ========================= */
        if (name.length < 3) {
            errors.push("Numele trebuie să aibă minim 3 caractere.");
        }

        /* =========================
           VALIDARE EMAIL
        ========================= */
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errors.push("Email invalid.");
        }

        /* =========================
           VALIDARE TELEFON
        ========================= */
        const phonePattern = /^[0-9+\s]{6,15}$/;

        if (!phonePattern.test(phone)) {
            errors.push("Număr de telefon invalid.");
        }

        /* =========================
           VALIDARE EVENIMENT
        ========================= */
        if (event === "") {
            errors.push("Selectează tipul evenimentului.");
        }

        /* =========================
           VALIDARE MESAJ
        ========================= */
        if (message.length < 10) {
            errors.push("Mesajul trebuie să aibă minim 10 caractere.");
        }

        /* =========================
           REZULTAT
        ========================= */
        if (errors.length > 0) {

            alert("Erori:\n\n" + errors.join("\n"));

        } else {

            alert("✔ Mesaj trimis cu succes! Te voi contacta în curând.");

            form.reset();

        }

    });

}