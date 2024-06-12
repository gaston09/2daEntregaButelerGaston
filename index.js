//*! constructores de productos */

class Productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = Number(stock)
    }
}
const producto1 = new Productos("Proteina ENA", 26000, 15);
const producto2 = new Productos("Proteina Star Nutrition", 12000, 7);
const producto3 = new Productos("Gainer ENA", 35000, 20);
const producto4 = new Productos("Animal Pak", 104000, 12);
const producto5 = new Productos("Creatina Star", 16000, 10);

//*! Presentacion y menu de opciones*/

function pedirNombre(){
    let nombre = prompt(`Bienvenido a la tienda de SmartMove, movimiento inteligente.
ingrese su nombre:`)
        while (nombre == ""){
        nombre = prompt(`Bienvenido a la tienda de SmartMove, movimiento inteligente.
        ingrese su nombre:`);
        }
        return nombre;
}
/*--------------------------------------------*/
function cantidad() {
    let nProductos = Number(prompt("¿Cuántos productos querés encargar?: "));
    while (isNaN(nProductos) || nProductos <=0){
        nProductos = Number(prompt("ingrese unca cantidad valida"))
    }
    return nProductos;
}
/*--------------------------------------------*/
let option;
let costoTotal = 0;
let detalleCompra = []
let nombre = pedirNombre()
/*--------------------------------------------*/

                            //*?---------------------START-----------------------*/

alert(`Hola ${ nombre }, espero que puedas encontrar lo que buscabas`)



do {
    option = Number(prompt(`¿Cómo puedo ayudarte?, selecciona el suplemento que buscas o presioná 0 para salir:
    1. Proteinas Ena x1kg : $26000-
    2. Proteina Star Nutrition: $12000-
    3. Gainer Ena x1kg: $35000-
    4. Animal Pak x44u: $104000-
    5. Creatina Star x300gr: $16000-
    0. Salir`));

    let valorProducto;
    let nProductos;

    switch (option) {
        case 1:
            valorProducto = producto1.precio;
            nProductos = cantidad();
            costoTotal += valorProducto * nProductos;
            detalleCompra.push({producto: producto1.nombre, cantidad: nProductos, subtotal: nProductos*valorProducto});
            alert("Producto añadido")
            break;
        case 2:
            valorProducto = producto2.precio;
            nProductos = cantidad();
            costoTotal += valorProducto * nProductos;
            detalleCompra.push({producto: producto2.nombre, cantidad: nProductos, subtotal: nProductos*valorProducto});
            alert("Producto añadido")
            break;
        case 3:
            valorProducto = producto3.precio;
            nProductos = cantidad();
            costoTotal += valorProducto * nProductos;
            detalleCompra.push({producto: producto3.nombre, cantidad: nProductos, subtotal: nProductos*valorProducto});
            alert("Producto añadido")
            break;
        case 4:
            valorProducto = producto4.precio;
            nProductos = cantidad();
            costoTotal += valorProducto * nProductos;
            detalleCompra.push({producto: producto4.nombre, cantidad: nProductos, subtotal: nProductos*valorProducto});
            alert("Producto añadido")
            break;
        case 5:
            valorProducto = producto5.precio;
            nProductos = cantidad();
            costoTotal += valorProducto * nProductos;
            detalleCompra.push({producto: producto5.nombre, cantidad: nProductos, subtotal: nProductos*valorProducto});
            alert("Producto añadido")
            break;    

        case 0:
            break;

        default:
            alert("La opción no es válida.");
            break;
    }
} while (option !== 0);
if (costoTotal > 0) {
    let detalle= "Detalle de su compra: \n--------------------\n"
    detalleCompra.forEach(item =>{
    detalle += `${item.producto} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}\n`;
})
alert(`${detalle}Total: $${costoTotal}`);
alert(`Gracias por su visita, su compra tiene un valor de: $${costoTotal}`);
    // alert(("Gracias por su visita, su compra tiene un valor de: $") + costoTotal )


}else {
    alert("Seguimos trabajando para que encuentres lo que buscas, te espero pronto")
}
