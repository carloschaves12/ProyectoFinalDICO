document.addEventListener("DOMContentLoaded", function () {
  const botonImagen = document.getElementById("boton-imagen");
  const imagen = botonImagen.previousElementSibling;

  imagen.addEventListener("mouseover", () => {
    botonImagen.style.opacity = 1;
  });

  imagen.addEventListener("mouseout", () => {
    botonImagen.style.opacity = 0;
  });
});
