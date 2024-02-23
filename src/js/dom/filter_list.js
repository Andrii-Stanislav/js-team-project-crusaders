export function displayExercises(results) {
    listItem.innerHTML = '';
    const markup = results
        .map(({ filter, name, imgURL }) => {
            return `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    </div>
  </li>
    `;
        })
        .join('');

    listItem.insertAdjacentHTML('beforeend', markup);
};