<script>
  import FeaturedCharacterCard from "./FeaturedCharacterCard.svelte";
  import {
    featuredCharactersAtom,
    setFeaturedCharacters,
  } from "../stores/wayangStore";

  const interestingCharacters = [
    "Kresna",
    "Guru",
    "Baladewa",
    "Rahwana",
    "Dasamuka",
    "Bilung",
    "Garuda",
    "Gatotkaca",
    "Sengkuni",
    "Petruk",
    "Anoman",
    "Rara Ireng",
    "Bratasena",
    "Kangsa",
    "Arimbi",
    "Antaboga",
    "Bagong",
    "Arjuna",
    "Sarawita",
    "Sembadra",
    "Durna",
    "Rama",
    "Sadewa",
    "Togog",
    "Trigantalpati",
    "Karna",
    "Salya",
    "Semar",
    "Bima",
    "Drona",
    "Durga",
    "Gareng",
    "Janaka",
    "Narada",
    "Sugriwa",
    "Antareja",
    "Antasena",
    "Kumbakarna",
    "Wisnu",
  ];

  const chosenCharacters = [];

  for (let i = 0; i < 3; i++) {
    chosenCharacters.push(
      "https://blooming-badlands-24637.herokuapp.com/alias/?alias=" +
        interestingCharacters.splice(
          Math.floor(Math.random() * interestingCharacters.length),
          1
        )[0]
    );
  }

  const getFeaturedCharacters = async (urls) => {
    const res = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(res.map((r) => r.json()));
    return data;
  };

  let featuredCharactersData = [];

  getFeaturedCharacters(chosenCharacters).then((charactersList) => {
    setFeaturedCharacters(charactersList);
  });
</script>

<div class="grid grid-cols-3 gap-4 justify-center">
  {#each $featuredCharactersAtom as oneCharacter}
    <FeaturedCharacterCard cardData={oneCharacter} />
  {/each}
</div>
