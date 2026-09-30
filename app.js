const STORAGE_KEY = "vitrina_store_v1";

const FREE_SHIPPING = 1000;

const products = [
    {
        id: 1,
        name: "MagSafe Clear Case",
        category: "Cases",
        price: 349,
        oldPrice: 449,
        rating: 4.8,
        stock: 12,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80",
        description: "Premium transparent MagSafe case with strong magnetic alignment and shock protection."
    },
    {
        id: 2,
        name: "Silicone iPhone Case",
        category: "Cases",
        price: 299,
        oldPrice: 399,
        rating: 4.6,
        stock: 18,
        badge: "20% OFF",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80",
        description: "Soft-touch silicone protection with a comfortable grip and slim profile."
    },
    {
        id: 3,
        name: "Armor Shock Case",
        category: "Cases",
        price: 399,
        oldPrice: 499,
        rating: 4.7,
        stock: 7,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",
        description: "Heavy-duty phone case designed for everyday drops and impact protection."
    },
    {
        id: 4,
        name: "65W GaN Charger",
        category: "Chargers",
        price: 899,
        oldPrice: 1099,
        rating: 4.9,
        stock: 9,
        badge: "Fast Charge",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
        description: "Compact 65W GaN charger for phones, tablets and compatible laptops."
    },
    {
        id: 5,
        name: "20W USB-C Charger",
        category: "Chargers",
        price: 499,
        oldPrice: 599,
        rating: 4.5,
        stock: 25,
        badge: "20% OFF",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
        description: "Compact USB-C wall charger delivering fast and reliable everyday charging."
    },
    {
        id: 6,
        name: "Dual Port Car Charger",
        category: "Chargers",
        price: 399,
        oldPrice: 499,
        rating: 4.4,
        stock: 14,
        badge: "",
        image: "https://images.unsplash.com/photo-1609592424844-5e8c7c8b3c1f?auto=format&fit=crop&w=900&q=80",
        description: "Dual USB car charger for powering two devices on the road."
    },
    {
        id: 7,
        name: "AirBeat Wireless Buds",
        category: "Audio",
        price: 1299,
        oldPrice: 1599,
        rating: 4.7,
        stock: 8,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
        description: "True wireless earbuds with balanced sound, clear calls and a compact charging case."
    },
    {
        id: 8,
        name: "NoiseCancel Pro Buds",
        category: "Audio",
        price: 1799,
        oldPrice: 2199,
        rating: 4.9,
        stock: 5,
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
        description: "Wireless earbuds featuring active noise cancellation and long battery life."
    },
    {
        id: 9,
        name: "BassFlow Bluetooth Speaker",
        category: "Audio",
        price: 999,
        oldPrice: 1199,
        rating: 4.6,
        stock: 11,
        badge: "15% OFF",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
        description: "Portable Bluetooth speaker with powerful bass and all-day battery."
    },
    {
        id: 10,
        name: "USB-C Braided Cable",
        category: "Cables",
        price: 199,
        oldPrice: 249,
        rating: 4.5,
        stock: 40,
        badge: "",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
        description: "Durable braided USB-C cable designed for charging and data transfer."
    },
    {
        id: 11,
        name: "Lightning Fast Cable",
        category: "Cables",
        price: 249,
        oldPrice: 299,
        rating: 4.4,
        stock: 31,
        badge: "",
        image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=80",
        description: "Strong and flexible Lightning cable for daily charging and synchronization."
    },
    {
        id: 12,
        name: "3-in-1 Charging Cable",
        category: "Cables",
        price: 299,
        oldPrice: 399,
        rating: 4.3,
        stock: 16,
        badge: "25% OFF",
        image: "https://images.unsplash.com/photo-1591290619762-c588a2f4d7a1?auto=format&fit=crop&w=900&q=80",
        description: "One cable with multiple charging connectors for your everyday devices."
    },
    {
        id: 13,
        name: "Magnetic Car Mount",
        category: "Mounts",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        stock: 13,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&w=900&q=80",
        description: "Minimal magnetic car mount with strong grip and easy one-hand operation."
    },
    {
        id: 14,
        name: "Dashboard Phone Holder",
        category: "Mounts",
        price: 349,
        oldPrice: 449,
        rating: 4.2,
        stock: 19,
        badge: "",
        image: "https://images.unsplash.com/photo-1617886322168-72b886573c7a?auto=format&fit=crop&w=900&q=80",
        description: "Adjustable dashboard mount with stable support for navigation and calls."
    },
    {
        id: 15,
        name: "Foldable Desk Stand",
        category: "Mounts",
        price: 299,
        oldPrice: 379,
        rating: 4.7,
        stock: 22,
        badge: "New",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
        description: "Foldable aluminum phone stand for desks, studying, work and video calls."
    },
    {
        id: 16,
        name: "10,000mAh Power Bank",
        category: "Power Banks",
        price: 799,
        oldPrice: 999,
        rating: 4.7,
        stock: 15,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1609592424844-5e8c7c8b3c1f?auto=format&fit=crop&w=900&q=80",
        description: "Reliable 10,000mAh portable power bank with fast charging support."
    },
    {
        id: 17,
        name: "20,000mAh Power Bank",
        category: "Power Banks",
        price: 1199,
        oldPrice: 1499,
        rating: 4.8,
        stock: 6,
        badge: "20% OFF",
        image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?auto=format&fit=crop&w=900&q=80",
        description: "High-capacity 20,000mAh power bank for extended trips and heavy usage."
    },
    {
        id: 18,
        name: "Wireless Charging Pad",
        category: "Wireless",
        price: 549,
        oldPrice: 699,
        rating: 4.5,
        stock: 17,
        badge: "",
        image: "https://images.unsplash.com/photo-1591290619762-c588a2f4d7a1?auto=format&fit=crop&w=900&q=80",
        description: "Clean and compact wireless charging pad for compatible smartphones."
    },
    {
        id: 19,
        name: "MagSafe Charging Stand",
        category: "Wireless",
        price: 899,
        oldPrice: 1099,
        rating: 4.8,
        stock: 10,
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1618478594486-c65b899c4936?auto=format&fit=crop&w=900&q=80",
        description: "Magnetic charging stand that keeps your phone visible while charging."
    },
    {
        id: 20,
        name: "Privacy Screen Protector",
        category: "Protection",
        price: 249,
        oldPrice: 299,
        rating: 4.5,
        stock: 30,
        badge: "",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80",
        description: "Privacy screen protector that reduces side viewing while keeping the display clear."
    },
    {
        id: 21,
        name: "Tempered Glass 2-Pack",
        category: "Protection",
        price: 199,
        oldPrice: 249,
        rating: 4.4,
        stock: 35,
        badge: "Value Pack",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
        description: "Two-pack tempered glass screen protectors with easy installation."
    },
    {
        id: 22,
        name: "Smart Tracker Tag",
        category: "Smart",
        price: 699,
        oldPrice: 799,
        rating: 4.6,
        stock: 4,
        badge: "Low Stock",
        image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&w=900&q=80",
        description: "Compact Bluetooth tracker for keys, bags and other everyday essentials."
    },
    {
        id: 23,
        name: "Mini USB-C Hub",
        category: "Accessories",
        price: 649,
        oldPrice: 799,
        rating: 4.5,
        stock: 12,
        badge: "15% OFF",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
        description: "Compact USB-C hub with multiple ports for laptops and tablets."
    },
    {
        id: 24,
        name: "LED Selfie Light",
        category: "Accessories",
        price: 299,
        oldPrice: 399,
        rating: 4.3,
        stock: 20,
        badge: "New",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=80",
        description: "Portable LED light for selfies, video calls, content creation and live streaming."
    }
];

const categories = [
    ["📱", "Cases", "Protection for your phone"],
    ["⚡", "Chargers", "Fast and reliable charging"],
    ["🎧", "Audio", "Buds and portable sound"],
    ["🔋", "Power Banks", "Power anywhere"]
];

const governorates = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Qalyubia",
    "Sharqia",
    "Dakahlia",
    "Gharbia",
    "Monufia",
    "Beheira",
    "Kafr El Sheikh",
    "Damietta",
    "Port Said",
    "Ismailia",
    "Suez",
    "Fayoum",
    "Beni Suef",
    "Minya",
    "Asyut",
    "Sohag",
    "Qena",
    "Luxor",
    "Aswan",
    "Red Sea",
    "New Valley",
    "Matrouh",
    "North Sinai",
    "South Sinai"
];

let state = loadState();

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return {
            cart: [],
            wishlist: [],
            sort: "relevance",
            searches: [],
            orders: []
        };
    }

    try {
        return {
            cart: [],
            wishlist: [],
            sort: "relevance",
            searches: [],
            orders: [],
            ...JSON.parse(saved)
        };
    } catch {
        return {
            cart: [],
            wishlist: [],
            sort: "relevance",
            searches: [],
            orders: []
        };
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeader();
}

function money(value) {
    return `${value.toLocaleString("en-EG")} EGP`;
}

function getProduct(id) {
    return products.find(product => product.id === Number(id));
}

function getCartQuantity(id) {
    const item = state.cart.find(item => item.id === Number(id));
    return item ? item.quantity : 0;
}

function cartCount() {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
    return state.cart.reduce((total, item) => {
        const product = getProduct(item.id);
        return total + product.price * item.quantity;
    }, 0);
}

function shippingCost() {
    return cartSubtotal() >= FREE_SHIPPING || cartSubtotal() === 0 ? 0 : 60;
}

function cartTotal() {
    return cartSubtotal() + shippingCost();
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getFilters() {
    const params = new URLSearchParams(window.location.search);

    return {
        category: params.get("category") || "",
        search: params.get("search") || "",
        maxPrice: Number(params.get("maxPrice")) || 2000,
        sort: params.get("sort") || state.sort || "relevance"
    };
}

function updateURL(filters) {
    const params = new URLSearchParams();

    if (filters.category) {
        params.set("category", filters.category);
    }

    if (filters.search) {
        params.set("search", filters.search);
    }

    if (filters.maxPrice < 2000) {
        params.set("maxPrice", filters.maxPrice);
    }

    if (filters.sort && filters.sort !== "relevance") {
        params.set("sort", filters.sort);
    }

    const query = params.toString();

    window.history.replaceState(
        {},
        "",
        query ? `#/shop?${query}` : "#/shop"
    );
}

function highlight(text, search) {
    if (!search) {
        return escapeHTML(text);
    }

    const safe = escapeHTML(text);
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    return safe.replace(
        new RegExp(`(${escapedSearch})`, "gi"),
        "<mark>$1</mark>"
    );
}

function productCard(product, search = "") {
    const isWishlisted = state.wishlist.includes(product.id);
    const isOut = product.stock <= 0;

    const discount = product.oldPrice
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;

    return `
        <article class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${escapeHTML(product.name)}">

                ${
                    product.badge
                        ? `<span class="product-badge ${isOut ? "out" : ""}">
                            ${escapeHTML(product.badge)}
                           </span>`
                        : ""
                }

                <button
                    class="wishlist ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Add to wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3 class="product-name">
                    ${highlight(product.name, search)}
                </h3>

                <div class="rating">
                    ★ ${product.rating}
                </div>

                <div class="price-row">
                    <span class="current-price">
                        ${money(product.price)}
                    </span>

                    ${
                        product.oldPrice
                            ? `<span class="old-price">
                                ${money(product.oldPrice)}
                               </span>
                               <span class="discount">
                                -${discount}%
                               </span>`
                            : ""
                    }
                </div>

                <div class="product-actions">
                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        ${isOut ? "disabled" : ""}
                    >
                        ${isOut ? "Out of Stock" : "Add to Cart"}
                    </button>

                    <button
                        class="view-product"
                        onclick="navigateToProduct(${product.id})"
                    >
                        →
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderHome() {
    const featured = products
        .filter(product => product.badge)
        .slice(0, 8);

    document.getElementById("app").innerHTML = `
        <section class="hero">
            <div class="container hero-grid">
                <div>
                    <span class="eyebrow">SMART MOBILE ACCESSORIES</span>

                    <h1>
                        Better tech.
                        <span>Better everyday.</span>
                    </h1>

                    <p>
                        Discover carefully selected mobile accessories
                        designed for modern everyday life.
                    </p>

                    <div class="hero-buttons">
                        <a href="#/shop" class="btn btn-primary">
                            Explore Products
                        </a>

                        <a href="#/wishlist" class="btn btn-secondary">
                            View Wishlist
                        </a>
                    </div>
                </div>

                <div class="hero-card">
                    <img
                        src="${products[7].image}"
                        alt="Premium wireless earbuds"
                    >

                    <div class="hero-floating">
                        <strong>NoiseCancel Pro Buds</strong>
                        <span>Premium sound experience</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div>
                        <h2 class="section-title">Shop by category</h2>
                        <p class="section-description">
                            Everything you need for your everyday devices.
                        </p>
                    </div>
                </div>

                <div class="category-grid">
                    ${categories.map(category => `
                        <a
                            class="category-card"
                            href="#/shop?category=${encodeURIComponent(category[1])}"
                        >
                            <div class="category-icon">
                                ${category[0]}
                            </div>

                            <h3>${category[1]}</h3>

                            <p>${category[2]}</p>
                        </a>
                    `).join("")}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div>
                        <h2 class="section-title">Featured products</h2>
                        <p class="section-description">
                            Popular picks from Vitrina.
                        </p>
                    </div>

                    <a href="#/shop" class="btn btn-secondary">
                        View All
                    </a>
                </div>

                <div class="products-grid">
                    ${featured.map(product => productCard(product)).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderShop() {
    const filters = getFilters();

    let filtered = [...products];

    if (filters.category) {
        filtered = filtered.filter(
            product => product.category === filters.category
        );
    }

    if (filters.search) {
        const search = filters.search.toLowerCase();

        filtered = filtered.filter(product =>
            `${product.name} ${product.category} ${product.description}`
                .toLowerCase()
                .includes(search)
        );
    }

    filtered = filtered.filter(
        product => product.price <= filters.maxPrice
    );

    switch (filters.sort) {
        case "price-low":
            filtered.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            filtered.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            filtered.sort((a, b) => b.rating - a.rating);
            break;

        case "newest":
            filtered.sort((a, b) => b.id - a.id);
            break;

        default:
            filtered.sort((a, b) => b.rating - a.rating);
    }

    state.sort = filters.sort;
    saveState();

    const categoryOptions = [...new Set(products.map(p => p.category))];

    document.getElementById("app").innerHTML = `
        <section class="section">
            <div class="container">
                <div class="shop-header">
                    <span class="eyebrow">SHOP</span>

                    <h1 class="section-title">
                        Find what fits you.
                    </h1>

                    <p class="section-description">
                        Search, filter and sort through our collection.
                    </p>

                    <div style="margin-top:20px" class="search-box">
                        <span class="search-icon">⌕</span>

                        <input
                            id="searchInput"
                            type="search"
                            placeholder="Search products..."
                            value="${escapeHTML(filters.search)}"
                            autocomplete="off"
                        >
                    </div>
                </div>

                <div class="shop-layout">
                    <aside class="filters">
                        <div class="filter-group">
                            <h4>Category</h4>

                            <label class="filter-option">
                                <input
                                    type="radio"
                                    name="category"
                                    value=""
                                    ${!filters.category ? "checked" : ""}
                                    onchange="changeCategory('')"
                                >
                                All Products
                            </label>

                            ${categoryOptions.map(category => `
                                <label class="filter-option">
                                    <input
                                        type="radio"
                                        name="category"
                                        value="${escapeHTML(category)}"
                                        ${filters.category === category ? "checked" : ""}
                                        onchange="changeCategory('${escapeHTML(category)}')"
                                    >
                                    ${escapeHTML(category)}
                                </label>
                            `).join("")}
                        </div>

                        <div class="filter-group">
                            <h4>Maximum Price</h4>

                            <input
                                id="priceRange"
                                type="range"
                                min="100"
                                max="2000"
                                step="50"
                                value="${filters.maxPrice}"
                                oninput="changePrice(this.value)"
                            >

                            <div class="range-values">
                                <span>100 EGP</span>
                                <span id="priceValue">
                                    ${money(filters.maxPrice)}
                                </span>
                            </div>
                        </div>
                    </aside>

                    <div class="products-area">
                        <div id="activeFilters" class="active-filters">
                            ${renderFilterChips(filters)}
                        </div>

                        <div class="products-toolbar">
                            <span class="results-count">
                                ${filtered.length} products
                            </span>

                            <select
                                class="sort-select"
                                onchange="changeSort(this.value)"
                            >
                                <option value="relevance" ${filters.sort === "relevance" ? "selected" : ""}>
                                    Most Relevant
                                </option>

                                <option value="price-low" ${filters.sort === "price-low" ? "selected" : ""}>
                                    Price: Low to High
                                </option>

                                <option value="price-high" ${filters.sort === "price-high" ? "selected" : ""}>
                                    Price: High to Low
                                </option>

                                <option value="rating" ${filters.sort === "rating" ? "selected" : ""}>
                                    Highest Rated
                                </option>

                                <option value="newest" ${filters.sort === "newest" ? "selected" : ""}>
                                    Newest
                                </option>
                            </select>
                        </div>

                        ${
                            filtered.length
                                ? `<div class="products-grid">
                                    ${filtered.map(product =>
                                        productCard(product, filters.search)
                                    ).join("")}
                                   </div>`
                                : `
                                    <div class="empty-state">
                                        <div class="empty-icon">⌕</div>
                                        <h2>No products found</h2>
                                        <p>
                                            Try another search or remove some filters.
                                        </p>

                                        <button
                                            class="btn btn-primary"
                                            onclick="clearFilters()"
                                        >
                                            Clear Filters
                                        </button>
                                    </div>
                                `
                        }
                    </div>
                </div>
            </div>
        </section>
    `;

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        let timeout;

        searchInput.addEventListener("input", event => {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                const newFilters = getFilters();

                newFilters.search = event.target.value.trim();

                if (newFilters.search) {
                    state.searches = [
                        newFilters.search,
                        ...state.searches.filter(
                            item => item !== newFilters.search
                        )
                    ].slice(0, 8);
                }

                updateURL(newFilters);
                renderShop();
            }, 250);
        });
    }
}

function renderFilterChips(filters) {
    const chips = [];

    if (filters.category) {
        chips.push(`
            <span class="filter-chip">
                ${escapeHTML(filters.category)}
                <button onclick="changeCategory('')">×</button>
            </span>
        `);
    }

    if (filters.search) {
        chips.push(`
            <span class="filter-chip">
                "${escapeHTML(filters.search)}"
                <button onclick="clearSearch()">×</button>
            </span>
        `);
    }

    if (filters.maxPrice < 2000) {
        chips.push(`
            <span class="filter-chip">
                Under ${money(filters.maxPrice)}
                <button onclick="changePrice(2000)">×</button>
            </span>
        `);
    }

    if (chips.length) {
        chips.push(`
            <button class="clear-filters" onclick="clearFilters()">
                Clear all
            </button>
        `);
    }

    return chips.join("");
}

function changeCategory(category) {
    const filters = getFilters();
    filters.category = category;
    updateURL(filters);
    renderShop();
}

function changePrice(value) {
    const priceValue = document.getElementById("priceValue");

    if (priceValue) {
        priceValue.textContent = money(Number(value));
    }

    const filters = getFilters();
    filters.maxPrice = Number(value);

    updateURL(filters);

    clearTimeout(window.priceTimer);

    window.priceTimer = setTimeout(() => {
        renderShop();
    }, 250);
}

function changeSort(sort) {
    const filters = getFilters();
    filters.sort = sort;

    state.sort = sort;
    saveState();

    updateURL(filters);
    renderShop();
}

function clearSearch() {
    const filters = getFilters();
    filters.search = "";
    updateURL(filters);
    renderShop();
}

function clearFilters() {
    state.sort = "relevance";
    saveState();

    updateURL({
        category: "",
        search: "",
        maxPrice: 2000,
        sort: "relevance"
    });

    renderShop();
}

function navigateToProduct(id) {
    window.location.hash = `#/product/${id}`;
}

function renderProduct(id) {
    const product = getProduct(id);

    if (!product) {
        render404();
        return;
    }

    const similar = products
        .filter(
            item =>
                item.category === product.category &&
                item.id !== product.id
        )
        .slice(0, 4);

    document.getElementById("app").innerHTML = `
        <section class="product-details">
            <div class="container">
                <div class="breadcrumb">
                    <a href="#/shop">Shop</a>
                    /
                    ${escapeHTML(product.category)}
                    /
                    ${escapeHTML(product.name)}
                </div>

                <div class="product-detail-grid">
                    <div class="detail-image">
                        <img
                            src="${product.image}"
                            alt="${escapeHTML(product.name)}"
                        >
                    </div>

                    <div class="detail-info">
                        <span class="detail-category">
                            ${escapeHTML(product.category)}
                        </span>

                        <h1>${escapeHTML(product.name)}</h1>

                        <div class="rating">
                            ★ ${product.rating} / 5
                        </div>

                        <p class="detail-description">
                            ${escapeHTML(product.description)}
                        </p>

                        <div class="price-row">
                            <span class="detail-price">
                                ${money(product.price)}
                            </span>

                            ${
                                product.oldPrice
                                    ? `<span class="old-price">
                                        ${money(product.oldPrice)}
                                       </span>`
                                    : ""
                            }
                        </div>

                        <div class="detail-stock">
                            ${
                                product.stock > 0
                                    ? `${product.stock} items available`
                                    : "Out of stock"
                            }
                        </div>

                        <div class="quantity-control">
                            <button onclick="changeDetailQuantity(-1)">
                                −
                            </button>

                            <span id="detailQuantity">1</span>

                            <button onclick="changeDetailQuantity(1)">
                                +
                            </button>
                        </div>

                        <button
                            class="detail-add"
                            onclick="addDetailProduct(${product.id})"
                            ${product.stock <= 0 ? "disabled" : ""}
                        >
                            ${product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>

                        <div class="features">
                            <div class="feature">✓ Secure Checkout</div>
                            <div class="feature">✓ Fast Delivery</div>
                            <div class="feature">✓ Cash on Delivery</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <div>
                            <h2 class="section-title">
                                You may also like
                            </h2>

                            <p class="section-description">
                                Similar products you might enjoy.
                            </p>
                        </div>
                    </div>

                    <div class="similar-grid">
                        ${similar.map(item => productCard(item)).join("")}
                    </div>
                </div>
            </div>
        </section>

        <div class="mobile-product-bar">
            <span class="price">
                ${money(product.price)}
            </span>

            <button
                class="btn btn-primary"
                onclick="addDetailProduct(${product.id})"
            >
                Add to Cart
            </button>
        </div>
    `;

    window.detailProductId = product.id;
    window.detailQuantity = 1;
}

function changeDetailQuantity(amount) {
    const product = getProduct(window.detailProductId);

    if (!product) {
        return;
    }

    window.detailQuantity += amount;

    const currentCartQuantity = getCartQuantity(product.id);

    if (window.detailQuantity + currentCartQuantity > product.stock) {
        window.detailQuantity = product.stock - currentCartQuantity;
    }

    if (window.detailQuantity < 1) {
        window.detailQuantity = 1;
    }

    document.getElementById("detailQuantity").textContent =
        window.detailQuantity;
}

function addDetailProduct(id) {
    addToCart(id, window.detailQuantity || 1);
}

function addToCart(id, quantity = 1) {
    const product = getProduct(id);

    if (!product || product.stock <= 0) {
        showToast("This product is out of stock.");
        return;
    }

    const existing = state.cart.find(item => item.id === product.id);

    const currentQuantity = existing ? existing.quantity : 0;

    if (currentQuantity + quantity > product.stock) {
        showToast(`Only ${product.stock} items are available.`);
        return;
    }

    if (existing) {
        existing.quantity += quantity;
    } else {
        state.cart.push({
            id: product.id,
            quantity
        });
    }

    saveState();
    renderCart();

    openCart();

    showToast(`${product.name} added to cart.`);
}

function removeFromCart(id) {
    const item = state.cart.find(item => item.id === Number(id));

    if (!item) {
        return;
    }

    const product = getProduct(id);

    state.cart = state.cart.filter(item => item.id !== Number(id));

    saveState();
    renderCart();

    showToastWithUndo(
        `${product.name} removed from cart.`,
        () => {
            state.cart.push(item);
            saveState();
            renderCart();
        }
    );
}

function updateCartQuantity(id, change) {
    const item = state.cart.find(item => item.id === Number(id));

    if (!item) {
        return;
    }

    const product = getProduct(id);

    const next = item.quantity + change;

    if (next > product.stock) {
        showToast(`You reached the available stock: ${product.stock}.`);
        return;
    }

    if (next <= 0) {
        removeFromCart(id);
        return;
    }

    item.quantity = next;

    saveState();
    renderCart();
}

function renderCart() {
    const content = document.getElementById("cartContent");
    const footer = document.getElementById("cartFooter");

    if (!content || !footer) {
        return;
    }

    if (!state.cart.length) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add something you like and continue shopping.</p>

                <a href="#/shop" class="btn btn-primary">
                    Start Shopping
                </a>
            </div>
        `;

        footer.innerHTML = "";
        return;
    }

    content.innerHTML = state.cart.map(item => {
        const product = getProduct(item.id);

        return `
            <div class="cart-item">
                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

                <div>
                    <h4>${escapeHTML(product.name)}</h4>

                    <div class="cart-item-price">
                        ${money(product.price)}
                    </div>

                    <div class="cart-quantity">
                        <button onclick="updateCartQuantity(${product.id}, -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="updateCartQuantity(${product.id}, 1)">
                            +
                        </button>
                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${product.id})"
                    >
                        Remove
                    </button>
                </div>

                <strong>
                    ${money(product.price * item.quantity)}
                </strong>
            </div>
        `;
    }).join("");

    const subtotal = cartSubtotal();
    const shipping = shippingCost();
    const total = cartTotal();

    const remaining = Math.max(FREE_SHIPPING - subtotal, 0);
    const progress = Math.min(
        (subtotal / FREE_SHIPPING) * 100,
        100
    );

    footer.innerHTML = `
        <div class="shipping-box">
            <p>
                ${
                    remaining > 0
                        ? `You're ${money(remaining)} away from free shipping.`
                        : `🎉 You unlocked free shipping!`
                }
            </p>

            <div class="progress">
                <span style="width:${progress}%"></span>
            </div>
        </div>

        <div class="summary-row">
            <span>Subtotal</span>
            <span>${money(subtotal)}</span>
        </div>

        <div class="summary-row">
            <span>Shipping</span>
            <span>
                ${shipping === 0 ? "FREE" : money(shipping)}
            </span>
        </div>

        <div class="summary-row total">
            <span>Total</span>
            <span>${money(total)}</span>
        </div>

        <a
            href="#/checkout"
            class="btn btn-primary checkout-btn"
            onclick="closeCart()"
        >
            Checkout
        </a>
    `;
}

function openCart() {
    document.getElementById("cartDrawer").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("active");
    document.body.style.overflow = "";
}

function toggleWishlist(id) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    if (state.wishlist.includes(product.id)) {
        state.wishlist = state.wishlist.filter(
            productId => productId !== product.id
        );

        showToast(`${product.name} removed from wishlist.`);
    } else {
        state.wishlist.push(product.id);
        showToast(`${product.name} added to wishlist.`);
    }

    saveState();

    const hash = window.location.hash;

    if (hash.startsWith("#/shop")) {
        renderShop();
    } else if (hash.startsWith("#/wishlist")) {
        renderWishlist();
    }
}

function renderWishlist() {
    const wishlistProducts = products.filter(product =>
        state.wishlist.includes(product.id)
    );

    document.getElementById("app").innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div>
                        <span class="eyebrow">WISHLIST</span>

                        <h1 class="section-title">
                            Your saved products
                        </h1>

                        <p class="section-description">
                            Products you don't want to forget.
                        </p>
                    </div>
                </div>

                ${
                    wishlistProducts.length
                        ? `<div class="products-grid">
                            ${wishlistProducts.map(product => `
                                <div>
                                    ${productCard(product)}
                                    <button
                                        class="btn btn-secondary"
                                        style="width:100%;margin-top:8px"
                                        onclick="moveWishlistToCart(${product.id})"
                                    >
                                        Move to Cart
                                    </button>
                                </div>
                            `).join("")}
                           </div>`
                        : `
                            <div class="empty-state">
                                <div class="empty-icon">♡</div>
                                <h2>Your wishlist is empty</h2>
                                <p>
                                    Save products here to find them later.
                                </p>

                                <a
                                    href="#/shop"
                                    class="btn btn-primary"
                                >
                                    Browse Products
                                </a>
                            </div>
                        `
                }
            </div>
        </section>
    `;
}

function moveWishlistToCart(id) {
    addToCart(id);
}

function renderCheckout() {
    if (!state.cart.length) {
        window.location.hash = "#/shop";
        showToast("Your cart is empty.");
        return;
    }

    const subtotal = cartSubtotal();
    const shipping = shippingCost();
    const total = cartTotal();

    document.getElementById("app").innerHTML = `
        <section class="checkout">
            <div class="container">
                <div class="section-header">
                    <div>
                        <span class="eyebrow">CHECKOUT</span>

                        <h1 class="section-title">
                            Complete your order
                        </h1>

                        <p class="section-description">
                            Simple Egyptian checkout with Cash on Delivery.
                        </p>
                    </div>
                </div>

                <div class="checkout-grid">
                    <form
                        class="checkout-form"
                        id="checkoutForm"
                        novalidate
                    >
                        <h2>Delivery Information</h2>

                        <div class="form-grid">
                            <div class="form-group">
                                <label for="firstName">
                                    First Name
                                </label>

                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="Karim"
                                >

                                <span class="error-message">
                                    Enter your first name.
                                </span>
                            </div>

                            <div class="form-group">
                                <label for="lastName">
                                    Last Name
                                </label>

                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Ahmed"
                                >

                                <span class="error-message">
                                    Enter your last name.
                                </span>
                            </div>

                            <div class="form-group full">
                                <label for="phone">
                                    Mobile Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="01xxxxxxxxx"
                                    maxlength="11"
                                >

                                <span class="error-message">
                                    Enter a valid Egyptian mobile number.
                                </span>
                            </div>

                            <div class="form-group full">
                                <label for="governorate">
                                    Governorate
                                </label>

                                <select
                                    id="governorate"
                                    name="governorate"
                                >
                                    <option value="">
                                        Select Governorate
                                    </option>

                                    ${governorates.map(governorate => `
                                        <option value="${governorate}">
                                            ${governorate}
                                        </option>
                                    `).join("")}
                                </select>

                                <span class="error-message">
                                    Select your governorate.
                                </span>
                            </div>

                            <div class="form-group full">
                                <label for="address">
                                    Full Address
                                </label>

                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="Street, building, apartment..."
                                >

                                <span class="error-message">
                                    Enter your address.
                                </span>
                            </div>
                        </div>

                        <h2 style="margin-top:30px">
                            Payment Method
                        </h2>

                        <label class="payment-option">
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked
                            >

                            <div>
                                <strong>Cash on Delivery</strong>
                                <p style="color:var(--muted);font-size:12px;margin-top:4px">
                                    Pay when your order arrives.
                                </p>
                            </div>
                        </label>

                        <button
                            type="submit"
                            class="btn btn-primary"
                            style="width:100%"
                        >
                            Confirm Order — ${money(total)}
                        </button>
                    </form>

                    <aside class="order-summary">
                        <h2>Order Summary</h2>

                        ${state.cart.map(item => {
                            const product = getProduct(item.id);

                            return `
                                <div class="order-summary-item">
                                    <img
                                        src="${product.image}"
                                        alt="${escapeHTML(product.name)}"
                                    >

                                    <div>
                                        <strong>
                                            ${escapeHTML(product.name)}
                                        </strong>

                                        <p style="color:var(--muted);font-size:11px;margin-top:5px">
                                            Qty: ${item.quantity}
                                        </p>
                                    </div>

                                    <div>
                                        ${money(product.price * item.quantity)}
                                    </div>
                                </div>
                            `;
                        }).join("")}

                        <div class="summary-row" style="margin-top:20px">
                            <span>Subtotal</span>
                            <span>${money(subtotal)}</span>
                        </div>

                        <div class="summary-row">
                            <span>Shipping</span>
                            <span>
                                ${shipping === 0 ? "FREE" : money(shipping)}
                            </span>
                        </div>

                        <div class="summary-row total">
                            <span>Total</span>
                            <span>${money(total)}</span>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    `;

    setupCheckoutValidation();
}

function setupCheckoutValidation() {
    const form = document.getElementById("checkoutForm");

    if (!form) {
        return;
    }

    const fields = [
        document.getElementById("firstName"),
        document.getElementById("lastName"),
        document.getElementById("phone"),
        document.getElementById("governorate"),
        document.getElementById("address")
    ];

    fields.forEach(field => {
        field.addEventListener("input", () => {
            validateField(field);
        });

        field.addEventListener("change", () => {
            validateField(field);
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const valid = fields.every(field => validateField(field));

        if (!valid) {
            return;
        }

        placeOrder(form);
    });
}

function validateField(field) {
    const group = field.closest(".form-group");

    if (!group) {
        return true;
    }

    let valid = true;

    if (!field.value.trim()) {
        valid = false;
    }

    if (field.id === "phone") {
        valid = /^01[0125][0-9]{8}$/.test(field.value.trim());
    }

    group.classList.toggle("error", !valid);

    return valid;
}

function placeOrder(form) {
    const data = new FormData(form);

    const orderNumber =
        "VT-" +
        Date.now().toString().slice(-8);

    const order = {
        id: orderNumber,
        date: new Date().toISOString(),
        customer: {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            phone: data.get("phone"),
            governorate: data.get("governorate"),
            address: data.get("address")
        },
        payment: "Cash on Delivery",
        items: [...state.cart],
        total: cartTotal()
    };

    state.orders.push(order);
    state.cart = [];

    saveState();

    window.location.hash =
        `#/success/${orderNumber}`;
}

function renderSuccess(orderId) {
    const order = state.orders.find(
        order => order.id === orderId
    );

    document.getElementById("app").innerHTML = `
        <section class="success-page">
            <div>
                <div class="success-icon">
                    ✓
                </div>

                <h1>Order Confirmed!</h1>

                <p>
                    Thank you for shopping with Vitrina.
                </p>

                <p>
                    Your order number is
                    <strong>${escapeHTML(orderId)}</strong>
                </p>

                ${
                    order
                        ? `<p style="margin-top:10px">
                            Total:
                            <strong>${money(order.total)}</strong>
                           </p>`
                        : ""
                }

                <div style="margin-top:25px">
                    <a
                        href="#/shop"
                        class="btn btn-primary"
                    >
                        Continue Shopping
                    </a>
                </div>
            </div>
        </section>
    `;
}

function render404() {
    document.getElementById("app").innerHTML = `
        <section class="success-page">
            <div>
                <div class="success-icon">
                    ?
                </div>

                <h1>Product not found</h1>

                <p>
                    The page you're looking for doesn't exist.
                </p>

                <a
                    href="#/shop"
                    class="btn btn-primary"
                    style="display:inline-block;margin-top:20px"
                >
                    Back to Shop
                </a>
            </div>
        </section>
    `;
}

function showToast(message) {
    const container = document.getElementById("toastContainer");

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `
        <div class="toast-content">
            <span>${escapeHTML(message)}</span>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2800);
}

function showToastWithUndo(message, undo) {
    const container = document.getElementById("toastContainer");

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `
        <div class="toast-content">
            <span>${escapeHTML(message)}</span>

            <button>Undo</button>
        </div>
    `;

    toast.querySelector("button").addEventListener("click", () => {
        undo();
        toast.remove();
    });

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function updateHeader() {
    const cartCountElement =
        document.getElementById("cartCount");

    const wishlistCountElement =
        document.getElementById("wishlistCount");

    if (cartCountElement) {
        cartCountElement.textContent = cartCount();
    }

    if (wishlistCountElement) {
        wishlistCountElement.textContent =
            state.wishlist.length;
    }
}

function route() {
    const hash = window.location.hash || "#/";

    closeCart();

    if (hash === "#/" || hash === "#") {
        renderHome();
        return;
    }

    if (hash.startsWith("#/shop")) {
        renderShop();
        return;
    }

    if (hash === "#/wishlist") {
        renderWishlist();
        return;
    }

    if (hash === "#/checkout") {
        renderCheckout();
        return;
    }

    if (hash.startsWith("#/success/")) {
        const orderId = hash.split("/")[2];
        renderSuccess(orderId);
        return;
    }

    if (hash.startsWith("#/product/")) {
        const id = hash.split("/")[2];
        renderProduct(id);
        return;
    }

    render404();
}

document.getElementById("cartBtn").addEventListener(
    "click",
    openCart
);

document.getElementById("wishlistBtn").addEventListener(
    "click",
    () => {
        window.location.hash = "#/wishlist";
    }
);

document.getElementById("closeCart").addEventListener(
    "click",
    closeCart
);

document.getElementById("cartOverlay").addEventListener(
    "click",
    closeCart
);

document.getElementById("mobileMenuBtn").addEventListener(
    "click",
    () => {
        document
            .getElementById("mobileMenu")
            .classList.toggle("active");
    }
);

window.addEventListener("hashchange", route);

window.addEventListener("storage", event => {
    if (event.key === STORAGE_KEY) {
        state = loadState();

        updateHeader();
        renderCart();

        route();
    }
});

updateHeader();
renderCart();
route();