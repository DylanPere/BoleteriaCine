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

function choose (p1, p2, p3) {
        while (pelicula != p1 || pelicula != p2 || pelicula != p3 || pelicula != "1" || pelicula != "2" || pelicula != "3") {
            pelicula = prompt ("1-"+ p1 + "\n" + "2-" + p2 + "\n" + "3-" + p3 + "\n");
            if (pelicula == p1 || pelicula == p2 || pelicula == p3 || pelicula == "1" || pelicula == "2" || pelicula == "3"){ 
            if (pelicula == "1") {pelicula = p1}
            else if (pelicula == "2") {pelicula = p2}
            else if (pelicula == "3") {pelicula = p3}
                break;} else {alert ("la pelicula que ingresaste no es valida")}
        } 
};
function ticket () {
        document.write ("DETALLES DE COMPRA" + " <br>" + "Cliente: " + nombre + "<br>" + "Nombre de la pelicula: " + pelicula +  "<br>" + "genero: " + categoria + "<br>" + "cantidad de entradas: " + cantidadEntradas + "<br>" + "total a pagar: $" + precio + "<br>" + "MUCHAS GRACIAS POR SU COMPRA");
}


categoria = prompt ("Que categoria deseas ver?\n" + "1-comedia\n" + "2-terror\n" + "3-suspenso\n" + "4-drama\n");

if (categoria == 1 ||categoria ==  "comedia") {
    categoria = "comedia";
    alertCategoria();
    choose ("Esperando la carroza", "SuperCool", "Ladrona de identidades")
    entradas();
    ticket();
} else if (categoria == 2 ||categoria ==  "terror") {
    categoria = "terror";
    alertCategoria();
    choose ("Terror en Amityville", "Psicosis", "El exorcista")
    entradas();
    ticket();
} else if (categoria == 3 ||categoria ==  "suspenso") {
    categoria = "suspenso";
    alertCategoria();
    choose ("El Silencio de los Inocentes", "Seven", "El Origen")
    entradas();
    ticket();
} else if (categoria == 4 ||categoria ==  "drama") {
    categoria = "drama"
    alertCategoria();
    choose ("El Padrino", "Forrest Gump", "La Lista de Schindler")
    entradas();
    ticket();
} else { alert ("la categoria que ingresaste no existe o no se encuentra disponible")}
























