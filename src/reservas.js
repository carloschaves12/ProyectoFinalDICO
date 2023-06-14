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

  // Generar opciones de hora cada 30 minutos
  const timeSelect = document.getElementById("time");

  // Generar opciones de horario de 12:00 a 16:00
  for (let hour = 12; hour <= 15; hour++) {
    for (let minute = 0; minute <= 30; minute += 30) {
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const option = document.createElement("option");
      option.value = formattedTime;
      option.textContent = formattedTime;
      timeSelect.appendChild(option);
    }
  }

  // Generar opciones de horario de 20:30 a 00:30
  for (let hour = 20; hour <= 23; hour++) {
    for (let minute = 30; minute <= 30; minute += 30) {
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const option = document.createElement("option");
      option.value = formattedTime;
      option.textContent = formattedTime;
      timeSelect.appendChild(option);
    }
  }
});
