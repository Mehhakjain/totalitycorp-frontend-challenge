let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
    });
    cartTotalElement.textContent = cartTotal;
}

function checkout() {
    alert(`Total amount: $${cartTotal}\nThank you for shopping with us!`);
    cart = [];
    cartTotal = 0;
    updateCart();
}
