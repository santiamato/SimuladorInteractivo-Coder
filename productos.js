

mostrarProductos = (mostrar) => {
    cargarProductosLS(productos);
    let divProductos = document.getElementById("divProductos");
    divProductos.innerHTML = "";
    listaProductos.filter((el) => el.tipo.includes(mostrar)).forEach((producto) => {
        let divProducto = document.createElement("div");
            divProducto.innerHTML = 
            
            `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center m-5 d-flex justify-content-center">
                <div class="card col-sm-2 col-lg-4">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">${producto.nombre}</h4>
                        </div>
                        <div class="card-body">
                            <img src="${producto.imagen}" alt="">
                            <h1 class="card-title pricing-card-title">$${producto.precio}<small class="text-muted fw-light">c/u</small></h1>
                            <label for="btnCantidad"></label>
                            <input id="btnCantidad" type="number" class="w-100 btn btn-lg m-2" placeholder="Indique Cantidad">
                            <button id="btnComprar" type="button" class="w-100 btn btn-lg btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>`
            document.body.append(divProducto);
            
    });
        
};

let verNaftas = document.getElementById("verNaftas")
verNaftas.addEventListener("click", mostrarProductos("NAFTA"));

let verComidas = document.getElementById("verComidas")
verComidas.addEventListener("click", mostrarProductos("COMIDA"));

let verBebidas = document.getElementById("verBebidas")
verBebidas.addEventListener("click", mostrarProductos("BEBIDA"));




