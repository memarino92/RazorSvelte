var privacy=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let m;function b(t){m=t}const y=[],v=[],$=[],_=[],E=Promise.resolve();let x=!1;function w(t){$.push(t)}const A=new Set;let C=0;function S(){const t=m;do{for(;C<y.length;){const t=y[C];C++,b(t),T(t.$$)}for(b(null),y.length=0,C=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];A.has(e)||(A.add(e),e())}$.length=0}while(y.length);for(;_.length;)_.pop()();x=!1,A.clear(),b(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const k=new Set;function L(t,e){t&&t.i&&(k.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),undefined.c.push((()=>{k.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function j(t){t&&t.c()}function N(t,n,i,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,i),s||w((()=>{const n=l.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(w)}function D(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(y.push(t),x||(x=!0,E.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,o,i,s,a,l,c,d=[-1]){const f=m;b(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};c&&c(h.root);let p=!1;if(h.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&q(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();o.intro&&L(e.$$.fragment),N(e,o.target,o.anchor,o.customElement),S()}b(f)}class M{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var z={exports:{}};z.exports=function(){const t=new Map,e={set(e,n,r){t.has(e)||t.set(e,new Map);const o=t.get(e);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(e,n)=>t.has(e)&&t.get(e).get(n)||null,remove(e,n){if(!t.has(e))return;const r=t.get(e);r.delete(n),0===r.size&&t.delete(e)}};return e}();var I={exports:{}};
/*!
      * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */!function(t,e){t.exports=function(){const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(t,e){return e&&`${e}::${i++}`||t.uidEvent||i++}function u(t){const e=c(t);return t.uidEvent=e,o[e]=o[e]||{},o[e]}function d(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&v.off(t,r.type,e),e.apply(t,[r])}}function f(t,e,n){return function r(o){const i=t.querySelectorAll(e);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let a=i.length;a--;)if(i[a]===s)return o.delegateTarget=s,r.oneOff&&v.off(t,o.type,e,n),n.apply(s,[o]);return null}}function h(t,e,n=null){const r=Object.keys(t);for(let o=0,i=r.length;o<i;o++){const i=t[r[o]];if(i.originalHandler===e&&i.delegationSelector===n)return i}return null}function p(t,e,n){const r="string"==typeof e,o=r?n:e;let i=y(t);return l.has(i)||(i=t),[r,o,i]}function g(t,n,r,o,i){if("string"!=typeof n||!t)return;if(r||(r=o,o=null),a.test(n)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o?o=t(o):r=t(r)}const[s,l,g]=p(n,r,o),m=u(t),b=m[g]||(m[g]={}),y=h(b,l,s?r:null);if(y)return void(y.oneOff=y.oneOff&&i);const v=c(l,n.replace(e,"")),$=s?f(t,r,o):d(t,r);$.delegationSelector=s?r:null,$.originalHandler=l,$.oneOff=i,$.uidEvent=v,b[v]=$,t.addEventListener(g,$,s)}function m(t,e,n,r,o){const i=h(e[n],r,o);i&&(t.removeEventListener(n,i,Boolean(o)),delete e[n][i.uidEvent])}function b(t,e,n,r){const o=e[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];m(t,e,n,r.originalHandler,r.delegationSelector)}}))}function y(t){return t=t.replace(n,""),s[t]||t}const v={on(t,e,n,r){g(t,e,n,r,!1)},one(t,e,n,r){g(t,e,n,r,!0)},off(t,e,n,o){if("string"!=typeof e||!t)return;const[i,s,a]=p(e,n,o),l=a!==e,c=u(t),d=e.startsWith(".");if(void 0!==s){if(!c||!c[a])return;return void m(t,c,a,s,i?n:null)}d&&Object.keys(c).forEach((n=>{b(t,c,n,e.slice(1))}));const f=c[a]||{};Object.keys(f).forEach((n=>{const o=n.replace(r,"");if(!l||e.includes(o)){const e=f[n];m(t,c,a,e.originalHandler,e.delegationSelector)}}))},trigger(e,n,r){if("string"!=typeof n||!e)return null;const o=t(),i=y(n),s=n!==i,a=l.has(i);let c,u=!0,d=!0,f=!1,h=null;return s&&o&&(c=o.Event(n,r),o(e).trigger(c),u=!c.isPropagationStopped(),d=!c.isImmediatePropagationStopped(),f=c.isDefaultPrevented()),a?(h=document.createEvent("HTMLEvents"),h.initEvent(i,u,!0)):h=new CustomEvent(n,{bubbles:u,cancelable:!0}),void 0!==r&&Object.keys(r).forEach((t=>{Object.defineProperty(h,t,{get:()=>r[t]})})),f&&h.preventDefault(),d&&e.dispatchEvent(h),h.defaultPrevented&&void 0!==c&&c.preventDefault(),h}};return v}()}(I);var P={exports:{}};
/*!
      * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */!function(t,e){t.exports=function(){function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const n={setDataAttribute(t,n,r){t.setAttribute(`data-bs-${e(n)}`,r)},removeDataAttribute(t,n){t.removeAttribute(`data-bs-${e(n)}`)},getDataAttributes(e){if(!e)return{};const n={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=t(e.dataset[r])})),n},getDataAttribute:(n,r)=>t(n.getAttribute(`data-bs-${e(r)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})};return n}()}(P);var Y={exports:{}};
/*!
      * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */!function(t,e){t.exports=function(){const t=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),e=e=>!(!t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),r=3,o={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let o=t.parentNode;for(;o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==r;)o.matches(e)&&n.push(o),o=o.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(r,t).filter((t=>!n(t)&&e(t)))}};return o}()}(Y);var H={exports:{}};
/*!
      * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */!function(t,e){t.exports=function(t,e){const n=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},r=n(t),o=n(e),i=1e3,s="transitionend",a=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),o=Number.parseFloat(n);return r||o?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*i):0},l=t=>{t.dispatchEvent(new Event(s))},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),u=t=>c(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,d=t=>{"function"==typeof t&&t()},f=(t,e,n=!0)=>{if(!n)return void d(t);const r=5,o=a(e)+r;let i=!1;const c=({target:n})=>{n===e&&(i=!0,e.removeEventListener(s,c),d(t))};e.addEventListener(s,c),setTimeout((()=>{i||l(e)}),o)},h="5.1.3";class p{constructor(t){(t=u(t))&&(this._element=t,r.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){f(t,e,n)}static getInstance(t){return r.default.get(u(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return p}(z.exports,I.exports)}(H),
/*!
      * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */
function(t,e){t.exports=function(t,e,n,r,o){const i=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},s=i(t),a=i(e),l=i(n),c=i(r),u=i(o),d=t=>null==t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),f=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},h=t=>{const e=f(t);return e&&document.querySelector(e)?e:null},p=t=>{const e=f(t);return e?document.querySelector(e):null},g=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),m=t=>g(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,b=(t,e,n)=>{Object.keys(n).forEach((r=>{const o=n[r],i=e[r],s=i&&g(i)?"element":d(i);if(!new RegExp(o).test(s))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}))},y=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},$=[],_=t=>{"loading"===document.readyState?($.length||document.addEventListener("DOMContentLoaded",(()=>{$.forEach((t=>t()))})),$.push(t)):t()},E=t=>{_((()=>{const e=v();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},x="collapse",w="bs.collapse",A=`.${w}`,C={toggle:!0,parent:null},S={toggle:"boolean",parent:"(null|element)"},T=`show${A}`,k=`shown${A}`,L=`hide${A}`,O=`hidden${A}`,j=`click${A}.data-api`,N="show",D="collapse",q="collapsing",U="collapsed",M=`:scope .${D} .${D}`,z="collapse-horizontal",I="width",P="height",Y=".collapse.show, .collapse.collapsing",H='[data-bs-toggle="collapse"]';class B extends u.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=c.default.find(H);for(let t=0,e=n.length;t<e;t++){const e=n[t],r=h(e),o=c.default.find(r).filter((t=>t===this._element));null!==r&&o.length&&(this._selector=r,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get NAME(){return x}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(M,this._config.parent);e=c.default.find(Y,this._config.parent).filter((e=>!t.includes(e)))}const n=c.default.findOne(this._selector);if(e.length){const r=e.find((t=>n!==t));if(t=r?B.getInstance(r):null,t&&t._isTransitioning)return}if(a.default.trigger(this._element,T).defaultPrevented)return;e.forEach((e=>{n!==e&&B.getOrCreateInstance(e,{toggle:!1}).hide(),t||s.default.set(e,w,null)}));const r=this._getDimension();this._element.classList.remove(D),this._element.classList.add(q),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(q),this._element.classList.add(D,N),this._element.style[r]="",a.default.trigger(this._element,k)},i=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[r]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(a.default.trigger(this._element,L).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,y(this._element),this._element.classList.add(q),this._element.classList.remove(D,N);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],n=p(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(q),this._element.classList.add(D),a.default.trigger(this._element,O)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(N)}_getConfig(t){return(t={...C,...l.default.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=m(t.parent),b(x,t,S),t}_getDimension(){return this._element.classList.contains(z)?I:P}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(M,this._config.parent);c.default.find(H,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=p(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(U):t.classList.add(U),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=B.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}return a.default.on(document,j,H,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=h(this);c.default.find(e).forEach((t=>{B.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),E(B),B}(z.exports,I.exports,P.exports,Y.exports,H.exports)}({exports:{}});const B=t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return null;let n=e.value;return e.remove(),n},K=t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return!1;let n=e.value;return e.remove(),"true"==n.toLowerCase()},R=(F="urls",JSON.parse(B(F)));var F;const Q=[];var V;const W=document.head.querySelector("#theme"),J=function(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!Q.length;for(const t of o)t[1](),Q.push(t,e);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const l=[i,a];return o.add(l),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(l),0===o.size&&(r(),r=null)}}}}("dark"==(null===(V=null==W?void 0:W.dataset)||void 0===V?void 0:V.theme));function X(e){let n,r,o;return{c(){n=d("a"),r=d("i"),o=f("\r\n                            Login"),p(r,"class","bi-person"),p(n,"class","btn btn-sm btn-primary"),p(n,"href",R.loginUrl)},m(t,e){c(t,n,e),l(n,r),l(n,o)},p:t,d(t){t&&u(n)}}}function Z(e){let n,r,o,i,s;return{c(){n=d("pre"),n.textContent=`\n                            ${e[1].email}\n                        `,r=h(),o=d("a"),i=d("i"),s=f("\r\n                            Logout"),p(n,"class","user-info text-nowrap svelte-1trrl30"),p(i,"class","bi bi-box-arrow-right"),p(o,"class","btn btn-primary"),p(o,"href",R.logoutUrl)},m(t,e){c(t,n,e),c(t,r,e),c(t,o,e),l(o,i),l(o,s)},p:t,d(t){t&&u(n),t&&u(r),t&&u(o)}}}function G(e){let n,r,o,i,s,a,m,b,y,v,$,_,E,x,w,A,C,S,T,k,L,O,j,N,D,q,U,M,z,I,P,Y,H,B;let K=function(t,e){return t[1].isSigned?Z:X}(e),F=K(e);return{c(){n=h(),r=d("header"),o=d("nav"),i=d("div"),s=d("a"),a=f("RazorSvelte"),m=h(),b=d("button"),b.innerHTML='<i class="bi-list"></i>',y=h(),v=d("div"),$=d("ul"),_=d("li"),E=d("a"),x=f("Home"),w=h(),A=d("li"),C=d("a"),S=f("Privacy"),T=h(),k=d("li"),L=d("a"),O=f("Authorized Access"),j=h(),N=d("li"),D=d("a"),q=f("Spa Example"),U=h(),M=d("div"),F.c(),z=h(),I=d("button"),P=d("i"),p(s,"class","navbar-brand svelte-1trrl30"),p(s,"href",R.indexUrl),p(b,"class","navbar-toggler"),p(b,"type","button"),p(b,"data-bs-toggle","collapse"),p(b,"data-bs-target","#navbarCollapse"),p(b,"aria-controls","navbarCollapse"),p(b,"aria-expanded","false"),p(b,"aria-label","Toggle navigation"),p(E,"class","nav-link "),p(E,"href",R.indexUrl),g(E,"active",document.location.pathname==R.indexUrl),p(_,"class","nav-item py-0"),p(C,"class","nav-link"),p(C,"href",R.privacyUrl),g(C,"active",document.location.pathname==R.privacyUrl),p(A,"class","nav-item py-0"),p(L,"class","nav-link"),p(L,"href",R.authorizedUrl),g(L,"active",document.location.pathname==R.authorizedUrl),p(k,"class","nav-item py-0"),p(D,"class","nav-link"),p(D,"href",R.spaUrl),g(D,"active",document.location.pathname==R.spaUrl),p(N,"class","nav-item py-0"),p($,"class","navbar-nav me-auto"),p(P,"class",Y=e[0]?"bi-lightbulb":"bi-lightbulb-off"),p(I,"class","btn btn-sm btn-primary mx-1"),p(M,"class","d-flex float-end"),p(v,"class","collapse navbar-collapse svelte-1trrl30"),p(v,"id","navbarCollapse"),p(i,"class","container-fluid"),p(o,"class","navbar navbar-expand-md navbar-dark fixed-top bg-primary py-0 py-md-0 svelte-1trrl30")},m(t,u){var d,f,h,p;c(t,n,u),c(t,r,u),l(r,o),l(o,i),l(i,s),l(s,a),l(i,m),l(i,b),l(i,y),l(i,v),l(v,$),l($,_),l(_,E),l(E,x),l($,w),l($,A),l(A,C),l(C,S),l($,T),l($,k),l(k,L),l(L,O),l($,j),l($,N),l(N,D),l(D,q),l(v,U),l(v,M),F.m(M,null),l(M,z),l(M,I),l(I,P),H||(d=I,f="click",h=e[2],d.addEventListener(f,h,p),B=()=>d.removeEventListener(f,h,p),H=!0)},p(t,[e]){0&e&&g(E,"active",document.location.pathname==R.indexUrl),0&e&&g(C,"active",document.location.pathname==R.privacyUrl),0&e&&g(L,"active",document.location.pathname==R.authorizedUrl),0&e&&g(D,"active",document.location.pathname==R.spaUrl),F.p(t,e),1&e&&Y!==(Y=t[0]?"bi-lightbulb":"bi-lightbulb-off")&&p(P,"class",Y)},i:t,o:t,d(t){t&&u(n),t&&u(r),F.d(),H=!1,B()}}}function tt(t,e,n){let r;s(t,J,(t=>n(0,r=t)));const o={isSigned:K("isSigned"),email:B("email")};return[r,o,()=>{return t=r=!r,e=r,J.set(e),t;var t,e}]}W&&J.subscribe((t=>{let e=new Date;e.setFullYear(e.getFullYear()+10),t?(W.dataset.theme="dark",W.href=W.href.replace("light","dark"),document.cookie=`theme=dark; expires=${e.toUTCString()}`):(W.dataset.theme="light",W.href=W.href.replace("dark","light"),document.cookie=`theme=light; expires=${e.toUTCString()}`)}));class et extends M{constructor(t){super(),U(this,t,tt,G,i,{})}}function nt(e){let n,r,o,i,s,a,g;return{c(){n=h(),r=d("footer"),o=d("div"),i=d("span"),s=f("© 2021 - RazorSvelte - "),a=d("a"),g=f("Privacy"),p(a,"href",R.privacyUrl),p(i,"class","text-muted"),p(o,"class","container py-5"),p(r,"class","footer mt-auto py-3 bg-primary bg-opacity-10")},m(t,e){c(t,n,e),c(t,r,e),l(r,o),l(o,i),l(i,s),l(i,a),l(a,g)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(r)}}}class rt extends M{constructor(t){super(),U(this,t,null,nt,i,{})}}function ot(t){let e,n,r,o,i,s;e=new et({});const l=t[1].default,f=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(l,t,t[0],null);return i=new rt({}),{c(){j(e.$$.fragment),n=h(),r=d("main"),f&&f.c(),o=h(),j(i.$$.fragment)},m(t,a){N(e,t,a),c(t,n,a),c(t,r,a),f&&f.m(r,null),c(t,o,a),N(i,t,a),s=!0},p(t,[e]){f&&f.p&&(!s||1&e)&&function(t,e,n,r,o,i){if(o){const s=a(e,n,r,i);t.p(s,o)}}(f,l,t,t[0],s?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(l,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){s||(L(e.$$.fragment,t),L(f,t),L(i.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),O(f,t),O(i.$$.fragment,t),s=!1},d(t){D(e,t),t&&u(n),t&&u(r),f&&f.d(t),t&&u(o),D(i,t)}}}function it(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class st extends M{constructor(t){super(),U(this,t,it,ot,i,{})}}function at(e){let n,r,o,i;return{c(){n=d("div"),r=d("h1"),r.textContent=`${e[0]}`,o=h(),i=d("p"),i.textContent="Use this page to detail your site's privacy policy.",p(n,"class","container")},m(t,e){c(t,n,e),l(n,r),l(n,o),l(n,i)},p:t,d(t){t&&u(n)}}}function lt(t){let e,n;return e=new st({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(t,r){N(e,t,r),n=!0},p(t,[n]){const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function ct(t){return[B("title")]}return new class extends M{constructor(t){super(),U(this,t,ct,lt,i,{})}}({target:document.body})}();
