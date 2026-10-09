// Muestra un mensaje de bienvenida al pulsar un botón.
function mostrarBienvenida() {
    document.getElementById("mensaje").textContent =
        "¡Bienvenido a mi sitio web amateur del Gran Premio de España 2026!";
}

// Muestra los datos principales del circuito.
function mostrarDatosCircuito() {
    document.getElementById("datosCircuito").textContent =
        "Madring está en Madrid, mide aproximadamente 5,4 km y tiene 22 curvas.";
}

// Cambia el tamaño del texto del podio.
function cambiarTamanoPodio() {
    document.getElementById("podio").style.fontSize = "24px";
}
