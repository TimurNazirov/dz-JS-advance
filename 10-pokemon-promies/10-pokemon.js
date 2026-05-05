const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function getAbilityUrl(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      const abilityUrl = data.abilities[0].ability.url;
      console.log(abilityUrl);
      return fetch(abilityUrl);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const englishEffect = data.effect_entries.find(
        ({ language }) => language.name === "en",
      );
      const abilitiesEffect = englishEffect.effect;
      console.log("Effect:", abilitiesEffect);
      return abilitiesEffect;
    })
    .catch((error) => console.log(error));
}
