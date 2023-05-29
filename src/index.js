document.addEventListener("DOMContentLoaded", function () {
  // Slider
  const imgslider1 = document.getElementById("slider1");
  const imgslider2 = document.getElementById("slider2");

  setInterval(changeImages, 5000);

  function changeImages() {
    console.log("changeImages");
    if (imgslider1.classList.contains("active")) {
      console.log("slider1 active");
      imgslider1.classList.remove("active");
      imgslider2.classList.add("active");
    } else {
      console.log("slider2 active");
      imgslider2.classList.remove("active");
      imgslider1.classList.add("active");
    }
  }

  // Al pasar el boton sobre la imagen, se muestra el boton de "ver mas"
  const botonImagen = document.getElementById("boton-imagen");
  const imagen = botonImagen.previousElementSibling;

  imagen.addEventListener("mouseover", () => {
    botonImagen.style.opacity = 1;
  });

  imagen.addEventListener("mouseout", () => {
    botonImagen.style.opacity = 0;
  });

  // Funcionalidad al icono del menú
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
