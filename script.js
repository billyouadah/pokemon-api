function fetchPokemonInfo(nomPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomPokemon.toLowerCase()}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Pokemon :", data);
            afficherNomPokemon(data);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
            document.getElementById("pokemon-info").textContent = error.message;
        });
}

function afficherNomPokemon(data) {
    const nomPokemon = data.name;
    document.getElementById("pokemon-info").textContent = `Nom du Pokémon : ${nomPokemon}`;
}

fetchPokemonInfo("pikachu");

async function fetchData() {
  try {
    const nomPokemon = document
      .getElementById("nomPokemon")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nomPokemon}`
    );

    if (!response.ok) {
      throw new Error("No resources found");
    }

    const data = await response.json();

    if (data.sprites && data.sprites.front_default) {
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    } else {
      throw new Error("Pokemon sprite not found in the response data");
    }

  } catch (error) {
    console.error(error);
  }
}