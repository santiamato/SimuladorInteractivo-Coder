
function renderProducto() {
    let id = localStorage.getItem("ver_producto");
    let producto = buscarProducto(id);
    let contenido_producto = document.getElementById("contenido_producto");
    
    // Agrego la primer columna
    let columna1 = document.createElement("div");
    columna1.className = "col-md-4 offset-md-2";
    // Creo la imagen
    let imagen = document.createElement("img");
    imagen.src = "images/" + producto.imagen;
    imagen.className = "img-fluid";
    // Agrego la imagen al div
    columna1.appendChild(imagen);
    // Agrego la columna al padre contenido_producto
    contenido_producto.appendChild(columna1);

    // Agrego la segunda columna
    let columna2 = document.createElement("div");
    columna2.className = "col-md-4";
    let encabezado = document.createElement("h3");
    encabezado.innerText = producto.nombre;
    let precio = document.createElement("p");
    precio.innerHTML = `<b>$${producto.precio}</b>`;
    let boton = document.createElement("button");
    boton.onclick = () => {
        agregarAlCarrito(producto.id);
    }
    boton.className = "btn btn-primary";
    boton.innerHTML = "Agregar (+)";
    // Agrego la imagen al div
    columna2.appendChild(encabezado);
    // Agrego las calorias al div
    columna2.appendChild(precio);
    columna2.appendChild(boton);
    // Agrego la columna al padre contenido_producto
    contenido_producto.appendChild(columna2);
}

renderProducto();
actualizarBotonCarrito();