const inventory = [
    // PISTOLS (From your image)
    { id: 1, cat: "Pistol", name: "S-32 Classic", price: 620, cal: ".32 ACP", bar: "3.83\"", finish: "Classic Black", img: "https://i.imgur.com/your-image-1.png" },
    { id: 2, cat: "Pistol", name: "S-32 GB", price: 680, cal: ".32 ACP", bar: "3.83\"", finish: "Graphite Black", img: "https://i.imgur.com/your-image-2.png" },
    { id: 3, cat: "Pistol", name: "S-32X Performance", price: 899, cal: ".32 ACP", bar: "4.23\"", finish: "Black", img: "https://i.imgur.com/your-image-3.png" },
    { id: 4, cat: "Pistol", name: "C-32 Compact", price: 749, cal: ".32 ACP", bar: "3.3\"", finish: "Graphite Black", img: "https://i.imgur.com/your-image-4.png" },
    
    // AIR PELLETS (New Category)
    { id: 5, cat: "Pellets", name: "Super-Point .177", price: 15, cal: ".177", weight: "8.4gr", img: "https://images.unsplash.com/photo-1599839620453-9ef2101708d5?w=400" },
    { id: 6, cat: "Pellets", name: "Hollow Point .22", price: 20, cal: ".22", weight: "14.3gr", img: "https://images.unsplash.com/photo-1599839620453-9ef2101708d5?w=401" },

    // RIFLES
    { id: 7, cat: "Rifle", name: "Precision Sport 100", price: 1200, cal: ".22 LR", bar: "18\"", finish: "Wood", img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=400" }
];

let cart = [];

function displayProducts(items) {
    const container = document.getElementById('product-container');
    container.innerHTML = items.map(item => `
        <div class="product-card">
            <span class="category-badge" style="background: #000; color: #d4af37; padding: 5px 10px; font-size: 0.6rem;">${item.cat}</span>
            <img src="${item.img}" alt="${item.name}" style="width:100%; margin-top:20px; cursor:pointer;" onclick="openModal(${item.id})">
            <h3>${item.name}</h3>
            <div style="font-size: 0.8rem; color: #777; margin-bottom: 10px;">
                ${item.cal} | ${item.finish || item.weight}
            </div>
            <p class="price">$${item.price}</p>
            <button class="buy-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join('');
}

// UI LOGIC
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('active'); }

function addToCart(id) {
    const item = inventory.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-items').innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})" style="color:red; background:none; border:none; cursor:pointer;">×</button>
        </div>
    `).join('');
    document.getElementById('cart-total').innerText = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-count').innerText = cart.length;
}

function removeFromCart(index) { cart.splice(index, 1); updateCartUI(); }

function openModal(id) {
    const item = inventory.find(p => p.id === id);
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${item.img}" style="width:50%">
        <div style="padding-left: 20px;">
            <h2 style="font-size: 2.5rem; margin-bottom:10px;">${item.name}</h2>
            <hr style="margin-bottom:20px; border: 0.5px solid #eee;">
            <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Model:</strong></td><td>${item.name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Caliber:</strong></td><td>${item.cal}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Finish:</strong></td><td>${item.finish || 'N/A'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Barrel:</strong></td><td>${item.bar || 'N/A'}</td></tr>
            </table>
            <h3 style="color:#d4af37; margin-top:30px; font-size: 2rem;">$${item.price}</h3>
            <button class="cta-btn" style="width:100%; margin-top:20px;" onclick="addToCart(${item.id}); closeModal()">Buy Now</button>
        </div>
    `;
    document.getElementById('product-modal').style.display = "block";
}

function closeModal() { document.getElementById('product-modal').style.display = "none"; }

function searchGuns() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    displayProducts(inventory.filter(i => i.name.toLowerCase().includes(term)));
}

function filterSelection(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    displayProducts(cat === 'all' ? inventory : inventory.filter(i => i.cat === cat));
}

displayProducts(inventory);