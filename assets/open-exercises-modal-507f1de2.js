var C=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var r=(e,t,a)=>(C(e,t,"read from private field"),a?a.call(e):t.get(e)),g=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},v=(e,t,a,s)=>(C(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a);import{a as S,r as y}from"./header-bc756a79.js";import{P as N}from"./vendor-d8b4b001.js";const n="/js-team-project-crusaders/assets/icons-1f8f9d65.svg",T=e=>S.get(`/exercises/${e}`);var p,f,c,h,d;class w{constructor(){g(this,p,void 0);g(this,f,void 0);g(this,c,void 0);g(this,h,void 0);g(this,d,void 0);v(this,c,document.getElementById("modalDialog")),v(this,h,document.querySelector(".button-close")),v(this,d,document.getElementById("modal-content")),v(this,p,[]),v(this,f,[]),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this),this.handleModalClick=this.handleModalClick.bind(this)}handleCloseButtonClick(){this.close()}handleModalClick(t){t.target===r(this,c)&&this.close()}open(){r(this,h).addEventListener("click",this.handleCloseButtonClick),r(this,c).addEventListener("click",this.handleModalClick),r(this,c).showModal()}close(t=!0){r(this,h).removeEventListener("click",this.handleCloseButtonClick),r(this,c).removeEventListener("click",this.handleModalClick),r(this,p).forEach(({type:a,lister:s})=>r(this,d).removeEventListener(a,s)),t&&r(this,f).forEach(a=>a()),r(this,c).close()}setContent(t){r(this,d).innerHTML="",r(this,d).insertAdjacentHTML("beforeend",t)}addContentListener(t,a){r(this,p).push({type:t,lister:a}),r(this,d).addEventListener(t,a)}addOnCloseCallback(t){r(this,f).push(t)}}p=new WeakMap,f=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap;const H=(e,t,a,s)=>S.patch(`/exercises/${e}/rating`,{rate:t,email:a,review:s}),R=()=>`
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
              <use href="${n}#icon-star"></use>
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
              <use href="${n}#icon-star"></use>
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
              <use href="${n}#icon-star"></use>
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
              <use href="${n}#icon-star"></use>
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
              <use href="${n}#icon-star"></use>
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
  `;function O(e){const t=new w;t.addOnCloseCallback(()=>I(e));const a=async s=>{if(s.target.closest(".exercise-rating-form")){s.preventDefault();const{rate:i,email:o,comment:l}=s.target.elements,u=Number(i.value);try{await H(e,u,o.value,l.value),t.close()}catch{}}};t.setContent(R()),t.addContentListener("submit",a),t.open()}function j(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(a=>{const s=parseInt(a.dataset.value,10);let i=0;s<=e?i=100:s-1<e&&(i=(e-s+1)*100),a.style.setProperty("--percent-filled",`${i}%`)})}const m="favorite-exercises",q=e=>{const t=localStorage.getItem(m);if(t){const s=[...JSON.parse(t).filter(i=>i._id!==e._id),e];localStorage.setItem(m,JSON.stringify(s))}else localStorage.setItem(m,JSON.stringify([e]))},J=e=>{const t=localStorage.getItem(m);if(t){const s=JSON.parse(t).filter(i=>i._id!==e);localStorage.setItem(m,JSON.stringify(s))}},U=()=>{const e=localStorage.getItem(m);return e?JSON.parse(e):[]},z=e=>{const t=localStorage.getItem(m);return t?JSON.parse(t).some(s=>s._id===e):!1},x={add:q,remove:J,getAll:U,isFavorite:z},k="current-favorite-exercises-page",E={setPage:e=>{sessionStorage.setItem(k,e.toString())},getPage:()=>{const e=sessionStorage.getItem(k);return e?Number(e):1}};function G(e,t){return e.map(({_id:a,bodyPart:s,target:i,rating:o,burnedCalories:l,time:u,name:_})=>`<li id="${a}" class="exercise-item">
    <div class="exercise-top-container">
      <div class="exercise-top-info">
        <p class="exercise-tag">Workout</p>
        <div class="exercise-custom-block">
        ${t?`<button class="exercise-button-delete js-button-favorites-delete" data-id="${a}">
              <svg class="trash-icon js-button-favorites-delete" data-id="${a}">
                <use class="js-button-favorites-delete" href="${n}#icon-trash" data-id="${a}"></use>
              </svg>
            </button>`:`<p class="exercise-rating">
              ${o}
              <svg class="rating-icon">
                <use href="${n}#icon-star-yellow"></use>
              </svg>
            </p>`}
        </div>
      </div>
      <button type="menu" class="exercise-start-button" data-id="${a}">
        Start
        <svg class="button-icon icon-arrow">
          <use href="${n}#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-title-container">
      <span class="exercise-icon-container">
        <svg class="exercise-icon">
          <use href="${n}#icon-man"></use>
        </svg>
      </span>
      <h3 class="exercise-title">${_}</h3>
    </div>
    <div class="exercise-bottom-container">
      <p class="exercise-info">
        Burned calories: <mark class="exercise-marked-text">${l} / ${u} min</mark>
      </p>
      <p class="exercise-info">
        Body part: <mark class="exercise-marked-text exercise-info-text">${s}</mark>
      </p>
      <p class="exercise-info">
        Target: <mark class="exercise-marked-text exercise-info-text">${i}</mark>
      </p>
    </div>
  </li>`).join("")}function V(e,t,a=!1){if(e.innerHTML="",(t==null?void 0:t.length)===0||!t){e.insertAdjacentHTML("afterbegin",`<li class="list-item-error">
        We haven't found exercises. Please try another search term
    </li>`);return}e.insertAdjacentHTML("afterbegin",G(t,a))}const W=(e,{page:t,perPage:a,totalPages:s},i)=>{const o=document.getElementById(e);o.style.display=s>1?"flex":"none",new N(e,{page:Number(t),itemsPerPage:a,totalItems:s*a,centerAlign:!0,firstItemClassName:"pagination-item",lastItemClassName:"pagination-item",template:{page:'<a href="#" class="pagination-page">{{page}}</a>',currentPage:'<div class="pagination-current-page-container"><a class="pagination-page pagination-current-page">{{page}}</a></div>',moveButton:'<a href="#" class="visually-hidden"></a>',disabledMoveButton:'<a href="#" class="visually-hidden"></a>',moreButton:'<a href="#" class="visually-hidden"></a>'}}).on("beforeMove",function(u){i(u.page)})},b=10,$=()=>{const e=x.getAll();if(e.length===0){y.containerFavorites.innerHTML="<div class='favorite-exercises-empty-text-container'><p class='favorite-exercises-empty-text'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future. </p></div>";return}const t=E.getPage(),a=e.slice((t-1)*b,t*b);V(y.containerFavorites,a,!0),W("favorites-exercises-pagination",{page:t,perPage:b,totalPages:Math.ceil(e.length/b)},s=>{E.setPage(s),$(),window.scrollTo({top:300,behavior:"auto"})})},F=()=>window.location.pathname==="/favorites.html";async function I(e){const t=new w;let a;function s(o,l){o.target.closest(".modal-exercises__button-favourites")&&Z(a)}function i(o){o.target.closest(".modal-exercises__button-rating")&&(t.close(!1),O(e))}try{const{data:o}=await T(e);a=o;const l=x.isFavorite(a._id);t.setContent(Y({...a,rating:Number(a.rating).toFixed(1)},l)),j(Number(a.rating).toFixed(1)),t.addContentListener("click",s),t.addContentListener("click",i),t.open()}catch{}}function Y(e,t){const{name:a,burnedCalories:s,bodyPart:i,description:o,target:l,equipment:u,gifUrl:_,popularity:M,rating:P,time:B,_id:A}=e,L=a.charAt(0).toUpperCase()+a.slice(1);return`<div class="modal-exercises__card" >
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${_!==null?_:noImageUrl}" alt="${a}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${L}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${P}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${l}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${u}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${M}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${B}
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${o}
      </p>
      <div class="modal-exercises__buttons">
      ${t?`<button
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
            <use href=${n}#icon-trash></use>
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
            <use href=${n}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${A}">Give a rating</button>
      </div>
    </div>
    </div>`}const Z=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!x.isFavorite(e._id)){x.add(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${n}#icon-trash></use>
          </svg>`,F()&&$();return}x.remove(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${n}#icon-heart></use>
          </svg>`,F()&&$()};y.exercisesContainer.addEventListener("click",e=>{e.target.dataset.id&&Array.from(e.target.classList).includes("exercise-start-button")&&I(e.target.dataset.id)});export{W as a,x as f,$ as i,V as r};
//# sourceMappingURL=open-exercises-modal-507f1de2.js.map
