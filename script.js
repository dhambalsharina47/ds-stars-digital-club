document.addEventListener("DOMContentLoaded", function () {


    /* ================================
       JOIN FORM
    ================================= */

    const joinForm = document.getElementById("joinForm");

    if (joinForm) {

        joinForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const joinMessage =
                document.getElementById("joinMessage");

            joinMessage.classList.remove("d-none");

            joinForm.reset();

        });

    }


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const contactSuccess =
                document.getElementById("contactSuccess");

            contactSuccess.classList.remove("d-none");

            contactForm.reset();

        });

    }

});