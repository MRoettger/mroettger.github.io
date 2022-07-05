const $e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};$e();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Z=new WeakMap;class de{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(t,e))}return e}toString(){return this.cssText}}const me=r=>new de(typeof r=="string"?r:r+"",void 0,J),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new de(t,r,J)},_e=(r,e)=>{K?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)})},Q=K?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return me(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const X=window.trustedTypes,ye=X?X.emptyScript:"",Y=window.reactiveElementPolyfillSupport,W={toAttribute(r,e){switch(e){case Boolean:r=r?ye:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ce=(r,e)=>e!==r&&(e==e||r==r),I={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ce};class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=I){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||I}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Q(s))}else e!==void 0&&t.push(Q(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return _e(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=I){var s,n;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const d=((n=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:W.toAttribute)(t,i.type);this._$El=e,d==null?this.removeAttribute(o):this.setAttribute(o,d),this._$El=null}}_$AK(e,t){var i,s;const n=this.constructor,o=n._$Ev.get(e);if(o!==void 0&&this._$El!==o){const d=n.getPropertyOptions(o),l=d.converter,a=(s=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:W.fromAttribute;this._$El=o,this[o]=a(t,d.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ce)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},Y==null||Y({ReactiveElement:_}),((z=globalThis.reactiveElementVersions)!==null&&z!==void 0?z:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const g=globalThis.trustedTypes,ee=g?g.createPolicy("lit-html",{createHTML:r=>r}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,pe="?"+$,ge=`<${pe}>`,A=document,P=(r="")=>A.createComment(r),O=r=>r===null||typeof r!="object"&&typeof r!="function",ue=Array.isArray,Ae=r=>{var e;return ue(r)||typeof((e=r)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,ie=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,se=/'/g,re=/"/g,ve=/^(?:script|style|textarea|title)$/i,be=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),S=be(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ne=new WeakMap,we=(r,e,t)=>{var i,s;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=n._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new N(e.insertBefore(P(),d),d,void 0,t!=null?t:{})}return o._$AI(r),o},y=A.createTreeWalker(A,129,null,!1),Ee=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=C;for(let l=0;l<t;l++){const a=r[l];let f,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===C?h[1]==="!--"?o=te:h[1]!==void 0?o=ie:h[2]!==void 0?(ve.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=m):h[3]!==void 0&&(o=m):o===m?h[0]===">"?(o=s!=null?s:C,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,f=h[1],o=h[3]===void 0?m:h[3]==='"'?re:se):o===re||o===se?o=m:o===te||o===ie?o=C:(o=m,s=void 0);const U=o===m&&r[l+1].startsWith("/>")?" ":"";n+=o===C?a+ge:c>=0?(i.push(f),a.slice(0,c)+"$lit$"+a.slice(c)+$+U):a+$+(c===-2?(i.push(void 0),l):U)}const d=n+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ee!==void 0?ee.createHTML(d):d,i]};class T{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const d=e.length-1,l=this.parts,[a,f]=Ee(e,t);if(this.el=T.createElement(a,i),y.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=y.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){const u=f[o++];if(h.push(c),u!==void 0){const U=s.getAttribute(u.toLowerCase()+"$lit$").split($),H=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:H[2],strings:U,ctor:H[1]==="."?xe:H[1]==="?"?Pe:H[1]==="@"?Oe:j})}else l.push({type:6,index:n})}for(const c of h)s.removeAttribute(c)}if(ve.test(s.tagName)){const h=s.textContent.split($),c=h.length-1;if(c>0){s.textContent=g?g.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],P()),y.nextNode(),l.push({type:2,index:++n});s.append(h[c],P())}}}else if(s.nodeType===8)if(s.data===pe)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)l.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function w(r,e,t=r,i){var s,n,o,d;if(e===b)return e;let l=i!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[i]:t._$Cu;const a=O(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,t,i)),i!==void 0?((o=(d=t)._$Cl)!==null&&o!==void 0?o:d._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=w(r,l._$AS(r,e.values),l,i)),e}class Se{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:A).importNode(i,!0);y.currentNode=n;let o=y.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let f;a.type===2?f=new N(o,o.nextSibling,this,e):a.type===1?f=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(f=new Te(o,this,e)),this.v.push(f),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=y.nextNode(),d++)}return n}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{constructor(e,t,i,s){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),O(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==b&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ae(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=e:this.k(A.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=T.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(i);else{const o=new Se(n,this),d=o.p(this.options);o.m(i),this.k(d),this._$AH=o}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new T(e)),t}S(e){ue(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new N(this.M(P()),this.M(P()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class j{constructor(e,t,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=w(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==b,o&&(this._$AH=e);else{const d=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=w(this,d[i+l],t,l),a===b&&(a=this._$AH[l]),o||(o=!O(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!s&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class xe extends j{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Ce=g?g.emptyScript:"";class Pe extends j{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Ce):this.element.removeAttribute(this.name)}}class Oe extends j{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=w(this,e,t,0))!==null&&i!==void 0?i:p)===b)return;const s=this._$AH,n=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const oe=window.litHtmlPolyfillSupport;oe==null||oe(T,N),((F=globalThis.litHtmlVersions)!==null&&F!==void 0?F:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,k;class v extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=we(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return b}}v.finalized=!0,v._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:v});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:v});((k=globalThis.litElementVersions)!==null&&k!==void 0?k:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=r=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(o){window.customElements.define(t,o)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function D(r){return(e,t)=>t!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,e,t):Ne(r,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;var Ue=Object.defineProperty,He=Object.getOwnPropertyDescriptor,L=(r,e,t,i)=>{for(var s=i>1?void 0:i?He(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ue(e,t,s),s};let E=class extends v{constructor(){super(...arguments),this.name="World",this.beruf="Architect & Enginee",this.img="logo.svg"}render(){return S`
      <div class="card">
        <img src="./src/img/${this.img}" alt="Avatar" style="width:100%" />
        <div class="textcontainer">
          <h4><b>${this.name}</b></h4>
          <p>${this.beruf}</p>
        </div>
      </div>
    `}};E.styles=R`
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border-radius: 10px; /* 5px rounded corners */
      width: 200px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      margin: 20px 16px;
      background-color:#FFFFFF ;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    /* Add rounded corners to the top left and the top right corner of the image */
    img {
      border-radius: 5px 5px 0 0;
      float: left;
      width:  200px;
      height: 190px;
      object-fit: cover;
    }
    .textcontainer {
      padding: 2px 16px;
    }

  `;L([D()],E.prototype,"name",2);L([D()],E.prototype,"beruf",2);L([D()],E.prototype,"img",2);E=L([x("my-card")],E);var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var s=i>1?void 0:i?Re(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Me(e,t,s),s};let q=class extends v{render(){return S`
      <article>
    <div class="center">
        <div class="row">
          <my-card
            beruf="-"
            name="Me"
            img="me_bike.jpg"
          ></my-card>
          <my-card
            beruf="2022"
            name="Rennrad"
            img="Rennrad.jpg"
          ></my-card>
          <my-card
            beruf="Edge 550"
            name="Garmin "
            img="Navi.jpg"
          ></my-card>
        </div>
        </div>
      </article>
    `}};q.styles=R`
    .row {

      display: flex;
      flex-wrap: wrap;
      max-width: 1000px;
     

    }
    .center {
      background-color: #F3F3F3;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 10vh;
    }

  `;q=je([x("my-article")],q);var De=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,fe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Le(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&De(e,t,s),s};let M=class extends v{constructor(){super(...arguments),this.name=""}render(){return S`<p>Hello ${this.name} from my template.</p>`}};M.styles=R`
  :host {
    color: blue;
  }
`;fe([D()],M.prototype,"name",2);M=fe([x("my-greeter")],M);var ze=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Fe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ie(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ze(e,t,s),s};let ae=class extends v{render(){return S`
      <footer></footer>
    `}};ae=Fe([x("my-footer")],ae);var Be=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?ke(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Be(e,t,s),s};let G=class extends v{render(){return S`
      <header>
        <h1>Radfahr Aktivitäten</h1>
        <p>2022</p>
        <p></p>
        <div class="aktivitaeten">
          <iframe
            height="160"
            width="30%"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/8340838/activity-summary/6b3e9686d5d0fc457aa2fe3b33a021420f33618d"
          ></iframe>
          </div>
          <div class="aktivitaeten">
          <iframe
            height="454"
            width="30%"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/8340838/latest-rides/6b3e9686d5d0fc457aa2fe3b33a021420f33618d"
          ></iframe>
        </div>
      </header>
    `}};G.styles=R`
     h1{
      text-align: center;
      padding: 32px;
    }
    p{text-align: center;}
    .aktivitaeten{
      background-color: #F3F3F3;
      display:flex
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center; 
      min-height: 10vh;
      padding: 20px
      }
  `;G=Ve([x("my-header")],G);var We=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ge=(r,e,t,i)=>{for(var s=i>1?void 0:i?qe(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&We(e,t,s),s};let he=class extends v{render(){return S`

      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `}};he=Ge([x("my-page")],he);
