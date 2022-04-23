alert("Estacion de Servicio VSC");

// VARIABLES
let accion;
let tipoNafta;
let cantidadPebete;
let cantidadMedialuna;
let cantidadSandwich;
let cantidadCocaCola;
let cantidadAgua;
let precioCocaCola = 200;
let precioAgua = 100;
let precioPebete = 100;
let precioMedialuna = 80;
let precioSandwich = 50;
let litros;
let tipoDeConsumible;
let comida;
let bebida;

//FUNCIONES
cargarNafta = () => "Tu tanque esta cargado!";

saludar = () => "Vuelva Pronto!";

let calcularPrecio = (a, b) => {
    return a * b
}


do{
    accion = prompt("Que nesecita? (Nafta, Tienda, o Bathroom)").toUpperCase();
    if (accion == "NAFTA") {
        do{
            litros = parseInt(prompt("Cuantos litros?"));
            if (litros >= 50) {
                alert("El maximo de nafta recargable es 50 litros");
            }else if (litros <= 0){
                alert("Cargue una cantidad valida");
            }
        }while ((litros >= 50) || (litros <= 0));

        do{
            tipoNafta = prompt("De cual? (Super, diesel o infinia)").toUpperCase();
            if (tipoNafta != "SUPER" && tipoNafta != "DIESEL" && tipoNafta != "INFINIA") {
                alert("No contamos con ese combustible");
            }else{
                alert(`Se le cargara: ${litros} litros de ${tipoNafta}`);
                alert(cargarNafta());
                alert(saludar());
                break;
            }
        }while ((tipoNafta != "SUPER") || (tipoNafta != "DIESEL") || (tipoNafta != "INFINIA"));

    }else if(accion == "TIENDA"){
        alert("Bienvenido a la tienda de VSC, tenemos todo lo que nesecita")
        tipoDeConsumible = prompt("Que desea comprar? (Comida o Bebida)").toUpperCase();
        if (tipoDeConsumible == "COMIDA") {
            
            do{
                let comida = parseInt(prompt("Tenemos: 1:Pebete, 2:Medialunas con jamon y queso, o 3:sandwich de miga"));
                switch (comida) {
                    case 1:
                        alert("Cada Pebete esta $100")
                        let cantidadPebete = prompt("Cuantos Pebetes desea?")
                        if (cantidadPebete > 30) {
                            alert("No contamos con esta cantidad")
                        }else if (cantidadPebete <= 0){
                            alert("Ingrese una cantidad valida")
                        }else{
                            alert(`Usted a comprado ${cantidadPebete} pebetes, y le salio en total $${calcularPrecio(cantidadPebete, precioPebete)}`)
                            alert(saludar());
                        }
                        break;
                    case 2:
                        alert("Cada Medialuna esta $80")
                        let cantidadMedialuna = prompt("Cuantas medialunas desea?")
                        if (cantidadMedialuna > 30) {
                            alert("No contamos con esta cantidad: Maximo 30")
                        }else if (cantidadMedialuna <= 0){
                            alert("Ingrese una cantidad valida")
                        }else{
                            alert(`Usted a comprado ${cantidadMedialuna} medialunas, y le salio en total $${calcularPrecio(cantidadMedialuna, precioMedialuna)}`)
                            alert(saludar());
                        }
                        break;
                    case 3:
                        alert("Cada sandwich de miga esta $50")
                        let cantidadSandwich = prompt("Cuantos sandwich desea?")
                        if (cantidadSandwich > 30) {
                            alert("No contamos con esta cantidad")
                        }else if (cantidadSandwich <= 0){
                            alert("Ingrese una cantidad valida")
                        }else{
                            alert(`Usted a comprado ${cantidadSandwich} sandwichs, y le salio en total $${calcularPrecio(cantidadSandwich, precioSandwich)}`)
                            alert(saludar());
                        }
                        break;
                    default:
                        alert("Escriba el numero de la opcion que quiera.")
                        break;
                }
            }while((comida != 1) || (comida != 2) || (comida != 3));
        }else if(tipoDeConsumible == "BEBIDA"){
            do{
                let bebida = parseInt(prompt("Tenemos: 1:Coca Cola, 2:Agua"));
                    switch (bebida) {
                        case 1:
                            alert("Cada coca cola esta $200")
                            let cantidadCocaCola = prompt("Cuantas coca colas desea?")
                            if (cantidadCocaCola > 15) {
                                alert("No contamos con esta cantidad: Maximo 15")
                            }else if (cantidadCocaCola <= 0){
                                alert("Ingrese una cantidad valida")
                            }else{
                                alert(`Usted a comprado ${cantidadCocaCola} Coca Colas, y le salio en total $${calcularPrecio(cantidadCocaCola, precioCocaCola)}`)
                                alert(saludar());
                            }
                            break;
                        case 2:
                            alert("Cada botella de agua esta $100")
                            let cantidadAgua = prompt("Cuantas aguas desea?")
                            if (cantidadAgua > 20) {
                                alert("No contamos con esta cantidad")
                            }else if (cantidadAgua <= 0){
                                alert("Ingrese una cantidad valida")
                            }else{
                                alert(`Usted a comprado ${cantidadAgua} Aguas, y le salio en total $${calcularPrecio(cantidadAgua, precioAgua)}`)
                                alert(saludar());
                            }
                            break;
                    }
            }while((bebida != 1) || (bebida != 2));
        }
    }else if(accion == "BATHROOM"){
        alert("Anda tranki a hacer tus cosas.")
    }else {
        alert("No contamos con ese servicio.")
    }
}while ((accion != "NAFTA") || (accion != "TIENDA") || (accion != "BATHROOM"));



