
// VARIABLES
let accion;
let tipoNafta;
let litros;
let tipoDeConsumible;
let comida;
let bebida;


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





