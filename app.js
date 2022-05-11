
// VARIABLES
let accion;
let tipoNafta;
let litros;
let tipoDeConsumible;
let comida;
let bebida;
let contenedor = document.getElementById("container");


class productos{
    constructor(nombre, precio, stock, tipo, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
        this.imagen = imagen;
    }

    calcularPrecio = (a, b) => {
        return a * b
    }
}

let naftaSuper = new productos("Super", 180, 50, "NAFTA", "img/descarga.png");
let naftaDiesel = new productos("Diesel", 70, 50, "NAFTA", "img/diesel.png");
let naftaInfinia = new productos("Infinia", 250, 50, "NAFTA", "img/images.jpg");
let pebete = new productos("Pebete", 100, 30, "COMIDA", "img/descarga (2).jpg");
let medialuna = new productos("Medialuna", 80, 30, "COMIDA", "img/descarga (4).jpg");
let sandwich = new productos("Sandwich de Miga", 50, 30, "COMIDA", "img/descarga (3).jpg");
let cocaCola = new productos("Coca Cola", 200, 15, "BEBIDA", "img/descarga.jpg");
let agua = new productos("Agua", 100, 20, "BEBIDA", "img/descarga (1).jpg");


const listaProductos = [];
listaProductos.push(naftaSuper, naftaDiesel, naftaInfinia, pebete, medialuna, sandwich, cocaCola, agua);  

//FUNCIONES
cargarNafta = () => "Tu tanque esta cargado!";

saludar = () => "Vuelva Pronto!";


mostrarProductos = (mostrar) => {
    listaProductos.filter((el) => el.tipo.includes(mostrar)).forEach((producto) => {
        let contenedor = document.getElementById("container");
        contenedor.innerHTML = "";
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

agregarAlCarrito = () => {
    let contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    let divCompra = document.createElement("div");
        divCompra.innerHTML =  
    `<body class="d-flex h-100 text-center text-white bg-dark" cz-shortcut-listen="true">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main class="px-3">
                <h1>Cover your page.</h1>
                <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>
        </div>
    </body>`
    document.body.append(divCompra);
}

let btnNafta = document.getElementById("btnNafta");
btnNafta.onclick = () => mostrarProductos("NAFTA");

let btnTienda = document.getElementById("btnTienda");
btnTienda.onclick = () => {
    mostrarProductos("COMIDA");
    mostrarProductos("BEBIDA");
};

let btnCantidad = document.getElementById("btnCantidad").value;
document.addEventListener("DOMContentLoaded", function() {
    btnCantidad.onkeydown = () => agregarAlCarrito(btnCantidad.value);
})

let btnComprar = document.getElementById("btnComprar");
document.addEventListener("DOMContentLoaded", function() {
    btnCantidad.onclick = () => agregarAlCarrito();
})






