
const productos = [
    {id:1, nombre:"Super", imagen:"descarga6.png", precio:150},
    {id:2, nombre:"Diesel", imagen:"diesel.png", precio:100},
    {id:3, nombre:"Infinia", imagen:"images.jpg", precio:200},
    {id:4, nombre:"Pebete", imagen:"descarga2.jpg", precio:220},
    {id:5, nombre:"Medialuna", imagen:"descarga4.jpg", precio:90},
    {id:6, nombre:"Sandwich de miga", imagen:"descarga3.jpg", precio:70},
    {id:7, nombre:"Coca Cola", imagen:"descarga5.jpg", precio:170},
    {id:8, nombre:"Agua", imagen:"descarga1.jpg", precio:150}
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}