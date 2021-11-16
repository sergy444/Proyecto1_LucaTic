
let intentosRestantes = 0;
let numRespuestaCorrecta = 3;

let valorNombre = document.querySelector("#nombre-pokemon").value;

function validarRespuesta() {
//comparamos el valor que pone el usuario con la variable que guarda el nombre del pokemon actual
    if (valorNombre == pokeName) {
        numRespuestaCorrecta++;
    } else {
        intentosRestantes--;
    }
}