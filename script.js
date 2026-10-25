// Menu HP
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Animasi muncul saat di-scroll (kartu saja)
const items = document.querySelectorAll('.card');
items.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
items.forEach(el => io.observe(el));

// Tombol "Lihat Detail" membuka jendela rincian proyek
const dlg = document.getElementById('dlg');
document.querySelectorAll('.detail').forEach(btn => btn.addEventListener('click', () => {
  const card = btn.closest('.card');
  document.getElementById('dt').textContent = card.querySelector('h3').textContent;
  document.getElementById('dd').textContent = card.dataset.detail;
  document.getElementById('dtags').textContent = card.querySelector('.tags').textContent;
  dlg.showModal();
}));
document.getElementById('close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
