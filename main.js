let currentSlide = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    // Calcular el nuevo índice del slide
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    // Mover el contenedor
    const carouselInner = document.querySelector('.carousel-inner');
    const slideWidth = items[0].offsetWidth;
    carouselInner.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

    updateCarousel();
}

function autoSlide() {
    moveSlide(1); // Avanzar un slide

}
// Establecer el intervalo para que el carrusel avance cada 3 segundos
setInterval(autoSlide, 4000);

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentSlide);
    });
  
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }