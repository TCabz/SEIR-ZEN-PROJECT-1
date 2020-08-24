console.log("Compassion = Happiness");

function getPokemonInfo() {
  ajax_get("https://pokeapi.co/api/v2/", function (data) {
    populatePokemonSelect(data);
  });
}
