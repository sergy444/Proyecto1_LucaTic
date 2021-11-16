import Usuario from "./usuario.js";
import {
    pokeName,
    isLegendary,
    types,
    pokeId,
    imgPokemon
} from "./pokeFetch.js";


let textoPista = document.querySelector("#texto-carta");

let validar = document.querySelector("#boton-validar");


let intentosRestantes = 3;
let numRespuestaCorrecta = 0;
let genPoke;

function crearUsuario() {

    let nombreUsuario = document.getElementById("nombre").value;
    let usuario = new Usuario(nombreUsuario, 0);
    //Guarda el usuario creado en el localStorage para pedirlo luego 
    //-Joseba
    localStorage.setItem("usuario", JSON.stringify(usuario))
}
const mostrarScore = function () {
    let usuario1 = JSON.parse(localStorage.getItem("usuario"))
    //Copia de los scores predeterminados
    //-Joseba
    let highScores = JSON.parse(localStorage.getItem("scores"))
    //Evalua el valor de intentos para sumar el total de puntaje 
    //-Joseba
    if (intentosRestantes === 0) {
        usuario1.puntuacion = Number(numRespuestaCorrecta) + 50;
        //Desabilita el boton para dejar de intentar
        //-Joseba
        validar.disabled = true
        localStorage.setItem("scores", JSON.stringify([usuario1, ...highScores]))
    }
    localStorage.setItem("usuario", JSON.stringify(usuario1))


    console.log(usuario1)

}




//funcion para saber de que generacion es el pokemon
function queGeneracion() {
    if (pokeId >= 1 && pokeId <= 151) {
        genPoke = "El pokemon es de primera generación.";
    } else if (pokeId >= 152 && pokeId <= 251) {
        genPoke = "El pokemon es de segunda generación.";
    } else if (pokeId >= 252 && pokeId <= 386) {
        genPoke = "El pokemon es de tercera generación.";
    } else if (pokeId >= 387 && pokeId <= 493) {
        genPoke = "El pokemon es de cuarta generación.";
    } else if (pokeId >= 494 && pokeId <= 649) {
        genPoke = "El pokemon es de quinta generación.";
    } else if (pokeId >= 650 && pokeId <= 721) {
        genPoke = "El pokemon es de sexta generación.";
    } else if (pokeId >= 722 && pokeId <= 809) {
        genPoke = "El pokemon es de séptima generación.";
    } else if (pokeId >= 810 && pokeId <= 898) {
        genPoke = "El pokemon es de octava generación.";
    }
    return genPoke;
}

function validarRespuesta() {
    //guardamos el valor que el usuario escribe en el imput
    let valorNombre = document.querySelector("#nombre-pokemon").value;
    const sumarScore = function () {
        return numRespuestaCorrecta++
    }
    const contarIntentos = function () {
        const negative = intentosRestantes <= 0 ? intentosRestantes = 0 : intentosRestantes--;
        return negative
    }

    //comparamos el valor que pone el usuario con la variable que guarda el nombre del pokemon actual
    if (valorNombre == pokeName) {
        window.alert("respuesta correcta");
        sumarScore()
    } else {
        window.alert("respuesta incorrecta");
        contarIntentos()
    }
    console.log(numRespuestaCorrecta, intentosRestantes);
    mostrarScore()
}
//funcion para que segun un num aleatorio imprima una pista en pantalla
function mostrarPista() {
    let aleatorio = Math.floor((Math.random() * 5))

    switch (aleatorio) {
        case 0:
        case 1:
            imgPokemon.classList.remove("oculto");
            textoPista.innerHTML = "aqui tienes los coloritos de la imagen";
            break;

        case 2:
            let tipo2 = " ";
            try {
                if (types.length = 2) {
                    tipo2 = types[1].type.name;
                }
            } catch (err) {
                console.log(err);
            }
            textoPista.innerHTML = `El pokemon es de tipo: ${types[0].type.name}  ${tipo2}`;
            break;

        case 3:
            if (isLegendary == true) {
                textoPista.innerHTML = `El pokemon es legendario`;
            } else {
                textoPista.innerHTML = `El pokemon no es legendario`;
            }
            break;
        case 4:
            queGeneracion();
            textoPista.innerHTML = genPoke;
            break;
    }

}
//boton para crear un objeto de tipo usuario
let newuser = document.getElementById("boton-comenzar");
newuser.addEventListener("click", crearUsuario);
//añadimos al boton de validar la funcion para validar la respuesta
validar.addEventListener("click", validarRespuesta);
//añadimos al boton de mostar pista la funcion para mostrar la pista
let pista = document.querySelector("#boton-pista");
pista.addEventListener("click", mostrarPista);


export {
    validarRespuesta
};