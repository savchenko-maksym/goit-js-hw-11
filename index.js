import"./assets/vendor-Bgfrje-I.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function c(t){const e="https://pixabay.com",a="/api/",o=new URLSearchParams({key:"48904751-5a5ebea07cb3b99a0a07eaa8f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${e}${a}?${o}`;return fetch(s,{headers:{Accept:"application/json"}}).then(i=>{if(i.ok)return i.json();throw new Error("Sorry, there are no images matching your search query. Please try again!")})}const n={formInput:document.querySelector(".js-create-form"),imgList:document.querySelector(".img-list")};n.formInput.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.imgTitle.value.trim();c(e).then(l).catch(),t.target.reset()});function p(t){return t.hits,t.hits.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href=${e.largeImageURL}>
        <img
          class="gallery-image"
          src=${e.webformatURL}
          alt=${e.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${e.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${e.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${e.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${e.downloads}</p>
  </div>
</div>
    </li>
  `).join("")}function l(t){const e=p(t);n.imgList.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=index.js.map
