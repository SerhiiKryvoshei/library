(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i=function(t){return new i.prototype.init(t)};i.prototype.init=function(t){return t?(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this};i.prototype.init.prototype=i.prototype;window.__=i;i.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this};i.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this};i.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display==="none"?this[t].style.display="":this[t].style.display="none");return this};function a(t){let r=0;const s=n=>{r=n,t.innerHTML=`count is ${r}`};t.addEventListener("click",()=>s(r+1)),s(0)}const u="/library/assets/vite-4a748afd.svg",d="/library/assets/javascript-8dac5379.svg";const c=__(".header__inner");c[0].classList.add("flex-all-center");c[0].innerHTML=`
  <a href="https://vitejs.dev" target="_blank">
    <img src="${u}" class="logo" alt="Vite logo" />
  </a>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${d}" class="logo vanilla" alt="JavaScript logo" />
    </a>
`;a(__("#counter")[0]);__("div").show();
