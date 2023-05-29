document.addEventListener('DOMContentLoaded', function(){
    
  // Configuración de ScrollReveal.js

  // Carga de abajo hacia arriba
  ScrollReveal().reveal(".sr", {
    delay: 200,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
  });

    // Carga de izquierda a derecha
    ScrollReveal().reveal(".sr2", {
        delay: 200,
        distance: "50px",
        duration: 1000,
        easing: "ease-in-out",
        origin: "left",
    });
});