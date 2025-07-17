document.getElementById('animeSearch').addEventListener('input', function () {
  const search = this.value.toLowerCase();
  const cards = document.querySelectorAll('#animeGrid .card');
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(search) ? '' : 'none';
  });
});

document.querySelectorAll('.fav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent.includes('★') ? '☆ Watch Later' : '★ Added to Favorites';
  });
});
