const inventory = [
    { id: 1, name: "Alpha-9 Tactical Rifle", price: 1299, img: "https://via.placeholder.com/300x150?text=Rifle" },
    { id: 2, name: "Guardian Sidearm 9mm", price: 549, img: "https://via.placeholder.com/300x150?text=Handgun" },
    { id: 3, name: "Sporting Series Shotgun", price: 899, img: "https://via.placeholder.com/300x150?text=Shotgun" },
    { id: 4, name: "Precision Scope 4x32", price: 299, img: "https://via.placeholder.com/300x150?text=Optics" },
];

const container = document.getElementById('product-container');
const cartCount = document.getElementById('cart-count');
let count = 0;

// Load Inventory
inventory.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">$${item.price}</p>
        <button class="buy-btn" onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
});

function addToCart() {
    count++;
    cartCount.innerText = count;
    alert("Item added to cart! Please note: All firearm sales require background checks and FFL transfer.");
}