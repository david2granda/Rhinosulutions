document.getElementById("boton").addEventListener("click", function() {
    alert("¡Bien ahora tengo que crear el servicio.");
});

// Agregamos un efecto al hacer scroll
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.6)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.2)";
    }
});
