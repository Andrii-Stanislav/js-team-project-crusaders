var x=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var i=(a,e,t)=>(x(a,e,"read from private field"),t?t.call(a):e.get(a)),u=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},m=(a,e,t,s)=>(x(a,e,"write to private field"),s?s.call(a,t):e.set(a,t),t);import{a as C,s as o,f as h,i as b,r as M}from"./header-d6ee78fb.js";const F=a=>C.get(`/exercises/${a}`);var _,p,n,v,c;class ${constructor(){u(this,_,void 0);u(this,p,void 0);u(this,n,void 0);u(this,v,void 0);u(this,c,void 0);m(this,n,document.getElementById("modalDialog")),m(this,v,document.querySelector(".button-close")),m(this,c,document.getElementById("modal-content")),m(this,_,[]),m(this,p,[]),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this),this.handleModalClick=this.handleModalClick.bind(this)}handleCloseButtonClick(){this.close()}handleModalClick(e){e.target===i(this,n)&&this.close()}open(){i(this,v).addEventListener("click",this.handleCloseButtonClick),i(this,n).addEventListener("click",this.handleModalClick),i(this,n).showModal()}close(e=!0){i(this,v).removeEventListener("click",this.handleCloseButtonClick),i(this,n).removeEventListener("click",this.handleModalClick),i(this,_).forEach(({type:t,lister:s})=>i(this,c).removeEventListener(t,s)),e&&i(this,p).forEach(t=>t()),i(this,n).close()}setContent(e){i(this,c).innerHTML="",i(this,c).insertAdjacentHTML("beforeend",e)}addContentListener(e,t){i(this,_).push({type:e,lister:t}),i(this,c).addEventListener(e,t)}addOnCloseCallback(e){i(this,p).push(e)}}_=new WeakMap,p=new WeakMap,n=new WeakMap,v=new WeakMap,c=new WeakMap;const A=(a,e,t,s)=>C.patch(`/exercises/${a}/rating`,{rate:e,email:t,review:s}),q=()=>`
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
              <use href="${o}#icon-star"></use>
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
              <use href="${o}#icon-star"></use>
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
              <use href="${o}#icon-star"></use>
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
              <use href="${o}#icon-star"></use>
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
              <use href="${o}#icon-star"></use>
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
  `;function S(a){const e=new $;e.addOnCloseCallback(()=>k(a));const t=async s=>{if(s.target.closest(".exercise-rating-form")){s.preventDefault();const{rate:l,email:r,comment:d}=s.target.elements,g=Number(l.value);try{await A(a,g,r.value,d.value),e.close()}catch{}}};e.setContent(q()),e.addContentListener("submit",t),e.open()}function H(a){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(t=>{const s=parseInt(t.dataset.value,10);let l=0;s<=a?l=100:s-1<a&&(l=(a-s+1)*100),t.style.setProperty("--percent-filled",`${l}%`)})}async function k(a){const e=new $;let t;function s(r,d){r.target.closest(".modal-exercises__button-favourites")&&T(t)}function l(r){r.target.closest(".modal-exercises__button-rating")&&(e.close(!1),S(a))}try{const{data:r}=await F(a);t=r;const d=h.isFavorite(t._id);e.setContent(U({...t,rating:Number(t.rating).toFixed(1)},d)),H(Number(t.rating).toFixed(1)),e.addContentListener("click",s),e.addContentListener("click",l),e.open()}catch{}}function U(a,e){const{name:t,burnedCalories:s,bodyPart:l,description:r,target:d,equipment:g,gifUrl:f,popularity:y,rating:E,time:w,_id:L}=a,B=t.charAt(0).toUpperCase()+t.slice(1);return`<div class="modal-exercises__card" >
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${f!==null?f:noImageUrl}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${B}</p>
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
          <p class="modal-exercises__partials-value">${d}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${l}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${g}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${y}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${w}
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
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
            <use href=${o}#icon-trash></use>
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
            <use href=${o}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${L}">Give a rating</button>
      </div>
    </div>
    </div>`}const T=a=>{const e=document.querySelector(".modal-exercises__button-favourites");if(!h.isFavorite(a._id)){h.add(a),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${o}#icon-trash></use>
          </svg>`,b();return}h.remove(a._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${o}#icon-heart></use>
          </svg>`,b()};M.exercisesContainer.addEventListener("click",a=>{a.target.dataset.id&&Array.from(a.target.classList).includes("exercise-start-button")&&k(a.target.dataset.id)});
//# sourceMappingURL=open-exercises-modal-b96c99e8.js.map
