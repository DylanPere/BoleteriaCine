const peliculasContenedor = document.querySelector('.peliculas');

const carrito = [];

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
        { nombre: "El Origen", precio: 1800 }
    ],
    drama: [
        { nombre: "El Padrino", precio: 3000 },
        { nombre: "Forrest Gump", precio: 1500 },
        { nombre: "La Lista de Schindler", precio: 1300 }
    ]
};

function mostrarPeliculas(filtradas = null) {
    peliculasContenedor.innerHTML = '';

    const peliculasAMostrar = filtradas || peliculas;

    for (let genero in peliculasAMostrar) {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria');

        const generoTitulo = document.createElement('h2');
        generoTitulo.textContent = `Películas de ${genero.charAt(0).toUpperCase() + genero.slice(1)}`;
        categoriaDiv.appendChild(generoTitulo);

        const peliculasList = document.createElement('div');
        peliculasList.classList.add('peliculas-list');

        peliculasAMostrar[genero].forEach(pelicula => {
            const peliculaContainer = document.createElement('div');
            peliculaContainer.classList.add('pelicula-container');

            const peliculaElemento = document.createElement('h3');
            peliculaElemento.classList.add('pelicula');
            peliculaElemento.textContent = `${pelicula.nombre} - $${pelicula.precio}`;
            
            const agregarCarritoBtn = document.createElement('button');
            agregarCarritoBtn.classList.add('agregar-carrito-btn');
            agregarCarritoBtn.textContent = 'Agregar al carrito';
            agregarCarritoBtn.addEventListener('click', () => agregarAlCarrito(pelicula));

            peliculaContainer.appendChild(peliculaElemento);
            peliculaContainer.appendChild(agregarCarritoBtn);
            peliculasList.appendChild(peliculaContainer);
        });

        categoriaDiv.appendChild(peliculasList);
        peliculasContenedor.appendChild(categoriaDiv);
    }
}

function agregarAlCarrito(pelicula) {
    carrito.push(pelicula);
    alert(`Agregaste "${pelicula.nombre}" al carrito.`);
    console.log(carrito);
}

mostrarPeliculas();

const inputBusqueda = document.getElementById('busqueda');
const btnBuscar = document.getElementById('buscar-btn');

function buscarPeliculas() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();

    const peliculasFiltradas = {};

    for (let genero in peliculas) {
        peliculasFiltradas[genero] = peliculas[genero].filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(textoBusqueda)
        );
    }

    const esVacio = Object.values(peliculasFiltradas).every(arr => arr.length === 0);

    if (esVacio) {
        peliculasContenedor.innerHTML = '<p>No se encontraron películas con ese término.</p>';
    } else {
        mostrarPeliculas(peliculasFiltradas);
    }
}

btnBuscar.addEventListener('click', buscarPeliculas);
inputBusqueda.addEventListener('input', buscarPeliculas);