(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u={body:document.querySelector("body")},o="favorite-exercises",_=t=>{const s=localStorage.getItem(o);if(s){const a=[...JSON.parse(s).filter(e=>e.id!==t.id),t];localStorage.setItem(o,JSON.stringify(a))}else localStorage.setItem(o,JSON.stringify([t]))},v=t=>{const s=localStorage.getItem(o);if(s){const a=JSON.parse(s).filter(e=>e.id!==t);localStorage.setItem(o,JSON.stringify(a))}},f=()=>{const t=localStorage.getItem(o);return t?JSON.parse(t):[]},g=t=>{const s=localStorage.getItem(o);return s?JSON.parse(s).some(a=>a.id===t):!1},h={add:_,remove:v,getAll:f,isFavorite:g},x="addToFavoritesButton";u.body.addEventListener("click",t=>{var s,i,a,e;(i=Array.from((s=t.target)==null?void 0:s.classList))!=null&&i.includes(x)&&((e=(a=t.target)==null?void 0:a.dataset)!=null&&e.info)&&h.add(t.target.dataset.info)});const y="/js-team-project-crusaders/assets/icons-71caf5e8.svg",b="https://your-energy.b.goit.study/api";async function S(t){const s=`${b}/exercises/${t}`;try{return await(await fetch(s)).json()}catch{console.log("error")}}class C{constructor(){this.modal=document.getElementById("modalDescription"),this.closeBtn=document.querySelector(".button-close"),this.modalContent=document.querySelector(".modal-exercises__card"),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this),this.handleModalClick=this.handleModalClick.bind(this),this.init()}init(){this.closeBtn.addEventListener("click",this.handleCloseButtonClick),this.modal.addEventListener("click",this.handleModalClick)}handleCloseButtonClick(){this.close()}handleModalClick(s){s.target==this.modal&&this.close()}open(){this.modal.showModal()}close(){this.modal.close()}destroy(){this.closeBtn.removeEventListener("click",this.handleCloseButtonClick),this.modal.removeEventListener("click",this.handleModalClick)}}document.getElementById("open-modal").addEventListener("click",()=>{E("64f389465ae26083f39b17a5")});async function E(t,s){const i=new C;try{const a=await S(t);i.modalContent.innerHTML="",i.modalContent.insertAdjacentHTML("beforeend",F({...a,rating:Number(a.rating).toFixed(1)})),i.open(),i.modalContent.addEventListener("click",e=>{e.target.closest(".modal-exercises__button-favourites")&&console.log("tyt")})}catch(a){console.error(a)}}function F(t){const{name:s,burnedCalories:i,bodyPart:a,description:e,target:r,equipment:l,gifUrl:c,popularity:n,rating:d,time:m,_id:p}=t;return`
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${c!==null?c:noImageUrl}" alt="${s}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${s}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${d}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${r}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${a}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${l}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${n}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${i}/${m} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${e}
      </p>
      <div class="modal-exercises__buttons">
      ${`<button 
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
            <use href=${y}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${p}">Give a rating</button>
      </div>
    </div>`}
//# sourceMappingURL=main-7554e63b.js.map
