/* Animacion de entrada estrellas que chocan con el contenedor  */

const stars = document.querySelectorAll('.moving-object');

  stars.forEach((star, i) => {
    const size = Math.random() * 50 + 16; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${3 + Math.random() * 2}s`;
  });
 
/*--------------------------- Carousel 1 de imagenes -----------------------------*/

let currentSlide = 0;
let autoSlideInterval = null;

const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const totalSlides = items.length;
const slideWidth = items[0].offsetWidth;

let startX = 0;
let currentX = 0;
let isDragging = false;
let animationFrame;
let isMouse = false;

function setTranslateX(x) {
  carouselInner.style.transition = 'none';
  carouselInner.style.transform = `translateX(${x}px)`;
}

function animateToSlide(index) {
  currentSlide = index;
  carouselInner.style.transition = 'transform 0.3s ease';
  carouselInner.style.transform = `translateX(${-index * slideWidth}px)`;
  updateCarousel();
  resetAutoSlide();
}

function updateCarousel() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function autoSlide() {
  if (currentSlide < totalSlides - 1) {
    animateToSlide(currentSlide + 1);
  } else {
    animateToSlide(0);
  }
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 7000);
}

// COMÚN (TOUCH + MOUSE)
function onDragStart(x) {
  startX = x;
  currentX = x;
  isDragging = true;
  cancelAnimationFrame(animationFrame);
  carouselInner.style.transition = 'none';
}

function onDragMove(x) {
  if (!isDragging) return;
  const deltaX = x - startX;
  const translateX = -currentSlide * slideWidth + deltaX;
  setTranslateX(translateX);
  currentX = x;
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;

  const delta = currentX - startX;

  if (Math.abs(delta) > slideWidth / 4) {
    if (delta < 0 && currentSlide < totalSlides - 1) {
      animateToSlide(currentSlide + 1);
    } else if (delta > 0 && currentSlide > 0) {
      animateToSlide(currentSlide - 1);
    } else {
      animateToSlide(currentSlide);
    }
  } else {
    animateToSlide(currentSlide);
  }
}

// TOUCH EVENTS
carouselInner.addEventListener("touchstart", (e) => onDragStart(e.touches[0].clientX), { passive: true });
carouselInner.addEventListener("touchmove", (e) => {
  onDragMove(e.touches[0].clientX);
  e.preventDefault();
}, { passive: false });
carouselInner.addEventListener("touchend", () => onDragEnd());

// MOUSE EVENTS
carouselInner.addEventListener("mousedown", (e) => {
  isMouse = true;
  onDragStart(e.clientX);
});

window.addEventListener("mousemove", (e) => {
  if (!isMouse) return;
  onDragMove(e.clientX);
});

window.addEventListener("mouseup", () => {
  if (!isMouse) return;
  isMouse = false;
  onDragEnd();
});

animateToSlide(0);
resetAutoSlide();


/******************Carrousel numero 2 de productos ************************/

let currentSlide2 = 0;
let autoSlideInterval2 = null;

const carouselInner2 = document.querySelector(".carousel-inner-2");
const items2 = document.querySelectorAll(".carousel-item-2");
const totalSlides2 = items2.length;
const slideWidth2 = items2[0].offsetWidth;

let startX2 = 0;
let currentX2 = 0;
let isDragging2 = false;
let animationFrame2;
let isMouse2 = false;

function setTranslateX2(x) {
  carouselInner2.style.transition = 'none';
  carouselInner2.style.transform = `translateX(${x}px)`;
}

function animateToSlide2(index) {
  currentSlide2 = index;
  carouselInner2.style.transition = 'transform 0.3s ease';
  carouselInner2.style.transform = `translateX(${-index * slideWidth2}px)`;
  updateCarousel2();
  resetAutoSlide2();
}

function updateCarousel2() {
  const dots2 = document.querySelectorAll(".dot-2");
  dots2.forEach((dot2, index) => {
    dot2.classList.toggle("active", index === currentSlide2);
  });
}

function autoSlide2() {
  if (currentSlide2 < totalSlides2 - 1) {
    animateToSlide2(currentSlide2 + 1);
  } else {
    animateToSlide2(0);
  }
}

function resetAutoSlide2() {
  clearInterval(autoSlideInterval2);
  autoSlideInterval2 = setInterval(autoSlide2, 7000);
}

// COMÚN (TOUCH + MOUSE)
function onDragStart2(x) {
  startX2 = x;
  currentX2 = x;
  isDragging2 = true;
  cancelanimationFrame2(animationFrame2);
  carouselInner2.style.transition = 'none';
}

function onDragMove2(x) {
  if (!isDragging2) return;
  const deltaX2 = x - startX2;
  const translateX2 = -currentSlide2 * slideWidth2 + deltaX2;
  setTranslateX2(translateX2);
  currentX2 = x;
}

function onDragEnd2() {
  if (!isDragging2) return;
  isDragging2 = false;

  const delta2 = currentX2 - startX2;

  if (Math.abs(delta2) > slideWidth2 / 4) {
    if (delta2 < 0 && currentSlide2 < totalSlides2 - 1) {
      animateToSlide2(currentSlide2 + 1);
    } else if (delta2 > 0 && currentSlide2 > 0) {
      animateToSlide2(currentSlide2 - 1);
    } else {
      animateToSlide2(currentSlide2);
    }
  } else {
    animateToSlide2(currentSlide2);
  }
}

// TOUCH EVENTS
carouselInner2.addEventListener("touchstart", (e) => onDragStart2(e.touches[0].clientX), { passive: true });
carouselInner2.addEventListener("touchmove", (e) => {
  onDragMove2(e.touches[0].clientX);
  e.preventDefault();
}, { passive: false });
carouselInner2.addEventListener("touchend", () => onDragEnd2());

// MOUSE EVENTS
carouselInner2.addEventListener("mousedown", (e) => {
  isMouse2 = true;
  onDragStart2(e.clientX);
});

window.addEventListener("mousemove", (e) => {
  if (!isMouse2) return;
  onDragMove2(e.clientX);
});

window.addEventListener("mouseup", () => {
  if (!isMouse2) return;
  isMouse2 = false;
  onDragEnd2();
});

animateToSlide2(0);
resetAutoSlide2();

/******************Nuevo Carrusel 3 ************************/

// let currentSlide3 = 0;
// let autoSlideInterval3 = 0; 

// function moveSlide3(step) {
//   const items = document.querySelectorAll(".carousel-item-3");
//   const totalSlides = items.length;

//   if (totalSlides === 0) {
//     console.error("No carousel items found");
//     return;
//   }

//   currentSlide3 = (currentSlide3 + step + totalSlides) % totalSlides;

//   const carouselInner = document.querySelector(".carousel-inner-3");
//   const slideWidth = items[0].offsetWidth;
//   carouselInner.style.transform = `translateX(${
//     -currentSlide3 * slideWidth
//   }px)`;

//   updateCarousel3();

//   clearInterval(autoSlideInterval3);
//   autoSlideInterval3 = setInterval(autoSlide3, 2000);
// }

// function autoSlide3() {
//   moveSlide3(1);
// }

// autoSlideInterval3 = setInterval(autoSlide3, 7000);

// function updateCarousel3() {
//   const items = document.querySelectorAll(".carousel-item-3");
//   const dots = document.querySelectorAll(".dot-3");

//   items.forEach((item, index) => {
//     item.classList.toggle("active", index === currentSlide3);
//   });

//   dots.forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentSlide3);
//   });
// }

//=================Boton de whatsapp flotante============================

let showMessageInterval;

function toggleFloatingMessage() {
  const whatsappButton = document.querySelector(".whatsapp-float");

  whatsappButton.classList.add("show-message"); 
  setTimeout(() => {
    whatsappButton.classList.remove("show-message");
    whatsappButton.classList.add("hide-message"); 
  }, 4000); 

  setTimeout(() => {
    whatsappButton.classList.remove("hide-message");
  }, 4500); 
}

showMessageInterval = setInterval(toggleFloatingMessage, 20000);

setTimeout(() => clearInterval(showMessageInterval), 120000); 

document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.querySelector('.whatsapp-float');
  const footer = document.getElementById('footer');
  let isFooterVisible = false;

  // Detectar cuando el footer está en pantalla
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isFooterVisible = entry.isIntersecting;
        toggleWhatsAppButton();
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(footer);

  // Mostrar el botón al deslizar hacia abajo y ocultar al volver arriba o llegar al footer
  window.addEventListener('scroll', () => {
    toggleWhatsAppButton();
  });

  function toggleWhatsAppButton() {
    if (isFooterVisible || window.scrollY <= 100) {
      whatsappButton.classList.remove('show');
      whatsappButton.classList.add('hidden');
    } else {
      whatsappButton.classList.remove('hidden');
      whatsappButton.classList.add('show');
    }
  }
});



//======================== Menu hamburguesa mobile ===================

const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Opcional: cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

//=================scroll progress=======================
let docElem = document.documentElement;
let barrita = document.querySelector("#progress")

window.addEventListener("scroll", () => {
  let winScroll = docElem.scrollTop;
  let height = docElem.scrollHeight - docElem.clientHeight;

  let scrolled = (winScroll / height) * 100;
  barrita.style.width = scrolled + "%";
}) 


// =======================Traduccion portugues==============================
   const langButton = document.querySelectorAll("[data-pt]");
   const textToChange = document.querySelectorAll("[data-section]");

   langButton.forEach((button) => {
     button.addEventListener("click", () => {
       const xhr = new XMLHttpRequest();
       xhr.open("GET", `../languages/${button.dataset.pt}.json`, true);
       xhr.onload = function() {
         if (xhr.status === 200) {
           const data = JSON.parse(xhr.responseText);
           textToChange.forEach((el) => {
             const section = el.dataset.section;
             const value = el.dataset.value;

             el.innerHTML = data[section][value];
           });
         }
       };
       xhr.send();
     });
   });


/*        Botones mas informacion          */ 
function cargarSeccion(seccion) {
  window.location.href = `mas_info.html?seccion=${seccion}`;
}
