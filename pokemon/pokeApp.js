import Usuario from "./usuario.js";
import {
  pokeName
} from "./pokeFetch.js";

let validar = document.querySelector("#boton-validar");

let intentosRestantes = 3;
let numRespuestaCorrecta = 0;

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

let newuser = document.getElementById("boton-comenzar");
newuser.addEventListener("click", crearUsuario);

//añadimos al boton de validar la funcion para validar la respuesta
validar.addEventListener("click", validarRespuesta);

