var b=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var r=(s,e,t)=>(b(s,e,"read from private field"),t?t.call(s):e.get(s)),m=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},v=(s,e,t,a)=>(b(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);import{P as M}from"./vendor-d8b4b001.js";import{a as k,r as B}from"./header-3a9a9193.js";const c="/js-team-project-crusaders/assets/icons-1f8f9d65.svg",L=s=>k.get(`/exercises/${s}`);var g,p,l,_,d;class C{constructor(){m(this,g,void 0);m(this,p,void 0);m(this,l,void 0);m(this,_,void 0);m(this,d,void 0);v(this,l,document.getElementById("modalDialog")),v(this,_,document.querySelector(".button-close")),v(this,d,document.getElementById("modal-content")),v(this,g,[]),v(this,p,[]),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this),this.handleModalClick=this.handleModalClick.bind(this)}handleCloseButtonClick(){this.close()}handleModalClick(e){e.target===r(this,l)&&this.close()}open(){r(this,_).addEventListener("click",this.handleCloseButtonClick),r(this,l).addEventListener("click",this.handleModalClick),r(this,l).showModal()}close(e=!0){r(this,_).removeEventListener("click",this.handleCloseButtonClick),r(this,l).removeEventListener("click",this.handleModalClick),r(this,g).forEach(({type:t,lister:a})=>r(this,d).removeEventListener(t,a)),e&&r(this,p).forEach(t=>t()),r(this,l).close()}setContent(e){r(this,d).innerHTML="",r(this,d).insertAdjacentHTML("beforeend",e)}addContentListener(e,t){r(this,g).push({type:e,lister:t}),r(this,d).addEventListener(e,t)}addOnCloseCallback(e){r(this,p).push(e)}}g=new WeakMap,p=new WeakMap,l=new WeakMap,_=new WeakMap,d=new WeakMap;const A=(s,e,t,a)=>k.patch(`/exercises/${s}/rating`,{rate:e,email:t,review:a}),I=()=>`
    <form name="exercise-rating-form" class="exercise-rating-form">
      <div class="exercise-rating-form__star-container">
        <h2 class="exercise-rating-form__star-title">Rating</h2>
        <div class="exercise-rating-form__stars">
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-5"
            value="5"
          >
          <label class="exercise-rating-form__star-label" for="rating-5">
            <svg width="24" height="24">
              <use href="${c}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-4"
            value="4"
           >
          <label class="exercise-rating-form__star-label" for="rating-4">
            <svg width="24" height="24">
              <use href="${c}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-3"
            value="3"
           >
           <label class="exercise-rating-form__star-label" for="rating-3">
            <svg width="24" height="24">
              <use href="${c}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-2"
            value="2"
           >
            <label class="exercise-rating-form__star-label" for="rating-2">
            <svg width="24" height="24">
              <use href="${c}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-1"
            value="1"
           >
          <label class="exercise-rating-form__star-label" for="rating-1">
            <svg width="24" height="24">
              <use href="${c}#icon-star"></use>
            </svg>
          </label>
          <span class="exercise-rating-form__star-counter"></span>
        </div>
      </div>

      <div class="input-group">
        <input
          class="form-input"
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"
          autocomplete="off"
          required
        />

        <textarea
          class="form-textarea"
          name="comment"
          placeholder="Your comment"
          rows="5"
          aria-label="Comment"
          autocomplete="off"
          required
        ></textarea>
      </div>
      <button class="exercise-rating-form-button" type="submit">Send</button>
    </form>
  `;function N(s){const e=new C;e.addOnCloseCallback(()=>$(s));const t=async a=>{if(a.target.closest(".exercise-rating-form")){a.preventDefault();const{rate:i,email:o,comment:n}=a.target.elements,f=Number(i.value);try{await A(s,f,o.value,n.value),e.close()}catch{}}};e.setContent(I()),e.addContentListener("submit",t),e.open()}function T(s){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(t=>{const a=parseInt(t.dataset.value,10);let i=0;a<=s?i=100:a-1<s&&(i=(s-a+1)*100),t.style.setProperty("--percent-filled",`${i}%`)})}const u="favorite-exercises",H=s=>{const e=localStorage.getItem(u);if(e){const a=[...JSON.parse(e).filter(i=>i._id!==s._id),s];localStorage.setItem(u,JSON.stringify(a))}else localStorage.setItem(u,JSON.stringify([s]))},P=s=>{const e=localStorage.getItem(u);if(e){const a=JSON.parse(e).filter(i=>i._id!==s);localStorage.setItem(u,JSON.stringify(a))}},O=()=>{const s=localStorage.getItem(u);return s?JSON.parse(s):[]},q=s=>{const e=localStorage.getItem(u);return e?JSON.parse(e).some(a=>a._id===s):!1},x={add:H,remove:P,getAll:O,isFavorite:q};async function $(s){const e=new C;let t;function a(o,n){o.target.closest(".modal-exercises__button-favourites")&&U(t)}function i(o){o.target.closest(".modal-exercises__button-rating")&&(e.close(!1),N(s))}try{const{data:o}=await L(s);t=o;const n=x.isFavorite(t._id);e.setContent(J({...t,rating:Number(t.rating).toFixed(1)},n)),T(Number(t.rating).toFixed(1)),e.addContentListener("click",a),e.addContentListener("click",i),e.open()}catch{}}function J(s,e){const{name:t,burnedCalories:a,bodyPart:i,description:o,target:n,equipment:f,gifUrl:h,popularity:y,rating:E,time:F,_id:w}=s,S=t.charAt(0).toUpperCase()+t.slice(1);return`<div class="modal-exercises__card" >
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${h!==null?h:noImageUrl}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${S}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${E}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${n}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${f}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${y}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${a}/${F}
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${o}
      </p>
      <div class="modal-exercises__buttons">
      ${e?`<button
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          >
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${c}#icon-trash></use>
          </svg>`:`<button
          type="button"
          class="modal-exercises__button-favourites
          add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${c}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${w}">Give a rating</button>
      </div>
    </div>
    </div>`}const U=s=>{const e=document.querySelector(".modal-exercises__button-favourites");if(!x.isFavorite(s._id)){x.add(s),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${c}#icon-trash></use>
          </svg>`;return}x.remove(s._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${c}#icon-heart></use>
          </svg>`};function R(s,e){return s.map(({_id:t,bodyPart:a,target:i,rating:o,burnedCalories:n,time:f,name:h})=>`<li id="${t}" class="exercise-item">
    <div class="exercise-top-container">
      <div class="exercise-top-info">
        <p class="exercise-tag">Workout</p>
        <div class="exercise-custom-block">
        ${e?`<button class="exercise-button-delete">
              <svg class="trash-icon">
                <use href="images/svg/icons.svg#icon-trash"></use>
              </svg>
            </button>`:`<p class="exercise-rating">
              ${o}
              <svg class="rating-icon">
                <use href="images/svg/icons.svg#icon-star-yellow"></use>
              </svg>
            </p>`}
        </div>
      </div>
      <button type="menu" class="exercise-start-button" data-id="${t}">
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
      <h3 class="exercise-title">${h}</h3>
    </div>
    <div class="exercise-bottom-container">
      <p class="exercise-info">
        Burned calories: <mark class="exercise-marked-text">${n} / ${f} min</mark>
      </p>
      <p class="exercise-info">
        Body part: <mark class="exercise-marked-text exercise-info-text">${a}</mark>
      </p>
      <p class="exercise-info">
        Target: <mark class="exercise-marked-text exercise-info-text">${i}</mark>
      </p>
    </div>
  </li>`).join("")}function W(s,e){if(s.innerHTML="",(e==null?void 0:e.length)===0||!e){s.insertAdjacentHTML("afterbegin",`<li class="list-item-error">
        We haven't found exercises. Please try another search term"
    </li>`);return}s.insertAdjacentHTML("afterbegin",R(e,!1))}const Y=(s,{page:e,perPage:t,totalPages:a},i)=>{new M(s,{page:Number(e),itemsPerPage:t,totalItems:a*t}).on("beforeMove",function(n){i(n.page)})};B.exercisesContainer.addEventListener("click",s=>{s.target.dataset.id&&Array.from(s.target.classList).includes("exercise-start-button")&&$(s.target.dataset.id)});export{x as f,W as r,Y as s};
//# sourceMappingURL=open-exercises-modal-d3c0a6be.js.map
