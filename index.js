import { createCharacterCard } from "./components/card/card.js";

/* fetch('https://rickandmortyapi.com/api/character').then(response => { 
  if (response.ok) { 
    return response.json(); 
  }
  throw new Error("request failed") 

}, networkerror => console.log(networkerror.message).then(jsonResponse => { 

})
);  */

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

  async function fetchCharacters() { 
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
  }

  fetchCharacters().then((data) => {
    data.results.forEach((characterData) => {
      createCharacterCard(characterData);
    });
  });
  


/*   createCharacterCard(fetchCharacters);  */
  
/*   const characters = fetchCharacters(); 
  console.log(characters);   */

  /*  characters.array.forEach(async (character) => {
    const dataChar = await fetchCharacters; 
    
   }); */

  /* Object.keys(characters).forEach(key => {
    console.log(key, characters[key]); 

  })  */
 


