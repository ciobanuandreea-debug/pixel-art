

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

     
        if (name.length < 3) {
            errors.push("Numele trebuie să aibă minim 3 caractere.");
        }

     
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errors.push("Email invalid.");
        }

    
        const phonePattern = /^[0-9+\s]{6,15}$/;

        if (!phonePattern.test(phone)) {
            errors.push("Număr de telefon invalid.");
        }

    
        if (event === "") {
            errors.push("Selectează tipul evenimentului.");
        }

       
        if (message.length < 10) {
            errors.push("Mesajul trebuie să aibă minim 10 caractere.");
        }

       
        if (errors.length > 0) {

            alert("Erori:\n\n" + errors.join("\n"));

        } else {

            alert("✔ Mesaj trimis cu succes! Te voi contacta în curând.");

            form.reset();

        }

    });

}