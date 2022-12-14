(()=>{"use strict";var n={669:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n    grid-auto-rows: auto;\r\n    width: 100%;\r\n    height: 400px;\r\n    overflow: auto;\r\n    align-items: center;    \r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.sources::-webkit-scrollbar {\r\n    width: 7px;\r\n    background-color: #f9f9fd;\r\n}\r\n\r\n.sources::-webkit-scrollbar-thumb {\r\n    background-color: #223c50;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #223c50;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 0.1em;\r\n    color: #02d0ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    border-radius: 5px;    \r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #000000;\r\n    color: #ffffff;    \r\n    box-shadow: 0 0.2em 0.5em 0.3em #02d0ff;    \r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n@media (max-width: 1500px) {\r\n    .sources {\r\n        grid-template-columns: repeat(5, 1fr);;\r\n    }\r\n}\r\n\r\n@media (max-width: 1360px) {\r\n    .sources {\r\n        grid-template-columns: repeat(4, 1fr);;\r\n    }\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n    .sources {\r\n        grid-template-columns: repeat(3, 1fr);;\r\n    }\r\n}\r\n\r\n@media (max-width: 780px) {\r\n    .sources {\r\n        grid-template-columns: repeat(2, 1fr);;\r\n    }\r\n}\r\n\r\n@media (max-width: 555px) {\r\n    .sources {\r\n        grid-template-columns: repeat(1, 1fr);;\r\n    }\r\n    .source__item:hover,\r\n    .source__item:focus {      \r\n    transform: scale(1);\r\n    }\r\n}",""]);const i=o},767:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\n.button {\n    width: 100%;\n    margin: 20px auto;  \n    text-align: center;\n}\n\n.button__add {\n    text-align: center;    \n    width: auto;\n    background-color:  #162734;\n    margin: 0.5em;\n    padding: 1em 1em; \n    line-height: 1;   \n    font: inherit;      \n    color: #02829e;\n    cursor: pointer;   \n    border: 2px solid #00748e;\n}\n\n.button__add:hover {    \n    background-color:  #2d526e;      \n    color: #00d0ff;    \n    border: 2px solid #00d0ff;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;    \n    flex-direction: row;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n\n.footer__link_school {\n    width: 109px;\n    height: 41px;    \n}\n\n.footer__link:hover {\n    background-color: #faea68; \n    box-shadow: 0 0 15px 4px yellow;   \n}\n\n.footer__link_github {    \n    height: 24px;\n    border-radius: 50%;    \n}\n\n.footer__link_github {    \n    height: 24px;\n    border-radius: 50%;    \n}\n\n\n.footer__year {    \n    color: #444444;\n    cursor: default;\n}\n.footer__year span {\n    color: #333333;    \n}\n.footer__year:hover {    \n    color: #666666;    \n}\n\n@media (max-width: 640px) {\n    footer {        \n        flex-direction: column;\n        height: 200px;\n    }\n    .footer__year {\n        font-size: 15px;\n    }\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function a(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),t.push(l)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(n,e){var r,t,o;if(e.singleton){var i=m++;r=f||(f=c(e)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);i[o].references--}for(var c=a(n,e),d=0;d<r.length;d++){var l=s(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;!function(n){n[n.Upgrade_Required=426]="Upgrade_Required",n[n.Unauthorized_Response=401]="Unauthorized_Response",n[n.The_most_Lovely_Error=404]="The_most_Lovely_Error"}(n||(n={}));var e=r(379),t=r.n(e),o=r(669);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=(n,e)=>{const r=n.querySelector(e);if(!(r instanceof HTMLElement))throw new Error("Must be an HTMLElement!");return r};var s=r(501);t()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;class a{constructor(n=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,r=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");t instanceof HTMLTemplateElement&&e.forEach(((n,e)=>{const o=t.content.cloneNode(!0);if(!(o instanceof DocumentFragment))throw new Error("Элемент не найден");e%2&&(i(o,".news__item").classList.add("alt"),i(o,".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`),i(o,".news__meta-author").textContent=n.author||n.source.name,i(o,".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),i(o,".news__description-title").textContent=n.title,i(o,".news__description-source").textContent=n.source.name,i(o,".news__description-content").textContent=n.description,i(o,".news__read-more a").setAttribute("href",n.url),r.append(o)})),i(document,".news").innerHTML="",i(document,".news").appendChild(r)}},e=new class{constructor(){this.count=0,this.paginationArray=[]}draw(n){if(!(document.querySelector(".sources")instanceof HTMLElement))throw new Error("Шаблон-элемент не найден!");const e=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");if(!(r instanceof HTMLTemplateElement))throw new Error("Шаблон-элемент не найден!");n.forEach((n=>{const t=r.content.cloneNode(!0);if(!(t instanceof DocumentFragment))throw new Error("Фрагмент не найден");i(t,".source__item-name").textContent=n.name,i(t,".source__item").setAttribute("data-source-id",n.id),e.append(t)})),i(document,".sources").append(e)}},r=[]){this.news=n,this.sources=e,this.paginationArray=r}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=document.querySelector(".button__add");if(!(e instanceof HTMLElement))throw new Error("Шаблон-элемент не найден!");const r=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.paginationArray.push(...r),e.addEventListener("click",(()=>{this.paginationArray.length<10&&(e.style.display="none"),this.pagination(this.paginationArray)})),this.pagination(this.paginationArray)}pagination(n){this.sources.draw(n.splice(0,10).flat())}}var c=r(767);t()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,(new class{constructor(e=new class extends class extends class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},r=(()=>{console.error("No callback for GET response")})){this.load("GET",n,r,e)}errorHandler(e){if(!e.ok)throw e.status!==n.Upgrade_Required&&e.status!==n.The_most_Lovely_Error&&e.status!==n.Unauthorized_Response||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(n,e){const r=Object.assign(Object.assign({},this.options),n);let t=`${this.baseLink}${e}?`;return Object.keys(r).forEach((n=>{t+=`${n}=${r[n]}&`})),t.slice(0,-1)}load(n,e,r,t={}){fetch(this.makeUrl(t,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>r(n))).catch((n=>console.error(n)))}}{constructor(){super("https://nodenews.up.railway.app/",{apiKey:"99ad52376bb54747aa23434e51513238"})}}{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let r=n.target;const t=n.currentTarget;if(!(t instanceof HTMLElement))throw new Error("Элемент не найден");for(;r!==t;)if(r instanceof HTMLElement&&null!==r){if(r.classList.contains("source__item")){const n=r.getAttribute("data-source-id");if(null==n)throw new Error("Элемент не найден");return void(t.getAttribute("data-source")!==n&&(t.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}r=r.parentNode}}},r=new a){this.controller=e,this.view=r}start(){i(document,".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n)))}}).start()})()})();