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

  // Funcionalidad al icono del menú
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
