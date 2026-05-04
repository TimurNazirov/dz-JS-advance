const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const request = new XMLHttpRequest();
request.open("GET", url);
request.send();

request.addEventListener("load", function () {
  const {
    abilities: [
      {
        ability: { url: abilityUrl },
      },
    ],
  } = JSON.parse(this.responseText);
  console.log(abilityUrl);

  const request2 = new XMLHttpRequest();
  request2.open("GET", abilityUrl);
  request2.send();

  request2.addEventListener("load", function () {
    const { effect_entries } = JSON.parse(this.responseText);
    const englishEffect = effect_entries.find(
      ({ language }) => language.name === "en",
    );
    const { effect: abilitiesEffect } = englishEffect;
    console.log(abilitiesEffect);
  });
});
