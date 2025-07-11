(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/*! (c) Andrea Giammarchi - ISC */var B={};try{B.WeakMap=WeakMap}catch{B.WeakMap=function(t,n){var s=n.defineProperty,r=n.hasOwnProperty,i=a.prototype;return i.delete=function(l){return this.has(l)&&delete l[this._]},i.get=function(l){return this.has(l)?l[this._]:void 0},i.has=function(l){return r.call(l,this._)},i.set=function(l,o){return s(l,this._,{configurable:!0,value:o}),this},a;function a(l){s(this,"_",{value:"_@ungap/weakmap"+t++}),l&&l.forEach(c,this)}function c(l){this.set(l[0],l[1])}}(Math.random(),Object)}const N=B.WeakMap;/*! (c) Andrea Giammarchi - ISC */var m="-"+Math.random().toFixed(6)+"%",$=!1;try{(function(e,t,n){return t in e&&(e.innerHTML="<p "+n+'="'+m+'"></p>',e[t].childNodes[0].getAttribute(n)==m)})(document.createElement("template"),"content","tabindex")||(m="_dt: "+m.slice(1,-1)+";",$=!0)}catch{}var Z="<!--"+m+"-->",i1=8,c1=1,o1=3,I=/^(?:plaintext|script|style|textarea|title|xmp)$/i,C1=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;/*! (c) Andrea Giammarchi - ISC */function f1(e){return e.join(Z).replace(h1,m1).replace(u1,g1)}var A=" \\f\\n\\r\\t",q="[^"+A+`\\/>"'=]+`,O="["+A+"]+"+q,K="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",X=`(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|`+q.replace("\\/","")+"))?)",u1=new RegExp(K+O+X+"+)(["+A+"]*/?>)","g"),h1=new RegExp(K+O+X+"*)(["+A+"]*/>)","g"),v1=new RegExp("("+O+`\\s*=\\s*)(['"]?)`+Z+"\\2","gi");function g1(e,t,n,s){return"<"+t+n.replace(v1,p1)+s}function p1(e,t,n){return t+(n||'"')+m+(n||'"')}function m1(e,t,n){return C1.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:z}=Array,{indexOf:c2,slice:k}=[],V=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)}),w1=1,Y=111,d1=({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e},y=(e,t)=>e.nodeType===Y?1/t<0?t?d1(e):e.lastChild:t?e.valueOf():e.firstChild:e,x1=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const s=k.call(t,0),r=s[0],i=s[n-1];return{ELEMENT_NODE:w1,nodeType:Y,firstChild:r,lastChild:i,valueOf(){if(t.length!==n){let a=0;for(;a<n;)e.appendChild(s[a++])}return e}}};/*! (c) Andrea Giammarchi - ISC */var J=function(e){var t="fragment",n="template",s="content"in a(n),r=s?function(l){var o=a(n);return o.innerHTML=l,o.content}:function(l){var o=a(t),C=a(n),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(l)){var h=RegExp.$1;C.innerHTML="<table>"+l+"</table>",u=C.querySelectorAll(h)}else C.innerHTML=l,u=C.childNodes;return i(o,u),o};return function(o,C){return(C==="svg"?c:r)(o)};function i(l,o){for(var C=o.length;C--;)l.appendChild(o[0])}function a(l){return l===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",l)}function c(l){var o=a(t),C=a("div");return C.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+l+"</svg>",i(o,C.firstChild.childNodes),o}}(document);const T=(e,t,n,s,r)=>{const i=n.length;let a=t.length,c=i,l=0,o=0,C=null;for(;l<a||o<c;)if(a===l){const u=c<i?o?s(n[o-1],-0).nextSibling:s(n[c],0):r;for(;o<c;)e.insertBefore(s(n[o++],1),u)}else if(c===o)for(;l<a;)(!C||!C.has(t[l]))&&e.removeChild(s(t[l],-1)),l++;else if(t[l]===n[o])l++,o++;else if(t[a-1]===n[c-1])a--,c--;else if(t[l]===n[c-1]&&n[o]===t[a-1]){const u=s(t[--a],-0).nextSibling;e.insertBefore(s(n[o++],1),s(t[l++],-0).nextSibling),e.insertBefore(s(n[--c],1),u),t[a]=n[c]}else{if(!C){C=new Map;let u=o;for(;u<c;)C.set(n[u],u++)}if(C.has(t[l])){const u=C.get(t[l]);if(o<u&&u<c){let h=l,g=1;for(;++h<a&&h<c&&C.get(t[h])===u+g;)g++;if(g>u-o){const v=s(t[l],0);for(;o<u;)e.insertBefore(s(n[o++],1),v)}else e.replaceChild(s(n[o++],1),s(t[l++],-1))}else l++}else e.removeChild(s(t[l++],-1))}return n};/*! (c) Andrea Giammarchi - ISC */var b1=function(e,t,n,s,r){var i=r in e,a=e.createDocumentFragment();a[t](e[s]("g")),a[t](e[s](""));var c=i?e[r](a,!0):a[n](!0);return c.childNodes.length<2?function l(o,C){for(var u=o[n](),h=o.childNodes||[],g=h.length,v=0;C&&v<g;v++)u[t](l(h[v],C));return u}:i?e[r]:function(l,o){return l[n](!!o)}}(document,"appendChild","cloneNode","createTextNode","importNode"),Q="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},M1=$?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(s,r){return n.indexOf(s.name)<=n.indexOf(r.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function y1(e,t){for(var n=t.length,s=0;s<n;)e=e.childNodes[t[s++]];return e}function e1(e,t,n,s){for(var r=e.childNodes,i=r.length,a=0;a<i;){var c=r[a];switch(c.nodeType){case c1:var l=s.concat(a);T1(c,t,n,l),e1(c,t,n,l);break;case i1:var o=c.textContent;if(o===m)n.shift(),t.push(I.test(e.nodeName)?j(e,s):k1(c,s.concat(a)));else switch(o.slice(0,2)){case"/*":if(o.slice(-2)!=="*/")break;case"👻":e.removeChild(c),a--,i--}break;case o1:I.test(e.nodeName)&&Q.call(c.textContent)===Z&&(n.shift(),t.push(j(e,s)));break}a++}}function T1(e,t,n,s){for(var r=e.attributes,i=[],a=[],c=M1(r,n),l=c.length,o=0;o<l;){var C=c[o++],u=C.value===m,h;if(u||1<(h=C.value.split(Z)).length){var g=C.name;if(i.indexOf(g)<0){i.push(g);var v=n.shift().replace(u?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+`)\\s*=\\s*('|")[\\S\\s]*`,"i"),"$1"),d=r[v]||r[v.toLowerCase()];if(u)t.push(P(d,s,v,null));else{for(var x=h.length-2;x--;)n.shift();t.push(P(d,s,v,h))}}a.push(C)}}l=a.length,o=0;for(var E=0<l&&$&&!("ownerSVGElement"in e);o<l;){var w=a[o++];E&&(w.value=""),e.removeAttribute(w.name)}var b=e.nodeName;if(/^script$/i.test(b)){var M=document.createElement(b);for(l=r.length,o=0;o<l;)M.setAttributeNode(r[o++].cloneNode(!0));M.textContent=e.textContent,e.parentNode.replaceChild(M,e)}}function k1(e,t){return{type:"any",node:e,path:t}}function P(e,t,n,s){return{type:"attr",node:e,path:t,name:n,sparse:s}}function j(e,t){return{type:"text",node:e,path:t}}var F=V(new N);function L1(e,t){var n=(e.convert||f1)(t),s=e.transform;s&&(n=s(n));var r=J(n,e.type);t1(r);var i=[];return e1(r,i,t.slice(0),[]),{content:r,updates:function(a){for(var c=[],l=i.length,o=0,C=0;o<l;){var u=i[o++],h=y1(a,u.path);switch(u.type){case"any":c.push({fn:e.any(h,[]),sparse:!1});break;case"attr":var g=u.sparse,v=e.attribute(h,u.name,u.node);g===null?c.push({fn:v,sparse:!1}):(C+=g.length-2,c.push({fn:v,sparse:!0,values:g}));break;case"text":c.push({fn:e.text(h),sparse:!1}),h.textContent="";break}}return l+=C,function(){var d=arguments.length;if(l!==d-1)throw new Error(d-1+" values instead of "+l+`
`+t.join("${value}"));for(var x=1,E=1;x<d;){var w=c[x-E];if(w.sparse){var b=w.values,M=b[0],_=1,D=b.length;for(E+=D-2;_<D;)M+=arguments[x++]+b[_++];w.fn(M)}else w.fn(arguments[x++])}return a}}}}function E1(e,t){var n=F.get(t)||F.set(t,L1(e,t));return n.updates(b1.call(document,n.content,!0))}var z1=[];function H1(e){var t=z1,n=t1;return function(s){return t!==s&&(n=E1(e,t=s)),n.apply(null,arguments)}}function t1(e){for(var t=e.childNodes,n=t.length;n--;){var s=t[n];s.nodeType!==1&&Q.call(s.textContent).length===0&&e.removeChild(s)}}/*! (c) Andrea Giammarchi - ISC */var Z1=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(c,l){return"ownerSVGElement"in c?s(c,l):i(c.style,!1)};function n(a,c,l){return c+"-"+l.toLowerCase()}function s(a,c){var l;return c?l=c.cloneNode(!0):(a.setAttribute("style","--hyper:style;"),l=a.getAttributeNode("style")),l.value="",a.setAttributeNode(l),i(l,!0)}function r(a){var c,l=[];for(c in a)l.push(c.replace(t,n),":",a[c],";");return l.join("")}function i(a,c){var l,o;return function(C){var u,h,g,v;switch(typeof C){case"object":if(C){if(l==="object"){if(!c&&o!==C)for(h in o)h in C||(a[h]="")}else c?a.value="":a.cssText="";u=c?{}:a;for(h in C)v=C[h],g=typeof v=="number"&&!e.test(h)?v+"px":v,!c&&/^--/.test(h)?u.setProperty(h,g):u[h]=g;l="object",c?a.value=r(o=u):o=C;break}default:o!=C&&(l="string",o=C,c?a.value=C||"":a.cssText=C||"");break}}}}();const A1=e=>t=>{for(const n in t){const s=n==="role"?n:`aria-${n}`,r=t[n];r==null?e.removeAttribute(s):e.setAttribute(s,r)}},R=(e,t)=>{let n,s=!0;const r=document.createAttributeNS(null,t);return i=>{n!==i&&(n=i,n==null?s||(e.removeAttributeNode(r),s=!0):(r.value=i,s&&(e.setAttributeNodeNS(r),s=!1)))}},S1=(e,t,n)=>s=>{n!==!!s&&((n=!!s)?e.setAttribute(t,""):e.removeAttribute(t))},n1=({dataset:e})=>t=>{for(const n in t){const s=t[n];s==null?delete e[n]:e[n]=s}},B1=(e,t)=>{let n,s=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(s=s.toLowerCase()),r=>{const i=z(r)?r:[r,!1];n!==i[0]&&(n&&e.removeEventListener(s,n,i[1]),(n=i[0])&&e.addEventListener(s,n,i[1]))}},N1=e=>t=>{typeof t=="function"?t(e):t.current=e},U=(e,t)=>t==="dataset"?n1(e):n=>{e[t]=n},$1=(e,t)=>{let n;return s=>{n!==s&&(n=s,e[t]!==s&&(s==null?(e[t]="",e.removeAttribute(t)):e[t]=s))}},O1=/^(?:form|list)$/i,V1=(e,t)=>e.ownerDocument.createTextNode(t);function s1(e){return this.type=e,H1(this)}s1.prototype={attribute(e,t,n){const s=this.type==="svg";switch(t){case"class":if(s)return R(e,t);t="className";case"props":return U(e,t);case"aria":return A1(e);case"style":return Z1(e,n,s);case"ref":return N1(e);case".dataset":return n1(e);default:return t.slice(0,1)==="."?U(e,t.slice(1)):t.slice(0,1)==="?"?S1(e,t.slice(1)):t.slice(0,2)==="on"?B1(e,t):t in e&&!(s||O1.test(t))?$1(e,t):R(e,t)}},any(e,t){const{type:n}=this;let s=!1,r;const i=a=>{switch(typeof a){case"string":case"number":case"boolean":s?r!==a&&(r=a,t[0].textContent=a):(s=!0,r=a,t=T(e.parentNode,t,[V1(e,a)],y,e));break;case"function":i(a(e));break;case"object":case"undefined":if(a==null){s=!1,t=T(e.parentNode,t,[],y,e);break}default:if(s=!1,r=a,z(a))if(a.length===0)t.length&&(t=T(e.parentNode,t,[],y,e));else switch(typeof a[0]){case"string":case"number":case"boolean":i(String(a));break;case"function":i(a.map(_1,e));break;case"object":z(a[0])&&(a=a.concat.apply([],a));default:t=T(e.parentNode,t,a,y,e);break}else"ELEMENT_NODE"in a?t=T(e.parentNode,t,a.nodeType===11?k.call(a.childNodes):[a],y,e):"text"in a?i(String(a.text)):"any"in a?i(a.any):"html"in a?t=T(e.parentNode,t,k.call(J([].concat(a.html).join(""),n).childNodes),y,e):"length"in a&&i(k.call(a));break}};return i},text(e){let t;const n=s=>{if(t!==s){t=s;const r=typeof s;r==="object"&&s?"text"in s?n(String(s.text)):"any"in s?n(s.any):"html"in s?n([].concat(s.html).join("")):"length"in s&&n(k.call(s).join("")):r==="function"?n(s(e)):e.textContent=s??""}};return n}};function _1(e){return e(this)}const{create:D1,freeze:I1,keys:o2}=Object,G=V(new N),P1=e=>({html:W("html",e),svg:W("svg",e),render(t,n){const s=typeof n=="function"?n():n,r=G.get(t)||G.set(t,L()),i=s instanceof S?H(e,r,s):s;return i!==r.wire&&(r.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}),L=()=>({stack:[],entry:null,wire:null}),W=(e,t)=>{const n=V(new N),s=i=>function(){return H(t,i,r.apply(null,arguments))};return r.for=(i,a)=>{const c=n.get(i)||n.set(i,D1(null));return c[a]||(c[a]=s(L()))},r.node=function(){return H(t,L(),r.apply(null,arguments)).valueOf()},r;function r(){return new S(e,F1.apply(null,arguments))}},H=(e,t,{type:n,template:s,values:r})=>{const{length:i}=r;a1(e,t,r,i);let{entry:a}=t;if(!a||a.template!==s||a.type!==n){const c=new e(n);t.entry=a={type:n,template:s,tag:c,wire:x1(c(s,...r))}}else a.tag(s,...r);return a.wire},a1=(e,{stack:t},n,s)=>{for(let r=0;r<s;r++){const i=n[r];i instanceof j1?n[r]=H(e,t[r]||(t[r]=L()),i):z(i)?a1(e,t[r]||(t[r]=L()),i,i.length):t[r]=null}s<t.length&&t.splice(s)};I1(S);function S(e,t){this.type=e,this.template=t.shift(),this.values=t}const j1=S,{render:C2,html:f,svg:f2}=P1(s1);function F1(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}const R1="Manguales",U1="Manguales Extreme Metal Union Barcelona",G1="Asociación de Metal Extremo Manguales",W1="menu",q1="MANGUALES_SVG5.jpg?v=1708014156801",r1=[{url:"https://shop.eventix.io/b2ce7d2b-8c0a-11ef-a9cb-7e126431635e/events?shop_code=46tqrrfs",text:"Entradas para los próximos eventos",img:"8f5d0787ed9af05113eb41afb36c17bd-double-speakers-icon.png?v=1705356231424",altText:"Eventos metal extremo Manguales"},{url:"https://forms.gle/FEnfsHJaaby3qBZaA",text:"¿Quieres tocar en un concierto de Manguales?",img:"https://cdn-icons-png.flaticon.com/512/1598/1598677.png",altText:"Manguales en Instagram"},{url:"CARTA_PRINCIPIOS_11MARZO.pdf?v=1710278950384",text:"Principios de la asociación",img:"https://cdn-icons-png.flaticon.com/256/3345/3345349.png",altText:"Principios de Manguales EMU"},{url:"https://www.instagram.com/mangualesextreme/",text:"Síguenos en Instagram",img:"pngtree-instagram-icon-instagram-logo-png-image_3584852.png?v=1697315535781",altText:"Manguales en Instagram"},{url:"https://www.facebook.com/profile.php?id=61550296571768",text:"Síguenos en Facebook",img:"2021_Facebook_icon.svg.png?v=1697315585172",altText:"Manguales en Facebook"},{url:"https://www.youtube.com/@Manguales",text:"Videos de actuaciones",img:"free-youtube-logo-icon-2431-thumb.png?v=1697315620707",altText:"Manguales en Youtube"}],K1={glitch:"",arena:"",bandcamp:"",cohost:"",dev:"",facebook:"",github:"",gitlab:"",hashnode:"",instagram:"",keybase:"",kofi:"",letterboxd:"",linkedin:"",mastodon:"",medium:"",onlyfans:"",patreon:"",pinboard:"",pinterest:"",podcast:"",soundcloud:"",spotify:"",stackoverflow:"",substack:"",twitter:"",twitch:"",tiktok:"",tumblr:"",youtube:"",email:"manguales.asoc@gmail.com"},p={metaTitle:R1,metaDescription:U1,name:G1,theme:W1,avatarImage:q1,links:r1,social:K1},X1=f.node`
  <title>${p.metaTitle}</title>

  <!-- OpenGraph/Social sharing -->
  <meta name="description" content="${p.metaDescription}" />
  <meta name="og:description" content="${p.metaDescription}" />
  <meta property="og:image" content="${p.avatarImage}" />
  <meta property="og:title" content="${p.metaTitle}" />
  <meta name="twitter:card" content="summary" />
  <!-- Load our custom theme -->
  <link rel="stylesheet" type="text/css" href="/styles/themes/${p.theme}.css" />
`,Y1=f.node`
<link href="https://fonts.cdnfonts.com/css/cityburn" rel="stylesheet">
                
<div>
  <div class='avatar-container'>
    <img src='${p.avatarImage}' class='avatar' alt='${p.name}' />
  </div>
  
</div>`;function J1(e){const t=e.url?e.url.replace(/[^a-z0-9]/gi,"-").toLowerCase():"";return f`
    <li class=${t}>
      <a href=${e.url}>
        ${e.img?f`<img src=${e.img} alt=${e.altText} />`:""}
        <span>${e.text}</span>
      </a>
    </li>
  `}const Q1=f.node`
    <ul class="link-list">
      ${r1.map(J1)}
    </ul>
  `,e2=f.node`<footer class="footer">
  <div class="tagline">
    Asociación Manguales Extreme Metal Union </br>
    <i>Created with <a href="https://glitch.com/">Glitch</a>
    and served by <a href="https://www.fastly.com/">Fastly</a> </i>
  </div>
</footer>
`,l1={glitch:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M22.6555 15.0534C22.4795 14.4777 22.4207 14.5928 22.7727 13.7871C22.9235 13.4429 23.0008 13.0721 23 12.6975C22.9996 12.653 22.9879 12.6093 22.966 12.5703C22.9441 12.5313 22.9127 12.4982 22.8746 12.4741C22.8364 12.4499 22.7928 12.4355 22.7476 12.432C22.7024 12.4285 22.657 12.4361 22.6155 12.454C22.0767 12.6836 21.0494 13.1198 20.5442 13.3265C19.8406 13.6143 19.0781 13.7293 18.1984 13.4415C17.3188 13.1537 16.043 12.5058 14.8701 12.2464C14.0853 12.0731 13.5821 11.9217 12.7648 11.8346C12.9109 11.8206 13.8438 11.6419 14.7823 11.3685C15.703 11.0874 16.6086 10.761 17.4958 10.3905C18.551 9.92991 19.2551 10.0449 20.0171 10.3328C20.4782 10.507 21.367 10.9119 21.9986 11.2057C22.2522 11.3232 22.6216 11.0931 22.4998 10.8456C22.2751 10.3905 22.2167 9.61321 22.5099 9.09534C22.8432 8.50626 22.7737 8.37579 22.5977 7.80065C22.4217 7.22552 22.3633 7.34005 22.7149 6.53436C22.847 6.23287 22.9229 5.91057 22.9391 5.58276C22.9413 5.52412 22.9283 5.4659 22.9014 5.4135C22.8745 5.36109 22.8346 5.31619 22.7853 5.28297C22.736 5.24975 22.679 5.22928 22.6195 5.22345C22.56 5.21762 22.5 5.22663 22.445 5.24963C21.887 5.48766 20.9586 5.88054 20.4863 6.07375C19.7827 6.36157 19.0203 6.47659 18.1406 6.18878L14.5591 5.01659C14.4884 4.99434 14.427 4.95012 14.3841 4.89061C14.2294 4.67599 13.8098 4.1387 13.3903 4.00126C12.8627 3.82847 10.9274 3.25433 10.2238 3.13781C9.52016 3.02129 9.05091 2.84999 8.69885 3.25284C8.43911 3.55161 8.02617 4.03363 7.82731 4.26667C7.79196 4.30754 7.74748 4.33986 7.69733 4.36111C7.64717 4.38235 7.59271 4.39196 7.53816 4.38917C6.96187 4.36327 5.04937 4.36278 3.18607 5.32532C1.53128 6.18031 1.11124 7.51035 1.00471 8.13877C0.997129 8.18363 0.998714 8.22953 1.00937 8.27379C1.02002 8.31805 1.03954 8.35979 1.06677 8.39658C1.09401 8.43337 1.12843 8.46448 1.16802 8.48809C1.20762 8.51171 1.2516 8.52736 1.29742 8.53414C1.78848 8.61132 2.65443 8.79457 2.64378 9.12472C2.63566 9.37867 2.2212 9.56292 1.85138 9.67645C1.79177 9.69555 1.73838 9.7298 1.69663 9.77573C1.65488 9.82165 1.62627 9.87761 1.61369 9.93791C1.60112 9.99821 1.60503 10.0607 1.62504 10.119C1.64505 10.1774 1.68043 10.2295 1.7276 10.27C2.28918 10.7515 3.43617 11.486 5.3715 11.8346C4.63164 11.9849 3.9164 12.2346 3.24594 12.5765C1.52113 13.4664 1.13863 14.8716 1.0529 15.4647C1.04735 15.5001 1.04898 15.5362 1.05769 15.571C1.06639 15.6058 1.08201 15.6386 1.10364 15.6675C1.12527 15.6963 1.15249 15.7207 1.18374 15.7392C1.21499 15.7578 1.24965 15.77 1.28575 15.7754C1.75855 15.8456 2.71429 16.0299 2.70364 16.3769C2.69451 16.6598 2.18265 16.8555 1.79051 16.9645C1.74343 16.9773 1.70068 17.0021 1.66663 17.0365C1.63259 17.0709 1.60849 17.1136 1.59682 17.1601C1.58514 17.2067 1.58631 17.2554 1.6002 17.3014C1.61409 17.3474 1.64021 17.3889 1.67586 17.4216C2.29019 17.9858 3.81005 19.046 6.70822 19.2551C7.15261 19.287 7.63556 19.2999 8.12865 19.2994C8.55021 19.8472 9.30963 20.6085 10.4211 20.8635C11.2622 21.0567 11.7822 21.0129 12.0861 20.9267C12.135 20.9121 12.1799 20.8865 12.2172 20.852C12.2544 20.8175 12.2831 20.7751 12.3009 20.728C12.3187 20.6808 12.3252 20.6303 12.3199 20.5803C12.3146 20.5303 12.2976 20.4822 12.2702 20.4397L11.4585 19.1451C12.1449 19.0893 12.6324 19.037 12.7298 19.0265C12.7416 19.0251 12.7533 19.0229 12.7648 19.0201C13.0362 18.9533 16.5421 18.0854 17.5567 17.6427C18.6124 17.1821 19.316 17.2971 20.0785 17.585C20.5746 17.7722 21.5669 18.2278 22.2 18.5231C22.4065 18.6192 22.6566 18.437 22.586 18.2243C22.4242 17.7299 22.3659 16.8091 22.5708 16.3485C22.8427 15.7311 22.8311 15.629 22.6555 15.0534ZM4.4675 8.40169C4.09464 8.40169 3.79128 8.06557 3.79128 7.65475C3.79128 7.24394 4.09464 6.90483 4.4675 6.90483C4.84036 6.90483 5.14373 7.23846 5.14373 7.65177C5.14373 8.06507 4.84036 8.40169 4.4675 8.40169ZM4.4675 15.515C4.09464 15.515 3.79128 15.1788 3.79128 14.765C3.79128 14.3512 4.09565 14.0181 4.4675 14.0181C4.83935 14.0181 5.14373 14.3542 5.14373 14.765C5.14373 15.1759 4.84036 15.515 4.4675 15.515V15.515ZM7.80652 15.2904C7.75021 16.0737 7.68527 16.352 7.41894 16.9456C7.3851 17.0199 7.33005 17.0829 7.26045 17.1271C7.19085 17.1713 7.10969 17.1947 7.0268 17.1946C6.96716 17.1947 6.90817 17.1823 6.85382 17.1582C6.75212 17.1125 6.67235 17.03 6.63122 16.9279C6.59009 16.8258 6.59078 16.7121 6.63314 16.6105C6.81678 16.1528 6.90049 15.9437 6.95172 15.2306C6.98673 14.7392 6.7067 14.3308 6.49516 14.0664C6.42903 13.9787 6.40021 13.8692 6.41479 13.761C6.42936 13.6528 6.48619 13.5544 6.57327 13.4866C6.66035 13.4187 6.77088 13.3867 6.88153 13.3974C6.99218 13.408 7.09429 13.4604 7.16631 13.5436L7.17747 13.5575C7.74767 14.2626 7.83391 14.889 7.80652 15.2904ZM7.81412 7.90074C7.78927 8.5441 7.72231 8.97832 7.42402 9.5659C7.38899 9.63851 7.3339 9.70001 7.26503 9.74341C7.19615 9.78681 7.11625 9.81036 7.03441 9.81139C6.97499 9.81147 6.91622 9.79925 6.86193 9.77554C6.80941 9.75276 6.76203 9.71994 6.72257 9.67898C6.68312 9.63803 6.65237 9.58977 6.63213 9.53702C6.61217 9.48587 6.60287 9.43131 6.60479 9.37657C6.60671 9.32182 6.6198 9.26802 6.64329 9.21833C6.84621 8.79258 6.90708 8.57099 6.95883 7.84597C6.99383 7.35548 6.7138 6.94666 6.50226 6.68175C6.43804 6.59407 6.41061 6.48551 6.42567 6.37854C6.44072 6.27156 6.4971 6.17436 6.58313 6.10706C6.66917 6.03975 6.77827 6.0075 6.88787 6.01696C6.99746 6.02642 7.09915 6.07689 7.17189 6.1579C7.42604 6.47211 7.84456 7.11398 7.81412 7.90074ZM9.41616 5.75506C10.6038 5.79746 11.7873 5.91472 12.9596 6.10612C14.6555 6.39792 16.6121 7.02833 16.8288 7.09904C16.9184 7.12862 16.9945 7.18849 17.0434 7.26798C17.0923 7.34748 17.1108 7.44143 17.0957 7.5331C17.0806 7.62476 17.0328 7.70818 16.9609 7.76849C16.889 7.8288 16.7975 7.86208 16.7029 7.8624C16.6602 7.86234 16.6177 7.85545 16.5771 7.84198C16.5563 7.83551 14.5018 7.16626 12.8232 6.87745C11.6931 6.69317 10.5523 6.57974 9.40754 6.53784C9.30179 6.53659 9.20088 6.49415 9.127 6.41986C9.05313 6.34557 9.01234 6.24552 9.01362 6.14172C9.0149 6.03792 9.05814 5.93886 9.13382 5.86635C9.2095 5.79384 9.31143 5.7538 9.41718 5.75506H9.41616ZM17.0814 14.5888C17.0549 14.6667 17.0041 14.7344 16.9361 14.7824C16.8682 14.8304 16.7866 14.8562 16.7029 14.8562C16.6602 14.8563 16.6177 14.8496 16.5771 14.8363C16.5563 14.8293 14.5018 14.1605 12.8232 13.8717C11.6932 13.6872 10.5523 13.5737 9.40754 13.5321C9.30179 13.5309 9.20088 13.4884 9.127 13.4141C9.05313 13.3398 9.01234 13.2398 9.01362 13.136C9.0149 13.0322 9.05814 12.9331 9.13382 12.8606C9.2095 12.7881 9.31143 12.7481 9.41718 12.7493C10.6047 12.7906 11.7883 12.907 12.9606 13.0979C14.6565 13.3892 16.6132 14.0201 16.8298 14.0908C16.9302 14.124 17.013 14.1949 17.0602 14.2879C17.1074 14.381 17.115 14.4887 17.0814 14.5873V14.5888Z"
      fill="#333333"
    />
  </svg>`,arena:f`
    <svg
      class="social-profile-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152.9 90.5"
      tabindex="0"
      focusable="true"
    >
      <path
        d="M150.2,63.1l-20.8-16.4c-1.3-1-1.3-2.6,0-3.6l20.8-16.4c1.3-1,1.8-2.7,1.2-3.8c-0.6-1.1-2.4-1.4-3.9-0.8L122.7,32
	c-1.5,0.6-2.9-0.2-3.2-1.8l-3.7-26.5c-0.2-1.6-1.4-2.9-2.7-2.9c-1.2,0-2.5,1.3-2.7,2.9l-3.7,26.5c-0.2,1.6-1.6,2.4-3.2,1.8
	l-24.4-9.7c-1.5-0.6-4-0.6-5.5,0L49.3,32c-1.5,0.6-2.9-0.2-3.2-1.8L42.5,3.7c-0.2-1.6-1.4-2.9-2.7-2.9c-1.3,0-2.5,1.3-2.7,2.9
	l-3.7,26.5c-0.2,1.6-1.6,2.4-3.2,1.8L5.4,22.1c-1.5-0.6-3.3-0.2-3.9,0.8c-0.6,1.1-0.1,2.8,1.2,3.8l20.9,16.4c1.3,1,1.3,2.6,0,3.6
	L2.7,63.1c-1.3,1-1.8,2.8-1.2,4c0.6,1.2,2.4,1.7,3.9,1.1L30,58.3c1.5-0.6,2.9,0.2,3.1,1.8l3.5,26.7c0.2,1.6,1.6,2.9,3.1,2.9
	c1.5,0,2.9-1.3,3.1-2.9l3.5-26.7c0.2-1.6,1.6-2.4,3.1-1.8L73.7,68c1.5,0.6,4,0.6,5.5,0l24.2-9.7c1.5-0.6,2.9,0.2,3.1,1.8l3.6,26.7
	c0.2,1.6,1.6,2.9,3.1,2.9c1.5,0,2.9-1.3,3.1-2.9l3.6-26.7c0.2-1.6,1.6-2.4,3.1-1.8l24.6,9.9c1.5,0.6,3.2,0.1,3.9-1.1
	C152,65.9,151.5,64.1,150.2,63.1L150.2,63.1z M97.2,46.9L78.8,61.1c-1.3,1-3.4,1-4.7,0L55.8,46.9c-1.3-1-1.3-2.6,0-3.6l18.4-14.5
	c1.3-1,3.4-1,4.6,0l18.4,14.5C98.5,44.3,98.5,45.9,97.2,46.9L97.2,46.9z"
        fill="black"
      />
    </svg>
  `,bandcamp:f` <svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    tabindex="0"
    focusable="true"
  >
    <path
      fill="currentColor"
      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"
    ></path>
  </svg>`,cohost:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 416 360"
    tabindex="0"
    focusable="true"
  >
    <path
      fill-rule="evenodd"
      d="M335.13 249.687c-26.067 15.965 -56.123 28.509 -90.166 37.631 -37.809 10.131 -73.445 14.192 -106.908 12.183 -33.463 -2.008 -61.973 -10.738 -85.531 -26.188 -23.557 -15.45 -39.44 -38.491 -47.648 -69.123 -8.255 -30.807 -6.032 -58.746 6.667 -83.818 12.7 -25.071 33.061 -46.755 61.083 -65.051 28.023 -18.296 60.938 -32.51 98.747 -42.64C209.008 2.597 244.501 -1.473 277.854 0.471 300.262 1.778 320.475 6.108 338.49 13.461c8.799 3.591 17.073 7.903 24.824 12.936 23.621 15.339 39.536 38.325 47.744 68.957 8.208 30.632 5.93 58.539 -6.834 83.722 -1.783 3.518 -3.714 6.97 -5.793 10.358 -1.468 -6.614 -4.418 -12.382 -8.849 -17.302 -2.175 -2.415 -4.593 -4.634 -7.255 -6.655 -5.451 -4.138 -11.924 -7.448 -19.418 -9.932 -11.153 -3.697 -23.582 -5.545 -37.285 -5.545 -13.766 0 -26.242 1.832 -37.428 5.497 -11.185 3.665 -20.076 9.178 -26.673 16.539 -6.597 7.362 -9.895 16.651 -9.895 27.868 0 11.154 3.298 20.427 9.895 27.821 6.597 7.393 15.488 12.954 26.673 16.682 11.186 3.729 23.662 5.593 37.428 5.593 3.24 0 6.408 -0.104 9.506 -0.313Zm-119.254 -19.859c-2.613 2.804 -7.218 5.784 -13.814 8.939 -6.597 3.155 -14.548 5.816 -23.853 7.982 -9.305 2.167 -19.311 3.251 -30.019 3.251 -9.369 0 -18.547 -0.908 -27.533 -2.725 -8.987 -1.816 -17.113 -4.7 -24.379 -8.652 -7.266 -3.951 -13.05 -9.114 -17.352 -15.487 -4.302 -6.374 -6.453 -14.118 -6.453 -23.232 0 -9.241 2.151 -17.049 6.453 -23.422 4.302 -6.374 10.086 -11.504 17.352 -15.392 7.266 -3.888 15.392 -6.708 24.379 -8.461 8.986 -1.753 18.164 -2.629 27.533 -2.629 10.771 0 20.714 0.956 29.828 2.868s16.937 4.414 23.47 7.505c6.533 3.091 11.265 6.389 14.197 9.895l-24.474 16.061c-3.569 -3.888 -8.987 -6.995 -16.252 -9.321 -7.266 -2.327 -16.093 -3.49 -26.482 -3.49 -5.099 0 -10.246 0.399 -15.44 1.195 -5.194 0.797 -9.958 2.151 -14.292 4.063s-7.824 4.589 -10.469 8.031c-2.645 3.442 -3.967 7.807 -3.967 13.097 0 5.227 1.322 9.545 3.967 12.954 2.645 3.41 6.135 6.119 10.469 8.127 4.334 2.007 9.098 3.425 14.292 4.254 5.194 0.829 10.341 1.243 15.44 1.243 10.197 0 19.041 -1.275 26.529 -3.824 7.489 -2.55 12.763 -5.482 15.823 -8.796l25.047 15.966Zm109.748 -3.729c13.321 0 23.646 -2.39 30.976 -7.17 7.329 -4.78 10.994 -11.121 10.994 -19.025 0 -8.094 -3.681 -14.451 -11.042 -19.072 -7.362 -4.621 -17.671 -6.931 -30.928 -6.931 -13.32 0 -23.693 2.31 -31.118 6.931 -7.425 4.621 -11.138 10.978 -11.138 19.072 0 8.031 3.713 14.404 11.138 19.121 7.425 4.716 17.798 7.074 31.118 7.074Z"
      clip-rule="evenodd"
    />
  </svg>`,devTo:f`<svg
    class="social-profile-icon"
    viewBox="0 32 447.99999999999994 448"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
    />
  </svg>`,facebook:f`<svg
    class="social-profile-icon"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M10.001 0.00195312C4.47895 0.00195312 0.00195312 4.47895 0.00195312 10.001C0.00195312 14.991 3.65795 19.127 8.43895 19.88V12.892H5.89895V10.001H8.43895V7.79795C8.43895 5.28995 9.93195 3.90695 12.215 3.90695C13.309 3.90695 14.455 4.10195 14.455 4.10195V6.56095H13.191C11.951 6.56095 11.563 7.33295 11.563 8.12395V9.99895H14.334L13.891 12.89H11.563V19.878C16.344 19.129 20 14.992 20 10.001C20 4.47895 15.523 0.00195312 10.001 0.00195312Z"
      fill="#2E3A59"
    />
  </svg>`,github:f` <svg
    class="social-profile-icon"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.026 0C4.517 0 0.052002 4.465 0.052002 9.974C0.052002 14.38 2.909 18.119 6.873 19.439C7.372 19.529 7.552 19.222 7.552 18.958C7.552 18.721 7.544 18.093 7.541 17.262C4.766 17.864 4.18 15.924 4.18 15.924C3.728 14.772 3.073 14.465 3.073 14.465C2.168 13.846 3.142 13.86 3.142 13.86C4.144 13.93 4.669 14.888 4.669 14.888C5.559 16.412 7.005 15.972 7.571 15.717C7.662 15.072 7.922 14.632 8.206 14.383C5.992 14.132 3.664 13.276 3.664 9.453C3.664 8.366 4.053 7.474 4.688 6.778C4.587 6.525 4.242 5.51 4.787 4.138C4.787 4.138 5.624 3.869 7.529 5.159C8.327 4.938 9.178 4.827 10.025 4.823C10.874 4.827 11.726 4.938 12.521 5.159C14.427 3.868 15.263 4.138 15.263 4.138C15.808 5.51 15.466 6.525 15.362 6.778C16.002 7.474 16.386 8.365 16.386 9.453C16.386 13.286 14.056 14.128 11.834 14.375C12.189 14.683 12.509 15.291 12.509 16.221C12.509 17.555 12.497 18.631 12.497 18.958C12.497 19.225 12.675 19.535 13.184 19.437C17.146 18.115 20 14.379 20 9.974C20 4.465 15.535 0 10.026 0Z"
      fill="#2E3A59"
    />
  </svg>`,gitlab:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 0 0 .522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 0 0 .522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 0 0-.957-.684a.987.987 0 0 0-.949.69L15.8 9.001H8.203l-2.41-7.408a.987.987 0 0 0-.942-.69h-.006zm-.006 1.42l2.173 6.678H2.675zm14.326 0l2.168 6.678h-4.341zm-10.593 7.81h6.862c-1.142 3.52-2.288 7.04-3.434 10.559L8.572 10.135zm-5.514.005h4.321l3.086 9.5zm13.567 0h4.325c-2.467 3.17-4.95 6.328-7.411 9.502c1.028-3.167 2.059-6.334 3.086-9.502zM2.1 10.762l6.977 8.947l-7.817-5.682a.305.305 0 0 1-.112-.341zm19.798 0l.952 2.922a.305.305 0 0 1-.11.341v.002l-7.82 5.68l.026-.035z"
      fill="#2E3A59"
    />
  </svg>`,hasnode:f`<svg
    class="social-profile-icon"
    viewBox="0 0 337 337"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
      fill="#2E3A59"
    />
  </svg>`,instagram:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
      fill="black"
    />
  </svg>`,keybase:f`<svg
    class="social-profile-icon"
    viewBox="0 0 448 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M286.17 419a18 18 0 1 0 18 18 18 18 0 0 0-18-18zm111.92-147.6c-9.5-14.62-39.37-52.45-87.26-73.71q-9.1-4.06-18.38-7.27a78.43 78.43 0 0 0-47.88-104.13c-12.41-4.1-23.33-6-32.41-5.77-.6-2-1.89-11 9.4-35L198.66 32l-5.48 7.56c-8.69 12.06-16.92 23.55-24.34 34.89a51 51 0 0 0-8.29-1.25c-41.53-2.45-39-2.33-41.06-2.33-50.61 0-50.75 52.12-50.75 45.88l-2.36 36.68c-1.61 27 19.75 50.21 47.63 51.85l8.93.54a214 214 0 0 0-46.29 35.54C14 304.66 14 374 14 429.77v33.64l23.32-29.8a148.6 148.6 0 0 0 14.56 37.56c5.78 10.13 14.87 9.45 19.64 7.33 4.21-1.87 10-6.92 3.75-20.11a178.29 178.29 0 0 1-15.76-53.13l46.82-59.83-24.66 74.11c58.23-42.4 157.38-61.76 236.25-38.59 34.2 10.05 67.45.69 84.74-23.84.72-1 1.2-2.16 1.85-3.22a156.09 156.09 0 0 1 2.8 28.43c0 23.3-3.69 52.93-14.88 81.64-2.52 6.46 1.76 14.5 8.6 15.74 7.42 1.57 15.33-3.1 18.37-11.15C429 443 434 414 434 382.32c0-38.58-13-77.46-35.91-110.92zM142.37 128.58l-15.7-.93-1.39 21.79 13.13.78a93 93 0 0 0 .32 19.57l-22.38-1.34a12.28 12.28 0 0 1-11.76-12.79L107 119c1-12.17 13.87-11.27 13.26-11.32l29.11 1.73a144.35 144.35 0 0 0-7 19.17zm148.42 172.18a10.51 10.51 0 0 1-14.35-1.39l-9.68-11.49-34.42 27a8.09 8.09 0 0 1-11.13-1.08l-15.78-18.64a7.38 7.38 0 0 1 1.34-10.34l34.57-27.18-14.14-16.74-17.09 13.45a7.75 7.75 0 0 1-10.59-1s-3.72-4.42-3.8-4.53a7.38 7.38 0 0 1 1.37-10.34L214 225.19s-18.51-22-18.6-22.14a9.56 9.56 0 0 1 1.74-13.42 10.38 10.38 0 0 1 14.3 1.37l81.09 96.32a9.58 9.58 0 0 1-1.74 13.44zM187.44 419a18 18 0 1 0 18 18 18 18 0 0 0-18-18z"
      fill="black"
    />
  </svg>`,kofi:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
      fill="black"
    />
  </svg>`,letterboxd:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M11.052 22.339v-12.74h-2.323v-3.198h8.438v3.198h-2.328v12.766h5.234v-3.49h3.781v6.724h-15.125v-3.26zM0 16c0 8.839 7.161 16 16 16s16-7.161 16-16c0-8.839-7.161-16-16-16s-16 7.161-16 16z"
      fill="black"
    />
  </svg>`,linkedin:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
      fill="black"
    />
  </svg>`,mastodon:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 216.4144 232.00976"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M107.86523 0C78.203984.2425 49.672422 3.4535937 33.044922 11.089844c0 0-32.97656262 14.752031-32.97656262 65.082031 0 11.525-.224375 25.306175.140625 39.919925 1.19750002 49.22 9.02375002 97.72843 54.53124962 109.77343 20.9825 5.55375 38.99711 6.71547 53.505856 5.91797 26.31125-1.45875 41.08203-9.38867 41.08203-9.38867l-.86914-19.08984s-18.80171 5.92758-39.91796 5.20508c-20.921254-.7175-43.006879-2.25516-46.390629-27.94141-.3125-2.25625-.46875-4.66938-.46875-7.20313 0 0 20.536953 5.0204 46.564449 6.21289 15.915.73001 30.8393-.93343 45.99805-2.74218 29.07-3.47125 54.38125-21.3818 57.5625-37.74805 5.0125-25.78125 4.59961-62.916015 4.59961-62.916015 0-50.33-32.97461-65.082031-32.97461-65.082031C166.80539 3.4535938 138.255.2425 108.59375 0h-.72852zM74.296875 39.326172c12.355 0 21.710234 4.749297 27.896485 14.248047l6.01367 10.080078 6.01563-10.080078c6.185-9.49875 15.54023-14.248047 27.89648-14.248047 10.6775 0 19.28156 3.753672 25.85156 11.076172 6.36875 7.3225 9.53907 17.218828 9.53907 29.673828v60.941408h-24.14454V81.869141c0-12.46875-5.24453-18.798829-15.73828-18.798829-11.6025 0-17.41797 7.508516-17.41797 22.353516v32.375002H96.207031V85.423828c0-14.845-5.815468-22.353515-17.417969-22.353516-10.49375 0-15.740234 6.330079-15.740234 18.798829v59.148439H38.904297V80.076172c0-12.455 3.171016-22.351328 9.541015-29.673828 6.568751-7.3225 15.172813-11.076172 25.851563-11.076172z"
      fill="black"
    />
  </svg>`,medium:f`<svg
    class="social-profile-icon"
    viewBox="0 0 1043.63 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
    ></path>
  </svg>`,patreon:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M15 17C13.0109 17 11.1032 16.2098 9.6967 14.8033C8.29018 13.3968 7.5 11.4891 7.5 9.5C7.5 7.51088 8.29018 5.60322 9.6967 4.1967C11.1032 2.79018 13.0109 2 15 2C16.9891 2 18.8968 2.79018 20.3033 4.1967C21.7098 5.60322 22.5 7.51088 22.5 9.5C22.5 11.4891 21.7098 13.3968 20.3033 14.8033C18.8968 16.2098 16.9891 17 15 17ZM2 2H6V22H2V2Z"
      fill="black"
    />
  </svg>`,pinboard:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M17.802 19.448l-6.010 6.151 0.958-5.417-8.177-10.089-4.573 0.245 10.104-10.339v3.938l9.62 8.859 6.021-1.474-6.255 6.646 12.51 14.031z"
      fill="black"
    />
  </svg>`,pinterest:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M13.37 2.09383C10.9773 1.76469 8.54625 2.31238 6.52583 3.63579C4.50541 4.9592 3.03205 6.96893 2.3778 9.2939C1.72356 11.6189 1.93261 14.102 2.96637 16.2849C4.00012 18.4677 5.78876 20.2029 8.002 21.1698C7.94215 20.4016 7.99709 19.6288 8.165 18.8768C8.35 18.0378 9.461 13.4138 9.461 13.4138C9.23977 12.9179 9.12921 12.3798 9.137 11.8368C9.137 10.3518 9.994 9.24383 11.06 9.24383C11.2515 9.24105 11.4414 9.27953 11.6167 9.35666C11.792 9.4338 11.9486 9.54778 12.076 9.69086C12.2033 9.83393 12.2983 10.0027 12.3546 10.1858C12.4108 10.3689 12.427 10.5619 12.402 10.7518C12.402 11.6518 11.824 13.0138 11.522 14.2918C11.4623 14.5262 11.4585 14.7713 11.5109 15.0075C11.5634 15.2436 11.6705 15.4641 11.8238 15.6512C11.977 15.8383 12.1721 15.9868 12.3932 16.0847C12.6144 16.1826 12.8555 16.2272 13.097 16.2148C14.995 16.2148 16.267 13.7838 16.267 10.9138C16.267 8.71383 14.81 7.06583 12.124 7.06583C11.4814 7.04086 10.8404 7.14676 10.2399 7.37709C9.63949 7.60742 9.09212 7.95738 8.63105 8.40572C8.16999 8.85406 7.80486 9.39144 7.55783 9.98521C7.31079 10.579 7.18701 11.2168 7.194 11.8598C7.16537 12.5732 7.39551 13.2728 7.842 13.8298C7.92544 13.8921 7.98636 13.9798 8.01558 14.0798C8.0448 14.1797 8.04074 14.2864 8.004 14.3838C7.958 14.5678 7.842 15.0068 7.796 15.1678C7.78644 15.2224 7.76418 15.274 7.73103 15.3184C7.69787 15.3629 7.65475 15.3989 7.60513 15.4236C7.55552 15.4483 7.50079 15.461 7.44536 15.4607C7.38993 15.4604 7.33534 15.4471 7.286 15.4218C5.902 14.8678 5.25 13.3448 5.25 11.6058C5.25 8.75883 7.634 5.35083 12.404 5.35083C16.2 5.35083 18.724 8.12783 18.724 11.0978C18.724 15.0068 16.547 17.9458 13.33 17.9458C12.8492 17.9612 12.3723 17.8551 11.9433 17.6373C11.5144 17.4195 11.1473 17.0971 10.876 16.6998C10.876 16.6998 10.298 19.0158 10.184 19.4538C9.9513 20.2105 9.60791 20.9286 9.165 21.5848C10.088 21.8648 11.047 22.0048 12.011 22.0008C13.3246 22.0019 14.6255 21.7438 15.8392 21.2414C17.0529 20.739 18.1556 20.0021 19.0841 19.0729C20.0126 18.1438 20.7487 17.0406 21.2503 15.8265C21.7518 14.6125 22.009 13.3114 22.007 11.9978C22.0058 9.58283 21.1308 7.24983 19.5436 5.42961C17.9565 3.6094 15.7643 2.4249 13.372 2.09483L13.37 2.09383Z"
      fill="black"
    />
  </svg>`,podcast:f` <svg
    class="social-profile-icon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105    C512,47.103,464.897,0,407,0z M308.558,340.537l-9.273,74.185C297.408,429.734,284.646,441,269.517,441h-27.033    c-15.13,0-27.892-11.266-29.768-26.279l-9.273-74.185C199.49,308.923,224.14,281,256,281c-24.813,0-45-20.187-45-45    s20.187-45,45-45s45,20.187,45,45s-20.187,45-45,45C287.86,281,312.51,308.923,308.558,340.537z M256,161    c-46.869,0-85,38.131-85,85c0,16.893,4.974,32.637,13.505,45.883c-6.132,10.42-9.908,22.057-11.076,34.072    C153.368,305.245,141,277.042,141,246c0-63.411,51.589-115,115-115s115,51.589,115,115c0,31.042-12.368,59.245-32.428,79.956    c-1.168-12.016-4.945-23.652-11.076-34.072C336.026,278.637,341,262.893,341,246C341,199.131,302.869,161,256,161z     M330.838,404.168l4.617-36.938C374.901,341.289,401,296.639,401,246c0-79.953-65.047-145-145-145s-145,65.047-145,145    c0,50.639,26.099,95.289,65.545,121.23l4.617,36.938C122.004,376.063,81,315.734,81,246c0-96.495,78.505-175,175-175    s175,78.505,175,175C431,315.734,389.996,376.063,330.838,404.168z"
    />
  </svg>`,spotify:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M12.01 2.01904C6.51504 2.01904 2.01904 6.51504 2.01904 12.01C2.01904 17.504 6.51504 22 12.01 22C17.504 22 22 17.504 22 12.01C22 6.51504 17.554 2.01904 12.01 2.01904ZM16.605 16.455C16.406 16.754 16.056 16.855 15.755 16.656C13.406 15.206 10.459 14.906 6.96204 15.705C6.61404 15.807 6.31404 15.557 6.21404 15.256C6.11304 14.906 6.36304 14.608 6.66404 14.507C10.459 13.657 13.757 14.008 16.354 15.607C16.704 15.756 16.754 16.155 16.605 16.455ZM17.805 13.708C17.554 14.057 17.105 14.207 16.754 13.957C14.057 12.311 9.96204 11.809 6.81504 12.809C6.41704 12.91 5.96504 12.709 5.86604 12.311C5.76504 11.909 5.96604 11.459 6.36504 11.359C10.011 10.261 14.508 10.811 17.604 12.71C17.904 12.859 18.054 13.358 17.805 13.708ZM17.904 10.909C14.707 9.01204 9.36204 8.81204 6.31404 9.76304C5.81504 9.91104 5.31404 9.61204 5.16604 9.16304C5.01604 8.66104 5.31404 8.16204 5.76504 8.01204C9.31204 6.96304 15.157 7.16204 18.854 9.36304C19.303 9.61204 19.453 10.212 19.203 10.661C18.953 11.011 18.354 11.159 17.904 10.909Z"
      fill="#2E3A59"
    />
  </svg>`,onlyfans:f`<svg
    class="social-profile-icon"
    viewBox="3.743 4.3627 375 250"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1, 0, 0, 1, 3.743036985397339, -9.04318618774414)">
      <path
        class="st0"
        d="M125.0004578,13.4060478C56.0003128,13.405695,0.0003531,69.4050827,0,138.4052277 s55.9990349,125.0001068,124.999176,125.0004425c69.0001526,0.0003662,125.0001068-55.9990234,125.0004578-124.9991608 S194.0005951,13.4064016,125.0004578,13.4060478z M124.9996262,175.9058075 c-20.7496338-0.0001068-37.4998627-16.7512665-37.4997559-37.5001373 c0.0001068-20.7503891,16.7505035-37.499855,37.5001373-37.4997482s37.499855,16.7497406,37.4997635,37.5001297 C162.4996643,159.1549225,145.7492676,175.9059143,124.9996262,175.9058075z"
      />
      <path
        class="st1"
        d="M265.4999695,107.1560211c31.7554626,9.136734,69.2501221,0.0003357,69.2501221,0.0003357 c-10.8758545,47.5007324-45.3752136,77.2492065-95.1255035,80.8744659 C220.4998627,232.4065094,176.3745728,263.4061584,125,263.4059143l37.5003967-119.1857758 C201.0488129,21.7035465,220.806015,13.4054594,312.2287292,13.4059067L375,13.4062138 C364.4994812,59.6557198,328.3123779,94.9902802,265.4999695,107.1560211z"
      />
    </g>
  </svg>`,soundcloud:f`<svg
    class="social-profile-icon"
    viewBox="0 0 143 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    tabindex="0"
    focusable="true"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        transform="translate(-166.000000, -1125.000000)"
        fill="#333333"
        fill-rule="nonzero"
      >
        <path
          d="M308.984235,1169.99251 C308.382505,1180.70295 299.444837,1189.03525 288.718543,1188.88554 L240.008437,1188.88554 C237.777524,1188.86472 235.977065,1187.05577 235.966737,1184.82478 L235.966737,1132.37801 C235.894282,1130.53582 236.962478,1128.83883 238.654849,1128.10753 C238.654849,1128.10753 243.135035,1124.99996 252.572022,1124.99996 C258.337036,1124.99309 263.996267,1126.54789 268.948531,1129.49925 C276.76341,1134.09703 282.29495,1141.75821 284.200228,1150.62285 C285.880958,1150.14737 287.620063,1149.90993 289.36674,1149.91746 C294.659738,1149.88414 299.738952,1152.0036 303.438351,1155.78928 C307.13775,1159.57496 309.139562,1164.70168 308.984235,1169.99251 Z M229.885123,1135.69525 C231.353099,1153.48254 232.420718,1169.70654 229.885123,1187.43663 C229.796699,1188.23857 229.119091,1188.84557 228.312292,1188.84557 C227.505494,1188.84557 226.827885,1188.23857 226.739461,1187.43663 C224.375448,1169.85905 225.404938,1153.33003 226.739461,1135.69525 C226.672943,1135.09199 226.957336,1134.50383 227.471487,1134.18133 C227.985639,1133.85884 228.638946,1133.85884 229.153097,1134.18133 C229.667248,1134.50383 229.951641,1135.09199 229.885123,1135.69525 Z M220.028715,1187.4557 C219.904865,1188.26549 219.208361,1188.86356 218.389157,1188.86356 C217.569953,1188.86356 216.87345,1188.26549 216.7496,1187.4557 C214.986145,1172.28686 214.986145,1156.96477 216.7496,1141.79593 C216.840309,1140.9535 217.551388,1140.31488 218.398689,1140.31488 C219.245991,1140.31488 219.95707,1140.9535 220.047779,1141.79593 C222.005153,1156.95333 221.998746,1172.29994 220.028715,1187.4557 Z M210.153241,1140.2517 C211.754669,1156.55195 212.479125,1171.15545 210.134176,1187.41757 C210.134176,1188.29148 209.425728,1188.99993 208.551813,1188.99993 C207.677898,1188.99993 206.969449,1188.29148 206.969449,1187.41757 C204.70076,1171.36516 205.463344,1156.34224 206.969449,1140.2517 C207.05845,1139.43964 207.744425,1138.82474 208.561345,1138.82474 C209.378266,1138.82474 210.06424,1139.43964 210.153241,1140.2517 Z M200.258703,1187.47476 C200.169129,1188.29694 199.474788,1188.91975 198.647742,1188.91975 C197.820697,1188.91975 197.126356,1188.29694 197.036782,1187.47476 C195.216051,1173.32359 195.216051,1158.99744 197.036782,1144.84627 C197.036782,1143.94077 197.770837,1143.20671 198.676339,1143.20671 C199.581842,1143.20671 200.315897,1143.94077 200.315897,1144.84627 C202.251054,1158.99121 202.231809,1173.33507 200.258703,1187.47476 Z M190.383229,1155.50339 C192.880695,1166.56087 191.755882,1176.32196 190.287906,1187.58915 C190.168936,1188.33924 189.522207,1188.89148 188.762737,1188.89148 C188.003266,1188.89148 187.356537,1188.33924 187.237567,1187.58915 C185.903044,1176.47448 184.797296,1166.48462 187.142244,1155.50339 C187.142244,1154.60842 187.867763,1153.8829 188.762737,1153.8829 C189.65771,1153.8829 190.383229,1154.60842 190.383229,1155.50339 Z M180.526821,1153.82571 C182.814575,1165.15009 182.071055,1174.7396 180.469627,1186.10211 C180.27898,1187.7798 177.400223,1187.79886 177.247706,1186.10211 C175.798795,1174.91118 175.112468,1165.0357 177.190512,1153.82571 C177.281785,1152.97315 178.001234,1152.32661 178.858666,1152.32661 C179.716099,1152.32661 180.435548,1152.97315 180.526821,1153.82571 Z M170.575089,1159.31632 C172.977231,1166.82778 172.157452,1172.92846 170.479765,1180.63056 C170.391921,1181.42239 169.722678,1182.02149 168.925999,1182.02149 C168.12932,1182.02149 167.460077,1181.42239 167.372232,1180.63056 C165.923321,1173.08097 165.332318,1166.84684 167.23878,1159.31632 C167.330053,1158.46376 168.049502,1157.81722 168.906934,1157.81722 C169.764367,1157.81722 170.483816,1158.46376 170.575089,1159.31632 Z"
        ></path>
      </g>
    </g>
  </svg>`,stackOverflow:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <path
        d="M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358h12.582z"
        fill="currentColor"
      />
      <path
        d="M7.768 14.356l8.79 1.824l.372-1.755L8.14 12.6l-.372 1.756zm1.162-4.157l8.14 3.764l.744-1.617l-8.14-3.787l-.744 1.64zm2.256-3.973l6.907 5.705l1.14-1.363l-6.907-5.704l-1.14 1.362zM15.651 2L14.21 3.062l5.35 7.16L21 9.159L15.651 2zm-8.07 16.42h8.977v-1.778H7.581v1.778z"
        fill="currentColor"
      />
    </g>
  </svg>`,substack:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path d="M3 1H22.269V3.57932H3V1Z" fill="black" />
    <path d="M3 5.85538H22.269V8.58642H3V5.85538Z" fill="black" />
    <path
      d="M3 10.8623H22.269V23.0002L12.6345 17.6805L3 23.0002V10.8623Z"
      fill="black"
    />
  </svg>`,tiktok:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
    />
  </svg>`,twitch:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
    />
  </svg>`,twitter:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75097 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.3449 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.264 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
      fill="black"
    />
  </svg>`,tumblr:f`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 260"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
C213.484,200.108,212.476,198.418,210.857,197.545z"
    />
  </svg>`,youtube:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
      fill="black"
    />
  </svg>`,email:f`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
  >
    <path
      d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
      fill="black"
    />
  </svg>`};function t2(e){if(p.social[e.name])return f`
      <a
        aria-label="${p.name} on ${e.name}"
        href="${p.social[e.name]}"
        tabindex="-1"
        rel=${e.rel}
        >${l1[e.name]}</a
      >
    `}function n2(){return f`
      <a
        aria-label="${p.name} on email"
        href="mailto:${p.social.email}"
        tabindex="-1"
        >${l1.email}</a
      >
    `}const s2=[{name:"glitch",altText:"Glitch"},{name:"arena",altText:"Arena"},{name:"bandcamp",altText:"Bandcamp"},{name:"cohost",altText:"Cohost"},{name:"devTo",altText:"DevTo"},{name:"facebook",altText:"Facebook"},{name:"github",altText:"GitHub"},{name:"gitlab",altText:"GitLab"},{name:"hasnode",altText:"Hasnode"},{name:"instagram",altText:"Instagram"},{name:"keybase",altText:"Keybase"},{name:"kofi",altText:"Ko-fi"},{name:"letterboxd",altText:"Letterboxd"},{name:"linkedin",altText:"LinkedIn"},{name:"mastodon",altText:"Mastodon",rel:"me"},{name:"medium",altText:"Medium"},{name:"patreon",altText:"Patreon"},{name:"pinboard",altText:"Pinboard"},{name:"pinterest",altText:"Pinterest"},{name:"podcast",altText:"Podcast"},{name:"onlyfans",altText:"OnlyFans"},{name:"spotify",altText:"Spotify"},{name:"soundcloud",altText:"SoundCloud"},{name:"stackOverflow",altText:"Stack Overflow"},{name:"substack",altText:"Substack"},{name:"tiktok",altText:"TikTok"},{name:"twitch",altText:"Twitch"},{name:"twitter",altText:"Twitter"},{name:"tumblr",altText:"Tumblr"},{name:"youtube",altText:"YouTube"}],a2=f.node`
    <div class="social-icons">
      ${s2.map(e=>f.node`${t2(e)}`)}
      ${n2()}
    </div>
  `,r2=document.getElementsByTagName("head")[0];r2.appendChild(X1);const l2=document.getElementById("content"),i2=[Y1,Q1,a2,e2];i2.forEach(e=>l2.appendChild(e));
