const toggleButton = document.querySelector(".toggle");
const navLinks = document.querySelector(".toggle-ul");

toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active")
});

let subInput = document.querySelector(".newsletter input");
let subscribe = document.querySelector(".newsletter button");

subscribe.addEventListener("click", function () {
    if (subInput.value === "") {
        alert("Please enter your email!")
    }
    else (
        alert("Thanks for subscribing us! Now you'll receive our latest updates about our products & promotions.")
    )
})

let buy = document.querySelector('.button');

buy.addEventListener("click", function () {
    alert("Thanks for shopping!")
})