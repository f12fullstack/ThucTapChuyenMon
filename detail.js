let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById('cartNumber').innerText = cartCount;
}
function minusToCart() {
    cartCount--;
    document.getElementById('cartNumber').innerText = cartCount;
}