// NAVBAR
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
  navbar.classList.toggle('nav-top', !scrolled);
});
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

// MENU TABS
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

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
  openCart();
  animateBadge();
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
