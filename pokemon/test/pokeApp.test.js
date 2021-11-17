const {
  valorNombre,
  intentosRestantes,
  numRespuestaCorrecta,
  queGeneracion,
  genPoke
} = require("../pokeApp.js")

it("comprobar valor iniciar del nombre", () => {
  expect(valorNombre).toBe("")
  expect(valorNombre).toBeDefined()
})

it("comprobar valor inicial de intentos es igual a 3", () => {
  expect(intentosRestantes).toBe(3)
})

it("Comprobar que el valor inicial es 0", () => {
  expect(numRespuestaCorrecta).toBe(0)
})

it("comprobrar el valor que retorna", () => {
  expect(queGeneracion()).toBe(genPoke)
})