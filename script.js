// Enhanced inventory with specs
const inventory = [
    { id: 1, cat: "Pistol", name: "Glock 19 Gen6", price: 620, caliber: "9mm", capacity: "15+1", img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=400" },
    { id: 2, cat: "Pistol", name: "Sig Sauer P320-XTEN", price: 899, caliber: "10mm", capacity: "15+1", img: "https://images.unsplash.com/photo-1590491030067-27926136d856?w=400" },
    // ... (Keep your other 18 guns here)
];

let cart = [];

function displayProducts(items) {
    const container = document.getElementById('product-container');
    container.innerHTML = items.map(item => `
        <div class="product-card">
            <span class="category-badge">${item.cat}</span>
            <img src="${item.img}" alt="${item.name}" onclick="openModal(${item.id})">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <button class="buy-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 1. Cart Functions
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(id) {
    const item = inventory.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})" style="background:none; color:red; border:none; cursor:pointer">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = total;
    countEl.innerText = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// 2. Modal Functions
function openModal(id) {
    const item = inventory.find(p => p.id === id);
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div>
            <h2>${item.name}</h2>
            <p><strong>Category:</strong> ${item.cat}</p>
            <p><strong>Caliber:</strong> ${item.caliber || 'N/A'}</p>
            <p><strong>Capacity:</strong> ${item.capacity || 'N/A'}</p>
            <h3 style="color:#d4af37; margin-top:20px">$${item.price}</h3>
            <button class="buy-btn" onclick="addToCart(${item.id}); closeModal()">Add to Cart</button>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}

// Filter and Search (unchanged but calling displayProducts)
function searchGuns() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const searched = inventory.filter(i => i.name.toLowerCase().includes(term));
    displayProducts(searched);
}

displayProducts(inventory);