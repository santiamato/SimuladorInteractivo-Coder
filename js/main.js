
function cargarProductos() {
    fetch('/productos.json')
    .then( (res) => res.json())
    .then( (data) => {

        let productos = cargarProductosLS();
        let contenido = "";
        data.forEach((producto) => {
            contenido += `<div class="col-md-3">
            <div class="card">
            <a href="#" onclick="verProducto(${producto.id});"><img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</a>
            </div>
            </div>
            </div>`;
   
            document.getElementById("productos").innerHTML = contenido;
        })
    })
}

guardarProductosLS(productos);
cargarProductos();
actualizarBotonCarrito();


