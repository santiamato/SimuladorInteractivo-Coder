
class productos{
    constructor(id, nombre, precio, stock, tipo, imagen){
        this.id = id;
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

let naftaSuper = new productos(1, "Super", 180, 50, "NAFTA", "img/descarga.png");
let naftaDiesel = new productos(2, "Diesel", 70, 50, "NAFTA", "img/diesel.png");
let naftaInfinia = new productos(3, "Infinia", 250, 50, "NAFTA", "img/images.jpg");
let pebete = new productos(4, "Pebete", 100, 30, "COMIDA", "img/descarga (2).jpg");
let medialuna = new productos(5, "Medialuna", 80, 30, "COMIDA", "img/descarga (4).jpg");
let sandwich = new productos(6, "Sandwich de Miga", 50, 30, "COMIDA", "img/descarga (3).jpg");
let cocaCola = new productos(7, "Coca Cola", 200, 15, "BEBIDA", "img/descarga.jpg");
let agua = new productos(8, "Agua", 100, 20, "BEBIDA", "img/descarga (1).jpg");


const listaProductos = [];
listaProductos.push(naftaSuper, naftaDiesel, naftaInfinia, pebete, medialuna, sandwich, cocaCola, agua);  


function guardarProductosLS(producto) {
    localStorage.setItem("producto", JSON.stringify(producto));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("producto"));
}

for (const producto of listaProductos) {
    guardarProductosLS(listaProductos);
}



