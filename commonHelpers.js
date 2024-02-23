import"./assets/styles-f96adc25.js";import"./assets/vendor-d8b4b001.js";import{r as o}from"./assets/header-9f9f34d2.js";const t="favorite-exercises",f=e=>{const s=localStorage.getItem(t);if(s){const r=[...JSON.parse(s).filter(i=>i._id!==e._id),e];localStorage.setItem(t,JSON.stringify(r))}else localStorage.setItem(t,JSON.stringify([e]))},m=e=>{const s=localStorage.getItem(t);if(s){const r=JSON.parse(s).filter(i=>i._id!==e);localStorage.setItem(t,JSON.stringify(r))}},d=()=>{const e=localStorage.getItem(t);return e?JSON.parse(e):[]},p=e=>{const s=localStorage.getItem(t);return s?JSON.parse(s).some(r=>r._id===e):!1},u={add:f,remove:m,getAll:d,isFavorite:p};function x(e){if(e.value){e.value="";return}console.error("function clearElement:","Only works with input elements")}function S(e,s){if(e.innerHTML="",!s){x(o.searchInputElement),e.insertAdjacentHTML("afterbegin",`<li class="list-item-error">
        We haven't found exercises. Please try another search term"
    </li>`);return}const a=s.results.map(({_id:r,bodyPart:i,target:c,rating:n,burnedCalories:l,time:v,name:g})=>`<li id="${r}" class="exercise-item">
    <div class="exercise-top-container">
      <div class="exercise-top-info">
        <p class="exercise-tag">Workout</p>
        <p class="exercise-rating">
          ${n}
          <svg class="rating-icon">
            <use href="images/svg/icons.svg#icon-star-yellow"></use>
          </svg>
        </p>
      </div>
      <button type="menu" class="exercise-start-button">
        Start
        <svg class="button-icon icon-arrow">
          <use href="images/svg/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-title-container">
      <span class="exercise-icon-container">
        <svg class="exercise-icon">
          <use href="images/svg/icons.svg#icon-man"></use>
        </svg>
      </span>
      <h3 class="exercise-title">${g}</h3>
    </div>
    <div class="exercise-bottom-container">
      <p class="exercise-info">
        Burned calories: <mark class="exercise-marked-text">${l} / ${v} min</mark>
      </p>
      <p class="exercise-info">
        Body part: <mark class="exercise-marked-text exercise-info-text">${i}</mark>
      </p>
      <p class="exercise-info">
        Target: <mark class="exercise-marked-text exercise-info-text">${c}</mark>
      </p>
    </div>
  </li>`).join("");e.insertAdjacentHTML("afterbegin",a)}const F=u.getAll();S(o.containerFavorites,{results:F});
//# sourceMappingURL=commonHelpers.js.map
