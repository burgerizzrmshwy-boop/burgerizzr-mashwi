document.addEventListener("DOMContentLoaded", function () {
    console.log("Burgerizzr Mashwi Website Loaded");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing Burgerizzr Mashwi! 🍔");
        });
    }
});
