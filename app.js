
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


mostrarProductos = (mostrar) => {
    listaProductos.filter((el) => el.tipo.includes(mostrar)).forEach((producto) => {
        let contenedor = document.getElementById("container")
        contenedor.innerHTML = "";
        let divProducto = document.createElement("div")
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
                            <button type="button" class="w-100 btn btn-lg btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>`
            document.body.append(divProducto)
    });
        
};

let btmNafta = document.getElementById("btmNafta")
btmNafta.onclick = () => mostrarProductos("NAFTA");

let btmTienda = document.getElementById("btmTienda")
btmTienda.onclick = () => {
    mostrarProductos("COMIDA");
    mostrarProductos("BEBIDA");
};

// do{
//     let tipoNafta  = (listaProductos.filter((el) => el.tipo.includes("NAFTA")));
//     let nombresNaftas = tipoNafta.map((el) => el.nombre);

//     accion = document.getElementById("btn-nafta");
//     accion.onclick = ()

//     if (accion == listaProductos[1].tipo) {
//         do{
//             litros = parseInt(prompt("Cuantos litros?"));
//             if (litros > listaProductos[1].stock) {
//                 alert("El maximo de nafta recargable es 50 litros");
//             }else if (litros <= 0){
//                 alert("Cargue una cantidad valida");
//             }
//         }while ((litros > listaProductos[1].stock) || (litros <= 0));

//         do{
//             tipoNafta = prompt(`De cual? ${nombresNaftas}`).toUpperCase();
//             if (tipoNafta != "SUPER" && tipoNafta != "DIESEL" && tipoNafta != "INFINIA") {
//                 alert("No contamos con ese combustible");
//             }else{
//                 alert(`Se le cargara: ${litros} litros de ${tipoNafta}`);
//                 alert(cargarNafta());
//                 alert(saludar());
//                 break;
//             }
//         }while (tipoNafta != nombresNaftas);

//     }else if(accion == "TIENDA"){
//         alert("Bienvenido a la tienda de VSC, tenemos todo lo que nesecita")
        
//         tipoDeConsumible = prompt(`Que desea comprar? COMIDA O BEBIDA`).toUpperCase();
//         if (tipoDeConsumible == listaProductos[3].tipo) {
            
//             do{
//                 let comida = parseInt(prompt(`Tenemos: 1: Pebete  2:Medialuna  3:Sandwich de Miga`));
//                 switch (comida) {
//                     case 1:
//                         alert(`Cada Pebete esta $${pebete.precio}`);
//                         let cantidadPebete = parseInt(prompt("Cuantos Pebetes desea?"));
//                         if (cantidadPebete > `${pebete.stock}`) {
//                             alert("No contamos con esta cantidad: Maximo 30")
//                         }else if (cantidadPebete <= 0){
//                             alert("Ingrese una cantidad valida")
//                         }else{
//                             alert(`Usted a comprado ${cantidadPebete} pebetes, y le salio en total $${pebete.calcularPrecio(cantidadPebete, pebete.precio)}`)
//                             alert(saludar());
//                         }
//                         break;
//                     case 2:
//                         alert(`Cada Medialuna esta $${medialuna.precio}`)
//                         let cantidadMedialuna = parseInt(prompt("Cuantas medialunas desea?"));
//                         if (cantidadMedialuna > `${medialuna.stock}`) {
//                             alert("No contamos con esta cantidad: Maximo 30")
//                         }else if (cantidadMedialuna <= 0){
//                             alert("Ingrese una cantidad valida")
//                         }else{
//                             alert(`Usted a comprado ${cantidadMedialuna} medialunas, y le salio en total $${medialuna.calcularPrecio(cantidadMedialuna, medialuna.precio)}`)
//                             alert(saludar());
//                         }
//                         break;
//                     case 3:
//                         alert(`Cada sandwich de miga esta $${sandwich.precio}`)
//                         let cantidadSandwich = parseInt(prompt("Cuantos sandwich desea?"));
//                         if (cantidadSandwich > `${sandwich.stock}`) {
//                             alert("No contamos con esta cantidad")
//                         }else if (cantidadSandwich <= 0){
//                             alert("Ingrese una cantidad valida")
//                         }else{
//                             alert(`Usted a comprado ${cantidadSandwich} sandwichs, y le salio en total $${sandwich.calcularPrecio(cantidadSandwich, medialuna.precio)}`)
//                             alert(saludar());
//                         }
//                         break;
//                     default:
//                         alert("Escriba el numero de la opcion que quiera.")
//                         break;
//                 }
//             }while((comida != 1) || (comida != 2) || (comida != 3));
//         }else if(tipoDeConsumible == "BEBIDA"){
//             do{
//                 let bebida = parseInt(prompt("Tenemos: 1:Coca Cola, 2:Agua"));
//                     switch (bebida) {
//                         case 1:
//                             alert(`Cada coca cola esta $${cocaCola.precio}`)
//                             let cantidadCocaCola = parseInt(prompt("Cuantas coca colas desea?"));
//                             if (cantidadCocaCola > `${cocaCola.stock}`) {
//                                 alert("No contamos con esta cantidad: Maximo 15")
//                             }else if (cantidadCocaCola <= 0){
//                                 alert("Ingrese una cantidad valida")
//                             }else{
//                                 alert(`Usted a comprado ${cantidadCocaCola} Coca Colas, y le salio en total $${cocaCola.calcularPrecio(cantidadCocaCola, cocaCola.precio)}`)
//                                 alert(saludar());
//                             }
//                             break;
//                         case 2:
//                             alert(`Cada botella de agua esta $${agua.precio}`)
//                             let cantidadAgua = parseInt(prompt("Cuantas aguas desea?"));
//                             if (cantidadAgua > `${agua.stock}`) {
//                                 alert("No contamos con esta cantidad")
//                             }else if (cantidadAgua <= 0){
//                                 alert("Ingrese una cantidad valida")
//                             }else{
//                                 alert(`Usted a comprado ${cantidadAgua} Aguas, y le salio en total $${agua.calcularPrecio(cantidadAgua, agua.precio)}`)
//                                 alert(saludar());
//                             }
//                             break;
//                     }
//             }while((bebida != 1) || (bebida != 2));
//         }
//     }else if(accion == "BATHROOM"){
//         alert("Anda tranki a hacer tus cosas.")
//     }else {
//         alert("No contamos con ese servicio.")
//     }
// }while ((accion != "NAFTA") || (accion != "TIENDA") || (accion != "BATHROOM"));




