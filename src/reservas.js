document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const dateField = document.getElementById("date");
  dateField.min = today.toISOString().split("T")[0];

  const form = document.getElementById("reservation-form");
  const errorMessage = document.getElementById("error-message");
  const reservationDetails = document.getElementById("reservation-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    // Verificar campos requeridos
    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("phone").value;
    const personas = document.getElementById("people").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("time").value;

    if (nombre && telefono && personas && fecha && hora) {
      // Mostrar detalles de la reserva
      reservationDetails.innerHTML = `Gracias ${nombre} por reservar.\n Te esperamos el ${fecha} a las ${hora}.`;
      form.style.display = "none";
      reservationDetails.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      // Mostrar mensaje de error
      errorMessage.style.display = "block";
      reservationDetails.style.display = "none";
    }
  });

  var timeSelect = document.getElementById("time");

  // Generar opciones de hora cada 30 minutos
  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 60; j += 30) {
      var hour = i.toString().padStart(2, "0");
      var minute = j.toString().padStart(2, "0");
      var optionText = hour + ":" + minute;
      var optionValue = hour + ":" + minute + ":00";
      var option = document.createElement("option");
      option.text = optionText;
      option.value = optionValue;
      timeSelect.appendChild(option);
    }
  }
});
