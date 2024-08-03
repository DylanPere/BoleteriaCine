let nombre ;
let añoDeN ;
let añoActual = 2024;
let edad;

while (true) {
    nombre = prompt ("Por favor, ingrese su nombre")
    añoDeN = prompt ("¡Hola " + nombre + "! ingresa tu año de nacimiento")
    parseInt (añoDeN)
    if (añoDeN) {
        edad = añoActual - añoDeN
    }
    console.log(edad);
    if (edad >= 18) {
        break;
    } else {
        alert ("vuelve cuando seas mayor de edad")
    }
}
let categoria;
let pelicula;
let entrada = 15;
let cantidadEntradas;
let precio;
function alertCategoria() {
    alert ("¡Buena elección! a continuacion te dejamos las peliculas de " + categoria + " disponibles")
};

function entradas () {
    while (true) {
        cantidadEntradas = prompt ("el precio de cada entrada es de $15 cuantas entradas quieres comprar?");
        parseInt (cantidadEntradas) ;
        if (cantidadEntradas <= 10 && cantidadEntradas > 0) {
            precio = entrada *= cantidadEntradas;
            break;
        } else { alert ("la cantidad que ingresaste no es valida, el minimo de entradas es 1 y el maximo 10")}
    }
}
function ticket (titulo, num) {
        if (pelicula == titulo || pelicula == num) {
            pelicula = titulo
            document.write ("DETALLES DE COMPRA" + " <br>" + "Cliente: " + nombre + "<br>" + "Nombre de la pelicula: " + pelicula +  "<br>" + "genero: " + categoria + "<br>" + "total a pagar: $" + precio + "<br>" + "MUCHAS GRACIAS POR SU COMPRA")
        }
};


categoria = prompt ("Que categoria deseas ver?\n" + "1-comedia\n" + "2-terror\n" + "3-suspenso\n" + "4-drama\n");

if (categoria == 1 ||categoria ==  "comedia") {
    categoria = "comedia";
    alertCategoria();
    pelicula = prompt ("1-Esperando la Carroza\n" + "2-SuperCool\n" + "3-Ladrona de identidades\n");
    entradas();
    ticket ("Esperando la carroza", "1")
    ticket ("SuperCool", "2")
    ticket ("Ladrona de identidades", "3")
} else if (categoria == 2 ||categoria ==  "terror") {
    categoria = "terror";
    alertCategoria();
    pelicula = prompt ("1-Terror en Amityville\n" + "2-Psicosis\n" + "3-El exorcista\n")
    entradas();
    ticket ("Terror en Amityville", "1")
    ticket ("Psicosis","2")
    ticket ("El exorcista", "3")
} else if (categoria == 3 ||categoria ==  "suspenso") {
    categoria = "suspenso";
    alertCategoria();
    pelicula = prompt ("1-El Silencio de los Inocentes\n" + "2-Seven\n" + "3-El Origen\n")
    entradas();
    ticket ("El Silencio de los Inocentes", "1")
    ticket ("Seven","2")
    ticket ("El Origen", "3")
} else if (categoria == 4 ||categoria ==  "drama") {
    categoria = "drama"
    alertCategoria();
    pelicula = prompt ("1-El Padrino\n" + "2-Forrest Gump\n" + "3-La Lista de Schindler\n")
    entradas();
    ticket ("El Padrino", "1")
    ticket ("Forrest Gump","2")
    ticket ("La Lista de Schindler", "3")
} else { alert ("la categoria que ingresaste no existe o no se encuentra disponible")}
























