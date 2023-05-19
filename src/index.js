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
    //mobile: false,
  });
});
