let articulo = "";
let precio = 0;
let cantidad = 0;
let precioFinal = 0;
let cantidadTotal = 0;
let comprarMas = false;

do {
    articulo = prompt("¿Querés comprar rodilleras, coderas o canilleras? Aclaración importante: el producto se vende por par.").toLowerCase();
    cantidad = Number (prompt("¿Cuántos pares querés comprar?"))
    

    
    switch (articulo) {
        case "rodilleras":
            precio = 8000;
            break;
        case "coderas":
            precio = 6000;
            break;
        case "canilleras":
            precio = 3000;
            break;
        default:
            alert("Algún dato ingresado no es correcto o no quieres realizar ninguna compra.");
            precio = 0;
            cantidad = 0;
            break;                 
    }
    precioFinal += precio * cantidad;
    cantidadTotal += cantidad
    comprarMas = confirm("¿Querés comprar más?")

} while (comprarMas);

alert ("Compraste : " +cantidadTotal+ " productos. El precio total de tu compra es: "+precioFinal+ " pesos");

terminarCompra = confirm ("¿Querés finalizar tu compra?");
if (terminarCompra){
    alert("Tu compra fue exitosa.")
}
alert ("Gracias por visitarnos.");

    
