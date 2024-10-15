let currentSlide = 0;
let autoSlideInterval = 0; // Variable para guardar el intervalo de auto deslizamiento

function moveSlide(step) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;

  currentSlide = (currentSlide + step + totalSlides) % totalSlides;

  const carouselInner = document.querySelector(".carousel-inner");
  const slideWidth = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

  updateCarousel();

  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 4000);
}

function autoSlide() {
  moveSlide(1);
}

autoSlideInterval = setInterval(autoSlide, 7000);

function updateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  items.forEach((item, index) => {
    item.classList.toggle("active", index === currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

/******************Nuevo Carrusel 2 ************************/
let currentSlide2 = 0;
let autoSlideInterval2 = 0;

function moveSlide2(step) {
  const items = document.querySelectorAll(".carousel-item-2");
  const totalSlides = items.length;

  currentSlide2 = (currentSlide2 + step + totalSlides) % totalSlides;

  const carouselInner = document.querySelector(".carousel-inner-2");
  const slideWidth = items[0].offsetWidth;

  carouselInner.style.transform = `translateX(${-currentSlide2 * slideWidth}px)`;

  updateCarousel2();

  resetAutoSlide2();
}

function autoSlide2() {
  moveSlide2(1); 
}

function resetAutoSlide2() {
  clearInterval(autoSlideInterval2);
  autoSlideInterval2 = setInterval(autoSlide2, 7000);
}

function updateCarousel2() {
  const items = document.querySelectorAll(".carousel-item-2");
  const dots = document.querySelectorAll(".dot-2");

  items.forEach((item, index) => {
    item.classList.toggle("active", index === currentSlide2);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide2);
  });
}

window.addEventListener('load', () => {
  resetAutoSlide2(); // Iniciar el auto-slide después de la carga
});

window.addEventListener('resize', () => {
  const carouselInner = document.querySelector(".carousel-inner-2");
  const slideWidth = document.querySelector(".carousel-item-2").offsetWidth;

  carouselInner.style.transform = `translateX(${-currentSlide2 * slideWidth}px)`;
});

/******************Nuevo Carrusel 3 ************************/

let currentSlide3 = 0;
let autoSlideInterval3 = 0; // Variable para guardar el intervalo de auto deslizamiento

function moveSlide3(step) {
  const items = document.querySelectorAll(".carousel-item-3");
  const totalSlides = items.length;

  currentSlide3 = (currentSlide3 + step + totalSlides) % totalSlides;

  const carouselInner = document.querySelector(".carousel-inner-3");
  const slideWidth = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(${
    -currentSlide3 * slideWidth
  }px)`;

  updateCarousel3();

  clearInterval(autoSlideInterval3);
  autoSlideInterval3 = setInterval(autoSlide3, 4000);
}

function autoSlide3() {
  moveSlide3(1);
}

autoSlideInterval3 = setInterval(autoSlide3, 7000);

function updateCarousel3() {
  const items = document.querySelectorAll(".carousel-item-3");
  const dots = document.querySelectorAll(".dot-3");

  items.forEach((item, index) => {
    item.classList.toggle("active", index === currentSlide3);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide3);
  });
}

let showMessageInterval;

function toggleFloatingMessage() {
  const whatsappButton = document.querySelector(".whatsapp-float");

  whatsappButton.classList.add("show-message"); // Muestra el mensaje
  setTimeout(() => {
    whatsappButton.classList.remove("show-message");
    whatsappButton.classList.add("hide-message"); // Oculta el mensaje
  }, 4000); // Mantén el mensaje visible por 3 segundos

  setTimeout(() => {
    whatsappButton.classList.remove("hide-message");
  }, 4500); // Tiempo extra para terminar la animación de salida
}

// Inicia el intervalo para mostrar el mensaje cada 10 segundos
showMessageInterval = setInterval(toggleFloatingMessage, 20000);

// Opcional: Detener mensaje despues de 1 minuto
setTimeout(() => clearInterval(showMessageInterval), 120000); // Detener después de 1 minuto

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");

  if (navLinks.classList.contains("mobile-hidden")) {
    navLinks.classList.remove("mobile-hidden");
    navLinks.classList.add("mobile-visible");
  } else {
    navLinks.classList.remove("mobile-visible");
    navLinks.classList.add("mobile-hidden");

    // Espera que termine la animación de salida para ocultar
    navLinks.addEventListener("animationend", function handleAnimationEnd() {
      navLinks.style.display = "none"; // Ocultar después de la animación
      navLinks.removeEventListener("animationend", handleAnimationEnd);
    });
  }

  // Asegurar que esté visible al mostrar
  navLinks.style.display = "flex";
}
