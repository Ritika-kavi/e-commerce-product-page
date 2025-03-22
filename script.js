document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".add-to-cart");

    addToCartBtn.addEventListener("click", function () {
        addToCartBtn.textContent = "Added!";
        addToCartBtn.style.backgroundColor = "#ffc107";

        setTimeout(() => {
            addToCartBtn.textContent = "Add to Cart";
            addToCartBtn.style.backgroundColor = "#28a745";
        }, 2000);
    });
});
