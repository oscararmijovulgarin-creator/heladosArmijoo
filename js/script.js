// 1. Mensaje de contacto
function mostrarMensaje() {
alert("Gracias por contactar a Helados Estrella. Pronto responderemos tu mensaje.");
}

// 2. Resaltar página activa del menú
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
if (enlace.href === window.location.href) {
enlace.style.backgroundColor = "#ff5d8f";
enlace.style.color = "white";
enlace.style.padding = "5px 10px";
enlace.style.borderRadius = "5px";
}
});

// 3. Mostrar información del producto seleccionado
function mostrarProducto(sabor) {
alert("Has seleccionado helado de " + sabor + ". Elaborado con ingredientes naturales.");
}

// 4. Saludo dinámico según la hora
const hora = new Date().getHours();
let saludo = "";

if (hora < 12) {
saludo = "Buenos días";
} else if (hora < 18) {
saludo = "Buenas tardes";
} else {
saludo = "Buenas noches";
}

console.log(saludo + ", bienvenido a Helados Estrella");
