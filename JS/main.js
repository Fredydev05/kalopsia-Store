window.onload = function(){   //pantalla de carga
  $('#onload').fadeOut();
  $('body').removeClass('body-hidden')
}

/**************Carousel 1 *******************/

let currentSlide = 0;
let autoSlideInterval = 0; 

function moveSlide(step) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;
  if (totalSlides === 0) {
    console.error("No carousel items found");
    return;
  }

  currentSlide = (currentSlide + step + totalSlides) % totalSlides;

  const carouselInner = document.querySelector(".carousel-inner");
  const slideWidth = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

  updateCarousel();

  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 2000);
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
  autoSlideInterval2 = setInterval(autoSlide2, 2000);
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
let autoSlideInterval3 = 0; 

function moveSlide3(step) {
  const items = document.querySelectorAll(".carousel-item-3");
  const totalSlides = items.length;

  if (totalSlides === 0) {
    console.error("No carousel items found");
    return;
  }

  currentSlide3 = (currentSlide3 + step + totalSlides) % totalSlides;

  const carouselInner = document.querySelector(".carousel-inner-3");
  const slideWidth = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(${
    -currentSlide3 * slideWidth
  }px)`;

  updateCarousel3();

  clearInterval(autoSlideInterval3);
  autoSlideInterval3 = setInterval(autoSlide3, 2000);
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



//========================menu mobile===================

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");


  if (navLinks.classList.contains("mobile-hidden")) {
    navLinks.classList.remove("mobile-hidden");
    navLinks.classList.add("mobile-visible");
  } else {
    navLinks.classList.remove("mobile-visible");
    navLinks.classList.add("mobile-hidden");

    navLinks.addEventListener("animationend", function handleAnimationEnd() {
      navLinks.style.display = "none";
      navLinks.removeEventListener("animationend", handleAnimationEnd);
    });
  }

  navLinks.style.display = "flex";
}


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
