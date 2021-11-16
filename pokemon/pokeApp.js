import Usuario from "./usuario.js";
import {
  pokeName
} from "./pokeFetch.js";

let intentosRestantes = 3;
let numRespuestaCorrecta = 0;

function crearUsuario() {
  let nombreUsuario = document.getElementById("nombre").value;
  let usuario = new Usuario(nombreUsuario, 0);
  localStorage.setItem("usuario", JSON.stringify(usuario))
  console.log(usuario);
}

function validarRespuesta() {

  //guardamos el valor que el usuario escribe en el imput
  let valorNombre = document.querySelector("#nombre-pokemon").value;
  const sumarScore = function () {
    return numRespuestaCorrecta++
  }
  const contarIntentos = function () {
    return intentosRestantes--
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
}

let newuser = document.getElementById("boton-comenzar");
newuser.addEventListener("click", crearUsuario);

//añadimos al boton de validar la funcion para validar la respuesta
let validar = document.querySelector("#boton-validar");
validar.addEventListener("click", validarRespuesta);