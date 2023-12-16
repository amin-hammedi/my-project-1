let currentIndex = 0;

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function showSlide(index) {
  const slides = document.querySelector(".slider-content");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  const translateValue = -index * 100 + "%";
  slides.style.transform = "translateX(" + translateValue + ")";
  currentIndex = index;
}

setInterval(nextSlide, 3000);
