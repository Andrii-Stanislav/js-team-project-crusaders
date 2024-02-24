var b=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(b(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},p=(e,t,s,o)=>(b(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{a as k,i as I,P as L}from"./vendor-d8b4b001.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();(()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu-backdrop]");e.addEventListener("click",r),t.addEventListener("click",r),s.addEventListener("click",o);function o(a){a.target===a.currentTarget&&r()}function r(){s.classList.toggle("is-open-mobile-menu")}})();var c,f,l;const n=class n{constructor(){v(this,f,void 0);v(this,l,!1);p(this,f,document.querySelector(".loader-container"))}static init(){i(n,c)||p(n,c,new n)}static show(){i(i(n,c),l)||(p(i(n,c),l,!0),i(i(n,c),f).classList.remove("visually-hidden"))}static hide(){i(i(n,c),l)&&(p(i(n,c),l,!1),i(i(n,c),f).classList.add("visually-hidden"))}};c=new WeakMap,f=new WeakMap,l=new WeakMap,v(n,c,void 0);let g=n;const N="https://your-energy.b.goit.study/api",S=k.create({baseURL:N});g.init();const O=e=>(g.show(),e),T=e=>(g.hide(),e),$=e=>(I.error({title:"Error",message:e.response.data.message}),g.hide(),Promise.reject(e));S.interceptors.request.use(O);S.interceptors.response.use(T,$);const A=()=>S.get("/quote"),F="quote";function B(){const e=localStorage.getItem(F);return e?JSON.parse(e):null}function M(e,t,s){const o=JSON.stringify({date:e,quote:t,author:s});localStorage.setItem(F,o)}const d={body:document.querySelector("body"),quoteElement:document.querySelector(".quote-text"),authorElement:document.querySelector(".quote-author"),quoteCard:document.querySelector(".quote-card"),exercisesFiltersList:document.querySelector(".js-exercises-filters-list"),exercisesFiltersTabs:document.getElementById("exercises-filters-tabs"),exercisesFiltersTabsList:document.querySelectorAll(".exercises-filters-tab"),exercisesFiltersPagination:document.getElementById("exercises-filters-pagination"),searchInputElement:document.querySelector(".search-input"),searchClearButton:document.querySelector(".button-clear"),searchFormElement:document.querySelector(".search-form"),exercisesContainer:document.querySelector(".exercises-container"),mainExercisesPagination:document.getElementById("main-exercises-pagination"),favoriteContainer:document.querySelector(".favorites-exercises-list"),breadcrumbsText:document.querySelector(".breadcrumbs-subtitle"),breadcrumbsDivider:document.querySelector(".breadcrumbs-divider"),containerFavorites:document.querySelector(".favorites-exercises-list"),footerEmailInput:document.getElementById("mailing-email"),footerSubscribeForm:document.querySelector(".js-footer-newsletter-form"),listItems:document.querySelectorAll(".nav-list-item")};async function R(){const e=new Date().toDateString();let t=B();if(!t||t.date!==e){const{data:s}=await A();s&&(t={date:e,quote:s.quote,author:s.author},M(e,s.quote,s.author))}t&&(d.quoteElement.textContent=t.quote,d.authorElement.textContent=t.author?`${t.author}`:"Unknown author")}document.addEventListener("DOMContentLoaded",R);const y="/js-team-project-crusaders/assets/icons-1f8f9d65.svg",u="favorite-exercises",j=e=>{const t=localStorage.getItem(u);if(t){const o=[...JSON.parse(t).filter(r=>r._id!==e._id),e];localStorage.setItem(u,JSON.stringify(o))}else localStorage.setItem(u,JSON.stringify([e]))},C=e=>{const t=localStorage.getItem(u);if(t){const o=JSON.parse(t).filter(r=>r._id!==e);localStorage.setItem(u,JSON.stringify(o))}},J=()=>{const e=localStorage.getItem(u);return e?JSON.parse(e):[]},D=e=>{const t=localStorage.getItem(u);return t?JSON.parse(t).some(o=>o._id===e):!1},U={add:j,remove:C,getAll:J,isFavorite:D},E="current-favorite-exercises-page",q={setPage:e=>{sessionStorage.setItem(E,e.toString())},getPage:()=>{const e=sessionStorage.getItem(E);return e?Number(e):1}};function Q(e,t){return e.map(({_id:s,bodyPart:o,target:r,rating:a,burnedCalories:m,time:x,name:w})=>`<li id="${s}" class="exercise-item">
    <div class="exercise-top-container">
      <div class="exercise-top-info">
        <p class="exercise-tag">Workout</p>
        <div class="exercise-custom-block">
        ${t?`<button class="exercise-button-delete js-button-favorites-delete" data-id="${s}">
              <svg class="trash-icon js-button-favorites-delete" data-id="${s}">
                <use class="js-button-favorites-delete" href="${y}#icon-trash" data-id="${s}"></use>
              </svg>
            </button>`:`<p class="exercise-rating">
              ${a}
              <svg class="rating-icon">
                <use href="${y}#icon-star-yellow"></use>
              </svg>
            </p>`}
        </div>
      </div>
      <button type="menu" class="exercise-start-button" data-id="${s}">
        Start
        <svg class="button-icon icon-arrow">
          <use href="${y}#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-title-container">
      <span class="exercise-icon-container">
        <svg class="exercise-icon">
          <use href="${y}#icon-man"></use>
        </svg>
      </span>
      <h3 class="exercise-title">${w}</h3>
    </div>
    <div class="exercise-bottom-container">
      <p class="exercise-info">
        Burned calories: <mark class="exercise-marked-text">${m} / ${x} min</mark>
      </p>
      <p class="exercise-info">
        Body part: <mark class="exercise-marked-text exercise-info-text">${o}</mark>
      </p>
      <p class="exercise-info">
        Target: <mark class="exercise-marked-text exercise-info-text">${r}</mark>
      </p>
    </div>
  </li>`).join("")}function H(e,t,s=!1){if(e.innerHTML="",(t==null?void 0:t.length)===0||!t){e.insertAdjacentHTML("afterbegin",`<li class="list-item-error">
        We haven't found exercises. Please try another search term
    </li>`);return}e.insertAdjacentHTML("afterbegin",Q(t,s))}const K=(e,{page:t,perPage:s,totalPages:o},r)=>{const a=document.getElementById(e);a.style.display=o>1?"flex":"none",new L(e,{page:Number(t),itemsPerPage:s,totalItems:o*s,centerAlign:!0,firstItemClassName:"pagination-item",lastItemClassName:"pagination-item",template:{page:'<a href="#" class="pagination-page">{{page}}</a>',currentPage:'<div class="pagination-current-page-container"><a class="pagination-page pagination-current-page">{{page}}</a></div>',moveButton:'<a href="#" class="visually-hidden"></a>',disabledMoveButton:'<a href="#" class="visually-hidden"></a>',moreButton:'<a href="#" class="visually-hidden"></a>'}}).on("beforeMove",function(x){r(x.page)})},h=10,P=()=>{const e=U.getAll();if(e.length===0){d.containerFavorites.insertAdjacentHTML("afterbegin","<div class='favorite-exercises-empty-text-container'><p class='favorite-exercises-empty-text'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future. </p></div>");return}const t=q.getPage(),s=e.slice((t-1)*h,t*h);H(d.containerFavorites,s,!0),K("favorites-exercises-pagination",{page:t,perPage:h,totalPages:Math.ceil(e.length/h)},o=>{q.setPage(o),P(),window.scrollTo({top:300,behavior:"auto"})})};P();const G=e=>S.post("/subscription",{email:e}).then(t=>{I.success({title:"Success",message:t.message})});d.footerSubscribeForm.addEventListener("submit",function(e){e.preventDefault();const t=d.footerEmailInput.value;G(t)});const V=window.location.href;d.listItems.forEach(e=>{e.querySelector("a").href===V&&e.classList.add("nav-selected")});export{S as a,K as b,H as c,U as f,P as i,d as r,y as s};
//# sourceMappingURL=header-d6ee78fb.js.map
