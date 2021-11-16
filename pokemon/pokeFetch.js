    //escondo el contenedor de la primera página
    const seleccion = document.getElementById("seleccion");

    //muestro el contenedor de la segunda página
    const juego = document.getElementById("juego");

    //guardamos en una variable el tag de la imagen vacío
    let imgPokemon = document.getElementById("imagen-pokemon");
    //definimos variables para el uso del fetch
    let pokeName, pokeId, sprite, isLegendary, types;

function traerPokemon() {
    /*Creates random number for pokemon selection*/
    let randNum = Math.floor((Math.random() * 901))
    console.log(randNum)
    

    // console.log(`https://pokeapi.co/api/v2/pokemon/${randNum}`)

/*Fetch the specific pokemon with the number generated */
let find = fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`).then(response =>
  response.json()
).then(data => {
  pokeName = data.name
  pokeId = data.id
  sprite = data.sprites.other["official-artwork"].front_default
  types = data.types
  console.log(data)
})

let findLegendary = fetch(`https://pokeapi.co/api/v2/pokemon-species/${randNum}`).then(response => response.json()).then(data => isLegendary = data.is_legendary)

const datosInicio = function () {
  setTimeout(() => {
    console.log(pokeName, pokeId, sprite, isLegendary, types)
    
    //rellenamos la ruta de la imagen con la url del sprite
    imgPokemon.src = `${sprite}`;
  }, 1000)
    }
    datosInicio()
}

function cargarJuego(){

    seleccion.classList.add("hidden");
    juego.classList.remove("hidden");

    traerPokemon();

}

function validarRespuesta() {
    //guardamos el valor que el usuario escribe en el imput
    let valorNombre = document.querySelector("#nombre-pokemon").value;
    //comparamos el valor que pone el usuario con la variable que guarda el nombre del pokemon actual
        if (valorNombre == pokeName) {
            window.alert("respuesta correcta");
        } else {
            window.alert("respuesta incorrecta");
        }
    }

//añadimos al botón de comenzar la función para cargar el juego
let cargar = document.getElementById("boton-comenzar");
cargar.addEventListener("click",cargarJuego);

//añadimos al boton de validar la funcion para validar la respuesta
let validar = document.querySelector("#boton-validar");
validar.addEventListener("click",validarRespuesta);