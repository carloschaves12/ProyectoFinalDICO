document.addEventListener("DOMContentLoaded", function () {
  // Slider

  const arrayImages = [
    document.getElementById("slider1"),
    document.getElementById("slider2"),
    document.getElementById("slider3"),
    document.getElementById("slider4"),
  ];

  let currentImage = 0;
  let nextImage = 1;
  setInterval(changeImages, 5000);

  function changeImages() {

    if (nextImage >= arrayImages.length) {
      arrayImages[currentImage].classList.remove("active");
      currentImage = 0;
      nextImage = 1;
      arrayImages[currentImage].classList.add("active");
      return;
    }
    arrayImages[currentImage].classList.remove("active");
    arrayImages[nextImage].classList.add("active");
    currentImage = nextImage;
    nextImage++;
  }

  // Al pasar el boton sobre la imagen, se muestra el boton de "ver mas"
  setInterval(botonLlevar, 1000);
  const botonImagen = document.getElementById("boton-imagen");
  const imagen = botonImagen.previousElementSibling;

  function botonLlevar() {
    botonImagen.style.opacity = 0;
    
    if (window.innerWidth > 1024) {
      imagen.addEventListener("mouseover", () => {
        botonImagen.style.opacity = 1;
      });

      imagen.addEventListener("mouseout", () => {
        botonImagen.style.opacity = 0;
      });
    }
  }

  // Funcionalidad al icono del menú
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
