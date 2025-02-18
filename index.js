import{a as m,s as f,i as l}from"./assets/vendor-BfypR-IR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(o){const r={baseURL:"https://pixabay.com/api/",params:{key:"48827874-cd9b9c73a8babeb73b5d7fdc9",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return new m.create(r).get("")}function y(o){const{webformatURL:r,largeImageURL:s,likes:n,views:e,comments:t,downloads:i,tags:c}=o,d=new Set(c.split(", ")),u=Array.from(d.values()).join(", ");return`<li>
            <a href="${s}">
              <img src="${r}" alt="Tags: ${u}" />
            </a>
            <table class="photo-info">
              <tr>
                <th>Likes</td>
                <th>Views</td>
                <th>Comments</td>
                <th>Downloads</td>
              </tr>
              <tr>
                <td>${n}</td>
                <td>${e}</td>
                <td>${t}</td>
                <td>${i}</td>
              </tr>
            </table>
          </li>`}function p(o){return o.map(y).join("")}const a={queryForm:document.querySelector("[data-image-query]"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h={close:!1,showCounter:!1,captionDelay:250,captionsData:"alt",scrollZoom:"false",scrollZoomFactor:"false",disableScroll:"true"},L=new f(".gallery a",h);a.queryForm.addEventListener("submit",o=>{o.preventDefault(),a.gallery.innerHTML="";const r=o.target.elements.query.value.trim();if(!r){l.warning({message:"Query field is empty. Please enter your query!",position:"center"});return}a.loader.classList.remove("hidden"),g(r).then(s=>{s.data.hits.length?(a.loader.classList.add("hidden"),a.gallery.innerHTML=p(s.data.hits),L.refresh()):(a.loader.classList.add("hidden"),l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}))}).catch(s=>{a.loader.classList.add("hidden"),l.error({message:`${s.message}`,position:"center"})})});
//# sourceMappingURL=index.js.map
