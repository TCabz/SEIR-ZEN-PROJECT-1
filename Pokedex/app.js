console.log("Compassion = Happiness");

const pokemonContainer = document.getElementById(`pokemonContainer`);
const pokemonAmount = 151;

// function to call pokemon
const fetchPokemon = async () => {
  for (let i = 1; i <= pokemonAmount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  makePokemonCard(pokemon);
};

// shows return data
fetchPokemon();

function makePokemonCard(pokemon) {
  const pokemonElement = document.createElement(`div`);
  pokemonElement.classList.add(`pokemon`);

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokemonInnerHTML = `
  <div class="image-container"></div>
  
    pokemonElement.innerHTML = pokemonInnerHTML;
  pokemonContainer.appendChild(pokemonElement);
}
