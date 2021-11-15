/*Creates random number for pokemon selection*/
let randNum = Math.floor((Math.random() * 901))
console.log(randNum)
let pokeName, pokeId, sprite, isLegendary;


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
  }, 1000)
}
datosInicio()

export {pokeName, pokeId, sprite, isLegendary};