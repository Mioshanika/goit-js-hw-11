import{a as m,s as f,i as a}from"./assets/vendor-BfypR-IR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(o){const s={baseURL:"https://pixabay.com/api/",params:{key:"48827874-cd9b9c73a8babeb73b5d7fdc9",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return new m.create(s).get("")}function p(o){const{webformatURL:s,largeImageURL:t,likes:l,views:e,comments:r,downloads:n,tags:c}=o,d=new Set(c.split(", ")),u=Array.from(d.values()).join(", ");return`<li>
            <a href="${t}">
              <img src="${s}" alt="Tags: ${u}" />
            </a>
            <table class="photo-info">
              <tr>
                <th>Likes</td>
                <th>Views</td>
                <th>Comments</td>
                <th>Downloads</td>
              </tr>
              <tr>
                <td>${l}</td>
                <td>${e}</td>
                <td>${r}</td>
                <td>${n}</td>
              </tr>
            </table>
          </li>`}function y(o){return o.map(p).join("")}const i={queryForm:document.querySelector("[data-image-query]"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h={close:!1,showCounter:!1,captionDelay:250,captionsData:"alt",scrollZoom:"false",scrollZoomFactor:"false",disableScroll:"true"},L=new f(".gallery a",h);i.queryForm.addEventListener("submit",o=>{o.preventDefault(),i.gallery.innerHTML="";const s=o.target.elements.query.value.trim();if(!s){a.warning({message:"Query field is empty. Please enter your query!",position:"center"});return}i.loader.classList.remove("hidden"),g(s).then(t=>{t.data.hits.length?(i.loader.classList.add("hidden"),i.gallery.innerHTML=y(t.data.hits),L.refresh()):(i.loader.classList.add("hidden"),a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}))}).catch(t=>{t.response?(a.error({message:`${t.response.data}`,position:"center"}),a.error({message:`${t.response.status}`,position:"center"}),a.error({message:`${t.response.headers}`,position:"center"})):t.request?a.error({message:`${t.request}`,position:"center"}):a.error({message:`Error: ${t.message}`,position:"center"}),a.error({message:`${t.config}`,position:"center"})})});
//# sourceMappingURL=index.js.map
