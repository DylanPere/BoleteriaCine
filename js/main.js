
const peliculas = {
    comedia: [
        { nombre: "Esperando la carroza", precio: 1500 },
        { nombre: "SuperCool", precio: 2000 },
        { nombre: "Ladrona de identidades", precio: 1600 }
    ],
    terror: [
        { nombre: "IT", precio: 3500 },
        { nombre: "Psicosis", precio: 2000 },
        { nombre: "El exorcista", precio: 2500 }
    ],
    suspenso: [
        { nombre: "El Silencio de los Inocentes", precio: 2300 },
        { nombre: "Seven", precio: 1500 },
        { nombre: "El Origen", precio: 1800}
    ],
    drama: [
        { nombre: "El Padrino", precio: 3000 },
        { nombre: "Forrest Gump", precio: 1500 },
        { nombre: "La Lista de Schindler", precio: 1300 }
    ]
};

let nombre;
let añoDeN;
const añoActual = 2024;
let edad;
let categoria;
let peliculaSeleccionada;
let cantidadEntradas;
let precioTotal;


while (true) {
    nombre = prompt("Por favor, ingrese su nombre:");
    añoDeN = prompt("¡Hola " + nombre + "! ingresa tu año de nacimiento:");
    añoDeN = parseInt(añoDeN);
    if (añoDeN) {
        edad = añoActual - añoDeN;
    }
    console.log(edad);
    if (edad >= 18) {
        break;
    } else {
        alert("Vuelve cuando seas mayor de edad.");
    }
}

categoria = prompt("¿Qué categoría deseas ver?\n1-Comedia\n2-Terror\n3-Suspenso\n4-Drama\n");
categoria = convertirCategoria(categoria);

if (categoria === null) {
    alert("La categoría que ingresaste no existe o no se encuentra disponible.");
    throw new Error("Categoría inválida");
}

mostrarPeliculas(categoria);


peliculaSeleccionada = seleccionarPelicula(categoria);

solicitarEntradas();

generarTicket();


function convertirCategoria(input) {
    switch(input) {
        case "1":
        case "comedia":
            return "comedia";
        case "2":
        case "terror":
            return "terror";
        case "3":
        case "suspenso":
            return "suspenso";
        case "4":
        case "drama":
            return "drama";
        default:
            return null;
    }
}

function mostrarPeliculas(categoria) {
    const peliculasDisponibles = peliculas[categoria];
    let mensaje = "¡Buena elección! A continuación te dejamos las películas de " + categoria + " disponibles:\n";
    
    peliculasDisponibles.forEach((pelicula, index) => {
        mensaje += `${index + 1} - ${pelicula.nombre} ($${pelicula.precio})\n`;
    });

    alert(mensaje);
}

function seleccionarPelicula(categoria) {
    const peliculasDisponibles = peliculas[categoria];
    while (true) {
        let seleccion = prompt("Selecciona la película (1, 2 o 3):");
        seleccion = parseInt(seleccion) - 1;
        if (peliculasDisponibles[seleccion]) {
            return peliculasDisponibles[seleccion];
        } else {
            alert("La película que ingresaste no es válida.");
        }
    }
}

function solicitarEntradas() {
    while (true) {
        cantidadEntradas = prompt("¿Cuántas entradas quieres comprar?");
        cantidadEntradas = parseInt(cantidadEntradas);
        if (cantidadEntradas <= 10 && cantidadEntradas > 0) {
            precioTotal = peliculaSeleccionada.precio * cantidadEntradas;
            break;
        } else {
            alert("La cantidad que ingresaste no es válida, el mínimo de entradas es 1 y el máximo 10.");
        }
    }
}

function generarTicket() {
    document.write("DETALLES DE COMPRA" + " <br>" +
                    "Cliente: " + nombre + "<br>" +
                    "Nombre de la película: " + peliculaSeleccionada.nombre + "<br>" +
                    "Género: " + categoria + "<br>" +
                    "Cantidad de entradas: " + cantidadEntradas + "<br>" +
                    "Total a pagar: $" + precioTotal + "<br>" +
                    "MUCHAS GRACIAS POR SU COMPRA");
}








