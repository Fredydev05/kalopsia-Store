// Seleccionar el modal y la imagen
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

// Agregar un evento click a cada imagen zoomable
document.querySelectorAll(".zoomable").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

function abrirModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = src;
  modal.style.display = "flex";
}


function cerrarModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

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

/*                Objetos de mas informacion            */

const params = new URLSearchParams(window.location.search);
const seccion = params.get("seccion");

function cargarContenido(seccion) {
  
  const wrapperImages = document.querySelector(".wrapper-images");
  const infoTitle = document.querySelector(".info-title");
  const infoDesc = document.querySelector(".info-desc");
  const infoSubDesc = document.querySelector(".info-subdesc");

  const contenido = {

    jarroncitos: {
      titulo: "Jarroncitos",
      descripcion: "Información sobre jarroncitos...",
      subdesc: "(click en la imagen para zoom)",
      imagenes: [
        "./img/productos/jarroncitos/jarrito gibili.jpg",
        "./img/productos/jarroncitos/jarroncito 2-1.jpg",
        "./img/productos/jarroncitos/jarroncito 2.jpg",
        "./img/productos/jarroncitos/jarroncito blanco.jpg",
        "./img/productos/jarroncitos/jarroncito rosa.jpg",
        "./img/productos/jarroncitos/jarroncito gibili 2.jpg",
      ],
    },

    tazas: {
      titulo: "Tazas",
      descripcion: "Información sobre tazas...",
      subdesc: "(click en la imagen para zoom)",
      imagenes: [
        "./img/productos/tazas/taza 1.jpg",
        "./img/productos/tazas/taza kanye 2.jpg",
        "./img/productos/tazas/taza kanye.jpg",
        "./img/productos/tazas/taza slipknot.jpg",
        "./img/productos/tazas/taza suga 2.jpg",
        "./img/productos/tazas/taza tylor 2.jpg",
        "./img/productos/tazas/taza tylor.jpg",
      ],
    },

    platos: {
      titulo: "Platos",
      descripcion: "Información sobre platos...",
      subdesc: "(click en la imagen para zoom)",
      imagenes: [
        "./img/productos/platos/plato1.jpg",
        "./img/productos/platos/plato2.jpg",
        "./img/productos/platos/plato3.jpg",
      ],

    },
  };

  localStorage.setItem("contenido", JSON.stringify(contenido));
  
  // Cargar título, descripción e imágenes si existen
  if (contenido[seccion]) {

    let productosLS = localStorage.getItem("contenido");
    let productos = JSON.parse(productosLS);

    infoTitle.textContent = productos[seccion].titulo;
    infoDesc.textContent = productos[seccion].descripcion;
    infoSubDesc.textContent = productos[seccion].subdesc;

    wrapperImages.innerHTML = productos[seccion].imagenes
      .map(
        (img) =>
          `<div><img src="${img}" alt="Imagen de ${seccion}" class="zoomable" onclick="abrirModal('${img}')" /></div>`
      )
      .join("");
  }
}

cargarContenido(seccion);
