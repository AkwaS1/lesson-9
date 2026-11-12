const url = "https://pokeapi.co/api/v2/pokemon/"
const resultElement = document.getElementById("result")
const searchElement = document.getElementById("search")
const submitElement = document.getElementById("submit")

submitElement.addEventListener("click", function(event) {
    search(searchElement.value)
})

function search(pokemonName) {
    fetch(url+pokemonName)
        .then(async function(response) {
        let data = await response.json()
        console.log(data)
        drawPokemon(data)
    })
}

function drawPokemon(pokemon) {
    resultElement.innerHTML = ""
    let pokemonElement = document.createElement("div")
    pokemonElement.classList.add("pokemon")
    pokemonElement.innerHTML = `
    <div class="pokemon">
        <p>${"ID: " + searchElement.value}</p>
        <div class="pokemon-info">
            <h1>${pokemon.name}</h1>
            <img src="${pokemon.sprites.front_default}" alt="">
        </div>
        <div class="pokemon-stats">
            <i>${"Type: " + pokemon.types[0].type.name}</i>
            <i>${"Height: " + pokemon.height}</i>
        </div>
    </div>
    `

    resultElement.appendChild(pokemonElement)
}