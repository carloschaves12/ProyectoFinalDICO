document.addEventListener("DOMContentLoaded", function () {
  const botonImagen = document.getElementById("boton-imagen");
  const imagen = botonImagen.previousElementSibling;

  imagen.addEventListener("mouseover", () => {
    botonImagen.style.opacity = 1;
  });

  imagen.addEventListener("mouseout", () => {
    botonImagen.style.opacity = 0;
  });

  // Configuración de ScrollReveal.js
  ScrollReveal().reveal(".sr", {
    delay: 200,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
  });

  // Obtén los elementos del DOM
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  // Añade un evento de clic al icono del menú
  menuIcon.addEventListener("click", function () {
    // Alterna la clase 'active' del menú para mostrar u ocultar el menú desplegable
    menu.classList.toggle("active");
  });
});
