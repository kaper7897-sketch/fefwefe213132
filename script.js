// ===== БАЗА ДАННЫХ ТОВАРОВ =====
const products = [
    // ЛЕКАРСТВА
    { id: 1, name: "Ибупрофен 200мг №20", category: "Лекарства", price: 350, oldPrice: 420, manufacturer: "Фармстандард", image: "💊", rating: 4.8, reviews: 156, inStock: true },
    { id: 2, name: "Парацетамол 500мг №20", category: "Лекарства", price: 280, oldPrice: 350, manufacturer: "Фармстандард", image: "💊", rating: 4.7, reviews: 203, inStock: true },
    { id: 3, name: "Нурофен Экспресс 200мг", category: "Лекарства", price: 410, oldPrice: 480, manufacturer: "Reckitt Benckiser", image: "💊", rating: 4.8, reviews: 178, inStock: true },
    { id: 4, name: "Аспирин Кардио 100мг", category: "Лекарства", price: 210, oldPrice: 250, manufacturer: "Bayer", image: "💊", rating: 4.6, reviews: 145, inStock: true },
    { id: 5, name: "Цитрамон П", category: "Лекарства", price: 180, oldPrice: 220, manufacturer: "Фармстандард", image: "💊", rating: 4.5, reviews: 98, inStock: true },
    { id: 6, name: "Анальгин 500мг №10", category: "Лекарства", price: 150, oldPrice: 180, manufacturer: "Фармстандард", image: "💊", rating: 4.4, reviews: 87, inStock: true },
    { id: 7, name: "Но-шпа 40мг №60", category: "Лекарства", price: 420, oldPrice: 490, manufacturer: "Chinoin", image: "💊", rating: 4.9, reviews: 234, inStock: true },
    { id: 8, name: "Мезим Форте 10000", category: "Лекарства", price: 340, oldPrice: 400, manufacturer: "Berlin-Chemie", image: "💊", rating: 4.7, reviews: 167, inStock: true },
    { id: 9, name: "Сироп от кашля Доктор МОМ", category: "Лекарства", price: 290, oldPrice: 350, manufacturer: "Юник Фарма", image: "🥤", rating: 4.5, reviews: 76, inStock: true },
    { id: 10, name: "Називин капли 0.05%", category: "Лекарства", price: 180, oldPrice: 220, manufacturer: "Merck", image: "💧", rating: 4.3, reviews: 54, inStock: true },
    { id: 11, name: "Лоратадин 10мг №10", category: "Лекарства", price: 190, oldPrice: 230, manufacturer: "Вертекс", image: "💊", rating: 4.6, reviews: 112, inStock: true },
    { id: 12, name: "Супрастин 25мг №20", category: "Лекарства", price: 220, oldPrice: 270, manufacturer: "Egis", image: "💊", rating: 4.7, reviews: 89, inStock: true },
    
    // ВИТАМИНЫ
    { id: 13, name: "Витамин С 1000мг шипучий", category: "Витамины", price: 520, oldPrice: 650, manufacturer: "Эвалар", image: "🍊", rating: 4.9, reviews: 312, inStock: true },
    { id: 14, name: "Компливит №60", category: "Витамины", price: 380, oldPrice: 450, manufacturer: "Фармстандард", image: "💊", rating: 4.7, reviews: 203, inStock: true },
    { id: 15, name: "Витрум Пренатал", category: "Витамины", price: 890, oldPrice: 1050, manufacturer: "Unipharm", image: "🤰", rating: 4.9, reviews: 445, inStock: true },
    { id: 16, name: "Омега-3 1000мг", category: "Витамины", price: 650, oldPrice: 780, manufacturer: "Солагар", image: "🐟", rating: 4.8, reviews: 167, inStock: true },
    { id: 17, name: "Магне B6 Форте", category: "Витамины", price: 540, oldPrice: 620, manufacturer: "Sanofi", image: "💊", rating: 4.8, reviews: 234, inStock: true },
    { id: 18, name: "Кальций Д3 Никомед", category: "Витамины", price: 480, oldPrice: 550, manufacturer: "Nycomed", image: "💊", rating: 4.7, reviews: 189, inStock: true },
    { id: 19, name: "Солгар Витамин D3", category: "Витамины", price: 720, oldPrice: 850, manufacturer: "Solgar", image: "☀️", rating: 4.9, reviews: 278, inStock: true },
    { id: 20, name: "Цинк Хелат 25мг", category: "Витамины", price: 420, oldPrice: 490, manufacturer: "Эвалар", image: "💊", rating: 4.6, reviews: 98, inStock: true },
    
    // ГИГИЕНА
    { id: 21, name: "Зубная паста Lacalut White", category: "Гигиена", price: 220, oldPrice: 260, manufacturer: "Lacalut", image: "🪥", rating: 4.7, reviews: 234, inStock: true },
    { id: 22, name: "Зубная щетка Oral-B Medium", category: "Гигиена", price: 180, oldPrice: 220, manufacturer: "Oral-B", image: "🪥", rating: 4.6, reviews: 156, inStock: true },
    { id: 23, name: "Мыло жидкое Dettol", category: "Гигиена", price: 150, oldPrice: 180, manufacturer: "Dettol", image: "🧴", rating: 4.5, reviews: 98, inStock: true },
    { id: 24, name: "Дезодорант Rexona Cotton", category: "Гигиена", price: 210, oldPrice: 250, manufacturer: "Rexona", image: "🧴", rating: 4.6, reviews: 145, inStock: true },
    { id: 25, name: "Шампунь Head & Shoulders", category: "Гигиена", price: 320, oldPrice: 380, manufacturer: "P&G", image: "🧴", rating: 4.7, reviews: 312, inStock: true },
    { id: 26, name: "Влажные салфетки Huggies", category: "Гигиена", price: 90, oldPrice: 110, manufacturer: "Huggies", image: "🧻", rating: 4.8, reviews: 445, inStock: true },
    
    // МАМА И МАЛЫШ
    { id: 27, name: "Подгузники Pampers 4", category: "Мама и малыш", price: 890, oldPrice: 1050, manufacturer: "Pampers", image: "👶", rating: 4.9, reviews: 567, inStock: true },
    { id: 28, name: "Детская смесь Nutrilon 1", category: "Мама и малыш", price: 650, oldPrice: 750, manufacturer: "Nutricia", image: "🍼", rating: 4.8, reviews: 334, inStock: true },
    { id: 29, name: "Пюре ФрутоНяня яблоко", category: "Мама и малыш", price: 70, oldPrice: 85, manufacturer: "ФрутоНяня", image: "🥫", rating: 4.7, reviews: 223, inStock: true },
    { id: 30, name: "Детский крем Бюбхен", category: "Мама и малыш", price: 240, oldPrice: 280, manufacturer: "Bubchen", image: "🧴", rating: 4.8, reviews: 189, inStock: true },
    { id: 31, name: "Молокоотсос Philips", category: "Мама и малыш", price: 2450, oldPrice: 2900, manufacturer: "Philips", image: "🍼", rating: 4.7, reviews: 98, inStock: true },
    
    // СЕРДЦЕ И СОСУДЫ
    { id: 32, name: "Эналаприл 5мг №20", category: "Сердце и сосуды", price: 120, oldPrice: 150, manufacturer: "Акрихин", image: "💊", rating: 4.6, reviews: 187, inStock: true },
    { id: 33, name: "Бисопролол 5мг №30", category: "Сердце и сосуды", price: 210, oldPrice: 250, manufacturer: "Вертекс", image: "💊", rating: 4.7, reviews: 145, inStock: true },
    { id: 34, name: "Аторвастатин 20мг", category: "Сердце и сосуды", price: 380, oldPrice: 450, manufacturer: "Фармстандард", image: "💊", rating: 4.6, reviews: 98, inStock: true },
    { id: 35, name: "Кардиомагнил 75мг", category: "Сердце и сосуды", price: 190, oldPrice: 230, manufacturer: "Nycomed", image: "💊", rating: 4.8, reviews: 234, inStock: true },
    
    // АЛЛЕРГИЯ
    { id: 36, name: "Зодак капли 20мл", category: "Аллергия", price: 240, oldPrice: 290, manufacturer: "Zentiva", image: "💧", rating: 4.8, reviews: 267, inStock: true },
    { id: 37, name: "Эриус 5мг №10", category: "Аллергия", price: 420, oldPrice: 500, manufacturer: "Bayer", image: "💊", rating: 4.9, reviews: 189, inStock: true },
    { id: 38, name: "Фенистил гель 30г", category: "Аллергия", price: 350, oldPrice: 410, manufacturer: "Novartis", image: "🧴", rating: 4.7, reviews: 156, inStock: true },
    { id: 39, name: "Аллергозан мазь", category: "Аллергия", price: 290, oldPrice: 340, manufacturer: "Акрихин", image: "🧴", rating: 4.6, reviews: 87, inStock: true }
];

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let currentFilter = 'all';
let currentSearchTerm = '';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен');
    updateCategoryCounts();
    renderHomeProducts();
    renderCatalogProducts();
    renderFavoritesPage();
    renderCartPage();
    updateAllBadges();
    initEventListeners();
    initPageFromHash();
});

// ===== ПОДСЧЕТ ТОВАРОВ ПО КАТЕГОРИЯМ =====
function updateCategoryCounts() {
    const counts = {
        'Лекарства': products.filter(p => p.category === 'Лекарства').length,
        'Витамины': products.filter(p => p.category === 'Витамины').length,
        'Гигиена': products.filter(p => p.category === 'Гигиена').length,
        'Мама и малыш': products.filter(p => p.category === 'Мама и малыш').length,
        'Сердце и сосуды': products.filter(p => p.category === 'Сердце и сосуды').length,
        'Аллергия': products.filter(p => p.category === 'Аллергия').length,
        'all': products.length
    };
    
    // Обновляем счетчики на главной
    const homeCounts = {
        'count-lekarstva': counts['Лекарства'],
        'count-vitaminy': counts['Витамины'],
        'count-gigiena': counts['Гигиена'],
        'count-mama': counts['Мама и малыш'],
        'count-heart': counts['Сердце и сосуды'],
        'count-allergy': counts['Аллергия']
    };
    
    for (let [id, value] of Object.entries(homeCounts)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    // Обновляем счетчики в каталоге
    const catalogCounts = {
        'count-all': counts['all'],
        'count-cat-lekarstva': counts['Лекарства'],
        'count-cat-vitaminy': counts['Витамины'],
        'count-cat-gigiena': counts['Гигиена'],
        'count-cat-mama': counts['Мама и малыш'],
        'count-cat-heart': counts['Сердце и сосуды'],
        'count-cat-allergy': counts['Аллергия']
    };
    
    for (let [id, value] of Object.entries(catalogCounts)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
}

// ===== ОБНОВЛЕНИЕ БЕЙДЖЕЙ =====
function updateAllBadges() {
    updateCartBadge();
    updateFavoritesBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (!cartBadge) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
}

function updateFavoritesBadge() {
    const favoritesBadge = document.getElementById('favorites-badge');
    if (!favoritesBadge) return;
    
    const totalItems = favorites.length;
    favoritesBadge.textContent = totalItems;
    favoritesBadge.style.display = totalItems > 0 ? 'block' : 'none';
}

// ===== ИНИЦИАЛИЗАЦИЯ ОБРАБОТЧИКОВ =====
function initEventListeners() {
    // Навигация
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            switchPage(pageId);
        });
    });

    // Поиск в каталоге
    const catalogSearch = document.getElementById('catalog-search');
    if (catalogSearch) {
        catalogSearch.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            renderCatalogProducts();
        });
    }

    // Поиск на главной
    const homeSearch = document.getElementById('home-search');
    if (homeSearch) {
        homeSearch.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            renderHomeProducts();
        });
    }

    // Категории на главной - ПРИ КЛИКЕ ФИЛЬТРАЦИЯ
    document.querySelectorAll('#home-categories .category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Переходим в каталог
            switchPage('catalog');
            
            // Устанавливаем фильтр
            currentFilter = category;
            
            // Обновляем активный класс в фильтрах каталога
            document.querySelectorAll('#catalog-filters .category-card').forEach(filter => {
                filter.classList.remove('active');
                if (filter.getAttribute('data-filter') === category) {
                    filter.classList.add('active');
                }
            });
            
            // Перерисовываем товары
            renderCatalogProducts();
            showNotification(`Категория: ${category}`, 'success');
        });
    });

    // Фильтры в каталоге - ПРИ КЛИКЕ ФИЛЬТРАЦИЯ
    document.querySelectorAll('#catalog-filters .category-card').forEach(filter => {
        filter.addEventListener('click', function() {
            // Убираем активный класс у всех
            document.querySelectorAll('#catalog-filters .category-card').forEach(f => {
                f.classList.remove('active');
            });
            
            // Добавляем активный класс текущему
            this.classList.add('active');
            
            // Получаем категорию
            currentFilter = this.getAttribute('data-filter');
            
            // Перерисовываем товары
            renderCatalogProducts();
            
            // Показываем уведомление
            const filterName = this.querySelector('span').textContent;
            showNotification(`Фильтр: ${filterName}`, 'success');
        });
    });

    // Отправка форм (просто демо, без сохранения)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Демо-режим: вход в разработке', 'success');
            switchPage('home');
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Демо-режим: регистрация в разработке', 'success');
            switchPage('home');
        });
    }

    // Проверка пароля при регистрации (только визуально)
    const regPassword = document.getElementById('reg-password');
    const regConfirmPassword = document.getElementById('reg-confirm-password');
    
    if (regPassword) {
        regPassword.addEventListener('input', checkPasswordStrength);
    }
    
    if (regConfirmPassword) {
        regConfirmPassword.addEventListener('input', checkPasswordMatch);
    }
}

// ===== ОТРИСОВКА ТОВАРОВ =====
function renderHomeProducts() {
    let filtered = products;
    
    // ФИЛЬТРАЦИЯ ПО ПОИСКУ на главной
    if (currentSearchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm) ||
            p.manufacturer.toLowerCase().includes(currentSearchTerm) ||
            p.category.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // Берем первые 8 товаров (или меньше, если после поиска)
    const homeProductsList = filtered.slice(0, 8);
    const homeProducts = document.getElementById('home-products');
    
    if (homeProducts) {
        if (homeProductsList.length === 0) {
            homeProducts.innerHTML = '<div class="no-products">Товары не найдены</div>';
        } else {
            homeProducts.innerHTML = homeProductsList.map(product => createProductCard(product, 'home')).join('');
        }
    }
}

function renderCatalogProducts() {
    let filtered = products;
    
    // ФИЛЬТРАЦИЯ ПО КАТЕГОРИИ
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    
    // ФИЛЬТРАЦИЯ ПО ПОИСКУ
    if (currentSearchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm) ||
            p.manufacturer.toLowerCase().includes(currentSearchTerm) ||
            p.category.toLowerCase().includes(currentSearchTerm)
        );
    }

    const catalogProducts = document.getElementById('catalog-products');
    if (!catalogProducts) return;
    
    if (filtered.length === 0) {
        catalogProducts.innerHTML = '<div class="no-products">Товары не найдены</div>';
        return;
    }
    
    catalogProducts.innerHTML = filtered.map(product => createProductCard(product, 'catalog')).join('');
}

function renderFavoritesPage() {
    const favoritesContainer = document.getElementById('favorites-products');
    if (!favoritesContainer) return;
    
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        favoritesContainer.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-heart"></i>
                <p>В избранном пока нет товаров</p>
                <button class="btn btn-primary" onclick="switchPage('catalog')">
                    Перейти в каталог
                </button>
            </div>
        `;
        favoritesContainer.style.display = 'flex';
    } else {
        favoritesContainer.style.display = 'grid';
        favoritesContainer.innerHTML = favoriteProducts.map(product => createProductCard(product, 'favorites')).join('');
    }
}

function renderCartPage() {
    const cartContainer = document.getElementById('cart-items-page');
    const cartTotalContainer = document.getElementById('cart-total-page');
    
    if (!cartContainer || !cartTotalContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-page">
                <i class="fas fa-shopping-cart"></i>
                <p>Корзина пуста</p>
                <button class="btn btn-primary" onclick="switchPage('catalog')">
                    Перейти в каталог
                </button>
            </div>
        `;
        cartTotalContainer.innerHTML = '';
        return;
    }
    
    let itemsHtml = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        itemsHtml += `
            <div class="cart-item-page" data-id="${item.id}">
                <div class="cart-item-page-image">${item.image}</div>
                <div class="cart-item-page-info">
                    <div class="cart-item-page-title">${item.name}</div>
                    <div class="cart-item-page-manufacturer">${item.manufacturer || 'Аптека Здоровье'}</div>
                    <div class="cart-item-page-price">${item.price} ₽</div>
                </div>
                <div class="cart-item-page-quantity">
                    <button class="quantity-btn-page" onclick="updateQuantityPage(${item.id}, -1)">−</button>
                    <span class="quantity-value-page">${item.quantity}</span>
                    <button class="quantity-btn-page" onclick="updateQuantityPage(${item.id}, 1)">+</button>
                </div>
                <i class="fas fa-trash remove-item-page" onclick="removeFromCartPage(${item.id})"></i>
            </div>
        `;
    });
    
    const delivery = subtotal > 1000 ? 0 : 150;
    const total = subtotal + delivery;
    
    cartContainer.innerHTML = itemsHtml;
    
    cartTotalContainer.innerHTML = `
        <div class="cart-summary-page">
            <div class="cart-summary-row-page">
                <span>Подытог:</span>
                <span>${subtotal} ₽</span>
            </div>
            <div class="cart-summary-row-page">
                <span>Доставка:</span>
                <span>${delivery === 0 ? 'Бесплатно' : delivery + ' ₽'}</span>
            </div>
            <div class="cart-summary-row-page total">
                <span>Итого:</span>
                <span>${total} ₽</span>
            </div>
            <div class="cart-actions-page">
                <button class="btn-outline-page" onclick="switchPage('catalog')">
                    Продолжить покупки
                </button>
                <button class="btn-primary-page" onclick="checkout()">
                    <i class="fas fa-check"></i> Оформить заказ
                </button>
            </div>
        </div>
    `;
}

function createProductCard(product, sourcePage) {
    const isFavorite = favorites.includes(product.id);
    const inCart = cart.some(item => item.id === product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart favorite-icon" onclick="toggleFavoriteFromCard(${product.id}, '${sourcePage}'); event.stopPropagation();"></i>
            <div class="product-image">${product.image}</div>
            <h3>${product.name}</h3>
            <div class="product-category">${product.category}</div>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="price">${product.price} ₽</div>
            <button class="btn ${inCart ? 'btn-primary' : 'btn-cart'}" onclick="toggleCartFromCard(${product.id}, '${sourcePage}'); event.stopPropagation();">
                ${inCart ? 'В корзине' : 'В корзину'}
            </button>
        </div>
    `;
}

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ =====
window.toggleFavoriteFromCard = function(productId, sourcePage) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        showNotification('Удалено из избранного');
    } else {
        favorites.push(productId);
        showNotification('Добавлено в избранное');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    
    // Перерисовываем нужные страницы
    if (sourcePage === 'home' || sourcePage === 'catalog') {
        if (document.getElementById('home').classList.contains('active-page')) {
            renderHomeProducts();
        } else if (document.getElementById('catalog').classList.contains('active-page')) {
            renderCatalogProducts();
        }
    }
    renderFavoritesPage();
};

window.toggleCartFromCard = function(productId, sourcePage) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        cart.splice(existingItemIndex, 1);
        showNotification('Удалено из корзины');
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            manufacturer: product.manufacturer
        });
        showNotification('Добавлено в корзину');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Перерисовываем нужные страницы
    if (sourcePage === 'home' || sourcePage === 'catalog') {
        if (document.getElementById('home').classList.contains('active-page')) {
            renderHomeProducts();
        } else if (document.getElementById('catalog').classList.contains('active-page')) {
            renderCatalogProducts();
        }
    }
    renderCartPage();
};

window.updateQuantityPage = function(productId, change) {
    const itemIndex = cart.findIndex(i => i.id === productId);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
        renderCartPage();
        showNotification('Корзина обновлена');
    }
};

window.removeFromCartPage = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartPage();
    showNotification('Товар удален из корзины');
};

window.checkout = function() {
    showNotification('Заказ оформлен! Спасибо за покупку', 'success');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartPage();
    switchPage('home');
};

// ===== ПРОВЕРКА ПАРОЛЯ (ВИЗУАЛЬНО) =====
function checkPasswordStrength() {
    const password = document.getElementById('reg-password').value;
    const strengthIndicator = document.getElementById('password-strength');
    
    if (!strengthIndicator) return;
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    
    strengthIndicator.className = 'password-strength';
    if (strength <= 2) {
        strengthIndicator.classList.add('weak');
    } else if (strength <= 4) {
        strengthIndicator.classList.add('medium');
    } else {
        strengthIndicator.classList.add('strong');
    }
}

function checkPasswordMatch() {
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const matchIndicator = document.getElementById('password-match');
    
    if (!matchIndicator) return;
    
    if (confirmPassword.length === 0) {
        matchIndicator.textContent = '';
        matchIndicator.className = 'password-match';
    } else if (password === confirmPassword) {
        matchIndicator.textContent = '✓ Пароли совпадают';
        matchIndicator.className = 'password-match valid';
    } else {
        matchIndicator.textContent = '✗ Пароли не совпадают';
        matchIndicator.className = 'password-match invalid';
    }
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ===== НАВИГАЦИЯ (ОБНОВЛЕННАЯ С "О НАС") =====
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
        
        // Обновляем контент при переходе на страницы
        if (pageId === 'favorites') {
            renderFavoritesPage();
        } else if (pageId === 'cart') {
            renderCartPage();
        } else if (pageId === 'home') {
            renderHomeProducts();
        } else if (pageId === 'catalog') {
            renderCatalogProducts();
        }
        // Для страницы "О нас" ничего не рендерим, там статика
    }
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
    
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPageFromHash() {
    const hash = window.location.hash.substring(1);
    const validPages = ['home', 'catalog', 'favorites', 'cart', 'about', 'login', 'register'];
    
    if (hash && validPages.includes(hash)) {
        switchPage(hash);
    } else {
        switchPage('home');
    }
}

window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    const validPages = ['home', 'catalog', 'favorites', 'cart', 'about', 'login', 'register'];
    
    if (hash && validPages.includes(hash)) {
        switchPage(hash);
    }
});