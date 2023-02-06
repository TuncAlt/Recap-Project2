export function createCharacterCard() {
  const createCard = document.createElement("li");
  const cardContainerUl = document.querySelector('[data-js="card-container"]');
  createCard.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="Rick Sanchez"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title"></h2>
  <dl class="card__info">
    <dt class="card__info-title"></dt>
    <dd class="card__info-description"></dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description"></dd>
    <dt class="card__info-title"></dt>
    <dd class="card__info-description"></dd>
  </dl>
</div>`;
  document.querySelector(".card__title").innerHTML = character.results[0].name;
  document.querySelector('[data-js="statusDescription"]').innerHTML =
    character.results[0].status;
  document.querySelector('[data-js="typeDescription"]').innerHTML =
    character.results[0].type;
  document.querySelector('[data-js="occurencesDescription"]').innerHTML =
    character.results[0].occurences;

  cardContainerUl.append("createCard");
}
