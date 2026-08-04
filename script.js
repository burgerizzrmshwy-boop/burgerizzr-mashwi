document.addEventListener("DOMContentLoaded", function () {

    console.log("Burgerizzr Mashwi Website Loaded");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing Burgerizzr Mashwi! 🍔");
        });
    }


    const langButtons = document.querySelectorAll(".lang-btn");

    langButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const lang = this.getAttribute("data-lang");

              if (lang === "ar") {

                document.documentElement.dir = "rtl";
                document.documentElement.lang = "ar";

                document.querySelectorAll("[data-ar]").forEach(function(element){
                    element.textContent = element.getAttribute("data-ar");
                });

            } else {
                document.documentElement.dir = "ltr";
                document.documentElement.lang = "en";

                document.querySelectorAll("[data-en]").forEach(function(element){
                    element.textContent = element.getAttribute("data-en");
                });
            }

        });

    });

});
