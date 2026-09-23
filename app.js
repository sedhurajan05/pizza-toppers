// NAVBAR
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// PAUSE HERO ANIMATIONS ON SCROLL
const heroBg = document.querySelector('.hero-bg');
const steamBg = document.querySelector('.steam-bg');
const steamSpans = document.querySelectorAll('.steam-bg span');
const heroSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
  navbar.classList.toggle('nav-top', !scrolled);
  const pastHero = window.scrollY > heroSection.offsetHeight * 0.8;
  const state = pastHero ? 'paused' : 'running';
  heroBg.style.animationPlayState = state;
  steamSpans.forEach(s => s.style.animationPlayState = state);
  steamBg.style.visibility = pastHero ? 'hidden' : 'visible';
}, { passive: true });
navbar.classList.add('nav-top');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !document.getElementById('cartDrawer').contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// MENU DATA
const menuData = {
  classic: [
    { name: 'Margherita', price: 299, desc: 'Fresh mozzarella, San Marzano tomatoes, basil', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' },
    { name: 'Pepperoni Classic', price: 349, desc: 'Premium pepperoni, mozzarella, tomato sauce', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80' },
    { name: 'BBQ Chicken', price: 379, desc: 'Grilled chicken, BBQ sauce, red onions, mozzarella', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' },
    { name: 'Four Cheese', price: 399, desc: 'Mozzarella, cheddar, parmesan, gorgonzola', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80' }
  ],
  veg: [
    { name: 'Garden Fresh', price: 319, desc: 'Bell peppers, mushrooms, olives, cherry tomatoes', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80' },
    { name: 'Paneer Tikka', price: 349, desc: 'Tandoori paneer, capsicum, onion, mint chutney base', img: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=600&q=80' },
    { name: 'Mushroom Truffle', price: 369, desc: 'Wild mushrooms, truffle oil, parmesan, arugula', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' },
    { name: 'Spinach Artichoke', price: 339, desc: 'Creamed spinach, artichoke hearts, garlic, mozzarella', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' }
  ],
  nonveg: [
    { name: 'Chicken Supreme', price: 399, desc: 'Grilled chicken, jalapeños, corn, mozzarella', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80' },
    { name: 'Meat Lovers', price: 449, desc: 'Pepperoni, chicken, bacon, sausage', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80' },
    { name: 'Spicy Chicken', price: 379, desc: 'Fiery chicken, ghost pepper sauce, onions', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80' },
    { name: 'Prawn Delight', price: 479, desc: 'Garlic prawns, cherry tomatoes, lemon zest, basil', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' }
  ],
  signature: [
    { name: 'Truffle Royale', price: 549, desc: 'Black truffle, wild mushrooms, 24K gold flakes, burrata', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' },
    { name: 'The Inferno', price: 499, desc: 'Triple chilli, nduja sausage, honey drizzle, mozzarella', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80' },
    { name: 'Wood-Fire Special', price: 529, desc: "Chef's daily special, seasonal ingredients, stone-baked", img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80' },
    { name: 'Burrata Bliss', price: 489, desc: 'Fresh burrata, heirloom tomatoes, basil oil, sea salt', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80' }
  ],
  burger: [
    { name: 'Chicken Burger', price: 199, desc: 'Crispy fried chicken, lettuce, mayo, brioche bun', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
    { name: 'Veg Burger', price: 169, desc: 'Crispy veggie patty, tomato, onion, cheese, mustard', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80' },
    { name: 'Paneer Burger', price: 189, desc: 'Tandoori paneer patty, mint chutney, onion rings, brioche', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80' },
    { name: 'Tower Burger', price: 279, desc: 'Double patty, bacon, egg, cheese, caramelised onions', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80' },
    { name: 'Spicy Smash Burger', price: 229, desc: 'Smashed beef patty, ghost pepper sauce, jalapeños, cheddar', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80' }
  ]
};

// RENDER MENU CARDS
function renderMenu(tab) {
  const items = menuData[tab];
  const isScroll = tab === 'burger';
  const gridClass = isScroll ? 'menu-scroll' : 'menu-grid';
  const html = `<div class="${gridClass}">` +
    items.map(item => `
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-inner">
          <div class="flip-front">
            <img src="${item.img}" alt="${item.name}" loading="lazy"/>
            <div class="card-info"><h3>${item.name}</h3><span class="price">₹${item.price}</span></div>
          </div>
          <div class="flip-back">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <button class="btn-add-cart" onclick="event.stopPropagation();addToCart('${item.name}',${item.price})"><i class="fas fa-plus"></i> Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('') +
  '</div>';
  const container = document.getElementById('tab-' + tab);
  container.innerHTML = html;
}

// MENU TABS
const renderedTabs = new Set();

function activateTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  if (!renderedTabs.has(tab)) {
    renderMenu(tab);
    renderedTabs.add(tab);
  }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

activateTab('classic');

// CART
let cart = [];

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
  animateBadge();
  if (cart.length === 1 && !existing) {
    openCart();
  } else {
    showToast(name + ' added to cart');
  }
}

function updateCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  const badgeEl = document.getElementById('cartBadge');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  badgeEl.textContent = totalQty;
  totalEl.textContent = '₹' + totalPrice;

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    itemsEl.innerHTML = '';
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';

  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
      </div>
      <div class="cart-qty">
        <button onclick="changeQty(${idx}, -1)"><i class="fas fa-minus"></i></button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${idx}, 1)"><i class="fas fa-plus"></i></button>
      </div>
      <button class="cart-remove" onclick="removeItem(${idx})"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');

  const msg = cart.map(i => `${i.qty}x ${i.name} - ₹${i.price * i.qty}`).join('%0A') +
    '%0A─────────────────%0A' +
    'Total: ₹' + totalPrice;
  document.getElementById('cartWhatsapp').href = `https://wa.me/919789163364?text=Hi, I'd like to order:%0A${msg}`;
}

function changeQty(idx, dir) {
  cart[idx].qty += dir;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}

function removeItem(idx) {
  cart.splice(idx, 1);
  updateCart();
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function animateBadge() {
  const badge = document.getElementById('cartBadge');
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 200);
}

function showToast(msg) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    document.body.appendChild(toast);
  }
  toast.textContent = '✓ ' + msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2000);
}

document.getElementById('cartIconBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
document.getElementById('cartClear').addEventListener('click', () => {
  cart = [];
  updateCart();
});

updateCart();

// GALLERY LIGHTBOX
const galleryImgs = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80',
  'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80',
  'https://images.unsplash.com/photo-1548369937-47519962c11a?w=800&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80'
];

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let lbIndex = 0;

function openLightbox(idx) {
  lbIndex = idx;
  lbImg.src = galleryImgs[lbIndex];
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function lbMove(dir) {
  lbIndex = (lbIndex + dir + galleryImgs.length) % galleryImgs.length;
  lbImg.src = galleryImgs[lbIndex];
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => openLightbox(+item.dataset.index));
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbMove(-1));
document.getElementById('lbNext').addEventListener('click', () => lbMove(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') lbMove(-1);
  else if (e.key === 'ArrowRight') lbMove(1);
  else if (e.key === 'Escape') closeLightbox();
});

// TESTIMONIALS CAROUSEL
const track = document.getElementById('carTrack');
const cards = track.querySelectorAll('.testi-card');
const dotsWrap = document.getElementById('carDots');
let carIdx = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'car-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(idx) {
  carIdx = (idx + cards.length) % cards.length;
  track.style.transform = `translateX(-${carIdx * 100}%)`;
  dotsWrap.querySelectorAll('.car-dot').forEach((d, i) => d.classList.toggle('active', i === carIdx));
}

document.getElementById('carPrev').addEventListener('click', () => goTo(carIdx - 1));
document.getElementById('carNext').addEventListener('click', () => goTo(carIdx + 1));
setInterval(() => goTo(carIdx + 1), 5000);

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      formMsg.textContent = "Thank you! We'll confirm your order within 30 minutes.";
      formMsg.className = 'form-msg success';
      contactForm.reset();
    } else { throw new Error(); }
  } catch {
    formMsg.textContent = 'Something went wrong. Please WhatsApp us directly.';
    formMsg.className = 'form-msg error';
  }
});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.body.classList.toggle('dark', !isLight);
  themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
});
