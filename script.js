const inventory = [
    // PISTOLS
    { id: 1, cat: "Pistol", name: "Glock 19 Gen6", price: 620, img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=400" },
    { id: 2, cat: "Pistol", name: "Sig Sauer P320-XTEN", price: 899, img: "https://images.unsplash.com/photo-1590491030067-27926136d856?w=400" },
    { id: 3, cat: "Pistol", name: "Staccato C4X Comp", price: 3499, img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=401" },
    { id: 4, cat: "Pistol", name: "Taurus TX9 Striker", price: 450, img: "https://images.unsplash.com/photo-1590491030067-27926136d856?w=401" },
    { id: 5, cat: "Pistol", name: "CZ 75 Legend Retro", price: 1100, img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=402" },
    { id: 6, cat: "Pistol", name: "Smith & Wesson M&P10mm", price: 749, img: "https://images.unsplash.com/photo-1590491030067-27926136d856?w=402" },
    { id: 7, cat: "Pistol", name: "Kimber DS Warrior", price: 1299, img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=403" },
    
    // RIFLES
    { id: 8, cat: "Rifle", name: "Daniel Defense DDM4 V7", price: 1950, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=400" },
    { id: 9, cat: "Rifle", name: "Sons of Liberty EXO3", price: 1650, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=401" },
    { id: 10, cat: "Rifle", name: "Ruger American Glenfield", price: 499, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=402" },
    { id: 11, cat: "Rifle", name: "Bergara Premier Cima", price: 3099, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=403" },
    { id: 12, cat: "Rifle", name: "Savage Axis II Precision", price: 580, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=404" },
    { id: 13, cat: "Rifle", name: "Marlin 1895 SBL Lever", price: 1450, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=405" },
    { id: 14, cat: "Rifle", name: "PSA AXR Multicaliber", price: 1200, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=406" },
    
    // SHOTGUNS
    { id: 15, cat: "Shotgun", name: "Beretta A300 Ultima Patrol", price: 1099, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=400" },
    { id: 16, cat: "Shotgun", name: "Mossberg 990 SPX Magpul", price: 1150, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=401" },
    { id: 17, cat: "Shotgun", name: "Benelli M4 EXT Tactical", price: 2299, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=402" },
    { id: 18, cat: "Shotgun", name: "Stoeger M3000 Sporting", price: 849, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=403" },
    { id: 19, cat: "Shotgun", name: "Mossberg Maverick SA", price: 690, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=404" },
    { id: 20, cat: "Shotgun", name: "Beretta 1301 Tactical Gray", price: 1949, img: "https://images.unsplash.com/photo-1512848913000-36d8c663bb53?w=405" },
];

let cartCount = 0;

function displayProducts(items) {
    const container = document.getElementById('product-container');
    container.innerHTML = items.map(item => `
        <div class="product-card">
            <span class="category-badge">${item.cat}</span>
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <button class="buy-btn" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

function filterSelection(category, btn) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'all') {
        displayProducts(inventory);
    } else {
        const filtered = inventory.filter(i => i.cat === category);
        displayProducts(filtered);
    }
}

function searchGuns() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const searched = inventory.filter(i => i.name.toLowerCase().includes(term));
    displayProducts(searched);
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Initial display
displayProducts(inventory);