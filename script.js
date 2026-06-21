let currentSlide = 0;

function moveSlider() {
  const slider = document.querySelector('.bestseller-slider');
  if (!slider) return;

  const cards = document.querySelectorAll('.bestseller-slider .product-card');
  currentSlide++;

  if (currentSlide >= cards.length) {
    currentSlide = 0;
  }

  slider.scrollTo({
    left: cards[currentSlide].offsetLeft,
    behavior: 'smooth'
  });
}

setInterval(moveSlider, 3000);
