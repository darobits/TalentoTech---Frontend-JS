
function mostrarMensaje() {
    
    const mensaje = document.createElement("div");
    mensaje.className = "mensaje-carrito";

    mensaje.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> Producto añadido correctamente!`;

    
    document.body.appendChild(mensaje);

    
    setTimeout(() => {
        mensaje.remove();
    }, 2000);
}


document.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', (event) => {
        event.preventDefault(); 
        mostrarMensaje();
    });
});
