
import { contenido } from "./productos.js";


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
