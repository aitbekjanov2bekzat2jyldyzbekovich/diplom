const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Main-BPVS8aZk.js","assets/coursCard-C8PH3p5o.js","assets/Main-C8ec8cn4.css","assets/Recommendation-BlP8HStr.js","assets/Search-BFsA24lI.js","assets/MyCours-BXsI3Ncp.js","assets/MyCours-BciMlxby.css","assets/Cours-8FxwKzwg.js","assets/Cours-C9Z7c_Cm.css","assets/MyFollowing-CXGzPHHL.js","assets/MyFollowing-CvHL7Qdc.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ed(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},ui=[],Vn=()=>{},C_=()=>!1,Cc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wd=t=>t.startsWith("onUpdate:"),yt=Object.assign,Td=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C4=Object.prototype.hasOwnProperty,Le=(t,e)=>C4.call(t,e),ae=Array.isArray,hi=t=>Ia(t)==="[object Map]",Li=t=>Ia(t)==="[object Set]",am=t=>Ia(t)==="[object Date]",ge=t=>typeof t=="function",rt=t=>typeof t=="string",Cn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",S_=t=>($e(t)||ge(t))&&ge(t.then)&&ge(t.catch),A_=Object.prototype.toString,Ia=t=>A_.call(t),S4=t=>Ia(t).slice(8,-1),R_=t=>Ia(t)==="[object Object]",Id=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ro=Ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},A4=/-\w/g,gn=Sc(t=>t.replace(A4,e=>e.slice(1).toUpperCase())),R4=/\B([A-Z])/g,lr=Sc(t=>t.replace(R4,"-$1").toLowerCase()),Ac=Sc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Du=Sc(t=>t?`on${Ac(t)}`:""),Bs=(t,e)=>!Object.is(t,e),pl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},P_=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},P4=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let lm;const Rc=()=>lm||(lm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bd(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=rt(s)?O4(s):bd(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(rt(t)||$e(t))return t}const k4=/;(?![^(]*\))/g,N4=/:([^]+)/,x4=/\/\*[^]*?\*\//g;function O4(t){const e={};return t.replace(x4,"").split(k4).forEach(n=>{if(n){const s=n.split(N4);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ls(t){let e="";if(rt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const s=ls(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const D4="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",M4=Ed(D4);function k_(t){return!!t||t===""}function V4(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Or(t[s],e[s]);return n}function Or(t,e){if(t===e)return!0;let n=am(t),s=am(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Cn(t),s=Cn(e),n||s)return t===e;if(n=ae(t),s=ae(e),n||s)return n&&s?V4(t,e):!1;if(n=$e(t),s=$e(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Or(t[o],e[o]))return!1}}return String(t)===String(e)}function Cd(t,e){return t.findIndex(n=>Or(n,e))}const N_=t=>!!(t&&t.__v_isRef===!0),ft=t=>rt(t)?t:t==null?"":ae(t)||$e(t)&&(t.toString===A_||!ge(t.toString))?N_(t)?ft(t.value):JSON.stringify(t,x_,2):String(t),x_=(t,e)=>N_(e)?x_(t,e.value):hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Mu(s,i)+" =>"]=r,n),{})}:Li(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Mu(n))}:Cn(e)?Mu(e):$e(e)&&!ae(e)&&!R_(e)?String(e):e,Mu=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class O_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){this._on>0&&--this._on===0&&(Mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function D_(t){return new O_(t)}function M_(){return Mt}function L4(t,e=!1){Mt&&Mt.cleanups.push(t)}let He;const Vu=new WeakSet;class V_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vu.has(this)&&(Vu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||F_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cm(this),U_(this);const e=He,n=In;He=this,In=!0;try{return this.fn()}finally{$_(this),He=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rd(e);this.deps=this.depsTail=void 0,cm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_h(this)&&this.run()}get dirty(){return _h(this)}}let L_=0,Po,ko;function F_(t,e=!1){if(t.flags|=8,e){t.next=ko,ko=t;return}t.next=Po,Po=t}function Sd(){L_++}function Ad(){if(--L_>0)return;if(ko){let e=ko;for(ko=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Po;){let e=Po;for(Po=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function U_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $_(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Rd(s),F4(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function _h(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(B_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function B_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yo)||(t.globalVersion=Yo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!_h(t))))return;t.flags|=2;const e=t.dep,n=He,s=In;He=t,In=!0;try{U_(t);const r=t.fn(t._value);(e.version===0||Bs(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{He=n,In=s,$_(t),t.flags&=-3}}function Rd(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function F4(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const j_=[];function cs(){j_.push(In),In=!1}function us(){const t=j_.pop();In=t===void 0?!0:t}function cm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let Yo=0;class U4{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!In||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new U4(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,q_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=s)}return n}trigger(e){this.version++,Yo++,this.notify(e)}notify(e){Sd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ad()}}}function q_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)q_(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xl=new WeakMap,kr=Symbol(""),yh=Symbol(""),Xo=Symbol("");function Lt(t,e,n){if(In&&He){let s=xl.get(t);s||xl.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Pd),r.map=s,r.key=n),r.track()}}function es(t,e,n,s,r,i){const o=xl.get(t);if(!o){Yo++;return}const a=c=>{c&&c.trigger()};if(Sd(),e==="clear")o.forEach(a);else{const c=ae(t),u=c&&Id(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===Xo||!Cn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Xo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(kr)),hi(t)&&a(o.get(yh)));break;case"delete":c||(a(o.get(kr)),hi(t)&&a(o.get(yh)));break;case"set":hi(t)&&a(o.get(kr));break}}Ad()}function $4(t,e){const n=xl.get(t);return n&&n.get(e)}function Zr(t){const e=xe(t);return e===t?e:(Lt(e,"iterate",Xo),pn(t)?e:e.map(At))}function Pc(t){return Lt(t=xe(t),"iterate",Xo),t}const B4={__proto__:null,[Symbol.iterator](){return Lu(this,Symbol.iterator,At)},concat(...t){return Zr(this).concat(...t.map(e=>ae(e)?Zr(e):e))},entries(){return Lu(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return Qn(this,"find",t,e,At,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fu(this,"includes",t)},indexOf(...t){return Fu(this,"indexOf",t)},join(t){return Zr(this).join(t)},lastIndexOf(...t){return Fu(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return ho(this,"pop")},push(...t){return ho(this,"push",t)},reduce(t,...e){return um(this,"reduce",t,e)},reduceRight(t,...e){return um(this,"reduceRight",t,e)},shift(){return ho(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return ho(this,"splice",t)},toReversed(){return Zr(this).toReversed()},toSorted(t){return Zr(this).toSorted(t)},toSpliced(...t){return Zr(this).toSpliced(...t)},unshift(...t){return ho(this,"unshift",t)},values(){return Lu(this,"values",At)}};function Lu(t,e,n){const s=Pc(t),r=s[e]();return s!==t&&!pn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const j4=Array.prototype;function Qn(t,e,n,s,r,i){const o=Pc(t),a=o!==t&&!pn(t),c=o[e];if(c!==j4[e]){const d=c.apply(t,i);return a?At(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,At(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function um(t,e,n,s){const r=Pc(t);let i=n;return r!==t&&(pn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,At(a),c,t)}),r[e](i,...s)}function Fu(t,e,n){const s=xe(t);Lt(s,"iterate",Xo);const r=s[e](...n);return(r===-1||r===!1)&&xd(n[0])?(n[0]=xe(n[0]),s[e](...n)):r}function ho(t,e,n=[]){cs(),Sd();const s=xe(t)[e].apply(t,n);return Ad(),us(),s}const q4=Ed("__proto__,__v_isRef,__isVue"),W_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function W4(t){Cn(t)||(t=String(t));const e=xe(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class H_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ew:Q_:i?K_:G_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ae(e);if(!r){let c;if(o&&(c=B4[n]))return c;if(n==="hasOwnProperty")return W4}const a=Reflect.get(e,n,ot(e)?e:s);if((Cn(n)?W_.has(n):q4(n))||(r||Lt(e,"get",n),i))return a;if(ot(a)){const c=o&&Id(n)?a:a.value;return r&&$e(c)?Eh(c):c}return $e(a)?r?Eh(a):ba(a):a}}class z_ extends H_{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Qs(i);if(!pn(s)&&!Qs(s)&&(i=xe(i),s=xe(s)),!ae(e)&&ot(i)&&!ot(s))return c||(i.value=s),!0}const o=ae(e)&&Id(n)?Number(n)<e.length:Le(e,n),a=Reflect.set(e,n,s,ot(e)?e:r);return e===xe(r)&&(o?Bs(s,i)&&es(e,"set",n,s):es(e,"add",n,s)),a}deleteProperty(e,n){const s=Le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&es(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Cn(n)||!W_.has(n))&&Lt(e,"has",n),s}ownKeys(e){return Lt(e,"iterate",ae(e)?"length":kr),Reflect.ownKeys(e)}}class H4 extends H_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const z4=new z_,G4=new H4,K4=new z_(!0);const vh=t=>t,Za=t=>Reflect.getPrototypeOf(t);function Q4(t,e,n){return function(...s){const r=this.__v_raw,i=xe(r),o=hi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?vh:e?Ol:At;return!e&&Lt(i,"iterate",c?yh:kr),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function el(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Y4(t,e){const n={get(r){const i=this.__v_raw,o=xe(i),a=xe(r);t||(Bs(r,a)&&Lt(o,"get",r),Lt(o,"get",a));const{has:c}=Za(o),u=e?vh:t?Ol:At;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Lt(xe(r),"iterate",kr),r.size},has(r){const i=this.__v_raw,o=xe(i),a=xe(r);return t||(Bs(r,a)&&Lt(o,"has",r),Lt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=xe(a),u=e?vh:t?Ol:At;return!t&&Lt(c,"iterate",kr),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return yt(n,t?{add:el("add"),set:el("set"),delete:el("delete"),clear:el("clear")}:{add(r){!e&&!pn(r)&&!Qs(r)&&(r=xe(r));const i=xe(this);return Za(i).has.call(i,r)||(i.add(r),es(i,"add",r,r)),this},set(r,i){!e&&!pn(i)&&!Qs(i)&&(i=xe(i));const o=xe(this),{has:a,get:c}=Za(o);let u=a.call(o,r);u||(r=xe(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Bs(i,h)&&es(o,"set",r,i):es(o,"add",r,i),this},delete(r){const i=xe(this),{has:o,get:a}=Za(i);let c=o.call(i,r);c||(r=xe(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&es(i,"delete",r,void 0),u},clear(){const r=xe(this),i=r.size!==0,o=r.clear();return i&&es(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Q4(r,t,e)}),n}function kd(t,e){const n=Y4(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Le(n,r)&&r in s?n:s,r,i)}const X4={get:kd(!1,!1)},J4={get:kd(!1,!0)},Z4={get:kd(!0,!1)};const G_=new WeakMap,K_=new WeakMap,Q_=new WeakMap,ew=new WeakMap;function tw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nw(t){return t.__v_skip||!Object.isExtensible(t)?0:tw(S4(t))}function ba(t){return Qs(t)?t:Nd(t,!1,z4,X4,G_)}function Y_(t){return Nd(t,!1,K4,J4,K_)}function Eh(t){return Nd(t,!0,G4,Z4,Q_)}function Nd(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=nw(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function js(t){return Qs(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function pn(t){return!!(t&&t.__v_isShallow)}function xd(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function Ti(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&P_(t,"__v_skip",!0),t}const At=t=>$e(t)?ba(t):t,Ol=t=>$e(t)?Eh(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function Od(t){return X_(t,!1)}function sw(t){return X_(t,!0)}function X_(t,e){return ot(t)?t:new rw(t,e)}class rw{constructor(e,n){this.dep=new Pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||pn(e)||Qs(e);e=s?e:xe(e),Bs(e,n)&&(this._rawValue=e,this._value=s?e:At(e),this.dep.trigger())}}function di(t){return ot(t)?t.value:t}const iw={get:(t,e,n)=>e==="__v_raw"?t:di(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ot(r)&&!ot(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function J_(t){return js(t)?t:new Proxy(t,iw)}function ow(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=lw(t,n);return e}class aw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $4(xe(this._object),this._key)}}function lw(t,e,n){const s=t[e];return ot(s)?s:new aw(t,e,n)}class cw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return F_(this,!0),!0}get value(){const e=this.dep.track();return B_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uw(t,e,n=!1){let s,r;return ge(t)?s=t:(s=t.get,r=t.set),new cw(s,r,n)}const tl={},Dl=new WeakMap;let Tr;function hw(t,e=!1,n=Tr){if(n){let s=Dl.get(n);s||Dl.set(n,s=[]),s.push(t)}}function dw(t,e,n=qe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=G=>r?G:pn(G)||r===!1||r===0?ts(G,1):ts(G);let h,d,p,g,S=!1,P=!1;if(ot(t)?(d=()=>t.value,S=pn(t)):js(t)?(d=()=>u(t),S=!0):ae(t)?(P=!0,S=t.some(G=>js(G)||pn(G)),d=()=>t.map(G=>{if(ot(G))return G.value;if(js(G))return u(G);if(ge(G))return c?c(G,2):G()})):ge(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){cs();try{p()}finally{us()}}const G=Tr;Tr=h;try{return c?c(t,3,[g]):t(g)}finally{Tr=G}}:d=Vn,e&&r){const G=d,te=r===!0?1/0:r;d=()=>ts(G(),te)}const N=M_(),L=()=>{h.stop(),N&&N.active&&Td(N.effects,h)};if(i&&e){const G=e;e=(...te)=>{G(...te),L()}}let U=P?new Array(t.length).fill(tl):tl;const B=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const te=h.run();if(r||S||(P?te.some((ne,A)=>Bs(ne,U[A])):Bs(te,U))){p&&p();const ne=Tr;Tr=h;try{const A=[te,U===tl?void 0:P&&U[0]===tl?[]:U,g];U=te,c?c(e,3,A):e(...A)}finally{Tr=ne}}}else h.run()};return a&&a(B),h=new V_(d),h.scheduler=o?()=>o(B,!1):B,g=G=>hw(G,!1,h),p=h.onStop=()=>{const G=Dl.get(h);if(G){if(c)c(G,4);else for(const te of G)te();Dl.delete(h)}},e?s?B(!0):U=h.run():o?o(B.bind(null,!0),!0):h.run(),L.pause=h.pause.bind(h),L.resume=h.resume.bind(h),L.stop=L,L}function ts(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ot(t))ts(t.value,e,n);else if(ae(t))for(let s=0;s<t.length;s++)ts(t[s],e,n);else if(Li(t)||hi(t))t.forEach(s=>{ts(s,e,n)});else if(R_(t)){for(const s in t)ts(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ts(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ca(t,e,n,s){try{return s?t(...s):t()}catch(r){kc(r,e,n)}}function Sn(t,e,n,s){if(ge(t)){const r=Ca(t,e,n,s);return r&&S_(r)&&r.catch(i=>{kc(i,e,n)}),r}if(ae(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Sn(t[i],e,n,s));return r}}function kc(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}a=a.parent}if(i){cs(),Ca(i,null,10,[t,c,u]),us();return}}fw(t,n,r,s,o)}function fw(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Gt=[];let On=-1;const fi=[];let Os=null,ni=0;const Z_=Promise.resolve();let Ml=null;function Nc(t){const e=Ml||Z_;return t?e.then(this?t.bind(this):t):e}function pw(t){let e=On+1,n=Gt.length;for(;e<n;){const s=e+n>>>1,r=Gt[s],i=Jo(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Dd(t){if(!(t.flags&1)){const e=Jo(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=Jo(n)?Gt.push(t):Gt.splice(pw(e),0,t),t.flags|=1,e2()}}function e2(){Ml||(Ml=Z_.then(n2))}function mw(t){ae(t)?fi.push(...t):Os&&t.id===-1?Os.splice(ni+1,0,t):t.flags&1||(fi.push(t),t.flags|=1),e2()}function hm(t,e,n=On+1){for(;n<Gt.length;n++){const s=Gt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Gt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function t2(t){if(fi.length){const e=[...new Set(fi)].sort((n,s)=>Jo(n)-Jo(s));if(fi.length=0,Os){Os.push(...e);return}for(Os=e,ni=0;ni<Os.length;ni++){const n=Os[ni];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Os=null,ni=0}}const Jo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function n2(t){try{for(On=0;On<Gt.length;On++){const e=Gt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Gt.length;On++){const e=Gt[On];e&&(e.flags&=-2)}On=-1,Gt.length=0,t2(),Ml=null,(Gt.length||fi.length)&&n2()}}let kt=null,s2=null;function Vl(t){const e=kt;return kt=t,s2=t&&t.type.__scopeId||null,e}function cn(t,e=kt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ul(-1);const i=Vl(e);let o;try{o=t(...r)}finally{Vl(i),s._d&&Ul(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Uu(t,e){if(kt===null)return t;const n=Lc(kt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=qe]=e[r];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&ts(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function vr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(cs(),Sn(c,n,8,[t.el,a,t,e]),us())}}const gw=Symbol("_vte"),r2=t=>t.__isTeleport,Zn=Symbol("_leaveCb"),nl=Symbol("_enterCb");function i2(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return f2(()=>{t.isMounted=!0}),m2(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],o2={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},a2=t=>{const e=t.subTree;return e.component?a2(e.component):e},_w={name:"BaseTransition",props:o2,setup(t,{slots:e}){const n=Vc(),s=i2();return()=>{const r=e.default&&Md(e.default(),!0);if(!r||!r.length)return;const i=l2(r),o=xe(t),{mode:a}=o;if(s.isLeaving)return $u(i);const c=dm(i);if(!c)return $u(i);let u=Zo(c,o,s,n,d=>u=d);c.type!==Bt&&Dr(c,u);let h=n.subTree&&dm(n.subTree);if(h&&h.type!==Bt&&!Sr(h,c)&&a2(n).type!==Bt){let d=Zo(h,o,s,n);if(Dr(h,d),a==="out-in"&&c.type!==Bt)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},$u(i);a==="in-out"&&c.type!==Bt?d.delayLeave=(p,g,S)=>{const P=c2(s,h);P[String(h.key)]=h,p[Zn]=()=>{g(),p[Zn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function l2(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const yw=_w;function c2(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Zo(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:S,onLeaveCancelled:P,onBeforeAppear:N,onAppear:L,onAfterAppear:U,onAppearCancelled:B}=e,G=String(t.key),te=c2(n,t),ne=(y,C)=>{y&&Sn(y,s,9,C)},A=(y,C)=>{const T=C[1];ne(y,C),ae(y)?y.every(E=>E.length<=1)&&T():y.length<=1&&T()},v={mode:o,persisted:a,beforeEnter(y){let C=c;if(!n.isMounted)if(i)C=N||c;else return;y[Zn]&&y[Zn](!0);const T=te[G];T&&Sr(t,T)&&T.el[Zn]&&T.el[Zn](),ne(C,[y])},enter(y){let C=u,T=h,E=d;if(!n.isMounted)if(i)C=L||u,T=U||h,E=B||d;else return;let w=!1;const Y=y[nl]=Ee=>{w||(w=!0,Ee?ne(E,[y]):ne(T,[y]),v.delayedLeave&&v.delayedLeave(),y[nl]=void 0)};C?A(C,[y,Y]):Y()},leave(y,C){const T=String(t.key);if(y[nl]&&y[nl](!0),n.isUnmounting)return C();ne(p,[y]);let E=!1;const w=y[Zn]=Y=>{E||(E=!0,C(),Y?ne(P,[y]):ne(S,[y]),y[Zn]=void 0,te[T]===t&&delete te[T])};te[T]=t,g?A(g,[y,w]):w()},clone(y){const C=Zo(y,e,n,s,r);return r&&r(C),C}};return v}function $u(t){if(xc(t))return t=Ys(t),t.children=null,t}function dm(t){if(!xc(t))return r2(t.type)&&t.children?l2(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function Dr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Dr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Md(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===nt?(o.patchFlag&128&&r++,s=s.concat(Md(o.children,e,a))):(e||o.type!==Bt)&&s.push(a!=null?Ys(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function u2(t,e){return ge(t)?yt({name:t.name},e,{setup:t}):t}function h2(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ll=new WeakMap;function No(t,e,n,s,r=!1){if(ae(t)){t.forEach((S,P)=>No(S,e&&(ae(e)?e[P]:e),n,s,r));return}if(pi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&No(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Lc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===qe?a.refs={}:a.refs,d=a.setupState,p=xe(d),g=d===qe?C_:S=>Le(p,S);if(u!=null&&u!==c){if(fm(e),rt(u))h[u]=null,g(u)&&(d[u]=null);else if(ot(u)){u.value=null;const S=e;S.k&&(h[S.k]=null)}}if(ge(c))Ca(c,a,12,[o,h]);else{const S=rt(c),P=ot(c);if(S||P){const N=()=>{if(t.f){const L=S?g(c)?d[c]:h[c]:c.value;if(r)ae(L)&&Td(L,i);else if(ae(L))L.includes(i)||L.push(i);else if(S)h[c]=[i],g(c)&&(d[c]=h[c]);else{const U=[i];c.value=U,t.k&&(h[t.k]=U)}}else S?(h[c]=o,g(c)&&(d[c]=o)):P&&(c.value=o,t.k&&(h[t.k]=o))};if(o){const L=()=>{N(),Ll.delete(t)};L.id=-1,Ll.set(t,L),rn(L,n)}else fm(t),N()}}}function fm(t){const e=Ll.get(t);e&&(e.flags|=8,Ll.delete(t))}Rc().requestIdleCallback;Rc().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,xc=t=>t.type.__isKeepAlive;function vw(t,e){d2(t,"a",e)}function Ew(t,e){d2(t,"da",e)}function d2(t,e,n=jt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Oc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)xc(r.parent.vnode)&&ww(s,e,n,r),r=r.parent}}function ww(t,e,n,s){const r=Oc(e,t,s,!0);g2(()=>{Td(s[e],r)},n)}function Oc(t,e,n=jt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{cs();const a=Sa(n),c=Sn(e,n,t,o);return a(),us(),c});return s?r.unshift(i):r.push(i),i}}const _s=t=>(e,n=jt)=>{(!na||t==="sp")&&Oc(t,(...s)=>e(...s),n)},Tw=_s("bm"),f2=_s("m"),Iw=_s("bu"),p2=_s("u"),m2=_s("bum"),g2=_s("um"),bw=_s("sp"),Cw=_s("rtg"),Sw=_s("rtc");function Aw(t,e=jt){Oc("ec",t,e)}const _2="components";function Ft(t,e){return v2(_2,t,!0,e)||t}const y2=Symbol.for("v-ndc");function Vd(t){return rt(t)?v2(_2,t,!1)||t:t||y2}function v2(t,e,n=!0,s=!1){const r=kt||jt;if(r){const i=r.type;{const a=g0(i,!1);if(a&&(a===e||a===gn(e)||a===Ac(gn(e))))return i}const o=pm(r[t]||i[t],e)||pm(r.appContext[t],e);return!o&&s?i:o}}function pm(t,e){return t&&(t[e]||t[gn(e)]||t[Ac(gn(e))])}function Fi(t,e,n,s){let r;const i=n,o=ae(t);if(o||rt(t)){const a=o&&js(t);let c=!1,u=!1;a&&(c=!pn(t),u=Qs(t),t=Pc(t)),r=new Array(t.length);for(let h=0,d=t.length;h<d;h++)r[h]=e(c?u?Ol(At(t[h])):At(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}function E2(t,e,n={},s,r){if(kt.ce||kt.parent&&pi(kt.parent)&&kt.parent.ce){const u=Object.keys(n).length>0;return re(),Kt(nt,null,[De("slot",n,s)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),re();const o=i&&w2(i(n)),a=n.key||o&&o.key,c=Kt(nt,{key:(a&&!Cn(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function w2(t){return t.some(e=>ta(e)?!(e.type===Bt||e.type===nt&&!w2(e.children)):!0)?t:null}const wh=t=>t?B2(t)?Lc(t):wh(t.parent):null,xo=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wh(t.parent),$root:t=>wh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>I2(t),$forceUpdate:t=>t.f||(t.f=()=>{Dd(t.update)}),$nextTick:t=>t.n||(t.n=Nc.bind(t.proxy)),$watch:t=>Qw.bind(t)}),Bu=(t,e)=>t!==qe&&!t.__isScriptSetup&&Le(t,e),Rw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Bu(s,e))return o[e]=1,s[e];if(r!==qe&&Le(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,i[e];if(n!==qe&&Le(n,e))return o[e]=4,n[e];Th&&(o[e]=0)}}const h=xo[e];let d,p;if(h)return e==="$attrs"&&Lt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==qe&&Le(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Bu(r,e)?(r[e]=n,!0):s!==qe&&Le(s,e)?(s[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,u;return!!(n[a]||t!==qe&&a[0]!=="$"&&Le(t,a)||Bu(e,a)||(c=i[0])&&Le(c,a)||Le(s,a)||Le(xo,a)||Le(r.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mm(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Th=!0;function Pw(t){const e=I2(t),n=t.proxy,s=t.ctx;Th=!1,e.beforeCreate&&gm(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:S,activated:P,deactivated:N,beforeDestroy:L,beforeUnmount:U,destroyed:B,unmounted:G,render:te,renderTracked:ne,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:C,inheritAttrs:T,components:E,directives:w,filters:Y}=e;if(u&&kw(u,s,null),o)for(const le in o){const ye=o[le];ge(ye)&&(s[le]=ye.bind(n))}if(r){const le=r.call(n,n);$e(le)&&(t.data=ba(le))}if(Th=!0,i)for(const le in i){const ye=i[le],et=ge(ye)?ye.bind(n,n):ge(ye.get)?ye.get.bind(n,n):Vn,Wt=!ge(ye)&&ge(ye.set)?ye.set.bind(n):Vn,Ct=dn({get:et,set:Wt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Je=>Ct.value=Je})}if(a)for(const le in a)T2(a[le],s,n,le);if(c){const le=ge(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ye=>{ml(ye,le[ye])})}h&&gm(h,t,"c");function ve(le,ye){ae(ye)?ye.forEach(et=>le(et.bind(n))):ye&&le(ye.bind(n))}if(ve(Tw,d),ve(f2,p),ve(Iw,g),ve(p2,S),ve(vw,P),ve(Ew,N),ve(Aw,v),ve(Sw,ne),ve(Cw,A),ve(m2,U),ve(g2,G),ve(bw,y),ae(C))if(C.length){const le=t.exposed||(t.exposed={});C.forEach(ye=>{Object.defineProperty(le,ye,{get:()=>n[ye],set:et=>n[ye]=et,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===Vn&&(t.render=te),T!=null&&(t.inheritAttrs=T),E&&(t.components=E),w&&(t.directives=w),y&&h2(t)}function kw(t,e,n=Vn){ae(t)&&(t=Ih(t));for(const s in t){const r=t[s];let i;$e(r)?"default"in r?i=Ln(r.from||s,r.default,!0):i=Ln(r.from||s):i=Ln(r),ot(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function gm(t,e,n){Sn(ae(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function T2(t,e,n,s){let r=s.includes(".")?V2(n,s):()=>n[s];if(rt(t)){const i=e[t];ge(i)&&Oo(r,i)}else if(ge(t))Oo(r,t.bind(n));else if($e(t))if(ae(t))t.forEach(i=>T2(i,e,n,s));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Oo(r,i,t)}}function I2(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Fl(c,u,o,!0)),Fl(c,e,o)),$e(e)&&i.set(e,c),c}function Fl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Fl(t,i,n,!0),r&&r.forEach(o=>Fl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Nw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Nw={data:_m,props:ym,emits:ym,methods:wo,computed:wo,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:wo,directives:wo,watch:Ow,provide:_m,inject:xw};function _m(t,e){return e?t?function(){return yt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function xw(t,e){return wo(Ih(t),Ih(e))}function Ih(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function wo(t,e){return t?yt(Object.create(null),t,e):e}function ym(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:yt(Object.create(null),mm(t),mm(e??{})):e}function Ow(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const s in e)n[s]=zt(t[s],e[s]);return n}function b2(){return{app:null,config:{isNativeTag:C_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dw=0;function Mw(t,e){return function(s,r=null){ge(s)||(s=yt({},s)),r!=null&&!$e(r)&&(r=null);const i=b2(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Dw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:y0,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&ge(h.install)?(o.add(h),h.install(u,...d)):ge(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!c){const g=u._ceVNode||De(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(g,h,p),c=!0,u._container=h,h.__vue_app__=u,Lc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Sn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Nr;Nr=u;try{return h()}finally{Nr=d}}};return u}}let Nr=null;function ml(t,e){if(jt){let n=jt.provides;const s=jt.parent&&jt.parent.provides;s===n&&(n=jt.provides=Object.create(s)),n[t]=e}}function Ln(t,e,n=!1){const s=Vc();if(s||Nr){let r=Nr?Nr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ge(e)?e.call(s&&s.proxy):e}}function Vw(){return!!(Vc()||Nr)}const C2={},S2=()=>Object.create(C2),A2=t=>Object.getPrototypeOf(t)===C2;function Lw(t,e,n,s=!1){const r={},i=S2();t.propsDefaults=Object.create(null),R2(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Y_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Fw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=xe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Dc(t.emitsOptions,p))continue;const g=e[p];if(c)if(Le(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const S=gn(p);r[S]=bh(c,a,S,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{R2(t,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!Le(e,d)&&((h=lr(d))===d||!Le(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=bh(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Le(e,d))&&(delete i[d],u=!0)}u&&es(t.attrs,"set","")}function R2(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ro(c))continue;const u=e[c];let h;r&&Le(r,h=gn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Dc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=xe(n),u=a||qe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=bh(r,c,d,u[d],t,!Le(u,d))}}return o}function bh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Sa(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===lr(n))&&(s=!0))}return s}const Uw=new WeakMap;function P2(t,e,n=!1){const s=n?Uw:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ge(t)){const h=d=>{c=!0;const[p,g]=P2(d,e,!0);yt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return $e(t)&&s.set(t,ui),ui;if(ae(i))for(let h=0;h<i.length;h++){const d=gn(i[h]);vm(d)&&(o[d]=qe)}else if(i)for(const h in i){const d=gn(h);if(vm(d)){const p=i[h],g=o[d]=ae(p)||ge(p)?{type:p}:yt({},p),S=g.type;let P=!1,N=!0;if(ae(S))for(let L=0;L<S.length;++L){const U=S[L],B=ge(U)&&U.name;if(B==="Boolean"){P=!0;break}else B==="String"&&(N=!1)}else P=ge(S)&&S.name==="Boolean";g[0]=P,g[1]=N,(P||Le(g,"default"))&&a.push(d)}}const u=[o,a];return $e(t)&&s.set(t,u),u}function vm(t){return t[0]!=="$"&&!Ro(t)}const Ld=t=>t==="_"||t==="_ctx"||t==="$stable",Fd=t=>ae(t)?t.map(Mn):[Mn(t)],$w=(t,e,n)=>{if(e._n)return e;const s=cn((...r)=>Fd(e(...r)),n);return s._c=!1,s},k2=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ld(r))continue;const i=t[r];if(ge(i))e[r]=$w(r,i,s);else if(i!=null){const o=Fd(i);e[r]=()=>o}}},N2=(t,e)=>{const n=Fd(e);t.slots.default=()=>n},x2=(t,e,n)=>{for(const s in e)(n||!Ld(s))&&(t[s]=e[s])},Bw=(t,e,n)=>{const s=t.slots=S2();if(t.vnode.shapeFlag&32){const r=e._;r?(x2(s,e,n),n&&P_(s,"_",r,!0)):k2(e,s)}else e&&N2(t,e)},jw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=qe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:x2(r,e,n):(i=!e.$stable,k2(e,r)),o=e}else e&&(N2(t,e),o={default:1});if(i)for(const a in r)!Ld(a)&&o[a]==null&&delete r[a]},rn=s0;function qw(t){return Ww(t)}function Ww(t,e){const n=Rc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Vn,insertStaticContent:S}=t,P=(I,b,R,D=null,V=null,M=null,X=void 0,W=null,j=!!b.dynamicChildren)=>{if(I===b)return;I&&!Sr(I,b)&&(D=O(I),Je(I,V,M,!0),I=null),b.patchFlag===-2&&(j=!1,b.dynamicChildren=null);const{type:q,ref:ce,shapeFlag:J}=b;switch(q){case Mc:N(I,b,R,D);break;case Bt:L(I,b,R,D);break;case gl:I==null&&U(b,R,D,X);break;case nt:E(I,b,R,D,V,M,X,W,j);break;default:J&1?te(I,b,R,D,V,M,X,W,j):J&6?w(I,b,R,D,V,M,X,W,j):(J&64||J&128)&&q.process(I,b,R,D,V,M,X,W,j,Z)}ce!=null&&V?No(ce,I&&I.ref,M,b||I,!b):ce==null&&I&&I.ref!=null&&No(I.ref,null,M,I,!0)},N=(I,b,R,D)=>{if(I==null)s(b.el=a(b.children),R,D);else{const V=b.el=I.el;b.children!==I.children&&u(V,b.children)}},L=(I,b,R,D)=>{I==null?s(b.el=c(b.children||""),R,D):b.el=I.el},U=(I,b,R,D)=>{[I.el,I.anchor]=S(I.children,b,R,D,I.el,I.anchor)},B=({el:I,anchor:b},R,D)=>{let V;for(;I&&I!==b;)V=p(I),s(I,R,D),I=V;s(b,R,D)},G=({el:I,anchor:b})=>{let R;for(;I&&I!==b;)R=p(I),r(I),I=R;r(b)},te=(I,b,R,D,V,M,X,W,j)=>{b.type==="svg"?X="svg":b.type==="math"&&(X="mathml"),I==null?ne(b,R,D,V,M,X,W,j):y(I,b,V,M,X,W,j)},ne=(I,b,R,D,V,M,X,W)=>{let j,q;const{props:ce,shapeFlag:J,transition:ie,dirs:he}=I;if(j=I.el=o(I.type,M,ce&&ce.is,ce),J&8?h(j,I.children):J&16&&v(I.children,j,null,D,V,ju(I,M),X,W),he&&vr(I,null,D,"created"),A(j,I,I.scopeId,X,D),ce){for(const Ue in ce)Ue!=="value"&&!Ro(Ue)&&i(j,Ue,null,ce[Ue],M,D);"value"in ce&&i(j,"value",null,ce.value,M),(q=ce.onVnodeBeforeMount)&&Nn(q,D,I)}he&&vr(I,null,D,"beforeMount");const Se=Hw(V,ie);Se&&ie.beforeEnter(j),s(j,b,R),((q=ce&&ce.onVnodeMounted)||Se||he)&&rn(()=>{q&&Nn(q,D,I),Se&&ie.enter(j),he&&vr(I,null,D,"mounted")},V)},A=(I,b,R,D,V)=>{if(R&&g(I,R),D)for(let M=0;M<D.length;M++)g(I,D[M]);if(V){let M=V.subTree;if(b===M||F2(M.type)&&(M.ssContent===b||M.ssFallback===b)){const X=V.vnode;A(I,X,X.scopeId,X.slotScopeIds,V.parent)}}},v=(I,b,R,D,V,M,X,W,j=0)=>{for(let q=j;q<I.length;q++){const ce=I[q]=W?Ds(I[q]):Mn(I[q]);P(null,ce,b,R,D,V,M,X,W)}},y=(I,b,R,D,V,M,X)=>{const W=b.el=I.el;let{patchFlag:j,dynamicChildren:q,dirs:ce}=b;j|=I.patchFlag&16;const J=I.props||qe,ie=b.props||qe;let he;if(R&&Er(R,!1),(he=ie.onVnodeBeforeUpdate)&&Nn(he,R,b,I),ce&&vr(b,I,R,"beforeUpdate"),R&&Er(R,!0),(J.innerHTML&&ie.innerHTML==null||J.textContent&&ie.textContent==null)&&h(W,""),q?C(I.dynamicChildren,q,W,R,D,ju(b,V),M):X||ye(I,b,W,null,R,D,ju(b,V),M,!1),j>0){if(j&16)T(W,J,ie,R,V);else if(j&2&&J.class!==ie.class&&i(W,"class",null,ie.class,V),j&4&&i(W,"style",J.style,ie.style,V),j&8){const Se=b.dynamicProps;for(let Ue=0;Ue<Se.length;Ue++){const Oe=Se[Ue],xt=J[Oe],Ot=ie[Oe];(Ot!==xt||Oe==="value")&&i(W,Oe,xt,Ot,V,R)}}j&1&&I.children!==b.children&&h(W,b.children)}else!X&&q==null&&T(W,J,ie,R,V);((he=ie.onVnodeUpdated)||ce)&&rn(()=>{he&&Nn(he,R,b,I),ce&&vr(b,I,R,"updated")},D)},C=(I,b,R,D,V,M,X)=>{for(let W=0;W<b.length;W++){const j=I[W],q=b[W],ce=j.el&&(j.type===nt||!Sr(j,q)||j.shapeFlag&198)?d(j.el):R;P(j,q,ce,null,D,V,M,X,!0)}},T=(I,b,R,D,V)=>{if(b!==R){if(b!==qe)for(const M in b)!Ro(M)&&!(M in R)&&i(I,M,b[M],null,V,D);for(const M in R){if(Ro(M))continue;const X=R[M],W=b[M];X!==W&&M!=="value"&&i(I,M,W,X,V,D)}"value"in R&&i(I,"value",b.value,R.value,V)}},E=(I,b,R,D,V,M,X,W,j)=>{const q=b.el=I?I.el:a(""),ce=b.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:he}=b;he&&(W=W?W.concat(he):he),I==null?(s(q,R,D),s(ce,R,D),v(b.children||[],R,ce,V,M,X,W,j)):J>0&&J&64&&ie&&I.dynamicChildren?(C(I.dynamicChildren,ie,R,V,M,X,W),(b.key!=null||V&&b===V.subTree)&&O2(I,b,!0)):ye(I,b,R,ce,V,M,X,W,j)},w=(I,b,R,D,V,M,X,W,j)=>{b.slotScopeIds=W,I==null?b.shapeFlag&512?V.ctx.activate(b,R,D,X,j):Y(b,R,D,V,M,X,j):Ee(I,b,j)},Y=(I,b,R,D,V,M,X)=>{const W=I.component=h0(I,D,V);if(xc(I)&&(W.ctx.renderer=Z),d0(W,!1,X),W.asyncDep){if(V&&V.registerDep(W,ve,X),!I.el){const j=W.subTree=De(Bt);L(null,j,b,R),I.placeholder=j.el}}else ve(W,I,b,R,V,M,X)},Ee=(I,b,R)=>{const D=b.component=I.component;if(t0(I,b,R))if(D.asyncDep&&!D.asyncResolved){le(D,b,R);return}else D.next=b,D.update();else b.el=I.el,D.vnode=b},ve=(I,b,R,D,V,M,X)=>{const W=()=>{if(I.isMounted){let{next:J,bu:ie,u:he,parent:Se,vnode:Ue}=I;{const nn=D2(I);if(nn){J&&(J.el=Ue.el,le(I,J,X)),nn.asyncDep.then(()=>{I.isUnmounted||W()});return}}let Oe=J,xt;Er(I,!1),J?(J.el=Ue.el,le(I,J,X)):J=Ue,ie&&pl(ie),(xt=J.props&&J.props.onVnodeBeforeUpdate)&&Nn(xt,Se,J,Ue),Er(I,!0);const Ot=wm(I),tn=I.subTree;I.subTree=Ot,P(tn,Ot,d(tn.el),O(tn),I,V,M),J.el=Ot.el,Oe===null&&n0(I,Ot.el),he&&rn(he,V),(xt=J.props&&J.props.onVnodeUpdated)&&rn(()=>Nn(xt,Se,J,Ue),V)}else{let J;const{el:ie,props:he}=b,{bm:Se,m:Ue,parent:Oe,root:xt,type:Ot}=I,tn=pi(b);Er(I,!1),Se&&pl(Se),!tn&&(J=he&&he.onVnodeBeforeMount)&&Nn(J,Oe,b),Er(I,!0);{xt.ce&&xt.ce._def.shadowRoot!==!1&&xt.ce._injectChildStyle(Ot);const nn=I.subTree=wm(I);P(null,nn,R,D,I,V,M),b.el=nn.el}if(Ue&&rn(Ue,V),!tn&&(J=he&&he.onVnodeMounted)){const nn=b;rn(()=>Nn(J,Oe,nn),V)}(b.shapeFlag&256||Oe&&pi(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&I.a&&rn(I.a,V),I.isMounted=!0,b=R=D=null}};I.scope.on();const j=I.effect=new V_(W);I.scope.off();const q=I.update=j.run.bind(j),ce=I.job=j.runIfDirty.bind(j);ce.i=I,ce.id=I.uid,j.scheduler=()=>Dd(ce),Er(I,!0),q()},le=(I,b,R)=>{b.component=I;const D=I.vnode.props;I.vnode=b,I.next=null,Fw(I,b.props,D,R),jw(I,b.children,R),cs(),hm(I),us()},ye=(I,b,R,D,V,M,X,W,j=!1)=>{const q=I&&I.children,ce=I?I.shapeFlag:0,J=b.children,{patchFlag:ie,shapeFlag:he}=b;if(ie>0){if(ie&128){Wt(q,J,R,D,V,M,X,W,j);return}else if(ie&256){et(q,J,R,D,V,M,X,W,j);return}}he&8?(ce&16&&Be(q,V,M),J!==q&&h(R,J)):ce&16?he&16?Wt(q,J,R,D,V,M,X,W,j):Be(q,V,M,!0):(ce&8&&h(R,""),he&16&&v(J,R,D,V,M,X,W,j))},et=(I,b,R,D,V,M,X,W,j)=>{I=I||ui,b=b||ui;const q=I.length,ce=b.length,J=Math.min(q,ce);let ie;for(ie=0;ie<J;ie++){const he=b[ie]=j?Ds(b[ie]):Mn(b[ie]);P(I[ie],he,R,null,V,M,X,W,j)}q>ce?Be(I,V,M,!0,!1,J):v(b,R,D,V,M,X,W,j,J)},Wt=(I,b,R,D,V,M,X,W,j)=>{let q=0;const ce=b.length;let J=I.length-1,ie=ce-1;for(;q<=J&&q<=ie;){const he=I[q],Se=b[q]=j?Ds(b[q]):Mn(b[q]);if(Sr(he,Se))P(he,Se,R,null,V,M,X,W,j);else break;q++}for(;q<=J&&q<=ie;){const he=I[J],Se=b[ie]=j?Ds(b[ie]):Mn(b[ie]);if(Sr(he,Se))P(he,Se,R,null,V,M,X,W,j);else break;J--,ie--}if(q>J){if(q<=ie){const he=ie+1,Se=he<ce?b[he].el:D;for(;q<=ie;)P(null,b[q]=j?Ds(b[q]):Mn(b[q]),R,Se,V,M,X,W,j),q++}}else if(q>ie)for(;q<=J;)Je(I[q],V,M,!0),q++;else{const he=q,Se=q,Ue=new Map;for(q=Se;q<=ie;q++){const St=b[q]=j?Ds(b[q]):Mn(b[q]);St.key!=null&&Ue.set(St.key,q)}let Oe,xt=0;const Ot=ie-Se+1;let tn=!1,nn=0;const yn=new Array(Ot);for(q=0;q<Ot;q++)yn[q]=0;for(q=he;q<=J;q++){const St=I[q];if(xt>=Ot){Je(St,V,M,!0);continue}let vt;if(St.key!=null)vt=Ue.get(St.key);else for(Oe=Se;Oe<=ie;Oe++)if(yn[Oe-Se]===0&&Sr(St,b[Oe])){vt=Oe;break}vt===void 0?Je(St,V,M,!0):(yn[vt-Se]=q+1,vt>=nn?nn=vt:tn=!0,P(St,b[vt],R,null,V,M,X,W,j),xt++)}const Qr=tn?zw(yn):ui;for(Oe=Qr.length-1,q=Ot-1;q>=0;q--){const St=Se+q,vt=b[St],Yi=b[St+1],pr=St+1<ce?Yi.el||Yi.placeholder:D;yn[q]===0?P(null,vt,R,pr,V,M,X,W,j):tn&&(Oe<0||q!==Qr[Oe]?Ct(vt,R,pr,2):Oe--)}}},Ct=(I,b,R,D,V=null)=>{const{el:M,type:X,transition:W,children:j,shapeFlag:q}=I;if(q&6){Ct(I.component.subTree,b,R,D);return}if(q&128){I.suspense.move(b,R,D);return}if(q&64){X.move(I,b,R,Z);return}if(X===nt){s(M,b,R);for(let J=0;J<j.length;J++)Ct(j[J],b,R,D);s(I.anchor,b,R);return}if(X===gl){B(I,b,R);return}if(D!==2&&q&1&&W)if(D===0)W.beforeEnter(M),s(M,b,R),rn(()=>W.enter(M),V);else{const{leave:J,delayLeave:ie,afterLeave:he}=W,Se=()=>{I.ctx.isUnmounted?r(M):s(M,b,R)},Ue=()=>{M._isLeaving&&M[Zn](!0),J(M,()=>{Se(),he&&he()})};ie?ie(M,Se,Ue):Ue()}else s(M,b,R)},Je=(I,b,R,D=!1,V=!1)=>{const{type:M,props:X,ref:W,children:j,dynamicChildren:q,shapeFlag:ce,patchFlag:J,dirs:ie,cacheIndex:he}=I;if(J===-2&&(V=!1),W!=null&&(cs(),No(W,null,R,I,!0),us()),he!=null&&(b.renderCache[he]=void 0),ce&256){b.ctx.deactivate(I);return}const Se=ce&1&&ie,Ue=!pi(I);let Oe;if(Ue&&(Oe=X&&X.onVnodeBeforeUnmount)&&Nn(Oe,b,I),ce&6)ht(I.component,R,D);else{if(ce&128){I.suspense.unmount(R,D);return}Se&&vr(I,null,b,"beforeUnmount"),ce&64?I.type.remove(I,b,R,Z,D):q&&!q.hasOnce&&(M!==nt||J>0&&J&64)?Be(q,b,R,!1,!0):(M===nt&&J&384||!V&&ce&16)&&Be(j,b,R),D&&at(I)}(Ue&&(Oe=X&&X.onVnodeUnmounted)||Se)&&rn(()=>{Oe&&Nn(Oe,b,I),Se&&vr(I,null,b,"unmounted")},R)},at=I=>{const{type:b,el:R,anchor:D,transition:V}=I;if(b===nt){Ye(R,D);return}if(b===gl){G(I);return}const M=()=>{r(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(I.shapeFlag&1&&V&&!V.persisted){const{leave:X,delayLeave:W}=V,j=()=>X(R,M);W?W(I.el,M,j):j()}else M()},Ye=(I,b)=>{let R;for(;I!==b;)R=p(I),r(I),I=R;r(b)},ht=(I,b,R)=>{const{bum:D,scope:V,job:M,subTree:X,um:W,m:j,a:q}=I;Em(j),Em(q),D&&pl(D),V.stop(),M&&(M.flags|=8,Je(X,I,b,R)),W&&rn(W,b),rn(()=>{I.isUnmounted=!0},b)},Be=(I,b,R,D=!1,V=!1,M=0)=>{for(let X=M;X<I.length;X++)Je(I[X],b,R,D,V)},O=I=>{if(I.shapeFlag&6)return O(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=p(I.anchor||I.el),R=b&&b[gw];return R?p(R):b};let H=!1;const z=(I,b,R)=>{I==null?b._vnode&&Je(b._vnode,null,null,!0):P(b._vnode||null,I,b,null,null,null,R),b._vnode=I,H||(H=!0,hm(),t2(),H=!1)},Z={p:P,um:Je,m:Ct,r:at,mt:Y,mc:v,pc:ye,pbc:C,n:O,o:t};return{render:z,hydrate:void 0,createApp:Mw(z)}}function ju({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function O2(t,e,n=!1){const s=t.children,r=e.children;if(ae(s)&&ae(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ds(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&O2(o,a)),a.type===Mc&&a.patchFlag!==-1&&(a.el=o.el),a.type===Bt&&!a.el&&(a.el=o.el)}}function zw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function D2(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:D2(e)}function Em(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Gw=Symbol.for("v-scx"),Kw=()=>Ln(Gw);function Oo(t,e,n){return M2(t,e,n)}function M2(t,e,n=qe){const{immediate:s,deep:r,flush:i,once:o}=n,a=yt({},n),c=e&&s||!e&&i!=="post";let u;if(na){if(i==="sync"){const g=Kw();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Vn,g.resume=Vn,g.pause=Vn,g}}const h=jt;a.call=(g,S,P)=>Sn(g,h,S,P);let d=!1;i==="post"?a.scheduler=g=>{rn(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,S)=>{S?g():Dd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=dw(t,e,a);return na&&(u?u.push(p):c&&p()),p}function Qw(t,e,n){const s=this.proxy,r=rt(t)?t.includes(".")?V2(s,t):()=>s[t]:t.bind(s,s);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Sa(this),a=M2(r,i.bind(s),n);return o(),a}function V2(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Yw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gn(e)}Modifiers`]||t[`${lr(e)}Modifiers`];function Xw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||qe;let r=n;const i=e.startsWith("update:"),o=i&&Yw(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>rt(h)?h.trim():h)),o.number&&(r=n.map(Nl)));let a,c=s[a=Du(e)]||s[a=Du(gn(e))];!c&&i&&(c=s[a=Du(lr(e))]),c&&Sn(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(u,t,6,r)}}const Jw=new WeakMap;function L2(t,e,n=!1){const s=n?Jw:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ge(t)){const c=u=>{const h=L2(u,e,!0);h&&(a=!0,yt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?($e(t)&&s.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):yt(o,i),$e(t)&&s.set(t,o),o)}function Dc(t,e){return!t||!Cc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,lr(e))||Le(t,e))}function wm(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:S,inheritAttrs:P}=t,N=Vl(t);let L,U;try{if(n.shapeFlag&4){const G=r||s,te=G;L=Mn(u.call(te,G,h,d,g,p,S)),U=a}else{const G=e;L=Mn(G.length>1?G(d,{attrs:a,slots:o,emit:c}):G(d,null)),U=e.props?a:Zw(a)}}catch(G){Do.length=0,kc(G,t,1),L=De(Bt)}let B=L;if(U&&P!==!1){const G=Object.keys(U),{shapeFlag:te}=B;G.length&&te&7&&(i&&G.some(wd)&&(U=e0(U,i)),B=Ys(B,U,!1,!0))}return n.dirs&&(B=Ys(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Dr(B,n.transition),L=B,Vl(N),L}const Zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cc(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const s in t)(!wd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function t0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Tm(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==s[p]&&!Dc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Tm(s,o,u):!0:!!o;return!1}function Tm(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Dc(n,i))return!0}return!1}function n0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const F2=t=>t.__isSuspense;function s0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):mw(t)}const nt=Symbol.for("v-fgt"),Mc=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),gl=Symbol.for("v-stc"),Do=[];let an=null;function re(t=!1){Do.push(an=t?null:[])}function r0(){Do.pop(),an=Do[Do.length-1]||null}let ea=1;function Ul(t,e=!1){ea+=t,t<0&&an&&e&&(an.hasOnce=!0)}function U2(t){return t.dynamicChildren=ea>0?an||ui:null,r0(),ea>0&&an&&an.push(t),t}function Te(t,e,n,s,r,i){return U2(oe(t,e,n,s,r,i,!0))}function Kt(t,e,n,s,r){return U2(De(t,e,n,s,r,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function Sr(t,e){return t.type===e.type&&t.key===e.key}const $2=({key:t})=>t??null,_l=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||ot(t)||ge(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,s=0,r=null,i=t===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$2(e),ref:e&&_l(e),scopeId:s2,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kt};return a?($d(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),ea>0&&!o&&an&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&an.push(c),c}const De=i0;function i0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===y2)&&(t=Bt),ta(t)){const a=Ys(t,e,!0);return n&&$d(a,n),ea>0&&!i&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag=-2,a}if(_0(t)&&(t=t.__vccOpts),e){e=o0(e);let{class:a,style:c}=e;a&&!rt(a)&&(e.class=ls(a)),$e(c)&&(xd(c)&&!ae(c)&&(c=yt({},c)),e.style=bd(c))}const o=rt(t)?1:F2(t)?128:r2(t)?64:$e(t)?4:ge(t)?2:0;return oe(t,e,n,s,r,o,i,!0)}function o0(t){return t?xd(t)||A2(t)?yt({},t):t:null}function Ys(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?l0(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&$2(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(_l(e)):[i,_l(e)]:_l(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ys(t.ssContent),ssFallback:t.ssFallback&&Ys(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Dr(h,c.clone(h)),h}function Ud(t=" ",e=0){return De(Mc,null,t,e)}function a0(t,e){const n=De(gl,null,t);return n.staticCount=e,n}function Fn(t="",e=!1){return e?(re(),Kt(Bt,null,t)):De(Bt,null,t)}function Mn(t){return t==null||typeof t=="boolean"?De(Bt):ae(t)?De(nt,null,t.slice()):ta(t)?Ds(t):De(Mc,null,String(t))}function Ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ys(t)}function $d(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),$d(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!A2(e)?e._ctx=kt:r===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[Ud(e)]):n=8);t.children=e,t.shapeFlag|=n}function l0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ls([e.class,s.class]));else if(r==="style")e.style=bd([e.style,s.style]);else if(Cc(r)){const i=e[r],o=s[r];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Nn(t,e,n,s=null){Sn(t,e,7,[n,s])}const c0=b2();let u0=0;function h0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||c0,i={uid:u0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new O_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P2(s,r),emitsOptions:L2(s,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:s.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xw.bind(null,i),t.ce&&t.ce(i),i}let jt=null;const Vc=()=>jt||kt;let $l,Ch;{const t=Rc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};$l=e("__VUE_INSTANCE_SETTERS__",n=>jt=n),Ch=e("__VUE_SSR_SETTERS__",n=>na=n)}const Sa=t=>{const e=jt;return $l(t),t.scope.on(),()=>{t.scope.off(),$l(e)}},Im=()=>{jt&&jt.scope.off(),$l(null)};function B2(t){return t.vnode.shapeFlag&4}let na=!1;function d0(t,e=!1,n=!1){e&&Ch(e);const{props:s,children:r}=t.vnode,i=B2(t);Lw(t,s,i,e),Bw(t,r,n||e);const o=i?f0(t,e):void 0;return e&&Ch(!1),o}function f0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rw);const{setup:s}=n;if(s){cs();const r=t.setupContext=s.length>1?m0(t):null,i=Sa(t),o=Ca(s,t,0,[t.props,r]),a=S_(o);if(us(),i(),(a||t.sp)&&!pi(t)&&h2(t),a){if(o.then(Im,Im),e)return o.then(c=>{bm(t,c)}).catch(c=>{kc(c,t,0)});t.asyncDep=o}else bm(t,o)}else j2(t)}function bm(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=J_(e)),j2(t)}function j2(t,e,n){const s=t.type;t.render||(t.render=s.render||Vn);{const r=Sa(t);cs();try{Pw(t)}finally{us(),r()}}}const p0={get(t,e){return Lt(t,"get",""),t[e]}};function m0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,p0),slots:t.slots,emit:t.emit,expose:e}}function Lc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(J_(Ti(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xo)return xo[n](t)},has(e,n){return n in e||n in xo}})):t.proxy}function g0(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function _0(t){return ge(t)&&"__vccOpts"in t}const dn=(t,e)=>uw(t,e,na);function Bd(t,e,n){try{Ul(-1);const s=arguments.length;return s===2?$e(e)&&!ae(e)?ta(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ta(n)&&(n=[n]),De(t,e,n))}finally{Ul(1)}}const y0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sh;const Cm=typeof window<"u"&&window.trustedTypes;if(Cm)try{Sh=Cm.createPolicy("vue",{createHTML:t=>t})}catch{}const q2=Sh?t=>Sh.createHTML(t):t=>t,v0="http://www.w3.org/2000/svg",E0="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Sm=Jn&&Jn.createElement("template"),w0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Jn.createElementNS(v0,t):e==="mathml"?Jn.createElementNS(E0,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Sm.innerHTML=q2(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Sm.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rs="transition",fo="animation",Ii=Symbol("_vtc"),W2={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},H2=yt({},o2,W2),T0=t=>(t.displayName="Transition",t.props=H2,t),Aa=T0((t,{slots:e})=>Bd(yw,z2(t),e)),wr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Am=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function z2(t){const e={};for(const E in t)E in W2||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,S=I0(r),P=S&&S[0],N=S&&S[1],{onBeforeEnter:L,onEnter:U,onEnterCancelled:B,onLeave:G,onLeaveCancelled:te,onBeforeAppear:ne=L,onAppear:A=U,onAppearCancelled:v=B}=e,y=(E,w,Y,Ee)=>{E._enterCancelled=Ee,Ns(E,w?h:a),Ns(E,w?u:o),Y&&Y()},C=(E,w)=>{E._isLeaving=!1,Ns(E,d),Ns(E,g),Ns(E,p),w&&w()},T=E=>(w,Y)=>{const Ee=E?A:U,ve=()=>y(w,E,Y);wr(Ee,[w,ve]),Rm(()=>{Ns(w,E?c:i),xn(w,E?h:a),Am(Ee)||Pm(w,s,P,ve)})};return yt(e,{onBeforeEnter(E){wr(L,[E]),xn(E,i),xn(E,o)},onBeforeAppear(E){wr(ne,[E]),xn(E,c),xn(E,u)},onEnter:T(!1),onAppear:T(!0),onLeave(E,w){E._isLeaving=!0;const Y=()=>C(E,w);xn(E,d),E._enterCancelled?(xn(E,p),Ah(E)):(Ah(E),xn(E,p)),Rm(()=>{E._isLeaving&&(Ns(E,d),xn(E,g),Am(G)||Pm(E,s,N,Y))}),wr(G,[E,Y])},onEnterCancelled(E){y(E,!1,void 0,!0),wr(B,[E])},onAppearCancelled(E){y(E,!0,void 0,!0),wr(v,[E])},onLeaveCancelled(E){C(E),wr(te,[E])}})}function I0(t){if(t==null)return null;if($e(t))return[qu(t.enter),qu(t.leave)];{const e=qu(t);return[e,e]}}function qu(t){return P4(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ii]||(t[Ii]=new Set)).add(e)}function Ns(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Ii];n&&(n.delete(e),n.size||(t[Ii]=void 0))}function Rm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b0=0;function Pm(t,e,n,s){const r=t._endId=++b0,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=G2(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},a+1),t.addEventListener(u,p)}function G2(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${Rs}Delay`),i=s(`${Rs}Duration`),o=km(r,i),a=s(`${fo}Delay`),c=s(`${fo}Duration`),u=km(a,c);let h=null,d=0,p=0;e===Rs?o>0&&(h=Rs,d=o,p=i.length):e===fo?u>0&&(h=fo,d=u,p=c.length):(d=Math.max(o,u),h=d>0?o>u?Rs:fo:null,p=h?h===Rs?i.length:c.length:0);const g=h===Rs&&/\b(?:transform|all)(?:,|$)/.test(s(`${Rs}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function km(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Nm(n)+Nm(t[s])))}function Nm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ah(t){return(t?t.ownerDocument:document).body.offsetHeight}function C0(t,e,n){const s=t[Ii];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bl=Symbol("_vod"),K2=Symbol("_vsh"),Wu={name:"show",beforeMount(t,{value:e},{transition:n}){t[Bl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):po(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),po(t,!0),s.enter(t)):s.leave(t,()=>{po(t,!1)}):po(t,e))},beforeUnmount(t,{value:e}){po(t,e)}};function po(t,e){t.style.display=e?t[Bl]:"none",t[K2]=!e}const S0=Symbol(""),A0=/(?:^|;)\s*display\s*:/;function R0(t,e,n){const s=t.style,r=rt(n);let i=!1;if(n&&!r){if(e)if(rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yl(s,a,"")}else for(const o in e)n[o]==null&&yl(s,o,"");for(const o in n)o==="display"&&(i=!0),yl(s,o,n[o])}else if(r){if(e!==n){const o=s[S0];o&&(n+=";"+o),s.cssText=n,i=A0.test(n)}}else e&&t.removeAttribute("style");Bl in t&&(t[Bl]=i?s.display:"",t[K2]&&(s.display="none"))}const xm=/\s*!important$/;function yl(t,e,n){if(ae(n))n.forEach(s=>yl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=P0(t,e);xm.test(n)?t.setProperty(lr(s),n.replace(xm,""),"important"):t[s]=n}}const Om=["Webkit","Moz","ms"],Hu={};function P0(t,e){const n=Hu[e];if(n)return n;let s=gn(e);if(s!=="filter"&&s in t)return Hu[e]=s;s=Ac(s);for(let r=0;r<Om.length;r++){const i=Om[r]+s;if(i in t)return Hu[e]=i}return e}const Dm="http://www.w3.org/1999/xlink";function Mm(t,e,n,s,r,i=M4(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dm,e.slice(6,e.length)):t.setAttributeNS(Dm,e,n):n==null||i&&!k_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function Vm(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?q2(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=k_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ns(t,e,n,s){t.addEventListener(e,n,s)}function k0(t,e,n,s){t.removeEventListener(e,n,s)}const Lm=Symbol("_vei");function N0(t,e,n,s,r=null){const i=t[Lm]||(t[Lm]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=x0(e);if(s){const u=i[e]=M0(s,r);ns(t,a,u,c)}else o&&(k0(t,a,o,c),i[e]=void 0)}}const Fm=/(?:Once|Passive|Capture)$/;function x0(t){let e;if(Fm.test(t)){e={};let s;for(;s=t.match(Fm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let zu=0;const O0=Promise.resolve(),D0=()=>zu||(O0.then(()=>zu=0),zu=Date.now());function M0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Sn(V0(s,n.value),e,5,[s])};return n.value=t,n.attached=D0(),n}function V0(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Um=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,L0=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?C0(t,s,o):e==="style"?R0(t,n,s):Cc(e)?wd(e)||N0(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(t,e,s,o))?(Vm(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mm(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(s))?Vm(t,gn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Mm(t,e,s,o))};function F0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Um(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Um(e)&&rt(n)?!1:e in t}const Q2=new WeakMap,Y2=new WeakMap,jl=Symbol("_moveCb"),$m=Symbol("_enterCb"),U0=t=>(delete t.props.mode,t),$0=U0({name:"TransitionGroup",props:yt({},H2,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Vc(),s=i2();let r,i;return p2(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!H0(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(j0),r.forEach(q0);const a=r.filter(W0);Ah(n.vnode.el),a.forEach(c=>{const u=c.el,h=u.style;xn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const d=u[jl]=p=>{p&&p.target!==u||(!p||p.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[jl]=null,Ns(u,o))};u.addEventListener("transitionend",d)}),r=[]}),()=>{const o=xe(t),a=z2(o);let c=o.tag||nt;if(r=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(r.push(h),Dr(h,Zo(h,a,s,n)),Q2.set(h,h.el.getBoundingClientRect()))}i=e.default?Md(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Dr(h,Zo(h,a,s,n))}return De(c,null,i)}}}),B0=$0;function j0(t){const e=t.el;e[jl]&&e[jl](),e[$m]&&e[$m]()}function q0(t){Y2.set(t,t.el.getBoundingClientRect())}function W0(t){const e=Q2.get(t),n=Y2.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function H0(t,e,n){const s=t.cloneNode(),r=t[Ii];r&&r.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=G2(s);return i.removeChild(s),o}const Xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>pl(e,n):e};function z0(t){t.target.composing=!0}function Bm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mn=Symbol("_assign"),jm={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[mn]=Xs(r);const i=s||r.props&&r.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Nl(a)),t[mn](a)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",z0),ns(t,"compositionend",Bm),ns(t,"change",Bm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[mn]=Xs(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Nl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},G0={deep:!0,created(t,e,n){t[mn]=Xs(n),ns(t,"change",()=>{const s=t._modelValue,r=bi(t),i=t.checked,o=t[mn];if(ae(s)){const a=Cd(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Li(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(X2(t,i))})},mounted:qm,beforeUpdate(t,e,n){t[mn]=Xs(n),qm(t,e,n)}};function qm(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(ae(e))r=Cd(e,s.props.value)>-1;else if(Li(e))r=e.has(s.props.value);else{if(e===n)return;r=Or(e,X2(t,!0))}t.checked!==r&&(t.checked=r)}const K0={created(t,{value:e},n){t.checked=Or(e,n.props.value),t[mn]=Xs(n),ns(t,"change",()=>{t[mn](bi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[mn]=Xs(s),e!==n&&(t.checked=Or(e,s.props.value))}},Q0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Li(e);ns(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Nl(bi(o)):bi(o));t[mn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Nc(()=>{t._assigning=!1})}),t[mn]=Xs(s)},mounted(t,{value:e}){Wm(t,e)},beforeUpdate(t,e,n){t[mn]=Xs(n)},updated(t,{value:e}){t._assigning||Wm(t,e)}};function Wm(t,e){const n=t.multiple,s=ae(e);if(!(n&&!s&&!Li(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=bi(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Cd(e,a)>-1}else o.selected=e.has(a);else if(Or(bi(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bi(t){return"_value"in t?t._value:t.value}function X2(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Uk={created(t,e,n){sl(t,e,n,null,"created")},mounted(t,e,n){sl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){sl(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){sl(t,e,n,s,"updated")}};function Y0(t,e){switch(t){case"SELECT":return Q0;case"TEXTAREA":return jm;default:switch(e){case"checkbox":return G0;case"radio":return K0;default:return jm}}}function sl(t,e,n,s,r){const o=Y0(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const X0=["ctrl","shift","alt","meta"],J0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X0.some(n=>t[`${n}Key`]&&!e.includes(n))},Z0=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=J0[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},eT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$k=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=(r=>{if(!("key"in r))return;const i=lr(r.key);if(e.some(o=>o===i||eT[o]===i))return t(r)}))},tT=yt({patchProp:L0},w0);let Hm;function nT(){return Hm||(Hm=qw(tT))}const sT=((...t)=>{const e=nT().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=iT(s);if(!r)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,rT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function rT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function iT(t){return rt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let J2;const Fc=t=>J2=t,Z2=Symbol();function Rh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Mo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Mo||(Mo={}));function oT(){const t=D_(!0),e=t.run(()=>Od({}));let n=[],s=[];const r=Ti({install(i){Fc(r),r._a=i,i.provide(Z2,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ey=()=>{};function zm(t,e,n,s=ey){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&M_()&&L4(r),r}function ei(t,...e){t.slice().forEach(n=>{n(...e)})}const aT=t=>t(),Gm=Symbol(),Gu=Symbol();function Ph(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rh(r)&&Rh(s)&&t.hasOwnProperty(n)&&!ot(s)&&!js(s)?t[n]=Ph(r,s):t[n]=s}return t}const lT=Symbol();function cT(t){return!Rh(t)||!Object.prototype.hasOwnProperty.call(t,lT)}const{assign:xs}=Object;function uT(t){return!!(ot(t)&&t.effect)}function hT(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const h=ow(n.state.value[t]);return xs(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Ti(dn(()=>{Fc(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return c=ty(t,u,e,n,s,!0),c}function ty(t,e,n={},s,r,i){let o;const a=xs({actions:{}},n),c={deep:!0};let u,h,d=[],p=[],g;const S=s.state.value[t];!i&&!S&&(s.state.value[t]={}),Od({});let P;function N(v){let y;u=h=!1,typeof v=="function"?(v(s.state.value[t]),y={type:Mo.patchFunction,storeId:t,events:g}):(Ph(s.state.value[t],v),y={type:Mo.patchObject,payload:v,storeId:t,events:g});const C=P=Symbol();Nc().then(()=>{P===C&&(u=!0)}),h=!0,ei(d,y,s.state.value[t])}const L=i?function(){const{state:y}=n,C=y?y():{};this.$patch(T=>{xs(T,C)})}:ey;function U(){o.stop(),d=[],p=[],s._s.delete(t)}const B=(v,y="")=>{if(Gm in v)return v[Gu]=y,v;const C=function(){Fc(s);const T=Array.from(arguments),E=[],w=[];function Y(le){E.push(le)}function Ee(le){w.push(le)}ei(p,{args:T,name:C[Gu],store:te,after:Y,onError:Ee});let ve;try{ve=v.apply(this&&this.$id===t?this:te,T)}catch(le){throw ei(w,le),le}return ve instanceof Promise?ve.then(le=>(ei(E,le),le)).catch(le=>(ei(w,le),Promise.reject(le))):(ei(E,ve),ve)};return C[Gm]=!0,C[Gu]=y,C},G={_p:s,$id:t,$onAction:zm.bind(null,p),$patch:N,$reset:L,$subscribe(v,y={}){const C=zm(d,v,y.detached,()=>T()),T=o.run(()=>Oo(()=>s.state.value[t],E=>{(y.flush==="sync"?h:u)&&v({storeId:t,type:Mo.direct,events:g},E)},xs({},c,y)));return C},$dispose:U},te=ba(G);s._s.set(t,te);const A=(s._a&&s._a.runWithContext||aT)(()=>s._e.run(()=>(o=D_()).run(()=>e({action:B}))));for(const v in A){const y=A[v];if(ot(y)&&!uT(y)||js(y))i||(S&&cT(y)&&(ot(y)?y.value=S[v]:Ph(y,S[v])),s.state.value[t][v]=y);else if(typeof y=="function"){const C=B(y,v);A[v]=C,a.actions[v]=y}}return xs(te,A),xs(xe(te),A),Object.defineProperty(te,"$state",{get:()=>s.state.value[t],set:v=>{N(y=>{xs(y,v)})}}),s._p.forEach(v=>{xs(te,o.run(()=>v({store:te,app:s._a,pinia:s,options:a})))}),S&&i&&n.hydrate&&n.hydrate(te.$state,S),u=!0,h=!0,te}/*! #__NO_SIDE_EFFECTS__ */function dT(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(o,a){const c=Vw();return o=o||(c?Ln(Z2,null):null),o&&Fc(o),o=J2,o._s.has(t)||(r?ty(t,e,s,o):hT(t,s,o)),o._s.get(t)}return i.$id=t,i}const fT=()=>{};var Km={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Ui(e)},Ui=function(t){return new Error("Firebase Database ("+ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[h],n[d],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new mT;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const S=u<<6&192|d;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ry=function(t){const e=sy(t);return jd.encodeByteArray(e,!0)},ql=function(t){return ry(t).replace(/\./g,"")},Wl=function(t){try{return jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){return iy(void 0,t)}function iy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_T(n)||(t[n]=iy(t[n],e[n]));return t}function _T(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=()=>yT().__FIREBASE_DEFAULTS__,ET=()=>{if(typeof process>"u"||typeof Km>"u")return;const t=Km.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wl(t[1]);return e&&JSON.parse(e)},Uc=()=>{try{return fT()||vT()||ET()||wT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oy=t=>Uc()?.emulatorHosts?.[t],ay=t=>{const e=oy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ly=()=>Uc()?.config,cy=t=>Uc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qd(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ql(JSON.stringify(n)),ql(JSON.stringify(o)),""].join(".")}const Vo={};function TT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vo))Vo[e]?t.emulator.push(e):t.prod.push(e);return t}function IT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qm=!1;function Wd(t,e){if(typeof window>"u"||typeof document>"u"||!cr(window.location.host)||Vo[t]===e||Vo[t]||Qm)return;Vo[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=TT().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Qm=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=IT(s),g=n("text"),S=document.getElementById(g)||document.createElement("span"),P=n("learnmore"),N=document.getElementById(P)||document.createElement("a"),L=n("preprendIcon"),U=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const B=p.element;a(B),h(N,P);const G=u();c(U,L),B.append(U,S,N,G),document.body.appendChild(B)}i?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function bT(){const t=Uc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ST(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AT(){const t=qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RT(){return ny.NODE_ADMIN===!0}function PT(){return!bT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kT(){try{return typeof indexedDB=="object"}catch{return!1}}function NT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xT,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?OT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ys(r,a,s)}}function OT(t,e){return t.replace(DT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const DT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return JSON.parse(t)}function bt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=sa(Wl(i[0])||""),n=sa(Wl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},MT=function(t){const e=dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},VT=function(t){const e=dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ym(i)&&Ym(o)){if(!Js(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function FT(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");$T(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ku),r.error===void 0&&(r.error=Ku),r.complete===void 0&&(r.complete=Ku);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $T(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ku(){}function zd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,K(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Bc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Zs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $c;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WT(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qT(t){return t===Ir?void 0:t}function WT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const zT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},GT=Ae.INFO,KT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},QT=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=KT[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=QT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const YT=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function XT(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JT(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,Nh=new WeakMap,py=new WeakMap,Qu=new WeakMap,Gd=new WeakMap;function ZT(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fy.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function eI(t){if(Nh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tI(t){xh=t(xh)}function nI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yu(this),e,...n);return py.set(s,e.sort?e.sort():[e]),qs(s)}:JT().includes(t)?function(...e){return t.apply(Yu(this),e),qs(fy.get(this))}:function(...e){return qs(t.apply(Yu(this),e))}}function sI(t){return typeof t=="function"?nI(t):(t instanceof IDBTransaction&&eI(t),YT(t,XT())?new Proxy(t,xh):t)}function qs(t){if(t instanceof IDBRequest)return ZT(t);if(Qu.has(t))return Qu.get(t);const e=sI(t);return e!==t&&(Qu.set(t,e),Gd.set(e,t)),e}const Yu=t=>Gd.get(t);function rI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=qs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qs(o.result),c.oldVersion,c.newVersion,qs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iI=["get","getKey","getAll","getAllKeys","count"],oI=["put","add","delete","clear"],Xu=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=oI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||iI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Xu.set(e,i),i}tI(t=>({...t,get:(e,n,s)=>Zm(e,n)||t.get(e,n,s),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lI(t){return t.getComponent()?.type==="VERSION"}const Oh="@firebase/app",e1="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new jc("@firebase/app"),cI="@firebase/app-compat",uI="@firebase/analytics-compat",hI="@firebase/analytics",dI="@firebase/app-check-compat",fI="@firebase/app-check",pI="@firebase/auth",mI="@firebase/auth-compat",gI="@firebase/database",_I="@firebase/data-connect",yI="@firebase/database-compat",vI="@firebase/functions",EI="@firebase/functions-compat",wI="@firebase/installations",TI="@firebase/installations-compat",II="@firebase/messaging",bI="@firebase/messaging-compat",CI="@firebase/performance",SI="@firebase/performance-compat",AI="@firebase/remote-config",RI="@firebase/remote-config-compat",PI="@firebase/storage",kI="@firebase/storage-compat",NI="@firebase/firestore",xI="@firebase/ai",OI="@firebase/firestore-compat",DI="firebase",MI="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="[DEFAULT]",VI={[Oh]:"fire-core",[cI]:"fire-core-compat",[hI]:"fire-analytics",[uI]:"fire-analytics-compat",[fI]:"fire-app-check",[dI]:"fire-app-check-compat",[pI]:"fire-auth",[mI]:"fire-auth-compat",[gI]:"fire-rtdb",[_I]:"fire-data-connect",[yI]:"fire-rtdb-compat",[vI]:"fire-fn",[EI]:"fire-fn-compat",[wI]:"fire-iid",[TI]:"fire-iid-compat",[II]:"fire-fcm",[bI]:"fire-fcm-compat",[CI]:"fire-perf",[SI]:"fire-perf-compat",[AI]:"fire-rc",[RI]:"fire-rc-compat",[PI]:"fire-gcs",[kI]:"fire-gcs-compat",[NI]:"fire-fst",[OI]:"fire-fst-compat",[xI]:"fire-vertex","fire-js":"fire-js",[DI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,LI=new Map,Mh=new Map;function t1(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Mh.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,t);for(const n of zl.values())t1(n,t);for(const n of LI.values())t1(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ws=new Ra("app","Firebase",FI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ws.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=MI;function my(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Dh,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ws.create("bad-app-name",{appName:String(r)});if(n||(n=ly()),!n)throw Ws.create("no-options");const i=zl.get(r);if(i){if(Js(n,i.options)&&Js(s,i.config))return i;throw Ws.create("duplicate-app",{appName:r})}const o=new HT(r);for(const c of Mh.values())o.addComponent(c);const a=new UI(n,s,o);return zl.set(r,a),a}function Kd(t=Dh){const e=zl.get(t);if(!e&&t===Dh&&ly())return my();if(!e)throw Ws.create("no-app",{appName:t});return e}function Un(t,e,n){let s=VI[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(o.join(" "));return}Mr(new Zs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="firebase-heartbeat-database",BI=1,ra="firebase-heartbeat-store";let Ju=null;function gy(){return Ju||(Ju=rI($I,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ws.create("idb-open",{originalErrorMessage:t.message})})),Ju}async function jI(t){try{const n=(await gy()).transaction(ra),s=await n.objectStore(ra).get(_y(t));return await n.done,s}catch(e){if(e instanceof ys)hs.warn(e.message);else{const n=Ws.create("idb-get",{originalErrorMessage:e?.message});hs.warn(n.message)}}}async function n1(t,e){try{const s=(await gy()).transaction(ra,"readwrite");await s.objectStore(ra).put(e,_y(t)),await s.done}catch(n){if(n instanceof ys)hs.warn(n.message);else{const s=Ws.create("idb-set",{originalErrorMessage:n?.message});hs.warn(s.message)}}}function _y(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1024,WI=30;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=s1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>WI){const r=KI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=s1(),{heartbeatsToSend:n,unsentEntries:s}=zI(this._heartbeatsCache.heartbeats),r=ql(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return hs.warn(e),""}}}function s1(){return new Date().toISOString().substring(0,10)}function zI(t,e=qI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),r1(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),r1(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kT()?NT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return n1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return n1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function r1(t){return ql(JSON.stringify({version:2,heartbeats:t})).length}function KI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){Mr(new Zs("platform-logger",e=>new aI(e),"PRIVATE")),Mr(new Zs("heartbeat",e=>new HI(e),"PRIVATE")),Un(Oh,e1,t),Un(Oh,e1,"esm2020"),Un("fire-js","")}QI("");var YI="firebase",XI="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(YI,XI,"app");function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=yy,vy=new Ra("auth","Firebase",yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new jc("@firebase/auth");function ZI(t,...e){Gl.logLevel<=Ae.WARN&&Gl.warn(`Auth (${Hr}): ${t}`,...e)}function vl(t,...e){Gl.logLevel<=Ae.ERROR&&Gl.error(`Auth (${Hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw Qd(t,...e)}function $n(t,...e){return Qd(t,...e)}function Ey(t,e,n){const s={...JI(),[e]:n};return new Ra("auth","Firebase",s).create(e,{appName:t.name})}function os(t){return Ey(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return vy.create(t,...e)}function de(t,e,...n){if(!t)throw Qd(e,...n)}function ss(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function ds(t,e){t||ss(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){return typeof self<"u"&&self.location?.href||""}function e5(){return i1()==="http:"||i1()==="https:"}function i1(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e5()||ST()||"connection"in navigator)?navigator.onLine:!0}function n5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ds(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||hy()}get(){return t5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){ds(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r5=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i5=new Pa(3e4,6e4);function Es(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ws(t,e,n,s,r={}){return Ty(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$i({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return CT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&cr(t.emulatorConfig.host)&&(u.credentials="include"),wy.fetch()(await Iy(t,t.config.apiHost,n,a),u)})}async function Ty(t,e,n){t._canInitEmulator=!1;const s={...s5,...e};try{const r=new a5(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rl(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ey(t,h,u);An(t,h)}}catch(r){if(r instanceof ys)throw r;An(t,"network-request-failed",{message:String(r)})}}async function ka(t,e,n,s,r={}){const i=await ws(t,e,n,s,r);return"mfaPendingCredential"in i&&An(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Iy(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Yd(t.config,r):`${t.config.apiScheme}://${r}`;return r5.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function o5(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class a5{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),i5.get())})}}function rl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$n(t,e,s);return r.customData._tokenResponse=n,r}function o1(t){return t!==void 0&&t.enterprise!==void 0}class l5{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return o5(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c5(t,e){return ws(t,"GET","/v2/recaptchaConfig",Es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u5(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function Kl(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h5(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),r=Xd(s);de(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Lo(Zu(r.auth_time)),issuedAtTime:Lo(Zu(r.iat)),expirationTime:Lo(Zu(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Zu(t){return Number(t)*1e3}function Xd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Wl(n);return r?JSON.parse(r):(vl("Failed to decode base64 JWT payload"),null)}catch(r){return vl("Caught error parsing JWT payload as JSON",r?.toString()),null}}function a1(t){const e=Xd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ys&&d5(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function d5({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){const e=t.auth,n=await t.getIdToken(),s=await ia(t,Kl(e,{idToken:n}));de(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?by(r.providerUserInfo):[],o=m5(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Lh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function p5(t){const e=Xe(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m5(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function by(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g5(t,e){const n=await Ty(t,{},async()=>{const s=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Iy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&cr(t.emulatorConfig.host)&&(c.credentials="include"),wy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _5(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=a1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await g5(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mi;return s&&(de(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(de(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new f5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h5(this,e)}reload(){return p5(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await ia(this,u5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:g,providerData:S,stsTokenManager:P}=n;de(d&&P,e,"internal-error");const N=mi.fromJSON(this.name,P);de(typeof d=="string",e,"internal-error"),Ps(s,e.name),Ps(r,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof g=="boolean",e,"internal-error"),Ps(i,e.name),Ps(o,e.name),Ps(a,e.name),Ps(c,e.name),Ps(u,e.name),Ps(h,e.name);const L=new En({uid:d,auth:e,email:r,emailVerified:p,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:N,createdAt:u,lastLoginAt:h});return S&&Array.isArray(S)&&(L.providerData=S.map(U=>({...U}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,s=!1){const r=new mi;r.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ql(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];de(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?by(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new mi;a.updateFromIdToken(s);const c=new En({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Lh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Map;function rs(t){ds(t instanceof Function,"Expected a class definition");let e=l1.get(t);return e?(ds(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,l1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cy.type="NONE";const c1=Cy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=El(this.userKey,r.apiKey,i),this.fullPersistenceKey=El("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kl(this.auth,{idToken:e}).catch(()=>{});return n?En._fromGetAccountInfoResponse(this.auth,n,e):null}return En._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gi(rs(c1),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||rs(c1);const o=El(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await Kl(e,{idToken:h}).catch(()=>{});if(!p)break;d=await En._fromGetAccountInfoResponse(e,p,h)}else d=En._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gi(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ny(e))return"Blackberry";if(xy(e))return"Webos";if(Ay(e))return"Safari";if((e.includes("chrome/")||Ry(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Sy(t=qt()){return/firefox\//i.test(t)}function Ay(t=qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ry(t=qt()){return/crios\//i.test(t)}function Py(t=qt()){return/iemobile/i.test(t)}function ky(t=qt()){return/android/i.test(t)}function Ny(t=qt()){return/blackberry/i.test(t)}function xy(t=qt()){return/webos/i.test(t)}function Jd(t=qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y5(t=qt()){return Jd(t)&&!!window.navigator?.standalone}function v5(){return AT()&&document.documentMode===10}function Oy(t=qt()){return Jd(t)||ky(t)||xy(t)||Ny(t)||/windows phone/i.test(t)||Py(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e=[]){let n;switch(t){case"Browser":n=u1(qt());break;case"Worker":n=`${u1(qt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w5(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Es(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=6;class I5{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??T5,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h1(this),this.idTokenSubscription=new h1(this),this.beforeStateQueue=new E5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rs(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kl(this,{idToken:e}),s=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(on(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(os(this));const n=e?Xe(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w5(this),n=new I5(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _5(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rs(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ZI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ur(t){return Xe(t)}class h1{constructor(e){this.auth=e,this.observer=null,this.addObserver=FT(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C5(t){Wc=t}function My(t){return Wc.loadJS(t)}function S5(){return Wc.recaptchaEnterpriseScript}function A5(){return Wc.gapiScript}function R5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class P5{constructor(){this.enterprise=new k5}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class k5{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const N5="recaptcha-enterprise",Vy="NO_RECAPTCHA";class x5{constructor(e){this.type=N5,this.auth=ur(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{c5(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new l5(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;o1(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Vy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new P5().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&o1(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=S5();c.length!==0&&(c+=a),My(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function d1(t,e,n,s=!1,r=!1){const i=new x5(t);let o;if(r)o=Vy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yl(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await d1(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await d1(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O5(t,e){const n=qc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Js(i,e??{}))return r;An(r,"already-initialized")}return n.initialize({options:e})}function D5(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(rs);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function M5(t,e,n){const s=ur(t);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ly(e),{host:o,port:a}=V5(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(Js(u,s.config.emulator)&&Js(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,cr(o)?(qd(`${i}//${o}${c}`),Wd("Auth",!0)):L5()}function Ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V5(t){const e=Ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:f1(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:f1(o)}}}function f1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L5(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ss("not implemented")}_getIdTokenResponse(e){return ss("not implemented")}_linkToIdToken(e,n){return ss("not implemented")}_getReauthenticationResolver(e){return ss("not implemented")}}async function F5(t,e){return ws(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U5(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",Es(t,e))}async function Fy(t,e){return ws(t,"POST","/v1/accounts:sendOobCode",Es(t,e))}async function $5(t,e){return Fy(t,e)}async function B5(t,e){return Fy(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j5(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Es(t,e))}async function q5(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Zd{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new oa(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,n,"signInWithPassword",U5);case"emailLink":return j5(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,s,"signUpPassword",F5);case"emailLink":return q5(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",Es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5="http://localhost";class Vr extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Vr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:W5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z5(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,s=To(Io(t)).deep_link_id;return(s?To(Io(s)).link:null)||s||n||e||t}class ef{constructor(e){const n=To(Io(e)),s=n.apiKey??null,r=n.oobCode??null,i=H5(n.mode??null);de(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=z5(e);try{return new ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ef.parseLink(n);return de(s,"argument-error"),oa._fromEmailAndCode(e,s.code,s.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Na{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ls.credential(n,s)}catch{return null}}}Ls.GOOGLE_SIGN_IN_METHOD="google.com";Ls.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Na{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fs.credential(e.oauthAccessToken)}catch{return null}}}Fs.GITHUB_SIGN_IN_METHOD="github.com";Fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Na{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Us.PROVIDER_ID,signInMethod:Us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Us.credentialFromTaggedObject(e)}static credentialFromError(e){return Us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Us.credential(n,s)}catch{return null}}}Us.TWITTER_SIGN_IN_METHOD="twitter.com";Us.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G5(t,e){return ka(t,"POST","/v1/accounts:signUp",Es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await En._fromIdTokenResponse(e,s,r),o=p1(s);return new Lr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=p1(s);return new Lr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function p1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends ys{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xl(e,n,s,r)}}function $y(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xl._fromErrorAndOperation(t,i,e,s):i})}async function K5(t,e,n=!1){const s=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q5(t,e,n=!1){const{auth:s}=t;if(on(s.app))return Promise.reject(os(s));const r="reauthenticate";try{const i=await ia(t,$y(s,r,e,t),n);de(i.idToken,s,"internal-error");const o=Xd(i.idToken);de(o,s,"internal-error");const{sub:a}=o;return de(t.uid===a,s,"user-mismatch"),Lr._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&An(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e,n=!1){if(on(t.app))return Promise.reject(os(t));const s="signIn",r=await $y(t,s,e),i=await Lr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Y5(t,e){return By(ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function X5(t,e,n){const s=ur(t);await Yl(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",B5)}async function J5(t,e,n){if(on(t.app))return Promise.reject(os(t));const s=ur(t),o=await Yl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G5).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jy(t),c}),a=await Lr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Z5(t,e,n){return on(t.app)?Promise.reject(os(t)):Y5(Xe(t),Bi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&jy(t),s})}async function m1(t,e){const n=Xe(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await $5(n.auth,r);i!==t.email&&await t.reload()}function e6(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function t6(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function qy(t,e,n,s){return Xe(t).onAuthStateChanged(e,n,s)}function n6(t){return Xe(t).signOut()}async function s6(t){return Xe(t).delete()}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=1e3,i6=10;class Hy extends Wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);v5()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,i6):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},r6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hy.type="LOCAL";const o6=Hy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends Wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zy.type="SESSION";const Gy=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await a6(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=tf("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function c6(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function u6(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h6(){return navigator?.serviceWorker?.controller||null}function d6(){return Ky()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="firebaseLocalStorageDb",f6=1,Zl="firebaseLocalStorage",Yy="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zc(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function p6(){const t=indexedDB.deleteDatabase(Qy);return new xa(t).toPromise()}function Fh(){const t=indexedDB.open(Qy,f6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zl,{keyPath:Yy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zl)?e(s):(s.close(),await p6(),e(await Fh()))})})}async function g1(t,e,n){const s=zc(t,!0).put({[Yy]:e,value:n});return new xa(s).toPromise()}async function m6(t,e){const n=zc(t,!1).get(e),s=await new xa(n).toPromise();return s===void 0?null:s.value}function _1(t,e){const n=zc(t,!0).delete(e);return new xa(n).toPromise()}const g6=800,_6=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(d6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await u6(),!this.activeServiceWorker)return;this.sender=new l6(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await g1(e,Jl,"1"),await _1(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>g1(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>m6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zc(r,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const y6=Xy;new Pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v6(t,e){return e?rs(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E6(t){return By(t.auth,new nf(t),t.bypassAuthState)}function w6(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Q5(n,new nf(t),t.bypassAuthState)}async function T6(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),K5(n,new nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E6;case"linkViaPopup":case"linkViaRedirect":return T6;case"reauthViaPopup":case"reauthViaRedirect":return w6;default:An(this.auth,"internal-error")}}resolve(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I6=new Pa(2e3,1e4);class li extends Jy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ds(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I6.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b6="pendingRedirect",wl=new Map;class C6 extends Jy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const s=await S6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S6(t,e){const n=P6(e),s=R6(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function A6(t,e){wl.set(t._key(),e)}function R6(t){return rs(t._redirectPersistence)}function P6(t){return El(b6,t.config.apiKey,t.name)}async function k6(t,e,n=!1){if(on(t.app))return Promise.reject(os(t));const s=ur(t),r=v6(s,e),o=await new C6(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N6=600*1e3;class x6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Zy(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError($n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N6&&this.cachedEventUids.clear(),this.cachedEventUids.has(y1(e))}saveEventToCache(e){this.cachedEventUids.add(y1(e)),this.lastProcessedEventTime=Date.now()}}function y1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function O6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V6=/^https?/;async function L6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D6(t);for(const n of e)try{if(F6(n))return}catch{}An(t,"unauthorized-domain")}function F6(t){const e=Vh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!V6.test(n))return!1;if(M6.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6=new Pa(3e4,6e4);function v1(){const t=Bn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $6(t){return new Promise((e,n)=>{function s(){v1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{v1(),n($n(t,"network-request-failed"))},timeout:U6.get()})}if(Bn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Bn().gapi?.load)s();else{const r=R5("iframefcb");return Bn()[r]=()=>{gapi.load?s():n($n(t,"network-request-failed"))},My(`${A5()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function B6(t){return Tl=Tl||$6(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j6=new Pa(5e3,15e3),q6="__/auth/iframe",W6="emulator/auth/iframe",H6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G6(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,W6):`https://${t.config.authDomain}/${q6}`,s={apiKey:e.apiKey,appName:t.name,v:Hr},r=z6.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$i(s).slice(1)}`}async function K6(t){const e=await B6(t),n=Bn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:G6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H6,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(o)},j6.get());function c(){Bn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y6=500,X6=600,J6="_blank",Z6="http://localhost";class E1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,s=Y6,r=X6){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Q6,width:s.toString(),height:r.toString(),top:i,left:o},u=qt().toLowerCase();n&&(a=Ry(u)?J6:n),Sy(u)&&(e=e||Z6,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(y5(u)&&a!=="_self")return tb(e||"",a),new E1(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new E1(d)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="__/auth/handler",sb="emulator/auth/handler",rb=encodeURIComponent("fac");async function w1(t,e,n,s,r,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hr,eventId:r};if(e instanceof Uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Na){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${rb}=${encodeURIComponent(c)}`:"";return`${ib(t)}?${$i(a).slice(1)}${u}`}function ib({config:t}){return t.emulator?Yd(t,sb):`https://${t.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gy,this._completeRedirectFn=k6,this._overrideRedirectResult=A6}async _openPopup(e,n,s,r){ds(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await w1(e,n,s,Vh(),r);return eb(e,i,tf())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await w1(e,n,s,Vh(),r);return c6(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ds(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await K6(e),s=new x6(e);return n.register("authEvent",r=>(de(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},r=>{const i=r?.[0]?.[eh];i!==void 0&&n(!!i),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oy()||Ay()||Jd()}}const ab=ob;var T1="@firebase/auth",I1="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ub(t){Mr(new Zs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dy(t)},u=new b5(s,r,i,c);return D5(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Mr(new Zs("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(s=>new lb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(T1,I1,cb(t)),Un(T1,I1,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=300,db=cy("authIdTokenMaxAge")||hb;let b1=null;const fb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>db)return;const r=n?.token;b1!==r&&(b1=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gc(t=Kd()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=O5(t,{popupRedirectResolver:ab,persistence:[y6,o6,Gy]}),s=cy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=fb(i.toString());t6(n,o,()=>o(n.currentUser)),e6(n,a=>o(a))}}const r=oy("auth");return r&&M5(n,`http://${r}`),n}function pb(){return document.getElementsByTagName("head")?.[0]??document}C5({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=$n("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ub("Browser");var C1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,ev;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.F=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(C,T,E){for(var w=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)w[Y-2]=arguments[Y];return v.prototype[T].apply(C,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,v,y){y||(y=0);const C=Array(16);if(typeof v=="string")for(var T=0;T<16;++T)C[T]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(T=0;T<16;++T)C[T]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],T=A.g[2];let E=A.g[3],w;w=v+(E^y&(T^E))+C[0]+3614090360&4294967295,v=y+(w<<7&4294967295|w>>>25),w=E+(T^v&(y^T))+C[1]+3905402710&4294967295,E=v+(w<<12&4294967295|w>>>20),w=T+(y^E&(v^y))+C[2]+606105819&4294967295,T=E+(w<<17&4294967295|w>>>15),w=y+(v^T&(E^v))+C[3]+3250441966&4294967295,y=T+(w<<22&4294967295|w>>>10),w=v+(E^y&(T^E))+C[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=E+(T^v&(y^T))+C[5]+1200080426&4294967295,E=v+(w<<12&4294967295|w>>>20),w=T+(y^E&(v^y))+C[6]+2821735955&4294967295,T=E+(w<<17&4294967295|w>>>15),w=y+(v^T&(E^v))+C[7]+4249261313&4294967295,y=T+(w<<22&4294967295|w>>>10),w=v+(E^y&(T^E))+C[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=E+(T^v&(y^T))+C[9]+2336552879&4294967295,E=v+(w<<12&4294967295|w>>>20),w=T+(y^E&(v^y))+C[10]+4294925233&4294967295,T=E+(w<<17&4294967295|w>>>15),w=y+(v^T&(E^v))+C[11]+2304563134&4294967295,y=T+(w<<22&4294967295|w>>>10),w=v+(E^y&(T^E))+C[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=E+(T^v&(y^T))+C[13]+4254626195&4294967295,E=v+(w<<12&4294967295|w>>>20),w=T+(y^E&(v^y))+C[14]+2792965006&4294967295,T=E+(w<<17&4294967295|w>>>15),w=y+(v^T&(E^v))+C[15]+1236535329&4294967295,y=T+(w<<22&4294967295|w>>>10),w=v+(T^E&(y^T))+C[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=E+(y^T&(v^y))+C[6]+3225465664&4294967295,E=v+(w<<9&4294967295|w>>>23),w=T+(v^y&(E^v))+C[11]+643717713&4294967295,T=E+(w<<14&4294967295|w>>>18),w=y+(E^v&(T^E))+C[0]+3921069994&4294967295,y=T+(w<<20&4294967295|w>>>12),w=v+(T^E&(y^T))+C[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=E+(y^T&(v^y))+C[10]+38016083&4294967295,E=v+(w<<9&4294967295|w>>>23),w=T+(v^y&(E^v))+C[15]+3634488961&4294967295,T=E+(w<<14&4294967295|w>>>18),w=y+(E^v&(T^E))+C[4]+3889429448&4294967295,y=T+(w<<20&4294967295|w>>>12),w=v+(T^E&(y^T))+C[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=E+(y^T&(v^y))+C[14]+3275163606&4294967295,E=v+(w<<9&4294967295|w>>>23),w=T+(v^y&(E^v))+C[3]+4107603335&4294967295,T=E+(w<<14&4294967295|w>>>18),w=y+(E^v&(T^E))+C[8]+1163531501&4294967295,y=T+(w<<20&4294967295|w>>>12),w=v+(T^E&(y^T))+C[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=E+(y^T&(v^y))+C[2]+4243563512&4294967295,E=v+(w<<9&4294967295|w>>>23),w=T+(v^y&(E^v))+C[7]+1735328473&4294967295,T=E+(w<<14&4294967295|w>>>18),w=y+(E^v&(T^E))+C[12]+2368359562&4294967295,y=T+(w<<20&4294967295|w>>>12),w=v+(y^T^E)+C[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=E+(v^y^T)+C[8]+2272392833&4294967295,E=v+(w<<11&4294967295|w>>>21),w=T+(E^v^y)+C[11]+1839030562&4294967295,T=E+(w<<16&4294967295|w>>>16),w=y+(T^E^v)+C[14]+4259657740&4294967295,y=T+(w<<23&4294967295|w>>>9),w=v+(y^T^E)+C[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=E+(v^y^T)+C[4]+1272893353&4294967295,E=v+(w<<11&4294967295|w>>>21),w=T+(E^v^y)+C[7]+4139469664&4294967295,T=E+(w<<16&4294967295|w>>>16),w=y+(T^E^v)+C[10]+3200236656&4294967295,y=T+(w<<23&4294967295|w>>>9),w=v+(y^T^E)+C[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=E+(v^y^T)+C[0]+3936430074&4294967295,E=v+(w<<11&4294967295|w>>>21),w=T+(E^v^y)+C[3]+3572445317&4294967295,T=E+(w<<16&4294967295|w>>>16),w=y+(T^E^v)+C[6]+76029189&4294967295,y=T+(w<<23&4294967295|w>>>9),w=v+(y^T^E)+C[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=E+(v^y^T)+C[12]+3873151461&4294967295,E=v+(w<<11&4294967295|w>>>21),w=T+(E^v^y)+C[15]+530742520&4294967295,T=E+(w<<16&4294967295|w>>>16),w=y+(T^E^v)+C[2]+3299628645&4294967295,y=T+(w<<23&4294967295|w>>>9),w=v+(T^(y|~E))+C[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=E+(y^(v|~T))+C[7]+1126891415&4294967295,E=v+(w<<10&4294967295|w>>>22),w=T+(v^(E|~y))+C[14]+2878612391&4294967295,T=E+(w<<15&4294967295|w>>>17),w=y+(E^(T|~v))+C[5]+4237533241&4294967295,y=T+(w<<21&4294967295|w>>>11),w=v+(T^(y|~E))+C[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=E+(y^(v|~T))+C[3]+2399980690&4294967295,E=v+(w<<10&4294967295|w>>>22),w=T+(v^(E|~y))+C[10]+4293915773&4294967295,T=E+(w<<15&4294967295|w>>>17),w=y+(E^(T|~v))+C[1]+2240044497&4294967295,y=T+(w<<21&4294967295|w>>>11),w=v+(T^(y|~E))+C[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=E+(y^(v|~T))+C[15]+4264355552&4294967295,E=v+(w<<10&4294967295|w>>>22),w=T+(v^(E|~y))+C[6]+2734768916&4294967295,T=E+(w<<15&4294967295|w>>>17),w=y+(E^(T|~v))+C[13]+1309151649&4294967295,y=T+(w<<21&4294967295|w>>>11),w=v+(T^(y|~E))+C[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=E+(y^(v|~T))+C[11]+3174756917&4294967295,E=v+(w<<10&4294967295|w>>>22),w=T+(v^(E|~y))+C[2]+718787259&4294967295,T=E+(w<<15&4294967295|w>>>17),w=y+(E^(T|~v))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+E&4294967295}s.prototype.v=function(A,v){v===void 0&&(v=A.length);const y=v-this.blockSize,C=this.C;let T=this.h,E=0;for(;E<v;){if(T==0)for(;E<=y;)r(this,A,E),E+=this.blockSize;if(typeof A=="string"){for(;E<v;)if(C[T++]=A.charCodeAt(E++),T==this.blockSize){r(this,C),T=0;break}}else for(;E<v;)if(C[T++]=A[E++],T==this.blockSize){r(this,C),T=0;break}}this.h=T,this.o+=v},s.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,y=0;y<4;++y)for(let C=0;C<32;C+=8)A[v++]=this.g[y]>>>C&255;return A};function i(A,v){var y=a;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function o(A,v){this.h=v;const y=[];let C=!0;for(let T=A.length-1;T>=0;T--){const E=A[T]|0;C&&E==v||(y[T]=E,C=!1)}this.g=y}var a={};function c(A){return-128<=A&&A<128?i(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(A<0)return N(u(-A));const v=[];let y=1;for(let C=0;A>=y;C++)v[C]=A/y|0,y*=4294967296;return new o(v,0)}function h(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return N(h(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(v,8));let C=d;for(let E=0;E<A.length;E+=8){var T=Math.min(8,A.length-E);const w=parseInt(A.substring(E,E+T),v);T<8?(T=u(Math.pow(v,T)),C=C.j(T).add(u(w))):(C=C.j(y),C=C.add(u(w)))}return C}var d=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();let A=0,v=1;for(let y=0;y<this.g.length;y++){const C=this.i(y);A+=(C>=0?C:4294967296+C)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(P(this))return"-"+N(this).toString(A);const v=u(Math.pow(A,6));var y=this;let C="";for(;;){const T=G(y,v).g;y=L(y,T.j(v));let E=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=T,S(y))return E+C;for(;E.length<6;)E="0"+E;C=E+C}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=L(this,A),P(A)?-1:S(A)?0:1};function N(A){const v=A.g.length,y=[];for(let C=0;C<v;C++)y[C]=~A.g[C];return new o(y,~A.h).add(p)}t.abs=function(){return P(this)?N(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),y=[];let C=0;for(let T=0;T<=v;T++){let E=C+(this.i(T)&65535)+(A.i(T)&65535),w=(E>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);C=w>>>16,E&=65535,w&=65535,y[T]=w<<16|E}return new o(y,y[y.length-1]&-2147483648?-1:0)};function L(A,v){return A.add(N(v))}t.j=function(A){if(S(this)||S(A))return d;if(P(this))return P(A)?N(this).j(N(A)):N(N(this).j(A));if(P(A))return N(this.j(N(A)));if(this.l(g)<0&&A.l(g)<0)return u(this.m()*A.m());const v=this.g.length+A.g.length,y=[];for(var C=0;C<2*v;C++)y[C]=0;for(C=0;C<this.g.length;C++)for(let T=0;T<A.g.length;T++){const E=this.i(C)>>>16,w=this.i(C)&65535,Y=A.i(T)>>>16,Ee=A.i(T)&65535;y[2*C+2*T]+=w*Ee,U(y,2*C+2*T),y[2*C+2*T+1]+=E*Ee,U(y,2*C+2*T+1),y[2*C+2*T+1]+=w*Y,U(y,2*C+2*T+1),y[2*C+2*T+2]+=E*Y,U(y,2*C+2*T+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function U(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function B(A,v){this.g=A,this.h=v}function G(A,v){if(S(v))throw Error("division by zero");if(S(A))return new B(d,d);if(P(A))return v=G(N(A),v),new B(N(v.g),N(v.h));if(P(v))return v=G(A,N(v)),new B(N(v.g),v.h);if(A.g.length>30){if(P(A)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=p,C=v;C.l(A)<=0;)y=te(y),C=te(C);var T=ne(y,1),E=ne(C,1);for(C=ne(C,2),y=ne(y,2);!S(C);){var w=E.add(C);w.l(A)<=0&&(T=T.add(y),E=w),C=ne(C,1),y=ne(y,1)}return v=L(A,T.j(v)),new B(T,v)}for(T=d;A.l(v)>=0;){for(y=Math.max(1,Math.floor(A.m()/v.m())),C=Math.ceil(Math.log(y)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),E=u(y),w=E.j(v);P(w)||w.l(A)>0;)y-=C,E=u(y),w=E.j(v);S(E)&&(E=p),T=T.add(E),A=L(A,w)}return new B(T,A)}t.B=function(A){return G(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let C=0;C<v;C++)y[C]=this.i(C)&A.i(C);return new o(y,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let C=0;C<v;C++)y[C]=this.i(C)|A.i(C);return new o(y,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let C=0;C<v;C++)y[C]=this.i(C)^A.i(C);return new o(y,this.h^A.h)};function te(A){const v=A.g.length+1,y=[];for(let C=0;C<v;C++)y[C]=A.i(C)<<1|A.i(C-1)>>>31;return new o(y,A.h)}function ne(A,v){const y=v>>5;v%=32;const C=A.g.length-y,T=[];for(let E=0;E<C;E++)T[E]=v>0?A.i(E+y)>>>v|A.i(E+y+1)<<32-v:A.i(E+y);return new o(T,A.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,ev=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Hs=o}).apply(typeof C1<"u"?C1:typeof self<"u"?self:typeof window<"u"?window:{});var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tv,bo,nv,Il,Uh,sv,rv,iv;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof il=="object"&&il];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var k=l[_];if(!(k in m))break e;m=m[k]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}r("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(l){return l||function(f){var m=[],_;for(_ in f)Object.prototype.hasOwnProperty.call(f,_)&&m.push([_,f[_]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function c(l,f,m){return l.call.apply(l.bind,arguments)}function u(l,f,m){return u=c,u.apply(null,arguments)}function h(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function d(l,f){function m(){}m.prototype=f.prototype,l.Z=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(_,k,x){for(var Q=Array(arguments.length-2),we=2;we<arguments.length;we++)Q[we-2]=arguments[we];return f.prototype[k].apply(_,Q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function g(l){const f=l.length;if(f>0){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function S(l,f){for(let _=1;_<arguments.length;_++){const k=arguments[_];var m=typeof k;if(m=m!="object"?m:k?Array.isArray(k)?"array":m:"null",m=="array"||m=="object"&&typeof k.length=="number"){m=l.length||0;const x=k.length||0;l.length=m+x;for(let Q=0;Q<x;Q++)l[m+Q]=k[Q]}else l.push(k)}}class P{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(l){o.setTimeout(()=>{throw l},0)}function L(){var l=A;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class U{constructor(){this.h=this.g=null}add(f,m){const _=B.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var B=new P(()=>new G,l=>l.reset());class G{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ne=!1,A=new U,v=()=>{const l=Promise.resolve(void 0);te=()=>{l.then(y)}};function y(){for(var l;l=L();){try{l.h.call(l.g)}catch(m){N(m)}var f=B;f.j(l),f.h<100&&(f.h++,l.next=f.g,f.g=l)}ne=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return l})();function w(l){return/^[\s\xa0]*$/.test(l)}function Y(l,f){T.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,f)}d(Y,T),Y.prototype.init=function(l,f){const m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget,f||(m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement)),this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ee="closure_listenable_"+(Math.random()*1e6|0),ve=0;function le(l,f,m,_,k){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=k,this.key=++ve,this.da=this.fa=!1}function ye(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function et(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function Wt(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function Ct(l){const f={};for(const m in l)f[m]=l[m];return f}const Je="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function at(l,f){let m,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(m in _)l[m]=_[m];for(let x=0;x<Je.length;x++)m=Je[x],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function Ye(l){this.src=l,this.g={},this.h=0}Ye.prototype.add=function(l,f,m,_,k){const x=l.toString();l=this.g[x],l||(l=this.g[x]=[],this.h++);const Q=Be(l,f,_,k);return Q>-1?(f=l[Q],m||(f.fa=!1)):(f=new le(f,this.src,x,!!_,k),f.fa=m,l.push(f)),f};function ht(l,f){const m=f.type;if(m in l.g){var _=l.g[m],k=Array.prototype.indexOf.call(_,f,void 0),x;(x=k>=0)&&Array.prototype.splice.call(_,k,1),x&&(ye(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Be(l,f,m,_){for(let k=0;k<l.length;++k){const x=l[k];if(!x.da&&x.listener==f&&x.capture==!!m&&x.ha==_)return k}return-1}var O="closure_lm_"+(Math.random()*1e6|0),H={};function z(l,f,m,_,k){if(Array.isArray(f)){for(let x=0;x<f.length;x++)z(l,f[x],m,_,k);return null}return m=X(m),l&&l[Ee]?l.J(f,m,a(_)?!!_.capture:!1,k):Z(l,f,m,!1,_,k)}function Z(l,f,m,_,k,x){if(!f)throw Error("Invalid event type");const Q=a(k)?!!k.capture:!!k;let we=V(l);if(we||(l[O]=we=new Ye(l)),m=we.add(f,m,_,Q,x),m.proxy)return m;if(_=Ie(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)E||(k=Q),k===void 0&&(k=!1),l.addEventListener(f.toString(),_,k);else if(l.attachEvent)l.attachEvent(R(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ie(){function l(m){return f.call(l.src,l.listener,m)}const f=D;return l}function I(l,f,m,_,k){if(Array.isArray(f))for(var x=0;x<f.length;x++)I(l,f[x],m,_,k);else _=a(_)?!!_.capture:!!_,m=X(m),l&&l[Ee]?(l=l.i,x=String(f).toString(),x in l.g&&(f=l.g[x],m=Be(f,m,_,k),m>-1&&(ye(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete l.g[x],l.h--)))):l&&(l=V(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Be(f,m,_,k)),(m=l>-1?f[l]:null)&&b(m))}function b(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ee])ht(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(R(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=V(f))?(ht(m,l),m.h==0&&(m.src=null,f[O]=null)):ye(l)}}}function R(l){return l in H?H[l]:H[l]="on"+l}function D(l,f){if(l.da)l=!0;else{f=new Y(f,this);const m=l.listener,_=l.ha||l.src;l.fa&&b(l),l=m.call(_,f)}return l}function V(l){return l=l[O],l instanceof Ye?l:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function X(l){return typeof l=="function"?l:(l[M]||(l[M]=function(f){return l.handleEvent(f)}),l[M])}function W(){C.call(this),this.i=new Ye(this),this.M=this,this.G=null}d(W,C),W.prototype[Ee]=!0,W.prototype.removeEventListener=function(l,f,m,_){I(this,l,f,m,_)};function j(l,f){var m,_=l.G;if(_)for(m=[];_;_=_.G)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new T(f,l);else if(f instanceof T)f.target=f.target||l;else{var k=f;f=new T(_,l),at(f,k)}k=!0;let x,Q;if(m)for(Q=m.length-1;Q>=0;Q--)x=f.g=m[Q],k=q(x,_,!0,f)&&k;if(x=f.g=l,k=q(x,_,!0,f)&&k,k=q(x,_,!1,f)&&k,m)for(Q=0;Q<m.length;Q++)x=f.g=m[Q],k=q(x,_,!1,f)&&k}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var l=this.i;for(const f in l.g){const m=l.g[f];for(let _=0;_<m.length;_++)ye(m[_]);delete l.g[f],l.h--}}this.G=null},W.prototype.J=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},W.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function q(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();let k=!0;for(let x=0;x<f.length;++x){const Q=f[x];if(Q&&!Q.da&&Q.capture==m){const we=Q.listener,dt=Q.ha||Q.src;Q.fa&&ht(l.i,Q),k=we.call(dt,_)!==!1&&k}}return k&&!_.defaultPrevented}function ce(l,f){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(l,f||0)}function J(l){l.g=ce(()=>{l.g=null,l.i&&(l.i=!1,J(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ie extends C{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(l){C.call(this),this.h=l,this.g={}}d(he,C);var Se=[];function Ue(l){et(l.g,function(f,m){this.g.hasOwnProperty(m)&&b(f)},l),l.g={}}he.prototype.N=function(){he.Z.N.call(this),Ue(this)},he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oe=o.JSON.stringify,xt=o.JSON.parse,Ot=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function tn(){}function nn(){}var yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qr(){T.call(this,"d")}d(Qr,T);function St(){T.call(this,"c")}d(St,T);var vt={},Yi=null;function pr(){return Yi=Yi||new W}vt.Ia="serverreachability";function vp(l){T.call(this,vt.Ia,l)}d(vp,T);function Xi(l){const f=pr();j(f,new vp(f))}vt.STAT_EVENT="statevent";function Ep(l,f){T.call(this,vt.STAT_EVENT,l),this.stat=f}d(Ep,T);function Ht(l){const f=pr();j(f,new Ep(f,l))}vt.Ja="timingevent";function wp(l,f){T.call(this,vt.Ja,l),this.size=f}d(wp,T);function Ji(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},f)}function Zi(){this.g=!0}Zi.prototype.ua=function(){this.g=!1};function s4(l,f,m,_,k,x){l.info(function(){if(l.g)if(x){var Q="",we=x.split("&");for(let je=0;je<we.length;je++){var dt=we[je].split("=");if(dt.length>1){const Et=dt[0];dt=dt[1];const kn=Et.split("_");Q=kn.length>=2&&kn[1]=="type"?Q+(Et+"="+dt+"&"):Q+(Et+"=redacted&")}}}else Q=null;else Q=x;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+m+`
`+Q})}function r4(l,f,m,_,k,x,Q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+m+`
`+x+" "+Q})}function Yr(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+o4(l,m)+(_?" "+_:"")})}function i4(l,f){l.info(function(){return"TIMEOUT: "+f})}Zi.prototype.info=function(){};function o4(l,f){if(!l.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(l=0;l<x.length;l++)if(Array.isArray(x[l])){var m=x[l];if(!(m.length<2)){var _=m[1];if(Array.isArray(_)&&!(_.length<1)){var k=_[0];if(k!="noop"&&k!="stop"&&k!="close")for(let Q=1;Q<_.length;Q++)_[Q]=""}}}}return Oe(x)}catch{return f}}var qa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ip;function Eu(){}d(Eu,tn),Eu.prototype.g=function(){return new XMLHttpRequest},Ip=new Eu;function eo(l){return encodeURIComponent(String(l))}function a4(l){var f=1;l=l.split(":");const m=[];for(;f>0&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function Ts(l,f,m,_){this.j=l,this.i=f,this.l=m,this.S=_||1,this.V=new he(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var Cp={},wu={};function Tu(l,f,m){l.M=1,l.A=Ha(Pn(f)),l.u=m,l.R=!0,Sp(l,null)}function Sp(l,f){l.F=Date.now(),Wa(l),l.B=Pn(l.A);var m=l.B,_=l.S;Array.isArray(_)||(_=[String(_)]),Up(m.i,"t",_),l.C=0,m=l.j.L,l.h=new bp,l.g=sm(l.j,m?f:null,!l.u),l.P>0&&(l.O=new ie(u(l.Y,l,l.g),l.P)),f=l.V,m=l.g,_=l.ba;var k="readystatechange";Array.isArray(k)||(k&&(Se[0]=k.toString()),k=Se);for(let x=0;x<k.length;x++){const Q=z(m,k[x],_||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.J?Ct(l.J):{},l.u?(l.v||(l.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,f)):(l.v="GET",l.g.ea(l.B,l.v,null,f)),Xi(),s4(l.i,l.v,l.B,l.l,l.S,l.u)}Ts.prototype.ba=function(l){l=l.target;const f=this.O;f&&Cs(l)==3?f.j():this.Y(l)},Ts.prototype.Y=function(l){try{if(l==this.g)e:{const we=Cs(this.g),dt=this.g.ya(),je=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||zp(this.g)))){this.K||we!=4||dt==7||(dt==8||je<=0?Xi(3):Xi(2)),Iu(this);var f=this.g.ca();this.X=f;var m=l4(this);if(this.o=f==200,r4(this.i,this.v,this.B,this.l,this.S,we,f),this.o){if(this.U&&!this.L){t:{if(this.g){var _,k=this.g;if((_=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_)){var x=_;break t}}x=null}if(l=x)Yr(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bu(this,l);else{this.o=!1,this.m=3,Ht(12),mr(this),to(this);break e}}if(this.R){l=!0;let Et;for(;!this.K&&this.C<m.length;)if(Et=c4(this,m),Et==wu){we==4&&(this.m=4,Ht(14),l=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Cp){this.m=4,Ht(15),Yr(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else Yr(this.i,this.l,Et,null),bu(this,Et);if(Ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||m.length!=0||this.h.h||(this.m=1,Ht(16),l=!1),this.o=this.o&&l,!l)Yr(this.i,this.l,m,"[Invalid Chunked Response]"),mr(this),to(this);else if(m.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),xu(Q),Q.P=!0,Ht(11))}}else Yr(this.i,this.l,m,null),bu(this,m);we==4&&mr(this),this.o&&!this.K&&(we==4?Zp(this.j,this):(this.o=!1,Wa(this)))}else I4(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ht(12)):(this.m=0,Ht(13)),mr(this),to(this)}}}catch{}finally{}};function l4(l){if(!Ap(l))return l.g.la();const f=zp(l.g);if(f==="")return"";let m="";const _=f.length,k=Cs(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return mr(l),to(l),"";l.h.i=new o.TextDecoder}for(let x=0;x<_;x++)l.h.h=!0,m+=l.h.i.decode(f[x],{stream:!(k&&x==_-1)});return f.length=0,l.h.g+=m,l.C=0,l.h.g}function Ap(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function c4(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?wu:(m=Number(f.substring(m,_)),isNaN(m)?Cp:(_+=1,_+m>f.length?wu:(f=f.slice(_,_+m),l.C=_+m,f)))}Ts.prototype.cancel=function(){this.K=!0,mr(this)};function Wa(l){l.T=Date.now()+l.H,Rp(l,l.H)}function Rp(l,f){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ji(u(l.aa,l),f)}function Iu(l){l.D&&(o.clearTimeout(l.D),l.D=null)}Ts.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(i4(this.i,this.B),this.M!=2&&(Xi(),Ht(17)),mr(this),this.m=2,to(this)):Rp(this,this.T-l)};function to(l){l.j.I==0||l.K||Zp(l.j,l)}function mr(l){Iu(l);var f=l.O;f&&typeof f.dispose=="function"&&f.dispose(),l.O=null,Ue(l.V),l.g&&(f=l.g,l.g=null,f.abort(),f.dispose())}function bu(l,f){try{var m=l.j;if(m.I!=0&&(m.g==l||Cu(m.h,l))){if(!l.L&&Cu(m.h,l)&&m.I==3){try{var _=m.Ba.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)Ya(m),Ka(m);else break e;Nu(m),Ht(18)}}else m.xa=k[1],0<m.xa-m.K&&k[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Ji(u(m.Va,m),6e3));Np(m.h)<=1&&m.ta&&(m.ta=void 0)}else _r(m,11)}else if((l.L||m.g==l)&&Ya(m),!w(f))for(k=m.Ba.g.parse(f),f=0;f<k.length;f++){let je=k[f];const Et=je[0];if(!(Et<=m.K))if(m.K=Et,je=je[1],m.I==2)if(je[0]=="c"){m.M=je[1],m.ba=je[2];const kn=je[3];kn!=null&&(m.ka=kn,m.j.info("VER="+m.ka));const yr=je[4];yr!=null&&(m.za=yr,m.j.info("SVER="+m.za));const Ss=je[5];Ss!=null&&typeof Ss=="number"&&Ss>0&&(_=1.5*Ss,m.O=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const As=l.g;if(As){const Ja=As.g?As.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var x=_.h;x.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Su(x,x.h),x.h=null))}if(_.G){const Ou=As.g?As.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(_.wa=Ou,Ge(_.J,_.G,Ou))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),_=m;var Q=l;if(_.na=nm(_,_.L?_.ba:null,_.W),Q.L){xp(_.h,Q);var we=Q,dt=_.O;dt&&(we.H=dt),we.D&&(Iu(we),Wa(we)),_.g=Q}else Xp(_);m.i.length>0&&Qa(m)}else je[0]!="stop"&&je[0]!="close"||_r(m,7);else m.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?_r(m,7):ku(m):je[0]!="noop"&&m.l&&m.l.qa(je),m.A=0)}}Xi(4)}catch{}}var u4=class{constructor(l,f){this.g=l,this.map=f}};function Pp(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Np(l){return l.h?1:l.g?l.g.size:0}function Cu(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Su(l,f){l.g?l.g.add(f):l.h=f}function xp(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Pp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Op(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.G);return f}return g(l.i)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h4(l,f){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const _=l[m].indexOf("=");let k,x=null;_>=0?(k=l[m].substring(0,_),x=l[m].substring(_+1)):k=l[m],f(k,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Is(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;l instanceof Is?(this.l=l.l,no(this,l.j),this.o=l.o,this.g=l.g,so(this,l.u),this.h=l.h,Au(this,$p(l.i)),this.m=l.m):l&&(f=String(l).match(Dp))?(this.l=!1,no(this,f[1]||"",!0),this.o=ro(f[2]||""),this.g=ro(f[3]||"",!0),so(this,f[4]),this.h=ro(f[5]||"",!0),Au(this,f[6]||"",!0),this.m=ro(f[7]||"")):(this.l=!1,this.i=new oo(null,this.l))}Is.prototype.toString=function(){const l=[];var f=this.j;f&&l.push(io(f,Mp,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(io(f,Mp,!0),"@"),l.push(eo(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(io(m,m.charAt(0)=="/"?p4:f4,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",io(m,g4)),l.join("")},Is.prototype.resolve=function(l){const f=Pn(this);let m=!!l.j;m?no(f,l.j):m=!!l.o,m?f.o=l.o:m=!!l.g,m?f.g=l.g:m=l.u!=null;var _=l.h;if(m)so(f,l.u);else if(m=!!l.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var k=f.h.lastIndexOf("/");k!=-1&&(_=f.h.slice(0,k+1)+_)}if(k=_,k==".."||k==".")_="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){_=k.lastIndexOf("/",0)==0,k=k.split("/");const x=[];for(let Q=0;Q<k.length;){const we=k[Q++];we=="."?_&&Q==k.length&&x.push(""):we==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),_&&Q==k.length&&x.push("")):(x.push(we),_=!0)}_=x.join("/")}else _=k}return m?f.h=_:m=l.i.toString()!=="",m?Au(f,$p(l.i)):m=!!l.m,m&&(f.m=l.m),f};function Pn(l){return new Is(l)}function no(l,f,m){l.j=m?ro(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function so(l,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);l.u=f}else l.u=null}function Au(l,f,m){f instanceof oo?(l.i=f,_4(l.i,l.l)):(m||(f=io(f,m4)),l.i=new oo(f,l.l))}function Ge(l,f,m){l.i.set(f,m)}function Ha(l){return Ge(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function ro(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function io(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,d4),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function d4(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mp=/[#\/\?@]/g,f4=/[#\?:]/g,p4=/[#\?]/g,m4=/[#\?@]/g,g4=/#/g;function oo(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&h4(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=oo.prototype,t.add=function(l,f){gr(this),this.i=null,l=Xr(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function Vp(l,f){gr(l),f=Xr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Lp(l,f){return gr(l),f=Xr(l,f),l.g.has(f)}t.forEach=function(l,f){gr(this),this.g.forEach(function(m,_){m.forEach(function(k){l.call(f,k,_,this)},this)},this)};function Fp(l,f){gr(l);let m=[];if(typeof f=="string")Lp(l,f)&&(m=m.concat(l.g.get(Xr(l,f))));else for(l=Array.from(l.g.values()),f=0;f<l.length;f++)m=m.concat(l[f]);return m}t.set=function(l,f){return gr(this),this.i=null,l=Xr(this,l),Lp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=Fp(this,l),l.length>0?String(l[0]):f):f};function Up(l,f,m){Vp(l,f),m.length>0&&(l.i=null,l.g.set(Xr(l,f),g(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(let _=0;_<f.length;_++){var m=f[_];const k=eo(m);m=Fp(this,m);for(let x=0;x<m.length;x++){let Q=k;m[x]!==""&&(Q+="="+eo(m[x])),l.push(Q)}}return this.i=l.join("&")};function $p(l){const f=new oo;return f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),f}function Xr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function _4(l,f){f&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(m,_){const k=_.toLowerCase();_!=k&&(Vp(this,_),Up(this,k,m))},l)),l.j=f}function y4(l,f){const m=new Zi;if(o.Image){const _=new Image;_.onload=h(bs,m,"TestLoadImage: loaded",!0,f,_),_.onerror=h(bs,m,"TestLoadImage: error",!1,f,_),_.onabort=h(bs,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=h(bs,m,"TestLoadImage: timeout",!1,f,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function v4(l,f){const m=new Zi,_=new AbortController,k=setTimeout(()=>{_.abort(),bs(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(x=>{clearTimeout(k),x.ok?bs(m,"TestPingServer: ok",!0,f):bs(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),bs(m,"TestPingServer: error",!1,f)})}function bs(l,f,m,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(m)}catch{}}function E4(){this.g=new Ot}function Ru(l){this.i=l.Sb||null,this.h=l.ab||!1}d(Ru,tn),Ru.prototype.g=function(){return new za(this.i,this.h)};function za(l,f){W.call(this),this.H=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(za,W),t=za.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=f,this.readyState=1,lo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(f.body=l),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bp(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bp(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?ao(this):lo(this),this.readyState==3&&Bp(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,ao(this))},t.Na=function(l){this.g&&(this.response=l,ao(this))},t.ga=function(){this.g&&ao(this)};function ao(l){l.readyState=4,l.l=null,l.j=null,l.B=null,lo(l)}t.setRequestHeader=function(l,f){this.A.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function lo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jp(l){let f="";return et(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Pu(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=jp(m),typeof l=="string"?m!=null&&eo(m):Ge(l,f,m))}function tt(l){W.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(tt,W);var w4=/^https?$/i,T4=["POST","PUT"];t=tt.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ip.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(x){qp(this,x);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)m.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())m.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),k=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(T4,f,void 0)>=0)||_||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,Q]of m)this.g.setRequestHeader(x,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(x){qp(this,x)}};function qp(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.o=5,Wp(l),Ga(l)}function Wp(l){l.A||(l.A=!0,j(l,"complete"),j(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,j(this,"complete"),j(this,"abort"),Ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ga(this,!0)),tt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Hp(this):this.Xa())},t.Xa=function(){Hp(this)};function Hp(l){if(l.h&&typeof i<"u"){if(l.v&&Cs(l)==4)setTimeout(l.Ca.bind(l),0);else if(j(l,"readystatechange"),Cs(l)==4){l.h=!1;try{const x=l.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=x===0){let Q=String(l.D).match(Dp)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),_=!w4.test(Q?Q.toLowerCase():"")}m=_}if(m)j(l,"complete"),j(l,"success");else{l.o=6;try{var k=Cs(l)>2?l.g.statusText:""}catch{k=""}l.l=k+" ["+l.ca()+"]",Wp(l)}}finally{Ga(l)}}}}function Ga(l,f){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,f||j(l,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Cs(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Cs(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xt(f)}};function zp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function I4(l){const f={};l=(l.g&&Cs(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var m=a4(l[_]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=f[k]||[];f[k]=x,x.push(m)}Wt(f,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Gp(l){this.za=0,this.i=[],this.j=new Zi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=co("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=co("baseRetryDelayMs",5e3,l),this.Za=co("retryDelaySeedMs",1e4,l),this.Ta=co("forwardChannelMaxRetries",2,l),this.va=co("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Pp(l&&l.concurrentRequestLimit),this.Ba=new E4,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Gp.prototype,t.ka=8,t.I=1,t.connect=function(l,f,m,_){Ht(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.J=nm(this,null,this.W),Qa(this)};function ku(l){if(Kp(l),l.I==3){var f=l.V++,m=Pn(l.J);if(Ge(m,"SID",l.M),Ge(m,"RID",f),Ge(m,"TYPE","terminate"),uo(l,m),f=new Ts(l,l.j,f),f.M=2,f.A=Ha(Pn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=sm(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Wa(f)}tm(l)}function Ka(l){l.g&&(xu(l),l.g.cancel(),l.g=null)}function Kp(l){Ka(l),l.v&&(o.clearTimeout(l.v),l.v=null),Ya(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Qa(l){if(!kp(l.h)&&!l.m){l.m=!0;var f=l.Ea;te||v(),ne||(te(),ne=!0),A.add(f,l),l.D=0}}function b4(l,f){return Np(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=f.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ji(u(l.Ea,l,f),em(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const k=new Ts(this,this.j,l);let x=this.o;if(this.U&&(x?(x=Ct(x),at(x,this.U)):x=this.U),this.u!==null||this.R||(k.J=x,x=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Yp(this,k,f),m=Pn(this.J),Ge(m,"RID",l),Ge(m,"CVER",22),this.G&&Ge(m,"X-HTTP-Session-Id",this.G),uo(this,m),x&&(this.R?f="headers="+eo(jp(x))+"&"+f:this.u&&Pu(m,this.u,x)),Su(this.h,k),this.Ra&&Ge(m,"TYPE","init"),this.S?(Ge(m,"$req",f),Ge(m,"SID","null"),k.U=!0,Tu(k,m,null)):Tu(k,m,f),this.I=2}}else this.I==3&&(l?Qp(this,l):this.i.length==0||kp(this.h)||Qp(this))};function Qp(l,f){var m;f?m=f.l:m=l.V++;const _=Pn(l.J);Ge(_,"SID",l.M),Ge(_,"RID",m),Ge(_,"AID",l.K),uo(l,_),l.u&&l.o&&Pu(_,l.u,l.o),m=new Ts(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),f&&(l.i=f.G.concat(l.i)),f=Yp(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Su(l.h,m),Tu(m,_,f)}function uo(l,f){l.H&&et(l.H,function(m,_){Ge(f,_,m)}),l.l&&et({},function(m,_){Ge(f,_,m)})}function Yp(l,f,m){m=Math.min(l.i.length,m);const _=l.l?u(l.l.Ka,l.l,l):null;e:{var k=l.i;let we=-1;for(;;){const dt=["count="+m];we==-1?m>0?(we=k[0].g,dt.push("ofs="+we)):we=0:dt.push("ofs="+we);let je=!0;for(let Et=0;Et<m;Et++){var x=k[Et].g;const kn=k[Et].map;if(x-=we,x<0)we=Math.max(0,k[Et].g-100),je=!1;else try{x="req"+x+"_"||"";try{var Q=kn instanceof Map?kn:Object.entries(kn);for(const[yr,Ss]of Q){let As=Ss;a(Ss)&&(As=Oe(Ss)),dt.push(x+yr+"="+encodeURIComponent(As))}}catch(yr){throw dt.push(x+"type="+encodeURIComponent("_badmap")),yr}}catch{_&&_(kn)}}if(je){Q=dt.join("&");break e}}Q=void 0}return l=l.i.splice(0,m),f.G=l,Q}function Xp(l){if(!l.g&&!l.v){l.Y=1;var f=l.Da;te||v(),ne||(te(),ne=!0),A.add(f,l),l.A=0}}function Nu(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ji(u(l.Da,l),em(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Jp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ji(u(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ht(10),Ka(this),Jp(this))};function xu(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Jp(l){l.g=new Ts(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var f=Pn(l.na);Ge(f,"RID","rpc"),Ge(f,"SID",l.M),Ge(f,"AID",l.K),Ge(f,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ge(f,"TO",l.ia),Ge(f,"TYPE","xmlhttp"),uo(l,f),l.u&&l.o&&Pu(f,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=Ha(Pn(f)),m.u=null,m.R=!0,Sp(m,l)}t.Va=function(){this.C!=null&&(this.C=null,Ka(this),Nu(this),Ht(19))};function Ya(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Zp(l,f){var m=null;if(l.g==f){Ya(l),xu(l),l.g=null;var _=2}else if(Cu(l.h,f))m=f.G,xp(l.h,f),_=1;else return;if(l.I!=0){if(f.o)if(_==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var k=l.D;_=pr(),j(_,new wp(_,m)),Qa(l)}else Xp(l);else if(k=f.m,k==3||k==0&&f.X>0||!(_==1&&b4(l,f)||_==2&&Nu(l)))switch(m&&m.length>0&&(f=l.h,f.i=f.i.concat(m)),k){case 1:_r(l,5);break;case 4:_r(l,10);break;case 3:_r(l,6);break;default:_r(l,2)}}}function em(l,f){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*f}function _r(l,f){if(l.j.info("Error code "+f),f==2){var m=u(l.bb,l),_=l.Ua;const k=!_;_=new Is(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||no(_,"https"),Ha(_),k?y4(_.toString(),m):v4(_.toString(),m)}else Ht(2);l.I=0,l.l&&l.l.pa(f),tm(l),Kp(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function tm(l){if(l.I=0,l.ja=[],l.l){const f=Op(l.h);(f.length!=0||l.i.length!=0)&&(S(l.ja,f),S(l.ja,l.i),l.h.i.length=0,g(l.i),l.i.length=0),l.l.oa()}}function nm(l,f,m){var _=m instanceof Is?Pn(m):new Is(m);if(_.g!="")f&&(_.g=f+"."+_.g),so(_,_.u);else{var k=o.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;const x=new Is(null);_&&no(x,_),f&&(x.g=f),k&&so(x,k),m&&(x.h=m),_=x}return m=l.G,f=l.wa,m&&f&&Ge(_,m,f),Ge(_,"VER",l.ka),uo(l,_),_}function sm(l,f,m){if(f&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Aa&&!l.ma?new tt(new Ru({ab:m})):new tt(l.ma),f.Fa(l.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rm(){}t=rm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Xa(){}Xa.prototype.g=function(l,f){return new sn(l,f)};function sn(l,f){W.call(this),this.g=new Gp(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(l?l["X-WebChannel-Client-Profile"]=f.sa:l={"X-WebChannel-Client-Profile":f.sa}),this.g.U=l,(l=f&&f.Qb)&&!w(l)&&(this.g.u=l),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.G=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Jr(this)}d(sn,W),sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){ku(this.g)},sn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=Oe(l),l=m);f.i.push(new u4(f.Ya++,l)),f.I==3&&Qa(f)},sn.prototype.N=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,sn.Z.N.call(this)};function im(l){Qr.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}d(im,Qr);function om(){St.call(this),this.status=1}d(om,St);function Jr(l){this.g=l}d(Jr,rm),Jr.prototype.ra=function(){j(this.g,"a")},Jr.prototype.qa=function(l){j(this.g,new im(l))},Jr.prototype.pa=function(l){j(this.g,new om)},Jr.prototype.oa=function(){j(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,iv=function(){return new Xa},rv=function(){return pr()},sv=vt,Uh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qa.NO_ERROR=0,qa.TIMEOUT=8,qa.HTTP_ERROR=6,Il=qa,Tp.COMPLETE="complete",nv=Tp,nn.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",W.prototype.listen=W.prototype.J,bo=nn,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,tv=tt}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});const S1="@firebase/firestore",A1="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new jc("@firebase/firestore");function si(){return Fr.logLevel}function ee(t,...e){if(Fr.logLevel<=Ae.DEBUG){const n=e.map(sf);Fr.debug(`Firestore (${ji}): ${t}`,...n)}}function fs(t,...e){if(Fr.logLevel<=Ae.ERROR){const n=e.map(sf);Fr.error(`Firestore (${ji}): ${t}`,...n)}}function Si(t,...e){if(Fr.logLevel<=Ae.WARN){const n=e.map(sf);Fr.warn(`Firestore (${ji}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,ov(t,s,n)}function ov(t,e,n){let s=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw fs(s),new Error(s)}function Fe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||ov(e,r,s)}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends ys{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Vt.UNAUTHENTICATED)))}shutdown(){}}class gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _b{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zs,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zs)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new av(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Vt(e)}}class yb{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vb{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new yb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class R1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,on(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new R1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new R1(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=wb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Pe(t,e){return t<e?-1:t>e?1:0}function $h(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return th(r)===th(i)?Pe(r,i):th(r)?1:-1}return Pe(t.length,e.length)}const Tb=55296,Ib=57343;function th(t){const e=t.charCodeAt(0);return e>=Tb&&e<=Ib}function Ai(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="__name__";class Dn{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&fe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Dn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Pe(e.length,n.length)}static compareSegments(e,n){const s=Dn.isNumericId(e),r=Dn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):$h(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class Ze extends Dn{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Ze(n)}static emptyPath(){return new Ze([])}}const bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Dn{construct(e,n,s){return new Pt(e,n,s)}static isValidIdentifier(e){return bb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P1}static keyField(){return new Pt([P1])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ze.fromString(e))}static fromName(e){return new ue(Ze.fromString(e).popFirst(5))}static empty(){return new ue(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e,n){if(!n)throw new se($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sb(t,e,n,s){if(e===!0&&s===!0)throw new se($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k1(t){if(!ue.isDocumentKey(t))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function of(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=of(t);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){const n={typeString:t};return e&&(n.value=e),n}function Oa(t,e){if(!lv(t))throw new se($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new se($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=-62135596800,x1=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*x1);return new Qe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<N1)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/x1}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Oa(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-N1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ct("string",Qe._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Qe(0,0))}static max(){return new me(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=-1;function Ab(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=me.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new er(r,ue.empty(),e)}function Rb(t){return new er(t.readTime,t.key,aa)}class er{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new er(me.min(),ue.empty(),aa)}static max(){return new er(me.max(),ue.empty(),aa)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==kb)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,s)=>{n(e)}))}static reject(e){return new F(((n,s)=>{s(e)}))}static waitFor(e){return new F(((n,s)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=F.resolve(!1);for(const s of e)n=n.next((r=>r?F.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new F(((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((h=>{o[u]=h,++a,a===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,n){return new F(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-1;function Qc(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function Ob(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="";function Db(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=O1(e)),e=Mb(t.get(n),e);return O1(e)}function Mb(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case cv:n+="";break;default:n+=i}}return n}function O1(t){return t+cv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class Bh{constructor(e,n){this.comparator=e,this.root=n||Gs.EMPTY}insert(e,n){return new Bh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gs.BLACK,null,null))}remove(e){return new Bh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}},ol=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Gs=class Xn{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xn.RED,this.left=r??Xn.EMPTY,this.right=i??Xn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xn(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}};Gs.EMPTY=null,Gs.RED=!0,Gs.BLACK=!1;Gs.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new Gs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M1(this.data.getIterator())}getIteratorFrom(e){return new M1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class M1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new _t(Pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ai(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hv("Invalid base64 string: "+i):i}})(e);return new Nt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=Vb.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nr(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="server_timestamp",fv="__type__",pv="__previous_value__",mv="__local_write_time__";function lf(t){return(t?.mapValue?.fields||{})[fv]?.stringValue===dv}function Yc(t){const e=t.mapValue.fields[pv];return lf(e)?Yc(e):e}function la(t){const e=tr(t.mapValue.fields[mv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const tc="(default)";class ca{constructor(e,n){this.projectId=e,this.database=n||tc}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database===tc}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="__type__",Fb="__max__",al={mapValue:{}},_v="__vector__",nc="value";function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:$b(t)?9007199254740991:Ub(t)?10:11:fe(28295,{value:t})}function Gn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return la(t).isEqual(la(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=tr(r.timestampValue),a=tr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return nr(r.bytesValue).isEqual(nr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return it(r.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(r.geoPointValue.longitude)===it(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return it(r.integerValue)===it(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=it(r.doubleValue),a=it(i.doubleValue);return o===a?ec(o)===ec(a):isNaN(o)&&isNaN(a)}return!1})(t,e);case 9:return Ai(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(D1(o)!==D1(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gn(o[c],a[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function ua(t,e){return(t.values||[]).find((n=>Gn(n,e)))!==void 0}function Ri(t,e){if(t===e)return 0;const n=sr(t),s=sr(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=it(i.integerValue||i.doubleValue),c=it(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(t,e);case 3:return V1(t.timestampValue,e.timestampValue);case 4:return V1(la(t),la(e));case 5:return $h(t.stringValue,e.stringValue);case 6:return(function(i,o){const a=nr(i),c=nr(o);return a.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Pe(a[u],c[u]);if(h!==0)return h}return Pe(a.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Pe(it(i.latitude),it(o.latitude));return a!==0?a:Pe(it(i.longitude),it(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return L1(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},c=o.fields||{},u=a[nc]?.arrayValue,h=c[nc]?.arrayValue,d=Pe(u?.values?.length||0,h?.values?.length||0);return d!==0?d:L1(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===al.mapValue&&o===al.mapValue)return 0;if(i===al.mapValue)return 1;if(o===al.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=$h(c[d],h[d]);if(p!==0)return p;const g=Ri(a[c[d]],u[h[d]]);if(g!==0)return g}return Pe(c.length,h.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function V1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=tr(t),s=tr(e),r=Pe(n.seconds,s.seconds);return r!==0?r:Pe(n.nanos,s.nanos)}function L1(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Ri(n[r],s[r]);if(i)return i}return Pe(n.length,s.length)}function Pi(t){return jh(t)}function jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=tr(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return nr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ue.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=jh(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${jh(n.fields[o])}`;return r+"}"})(t.mapValue):fe(61005,{value:t})}function bl(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(t);return e?16+bl(e):16;case 5:return 2*t.stringValue.length;case 6:return nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+bl(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return hr(s.fields,((i,o)=>{r+=i.length+bl(o)})),r})(t.mapValue);default:throw fe(13486,{value:t})}}function qh(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function F1(t){return!!t&&"nullValue"in t}function U1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cl(t){return!!t&&"mapValue"in t}function Ub(t){return(t?.mapValue?.fields||{})[gv]?.stringValue===_v}function Fo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Fo(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return{...t}}function $b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Fb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=Pt.emptyPath(),s={},r=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Fo(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Cl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){hr(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Yt(Fo(this.value))}}function yv(t){const e=[];return hr(t.fields,((n,s)=>{const r=new Pt([n]);if(Cl(s)){const i=yv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,me.min(),me.min(),me.min(),Yt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ut(e,1,n,me.min(),s,r,0)}static newNoDocument(e,n){return new Ut(e,2,n,me.min(),me.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,me.min(),me.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.position=e,this.inclusive=n}}function $1(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ue.comparator(ue.fromName(o.referenceValue),n.key):s=Ri(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function B1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{}class pt extends vv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qb(e,n,s):n==="array-contains"?new zb(e,s):n==="in"?new Gb(e,s):n==="not-in"?new Kb(e,s):n==="array-contains-any"?new Qb(e,s):new pt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Wb(e,s):new Hb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ri(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends vv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kn(e,n)}matches(e){return Ev(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ev(t){return t.op==="and"}function wv(t){return jb(t)&&Ev(t)}function jb(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function Wh(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(wv(t))return t.filters.map((e=>Wh(e))).join(",");{const e=t.filters.map((n=>Wh(n))).join(",");return`${t.op}(${e})`}}function Tv(t,e){return t instanceof pt?(function(s,r){return r instanceof pt&&s.op===r.op&&s.field.isEqual(r.field)&&Gn(s.value,r.value)})(t,e):t instanceof Kn?(function(s,r){return r instanceof Kn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,a)=>i&&Tv(o,r.filters[a])),!0):!1})(t,e):void fe(19439)}function Iv(t){return t instanceof pt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`})(t):t instanceof Kn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Iv).join(" ,")+"}"})(t):"Filter"}class qb extends pt{constructor(e,n,s){super(e,n,s),this.key=ue.fromName(s.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wb extends pt{constructor(e,n){super(e,"in",n),this.keys=bv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Hb extends pt{constructor(e,n){super(e,"not-in",n),this.keys=bv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function bv(t,e){return(e.arrayValue?.values||[]).map((n=>ue.fromName(n.referenceValue)))}class zb extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&ua(n.arrayValue,this.value)}}class Gb extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ua(this.value.arrayValue,n)}}class Kb extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ua(this.value.arrayValue,n)}}class Qb extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>ua(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function j1(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Yb(t,e,n,s,r,i,o)}function uf(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Wh(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Pi(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Pi(s))).join(",")),e.Te=n}return e.Te}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!B1(t.startAt,e.startAt)&&B1(t.endAt,e.endAt)}function Hh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Xb(t,e,n,s,r,i,o,a){return new Xc(t,e,n,s,r,i,o,a)}function df(t){return new Xc(t)}function q1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jb(t){return t.collectionGroup!==null}function Uo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _t(Pt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new rc(i,s))})),n.has(Pt.keyField().canonicalString())||e.Ie.push(new rc(Pt.keyField(),s))}return e.Ie}function jn(t){const e=_e(t);return e.Ee||(e.Ee=Zb(e,Uo(t))),e.Ee}function Zb(t,e){if(t.limitType==="F")return j1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new rc(r.field,i)}));const n=t.endAt?new sc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new sc(t.startAt.position,t.startAt.inclusive):null;return j1(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function zh(t,e,n){return new Xc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return hf(jn(t),jn(e))&&t.limitType===e.limitType}function Cv(t){return`${uf(jn(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>Iv(r))).join(", ")}]`),Qc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Pi(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Pi(r))).join(",")),`Target(${s})`})(jn(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ue.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of Uo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,a,c){const u=$1(o,a,c);return o.inclusive?u<=0:u<0})(s.startAt,Uo(s),r)||s.endAt&&!(function(o,a,c){const u=$1(o,a,c);return o.inclusive?u>=0:u>0})(s.endAt,Uo(s),r))})(t,e)}function eC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sv(t){return(e,n)=>{let s=!1;for(const r of Uo(t)){const i=tC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tC(t,e,n){const s=t.field.isKeyField()?ue.comparator(e.key,n.key):(function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ri(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return uv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new ut(ue.comparator);function ps(){return nC}const Av=new ut(ue.comparator);function Co(...t){let e=Av;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=Av;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ar(){return $o()}function Pv(){return $o()}function $o(){return new zr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const sC=new ut(ue.comparator),rC=new _t(ue.comparator);function ke(...t){let e=rC;for(const n of t)e=e.add(n);return e}const iC=new _t(Pe);function oC(){return iC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function kv(t){return{integerValue:""+t}}function aC(t,e){return Ob(e)?kv(e):ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function lC(t,e,n){return t instanceof ic?(function(r,i){const o={fields:{[fv]:{stringValue:dv},[mv]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&lf(i)&&(i=Yc(i)),i&&(o.fields[pv]=i),{mapValue:o}})(n,e):t instanceof ha?xv(t,e):t instanceof da?Ov(t,e):(function(r,i){const o=Nv(r,i),a=W1(o)+W1(r.Ae);return qh(o)&&qh(r.Ae)?kv(a):ff(r.serializer,a)})(t,e)}function cC(t,e,n){return t instanceof ha?xv(t,e):t instanceof da?Ov(t,e):n}function Nv(t,e){return t instanceof oc?(function(s){return qh(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class ic extends eu{}class ha extends eu{constructor(e){super(),this.elements=e}}function xv(t,e){const n=Dv(e);for(const s of t.elements)n.some((r=>Gn(r,s)))||n.push(s);return{arrayValue:{values:n}}}class da extends eu{constructor(e){super(),this.elements=e}}function Ov(t,e){let n=Dv(e);for(const s of t.elements)n=n.filter((r=>!Gn(r,s)));return{arrayValue:{values:n}}}class oc extends eu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function W1(t){return it(t.integerValue||t.doubleValue)}function Dv(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uC(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof ha&&r instanceof ha||s instanceof da&&r instanceof da?Ai(s.elements,r.elements,Gn):s instanceof oc&&r instanceof oc?Gn(s.Ae,r.Ae):s instanceof ic&&r instanceof ic})(t.transform,e.transform)}class hC{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lv(t.key,qn.none()):new Da(t.key,t.data,qn.none());{const n=t.data,s=Yt.empty();let r=new _t(Pt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new dr(t.key,s,new ln(r.toArray()),qn.none())}}function dC(t,e,n){t instanceof Da?(function(r,i,o){const a=r.value.clone(),c=z1(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(t,e,n):t instanceof dr?(function(r,i,o){if(!Sl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=z1(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Vv(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Bo(t,e,n,s){return t instanceof Da?(function(i,o,a,c){if(!Sl(i.precondition,o))return a;const u=i.value.clone(),h=G1(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof dr?(function(i,o,a,c){if(!Sl(i.precondition,o))return a;const u=G1(i.fieldTransforms,c,o),h=o.data;return h.setAll(Vv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,s):(function(i,o,a){return Sl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(t,e,n)}function fC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Nv(s.transform,r||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(s.field,i))}return n||null}function H1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ai(s,r,((i,o)=>uC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Da extends tu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dr extends tu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function z1(t,e,n){const s=new Map;Fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,cC(o,a,n[r]))}return s}function G1(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,lC(i,o,e))}return s}class Lv extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pC extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&dC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Bo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Bo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Pv();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Mv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Ai(this.mutations,e.mutations,((n,s)=>H1(n,s)))&&Ai(this.baseMutations,e.baseMutations,((n,s)=>H1(n,s)))}}class pf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return sC})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pf(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Ne;function yC(t){switch(t){case $.OK:return fe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Fv(t){if(t===void 0)return fs("GRPC error has no .code"),$.UNKNOWN;switch(t){case lt.OK:return $.OK;case lt.CANCELLED:return $.CANCELLED;case lt.UNKNOWN:return $.UNKNOWN;case lt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case lt.INTERNAL:return $.INTERNAL;case lt.UNAVAILABLE:return $.UNAVAILABLE;case lt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case lt.NOT_FOUND:return $.NOT_FOUND;case lt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case lt.ABORTED:return $.ABORTED;case lt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case lt.DATA_LOSS:return $.DATA_LOSS;default:return fe(39323,{code:t})}}(Ne=lt||(lt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new Hs([4294967295,4294967295],0);function K1(t){const e=vC().encode(t),n=new ev;return n.update(e),new Uint8Array(n.digest())}function Q1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([r,i],0)]}class mf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(s<0)throw new So(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hs.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(Hs.fromNumber(s)));return r.compare(EC)===1&&(r=new Hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=K1(e),[s,r]=Q1(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mf(i,r,n);return s.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const n=K1(e),[s,r]=Q1(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nu(me.min(),r,new ut(Pe),ps(),ke())}}class Ma{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ma(s,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class Uv{constructor(e,n){this.targetId=e,this.Ce=n}}class $v{constructor(e,n,s=Nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Y1{constructor(){this.ve=0,this.Fe=X1(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ke(),n=ke(),s=ke();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:fe(38017,{changeType:i})}})),new Ma(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=X1()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class wC{constructor(e){this.Ge=e,this.ze=new Map,this.je=ps(),this.Je=ll(),this.He=ll(),this.Ye=new ut(Pe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Hh(i))if(s===0){const o=new ue(i.path);this.et(n,o,Ut.newNoDocument(o,me.min()))}else Fe(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=nr(s).toUint8Array()}catch(c){if(c instanceof hv)return Si("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new mf(o,r,i)}catch(c){return Si(c instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Hh(a.target)){const c=new ue(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ut.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=ke();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new nu(e,n,this.Ye,this.je,s);return this.je=ps(),this.Je=ll(),this.He=ll(),this.Ye=new ut(Pe),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Y1,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new _t(Pe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new _t(Pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Y1),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ll(){return new ut(ue.comparator)}function X1(){return new ut(ue.comparator)}const TC={asc:"ASCENDING",desc:"DESCENDING"},IC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bC={and:"AND",or:"OR"};class CC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Qc(e)?e:{value:e}}function ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SC(t,e){return ac(t,e.toTimestamp())}function Wn(t){return Fe(!!t,49232),me.fromTimestamp((function(n){const s=tr(n);return new Qe(s.seconds,s.nanos)})(t))}function gf(t,e){return Kh(t,e).canonicalString()}function Kh(t,e){const n=(function(r){return new Ze(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function jv(t){const e=Ze.fromString(t);return Fe(Gv(e),10190,{key:e.toString()}),e}function Qh(t,e){return gf(t.databaseId,e.path)}function nh(t,e){const n=jv(e);if(n.get(1)!==t.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Wv(n))}function qv(t,e){return gf(t.databaseId,e)}function AC(t){const e=jv(t);return e.length===4?Ze.emptyPath():Wv(e)}function Yh(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wv(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function J1(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function RC(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Fe(h===void 0||typeof h=="string",58123),Nt.fromBase64String(h||"")):(Fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Nt.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?$.UNKNOWN:Fv(u.code);return new se(h,u.message||"")})(o);n=new $v(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=nh(t,s.document.name),i=Wn(s.document.updateTime),o=s.document.createTime?Wn(s.document.createTime):me.min(),a=new Yt({mapValue:{fields:s.document.fields}}),c=Ut.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Al(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=nh(t,s.document),i=s.readTime?Wn(s.readTime):me.min(),o=Ut.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Al([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=nh(t,s.document),i=s.removedTargetIds||[];n=new Al([],i,r,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new _C(r,i),a=s.targetId;n=new Uv(a,o)}}return n}function PC(t,e){let n;if(e instanceof Da)n={update:J1(t,e.key,e.value)};else if(e instanceof Lv)n={delete:Qh(t,e.key)};else if(e instanceof dr)n={update:J1(t,e.key,e.data),updateMask:FC(e.fieldMask)};else{if(!(e instanceof pC))return fe(16599,{Vt:e.type});n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const a=o.transform;if(a instanceof ic)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw fe(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:SC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function kC(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?Wn(r.updateTime):Wn(i);return o.isEqual(me.min())&&(o=Wn(i)),new hC(o,r.transformResults||[])})(n,e)))):[]}function NC(t,e){return{documents:[qv(t,e.path)]}}function xC(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=qv(t,r);const i=(function(u){if(u.length!==0)return zv(Kn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:ii(p.field),direction:MC(p.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Gh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function OC(t){let e=AC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Fe(s===1,65062);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(d){const p=Hv(d);return p instanceof Kn&&wv(p)?p.getFilters():[p]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((p=>(function(S){return new rc(oi(S.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(p)))})(n.orderBy));let a=null;n.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Qc(p)?null:p})(n.limit));let c=null;n.startAt&&(c=(function(d){const p=!!d.before,g=d.values||[];return new sc(g,p)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const p=!d.before,g=d.values||[];return new sc(g,p)})(n.endAt)),Xb(e,r,o,i,a,"F",c,u)}function DC(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=oi(n.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=oi(n.unaryFilter.field);return pt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oi(n.unaryFilter.field);return pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return pt.create(oi(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Kn.create(n.compositeFilter.filters.map((s=>Hv(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function MC(t){return TC[t]}function VC(t){return IC[t]}function LC(t){return bC[t]}function ii(t){return{fieldPath:t.canonicalString()}}function oi(t){return Pt.fromServerFormat(t.fieldPath)}function zv(t){return t instanceof pt?(function(n){if(n.op==="=="){if(U1(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NAN"}};if(F1(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(U1(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NAN"}};if(F1(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(n.field),op:VC(n.op),value:n.value}}})(t):t instanceof Kn?(function(n){const s=n.getFilters().map((r=>zv(r)));return s.length===1?s[0]:{compositeFilter:{op:LC(n.op),filters:s}}})(t):fe(54877,{filter:t})}function FC(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,s,r,i=me.min(),o=me.min(),a=Nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.yt=e}}function $C(t){const e=OC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.Cn=new jC}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(er.min())}updateCollectionGroup(e,n,s){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class jC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _t(Ze.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _t(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kv=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(Kv,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ki(0)}static cr(){return new ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="LruGarbageCollector",qC=1048576;function tg([t,e],[n,s]){const r=Pe(t,n);return r===0?Pe(e,s):r}class WC{constructor(e){this.Ir=e,this.buffer=new _t(tg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();tg(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(eg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wi(n)?ee(eg,"Ignoring IndexedDB error during garbage collection: ",n):await qi(n)}await this.Vr(3e5)}))}}class zC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Kc.ce);const s=new WC(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Z1)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Z1):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(s=d,a=Date.now(),this.removeTargets(e,s,n)))).next((d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((d=>(u=Date.now(),si()<=Ae.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function GC(t,e){return new zC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.changes=new zr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?F.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&Bo(s.mutation,r,ln.empty(),Qe.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ke()){const r=Ar();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Co();return i.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Ar();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ke())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{n.set(o,a)}))}))}computeViews(e,n,s,r){let i=ps();const o=$o(),a=(function(){return $o()})();return n.forEach(((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof dr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Bo(h.mutation,u,h.mutation.getFieldMask(),Qe.now())):o.set(u.key,ln.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>a.set(u,new QC(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,n){const s=$o();let r=new ut(((o,a)=>o-a)),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const a of o)a.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ln.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||ke()).add(c);r=r.insert(a.batchId,d)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=Pv();h.forEach((p=>{if(!i.has(p)){const g=Mv(n.get(p),s.get(p));g!==null&&d.set(p,g),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return F.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):F.resolve(Ar());let a=aa,c=i;return o.next((u=>F.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{c=c.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ke()))).next((h=>({batchId:a,changes:Rv(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next((s=>{let r=Co();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,i).next((a=>F.forEach(a,(c=>{const u=(function(d,p){return new Xc(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ut.newInvalidDocument(h)))}));let a=Co();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&Bo(h.mutation,u,ln.empty(),Qe.now()),Zc(n,u)&&(a=a.insert(c,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Wn(r.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:$C(r.bundledQuery),readTime:Wn(r.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.overlays=new ut(ue.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ar();return F.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),F.resolve()}getOverlaysForCollection(e,n,s){const r=Ar(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return F.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ut(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Ar(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return F.resolve(a)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gC(n,s));let i=this.qr.get(n);i===void 0&&(i=ke(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.Qr=new _t(Tt.$r),this.Ur=new _t(Tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Tt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Tt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ue(new Ze([])),s=new Tt(n,e),r=new Tt(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ue(new Ze([])),s=new Tt(n,e),r=new Tt(n,e+1);let i=ke();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Tt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ue.comparator(e.key,n.key)||Pe(e.Yr,n.Yr)}static Kr(e,n){return Pe(e.Yr,n.Yr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new _t(Tt.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Zr=this.Zr.add(new Tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?af:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Tt(n,0),r=new Tt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const a=this.Xr(o.Yr);i.push(a)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _t(Pe);return n.forEach((r=>{const i=new Tt(r,0),o=new Tt(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{s=s.add(a.Yr)}))})),F.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ue.isDocumentKey(i)||(i=i.child(""));const o=new Tt(new ue(i),0);let a=new _t(Pe);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Yr)),!0)}),o),F.resolve(this.ti(a))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return F.forEach(n.mutations,(r=>{const i=new Tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Tt(n,0),r=this.Zr.firstAfterOrEqual(s);return F.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.ri=e,this.docs=(function(){return new ut(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return F.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let s=ps();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ut.newInvalidDocument(r))})),F.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ps();const o=n.path,a=new ue(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pb(Rb(h),s)<=0||(r.has(h.key)||Zc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,s,r){fe(9500)}ii(e,n){return F.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new nS(this)}getSize(e){return F.resolve(this.size)}}class nS extends KC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.persistence=e,this.si=new zr((n=>uf(n)),hf),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.oi=0,this._i=new _f,this.targetCount=0,this.ai=ki.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),F.waitFor(i).next((()=>r))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return F.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),F.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return F.resolve(s)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.ui={},this.overlays={},this.ci=new Kc(0),this.li=!1,this.li=!0,this.hi=new ZC,this.referenceDelegate=e(this),this.Pi=new sS(this),this.indexManager=new BC,this.remoteDocumentCache=(function(r){return new tS(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new UC(n),this.Ii=new XC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new eS(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new rS(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class rS extends Nb{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Ri=new _f,this.Vi=null}static mi(e){return new yf(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),F.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(s=>{const r=ue.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,me.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class lc{constructor(e,n){this.persistence=e,this.pi=new zr((s=>Db(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=GC(this,n)}static mi(e,n){return new lc(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?F.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((a=>{a||(s++,i.removeEntry(o,me.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),F.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bl(e.data.value)),n}br(e,n,s){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return F.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=ke(),r=ke();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new vf(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return PT()?8:xb(qt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new iS;return this.Ss(e,n,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(si()<=Ae.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(si()<=Ae.DEBUG&&ee("QueryEngine","Query:",ri(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(si()<=Ae.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):F.resolve())}ys(e,n){if(q1(n))return F.resolve(null);let s=jn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=zh(n,null,"F"),s=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=ke(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,zh(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,r){return q1(n)||r.isEqual(me.min())?F.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?F.resolve(null):(si()<=Ae.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ri(n)),this.vs(e,o,n,Ab(r,aa)).next((a=>a)))}))}Ds(e,n){let s=new _t(Sv(e));return n.forEach(((r,i)=>{Zc(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return si()<=Ae.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ri(n)),this.ps.getDocumentsMatchingQuery(e,n,er.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="LocalStore",aS=3e8;class lS{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new ut(Pe),this.xs=new zr((i=>uf(i)),hf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function cS(t,e,n,s){return new lS(t,e,n,s)}async function Yv(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],a=[];let c=ke();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function uS(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,c,u,h){const d=u.batch,p=d.keys();let g=F.resolve();return p.forEach((S=>{g=g.next((()=>h.getEntry(c,S))).next((P=>{const N=u.docVersions.get(S);Fe(N!==null,48541),P.version.compareTo(N)<0&&(d.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,d)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let c=ke();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function Xv(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function hS(t,e){const n=_e(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const a=[];e.targetChanges.forEach(((h,d)=>{const p=r.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d))));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Nt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),(function(P,N,L){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=aS?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(p,g,h)&&a.push(n.Pi.updateTargetData(i,g))}));let c=ps(),u=ke();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(dS(i,o,e.documentUpdates).next((h=>{c=h.ks,u=h.qs}))),!s.isEqual(me.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));a.push(h)}return F.waitFor(a).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=r,i)))}function dS(t,e,n){let s=ke(),r=ke();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=ps();return n.forEach(((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee(Ef,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function fS(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=af),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function pS(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,F.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new $s(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Xh(t,e,n){const s=_e(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Wi(o))throw o;ee(Ef,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function ng(t,e,n){const s=_e(t);let r=me.min(),i=ke();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const d=_e(c),p=d.xs.get(h);return p!==void 0?F.resolve(d.Ms.get(p)):d.Pi.getTargetData(u,h)})(s,o,jn(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:me.min(),n?i:ke()))).next((a=>(mS(s,eC(e),a),{documents:a,Qs:i})))))}function mS(t,e,n){let s=t.Os.get(e)||me.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class sg{constructor(){this.activeTargetIds=oC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gS{constructor(){this.Mo=new sg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new sg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="ConnectivityMonitor";class ig{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(rg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(rg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl=null;function Jh(){return cl===null?cl=(function(){return 268435456+Math.round(2147483648*Math.random())})():cl++,"0x"+cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="RestConnection",yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===tc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=Jh(),a=this.zo(e,n.toUriEncodedString());ee(sh,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(a),h=cr(u);return this.Jo(e,a,c,s,h).then((d=>(ee(sh,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw Si(sh,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",s),d}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ji})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=yS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class wS extends vS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=Jh();return new Promise(((a,c)=>{const u=new tv;u.setWithCredentials(!0),u.listenOnce(nv.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Il.NO_ERROR:const d=u.getResponseJson();ee(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Il.TIMEOUT:ee(Dt,`RPC '${e}' ${o} timed out`),c(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case Il.HTTP_ERROR:const p=u.getStatus();if(ee(Dt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g?.error;if(S&&S.status&&S.message){const P=(function(L){const U=L.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(U)>=0?U:$.UNKNOWN})(S.status);c(new se(P,S.message))}else c(new se($.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se($.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(Dt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);ee(Dt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",h,s,15)}))}T_(e,n,s){const r=Jh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iv(),a=rv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(Dt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);this.I_(d);let p=!1,g=!1;const S=new ES({Yo:N=>{g?ee(Dt,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(p||(ee(Dt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),ee(Dt,`RPC '${e}' stream ${r} sending:`,N),d.send(N))},Zo:()=>d.close()}),P=(N,L,U)=>{N.listen(L,(B=>{try{U(B)}catch(G){setTimeout((()=>{throw G}),0)}}))};return P(d,bo.EventType.OPEN,(()=>{g||(ee(Dt,`RPC '${e}' stream ${r} transport opened.`),S.o_())})),P(d,bo.EventType.CLOSE,(()=>{g||(g=!0,ee(Dt,`RPC '${e}' stream ${r} transport closed`),S.a_(),this.E_(d))})),P(d,bo.EventType.ERROR,(N=>{g||(g=!0,Si(Dt,`RPC '${e}' stream ${r} transport errored. Name:`,N.name,"Message:",N.message),S.a_(new se($.UNAVAILABLE,"The operation could not be completed")))})),P(d,bo.EventType.MESSAGE,(N=>{if(!g){const L=N.data[0];Fe(!!L,16349);const U=L,B=U?.error||U[0]?.error;if(B){ee(Dt,`RPC '${e}' stream ${r} received error:`,B);const G=B.status;let te=(function(v){const y=lt[v];if(y!==void 0)return Fv(y)})(G),ne=B.message;te===void 0&&(te=$.INTERNAL,ne="Unknown error status: "+G+" with message "+B.message),g=!0,S.a_(new se(te,ne)),d.close()}else ee(Dt,`RPC '${e}' stream ${r} received:`,L),S.u_(L)}})),P(a,sv.STAT_EVENT,(N=>{N.stat===Uh.PROXY?ee(Dt,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===Uh.NOPROXY&&ee(Dt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return new CC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="PersistentStream";class Zv{constructor(e,n,s,r,i,o,a,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(fs(n.toString()),fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new se($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(og,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(og,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TS extends Zv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=RC(this.serializer,e),s=(function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Wn(o.readTime):me.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Yh(this.serializer),n.addTarget=(function(i,o){let a;const c=o.target;if(a=Hh(c)?{documents:NC(i,c)}:{query:xC(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Bv(i,o.resumeToken);const u=Gh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=ac(i,o.snapshotVersion.toTimestamp());const u=Gh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const s=DC(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Yh(this.serializer),n.removeTarget=e,this.q_(n)}}class IS extends Zv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=kC(e.writeResults,e.commitTime),s=Wn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Yh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>PC(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{}class CS extends bS{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Kh(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se($.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,Kh(n,s),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class SS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fs(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="RemoteStore";class AS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Gr(this)&&(ee($r,"Restarting streams for network reachability change."),await(async function(c){const u=_e(c);u.Ea.add(4),await Va(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ru(u)})(this))}))})),this.Ra=new SS(s,r)}}async function ru(t){if(Gr(t))for(const e of t.da)await e(!0)}async function Va(t){for(const e of t.da)await e(!1)}function e3(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),bf(n)?If(n):Hi(n).O_()&&Tf(n,e))}function wf(t,e){const n=_e(t),s=Hi(n);n.Ia.delete(e),s.O_()&&t3(n,e),n.Ia.size===0&&(s.O_()?s.L_():Gr(n)&&n.Ra.set("Unknown"))}function Tf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).Y_(e)}function t3(t,e){t.Va.Ue(e),Hi(t).Z_(e)}function If(t){t.Va=new wC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.Ra.ua()}function bf(t){return Gr(t)&&!Hi(t).x_()&&t.Ia.size>0}function Gr(t){return _e(t).Ea.size===0}function n3(t){t.Va=void 0}async function RS(t){t.Ra.set("Online")}async function PS(t){t.Ia.forEach(((e,n)=>{Tf(t,e)}))}async function kS(t,e){n3(t),bf(t)?(t.Ra.ha(e),If(t)):t.Ra.set("Unknown")}async function NS(t,e,n){if(t.Ra.set("Online"),e instanceof $v&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ia.delete(a),r.Va.removeTarget(a))})(t,e)}catch(s){ee($r,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cc(t,s)}else if(e instanceof Al?t.Va.Ze(e):e instanceof Uv?t.Va.st(e):t.Va.tt(e),!n.isEqual(me.min()))try{const s=await Xv(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(Nt.EMPTY_BYTE_STRING,h.snapshotVersion)),t3(i,c);const d=new $s(h.target,c,u,h.sequenceNumber);Tf(i,d)})),i.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(s){ee($r,"Failed to raise snapshot:",s),await cc(t,s)}}async function cc(t,e,n){if(!Wi(e))throw e;t.Ea.add(1),await Va(t),t.Ra.set("Offline"),n||(n=()=>Xv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee($r,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ru(t)}))}function s3(t,e){return e().catch((n=>cc(t,n,e)))}async function iu(t){const e=_e(t),n=rr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:af;for(;xS(e);)try{const r=await fS(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,OS(e,r)}catch(r){await cc(e,r)}r3(e)&&i3(e)}function xS(t){return Gr(t)&&t.Ta.length<10}function OS(t,e){t.Ta.push(e);const n=rr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function r3(t){return Gr(t)&&!rr(t).x_()&&t.Ta.length>0}function i3(t){rr(t).start()}async function DS(t){rr(t).ra()}async function MS(t){const e=rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function VS(t,e,n){const s=t.Ta.shift(),r=pf.from(s,e,n);await s3(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await iu(t)}async function LS(t,e){e&&rr(t).X_&&await(async function(s,r){if((function(o){return yC(o)&&o!==$.ABORTED})(r.code)){const i=s.Ta.shift();rr(s).B_(),await s3(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await iu(s)}})(t,e),r3(t)&&i3(t)}async function ag(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee($r,"RemoteStore received new credentials");const s=Gr(n);n.Ea.add(3),await Va(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ru(n)}async function FS(t,e){const n=_e(t);e?(n.Ea.delete(2),await ru(n)):e||(n.Ea.add(2),await Va(n),n.Ra.set("Unknown"))}function Hi(t){return t.ma||(t.ma=(function(n,s,r){const i=_e(n);return i.sa(),new TS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:RS.bind(null,t),t_:PS.bind(null,t),r_:kS.bind(null,t),H_:NS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),bf(t)?If(t):t.Ra.set("Unknown")):(await t.ma.stop(),n3(t))}))),t.ma}function rr(t){return t.fa||(t.fa=(function(n,s,r){const i=_e(n);return i.sa(),new IS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:DS.bind(null,t),r_:LS.bind(null,t),ta:MS.bind(null,t),na:VS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await iu(t)):(await t.fa.stop(),t.Ta.length>0&&(ee($r,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Cf(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(fs("AsyncQueue",`${e}: ${t}`),Wi(t))return new se($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ue.comparator(n.key,s.key):(n,s)=>ue.comparator(n.key,s.key),this.keyedMap=Co(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.ga=new ut(ue.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Ni{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((a=>{o.push({type:0,doc:a})})),new Ni(e,n,yi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class $S{constructor(){this.queries=cg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=_e(n),i=r.queries;r.queries=cg(),i.forEach(((o,a)=>{for(const c of a.Sa)c.onError(s)}))})(this,new se($.ABORTED,"Firestore shutting down"))}}function cg(){return new zr((t=>Cv(t)),Jc)}async function BS(t,e){const n=_e(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new US,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Sf(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Af(n)}async function jS(t,e){const n=_e(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function qS(t,e){const n=_e(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(r)&&(s=!0);o.wa=r}}s&&Af(n)}function WS(t,e,n){const s=_e(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Af(t){t.Ca.forEach((e=>{e.next()}))}var Zh,ug;(ug=Zh||(Zh={})).Ma="default",ug.Cache="cache";class HS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ni(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e){this.key=e}}class a3{constructor(e){this.key=e}}class zS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ke(),this.mutatedKeys=ke(),this.eu=Sv(e),this.tu=new yi(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new lg,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,d)=>{const p=r.get(h),g=Zc(this.query,d)?d:null,S=!!p&&this.mutatedKeys.has(p.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?S!==P&&(s.track({type:3,doc:g}),N=!0):this.su(p,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),N=!0):p&&!g&&(s.track({type:1,doc:p}),N=!0,(c||u)&&(a=!0)),N&&(g?(o=o.add(g),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(g,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:N})}};return P(g)-P(S)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(s),r=r??!1;const a=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ni(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ke(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new a3(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new o3(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=ke();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ni.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Rf="SyncEngine";class GS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class KS{constructor(e){this.key=e,this.hu=!1}}class QS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new zr((a=>Cv(a)),Jc),this.Iu=new Map,this.Eu=new Set,this.du=new ut(ue.comparator),this.Au=new Map,this.Ru=new _f,this.Vu={},this.mu=new Map,this.fu=ki.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YS(t,e,n=!0){const s=f3(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await l3(s,e,n,!0),r}async function XS(t,e){const n=f3(t);await l3(n,e,!0,!1)}async function l3(t,e,n,s){const r=await pS(t.localStore,jn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await JS(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&e3(t.remoteStore,r),a}async function JS(t,e,n,s,r){t.pu=(d,p,g)=>(async function(P,N,L,U){let B=N.view.ru(L);B.Cs&&(B=await ng(P.localStore,N.query,!1).then((({documents:A})=>N.view.ru(A,B))));const G=U&&U.targetChanges.get(N.targetId),te=U&&U.targetMismatches.get(N.targetId)!=null,ne=N.view.applyChanges(B,P.isPrimaryClient,G,te);return dg(P,N.targetId,ne.au),ne.snapshot})(t,d,p,g);const i=await ng(t.localStore,e,!0),o=new zS(e,i.Qs),a=o.ru(i.documents),c=Ma.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);dg(t,n,u.au);const h=new GS(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function ZS(t,e,n){const s=_e(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Jc(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Xh(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&wf(s.remoteStore,r.targetId),ed(s,r.targetId)})).catch(qi)):(ed(s,r.targetId),await Xh(s.localStore,r.targetId,!0))}async function eA(t,e){const n=_e(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),wf(n.remoteStore,s.targetId))}async function tA(t,e,n){const s=lA(t);try{const r=await(function(o,a){const c=_e(o),u=Qe.now(),h=a.reduce(((g,S)=>g.add(S.key)),ke());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let S=ps(),P=ke();return c.Ns.getEntries(g,h).next((N=>{S=N,S.forEach(((L,U)=>{U.isValidDocument()||(P=P.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,S))).next((N=>{d=N;const L=[];for(const U of a){const B=fC(U,d.get(U.key).overlayedDocument);B!=null&&L.push(new dr(U.key,B,yv(B.value.mapValue),qn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,L,a)})).next((N=>{p=N;const L=N.applyToLocalDocumentSet(d,P);return c.documentOverlayCache.saveOverlays(g,N.batchId,L)}))})).then((()=>({batchId:p.batchId,changes:Rv(d)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new ut(Pe)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,n),await La(s,r.changes),await iu(s.remoteStore)}catch(r){const i=Sf(r,"Failed to persist write");n.reject(i)}}async function c3(t,e){const n=_e(t);try{const s=await hS(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(Fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Fe(o.hu,14607):r.removedDocuments.size>0&&(Fe(o.hu,42227),o.hu=!1))})),await La(n,s,e)}catch(s){await qi(s)}}function hg(t,e,n){const s=_e(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach(((h,d)=>{for(const p of d.Sa)p.va(a)&&(u=!0)})),u&&Af(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nA(t,e,n){const s=_e(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new ut(ue.comparator);o=o.insert(i,Ut.newNoDocument(i,me.min()));const a=ke().add(i),c=new nu(me.min(),new Map,new ut(Pe),o,a);await c3(s,c),s.du=s.du.remove(i),s.Au.delete(e),Pf(s)}else await Xh(s.localStore,e,!1).then((()=>ed(s,e,n))).catch(qi)}async function sA(t,e){const n=_e(t),s=e.batch.batchId;try{const r=await uS(n.localStore,e);h3(n,s,null),u3(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await La(n,r)}catch(r){await qi(r)}}async function rA(t,e,n){const s=_e(t);try{const r=await(function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next((d=>(Fe(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(s.localStore,e);h3(s,e,n),u3(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await La(s,r)}catch(r){await qi(r)}}function u3(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function h3(t,e,n){const s=_e(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||d3(t,s)}))}function d3(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Pf(t))}function dg(t,e,n){for(const s of n)s instanceof o3?(t.Ru.addReference(s.key,e),iA(t,s)):s instanceof a3?(ee(Rf,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||d3(t,s.key)):fe(19791,{wu:s})}function iA(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ee(Rf,"New document in limbo: "+n),t.Eu.add(s),Pf(t))}function Pf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ue(Ze.fromString(e)),s=t.fu.next();t.Au.set(s,new KS(n)),t.du=t.du.insert(n,s),e3(t.remoteStore,new $s(jn(df(n.path)),s,"TargetPurposeLimboResolution",Kc.ce))}}async function La(t,e,n){const s=_e(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((a,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const h=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){r.push(u);const h=vf.As(c.targetId,u);i.push(h)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>F.forEach(u,(p=>F.forEach(p.Es,(g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g))).next((()=>F.forEach(p.ds,(g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))))))}catch(d){if(!Wi(d))throw d;ee(Ef,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.Ms.get(p),S=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(S);h.Ms=h.Ms.insert(p,P)}}})(s.localStore,i))}async function oA(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee(Rf,"User change. New user:",e.toKey());const s=await Yv(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((c=>{c.reject(new se($.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await La(n,s.Ls)}}function aA(t,e){const n=_e(t),s=n.Au.get(e);if(s&&s.hu)return ke().add(s.key);{let r=ke();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const a=n.Tu.get(o);r=r.unionWith(a.view.nu)}return r}}function f3(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c3.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nA.bind(null,e),e.Pu.H_=qS.bind(null,e.eventManager),e.Pu.yu=WS.bind(null,e.eventManager),e}function lA(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rA.bind(null,e),e}class uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cS(this.persistence,new oS,e.initialUser,this.serializer)}Cu(e){return new Qv(yf.mi,this.serializer)}Du(e){return new gS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uc.provider={build:()=>new uc};class cA extends uc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Fe(this.persistence.referenceDelegate instanceof lc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HC(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new Qv((s=>lc.mi(s,n)),this.serializer)}}class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oA.bind(null,this.syncEngine),await FS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $S})()}createDatastore(e){const n=su(e.databaseInfo.databaseId),s=(function(i){return new wS(i)})(e.databaseInfo);return(function(i,o,a,c){return new CS(i,o,a,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,a){return new AS(s,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>hg(this.syncEngine,n,0)),(function(){return ig.v()?new ig:new _S})())}createSyncEngine(e,n){return(function(r,i,o,a,c,u,h){const d=new QS(r,i,o,a,c,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=_e(n);ee($r,"RemoteStore shutting down."),s.Ea.add(5),await Va(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}td.provider={build:()=>new td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="FirestoreClient";class hA{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Vt.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{ee(ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ee(ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sf(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),ee(ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Yv(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function fg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dA(t);ee(ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>ag(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>ag(e.remoteStore,r))),t._onlineComponents=e}async function dA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(ir,"Using user provided OfflineComponentProvider");try{await ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Si("Error using user provided cache. Falling back to memory cache: "+n),await ih(t,new uc)}}else ee(ir,"Using default OfflineComponentProvider"),await ih(t,new cA(void 0));return t._offlineComponents}async function p3(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(ir,"Using user provided OnlineComponentProvider"),await fg(t,t._uninitializedComponentsProvider._online)):(ee(ir,"Using default OnlineComponentProvider"),await fg(t,new td))),t._onlineComponents}function fA(t){return p3(t).then((e=>e.syncEngine))}async function pA(t){const e=await p3(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=ZS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eA.bind(null,e.syncEngine),n}function mA(t,e,n={}){const s=new zs;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,c,u){const h=new uA({next:p=>{h.Nu(),o.enqueueAndForget((()=>jS(i,d)));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new se($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new se($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new HS(df(a.path),h,{includeMetadataChanges:!0,qa:!0});return BS(i,d)})(await pA(t),t.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3="firestore.googleapis.com",mg=!0;class gg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g3,this.ssl=mg}else this.host=e.host,this.ssl=e.ssl??mg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qC)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m3(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kf{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new mb;switch(s.type){case"firstParty":return new vb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=pg.get(n);s&&(ee("ComponentProvider","Removing Datastore"),pg.delete(n),s.terminate())})(this),Promise.resolve()}}function gA(t,e,n,s={}){t=Ur(t,kf);const r=cr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&(qd(`https://${a}`),Wd("Firestore",!0)),i.host!==g3&&i.host!==a&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:r,emulatorOptions:s};if(!Js(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=Vt.MOCK_USER;else{u=uy(s.mockUserToken,t._app?.options.projectId);const d=s.mockUserToken.sub||s.mockUserToken.user_id;if(!d)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Vt(d)}t._authCredentials=new gb(new av(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nf(this.firestore,e,this._query)}}class gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Oa(n,gt._jsonSchema))return new gt(e,s||null,new ue(Ze.fromString(n.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:ct("string",gt._jsonSchemaVersion),referencePath:ct("string")};class fa extends Nf{constructor(e,n,s){super(e,n,df(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new ue(e))}withConverter(e){return new fa(this.firestore,e,this._path)}}function ul(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=rf.newId()),Cb("doc","path",e),t instanceof kf){const s=Ze.fromString(e,...n);return k1(s),new gt(t,null,new ue(s))}{if(!(t instanceof gt||t instanceof fa))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ze.fromString(e,...n));return k1(s),new gt(t.firestore,t instanceof fa?t.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="AsyncQueue";class yg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jv(this,"async_queue_retry"),this._c=()=>{const s=rh();s&&ee(_g,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new zs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Wi(e))throw e;ee(_g,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,fs("INTERNAL UNHANDLED ERROR: ",vg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Cf.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&fe(47125,{Pc:vg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function vg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ou extends kf{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new yg,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yg(e),this._firestoreClient=void 0,await e}}}function _A(t,e){const n=typeof t=="object"?t:Kd(),s=typeof t=="string"?t:tc,r=qc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ay("firestore");i&&gA(r,...i)}return r}function _3(t){if(t._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yA(t),t._firestoreClient}function yA(t){const e=t._freezeSettings(),n=(function(r,i,o,a){return new Lb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,m3(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new hA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(Nt.fromBase64String(e))}catch(n){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Oa(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:ct("string",fn._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hn._jsonSchemaVersion}}static fromJSON(e){if(Oa(e,Hn._jsonSchema))return new Hn(e.latitude,e.longitude)}}Hn._jsonSchemaVersion="firestore/geoPoint/1.0",Hn._jsonSchema={type:ct("string",Hn._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Oa(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new zn(e.vectorValues);throw new se($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:ct("string",zn._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=/^__.*__$/;class EA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Da(e,this.data,n,this.fieldTransforms)}}class y3{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function v3(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Of{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Of({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return hc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(v3(this.Ac)&&vA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class wA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||su(e)}Cc(e,n,s,r=!1){return new Of({Ac:e,methodName:n,Dc:s,path:Pt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E3(t){const e=t._freezeSettings(),n=su(t._databaseId);return new wA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TA(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);Df("Data must be an object, but it was:",o,s);const a=w3(s,o);let c,u;if(i.merge)c=new ln(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=nd(e,d,n);if(!o.contains(p))throw new se($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);I3(h,p)||h.push(p)}c=new ln(h),u=o.fieldTransforms.filter((d=>c.covers(d.field)))}else c=null,u=o.fieldTransforms;return new EA(new Yt(a),c,u)}class lu extends xf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}function IA(t,e,n,s){const r=t.Cc(1,e,n);Df("Data must be an object, but it was:",r,s);const i=[],o=Yt.empty();hr(s,((c,u)=>{const h=Mf(e,c,n);u=Xe(u);const d=r.yc(h);if(u instanceof lu)i.push(h);else{const p=cu(u,d);p!=null&&(i.push(h),o.set(h,p))}}));const a=new ln(i);return new y3(o,a,r.fieldTransforms)}function bA(t,e,n,s,r,i){const o=t.Cc(1,e,n),a=[nd(e,s,n)],c=[r];if(i.length%2!=0)throw new se($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(nd(e,i[p])),c.push(i[p+1]);const u=[],h=Yt.empty();for(let p=a.length-1;p>=0;--p)if(!I3(u,a[p])){const g=a[p];let S=c[p];S=Xe(S);const P=o.yc(g);if(S instanceof lu)u.push(g);else{const N=cu(S,P);N!=null&&(u.push(g),h.set(g,N))}}const d=new ln(u);return new y3(h,d,o.fieldTransforms)}function cu(t,e){if(T3(t=Xe(t)))return Df("Unsupported field value:",e,t),w3(t,e);if(t instanceof xf)return(function(s,r){if(!v3(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const a of s){let c=cu(a,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Xe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Qe.fromDate(s);return{timestampValue:ac(r.serializer,i)}}if(s instanceof Qe){const i=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ac(r.serializer,i)}}if(s instanceof Hn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fn)return{bytesValue:Bv(r.serializer,s._byteString)};if(s instanceof gt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof zn)return(function(o,a){return{mapValue:{fields:{[gv]:{stringValue:_v},[nc]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return ff(a.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${of(s)}`)})(t,e)}function w3(t,e){const n={};return uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(t,((s,r)=>{const i=cu(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function T3(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Hn||t instanceof fn||t instanceof gt||t instanceof xf||t instanceof zn)}function Df(t,e,n){if(!T3(n)||!lv(n)){const s=of(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function nd(t,e,n){if((e=Xe(e))instanceof au)return e._internalPath;if(typeof e=="string")return Mf(t,e);throw hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const CA=new RegExp("[~\\*/\\[\\]]");function Mf(t,e,n){if(e.search(CA)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new au(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new se($.INVALID_ARGUMENT,a+t+c)}function I3(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(C3("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SA extends b3{data(){return super.data()}}function C3(t,e){return typeof e=="string"?Mf(t,e):e instanceof au?e._internalPath:e._delegate._internalPath}class AA{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return hr(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[nc].arrayValue?.values?.map((s=>it(s.doubleValue)));return new zn(n)}convertGeoPoint(e){return new Hn(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(la(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);Fe(Gv(s),9688,{name:e});const r=new ca(s.get(1),s.get(3)),i=new ue(s.popFirst(5));return r.isEqual(n)||fs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class Ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xr extends b3{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(C3("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=xr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",xr._jsonSchema={type:ct("string",xr._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class Rl extends xr{data(e={}){return super.data(e)}}class jo{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ao(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Rl(this._firestore,this._userDataWriter,s.key,s,new Ao(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{const c=new Rl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ao(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const c=new Rl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ao(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:PA(a.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){t=Ur(t,gt);const e=Ur(t.firestore,ou);return mA(_3(e),t._key).then((n=>xA(e,t,n)))}jo._jsonSchemaVersion="firestore/querySnapshot/1.0",jo._jsonSchema={type:ct("string",jo._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class kA extends AA{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function NA(t,e,n){t=Ur(t,gt);const s=Ur(t.firestore,ou),r=RA(t.converter,e);return S3(s,[TA(E3(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,qn.none())])}function wg(t,e,n,...s){t=Ur(t,gt);const r=Ur(t.firestore,ou),i=E3(r);let o;return o=typeof(e=Xe(e))=="string"||e instanceof au?bA(i,"updateDoc",t._key,e,n,s):IA(i,"updateDoc",t._key,e),S3(r,[o.toMutation(t._key,qn.exists(!0))])}function S3(t,e){return(function(s,r){const i=new zs;return s.asyncQueue.enqueueAndForget((async()=>tA(await fA(s),r,i))),i.promise})(_3(t),e)}function xA(t,e,n){const s=n.docs.get(e._key),r=new kA(t);return new xr(t,r,e._key,s,new Ao(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ji=r})(Hr),Mr(new Zs("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ou(new _b(s.getProvider("auth-internal")),new Eb(o,s.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(u.options.projectId,h)})(o,r),o);return i={useFetchStreams:n,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Un(S1,A1,e),Un(S1,A1,"esm2020")})();var Tg={};const Ig="@firebase/database",bg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A3="";function OA(t){A3=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),bt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DA(e)}}catch{}return new MA},Rr=R3("localStorage"),VA=R3("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new jc("@firebase/database"),LA=(function(){let t=1;return function(){return t++}})(),P3=function(t){const e=BT(t),n=new LT;n.update(e);const s=n.digest();return jd.encodeByteArray(s)},Fa=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fa.apply(null,s):typeof s=="object"?e+=bt(s):e+=s,e+=" "}return e};let qo=null,Cg=!0;const FA=function(t,e){K(!0,"Can't turn on custom loggers persistently."),vi.logLevel=Ae.VERBOSE,qo=vi.log.bind(vi)},$t=function(...t){if(Cg===!0&&(Cg=!1,qo===null&&VA.get("logging_enabled")===!0&&FA()),qo){const e=Fa.apply(null,t);qo(e)}},Ua=function(t){return function(...e){$t(t,...e)}},sd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fa(...t);vi.error(e)},ms=function(...t){const e=`FIREBASE FATAL ERROR: ${Fa(...t)}`;throw vi.error(e),new Error(e)},Zt=function(...t){const e="FIREBASE WARNING: "+Fa(...t);vi.warn(e)},UA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k3=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$A=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xi="[MIN_NAME]",Br="[MAX_NAME]",zi=function(t,e){if(t===e)return 0;if(t===xi||e===Br)return-1;if(e===xi||t===Br)return 1;{const n=Sg(t),s=Sg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},BA=function(t,e){return t===e?0:t<e?-1:1},mo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+bt(e))},Vf=function(t){if(typeof t!="object"||t===null)return bt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=bt(e[s]),n+=":",n+=Vf(t[e[s]]);return n+="}",n},N3=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function en(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const x3=function(t){K(!k3(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},jA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const HA=new RegExp("^-?(0*)\\d{1,10}$"),zA=-2147483648,GA=2147483647,Sg=function(t){if(HA.test(t)){const e=Number(t);if(e>=zA&&e<=GA)return e}return null},Gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},KA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,on(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Zt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zt(e)}}class Pl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="5",O3="v",D3="s",M3="r",V3="f",L3=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,F3="ls",U3="p",rd="ac",$3="websocket",B3="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function q3(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let s;if(e===$3)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===B3)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XA(t)&&(n.ns=t.namespace);const r=[];return en(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.counters_={}}incrementCounter(e,n=1){vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={},ah={};function Ff(t){const e=t.toString();return oh[e]||(oh[e]=new JA),oh[e]}function ZA(t,e){const n=t.toString();return ah[n]||(ah[n]=e()),ah[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Gi(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="start",tR="close",nR="pLPCommand",sR="pRTLPCB",W3="id",H3="pw",z3="ser",rR="cb",iR="seg",oR="ts",aR="d",lR="dframe",G3=1870,K3=30,cR=G3-K3,uR=25e3,hR=3e4;class ci{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=Ff(n),this.urlFn=c=>(this.appCheckToken&&(c[rd]=this.appCheckToken),q3(n,B3,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hR)),$A(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ag)this.id=a,this.password=c;else if(o===tR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ag]="t",s[z3]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[O3]=Lf,this.transportSessionId&&(s[D3]=this.transportSessionId),this.lastSessionId&&(s[F3]=this.lastSessionId),this.applicationId&&(s[U3]=this.applicationId),this.appCheckToken&&(s[rd]=this.appCheckToken),typeof location<"u"&&location.hostname&&L3.test(location.hostname)&&(s[M3]=V3);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ci.forceAllow_=!0}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){return ci.forceAllow_?!0:!ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jA()&&!qA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ry(n),r=N3(s,cR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[lR]="t",s[W3]=e,s[H3]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=bt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uf{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LA(),window[nR+this.uniqueCallbackIdentifier]=e,window[sR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$t("frame writing exception"),a.stack&&$t(a.stack),$t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[W3]=this.myID,e[H3]=this.myPW,e[z3]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+K3+s.length<=G3;){const o=this.pendingSegs.shift();s=s+"&"+iR+r+"="+o.seg+"&"+oR+r+"="+o.ts+"&"+aR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(uR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=16384,fR=45e3;let dc=null;typeof MozWebSocket<"u"?dc=MozWebSocket:typeof WebSocket<"u"&&(dc=WebSocket);class vn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=Ff(n),this.connURL=vn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[O3]=Lf,typeof location<"u"&&location.hostname&&L3.test(location.hostname)&&(o[M3]=V3),n&&(o[D3]=n),s&&(o[F3]=s),r&&(o[rd]=r),i&&(o[U3]=i),q3(e,$3,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rr.set("previous_websocket_failure",!0);try{let s;RT(),this.mySock=new dc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&dc!==null&&!vn.forceDisallow_}static previouslyFailed(){return Rr.isInMemoryStorage||Rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=sa(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=N3(n,dR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vn.responsesRequiredToBeHealthy=2;vn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{static get ALL_TRANSPORTS(){return[ci,vn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vn&&vn.isAvailable();let s=n&&!vn.previouslyFailed();if(e.webSocketOnly&&(n||Zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vn];else{const r=this.transports_=[];for(const i of pa.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=6e4,mR=5e3,gR=10*1024,_R=100*1024,lh="t",Rg="d",yR="s",Pg="r",vR="e",kg="o",Ng="a",xg="n",Og="p",ER="h";class wR{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_R?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lh in e){const n=e[lh];n===Ng?this.upgradeIfSecondaryHealthy_():n===Pg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mo("t",e),s=mo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ng,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mo("t",e),s=mo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mo(lh,e);if(Rg in e){const s=e[Rg];if(n===ER){const r={...s};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yR?this.onConnectionShutdown_(s):n===Pg?this.onReset_(s):n===vR?sd("Server Error: "+s):n===kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lf!==s&&Zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Og,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Y3{static getInstance(){return new fc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=32,Mg=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new We("")}function be(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function or(t){return t.pieces_.length-t.pieceNum_}function ze(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function X3(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function J3(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Z3(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function mt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new We(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=be(t),s=be(e);if(n===null)return e;if(n===s)return Xt(ze(t),ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $f(t,e){if(or(t)!==or(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function wn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(or(t)>or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class IR{constructor(e,n){this.errorPrefix_=n,this.parts_=J3(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bc(this.parts_[s]);eE(this)}}function bR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bc(e),eE(t)}function CR(t){const e=t.parts_.pop();t.byteLength_-=Bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function eE(t){if(t.byteLength_>Mg)throw new Error(t.errorPrefix_+"has a key path longer than "+Mg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dg+") or object contains a cycle "+br(t))}function br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Y3{static getInstance(){return new Bf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1e3,SR=300*1e3,Vg=30*1e3,AR=1.3,RR=3e4,PR="server_kill",Lg=3;class as extends Q3{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=as.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=go,this.maxReconnectDelay_=SR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(bt(i)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new $c,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;as.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vs(e,"w")){const s=Ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MT(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+bt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sd("Unrecognized action received from server: "+bt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RR&&(this.reconnectDelay_=go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+as.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?$t("getToken() completed but was canceled"):($t("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new wR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Zt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(PR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Zt(d),c())}}}interrupt(e){$t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kh(this.interruptReasons_)&&(this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Vf(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){$t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lg&&(this.reconnectDelay_=Vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+A3.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:hy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fc.getInstance().currentlyOnline();return kh(this.interruptReasons_)&&e}}as.nextPersistentConnectionId_=0;as.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ce(xi,e),r=new Ce(xi,n);return this.compare(s,r)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class tE extends uu{static get __EMPTY_NODE(){return hl}static set __EMPTY_NODE(e){hl=e}compare(e,n){return zi(e.name,n.name)}isDefinedOn(e){throw Ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(Br,hl)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,hl)}toString(){return".key"}}const Ei=new tE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class It{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??It.RED,this.left=r??Jt.EMPTY_NODE,this.right=i??Jt.EMPTY_NODE}copy(e,n,s,r,i){return new It(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}It.RED=!0;It.BLACK=!1;class kR{copy(e,n,s,r,i){return this}insert(e,n,s){return new It(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Jt{constructor(e,n=Jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,It.BLACK,null,null))}remove(e){return new Jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,It.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new dl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new dl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new dl(this.root_,null,this.comparator_,!0,e)}}Jt.EMPTY_NODE=new kR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t,e){return zi(t.name,e.name)}function jf(t,e){return zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id;function xR(t){id=t}const nE=function(t){return typeof t=="number"?"number:"+x3(t):"string:"+t},sE=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vs(e,".sv"),"Priority must be a string or number.")}else K(t===id||t.isEmpty(),"priority of unexpected type.");K(t===id||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fg;class wt{static set __childrenNodeConstructor(e){Fg=e}static get __childrenNodeConstructor(){return Fg}constructor(e,n=wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:be(e)===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=be(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x3(this.value_):e+=this.value_,this.lazyHash_=P3(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof wt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=wt.VALUE_TYPE_ORDER.indexOf(n),i=wt.VALUE_TYPE_ORDER.indexOf(s);return K(r>=0,"Unknown leaf type: "+n),K(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rE,iE;function OR(t){rE=t}function DR(t){iE=t}class MR extends uu{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?zi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(Br,new wt("[PRIORITY-POST]",iE))}makePost(e,n){const s=rE(e);return new Ce(n,new wt("[PRIORITY-POST]",s))}toString(){return".priority"}}const st=new MR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=Math.log(2);class LR{constructor(e){const n=i=>parseInt(Math.log(i)/VR,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let d,p;if(h===0)return null;if(h===1)return d=t[c],p=n?n(d):d,new It(p,d.node,It.BLACK,null,null);{const g=parseInt(h/2,10)+c,S=r(c,g),P=r(g+1,u);return d=t[g],p=n?n(d):d,new It(p,d.node,It.BLACK,S,P)}},i=function(c){let u=null,h=null,d=t.length;const p=function(S,P){const N=d-S,L=d;d-=S;const U=r(N+1,L),B=t[N],G=n?n(B):B;g(new It(G,B.node,P,null,U))},g=function(S){u?(u.left=S,u=S):(h=S,u=S)};for(let S=0;S<c.count;++S){const P=c.nextBitIsOne(),N=Math.pow(2,c.count-(S+1));P?p(N,It.BLACK):(p(N,It.BLACK),p(N,It.RED))}return h},o=new LR(t.length),a=i(o);return new Jt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;const ti={};class is{static get Default(){return K(ti&&st,"ChildrenNode.ts has not been loaded"),ch=ch||new is({".priority":ti},{".priority":st}),ch}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Jt?n:null}hasIndex(e){return vs(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ce.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=pc(s,e.getCompare()):a=ti;const c=e.toString(),u={...this.indexSet_};u[c]=e;const h={...this.indexes_};return h[c]=a,new is(h,u)}addToIndexes(e,n){const s=Hl(this.indexes_,(r,i)=>{const o=Ci(this.indexSet_,i);if(K(o,"Missing index implementation for "+i),r===ti)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ce.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),pc(a,o.getCompare())}else return ti;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Ce(e.name,a))),c.insert(e,e.node)}});return new is(s,this.indexSet_)}removeFromIndexes(e,n){const s=Hl(this.indexes_,r=>{if(r===ti)return r;{const i=n.get(e.name);return i?r.remove(new Ce(e.name,i)):r}});return new is(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class pe{static get EMPTY_NODE(){return _o||(_o=new pe(new Jt(jf),null,is.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sE(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_o}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_o:n}}getChild(e){const n=be(e);return n===null?this:this.getImmediateChild(n).getChild(ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ce(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?_o:this.priorityNode_;return new pe(r,o,i)}}updateChild(e,n){const s=be(e);if(s===null)return n;{K(be(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ze(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(st,(o,a)=>{n[o]=a.val(e),s++,i&&pe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nE(this.getPriority().val())+":"),this.forEachChild(st,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":P3(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ce(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ce.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$a?-1:0}withIndex(e){if(e===Ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(st),r=n.getIterator(st);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ei?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FR extends pe{constructor(){super(new Jt(jf),pe.EMPTY_NODE,is.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const $a=new FR;Object.defineProperties(Ce,{MIN:{value:new Ce(xi,pe.EMPTY_NODE)},MAX:{value:new Ce(Br,$a)}});tE.__EMPTY_NODE=pe.EMPTY_NODE;wt.__childrenNodeConstructor=pe;xR($a);DR($a);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=!0;function Rt(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new wt(n,Rt(e))}if(!(t instanceof Array)&&UR){const n=[];let s=!1;if(en(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Rt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ce(o,c)))}}),n.length===0)return pe.EMPTY_NODE;const i=pc(n,NR,o=>o.name,jf);if(s){const o=pc(n,st.getCompare());return new pe(i,Rt(e),new is({".priority":o},{".priority":st}))}else return new pe(i,Rt(e),is.Default)}else{let n=pe.EMPTY_NODE;return en(t,(s,r)=>{if(vs(t,s)&&s.substring(0,1)!=="."){const i=Rt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Rt(e))}}OR(Rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R extends uu{constructor(e){super(),this.indexPath_=e,K(!Re(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?zi(e.name,n.name):i}makePost(e,n){const s=Rt(e),r=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(n,r)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,$a);return new Ce(Br,e)}toString(){return J3(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR extends uu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?zi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const s=Rt(e);return new Ce(n,s)}toString(){return".value"}}const jR=new BR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){return{type:"value",snapshotNode:t}}function Oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ma(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ga(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){K(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ma(n,a)):K(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Oi(n,s)):o.trackChildChange(ga(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(st,(r,i)=>{n.hasChild(r)||s.trackChildChange(ma(r,i))}),n.isLeafNode()||n.forEachChild(st,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ga(r,i,o))}else s.trackChildChange(Oi(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?pe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.indexedFilter_=new qf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_a.getStartPost_(e),this.endPost_=_a.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Ce(n,s))||(s=pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=pe.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(pe.EMPTY_NODE);const i=this;return n.forEachChild(st,(o,a)=>{i.matches(new Ce(o,a))||(r=r.updateImmediateChild(o,pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _a(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Ce(n,s))||(s=pe.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=pe.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(pe.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,g)=>d(g,p)}else o=this.index_.getCompare();const a=e;K(a.numChildren()===this.limit_,"");const c=new Ce(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let p=r.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,c);if(h&&!s.isEmpty()&&g>=0)return i?.trackChildChange(ga(n,s,d)),a.updateImmediateChild(n,s);{i?.trackChildChange(ma(n,d));const P=a.updateImmediateChild(n,pe.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i?.trackChildChange(Oi(p.name,p.node)),P.updateImmediateChild(p.name,p.node)):P}}else return s.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(ma(u.name,u.node)),i.trackChildChange(Oi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,pe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xi}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const e=new Wf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HR(t){return t.loadsAllData()?new qf(t.getIndex()):t.hasLimit()?new WR(t):new _a(t)}function Ug(t){const e={};if(t.isDefault())return e;let n;if(t.index_===st?n="$priority":t.index_===jR?n="$value":t.index_===Ei?n="$key":(K(t.index_ instanceof $R,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=bt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=bt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+bt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=bt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+bt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $g(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==st&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends Q3{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ua("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=mc.getListenId_(e,s),a={};this.listens_[o]=a;const c=Ug(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),Ci(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=mc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ug(e._queryParams),s=e._path.toString(),r=new $c;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$i(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=sa(a.responseText)}catch{Zt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Zt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){return{value:null,children:new Map}}function aE(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=be(e);t.children.has(s)||t.children.set(s,gc());const r=t.children.get(s);e=ze(e),aE(r,e,n)}}function od(t,e,n){t.value!==null?n(e,t.value):GR(t,(s,r)=>{const i=new We(e.toString()+"/"+s);od(r,i,n)})}function GR(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&en(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=10*1e3,QR=30*1e3,YR=300*1e3;class XR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new KR(e);const s=Bg+(QR-Bg)*Math.random();Wo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;en(e,(r,i)=>{i>0&&vs(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*YR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function lE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Tn.ACK_USER_WRITE,this.source=lE()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new _c(Me(),n,this.revert)}}else return K(be(this.path)===e,"operationForChild called for unrelated child."),new _c(ze(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.source=e,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return Re(this.path)?new ya(this.source,Me()):new ya(this.source,ze(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Tn.OVERWRITE}operationForChild(e){return Re(this.path)?new jr(this.source,Me(),this.snap.getImmediateChild(e)):new jr(this.source,ze(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Tn.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new jr(this.source,Me(),n.value):new va(this.source,Me(),n)}else return K(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new va(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=be(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZR(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qR(o.childName,o.snapshotNode))}),yo(t,r,"child_removed",e,s,n),yo(t,r,"child_added",e,s,n),yo(t,r,"child_moved",i,s,n),yo(t,r,"child_changed",e,s,n),yo(t,r,"value",e,s,n),r}function yo(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>t9(t,a,c)),o.forEach(a=>{const c=e9(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function e9(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function t9(t,e,n){if(e.childName==null||n.childName==null)throw Ui("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),r=new Ce(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){return{eventCache:t,serverCache:e}}function Ho(t,e,n,s){return hu(new qr(e,n,s),t.serverCache)}function cE(t,e,n,s){return hu(t.eventCache,new qr(e,n,s))}function ad(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;const n9=()=>(uh||(uh=new Jt(BA)),uh);class Ke{static fromObject(e){let n=new Ke(null);return en(e,(s,r)=>{n=n.set(new We(s),r)}),n}constructor(e,n=n9()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(Re(e))return null;{const s=be(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ze(e),n);return i!=null?{path:mt(new We(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=be(e),s=this.children.get(n);return s!==null?s.subtree(ze(e)):new Ke(null)}}set(e,n){if(Re(e))return new Ke(n,this.children);{const s=be(e),i=(this.children.get(s)||new Ke(null)).set(ze(e),n),o=this.children.insert(s,i);return new Ke(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const n=be(e),s=this.children.get(n);if(s){const r=s.remove(ze(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Ke(null):new Ke(this.value,i)}else return this}}get(e){if(Re(e))return this.value;{const n=be(e),s=this.children.get(n);return s?s.get(ze(e)):null}}setTree(e,n){if(Re(e))return n;{const s=be(e),i=(this.children.get(s)||new Ke(null)).setTree(ze(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ke(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(mt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Re(e))return null;{const i=be(e),o=this.children.get(i);return o?o.findOnPath_(ze(e),mt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,s){if(Re(e))return this;{this.value&&s(n,this.value);const r=be(e),i=this.children.get(r);return i?i.foreachOnPath_(ze(e),mt(n,r),s):new Ke(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(mt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.writeTree_=e}static empty(){return new bn(new Ke(null))}}function zo(t,e,n){if(Re(e))return new bn(new Ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Xt(r,e);return i=i.updateChild(o,n),new bn(t.writeTree_.set(r,i))}else{const r=new Ke(n),i=t.writeTree_.setTree(e,r);return new bn(i)}}}function jg(t,e,n){let s=t;return en(n,(r,i)=>{s=zo(s,mt(e,r),i)}),s}function qg(t,e){if(Re(e))return bn.empty();{const n=t.writeTree_.setTree(e,new Ke(null));return new bn(n)}}function ld(t,e){return Kr(t,e)!=null}function Kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function Wg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(st,(s,r)=>{e.push(new Ce(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ce(s,r.value))}),e}function Ks(t,e){if(Re(e))return t;{const n=Kr(t,e);return n!=null?new bn(new Ke(n)):new bn(t.writeTree_.subtree(e))}}function cd(t){return t.writeTree_.isEmpty()}function Di(t,e){return uE(Me(),t.writeTree_,e)}function uE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(K(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=uE(mt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(mt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){return pE(e,t)}function s9(t,e,n,s,r){K(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=s}function r9(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function i9(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&o9(a,s.path)?r=!1:wn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return a9(t),!0;if(s.snap)t.visibleWrites=qg(t.visibleWrites,s.path);else{const a=s.children;en(a,c=>{t.visibleWrites=qg(t.visibleWrites,mt(s.path,c))})}return!0}else return!1}function o9(t,e){if(t.snap)return wn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wn(mt(t.path,n),e))return!0;return!1}function a9(t){t.visibleWrites=hE(t.allWrites,l9,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function l9(t){return t.visible}function hE(t,e,n){let s=bn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)wn(n,o)?(a=Xt(n,o),s=zo(s,a,i.snap)):wn(o,n)&&(a=Xt(o,n),s=zo(s,Me(),i.snap.getChild(a)));else if(i.children){if(wn(n,o))a=Xt(n,o),s=jg(s,a,i.children);else if(wn(o,n))if(a=Xt(o,n),Re(a))s=jg(s,Me(),i.children);else{const c=Ci(i.children,be(a));if(c){const u=c.getChild(ze(a));s=zo(s,Me(),u)}}}else throw Ui("WriteRecord should have .snap or .children")}}return s}function dE(t,e,n,s,r){if(!s&&!r){const i=Kr(t.visibleWrites,e);if(i!=null)return i;{const o=Ks(t.visibleWrites,e);if(cd(o))return n;if(n==null&&!ld(o,Me()))return null;{const a=n||pe.EMPTY_NODE;return Di(o,a)}}}else{const i=Ks(t.visibleWrites,e);if(!r&&cd(i))return n;if(!r&&n==null&&!ld(i,Me()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(wn(u.path,e)||wn(e,u.path))},a=hE(t.allWrites,o,e),c=n||pe.EMPTY_NODE;return Di(a,c)}}}function c9(t,e,n){let s=pe.EMPTY_NODE;const r=Kr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(st,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Ks(t.visibleWrites,e);return n.forEachChild(st,(o,a)=>{const c=Di(Ks(i,new We(o)),a);s=s.updateImmediateChild(o,c)}),Wg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ks(t.visibleWrites,e);return Wg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function u9(t,e,n,s,r){K(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=mt(e,n);if(ld(t.visibleWrites,i))return null;{const o=Ks(t.visibleWrites,i);return cd(o)?r.getChild(n):Di(o,r.getChild(n))}}function h9(t,e,n,s){const r=mt(e,n),i=Kr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Ks(t.visibleWrites,r);return Di(o,s.getNode().getImmediateChild(n))}else return null}function d9(t,e){return Kr(t.visibleWrites,e)}function f9(t,e,n,s,r,i,o){let a;const c=Ks(t.visibleWrites,e),u=Kr(c,Me());if(u!=null)a=u;else if(n!=null)a=Di(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=p.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=p.getNext();return h}else return[]}function p9(){return{visibleWrites:bn.empty(),allWrites:[],lastWriteId:-1}}function yc(t,e,n,s){return dE(t.writeTree,t.treePath,e,n,s)}function Kf(t,e){return c9(t.writeTree,t.treePath,e)}function Hg(t,e,n,s){return u9(t.writeTree,t.treePath,e,n,s)}function vc(t,e){return d9(t.writeTree,mt(t.treePath,e))}function m9(t,e,n,s,r,i){return f9(t.writeTree,t.treePath,e,n,s,r,i)}function Qf(t,e,n){return h9(t.writeTree,t.treePath,e,n)}function fE(t,e){return pE(mt(t.treePath,e),t.writeTree)}function pE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ga(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,ma(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Oi(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ga(s,e.snapshotNode,r.oldSnap));else throw Ui("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mE=new _9;class Yf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wr(this.viewCache_),i=m9(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y9(t){return{filter:t}}function v9(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function E9(t,e,n,s,r){const i=new g9;let o,a;if(n.type===Tn.OVERWRITE){const u=n;u.source.fromUser?o=ud(t,e,u.path,u.snap,s,r,i):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Re(u.path),o=Ec(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===Tn.MERGE){const u=n;u.source.fromUser?o=T9(t,e,u.path,u.children,s,r,i):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=hd(t,e,u.path,u.children,s,r,a,i))}else if(n.type===Tn.ACK_USER_WRITE){const u=n;u.revert?o=C9(t,e,u.path,s,r,i):o=I9(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Tn.LISTEN_COMPLETE)o=b9(t,e,n.path,s,i);else throw Ui("Unknown operation type: "+n.type);const c=i.getChanges();return w9(e,o,c),{viewCache:o,changes:c}}function w9(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=ad(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(oE(ad(e)))}}function gE(t,e,n,s,r,i){const o=e.eventCache;if(vc(s,n)!=null)return e;{let a,c;if(Re(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Wr(e),h=u instanceof pe?u:pe.EMPTY_NODE,d=Kf(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=yc(s,Wr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=be(n);if(u===".priority"){K(or(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Hg(s,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=ze(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=Hg(s,n,o.getNode(),c);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Qf(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return Ho(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function Ec(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Re(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=be(n);if(!c.isCompleteForPath(n)&&or(n)>1)return e;const S=ze(n),N=c.getNode().getImmediateChild(g).updateChild(S,s);g===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),g,N,S,mE,null)}const d=cE(e,u,c.isFullyInitialized()||Re(n),h.filtersNodes()),p=new Yf(r,d,i);return gE(t,d,n,r,p,a)}function ud(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new Yf(r,e,i);if(Re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ho(e,u,!0,t.filter.filtersNodes());else{const d=be(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Ho(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=ze(n),g=a.getNode().getImmediateChild(d);let S;if(Re(p))S=s;else{const P=h.getCompleteChild(d);P!=null?X3(p)===".priority"&&P.getChild(Z3(p)).isEmpty()?S=P:S=P.updateChild(p,s):S=pe.EMPTY_NODE}if(g.equals(S))c=e;else{const P=t.filter.updateChild(a.getNode(),d,S,p,h,o);c=Ho(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function zg(t,e){return t.eventCache.isCompleteForChild(e)}function T9(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=mt(n,c);zg(e,be(h))&&(a=ud(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=mt(n,c);zg(e,be(h))||(a=ud(t,a,h,u,r,i,o))}),a}function Gg(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function hd(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Re(n)?u=s:u=new Ke(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),S=Gg(t,g,p);c=Ec(t,c,new We(d),S,r,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const S=e.serverCache.getNode().getImmediateChild(d),P=Gg(t,S,p);c=Ec(t,c,new We(d),P,r,i,o,a)}}),c}function I9(t,e,n,s,r,i,o){if(vc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ec(t,e,n,c.getNode().getChild(n),r,i,a,o);if(Re(n)){let u=new Ke(null);return c.getNode().forEachChild(Ei,(h,d)=>{u=u.set(new We(h),d)}),hd(t,e,n,u,r,i,a,o)}else return e}else{let u=new Ke(null);return s.foreach((h,d)=>{const p=mt(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),hd(t,e,n,u,r,i,a,o)}}function b9(t,e,n,s,r){const i=e.serverCache,o=cE(e,i.getNode(),i.isFullyInitialized()||Re(n),i.isFiltered());return gE(t,o,n,s,mE,r)}function C9(t,e,n,s,r,i){let o;if(vc(s,n)!=null)return e;{const a=new Yf(s,e,r),c=e.eventCache.getNode();let u;if(Re(n)||be(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=yc(s,Wr(e));else{const d=e.serverCache.getNode();K(d instanceof pe,"serverChildren would be complete if leaf node"),h=Kf(s,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=be(n);let d=Qf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,ze(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,pe.EMPTY_NODE,ze(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yc(s,Wr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||vc(s,Me())!=null,Ho(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new qf(s.getIndex()),i=HR(s);this.processor_=y9(i);const o=n.serverCache,a=n.eventCache,c=r.updateFullNode(pe.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(pe.EMPTY_NODE,a.getNode(),null),h=new qr(c,o.isFullyInitialized(),r.filtersNodes()),d=new qr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=hu(d,h),this.eventGenerator_=new JR(this.query_)}get query(){return this.query_}}function A9(t){return t.viewCache_.serverCache.getNode()}function R9(t,e){const n=Wr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(be(e)).isEmpty())?n.getChild(e):null}function Kg(t){return t.eventRegistrations_.length===0}function P9(t,e){t.eventRegistrations_.push(e)}function Qg(t,e,n){const s=[];if(n){K(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Yg(t,e,n,s){e.type===Tn.MERGE&&e.source.queryId!==null&&(K(Wr(t.viewCache_),"We should always have a full cache before handling merges"),K(ad(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=E9(t.processor_,r,e,n,s);return v9(t.processor_,i.viewCache),K(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,_E(t,i.changes,i.viewCache.eventCache.getNode(),null)}function k9(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(st,(i,o)=>{s.push(Oi(i,o))}),n.isFullyInitialized()&&s.push(oE(n.getNode())),_E(t,s,n.getNode(),e)}function _E(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return ZR(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;class N9{constructor(){this.views=new Map}}function x9(t){K(!wc,"__referenceConstructor has already been defined"),wc=t}function O9(){return K(wc,"Reference.ts has not been loaded"),wc}function D9(t){return t.views.size===0}function Xf(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return K(i!=null,"SyncTree gave us an op for an invalid query."),Yg(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Yg(o,e,n,s));return i}}function M9(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=yc(n,r?s:null),c=!1;a?c=!0:s instanceof pe?(a=Kf(n,s),c=!1):(a=pe.EMPTY_NODE,c=!1);const u=hu(new qr(a,c,!1),new qr(s,r,!1));return new S9(e,u)}return o}function V9(t,e,n,s,r,i){const o=M9(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),P9(o,n),k9(o,n)}function L9(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=ar(t);if(r==="default")for(const[c,u]of t.views.entries())o=o.concat(Qg(u,n,s)),Kg(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(r);c&&(o=o.concat(Qg(c,n,s)),Kg(c)&&(t.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!ar(t)&&i.push(new(O9())(e._repo,e._path)),{removed:i,events:o}}function yE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wi(t,e){let n=null;for(const s of t.views.values())n=n||R9(s,e);return n}function vE(t,e){if(e._queryParams.loadsAllData())return du(t);{const s=e._queryIdentifier;return t.views.get(s)}}function EE(t,e){return vE(t,e)!=null}function ar(t){return du(t)!=null}function du(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;function F9(t){K(!Tc,"__referenceConstructor has already been defined"),Tc=t}function U9(){return K(Tc,"Reference.ts has not been loaded"),Tc}let $9=1;class Xg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=p9(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wE(t,e,n,s,r){return s9(t.pendingWriteTree_,e,n,s,r),r?Ba(t,new jr(lE(),e,n)):[]}function Pr(t,e,n=!1){const s=r9(t.pendingWriteTree_,e);if(i9(t.pendingWriteTree_,e)){let i=new Ke(null);return s.snap!=null?i=i.set(Me(),!0):en(s.children,o=>{i=i.set(new We(o),!0)}),Ba(t,new _c(s.path,i,n))}else return[]}function fu(t,e,n){return Ba(t,new jr(Hf(),e,n))}function B9(t,e,n){const s=Ke.fromObject(n);return Ba(t,new va(Hf(),e,s))}function j9(t,e){return Ba(t,new ya(Hf(),e))}function q9(t,e,n){const s=Zf(t,n);if(s){const r=ep(s),i=r.path,o=r.queryId,a=Xt(i,e),c=new ya(zf(o),a);return tp(t,i,c)}else return[]}function dd(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||EE(o,e))){const c=L9(o,e,n,s);D9(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!r){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(p,g)=>ar(g));if(h&&!d){const p=t.syncPointTree_.subtree(i);if(!p.isEmpty()){const g=z9(p);for(let S=0;S<g.length;++S){const P=g[S],N=P.query,L=bE(t,P);t.listenProvider_.startListening(Go(N),Ic(t,N),L.hashFn,L.onComplete)}}}!d&&u.length>0&&!s&&(h?t.listenProvider_.stopListening(Go(e),null):u.forEach(p=>{const g=t.queryToTagMap.get(pu(p));t.listenProvider_.stopListening(Go(p),g)}))}G9(t,u)}return a}function W9(t,e,n,s){const r=Zf(t,s);if(r!=null){const i=ep(r),o=i.path,a=i.queryId,c=Xt(o,e),u=new jr(zf(a),c,n);return tp(t,o,u)}else return[]}function H9(t,e,n,s){const r=Zf(t,s);if(r){const i=ep(r),o=i.path,a=i.queryId,c=Xt(o,e),u=Ke.fromObject(n),h=new va(zf(a),c,u);return tp(t,o,h)}else return[]}function Jg(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(p,g)=>{const S=Xt(p,r);i=i||wi(g,S),o=o||ar(g)});let a=t.syncPointTree_.get(r);a?(o=o||ar(a),i=i||wi(a,Me())):(a=new N9,t.syncPointTree_=t.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=pe.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((g,S)=>{const P=wi(S,Me());P&&(i=i.updateImmediateChild(g,P))}));const u=EE(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=pu(e);K(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=K9();t.queryToTagMap.set(p,g),t.tagToQueryMap.set(g,p)}const h=Gf(t.pendingWriteTree_,r);let d=V9(a,e,n,h,i,c);if(!u&&!o&&!s){const p=vE(a,e);d=d.concat(Q9(t,e,p))}return d}function Jf(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Xt(o,e),u=wi(a,c);if(u)return u});return dE(r,e,i,n,!0)}function Ba(t,e){return TE(e,t.syncPointTree_,null,Gf(t.pendingWriteTree_,Me()))}function TE(t,e,n,s){if(Re(t.path))return IE(t,e,n,s);{const r=e.get(Me());n==null&&r!=null&&(n=wi(r,Me()));let i=[];const o=be(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=fE(s,o);i=i.concat(TE(a,c,u,h))}return r&&(i=i.concat(Xf(r,t,s,n))),i}}function IE(t,e,n,s){const r=e.get(Me());n==null&&r!=null&&(n=wi(r,Me()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=fE(s,o),h=t.operationForChild(o);h&&(i=i.concat(IE(h,a,c,u)))}),r&&(i=i.concat(Xf(r,t,s,n))),i}function bE(t,e){const n=e.query,s=Ic(t,n);return{hashFn:()=>(A9(e)||pe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?q9(t,n._path,s):j9(t,n._path);{const i=WA(r,n);return dd(t,n,null,i)}}}}function Ic(t,e){const n=pu(e);return t.queryToTagMap.get(n)}function pu(t){return t._path.toString()+"$"+t._queryIdentifier}function Zf(t,e){return t.tagToQueryMap.get(e)}function ep(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function tp(t,e,n){const s=t.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const r=Gf(t.pendingWriteTree_,e);return Xf(s,n,r,null)}function z9(t){return t.fold((e,n,s)=>{if(n&&ar(n))return[du(n)];{let r=[];return n&&(r=yE(n)),en(s,(i,o)=>{r=r.concat(o)}),r}})}function Go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(U9())(t._repo,t._path):t}function G9(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=pu(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function K9(){return $9++}function Q9(t,e,n){const s=e._path,r=Ic(t,e),i=bE(t,n),o=t.listenProvider_.startListening(Go(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)K(!ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,d)=>{if(!Re(u)&&h&&ar(h))return[du(h).query];{let p=[];return h&&(p=p.concat(yE(h).map(g=>g.query))),en(d,(g,S)=>{p=p.concat(S)}),p}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(Go(h),Ic(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new np(n)}node(){return this.node_}}class sp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=mt(this.path_,e);return new sp(this.syncTree_,n)}node(){return Jf(this.syncTree_,this.path_)}}const Y9=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zg=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return X9(t[".sv"],e,n);if(typeof t[".sv"]=="object")return J9(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},X9=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},J9=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const r=e.node();if(K(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},Z9=function(t,e,n,s){return rp(e,new sp(n,t),s)},CE=function(t,e,n){return rp(t,new np(e),n)};function rp(t,e,n){const s=t.getPriority().val(),r=Zg(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Zg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new wt(a,Rt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new wt(r))),o.forEachChild(st,(a,c)=>{const u=rp(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function op(t,e){let n=e instanceof We?e:new We(e),s=t,r=be(n);for(;r!==null;){const i=Ci(s.node.children,r)||{children:{},childCount:0};s=new ip(r,s,i),n=ze(n),r=be(n)}return s}function Ki(t){return t.node.value}function SE(t,e){t.node.value=e,fd(t)}function AE(t){return t.node.childCount>0}function eP(t){return Ki(t)===void 0&&!AE(t)}function mu(t,e){en(t.node.children,(n,s)=>{e(new ip(n,t,s))})}function RE(t,e,n,s){n&&e(t),mu(t,r=>{RE(r,e,!0)})}function tP(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ja(t){return new We(t.parent===null?t.name:ja(t.parent)+"/"+t.name)}function fd(t){t.parent!==null&&nP(t.parent,t.name,t)}function nP(t,e,n){const s=eP(n),r=vs(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,fd(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,fd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=/[\[\].#$\/\u0000-\u001F\u007F]/,rP=/[\[\].#$\u0000-\u001F\u007F]/,hh=10*1024*1024,PE=function(t){return typeof t=="string"&&t.length!==0&&!sP.test(t)},kE=function(t){return typeof t=="string"&&t.length!==0&&!rP.test(t)},iP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kE(t)},NE=function(t,e,n,s){s&&e===void 0||ap(zd(t,"value"),e,n)},ap=function(t,e,n){const s=n instanceof We?new IR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+br(s));if(typeof e=="function")throw new Error(t+"contains a function "+br(s)+" with contents = "+e.toString());if(k3(e))throw new Error(t+"contains "+e.toString()+" "+br(s));if(typeof e=="string"&&e.length>hh/3&&Bc(e)>hh)throw new Error(t+"contains a string greater than "+hh+" utf8 bytes "+br(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(en(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!PE(o)))throw new Error(t+" contains an invalid key ("+o+") "+br(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bR(s,o),ap(t,a,s),CR(s)}),r&&i)throw new Error(t+' contains ".value" child '+br(s)+" in addition to actual children.")}},xE=function(t,e,n,s){if(!kE(n))throw new Error(zd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xE(t,e,n)},lp=function(t,e){if(be(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iP(n))throw new Error(zd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cp(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!$f(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function OE(t,e,n){cp(t,n),DE(t,s=>$f(s,e))}function gs(t,e,n){cp(t,n),DE(t,s=>wn(s,e)||wn(e,s))}function DE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(cP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qo&&$t("event: "+n.toString()),Gi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="repo_interrupt",hP=25;class dP{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gc(),this.transactionQueueTree_=new ip,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fP(t,e,n){if(t.stats_=Ff(t.repoInfo_),t.forceRestClient_||KA())t.server_=new mc(t.repoInfo_,(s,r,i,o)=>{e_(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>t_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{bt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new as(t.repoInfo_,e,(s,r,i,o)=>{e_(t,s,r,i,o)},s=>{t_(t,s)},s=>{pP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ZA(t.repoInfo_,()=>new XR(t.stats_,t.server_)),t.infoData_=new zR,t.infoSyncTree_=new Xg({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=fu(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hp(t,"connected",!1),t.serverSyncTree_=new Xg({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);gs(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function ME(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function up(t){return Y9({timestamp:ME(t)})}function e_(t,e,n,s,r){t.dataUpdateCount++;const i=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Hl(n,u=>Rt(u));o=H9(t.serverSyncTree_,i,c,r)}else{const c=Rt(n);o=W9(t.serverSyncTree_,i,c,r)}else if(s){const c=Hl(n,u=>Rt(u));o=B9(t.serverSyncTree_,i,c)}else{const c=Rt(n);o=fu(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=gu(t,i)),gs(t.eventQueue_,a,o)}function t_(t,e){hp(t,"connected",e),e===!1&&gP(t)}function pP(t,e){en(e,(n,s)=>{hp(t,n,s)})}function hp(t,e,n){const s=new We("/.info/"+e),r=Rt(n);t.infoData_.updateSnapshot(s,r);const i=fu(t.infoSyncTree_,s,r);gs(t.eventQueue_,s,i)}function VE(t){return t.nextWriteId_++}function mP(t,e,n,s,r){dp(t,"set",{path:e.toString(),value:n,priority:s});const i=up(t),o=Rt(n,s),a=Jf(t.serverSyncTree_,e),c=CE(o,a,i),u=VE(t),h=wE(t.serverSyncTree_,e,c,u,!0);cp(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,g)=>{const S=p==="ok";S||Zt("set at "+e+" failed: "+p);const P=Pr(t.serverSyncTree_,u,!S);gs(t.eventQueue_,e,P),EP(t,r,p,g)});const d=BE(t,e);gu(t,d),gs(t.eventQueue_,d,[])}function gP(t){dp(t,"onDisconnectEvents");const e=up(t),n=gc();od(t.onDisconnect_,Me(),(r,i)=>{const o=Z9(r,i,t.serverSyncTree_,e);aE(n,r,o)});let s=[];od(n,Me(),(r,i)=>{s=s.concat(fu(t.serverSyncTree_,r,i));const o=BE(t,r);gu(t,o)}),t.onDisconnect_=gc(),gs(t.eventQueue_,Me(),s)}function _P(t,e,n){let s;be(e._path)===".info"?s=Jg(t.infoSyncTree_,e,n):s=Jg(t.serverSyncTree_,e,n),OE(t.eventQueue_,e._path,s)}function yP(t,e,n){let s;be(e._path)===".info"?s=dd(t.infoSyncTree_,e,n):s=dd(t.serverSyncTree_,e,n),OE(t.eventQueue_,e._path,s)}function vP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uP)}function dp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$t(n,...e)}function EP(t,e,n,s){e&&Gi(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function LE(t,e,n){return Jf(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function fp(t,e=t.transactionQueueTree_){if(e||_u(t,e),Ki(e)){const n=UE(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&wP(t,ja(e),n)}else AE(e)&&mu(e,n=>{fp(t,n)})}function wP(t,e,n){const s=n.map(u=>u.currentWriteId),r=LE(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];K(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Xt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{dp(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Pr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();_u(t,op(t.transactionQueueTree_,e)),fp(t,t.transactionQueueTree_),gs(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)Gi(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Zt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}gu(t,e)}},o)}function gu(t,e){const n=FE(t,e),s=ja(n),r=UE(t,n);return TP(t,r,s),s}function TP(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Xt(n,c.path);let h=!1,d;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(Pr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hP)h=!0,d="maxretry",r=r.concat(Pr(t.serverSyncTree_,c.currentWriteId,!0));else{const p=LE(t,c.path,o);c.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){ap("transaction failed: Data returned ",g,c.path);let S=Rt(g);typeof g=="object"&&g!=null&&vs(g,".priority")||(S=S.updatePriority(p.getPriority()));const N=c.currentWriteId,L=up(t),U=CE(S,p,L);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=U,c.currentWriteId=VE(t),o.splice(o.indexOf(N),1),r=r.concat(wE(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),r=r.concat(Pr(t.serverSyncTree_,N,!0))}else h=!0,d="nodata",r=r.concat(Pr(t.serverSyncTree_,c.currentWriteId,!0))}gs(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}_u(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Gi(s[a]);fp(t,t.transactionQueueTree_)}function FE(t,e){let n,s=t.transactionQueueTree_;for(n=be(e);n!==null&&Ki(s)===void 0;)s=op(s,n),e=ze(e),n=be(e);return s}function UE(t,e){const n=[];return $E(t,e,n),n.sort((s,r)=>s.order-r.order),n}function $E(t,e,n){const s=Ki(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);mu(e,r=>{$E(t,r,n)})}function _u(t,e){const n=Ki(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,SE(e,n.length>0?n:void 0)}mu(e,s=>{_u(t,s)})}function BE(t,e){const n=ja(FE(t,e)),s=op(t.transactionQueueTree_,e);return tP(s,r=>{dh(t,r)}),dh(t,s),RE(s,r=>{dh(t,r)}),n}function dh(t,e){const n=Ki(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Pr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?SE(e,void 0):n.length=i+1,gs(t.eventQueue_,ja(e),r);for(let o=0;o<s.length;o++)Gi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function bP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const n_=function(t,e){const n=CP(t),s=n.namespace;n.domain==="firebase.com"&&ms(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new j3(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new We(n.pathString)}},CP=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=IP(t.substring(h,d)));const p=bP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),n=e.substring(S+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SP=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=s_.charAt(n%64),n=Math.floor(n/64);K(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=s_.charAt(e[r]);return K(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+bt(this.snapshot.exportVal())}}class RP{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return K(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Re(this._path)?null:X3(this._path)}get ref(){return new fr(this._repo,this._path)}get _queryIdentifier(){const e=$g(this._queryParams),n=Vf(e);return n==="{}"?"default":n}get _queryObject(){return $g(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof pp))return!1;const n=this._repo===e._repo,s=$f(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+TR(this._path)}}class fr extends pp{constructor(e,n){super(e,n,new Wf,!1)}get parent(){const e=Z3(this._path);return e===null?null:new fr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bc{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new We(e),s=Ea(this.ref,e);return new bc(this._node.getChild(n),s,st)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new bc(r,Ea(this.ref,s),st)))}hasChild(e){const n=new We(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vo(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?Ea(t._root,e):t._root}function Ea(t,e){return t=Xe(t),be(t._path)===null?oP("child","path",e):xE("child","path",e),new fr(t._repo,mt(t._path,e))}function r_(t,e){t=Xe(t),lp("push",t._path),NE("push",e,t._path,!0);const n=ME(t._repo),s=SP(n),r=Ea(t,s),i=Ea(t,s);let o;return o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function i_(t){return lp("remove",t._path),pd(t,null)}function pd(t,e){t=Xe(t),lp("set",t._path),NE("set",e,t._path,!1);const n=new $c;return mP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class mp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new AP("value",this,new bc(e.snapshotNode,new fr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RP(this,e,n):null}matches(e){return e instanceof mp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function kP(t,e,n,s,r){const i=new PP(n,void 0),o=new mp(i);return _P(t._repo,t,o),()=>yP(t._repo,t,o)}function NP(t,e,n,s){return kP(t,"value",e)}x9(fr);F9(fr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="FIREBASE_DATABASE_EMULATOR_HOST",md={};let OP=!1;function DP(t,e,n,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=cr(i);t.repoInfo_=new j3(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function MP(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=n_(i,r),a=o.repoInfo,c;typeof process<"u"&&Tg&&(c=Tg[xP]),c?(i=`http://${c}?ns=${a.namespace}`,o=n_(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new YA(t.name,t.options,e);aP("Invalid Firebase Database URL",o),Re(o.path)||ms("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LP(a,t,u,new QA(t,n));return new FP(h,t)}function VP(t,e){const n=md[e];(!n||n[t.key]!==t)&&ms(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vP(t),delete n[t.key]}function LP(t,e,n,s){let r=md[e.name];r||(r={},md[e.name]=r);let i=r[t.toURLString()];return i&&ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new dP(t,OP,n,s),r[t.toURLString()]=i,i}class FP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fr(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ms("Cannot call "+e+" on a deleted database.")}}function gd(t=Kd(),e){const n=qc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ay("database");s&&UP(n,...s)}return n}function UP(t,e,n,s={}){t=Xe(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Js(s,i.repoInfo_.emulatorOptions))return;ms("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ms('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Pl(Pl.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:uy(s.mockUserToken,t.app.options.projectId);o=new Pl(a)}cr(e)&&(qd(e),Wd("Database",!0)),DP(i,r,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){OA(Hr),Mr(new Zs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return MP(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Un(Ig,bg,t),Un(Ig,bg,"esm2020")}as.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};as.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$P();const BP={apiKey:"AIzaSyCVeEhu0iQhAVZ4Srj4opNx9S_a-bakC0I",authDomain:"diplomawork-99223.firebaseapp.com",databaseURL:"https://diplomawork-99223-default-rtdb.firebaseio.com",projectId:"diplomawork-99223",storageBucket:"diplomawork-99223.firebasestorage.app",messagingSenderId:"149210770835",appId:"1:149210770835:web:6e376a8bd2c1c3a2e18c66",measurementId:"G-30J7JGHTQD"},gp=my(BP),Cr=Gc(gp),fl=_A(gp),fh=gd(gp),jP="modulepreload",qP=function(t){return"/diplom/"+t},o_={},hn=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=qP(u),u in o_)return;o_[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":jP,h||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),h)return new Promise((g,S)=>{p.addEventListener("load",g),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ai=typeof document<"u";function jE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function WP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&jE(t.default)}const Ve=Object.assign;function ph(t,e){const n={};for(const s in e){const r=e[s];n[s]=Rn(r)?r.map(t):t(r)}return n}const Ko=()=>{},Rn=Array.isArray,qE=/#/g,HP=/&/g,zP=/\//g,GP=/=/g,KP=/\?/g,WE=/\+/g,QP=/%5B/g,YP=/%5D/g,HE=/%5E/g,XP=/%60/g,zE=/%7B/g,JP=/%7C/g,GE=/%7D/g,ZP=/%20/g;function _p(t){return encodeURI(""+t).replace(JP,"|").replace(QP,"[").replace(YP,"]")}function e7(t){return _p(t).replace(zE,"{").replace(GE,"}").replace(HE,"^")}function _d(t){return _p(t).replace(WE,"%2B").replace(ZP,"+").replace(qE,"%23").replace(HP,"%26").replace(XP,"`").replace(zE,"{").replace(GE,"}").replace(HE,"^")}function t7(t){return _d(t).replace(GP,"%3D")}function n7(t){return _p(t).replace(qE,"%23").replace(KP,"%3F")}function s7(t){return t==null?"":n7(t).replace(zP,"%2F")}function wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const r7=/\/$/,i7=t=>t.replace(r7,"");function mh(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=c7(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:wa(o)}}function o7(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function a_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a7(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Mi(e.matched[s],n.matched[r])&&KE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function KE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!l7(t[n],e[n]))return!1;return!0}function l7(t,e){return Rn(t)?l_(t,e):Rn(e)?l_(e,t):t===e}function l_(t,e){return Rn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function c7(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ks={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ta;(function(t){t.pop="pop",t.push="push"})(Ta||(Ta={}));var Qo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qo||(Qo={}));function u7(t){if(!t)if(ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),i7(t)}const h7=/^[^#]+#/;function d7(t,e){return t.replace(h7,"#")+e}function f7(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const yu=()=>({left:window.scrollX,top:window.scrollY});function p7(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=f7(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function c_(t,e){return(history.state?history.state.position-e:-1)+t}const yd=new Map;function m7(t,e){yd.set(t,e)}function g7(t){const e=yd.get(t);return yd.delete(t),e}let _7=()=>location.protocol+"//"+location.host;function QE(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),a_(c,"")}return a_(n,t)+s+r}function y7(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=QE(t,location),S=n.value,P=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===S){o=null;return}N=P?p.position-P.position:0}else s(g);r.forEach(L=>{L(n.value,S,{delta:N,type:Ta.pop,direction:N?N>0?Qo.forward:Qo.back:Qo.unknown})})};function c(){o=n.value}function u(p){r.push(p);const g=()=>{const S=r.indexOf(p);S>-1&&r.splice(S,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Ve({},p.state,{scroll:yu()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function u_(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?yu():null}}function v7(t){const{history:e,location:n}=window,s={value:QE(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:_7()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ve({},e.state,u_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Ve({},r.value,e.state,{forward:c,scroll:yu()});i(h.current,h,!0);const d=Ve({},u_(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function E7(t){t=u7(t);const e=v7(t),n=y7(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ve({location:"",base:t,go:s,createHref:d7.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function w7(t){return typeof t=="string"||t&&typeof t=="object"}function YE(t){return typeof t=="string"||typeof t=="symbol"}const XE=Symbol("");var h_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(h_||(h_={}));function Vi(t,e){return Ve(new Error,{type:t,[XE]:!0},e)}function Yn(t,e){return t instanceof Error&&XE in t&&(e==null||!!(t.type&e))}const d_="[^/]+?",T7={sensitive:!1,strict:!1,start:!0,end:!0},I7=/[.+*?^${}()[\]/\\]/g;function b7(t,e){const n=Ve({},T7,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(I7,"\\$&"),g+=40;else if(p.type===1){const{value:S,repeatable:P,optional:N,regexp:L}=p;i.push({name:S,repeatable:P,optional:N});const U=L||d_;if(U!==d_){g+=10;try{new RegExp(`(${U})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+G.message)}}let B=P?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;d||(B=N&&u.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),r+=B,g+=20,N&&(g+=-8),P&&(g+=-20),U===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",S=i[p-1];d[S.name]=g&&S.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:S,repeatable:P,optional:N}=g,L=S in u?u[S]:"";if(Rn(L)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=Rn(L)?L.join("/"):L;if(!U)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);h+=U}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function C7(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function JE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=C7(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(f_(s))return 1;if(f_(r))return-1}return r.length-s.length}function f_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S7={type:0,value:""},A7=/[a-zA-Z0-9_]/;function R7(t){if(!t)return[[]];if(t==="/")return[[S7]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:A7.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function P7(t,e,n){const s=b7(R7(t.path),n),r=Ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function k7(t,e){const n=[],s=new Map;e=__({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,p,g){const S=!g,P=m_(d);P.aliasOf=g&&g.record;const N=__(e,d),L=[P];if("alias"in d){const G=typeof d.alias=="string"?[d.alias]:d.alias;for(const te of G)L.push(m_(Ve({},P,{components:g?g.record.components:P.components,path:te,aliasOf:g?g.record:P})))}let U,B;for(const G of L){const{path:te}=G;if(p&&te[0]!=="/"){const ne=p.record.path,A=ne[ne.length-1]==="/"?"":"/";G.path=p.record.path+(te&&A+te)}if(U=P7(G,p,N),g?g.alias.push(U):(B=B||U,B!==U&&B.alias.push(U),S&&d.name&&!g_(U)&&o(d.name)),ZE(U)&&c(U),P.children){const ne=P.children;for(let A=0;A<ne.length;A++)i(ne[A],U,g&&g.children[A])}g=g||U}return B?()=>{o(B)}:Ko}function o(d){if(YE(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=O7(d,n);n.splice(p,0,d),d.record.name&&!g_(d)&&s.set(d.record.name,d)}function u(d,p){let g,S={},P,N;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Vi(1,{location:d});N=g.record.name,S=Ve(p_(p.params,g.keys.filter(B=>!B.optional).concat(g.parent?g.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),d.params&&p_(d.params,g.keys.map(B=>B.name))),P=g.stringify(S)}else if(d.path!=null)P=d.path,g=n.find(B=>B.re.test(P)),g&&(S=g.parse(P),N=g.record.name);else{if(g=p.name?s.get(p.name):n.find(B=>B.re.test(p.path)),!g)throw Vi(1,{location:d,currentLocation:p});N=g.record.name,S=Ve({},p.params,d.params),P=g.stringify(S)}const L=[];let U=g;for(;U;)L.unshift(U.record),U=U.parent;return{name:N,path:P,params:S,matched:L,meta:x7(L)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function p_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function m_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:N7(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function N7(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function g_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function x7(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function __(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function O7(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;JE(t,e[i])<0?s=i:n=i+1}const r=D7(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function D7(t){let e=t;for(;e=e.parent;)if(ZE(e)&&JE(t,e)===0)return e}function ZE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function M7(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(WE," "),o=i.indexOf("="),a=wa(o<0?i:i.slice(0,o)),c=o<0?null:wa(i.slice(o+1));if(a in e){let u=e[a];Rn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function y_(t){let e="";for(let n in t){const s=t[n];if(n=t7(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rn(s)?s.map(i=>i&&_d(i)):[s&&_d(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function V7(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Rn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const L7=Symbol(""),v_=Symbol(""),yp=Symbol(""),e4=Symbol(""),vd=Symbol("");function Eo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ms(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Vi(4,{from:n,to:e})):p instanceof Error?c(p):w7(p)?c(Vi(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function gh(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jE(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ms(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=WP(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Ms(g,n,s,o,a,r)()}))}}return i}function E_(t){const e=Ln(yp),n=Ln(e4),s=dn(()=>{const c=di(t.to);return e.resolve(c)}),r=dn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Mi.bind(null,h));if(p>-1)return p;const g=w_(c[u-2]);return u>1&&w_(h)===g&&d[d.length-1].path!==g?d.findIndex(Mi.bind(null,c[u-2])):p}),i=dn(()=>r.value>-1&&j7(n.params,s.value.params)),o=dn(()=>r.value>-1&&r.value===n.matched.length-1&&KE(n.params,s.value.params));function a(c={}){if(B7(c)){const u=e[di(t.replace)?"replace":"push"](di(t.to)).catch(Ko);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:dn(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function F7(t){return t.length===1?t[0]:t}const U7=u2({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:E_,setup(t,{slots:e}){const n=ba(E_(t)),{options:s}=Ln(yp),r=dn(()=>({[T_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[T_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&F7(e.default(n));return t.custom?i:Bd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$7=U7;function B7(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function j7(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Rn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function w_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const T_=(t,e,n)=>t??e??n,q7=u2({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ln(vd),r=dn(()=>t.route||s.value),i=Ln(v_,0),o=dn(()=>{let u=di(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=dn(()=>r.value.matched[o.value]);ml(v_,dn(()=>o.value+1)),ml(L7,a),ml(vd,r);const c=Od();return Oo(()=>[c.value,a.value,t.name],([u,h,d],[p,g,S])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Mi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return I_(n.default,{Component:p,route:u});const g=d.props[h],S=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Bd(p,Ve({},S,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return I_(n.default,{Component:N,route:u})||N}}});function I_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W7=q7;function H7(t){const e=k7(t.routes,t),n=t.parseQuery||M7,s=t.stringifyQuery||y_,r=t.history,i=Eo(),o=Eo(),a=Eo(),c=sw(ks);let u=ks;ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ph.bind(null,O=>""+O),d=ph.bind(null,s7),p=ph.bind(null,wa);function g(O,H){let z,Z;return YE(O)?(z=e.getRecordMatcher(O),Z=H):Z=O,e.addRoute(Z,z)}function S(O){const H=e.getRecordMatcher(O);H&&e.removeRoute(H)}function P(){return e.getRoutes().map(O=>O.record)}function N(O){return!!e.getRecordMatcher(O)}function L(O,H){if(H=Ve({},H||c.value),typeof O=="string"){const R=mh(n,O,H.path),D=e.resolve({path:R.path},H),V=r.createHref(R.fullPath);return Ve(R,D,{params:p(D.params),hash:wa(R.hash),redirectedFrom:void 0,href:V})}let z;if(O.path!=null)z=Ve({},O,{path:mh(n,O.path,H.path).path});else{const R=Ve({},O.params);for(const D in R)R[D]==null&&delete R[D];z=Ve({},O,{params:d(R)}),H.params=d(H.params)}const Z=e.resolve(z,H),Ie=O.hash||"";Z.params=h(p(Z.params));const I=o7(s,Ve({},O,{hash:e7(Ie),path:Z.path})),b=r.createHref(I);return Ve({fullPath:I,hash:Ie,query:s===y_?V7(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:b})}function U(O){return typeof O=="string"?mh(n,O,c.value.path):Ve({},O)}function B(O,H){if(u!==O)return Vi(8,{from:H,to:O})}function G(O){return A(O)}function te(O){return G(Ve(U(O),{replace:!0}))}function ne(O){const H=O.matched[O.matched.length-1];if(H&&H.redirect){const{redirect:z}=H;let Z=typeof z=="function"?z(O):z;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=U(Z):{path:Z},Z.params={}),Ve({query:O.query,hash:O.hash,params:Z.path!=null?{}:O.params},Z)}}function A(O,H){const z=u=L(O),Z=c.value,Ie=O.state,I=O.force,b=O.replace===!0,R=ne(z);if(R)return A(Ve(U(R),{state:typeof R=="object"?Ve({},Ie,R.state):Ie,force:I,replace:b}),H||z);const D=z;D.redirectedFrom=H;let V;return!I&&a7(s,Z,z)&&(V=Vi(16,{to:D,from:Z}),Ct(Z,Z,!0,!1)),(V?Promise.resolve(V):C(D,Z)).catch(M=>Yn(M)?Yn(M,2)?M:Wt(M):ye(M,D,Z)).then(M=>{if(M){if(Yn(M,2))return A(Ve({replace:b},U(M.to),{state:typeof M.to=="object"?Ve({},Ie,M.to.state):Ie,force:I}),H||D)}else M=E(D,Z,!0,b,Ie);return T(D,Z,M),M})}function v(O,H){const z=B(O,H);return z?Promise.reject(z):Promise.resolve()}function y(O){const H=Ye.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(O):O()}function C(O,H){let z;const[Z,Ie,I]=z7(O,H);z=gh(Z.reverse(),"beforeRouteLeave",O,H);for(const R of Z)R.leaveGuards.forEach(D=>{z.push(Ms(D,O,H))});const b=v.bind(null,O,H);return z.push(b),Be(z).then(()=>{z=[];for(const R of i.list())z.push(Ms(R,O,H));return z.push(b),Be(z)}).then(()=>{z=gh(Ie,"beforeRouteUpdate",O,H);for(const R of Ie)R.updateGuards.forEach(D=>{z.push(Ms(D,O,H))});return z.push(b),Be(z)}).then(()=>{z=[];for(const R of I)if(R.beforeEnter)if(Rn(R.beforeEnter))for(const D of R.beforeEnter)z.push(Ms(D,O,H));else z.push(Ms(R.beforeEnter,O,H));return z.push(b),Be(z)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),z=gh(I,"beforeRouteEnter",O,H,y),z.push(b),Be(z))).then(()=>{z=[];for(const R of o.list())z.push(Ms(R,O,H));return z.push(b),Be(z)}).catch(R=>Yn(R,8)?R:Promise.reject(R))}function T(O,H,z){a.list().forEach(Z=>y(()=>Z(O,H,z)))}function E(O,H,z,Z,Ie){const I=B(O,H);if(I)return I;const b=H===ks,R=ai?history.state:{};z&&(Z||b?r.replace(O.fullPath,Ve({scroll:b&&R&&R.scroll},Ie)):r.push(O.fullPath,Ie)),c.value=O,Ct(O,H,z,b),Wt()}let w;function Y(){w||(w=r.listen((O,H,z)=>{if(!ht.listening)return;const Z=L(O),Ie=ne(Z);if(Ie){A(Ve(Ie,{replace:!0,force:!0}),Z).catch(Ko);return}u=Z;const I=c.value;ai&&m7(c_(I.fullPath,z.delta),yu()),C(Z,I).catch(b=>Yn(b,12)?b:Yn(b,2)?(A(Ve(U(b.to),{force:!0}),Z).then(R=>{Yn(R,20)&&!z.delta&&z.type===Ta.pop&&r.go(-1,!1)}).catch(Ko),Promise.reject()):(z.delta&&r.go(-z.delta,!1),ye(b,Z,I))).then(b=>{b=b||E(Z,I,!1),b&&(z.delta&&!Yn(b,8)?r.go(-z.delta,!1):z.type===Ta.pop&&Yn(b,20)&&r.go(-1,!1)),T(Z,I,b)}).catch(Ko)}))}let Ee=Eo(),ve=Eo(),le;function ye(O,H,z){Wt(O);const Z=ve.list();return Z.length?Z.forEach(Ie=>Ie(O,H,z)):console.error(O),Promise.reject(O)}function et(){return le&&c.value!==ks?Promise.resolve():new Promise((O,H)=>{Ee.add([O,H])})}function Wt(O){return le||(le=!O,Y(),Ee.list().forEach(([H,z])=>O?z(O):H()),Ee.reset()),O}function Ct(O,H,z,Z){const{scrollBehavior:Ie}=t;if(!ai||!Ie)return Promise.resolve();const I=!z&&g7(c_(O.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return Nc().then(()=>Ie(O,H,I)).then(b=>b&&p7(b)).catch(b=>ye(b,O,H))}const Je=O=>r.go(O);let at;const Ye=new Set,ht={currentRoute:c,listening:!0,addRoute:g,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:P,resolve:L,options:t,push:G,replace:te,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:et,install(O){const H=this;O.component("RouterLink",$7),O.component("RouterView",W7),O.config.globalProperties.$router=H,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>di(c)}),ai&&!at&&c.value===ks&&(at=!0,G(r.location).catch(Ie=>{}));const z={};for(const Ie in ks)Object.defineProperty(z,Ie,{get:()=>c.value[Ie],enumerable:!0});O.provide(yp,H),O.provide(e4,Y_(z)),O.provide(vd,c);const Z=O.unmount;Ye.add(O),O.unmount=function(){Ye.delete(O),Ye.size<1&&(u=ks,w&&w(),w=null,c.value=ks,at=!1,le=!1),Z()}}};function Be(O){return O.reduce((H,z)=>H.then(()=>y(z)),Promise.resolve())}return ht}function z7(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Mi(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Mi(u,c))||r.push(c))}return[n,s,r]}const vu=H7({history:E7("/diplom"),routes:[{path:"/",name:"main",component:()=>hn(()=>import("./Main-BPVS8aZk.js"),__vite__mapDeps([0,1,2])),meta:{mainRout:"main"}},{path:"/auth/:id",name:"auth",component:()=>hn(()=>import("./Auth-B3Teqaxt.js"),[]),meta:{mainRout:"auth"},beforeEnter:async(t,e,n)=>{if(!["sign-in","sign-up"].includes(t.params.id))return n({name:"NotFound"});const r=await new Promise(i=>{const o=Cr.onAuthStateChanged(a=>{o(),i(a)})});if(r&&r.emailVerified)return n("/");n()}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>hn(()=>import("./NotFound-DmP_RQe2.js"),[])},{path:"/cours/all",name:"recommendation",component:()=>hn(()=>import("./Recommendation-BlP8HStr.js"),__vite__mapDeps([3,1])),meta:{mainRout:"cours"}},{path:"/cours/search",name:"search",component:()=>hn(()=>import("./Search-BFsA24lI.js"),__vite__mapDeps([4,1])),meta:{mainRout:"cours"}},{path:"/cours/my-profile",name:"myProfile",component:()=>hn(()=>import("./MyProfile-DdPdpknL.js"),[]),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/codeEditor/:id/:lessonId/:lessonIndex",name:"codeEditor",component:()=>hn(()=>import("./CodeEditor-BTCc6nhq.js"),[]),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/cours/create-cours",name:"createCours",component:()=>hn(()=>import("./CreateCours-Dp3G2hhz.js"),[]),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/cours/my-cours",name:"myCours",component:()=>hn(()=>import("./MyCours-BXsI3Ncp.js"),__vite__mapDeps([5,1,6])),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/cours/page/:id",name:"cours",component:()=>hn(()=>import("./Cours-8FxwKzwg.js"),__vite__mapDeps([7,8])),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/cours/my-follow",name:"follow",component:()=>hn(()=>import("./MyFollowing-CXGzPHHL.js"),__vite__mapDeps([9,1,10])),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/cours/user-profile/:uid",name:"userProfile",component:()=>hn(()=>import("./UserProfile-BXC3bamc.js"),[]),meta:{mainRout:"cours",requiresAuth:!0,requiresVerifiedEmail:!0}}],scrollBehavior(t,e,n){return n||(t.hash?new Promise(s=>{setTimeout(()=>{const r=document.querySelector(t.hash);s(r?{el:r,behavior:"smooth"}:{top:0})},200)}):{top:0})}});vu.afterEach(t=>{t.path==="/"&&t.hash==="#about-app"?t.meta.mainRout="aboutApp":t.path==="/"&&(t.meta.mainRout="main")});function G7(){const t=Gc();return new Promise(e=>{const n=qy(t,s=>{n(),e(s)})})}vu.beforeEach(async(t,e,n)=>{const s=t4(),i=Gc().currentUser??await G7();if(t.meta.requiresAuth){if(!i)return s.message("Пожалуйста, выполните авторизацию, чтобы продолжить использование сервиса.","yellow"),n({path:"/auth/sign-in"});if(t.meta.requiresVerifiedEmail&&!i.emailVerified)return s.message("Пожалуйста, подтвердите ваш email.","yellow"),n({path:"/auth/sign-in"})}n()});const t4=dT("app",{state:()=>({loader:{auth:!1,user:!1,isEmail:!1,resetPassword:!1,profile:!1,reworkImg:!1,reAboutMe:!1,firstname:!1,lastName:!1,group:!1,ollUpdateProfile:!1,createCors:!1},sizeWindow:window.innerWidth,alert:[],error:{email:"",password:"",userSurname:"",userName:"",resetPassword:""},vallue:{email:"",password:"",userSurname:"",userName:"",newPassword:"",newEmail:"",type:"Студент",resetPassword:"",reworkImg:null,reInputImg:null,reaboutMe:"",firstname:"",lastName:"",group:"",coursName:"",aboutCours:null,dateCours:null,nameLesson:"",urlVideo:"",dopUrl:"",dopInfo:""},reWorkStatus:{img:!1,aboutMe:!1,firstname:!1,lastName:!1,group:!1,nameCours:!1,nameLesson:!1,urlVideo:!1,dopInfo:!1},statusEmail:!1,userProfile:null,resetPasswordStatus:!1,courses:[]}),actions:{async unsubscribe(t){const e=this.userProfile.uid,n=Object.entries(t.followers||{}).find(([i,o])=>o.uid===e);if(!n)return;const s=n[0],r=gd();await i_(vo(r,`courses/${t.id}/followers/${s}`)),this.message(`Вы отписались: ${t.id}`,"green")},isFollowed(t){return t.followers?Object.values(t.followers).some(e=>e.uid===this.userProfile?.uid):!1},following(t){const e=Object.values(this.courses).find(s=>s.id===t);if(!e)return;if(!e.followers){this.addField(t,"followers",{uid:this.userProfile.uid,courseId:t},`Вы подписались: ${t}`);return}Object.values(e.followers).some(s=>s.uid===this.userProfile.uid)||this.addField(t,"followers",[...e.followers,{uid:this.userProfile.uid,courseId:t}],`Вы подписались: ${t}`)},async addField(t,e,n,s){try{const r=vo(fh,`courses/${t}/${e}`),i=r_(r),o=await{id:i.key,...n};return await pd(i,o),i.key}catch(r){this.validate(r.message)}finally{this.message(`${s} `,"green")}},async deleteCourse(t){try{const e=gd(),n=vo(e,`courses/${t}`);await i_(n),this.message(`Курс удален: ${t}`,"green")}catch(e){this.validate(e.massage)}},fetchCourses(){const t=vo(fh,"courses");NP(t,e=>{const n=e.val();this.courses=n?Object.values(n):[]})},async addCourse(t){try{this.loader.createCors=!0;const e=vo(fh,"courses"),n=r_(e),s=n.key;await pd(n,{title:t.title||"",id:s,img:t.img||"",endCourse:new Date(t.end).getTime()||"",about:t.about||"",createdId:t.uid||"",createdAt:Date.now(),dopInfo:t.dopInfo}),this.message(`Создано успешно: ${this.vallue.coursName}`,"green"),this.toRout("/cours/my-cours")}catch(e){this.validate(e.message)}finally{this.clearForm(),this.loader.createCors=!1}},async ollUpdateProfile(t){this.loader.ollUpdateProfile=!0;const e=ul(fl,"users",this.userProfile.uid);try{await wg(e,t),window.location.reload()}catch(n){this.validate(n.code),window.location.reload()}finally{this.loader.ollUpdateProfile=!1}},async updateProfile(t,e,n,s){this.loader[n]=!0;const r=ul(fl,"users",this.userProfile.uid);try{await wg(r,t),window.location.reload()}catch(i){this.validate(i.code),this.reWorkStatus[s]=!1,this.vallue[e]=e==="reworkImg"?this.userProfile.avatar||"/images/avatar.png":""}finally{this.loader[n]=!1}},async signUp(){if(this.vallue.newPassword.includes(" "))this.error.password="Введите пароль!",this.vallue.newPassword="",this.message("Синтаксическая ошибка","red");else{this.loader.auth=!0;try{const t=await J5(Cr,this.vallue.newEmail,this.vallue.newPassword);await m1(t.user),this.message("Подтверждающее письмо отправлено!","blue")}catch(t){this.validate(t.code)}finally{this.loader.auth=!1}}},async login(){if(!this.loader.auth){this.loader.auth=!0;try{this.loader.auth=!0,(await Z5(Cr,this.vallue.email,this.vallue.password)).user.uid&&(this.toRout("/"),this.message("Вы успешно вошли в учётную запись","green"))}catch(t){this.validate(t.code)}finally{this.loader.auth=!1}}},async resetPassword(){try{this.loader.resetPassword=!0,await X5(Cr,this.vallue.resetPassword),this.message("Письмо для восстановления отправлено на ваш email!","blue"),this.resetPasswordStatus=!1}catch(t){this.validate(t.code)}finally{this.loader.resetPassword=!1,this.clearForm()}},async logout(){try{await n6(Cr),this.toRout("/auth/sign-in"),this.message("Вы вышли из учётной записи","green"),this.userProfile=null}catch(t){this.validate(t)}},async createUserProfile(t){const e=ul(fl,"users",t.uid),n=await Eg(e),s=JSON.parse(sessionStorage.getItem("data"));this.loader.isEmail=!0,!n.exists()&&(await NA(e,{uid:t.uid||null,email:t.email||null,createdAt:new Date,name:s.name||null,surname:s.surname||null,createrIs:s.type||null,aboutPerson:null,skills:null,avatar:null,group:null}),this.loader.isEmail=!1,this.statusEmail=!1,document.body.style.overflow="",this.toRout("/"),this.message(`Добро пожаловать! Вы вошли в только что созданную учётную запись  ${t.uid}`,"green"))},async getUserProfile(t){const e=ul(fl,"users",t),n=await Eg(e);return n.exists()?n.data():(console.error("Профиль не найден"),null)},initAuthListener(){qy(Cr,async t=>{if(this.loader.profile=!0,!t){console.error("Пользователь не найден"),this.message("Пожалуйста, выполните авторизацию, чтобы продолжить использование сервиса.","yellow"),this.userProfile=null,this.loader.profile=!1;return}await t.reload(),t.emailVerified?await this.createUserProfile(t):(this.closeIsEmail(),this.statusEmail=!0,document.body.style.overflow="hidden",this.message("Подвердите свой email!","blue"),this.loader.profile=!1),this.userProfile=await this.getUserProfile(t.uid),this.loader.profile=!1})},async resendVerification(){const t=Cr.currentUser;if(t)try{this.loader.user=!0,await m1(t),this.message("Письмо отправлено повторно на ваш email!","green")}catch(e){this.validate(e.code)}finally{this.loader.user=!1}else this.message("Пользователь не найден!","red")},async closeIsEmail(){const t=Gc(),e=t.currentUser,n=e?e.email:null;setTimeout(async()=>{const s=t.currentUser;if(s&&!s.emailVerified&&s.email===n){this.clearError(),this.clearForm(),this.statusEmail=!1;try{await s6(s),this.message("Попытайтесь снова!","red")}catch(r){this.validate(r)}}},6e4)},validate(t){switch(this.clearError(),t){case"auth/invalid-email":this.error.email="Введите корректный email!",this.error.newEmail="Введите корректный email!",this.error.resetPassword="Введите корректный email!",this.vallue.email="",this.vallue.newEmail="",this.valiue.resetPassword="";break;case"auth/missing-email":this.error.email="Email не найдено ",this.error.resetPassword="Email не найдено",this.vallue.email="",this.vallue.newEmail="",this.valiue.resetPassword="";break;case"auth/email-already-in-use":this.message("Этот email уже зарегистрирован","yellow"),this.error.email="Введите новый email!",this.vallue.newEmail="";break;case"auth/missing-password":this.error.password="Введите пароль!",this.vallue.password="",this.vallue.newPassword="";break;case"auth/password-does-not-meet-requirements":this.error.password="Пароль должен содержать не менее 6 символов. Например: secure5a",this.vallue.password="",this.vallue.newPassword="",this.message("Пароль слишком слабый !!","yellow");break;case"auth/weak-password":this.error.password="Введите минимум 6 символов!",this.vallue.newPassword="",this.message("Пароль слишком слабый","yellow");break;case"auth/invalid-credential":this.message("Пользователь не найден!","red"),this.clearForm();break;case"auth/too-many-requests":this.message("Слишком много попыток, попробуйте позже!","yellow"),this.clearForm();break;case"auth/network-request-failed":this.message("Проверьте интернет-соединение!","yellow"),this.clearForm();break;case"auth/user-disabled":this.message("Ваш аккаунт отключён администратором.","red"),this.clearForm();break;case"invalid-argument":this.message("Данные больше 1мб!","red");break;default:this.message(`code: ${t}!`,"red"),this.clearForm(),console.log(t);break}},resizeWindow(){window.addEventListener("resize",()=>{this.sizeWindow=window.innerWidth})},toRout(t){vu.push(t)},message(t,e){this.alert.push({message:t,type:e})},clearForm(){Object.keys(this.vallue).forEach(t=>{this.vallue[t]=this.vallue[t]==="Студент"?"Студент":""})},clearError(){Object.keys(this.error).forEach(t=>{this.error[t]=""})},validSend(t,e,n){const r=t.trim().split(/\s+/).filter(Boolean);if(r.length===0){this.reWorkStatus[e]=!1;return}r.length<=50?this.reWorkStatus[e]=!0:(this.vallue[n]=r.slice(0,50).join(" "),this.message("Ошибка: превышено количество слов (макс. 50)","yellow"))}}}),_n=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},K7={},Q7={"aria-hidden":"true",class:"w-8 h-8 text-gray-500 animate-spin fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function Y7(t,e){return re(),Te("svg",Q7,[...e[0]||(e[0]=[oe("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),oe("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1)])])}const n4=_n(K7,[["render",Y7]]),X7={data:()=>({text:"Здравствуйте! Спасибо за регистрацию. Письмо отправлено на вашу почту, пожалуста подвердите свой еmail!",btn:"Отправить снова",btn2:"Ok"}),components:{loader:n4}},J7={key:0,class:"fixed inset-0 bg-black bg-opacity-90 z-[10000] flex items-center h-screen justify-center max-[480px]:p-4","data-aos":"zoom-in","data-aos-duration":"500"},Z7={class:"bg-[#fff] border rounded-2xl shadow-md px-7 py-10 w-max flex flex-col gap-3 justify-center max-[480px]:w-full"},e8={class:"w-96 appText max-[480px]:w-full"},t8={key:0},n8={key:0};function s8(t,e,n,s,r,i){const o=Ft("loader"),a=Ft("buttonV");return this.appStore.statusEmail?(re(),Te("div",J7,[oe("div",Z7,[oe("div",e8,ft(t.text),1),De(a,{onClick:e[0]||(e[0]=c=>this.appStore.resendVerification()),class:"flex justify-center items-center"},{default:cn(()=>[this.appStore.loader.user?(re(),Kt(o,{key:1})):(re(),Te("span",t8,ft(t.btn),1))]),_:1}),De(a,{onClick:e[1]||(e[1]=c=>this.appStore.initAuthListener()),class:"flex justify-center items-center"},{default:cn(()=>[this.appStore.loader.isEmail?(re(),Kt(o,{key:1})):(re(),Te("span",n8,ft(t.btn2),1))]),_:1})])])):Fn("",!0)}const r8=_n(X7,[["render",s8]]),i8={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640"};function o8(t,e){return re(),Te("svg",i8,[...e[0]||(e[0]=[oe("path",{d:"M576 320c0-141.4-114.6-256-256-256S64 178.6 64 320c0 120 82.7 220.8 194.2 248.5V398.2h-52.8V320h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V236c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V320h83.6l-14.4 78.2H351v175.9C477.8 558.8 576 450.9 576 320"},null,-1)])])}const a8={render:o8},l8={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640"};function c8(t,e){return re(),Te("svg",l8,[...e[0]||(e[0]=[oe("path",{d:"M320.3 205c-63.5-.2-115.1 51.2-115.3 114.7S256.2 434.8 319.7 435 434.8 383.8 435 320.3 383.8 205.2 320.3 205m-.6 40.4c41.2-.2 74.7 33.1 74.9 74.3s-33.1 74.7-74.3 74.9-74.7-33.1-74.9-74.3 33.1-74.7 74.3-74.9m93.4-45.1c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8-12 26.8-26.8 26.8-26.8-12-26.8-26.8m129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M495 452c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"},null,-1)])])}const u8={render:c8},h8={data(){return{text:"Выполнено в рамках дипломного проекта, 2025.",link:{text:"НАРЫНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИМЕНИ САТЫБАЛДЫ НААМАТОВА",src:"https://nsu.kg/"},medias:[{id:1,src:"https://www.facebook.com/nguimeninaamatova/?locale=ru_RU",name:Ti(a8)},{id:2,src:"https://www.instagram.com/ngu_imeni_naamatova/",name:Ti(u8)}]}}},d8={class:"w-full py-9 flex flex-col gap-5 items-center"},f8={class:"flex gap-3"},p8=["href"],m8={class:"flex gap-2 items-center"},g8={class:"appText !text-white"},_8={class:"heading !text-sm !text-white underline"},y8=["href"];function v8(t,e,n,s,r,i){return re(),Te("div",d8,[oe("div",f8,[(re(!0),Te(nt,null,Fi(r.medias,o=>(re(),Te("a",{href:o.src,target:"_blank",class:"p-2 bg-white rounded-full"},[(re(),Kt(Vd(o.name),{class:"w-6 h-6 fill-[#E6A421]"}))],8,p8))),256))]),oe("div",m8,[oe("p",g8,ft(r.text),1),oe("h6",_8,[oe("a",{target:"_blank",href:r.link.src},ft(r.link.text),9,y8)])])])}const E8=_n(h8,[["render",v8]]),w8={data(){return{openStatus:!1,user:{name:"Пользователь",img:"/images/avatar.png",type:"Неизвестно"},nav:[{id:1,name:"Профиль",rout:"/cours/my-profile",icon:'<i class="pi pi-user "/>'},{id:2,name:"Подписки",rout:"/cours/my-follow",icon:'<i class="pi pi-bookmark-fill "/>'},{id:3,name:"Мои курсы",rout:"/cours/my-cours",icon:'<i class="pi pi-book "/>'},{id:4,name:"Создать",rout:"/cours/create-cours",icon:'<i class="pi pi-file-plus "/>'}],btn:"Выйти"}},components:{loader:n4},watch:{"$route.fullPath":{handler(){this.openStatus=!1},immediate:!0}}},T8={key:0},I8=["src"],b8=["src"],C8={class:"overflow-hidden"},S8={key:0,class:"w-32 heading text-lg max-lg:text-lg max-md:text-base max-sm:text-sm"},A8={key:1,class:"heading text-lg max-lg:text-lg max-md:text-base max-sm:text-sm"},R8={key:2,class:"appText lg:text-sm md:text-sm sm:text-xs font-medium"},P8={key:3,class:"appText lg:text-sm md:text-sm sm:text-xs font-medium"},k8={key:0,class:"w-full bg-white absolute shadow-md rounded-md p-2"},N8={class:"appText font-semibold"},x8={class:"hover:border-b hover:border-[#E6A421] transition-v"},O8=["innerHTML"];function D8(t,e,n,s,r,i){const o=Ft("loader"),a=Ft("router-link");return re(),Te(nt,null,[this.appStore.loader.profile?(re(),Te("div",T8,[De(o)])):(re(),Te("div",{key:1,class:"flex items-center gap-2 border p-2 max-lg:p-1 max rounded-lg cursor-pointer",onClick:e[0]||(e[0]=c=>r.openStatus=!r.openStatus)},[this.appStore.userProfile&&this.appStore.userProfile.avatar?(re(),Te("img",{key:0,class:"w-12 h-12 max-lg:-z-10 max-lg:h-10 max-md:h-9 max-md:w-9 rounded-full",src:this.appStore.userProfile.avatar,alt:"avatar"},null,8,I8)):(re(),Te("img",{key:1,class:"w-12 h-12 max-lg:-z-10 max-lg:h-10 max-md:h-9 max-md:w-9 rounded-full",src:r.user.img,alt:"avatar"},null,8,b8)),oe("div",C8,[this.appStore.userProfile&&this.appStore.userProfile.name?(re(),Te("h3",S8,ft(this.appStore.userProfile.name),1)):(re(),Te("h3",A8,ft(r.user.name),1)),this.appStore.userProfile&&this.appStore.userProfile.createrIs?(re(),Te("span",R8,ft(this.appStore.userProfile.createrIs),1)):(re(),Te("span",P8,ft(r.user.type),1))]),oe("button",{class:ls(["text-[#E6A421] font-bold text-xl transition-v",{"rotate-180":r.openStatus&&this.appStore.userProfile}])},[...e[2]||(e[2]=[oe("i",{class:"pi pi-chevron-down"},null,-1)])],2)])),De(Aa,{"enter-active-class":"transition-v","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:cn(()=>[r.openStatus&&this.appStore.userProfile?(re(),Te("div",k8,[oe("ul",N8,[(re(!0),Te(nt,null,Fi(r.nav,c=>(re(),Te("li",x8,[De(a,{to:c.rout,class:"w-full flex items-center gap-5 py-2 hover:text-[#E6A421] transition-v justify-start"},{default:cn(()=>[oe("span",{innerHTML:c.icon},null,8,O8),oe("span",null,ft(c.name),1)]),_:2},1032,["to"])]))),256)),oe("li",null,[oe("button",{onClick:e[1]||(e[1]=c=>this.appStore.logout()),class:"w-full flex items-center gap-5 py-2 hover:text-[#E6A421] hover:border-b hover:border-[#E6A421] transition-v"},[e[3]||(e[3]=oe("span",null,[oe("i",{class:"pi pi-sign-out"})],-1)),oe("span",null,ft(r.btn),1)])])])])):Fn("",!0)]),_:1})],64)}const M8=_n(w8,[["render",D8]]),V8={xmlns:"http://www.w3.org/2000/svg",width:"4rem",height:"4rem",version:"1.0",viewBox:"0 0 744 744"};function L8(t,e){return re(),Te("svg",V8,[...e[0]||(e[0]=[a0('<g fill="#336799"><path d="M344.5 1.6c-1.6.2-7.9.9-14 1.5-65 6.4-132.9 34-186.5 75.8C63.5 141.6 13.3 232.5 2.4 335.3c-2 19.5-1.5 66 1 84.2 8.6 62.1 30.7 118.3 65.8 167.8 48.3 68 118.8 118.1 199.1 141.6 66.7 19.5 140.7 19.5 207.4 0 77.1-22.5 144.7-69.1 192.7-132.9 41.3-54.8 65.8-117.1 73.1-185.7 2.1-19.6 2.1-57 0-76.6C724 169.6 602.8 38 440.8 7.1c-22.1-4.2-34.5-5.3-64.3-5.6-15.9-.2-30.3-.1-32 .1M413 14.4c77.5 9.4 146.8 41.2 202.5 92.9 46.4 43.1 78.7 92.9 98 151.2 11.9 35.7 17 65.2 18.2 103.5 1.7 58.4-9.9 113-34.9 165-18.8 39.1-40 69.2-70.3 99.5-58 58.1-131.3 93.5-215 103.7-14.7 1.7-64.3 1.7-79 0-69.6-8.5-131.1-34-185-76.7C78 598.3 30.3 516.6 16.6 428.8c-14.8-94.3 8.1-191.2 63-266.4 12.7-17.5 19.4-25.3 33.9-40.3 29.2-30.1 60.2-53 96.3-71.3 41.6-21 87.6-33.9 134.7-37.8 15-1.2 53.3-.4 68.5 1.4"></path><path d="M345 16.6c-1.9.2-8 .9-13.5 1.5-29.8 3.2-62.8 11.5-92 23.1C171 68.4 110.6 118.8 70.7 181.8 46.5 220 29.8 262.6 21.5 307.6c-7.5 40.5-7.5 88.4.1 129.2 23.3 126.4 113.2 230.9 234.2 272.3 38.8 13.3 75 19.2 116.7 19.2 24.1-.1 36.1-1 59.5-4.9 138.5-22.9 251.2-127.3 285.9-264.9 10.9-43.5 13.3-94.2 6.6-139.7C703.4 177.4 597.9 61.3 459 26.5c-30.4-7.6-46.9-9.6-82-10-15.7-.2-30.1-.1-32 .1m21.7 25.9c2.1 4.1 4 7.5 4.3 7.5.4 0 2-3.3 3.6-7.3 2.9-6.8 3.2-7.2 6.5-7.4 1.9-.1 2.8 0 2.2.3-.9.4-1.3 3.4-1.3 10 0 8.3.2 9.4 1.8 9.5 1.4 0 1.4.2-.3.9-2.8 1.2-7.5 1.2-7.5 0 0-.6.5-1 1-1 .6 0 1-3 .9-7.3v-7.2l-2.5 5.5c-1.3 3-3 6.8-3.8 8.5l-1.3 3-4.1-8-4.1-8-.1 6.7c0 5.4.3 6.9 1.8 7.7 1.3.8.7 1-2.8 1-2.5-.1-3.7-.3-2.7-.6 1.5-.4 1.7-1.7 1.7-9.4 0-7-.3-9.1-1.5-9.5-2.5-1-1.7-2.4 1.5-2.4 2.8 0 3.3.7 6.7 7.5m-22.6-5.6c-1 .7-1.2 2.3-.7 6.7 1.2 10.3 1.8 12.4 3.3 12.4.8 0 1.1.4.8 1-.3.5-2.5 1-4.8.9-2.3 0-3.6-.3-2.9-.6 1.3-.5 1.7-7.9.4-8.7-.4-.2-2.6-.2-4.9.1-4.1.5-4.1.6-3.6 4.2.3 2 1.2 4.1 1.9 4.7 1.2 1 1 1.3-.8 1.8-1.3.3-3.4.6-4.7.6-2.2 0-2.3-.2-.9-1.3 1.3-1 1.4-2.3.6-9.2-.6-4.6-1.6-8.5-2.4-9.1-2.3-1.8-1.6-2.4 2.9-2.4 2.8 0 3.7.3 2.8.9-1 .6-1.2 1.9-.7 4.5.7 3.4.9 3.6 4.6 3.6 2.1 0 4.2-.5 4.5-1.1 1.3-1.9-.5-7.9-2.3-8-2.4-.1 2.6-1.7 5.8-1.8 1.8 0 2.1.2 1.1.8m58.4 9.1c1.5 4.7 3.4 9.5 4.1 10.7 1.4 2.2 1.3 2.3-2.6 2.3-3.7 0-5.5-1.3-2.9-2.2.6-.2.8-1.4.4-3.1-.6-2.4-1.2-2.7-5-2.7-3.5 0-4.5.4-5 2-.4 1.2-.1 2.7.5 3.5 1 1.2.8 1.5-1.1 1.5-2.4 0-6.5-2-4.2-2 .6 0 3.5-4.5 6.4-10s5.6-9.6 6-9.2 1.9 4.5 3.4 9.2m14.7-8.1c1.9.7 2.7 2.4 4.2 8.5 1.1 4.2 2.3 7.6 2.7 7.6s2.6-2.9 5-6.5c4.4-6.5 6.6-7.7 9.9-5.5 1.3.8 1.3 1-.2 1-1 0-1.9 1.1-2.2 2.7-2.8 14.4-2.9 15.5-1.5 16.4 1.1.7.9.8-.6.8-3-.2-8.2-1.6-6.3-1.8 1 0 2-1.1 2.3-2.4.9-3.7 2.3-12.2 2.1-12.4-.1-.1-2.3 2.9-4.9 6.8-2.7 3.8-5.2 6.9-5.7 6.9-.4 0-1.6-3.4-2.6-7.5S417.3 45 417 45c-.4 0-1.2 2.7-1.7 6-.8 4.9-.7 6.2.6 7.5 1.5 1.5 1.3 1.6-1.4 1-5.6-1.2-6.2-1.6-3.9-2.5 1.6-.6 2.3-2.3 3.3-8.9 1.1-6.5 1.1-8.4.1-9.6-1.4-1.7-.3-1.9 3.2-.6m-96.5 2.3c-1.6 1.2-1.6 1.9-.1 10 1.1 6.1 2.1 8.8 3 8.8.8 0 1.4.4 1.4 1 0 .5-1 1-2.2 1-1.3 0-3.4.3-4.8.5-1.4.3-1.9.3-1.2-.1.6-.3 1.2-1.7 1.2-3.1 0-5.1-2.4-15.5-3.7-16-2.3-.9-1.4-2.2 2-2.6 6.3-.8 6.2-.8 4.4.5M303 43.5c-.8.9-1 2.8-.6 5.1.7 3.3.9 3.5 3.6 2.9 3.3-.7 6.5.7 8 3.6 2.5 4.5-1.4 7.8-11 9.4-4 .7-4.3.6-3.1-.9 1.1-1.3 1.1-2.8.1-8.3-1.7-9.6-1.9-10.3-3.8-10.3-2.6 0 0-1.8 3.3-2.3 1.7-.2 3.4-.5 3.9-.6.5 0 .3.6-.4 1.4m152 1.6c5.5 1.1 9 2.9 5.7 2.9-1 0-1.9 1.1-2.3 2.7-.3 1.6-1.3 5.5-2.1 8.8-1.4 5.5-1.3 6 .3 7.2 2.2 1.6 1.5 1.6-4.4.1-3.5-.9-4.2-1.3-2.6-1.8 1.4-.5 2.4-2.8 4-9.1 2-8.4 2-8.4 0-9.2-3.2-1.2-4.2-.2-5.4 5.5-1.7 7.4-4.5 11.8-7.6 11.8-2.9 0-4.3-1.7-2.8-3.2.8-.8 1.5-.8 2.6.1 2 1.7 3.9-1.4 6-9.4 1.5-5.6 1.4-6.1-.2-7.4-1.5-1.2-1.5-1.3.8-.8 1.4.4 5 1.1 8 1.8m-164.2 2.6c4 3.4 3.2 7.9-1.6 10.1-3.7 1.7-3.8 1.8-2.9 5.4.5 2.1 1.6 3.8 2.5 4s-2.3 1.5-7.1 2.9c-7.7 2.4-8.7 2.5-8.2.9.3-.9-.3-2.4-1.3-3.3-1.5-1.4-2.4-1.5-5.5-.5s-3.7 1.6-3.7 4c0 2 .5 2.8 1.7 2.8 2.5 0 .4 1.7-3.2 2.6-2.6.6-2.8.5-1.8-.7.7-.9 1.5-5.8 1.9-11.1.6-8.6 1.6-13.2 2.6-11.8.2.3 3.4 4 7.2 8.2 4.7 5.4 7.5 7.8 9 7.8 1.3 0 2.5-.3 2.8-.6.5-.5-1.2-8.1-3.8-16.7-.3-.9-1.3-1.7-2.1-1.7-2.7 0-.8-1.1 4.4-2.5 6.4-1.8 6.8-1.8 9.1.2m182.5 2.5c7.3 2.4 8.5 3.5 6.8 6.5-1 1.7-1 1.6-1.1-.4 0-1.6-1-2.5-3.6-3.3-3.9-1.3-4.9-.8-5.9 3.1-.6 2.3-.2 2.8 2.3 3.7 2.2.7 3.3.7 4.2-.1 1-1 1.1-.6.6 1.8-.9 3.8-2.6 5.7-2.6 2.8 0-1.4-.8-2.3-2.6-2.7-3.2-.8-4.2-.1-5 4.2-.6 2.8-.3 3.3 2.2 4.2 2.8 1.1 3.8 1 7.9-.5 1.9-.7 1.9-.6-.2 1.5l-2.2 2.4-7.8-2.5c-4.2-1.3-7-2.5-6.1-2.7 1.1-.2 2.6-3 4.2-8 2.9-8.7 3.2-10.8 1.4-11.5-3.6-1.5 1.4-.4 7.5 1.5m19.3 7.6c-1.6.3-4.6 5-4.6 7.2 0 2 3.7.9 6.5-2 3.1-3.2 7.2-4 8.2-1.5.8 2.3-.5 3.1-2.6 1.8-1.5-1-2.2-.8-3.6.7-1 1.1-2.6 2.2-3.5 2.5-1.7.5-1.7.8 0 6.6 3.6 11.8 6.2 11.9 11.3.7 3-6.6 3.5-8.4 2.4-9.6-1.4-1.7-1.6-1.8 7.6 2.2 6.7 2.9 7.5 3.8 5.7 6.6-.8 1.3-1 1.2-1-.3 0-1.4-5.2-5.7-7.1-5.7-.3 0-1.3 1.6-2.2 3.5-1.6 3.3-1.6 3.5.4 4.6 1.2.6 3.2.8 4.5.5 2.3-.6 2.3-.5 1.2 2.1-1.7 4-2.8 5-2.8 2.7 0-1.7-3.4-4.4-5.5-4.4-.6 0-3.6 7.2-3.3 7.5.2.1 1.8 1 3.6 1.9 2.5 1.3 3.7 1.4 5.3.5 2.8-1.5 3.3-.6.9 1.6-1.9 1.7-2.2 1.7-9.2-1.6-4-1.8-8.7-4-10.4-4.7-2.5-1.2-3.3-2.4-4.5-7-.8-3.1-1.9-5.7-2.5-5.9s-1.6 1.3-2.2 3.4c-.7 2.4-.8 3.9-.2 4.1s1 .7 1 1.2-1.8.1-4.1-.8c-3-1.2-3.7-1.8-2.5-2.4 2-1.1 8.1-17.1 6.7-17.6-.6-.2-1.1-.8-1.1-1.2 0-.5 2.1-.1 4.6.8 2.6.9 3.9 1.8 3 2M249 59.5c-1 1.2-.6 2.9 2.1 9.1 2.1 4.7 4.1 7.9 5.4 8.4 1.8.6 1.7.9-1.2 2.4-3.9 2-6 2.1-4.6.3q1.05-1.2-.6-4.8l-1.6-3.6-4.3 1.8c-4.1 1.8-4.2 1.9-3 4.6 1.8 4.1 3 5.5 4.5 4.9 2.8-1.1 1.1.5-2.7 2.4-4.7 2.4-5.7 2.5-4 .5 1.7-2.1-5-16.8-8.1-17.5-1.9-.5-1.7-.7 1.5-2.3 4.4-2.1 6.3-2.2 4.8-.5-1.2 1.5 1 7.8 2.7 7.8.6 0 2.6-.7 4.5-1.7l3.5-1.6-2-3.8c-1.3-2.6-2.4-3.7-3.4-3.3-3 1.2-1.4-.6 2.3-2.5q6.75-3.6 4.2-.6M392 73c32.8 2.3 63.2 9.4 93.1 21.5 97.2 39.6 167.3 128.4 183.3 232 15.3 99.4-21.2 201.9-95.5 268.1-69.4 61.9-159.3 88.2-249.9 73.3C232.7 653 153.4 596.8 109 516c-51.5-93.5-48.6-208.9 7.5-300.7 23.5-38.3 60.8-75.6 99-98.8C269.1 83.9 330.6 68.7 392 73m148.3 7c1.1 1-.1 5-1.3 5-.5 0-.7-.6-.4-1.4.5-1.3-2-4.6-3.5-4.6-1.3 0-9.3 15.1-8.7 16.5.4 1.2-.4 1-3.4-.5-4.2-2.1-5.1-3.3-2.3-2.8 1.1.2 3-1.9 5.9-6.7 2.3-3.9 4.3-7.5 4.3-8.2.1-1.7-3.8-2.6-5.4-1.3-1.8 1.5-1.9.6-.4-2.1 1-1.9 1.2-1.9 7.7 1.7 3.7 2 7.1 4 7.5 4.4m-318.8-1.8c-.7 2.9 4.8 11.8 7.3 11.8 1.1 0 .6.7-1.6 2-4 2.5-5.1 2.5-4.5.2.7-2.8-4.5-11.2-7-11.2-1.8-.1-1.4-.5 1.8-2.5 4.9-3 4.7-3 4-.3m330.3 9c3.7 2.3 6.8 4.3 7 4.4s-.2 1.3-.9 2.6c-1.2 2.2-1.3 2.2-1.7.3-.5-2.4-2.1-4.5-3.3-4.5-.5 0-3 3.2-5.5 7-3.1 4.9-4.3 7.6-3.9 9 .6 2 .6 2-2.9-.1-4.1-2.4-5.4-3.9-2.9-3.3 1.3.4 3-1.5 6.6-7.2 5.2-8.2 5.1-10-.5-9-2.6.5-2.7.4-1.6-1.4.7-1.1 1.6-2 2.1-2 .4 0 3.8 1.9 7.5 4.2m-343.4-1.8c-.3.8-.1 2.4.6 3.5 1 2 1.2 2 4.2.5 5.4-2.8 10.1 1.3 6.6 5.8-1.9 2.3-10.1 7.2-9.5 5.6.7-1.9-5.2-12.6-7.2-13-1.2-.3-.8-.8 1.4-2.1 3.7-2 4.6-2.1 3.9-.3m-7.6 4.8c1.8 1.8 1.4 2.6-1 2.1-1.3-.2-3.1.2-4.1.9-1.6 1.2-1.5 1.7 1.8 6.5 2 2.9 4.3 5.3 5.3 5.3s.3.9-2 2.5c-4.1 2.8-5.6 3.2-3.9 1.1 1-1.2.5-2.6-2.4-7.1-2.4-3.8-4.1-5.5-5-5.1-3 1.1-1.4-.5 3.8-3.9 6-3.9 5.9-3.9 7.5-2.3m367.5 7.7c1 1.2.9 1.4-.4.9-1.8-.7-3.8 1.2-7.9 7.1-2.1 3-2.1 3.3-.4 2.8 1-.3 4.5-1.3 7.7-2.2 5-1.4 5.8-2 5.4-3.6-.5-2-.5-2 2.6 0 3.3 2.1 4.9 4.5 2.4 3.5-2-.7-12 12.3-11.4 14.8.7 2.5-.2 2.2-4.3-1.2-2.6-2.2-3-2.8-1.4-2.4s2.9-.5 5.7-4.3c1.9-2.6 3.4-5 3.2-5.2-.6-.6-13.5 3.1-14.1 4.1-.3.5 0 1.6.8 2.5 1.2 1.4 1.1 1.5-.7.5-3.4-1.9-7.2-5.5-5.2-4.8 2.3.7 11.9-11.9 11.3-15.1-.3-2.2-.3-2.2 2.6-.5 1.6.9 3.5 2.3 4.1 3.1m-381.1 3.9c1.2 1.5 3.1 3.9 4 5.2 1.5 2.1 1.9 2.3 2.7 1 .9-1.2 1.1-1.1 1.1.6 0 2.4-2.4 4.9-3.8 4-.5-.3-1.4.6-2 1.9-1.9 4.2-8.2 2.8-8.2-1.8 0-1.1.9-3.4 2-5.2 1.8-2.9 1.8-3.4.5-4.5-2.5-2.1-4.6-.5-3.8 3.1.5 2.5.3 3.1-.8 2.7-2.6-.9-2.2-5.4.7-7.7 3.5-2.8 4.8-2.7 7.6.7m-14.6 6.8c-.8 2 6.1 11.4 8.4 11.4 1.6 0 4 1.8 4 3 0 .4-1.3.5-2.9.2-3.7-.5-10.1 4.8-10.1 8.5 0 2.2-.2 2.4-1.6 1.2-1-.8-1.4-2.2-1.1-3.8.9-4.7-4-13.5-6.9-12.4-2.7 1-1.3-.6 4.4-5.1 6.4-5.1 6.7-5.3 5.8-3m416.4 6.1c0 .2-.8.2-1.8-.1-1.2-.4-2.8.4-4.7 2.4-2.5 2.7-2.6 3-1 3.6 1 .4 3.2.2 4.9-.5 5.4-2.2 6.6-2.4 8.1-1.1 1.8 1.5 2 4 .4 4-.7 0-1.7-.7-2.3-1.5-1-1.4-1.6-1.4-5.3.2-4 1.8-4.2 1.9-4.5 7.1-.2 2.9 0 6.3.5 7.4.7 2 .6 2-1.5.5-2.1-1.3-2.3-2.2-2-8.1.2-3.6-.1-6.6-.6-6.6-1.7 0-5.4 4.9-4.9 6.4 1 2.5-.7 1.9-3.9-1.5-1.6-1.6-2.2-2.8-1.3-2.4 2.3.9 13.3-11.8 12.6-14.5-.4-1.7.1-1.5 3.4 1.1 2.1 1.7 3.9 3.3 3.9 3.6M157.5 121c-.9 1.4 7.6 11.2 9.2 10.6 1.9-.8 1.6.8-.4 2.6-2.9 2.4-4.3 3-3.8 1.6.2-.7-.5-2.4-1.6-3.7l-2-2.4-2.2 2.1c-2.6 2.6-1.5 5.3 2.3 6.2l2.4.6-2.9 2.2-2.8 2.2-1.4-2.7c-2.3-4.5-7.3-9.2-9.2-8.6-.9.4-.4-.7 1.3-2.5 3.2-3.4 4.9-4.1 3.9-1.7-.3.9.3 2.5 1.2 3.6 1.8 1.9 1.9 1.9 4.2-.3 2.1-2 2.2-2.3.6-4-.9-1-2.3-1.8-3.1-1.8-1.2 0-1-.6.8-2.5 2.3-2.4 4.7-3.5 3.5-1.5m451.3 11.1c1.7 2 1.9 2.9 1 2.9-1.3 0-5.5 10.7-4.6 11.5.8.7 10.9-4.6 10.3-5.5-1-1.6.6-1.2 2.7.7 2.1 1.8 2.4 3.7.6 3-.7-.2-5 .9-9.5 2.4-9.2 3.3-13.5 3.6-15.3 1.4-1-1.3-1.1-1.8-.1-2.8 1-.9 1.5-.8 2.5.5 2.6 3.5 4.2 2.1 6.5-5.5 1.1-3.9 2.1-8.2 2.1-9.5 0-2.9 1-2.7 3.8.9m-462.2 9.2c2.3 2 4.7 3.7 5.3 3.7.8 0 .4 1.2-.9 3-2.4 3.4-4.1 3.9-3.3 1.2.6-2.6-7.9-10.4-10.4-9.5-1.2.4-.8-.4 1.2-2.6 2.7-2.9 3.1-3 3.5-1.4.3 1.1 2.4 3.6 4.6 5.6m-14.5 4.1c-1 1.2-.8 1.9.9 3.6 2.2 2.2 2.2 2.2 4.3.2 3.4-3 4.5-3.4 6.7-2.2 3.2 1.7 2.5 5.6-2 10.3-2.4 2.6-4 3.6-4 2.7 0-2.5-8.6-10.4-10.5-9.7-1 .4-.5-.6 1.2-2.8 1.6-1.9 3.2-3.5 3.7-3.5s.3.6-.3 1.4m493.8 5.5 2 2.8-2.2-.4c-1.5-.3-3 .4-4.7 2.2l-2.4 2.6 3.1 3.1 3.1 3.1 3.1-2.3c2.5-1.7 3-2.7 2.5-4.3-.4-1.7.1-1.4 2.5 1.3 3.1 3.5 4.2 6.2 1.8 4.2-1-.9-2.9.2-8 4.5-3.7 3.1-6.7 6.1-6.7 6.7 0 1.6 2.1 3.6 3.7 3.6 2.6 0 14.3-9.3 14.3-11.4 0-1.5.6-1.1 2.9 2 2.9 3.8 3.3 5.7.9 3.6-1-.8-2.7-.1-6.6 2.7l-5.3 3.8 7.1.7c8.1.7 9.3.3 8.5-2.7-.6-2.1-.5-2 1.5.3 3.5 4.3 4.2 5.9 2.2 5.4-2.5-.7-15.1 8.6-15.2 11.1-.1 1.7-.4 1.6-2.5-1-2.6-3.1-3.3-5.1-1.4-3.9.9.5 11.9-6.1 11.9-7.2 0-.2-3.7-.4-8.1-.4-7.9 0-8.1.1-7.6 2.2.6 2.2.5 2.2-1.4-.2-1.1-1.4-3-3.6-4.2-5-7.2-8.3-7.2-8.3-5.1-7.7 1.2.4 3-.3 4.8-1.7 3.1-2.6 2.8-4.3-1.3-8-2.1-1.9-2.2-1.9-5.1.9-1.9 1.8-2.8 3.5-2.5 4.5.4.8-.8.2-2.4-1.4-3.3-3.2-4-4.9-1.6-4 2 .8 14.4-9.5 14.4-11.9.1-2.2 1.4-1.5 4 2.2M126.1 155c-1.4.3-2.6 1-2.8 1.6-.6 1.8 7.7 8.6 9.8 8.1 2.7-.7 2.3.5-1.3 3.9-1.8 1.7-2.9 2.2-2.5 1.2.4-1.1-1-2.9-4.4-5.8-5.1-4.3-7.4-4.4-6.6-.4.5 2.8-.8 3.2-2.2.7-.7-1.3.1-2.9 3.6-7 4.1-4.7 4.7-5.1 6.7-4.1l2.1 1.2zm-6.4 15.5c3.5 2.7 4.9 3.2 5.5 2.3.6-.8.8-.2.6 1.7s-.9 3-1.8 3c-.8 0-1.7 1.1-2 2.4-.7 3.3-3.5 4.9-5.7 3.5-1.4-.9-1.8-2.5-1.8-7 0-5.4-.2-5.9-2.2-6.2-1.7-.3-2.3.2-2.3 1.7 0 1.1.5 2.3 1 2.6 1.7 1 1.1 2.5-.9 2.5-3.5 0-3.6-4.4-.3-8.3 2.2-2.6 4.8-2.1 9.9 1.8m536.1 19.6c1.8 2.7 3.5 6.1 3.8 7.4.9 3.6-1.2 6.5-4.6 6.5-2.3 0-3 .5-3 2 0 2.6-3.9 5.1-6.8 4.3-1.9-.5-6.9-6.6-10.7-13.3-.8-1.3-.6-1.3.8-.2 1.4 1.2 2.6.8 9.2-3.3 5-3.2 7.5-5.3 7.5-6.6 0-1 .2-1.9.4-1.9.1 0 1.7 2.3 3.4 5.1m-554.3.6c.8 1.5 1.5 1.9 2.7 1.2 1.1-.6 2.3-.3 3.9 1 2.3 1.8 2.3 1.9.6 5.7-2.4 5.1-5.6 9.4-5.7 7.4 0-1.9-10.5-8.4-11.9-7.5-2.7 1.6 0-3.6 4.3-8.3 2.4-2.7 4.6-2.5 6.1.5m-5 15.7c5.7 5.7 3.4 12.8-4.3 13.4-5.3.4-9.2-3-9.2-7.9 0-7.2 8.4-10.6 13.5-5.5m572.5 6.1c3.4 6.4 3.4 6.7 1.6 8-2.3 1.7-3.4 1.2-1.7-.9.9-1.1.8-2.2-.5-4.9l-1.7-3.5-3.3 1.6c-1.9.9-3.4 2.1-3.4 2.7 0 1.8 2.4 4.3 4.5 4.7 1.7.3 1.6.6-1.2 2.1-4.1 2.2-4.1 2.1-3.6-.6.2-1.2-.2-3-1-4.1-1.3-1.7-1.5-1.7-4.5-.2-1.8.9-3.2 2.1-3.2 2.7 0 2.4 3.2 6.9 5 6.9 1 0 2.2.4 2.5 1 .4.6-.7 1-2.4 1-2.8 0-3.4-.6-6.6-7-3.9-7.6-4.2-8.8-2.1-7.1 2 1.7 18.1-6.3 17.2-8.5-1.4-3.5 1.2 0 4.4 6.1m-586.7 4.7 2.2 1.2-2.4.6c-1.4.3-2.6 1.1-2.8 1.7-.6 1.7 9.4 6.5 11.8 5.8 2-.7 2-.5-.3 3.7-1.8 3.4-2.3 3.9-2.6 2.2-.2-1.3-2.2-2.9-5.8-4.7-3-1.5-5.7-2.7-6-2.7-.4 0-.4 1.3-.2 3 .5 3.2-.1 3.7-1.9 1.9-.9-.9-.3-2.8 2-7.5 1.7-3.5 3.3-6.4 3.5-6.4s1.3.5 2.5 1.2M677 227.6c2.8 6.4 2.6 10-.5 12-3.3 2.2-7.2.6-8.8-3.5l-1.1-2.9-3.9 1.9c-2.5 1.3-3.7 2.5-3.3 3.5 1.1 2.9-.4 1.3-2.4-2.6-2.4-4.8-2.5-5.3-.2-3.9 1.3.8 3.4.3 9.5-2.6 4.5-2.1 7.7-4.2 7.7-5 0-2.7 1-1.6 3 3.1m-597.6 7.9c5 2.2 5.6 2.3 5.7.7 0-1.3.3-1.1 1.2.7.9 1.9.8 2.6-.6 3.6-.9.7-1.7 2.3-1.7 3.7 0 4.5-3.8 6.2-7.2 3.1-1.2-1.1-1.8-3-1.8-6 0-3.9-.2-4.3-2.5-4.3-1.8 0-2.5.5-2.5 1.9 0 1 .7 2.1 1.5 2.5 2.2.8 1.8 2.6-.5 2.6-3.7 0-3.4-7.7.4-10.2 1.6-1.1 1.8-1 8 1.7m602.2 10c3.4 1.4 5.3 4.3 6.7 10.6.5 2.1.2 2.8-1.9 3.7-3.5 1.7-3.7 1.5-2-1 5.3-7.5-3.6-14-12.1-8.8-6.2 3.7-6.6 9.6-.9 13.1 1.8 1.1 2.4 1.9 1.5 1.9-2.9 0-6.8-4-7.5-7.7-.9-4.7 1.5-9.5 5.8-11.6 4.1-2.1 5.9-2.1 10.4-.2m-609 5.4c3.8 1.5 5.4 1.7 6.3.8.8-.8 1.1-.7 1.1.3-.1 2.3-2.8 7.8-2.9 5.8-.1-.9-1.3-2.1-2.8-2.6-1.6-.5-3.7-1.3-4.8-1.7-1.3-.5-.5.8 2.3 3.6 2.3 2.5 4.2 4.8 4.2 5.2s-2.8.7-6.2.8h-6.3l4.4 2c3.3 1.5 4.7 1.7 5.7.8 1.7-1.4 1.7-.9.4 2.7-.9 2.4-1.2 2.5-2.3 1.1-.7-.9-3.6-2.5-6.6-3.7-4.3-1.7-5.6-1.8-6.2-.8-.7 1-.9.9-.9-.4 0-4 1.1-4.8 6.4-4.8 2.9 0 5.6-.3 6-.7.3-.4-1.2-2.6-3.5-4.9-3.6-3.7-4-4.4-2.9-6.4 1-1.9 1.3-2 2.3-.6.7.8 3.5 2.4 6.3 3.5m619.7 14.8c.3 1.6.9 3.7 1.3 4.8.7 1.8.6 1.9-1 .6-1.5-1.2-2.5-1.2-6.9-.1-2.9.7-5.6 1.5-6.1 1.8-.4.2 2.2 1.8 5.9 3.3 6.9 3 8.5 3 8.5.1.1-2.5 1.6.4 2.5 4.8.7 3 .6 3.3-.7 2.2-2.3-1.9-17.7 2.4-18.7 5.2-.7 1.8-.9 1.7-1.5-1-.4-1.6-.9-3.7-1.2-4.7-.5-1.5-.3-1.7 1.3-.7 1.3.8 3.3.6 7.8-.8l6-1.8-6.8-2.7c-7.9-3.2-8.7-3.3-8.7-1 0 3.1-1.8-.1-2.4-4.2-.3-2.2-.3-3.4 0-2.8.3.7 1.8 1.3 3.2 1.2 4.4-.1 15.7-4.3 15.5-5.7-.2-.6.1-1.2.6-1.2s1.1 1.2 1.4 2.7m-624.9 7.9c2.1.5 2.7.4 2.2-.5-.4-.6-.3-1.1.3-1.1 1.7 0 2.5 4.2 1 5.4-.8.6-1.3 2.4-1.1 4.3.3 2.8 0 3.3-2.4 3.9-2.1.6-3.1.2-4.6-1.6-1-1.2-1.8-3-1.8-4 0-3.1-1.1-5-3-5-2.6 0-3.3 2.8-1 4.2s2.7 3.8.7 3.8c-3.4 0-4.8-5.1-2.6-9.2 1.1-2.1 3.9-2.1 12.3-.2m632.9 21.3c1 4.5 1.7 8.4 1.5 8.5-.1.2-1.4.7-2.8 1.1-2 .6-2.3.5-1.2-.6 1.2-1.3 1.7-6.9.6-6.9-.3 0-3.2.6-6.3 1.4s-6.8 1.7-8.3 2c-1.7.4-2.8 1.3-2.8 2.4-.1 2.5-1.6-.4-2.4-4.7-.5-2.9-.4-3.2.9-2.1 1.2 1 3.2.9 10-.6 4.7-1 8.5-2.2 8.5-2.7 0-1.9-2.2-4.7-3.8-4.8-1.4 0-1.4-.2.3-.9 1.1-.5 2.4-.7 2.9-.6s1.8 3.9 2.9 8.5m-640.5-5.7c3.5.9 4.7.9 5-.1.3-.9.7-.9 1.8 0 1.7 1.4 1.8 3.5.2 4.6-.7.4-1.3 2.4-1.3 4.3 0 3.3-.2 3.5-3.5 3.5s-3.6-.3-4.9-4.5c-1.7-5.3-3-6.5-5.1-4.4-1.3 1.3-1.2 1.7 1 3.4 2.1 1.6 2.3 2.1 1.2 3.2-2 2-5.4-2.5-4.6-6.1 1.3-5.4 2.6-5.8 10.2-3.9m-7.6 17c8.6 1.5 9.4 1.5 10.6 0 1-1.3 1.2-1.3 1.2-.1 0 3.5-1.3 8.9-2.2 8.9-.5 0-.7-.4-.3-.9.7-1.2-1.9-2.6-6.2-3.4-3.5-.7-3.6-.5-4.8 6.4l-.7 3.6 4.8.7c3.8.5 4.9.3 6-1.1 1.2-1.6 1.3-1.4.7 1.7-.3 1.9-1 4.6-1.4 6-.7 2.2-.7 2.3-.8.4-.1-2.4-.4-2.5-12-4.5-5.7-1-7.7-1-9.3 0-1.8 1.1-1.9 1-1.3-2.6 1-6.1 1.6-7.1 2.5-4.7.6 1.4 2 2.3 4.6 2.7 4.2.7 5.3-.1 5.5-4.6.1-1.5.2-3.3.3-3.9.1-.7-1.7-1.6-3.9-2-3.1-.5-4.3-.3-5.2 1-1.2 1.4-1.3 1.4-1.3-.5 0-1.1.3-3.5.6-5.2.6-2.8.8-3 1.9-1.4.9 1.2 4.4 2.3 10.7 3.5m652.2 7.9c1.4 7.6 1.1 8.8-2.3 8.9-1.1 0-1.1-.3-.2-1.4.7-.8 1.1-3 .9-4.8-.3-3-.6-3.3-3.8-3.3-3 0-3.5.3-3.8 2.7-.2 1.8.4 3.1 2 4.2 2.1 1.5 2.1 1.6.3 1.6-1.1 0-3.1.3-4.5.6-2.4.5-2.4.5-.7-1 1.5-1.1 1.7-2.2 1.2-4.6-.6-2.9-.9-3-4.3-2.4-5.1.9-5.1.9-4.2 4.8 1 4.3 1.8 5.6 3.6 5.6.8 0 1.4.5 1.4 1.1s-.7.8-1.6.5-2.1-.6-2.8-.6-1.7-2.6-2.4-6.4c-1.4-7.6-1.5-10.7-.3-8.8s19.1-1.4 19.1-3.6c0-3.2 1-.3 2.4 6.9m1.9 16.1c.3 1.8.9 5.8 1.2 8.9.7 5.3.6 5.7-1.6 6.2-2.9.8-3.9-.1-1.6-1.4 1.8-1 2.4-5.9.7-5.9-4.5 0-16.7 2.5-17.6 3.6-.9 1.2-1.3.8-1.8-1.7-.3-1.7-.6-3.9-.6-4.7 0-1.4.1-1.4 1.3 0 1 1.3 2.3 1.4 9.2.6 4.4-.6 8.4-1.4 8.8-1.8 1.3-1.2-.2-5-1.9-5-.8 0-1.2-.5-.9-1 1.4-2.3 4.3-1 4.8 2.2M59.5 333c.4.6.1 1.7-.5 2.6-1.5 1.8-4.2 0-3.3-2.2.6-1.6 2.9-1.9 3.8-.4M42 339.9c0 .5-1.1 1.2-2.4 1.5-2.8.7-5.1 5.5-4.2 9.1.8 3.2 5.4 5.5 11.1 5.7 8.7.1 12.7-5.8 8.5-13l-2.2-3.7 2.9 2.8c2.3 2.3 2.8 3.5 2.7 7.4-.1 4-.6 5.1-3.9 8.1-3.4 3.1-4.1 3.4-8.6 3-9.3-.9-14.2-7.3-12-15.6.6-2.4.9-4.8.6-5.3-.4-.5 1.2-.9 3.4-.9 2.3 0 4.1.4 4.1.9M697.6 351c7.7 0 9.4-.3 9.4-1.5 0-.8.5-1.5 1-1.5.6 0 1 2.1 1 4.6 0 4.2-.1 4.4-1.7 2.9-1.2-1.3-2.6-1.5-5.2-1.1-2 .3-4.7.6-6 .6h-2.4l2.4 1.8c9.9 7.5 9.6 7.4 11.3 5.7 1.5-1.5 1.6-1.3 1.6 3.2-.1 3.7-.3 4.4-1.1 3-1.1-1.9-4.6-2.1-13.6-1.1-3.9.5-5.3 1.1-5.3 2.3 0 1.4-.2 1.4-1 .1-.5-.8-1-3.3-1-5.5.1-3.5.2-3.8 1.4-2.3 1 1.4 2.8 1.8 8.2 1.8h6.8l-6.2-4.5c-6.9-5-7.7-5.3-9.1-2.8-.8 1.4-1 .5-1-3.7.1-3 .3-4.7.6-3.8.4 1.6 1.7 1.8 9.9 1.8m8.3 48.2c1.1 3.2.9 4.2-.8 7.5-1 2.2-2.2 5.7-2.6 7.8l-.6 4 1.5-3c2.1-4.4 7-9.3 10.1-10.1 1.7-.4 4-.1 6.1.9 3 1.5 3.4 2.1 3.4 5.4 0 2.1-.7 4.7-1.6 5.8-1.5 2-1.5 2-3.3-.3-1.5-2.1-2.3-2.3-6.4-1.7s-4.7 1.1-5.2 3.7c-.4 1.6-.5 3-.3 3.2.1.1 1.5.7 3.1 1.4 3 1.3 4.1 6 1.1 4.8-.9-.3-2.1-.6-2.8-.6-.6 0-1.9-1.2-2.8-2.8l-1.7-2.7-.1 3.8c0 2.5-.5 4-1.5 4.4-2.2.8-4.5-2.6-3.8-5.7.5-2.4.4-2.4-3.1.9-3.8 3.7-4 3.7-5 .5-.5-1.8-.1-2.4 2.4-3.3 2.7-.9 3-1.4 2.5-3.3-1.9-6.1-6.5-7.4-11-3.2-2.7 2.5-2.9 2.5-4.2.8-2-2.7-1.6-7.5.9-10.1 4.2-4.4 10.2-2.6 14.9 4.6 1.8 2.8 3.4 5.1 3.5 5.1.8 0-1.1-6.9-2.7-10.2-2.6-5-2.4-6.6 1.1-12.2l3-4.7 2.4 2.8c1.3 1.5 2.9 4.5 3.5 6.5m-654.7 1c.9 3.2.8 4.2-1.1 7.8-1.1 2.2-2.1 5.3-2 6.8 0 2 .2 2.2.7 1 1.4-3.5 8.4-9.8 10.8-9.8 3.8 0 8.3 2.7 9 5.4.5 2.2-1.9 8.6-3.2 8.6-.3 0-1.3-.9-2.3-2.1-1.4-1.8-2.3-2-6.4-1.4-2.6.4-4.7 1.2-4.7 1.9 0 .6-.3 2-.6 3.2-.5 1.7 0 2.2 2.5 2.7 2.4.5 3.1 1.2 3.1 3.1 0 2-.4 2.3-2.2 1.9-1.3-.3-3.3-1.7-4.5-3.2l-2.3-2.6v3.7c0 4.4-1.5 5.6-4 3.3-1.4-1.3-1.8-2.5-1.4-4.4.7-2.6.6-2.6-2.9.8-3.4 3.2-3.5 3.3-4.6 1.3-1.5-2.8-1.5-2.8 1.9-4.2s3.6-2 1.5-6c-2-3.9-6.1-4-10-.4-2.7 2.5-2.9 2.5-4.2.8-3.3-4.5.2-12.4 5.6-12.4 4.1 0 7.2 2.1 10.9 7.5 3.3 4.9 3.4 4.9 2.7 1.6-.4-1.8-1.6-5.2-2.6-7.5-2.5-5.5-2.4-6.4 1.2-12.1l3.1-4.9 2.4 2.9c1.4 1.7 2.9 4.7 3.6 6.7m7.1 41c.4 2.7-.2 4.1-3.2 7.8-6.9 8.5-6.7 7.9-1.9 6.8 2.4-.6 5.1-1.9 6.1-3 1.7-2 1.7-2 1.7 0 0 1.1.3 2.9.7 3.9.6 1.5.4 1.6-.8.6-1.2-.9-3.4-.7-10.7.9-5.1 1.2-9.5 1.9-9.8 1.5-.4-.3 1.1-2.8 3.3-5.4s5.2-6.4 6.6-8.4l2.7-3.6-6.2 1.4c-3.8.8-7 2.2-8 3.5-1.7 1.9-1.8 1.9-1.8.2 0-1.1-.3-3-.7-4.4-.6-2.3-.5-2.4 1-.9s2.2 1.5 9.4-.1c4.3-1 8.2-2.5 8.8-3.4 1.3-2 2.2-1.2 2.8 2.6m641.5 7.7c3.4 2.4 5.9 4.7 5.7 5.1-.3.5-3.8 1.4-7.8 2-3.9.7-8.3 1.7-9.6 2.1-2.3.9-2.3.8-1.6-2.8.6-3.7 2.5-7 2.5-4.5 0 .7 1.1 1 3.3.6 6.1-1.1 6.2-1.4 2.3-4.1-3.1-2-4-2.3-4.7-1.2-.6 1-.9.7-.9-1.2 0-3.5.8-4.1 2.9-2 .9.9 4.5 3.6 7.9 6m-1.5 17.2c8.2 8.8-5.2 18.7-13.8 10.1-1.6-1.6-2.5-3.6-2.5-5.6.1-8.4 10.1-11.2 16.3-4.5M55 467.2l11.3 1.1-8.9 8.6c-9.8 9.5-9.4 9.4-11.9 1.1-.7-2.1-.5-2.3.6-1.3 1.1.9 1.8.8 3.1-.1 1.5-1.1 1.6-1.8.6-4.9-1.2-4-4-5-5.6-2.1-.8 1.4-1.1 1.1-2.1-1.6-1.4-4.2-1.4-4.5.3-3.1.7.6 6.4 1.6 12.6 2.3m626 13.2c0 2 .8 2.7 4.7 4 5.8 2 7.3 2 7.3 0 0-.8.5-1.2 1-.9 1.6 1 1.2 6.1-.6 7.6-1.3 1-2.7.9-8.2-.9-4.9-1.6-6.8-1.9-7.3-1-.5.8-1.2.2-1.9-1.7-.6-1.7-1.9-3.8-2.7-4.8-2.1-2.3-1.2-3 2.2-1.7 2.3.9 2.8.8 3.2-1 .7-2.8 2.3-2.5 2.3.4m-609.2 6.5c2.6 6.4 2.8 9.8.5 12.3-1.7 1.9-5.8 2.4-6.8.8-1.2-1.9-2.5-.9-5.4 4.2l-3 5.2-1-2.8c-1.4-3.6-1.5-3.2 2-8.8 1.6-2.8 2.9-5.1 2.7-5.3s-2 .4-4.1 1.2c-2.5 1-3.6 2-3.3 2.9.3.8.3 1.4 0 1.4-.4 0-4.4-8.6-4.4-9.5 0-.2.9-.1 2 .2 2.9.8 16.2-4.8 16.8-7 .6-2.4 1.4-1.4 4 5.2m611.4 9.1c6.1 2.3 6.1 2.3 5.3 1-.3-.6-.2-1 .4-1 .5 0 1.3 1 1.7 2.2.5 1.6.1 2.7-1.5 3.9-1.3 1.1-2.1 2.9-2.1 4.7 0 6.4-6.2 6.7-8 .4-.5-2-1-4.5-1-5.4 0-1.8-3.3-3.3-5-2.3-1.4.9-1.2 3.6.3 3.4 2.7-.3 3.7.2 3.7 2.1 0 3.2-3 3.7-5.2 1-2.1-2.6-1.8-5.7.8-9.8 1.8-2.7 3.9-2.8 10.6-.2M79 504c2.2 4.3 2.5 5.4 1.1 4.5-1.1-.6-7.2 6.5-6.5 7.7.8 1.3 9.2 1 9.6-.4.3-.7 1.9 1.5 3.7 4.8l3.2 5.9-2.5 6.5c-1.5 3.6-2.6 6.9-2.6 7.3 0 1.8 7.9-3.7 8.2-5.7.3-1.8.6-1.6 2.2 1.3 1.7 3.1 1.7 3.3.1 2.7-1.1-.4-4.5 1-9.6 3.9-4.3 2.5-8.2 4.5-8.8 4.5-.5 0 .8-4.4 2.9-9.8 2.1-5.3 3.6-9.8 3.5-10-.2-.2-2.8 1.1-5.9 2.8-4.1 2.3-5.6 3.8-5.6 5.3 0 2.1-.1 2.1-2-.3-2.3-3-2.5-4.1-.6-3.4 1.5.6 14.9-6.7 16.2-8.8 1.2-1.8-2.2-3.5-8.7-4.1-6.6-.7-11.4.9-12.2 4-.3 1.2-1.1.3-2.5-3-2.5-5.5-2.7-6.6-1.1-5 1.9 1.9 7-1.3 11.2-7 2-2.8 3.7-5.7 3.7-6.4 0-2.2.9-1.4 3 2.7m596 9.5c2.7 1.4 5.9 2.5 7 2.5 2 0 2 0-.1 4.2-1.2 2.4-2.4 3.7-2.7 3-.3-1.1-11.1-7.2-12.7-7.2-.3 0-.5 1-.5 2.3 0 1.9 1.1 2.9 5.2 4.8 2.8 1.3 5.8 2.3 6.5 2.1 1.8-.4 1.6.8-.9 4.8-1.2 2.1-2.3 3-2.5 2.2-.7-1.9-12.1-7.4-12.8-6.1-.4.5-.4 1.6-.1 2.4.7 1.8 10.4 6.8 11.6 6 1.4-.9 1.2-.1-.7 4-1.6 3.3-3.3 4.6-3.3 2.5 0-1.4-11.9-7.2-13.6-6.6-1 .4-.9-.3.3-2.9.9-1.9 2-3.5 2.5-3.5.4 0 .8-1.1.8-2.4 0-2.4 2.3-5.6 4.1-5.6.5 0 .9-1.5.9-3.3 0-6.2 3.2-7.1 11-3.2m-14.9 28.6c2.7 1.7 5.3 2.8 5.9 2.4 1.8-1.1 1.1 4.3-.8 5.7-.9.7-2.2 2.6-2.7 4.3-.8 2.2-1.8 3.1-3.7 3.3-3.5.4-5.2-2.7-4.5-8.4.3-3.2.1-4.4-1-4.8-2.6-1-4.3-.6-4.3.9 0 .8.7 1.5 1.5 1.5 2.4 0 3.1 3.1 1 4.6-4.3 3.2-6.3-5-2.4-10 2.7-3.4 5.2-3.3 11 .5m-11.2 16.4c2.8 2 5.6 3.3 6 3 1.4-.8 2 1.7.9 3.7-.5 1-1.7 1.8-2.6 1.8-1.2 0-1.8.9-2 2.6-.4 5.1-3.6 6.8-6.7 3.7-1.3-1.2-1.6-2.8-1.3-6.5.5-5.1-.9-7.5-3.7-6.4-2.1.8-1.9 2.3.5 2.9s2.6 2.9.5 4.7-4.5-.4-4.5-4.2c0-2.9 4.6-8.8 6.8-8.8.5 0 3.3 1.6 6.1 3.5m-536.2 2c2.7 5.1 2.7 5-.1 6.8l-2.4 1.6.1-4.7c.2-4.3 0-4.7-2.2-5-2.4-.4-2.4-.3-1.7 6.2.6 6.2.5 6.8-1.9 9.2-2 2-3.2 2.4-5.3 2-3-.7-7.2-4.9-7.2-7.2 0-.8-.4-1.4-1-1.4-1.9 0-1-1.6 2.2-4l3.1-2.3-.8 2.4c-1.1 3.7-.8 7 .9 8.7 1.2 1.3 1.8 1.3 3 .2 1.2-1 1.5-2.4 1-6.6-.9-7.4 1.2-10.6 6.4-10.2 3.2.3 4 .9 5.9 4.3M635 574.3c4.7 3.7 8.6 7.1 8.8 7.7s-5 1.1-12.9 1.2l-13.2.3 6.7 5.2c5.7 4.4 7.1 5.1 8.8 4.2s1.8-.8.9.8c-.6 1-2 2.9-3.1 4.3-1.8 2.1-2 2.2-1.6.5.7-2.6.3-3.1-8.1-9.9-6.1-4.9-7.7-5.7-9.9-5.2l-2.6.7 3.2-4 3.2-4.1h9.1l9.2-.1-4-3.5c-3.1-2.7-4.6-3.4-6.8-2.9l-2.8.5 2.8-3.7c2.7-3.5 2.8-3.5 3.3-1.2.4 1.4 4 5.1 9 9.2m-511.1.8c3.3 4 5.8 7.6 5.5 8-.3.5-1.5 1.4-2.6 2-1.9 1-2 .9-1.5-1.1.6-2.4-.1-5-1.4-5-.4 0-3.7 2.5-7.3 5.5-4.7 4-6.4 6-6 7.3.3.9-1 0-3-2-3.6-3.8-4.7-6.2-2.3-5.3.7.3 4.3-2 8.1-5.2 6-5 6.6-5.8 5.2-6.9-.9-.6-2.6-1-3.6-.7-1.1.3-2 .1-2-.5 0-1.1 2.7-3.1 4.2-3.2.4 0 3.4 3.2 6.7 7.1m11.1 19.4c-1.1 2.5-2.9 6.6-4 9.1s-2 5.4-2 6.5c0 2.8-2.1 2.2-5.3-1.7-2.2-2.5-2.5-3.4-1.3-3.4.8 0 2-.8 2.5-1.9.8-1.4.5-2.3-1.3-4.1-2.7-2.5-6.3-2.3-5.8.3.4 2.3-.6 2.1-2.9-.6-2.3-2.8-2.4-3.6-.1-3.1.9.2 5.5-.9 10.2-2.5 12.2-4.2 12.4-4.1 10 1.4m469.5.5 2.8 2.9-4.9-.5c-5.4-.7-7.9.8-7.2 4.3.4 1.9 2.6 2.1 12.4.8 4.5-.6 5.5-.4 7.3 1.4 4.2 4.2 2.1 11.6-3.9 14.1-1.6.7-3 2-3 2.8 0 1.1-1.1.5-3.5-1.8-1.9-1.8-3.3-3.5-3.2-3.6.2-.2 1.9.2 3.9.8 3.1.9 4.1.8 6.2-.6 2.9-1.9 3.5-6 1-7-.9-.3-4.3.1-7.5.9-5 1.3-6.4 1.4-8.7.3-5.8-2.8-5.4-10.9.8-14.1 1.9-1 3.4-2.2 3.3-2.7-.5-1.9 1.3-1 4.2 2M166 618.1c5.5 4.7 5.5 4.7 3.6 6.8-2.5 2.8-3.4 2.7-2.9-.3.3-1.6-.3-3.2-1.7-4.6l-2.2-2.2-2.3 2.8c-2.6 3.2-1.8 5.2 1.4 3.5 3.1-1.7 2.6-.1-1.5 4.4-3.2 3.7-3.5 3.8-3 1.4.3-1.4.3-2.9-.1-3.3-.9-.8-5.3 3.4-5.3 5 0 2 3.9 3.6 7.6 3.2l3.4-.4-2.6 2.7-2.7 2.8-6.8-5.7c-6.5-5.3-8.6-7.8-5.6-6.6 1.9.7 13.3-13.4 12-14.7-.6-.6-1.5-.4-2.3.6-2 2.4-3 1.8-2.4-1.4 1.1-5.2-1.5-4.7-7.7 1.5-3.2 3.1-5.9 6.6-6.1 7.6-.3 1.6-1 1.2-4.3-2.3-2.2-2.3-3.3-3.9-2.4-3.6 1.1.3 3.7-1.5 7.9-5.8 6.6-6.7 7.2-9.2 1.7-8.1l-3.1.6 2.4-2.5 2.4-2.5 8.5 8.3c4.7 4.5 11.1 10.3 14.1 12.8M625.5 602c0 1.8-.6 2.6-2.3 2.8-1.3.2-2.5-.3-2.8-1.2-1-2.6.4-4.8 2.8-4.4 1.7.2 2.3 1 2.3 2.8m-35.7 17.3c.3 1.2-.4 2-1.7 2.4-1.2.3-2.1 1.1-2.1 1.8 0 2.2 5.5 8.4 7.4 8.5 1.7 0 1.5.5-1.5 3.6-2.8 2.9-3.5 3.2-3.8 1.8-.5-2.6-8.2-11.4-9.9-11.4-.9 0-.5-.7 1.1-2 1.5-1.2 3-2.1 3.4-2.1s1.4-1.1 2.1-2.5c1.5-2.8 4.5-2.9 5-.1M577 630.5c3.8 2 3.8 2.8-.2 6-3.2 2.5-3.3 2.6-1.3 4.1 2.6 1.9 4.7 1.4 6.3-1.6 1.2-2.5 1.3-2.5 1 .9-.2 2.3-1.2 4-3 5.4-2.4 1.8-3 1.9-5.9.7-3.5-1.5-6.9-6.3-6.9-9.8 0-2.3 4-7.2 6-7.2.6 0 2.4.7 4 1.5m-19.2 5.5c.9 1.5 1.9 1.9 3.7 1.4 2.8-.7 3.3.3 1 2-1.3.9-1 1.8 1.8 5.8 3.2 4.8 5.1 5.9 6 3.5.3-.6.6-.3.6.8.1 2.7-1.7 4.5-4.6 4.5-1.6 0-3.4-1.5-5.9-5.1-2.4-3.3-4.2-4.8-5.1-4.4-1.1.4-1.3.1-.9-1.1.3-.8.6-3.3.6-5.5 0-4.3.9-4.9 2.8-1.9m-6.4.6c.9.3 1.6 1.3 1.6 2 0 2-2.7 2.9-4.5 1.4-1.9-1.6-1.9 0 0 2.7 1 1.4 2.2 2 3.1 1.6 1.3-.5 1.5-.1 1 1.5-.8 2.3 4.4 11.3 7.1 12.3 1.2.4.7 1.1-2.1 2.7-4.4 2.6-4.3 2.6-4.3.8 0-2.3-6.3-11.5-7.6-11-.8.3-1.3-1.3-1.4-5-.2-4.9 0-5.7 2.3-7.5 3-2.4 2.7-2.3 4.8-1.5m-357.4 3c4 2.7 5.2 4.1 2.6 3.1-2.3-.9-10.8 13-9.6 15.4 2.7 4.9 6.5 3.5 11.4-4.1 2.1-3.3 3.6-6.7 3.2-7.5-.8-2.1.7-1.9 3.5.5 2 1.6 2.1 1.9.7 2-1 0-3.5 2.7-5.8 6-5.9 8.7-9.2 9.8-15.3 4.9-3.8-2.9-3.4-6.1 1.4-14 2.2-3.8 3.8-7.3 3.4-7.9-1-1.6.3-1.2 4.5 1.6m18.1 11.3c2.4 1.2 2.8 2.3 3.9 9.3l1.3 8.1 2.4-3.9c1.4-2.3 2.1-4.8 1.8-6-.4-2 .2-1.9 7.8 1.8 6.1 3.1 7.7 4.3 6.4 4.7-1 .4-3.4 4.1-5.3 8.4-3 6.5-3.4 8.1-2.3 9.3 1.2 1.4 1 1.4-2.4.1-2-.9-4.5-2.1-5.4-2.6-1.5-.9-1.6-1-.2-1.1 1 0 2.9-3.1 5.4-8.6 3.2-7.1 3.6-8.7 2.4-9.5-2.7-1.7-4.2-.4-8.8 7.8-2.5 4.5-4.9 8.3-5.3 8.3-.3 0-1.2-3.3-1.8-7.3-.7-3.9-1.5-8.8-1.9-10.7l-.7-3.5-3.3 5.8c-1.9 3.4-3.1 6.6-2.8 7.8.6 2.4.5 2.4-3.5-.1-2.9-1.7-3-2-1.1-2 1.7 0 3.2-1.7 6.4-7.1 2.5-4.4 3.9-7.8 3.6-9-.3-1.1-.2-1.9.1-1.7.4.2 1.9 1 3.3 1.7m330.1 3.8c.9 1 2.3 3.3 3.2 5 .9 1.8 2.3 3.3 3.1 3.3s1.5.4 1.5.9c0 1.7-3.2 4.2-4.9 3.9-.9-.2-2.4.7-3.5 2-4.5 5.7-8.7-.6-4.8-7.2 2.1-3.5 1.4-6.6-1.3-6.6-1.8 0-1.9 2.2-.3 3.8s-.3 3.5-2.8 3c-3-.5-2.8-3.6.4-6.8 3.4-3.4 7.1-3.9 9.4-1.3M519.5 667c2 4.7 4.4 9.1 5.3 9.8 1.4 1.1 1.4 1.4-.8 3-1.4.9-2.9 1.7-3.5 1.7-.5.1-2.2.9-3.7 1.9-2.4 1.6-2.9 1.6-5.5.2-6.9-3.5-7-16.6-.1-16.6 2.1 0 2.2-.1.6-3.5-.6-1.4-1.8-2.5-2.7-2.5-.9-.1 0-.9 1.9-2 1.9-1 3.8-1.5 4.2-1.2.3.4 2.3 4.5 4.3 9.2m-276 0c2.2 1 3.4 1.9 2.8 1.9-.9.1-1.3 2.2-1.3 7.3v7.2l4.5-4.4c4.5-4.4 5.6-6.9 3.3-7.1-.8 0-.9-.2-.2-.5.6-.3 2.4 0 4 .6 2.7 1.1 2.8 1.2.9 2.2-1.1.6-5.5 4.5-9.7 8.6-7.7 7.5-7.8 7.6-7.9 4.7-.1-1.7-.4-7.4-.8-12.8-.3-5.3-.4-9.7-.1-9.6.3 0 2.3.9 4.5 1.9m257.9 8.1c3.6 2.8 3.3 4.4-1.4 5.9-3.3 1.1-3.8 1.6-3 3.1 1.7 3.1 5.1 3.4 7.1.8 1.4-1.8 1.9-2 1.9-.8 0 2.7-4 6.9-6.5 6.9-3.7 0-5.5-1-7-4.1-2.2-4.2-1.9-9.4.7-11.9 2.8-2.5 4.8-2.5 8.2.1m-232.2 1.5 7.7 2.5-1.1 3.1-1.1 3-1.2-2.9c-1.2-2.8-4.8-4.8-6.6-3.7-1 .6-2.2 6.4-1.5 7.1.3.4 1.8-.4 3.3-1.8 1.8-1.7 2.4-1.9 2-.8-.3 1-1.1 3.5-1.8 5.8-1.4 4.5-2.9 5.4-2.9 1.7 0-1.4-.5-2.8-1-3.1-1.1-.7-3 3.5-3 6.4 0 3.5 7.9 3.2 10.2-.3 1.2-1.8.9 1-.4 3.9-.6 1.4-1.6 2.4-2.2 2.2l-8.1-2.7c-7.1-2.3-10.2-4-7.3-4 1.9 0 7.3-14.1 6.5-17-.6-2.5-.7-2.5 8.5.6m215.5 3.6c.6.7 1.8 3.5 2.8 6.3 1 2.7 2.4 5.5 3.2 6.1 1.1 1 .5 1.5-3.3 2.8-4.2 1.4-4.5 1.4-4 0 .4-.9-.1-4.1-1.1-7-1.6-5.1-3.4-6.7-4.8-4.4-.8 1.3 2.4 11.2 3.9 12.2.7.5.5.9-.4 1.2-.8.3-2.8 1-4.4 1.6-2.4.9-2.7.8-2.3-.4.6-1.6-1.9-10.4-3.4-12.1-.6-.5-1.3-.5-2 .2-1.4 1.4.6 9.6 2.8 11.9 1.3 1.2 1 1.6-2.1 2.9-4.5 1.9-4.3 1.9-4.3-.9 0-3.1-3.4-12.6-4.5-12.6-.4 0-.8-.4-.8-1 0-.5 1.7-1.2 3.8-1.6 2-.4 4.7-1.4 5.9-2.2 1.3-.8 3-1.1 3.9-.8s2.7-.3 4.1-1.4c2.9-2.3 5.6-2.6 7-.8m-196.6 2.2c3 .9 6.3 2.4 7.3 3.5 2.4 2.6 1.8 7.3-1.1 8.6-2.8 1.2-2.8 2.7-.3 8.2 2 4.5 1.7 4.9-2.3 3.4-1.6-.6-3-2.5-4.2-5.8-2.5-6.7-3.1-7-4.3-2.4-.8 3.5-.7 4.3.7 5.2 1.5 1 1.5 1-.1.5-.9-.3-3.3-.8-5.2-1.2-3.7-.6-6-2.4-3.2-2.4.9 0 1.9-1.5 2.5-3.8.6-2 1.7-6 2.6-8.7 1.4-4.6 1.3-5.1-.3-6.4-1.9-1.5-2.4-1.6 7.9 1.3m23.4 5.7c.4.6 1.3.8 2.1.5 1-.4 1.4.3 1.4 2.4 0 3.7-1.6 4.7-2.4 1.4-1-3.9-7.6-5.4-7.6-1.7 0 .9 2 3.3 4.5 5.5 5 4.4 5.9 8.2 2.5 11.3-1.5 1.3-2.9 1.6-6.2 1.1-2.4-.3-5.1-.7-6-.8-1.9-.2-2.2-2.8-.9-6.2.7-1.8.9-1.6 1.9 1.2 1.5 4.3 5.6 6.2 8 3.8 1.6-1.6 1.5-1.9-2.5-5.7-5.6-5.2-6.7-7.3-5.2-10.2.7-1.2 1.7-2.5 2.3-2.9 1.7-1.2 7.4-.9 8.1.3m144.9 2.1c.8 1.3 1.8 4 2.1 6.1.4 2 1.4 4.1 2.2 4.5 1.1.7 1 1.2-.7 2.7-1.6 1.5-2.5 1.7-3.8.9-1.3-.9-2.3-.6-4.4.9-2.2 1.7-3 1.8-4.3.7-2.4-2-1.8-5.4 1.5-8.5 3.2-3.1 3.7-7 1-7q-1.5 0-1.5 3c0 2.3-.4 3-2 3-3.1 0-3.1-3.9.1-6.4 3.6-2.8 7.9-2.7 9.8.1m-130.6-.2c1.7 0 3.2.4 3.2 1 0 .5-.6 1-1.3 1-1 0-1.8 2.6-2.5 8.2-1.5 10.6-1.5 10.6.6 11.1.9.3.1.5-1.8.5-3.7 0-10.6-1.5-7.9-1.7 1.9-.1 2.5-2.1 3.5-11.3.5-5.1.3-7.2-.7-8.5-1.3-1.5-1.2-1.6 1.1-1 1.4.4 4 .7 5.8.7m16.6 2c6.6 0 8.1 1 7.2 4.6l-.7 2.8-1.2-2.5c-2-3.9-4.3-3.6-5.1.8-1 6.6-.7 15.1.7 15.6.6.3-.8.6-3.3.6s-5.2-.4-6-.9c-1.3-.8-1.3-1 .1-1 1.3 0 1.8-1.5 2.2-6.8 1-10.2.9-12.2-.8-12.2-.8 0-2.3 1-3.5 2.2l-2 2.2v-2.5c0-3.4.9-4.2 4.4-3.5 1.6.3 5.2.6 8 .6m96 2.2c.8 1.3 1.8 4.4 2.1 7.1.4 2.6 1.2 5 1.7 5.3 1.5.9-1.2 2.4-4.5 2.4-1.6 0-2.6-.4-2.3-.9 1-1.6-1.6-13.1-2.9-13.1-.7 0-1.5.6-1.8 1.3-.6 1.7 1.2 10.8 2.4 12.3.6.8-.1 1.3-2.2 1.8-4.8.9-6.5.8-5.3-.4s-.2-11.7-1.9-13.8c-1.4-1.7-.6-2.3 3.6-2.5 2-.2 3.9-.6 4.3-1 1.5-1.5 5.4-.6 6.8 1.5m-77-.1c-.7 1.1 2.4 8.9 3.6 8.9.3 0 1.6-1.7 2.8-3.8 1.6-3 1.9-4.1 1-5s-.3-1.2 2.7-1.2h3.8l-2 2.2c-6.9 7.7-9.3 15.6-5.5 18.4 1.5 1.2.8 1.3-4.8 1.3-4.9 0-6.1-.2-4.7-1 3.5-2 .7-12.3-5.1-19.2-1.4-1.6-1.2-1.7 3.7-1.7 3.5 0 5 .4 4.5 1.1"></path><path d="M396 44.6c-.8 1.6-1.6 3.2-1.8 3.5-.1.4 1.1.9 2.8 1.1 3.4.5 3.3.6 1.6-4.1l-1.2-3.3zM304.4 53.6c-.8.3-.9 1.6-.4 4 1 4.4 1.3 4.7 3.9 3.9 3.2-1 3.8-4.5 1.1-6.7-2.3-1.9-2.7-2-4.6-1.2M283.4 52.1c.3 1.7.6 3.5.6 4 0 1.6 3.9.9 4.8-.9 1.5-2.8-.3-6.2-3.4-6.2-2.4 0-2.6.3-2 3.1M264 62.3c0 3.8 1.1 4.6 4 2.7 1.3-.8 1.1-1.4-1.2-3.7l-2.8-2.8zM344.6 77.1c-58.7 6-111.5 27.3-156.8 63-12.2 9.7-37.6 34.9-47.2 46.9-20.6 25.8-38.2 58.1-49.3 90.5-16.2 47.4-19.7 101.6-9.9 152 23.2 118.7 117.4 211.8 236.6 234 32.8 6.1 75.2 6.1 108 0 89.2-16.6 166-73.3 208.6-154 14.7-27.7 25.5-61 30.4-93.1 2.7-17.6 3.8-53.6 2.1-70.9-5.6-57.7-25.4-108.1-61-155-9.7-12.9-39.7-42.9-52.6-52.6-41.9-31.8-87.8-51.2-139-58.9-16-2.4-54.9-3.5-69.9-1.9m19.8 47.5c1.4.5 1.6 4.9 1.6 38.4v37.8l-6.7.7c-25 2.4-39.5 6-54.8 13.4-5.5 2.7-10.2 4.7-10.4 4.5s-.5-16.8-.7-36.9c-.4-42.7-.4-42.5 7.7-46.9 6.1-3.4 24.3-8 36.9-9.5 5.2-.6 10.9-1.3 12.5-1.5 5.5-.6 12.3-.6 13.9 0m41.1 2.1c20.9 2.9 35.8 7.7 38.9 12.6 2.4 3.7 2.6 7.8 1.8 47.4l-.7 38.2-7-4.6c-13.9-9.1-24.8-13-50.5-18.2-3-.6-6-1.5-6.6-1.9-.8-.5-1.3-12.7-1.8-38.5l-.7-37.9 7.8.7c4.3.3 12.8 1.3 18.8 2.2m-54.2 96.4c8.1 1.6 16.3 2.9 18.1 2.9 1.9 0 9.2-1.4 16.2-3.1 11-2.6 29.4-4.8 29.4-3.4 0 .3-4.6 2.6-10.2 5.3-10.4 4.9-16.8 9.3-16.8 11.6 0 1.8 5.2 6.3 17 14.8 12.5 9.1 21.8 17.3 20.7 18.4-1.8 1.9-12.3-4.8-25.2-16.2-14.1-12.4-18.4-13.9-23.6-8.3-1.6 1.7-2.9 3.6-2.9 4.2 0 1.8 5.1 7.9 15.4 18.4 7.2 7.4 9.4 10.3 8 10.3-3.2 0-7.8-3.5-14-10.6-8.6-10-14.2-15.4-16.1-15.4-.9 0-6.3 4.7-12.1 10.5-8.4 8.5-11 10.5-13.3 10.5-1.6 0-2.9-.4-2.9-1 0-1.8 6-7.8 14.5-14.6 9.6-7.5 10.3-9.4 5.7-14.5-2.8-3.1-2.9-3.1-6.8-1.9-5.7 1.8-10.1 4.7-17.8 11.8-8.1 7.5-10.3 9-14.5 10.2-2.3.6-3.1.5-3.1-.4 0-1.7 7-8.1 13.5-12.5 7.2-4.9 12.5-10.2 12.5-12.6 0-1.1-1.3-3.6-3-5.5-1.6-1.9-2.9-4.1-3-4.8 0-.8-.7-1.1-1.8-.8-1.1.4-3.8-.6-6.7-2.5-3.8-2.4-4.5-3.3-3.4-4 1.8-1.2 7.6-.5 26.2 3.2m-60.1 31.1c1.6 2 5.7 5.8 9.1 8.4 17.9 13.4 45.6 21.9 75.3 23.1 23.5 1 40.1-2 57-10.2 10.4-5 14.7-9.3 19.7-19.3 1.7-3.4 3.5-6.2 3.9-6.2 1.9 0 .6 8.1-2.2 13.8-5.6 11-20 22.4-35.9 28.2-18.7 6.9-39.4 7.7-66.2 2.6-28.2-5.3-45.1-13.8-58.7-29.4-5.9-6.9-7.7-10.5-8.6-17.7l-.6-5 2.1 4c1.2 2.2 3.5 5.7 5.1 7.7m6.8 33.7c4.7 2.7 13.5 7.3 19.5 10.4 16.2 8.1 16.1 8 7.8 10-3.7.9-16.6 3.3-28.6 5.4-19 3.2-22.1 3.5-24 2.3-5.9-3.6-16.3-3.2-44.5 2.1-9 1.7-16.6 2.8-17 2.5-1.2-1.3 2.9-3.7 32.3-18.8 26.8-13.8 34.5-17.5 39.5-19.2 2.6-.9 6.3.4 15 5.3m160 .7c2.9.9 12.3 4.8 20.9 8.8s16.5 7.6 17.5 8c1 .3 1.7.8 1.5 1s-10.3 2.5-22.4 5c-12.1 2.6-22.5 4.9-23.1 5.1-.7.2-2.8-.5-4.8-1.6-2-1-5.3-1.9-7.4-1.9-3.9 0-45.4 7.7-55.2 10.3-5.5 1.4-8.5 1.3-7.4-.4.8-1.4 14.7-8.2 32.7-16 8.9-3.9 20.9-9.5 26.6-12.6 5.7-3 11.5-5.9 13-6.3 1.4-.5 2.6-.9 2.7-.9 0-.1 2.4.6 5.4 1.5m-89.5 36.3c44 22 82.5 42.9 82.5 44.9 0 .6-319.9.5-332.2-.1-4.6-.2-4.1-.5 33.3-20.2 20.9-11 39.7-20.6 41.7-21.3s10.7-2.4 19.2-3.8 22.1-3.6 30.2-5c18.4-3 22.8-3 27.7-.2 3.7 2.1 3.8 2.1 12.7.5 4.9-1 14.1-2.4 20.4-3.2 6.3-.9 15.8-2.6 21-3.9s10.4-2.5 11.5-2.5c1.2-.1 15.6 6.6 32 14.8m198.1 13.6c32.4 15.2 60 28.4 61.4 29.5 2.5 1.9 2 2-70.5 2.2-40.1.2-77.3.3-82.6.3h-9.6l-16.9-8.3c-17.3-8.6-57.4-29.9-60.8-32.5-2-1.4-2-1.5 0-2 5.2-1.7 49.9-10.7 52.7-10.7 2.1 0 3.6.7 4.5 2 2 3.3 10.8 2.6 30.5-2.4 20.2-5.2 20.7-5.3 27.3-5.5 4.8-.1 9.6 2 64 27.4m-400.3 53.9c2.7.8 4.9 1 5.3.5 1.3-2.2 2.4-.5 2.4 4.1 0 5-1.3 6.7-2.5 3-.9-2.9-5.4-6-8.7-6-4.1 0-8.4 4.5-9.3 9.8-.9 5.6 1.1 13.8 3.8 15.7 3.5 2.4 9.1 1.9 12.7-1.2 2.7-2.2 3.2-2.3 2.9-.8-1.2 5.7-12.5 8.2-19.8 4.3-12.5-6.5-10-25.6 3.8-29.8 3.7-1.2 4.3-1.1 9.4.4m36 .8c-2 1-2.3 1.9-2.3 7v5.8h10v-5.4c0-4.5-.4-5.8-2.2-7-2.1-1.5-1.8-1.6 5.7-1.6s7.8.1 5.7 1.6c-2.1 1.4-2.2 2.2-2.2 13.7 0 6.7.4 12.7.8 13.3.4.7 1.6 1.4 2.7 1.7 1.1.2-2 .5-7 .5-4.9 0-8.1-.3-7-.5 2.9-.7 3.5-2.1 3.5-8.1V409h-10v6c0 5.4.3 6.2 2.3 7 1.6.6-.2.9-6.3.9s-7.9-.3-6.2-.9c2.1-.9 2.2-1.4 2.2-14.3s-.1-13.4-2.2-14.5c-1.9-.9-.6-1.1 6.2-1.1s8.1.2 6.3 1.1m36.5 9.4c2 1.3 2.2 2.4 2.2 9.4 0 6.7.3 7.9 1.8 8.2 1.4.3 1.2.7-1 2.2-2.6 1.7-3 1.7-5.2.2-2.2-1.4-2.7-1.4-5.5 0-4 2-7.1.5-7.1-3.6 0-3.1 2.7-5.8 8-8 3.3-1.4 4.1-4.8 1.5-7-2-1.7-3.6-.3-2.9 2.5.4 1.7 0 2.6-1.4 3.4-2.8 1.5-5.7-.8-4.8-3.7 1.5-4.6 10-6.7 14.4-3.6m22.9.6c2 1.9 2.3 3.1 2.3 9.4 0 4.9.4 7.4 1.3 7.7 1.5.6 0 2.2-2.9 3.1-1.4.4-2.8.1-3.8-.9-1.4-1.4-1.8-1.4-4.6 0-2.2 1.1-3.5 1.3-4.9.6-4.7-2.5-2.7-7.8 4.3-11.6 3.1-1.7 3.6-2.4 3.4-5-.2-2.2-.8-3-2.3-3-1.6 0-1.9.6-1.7 2.9.4 3.4-1.4 4.9-4 3.5-2.3-1.2-2.3-4.1 0-6.1 3.9-3.4 9.6-3.7 12.9-.6m53.2.4c1.7 2.1 2.1 4.1 2.1 9.5 0 4.8.4 6.9 1.3 6.9 1.3.1-3 4-4.3 4-.5 0-1.6-.7-2.4-1.5-1.4-1.4-1.8-1.4-4.6 0-2.9 1.5-3.4 1.5-5.6 0-1.3-.8-2.4-2.4-2.4-3.4 0-2.3 4.1-6.5 8.1-8.1 2.6-1.1 3-1.8 2.7-4.4-.2-2.3-.8-3.1-2.3-3.1-1.6 0-1.9.6-1.7 3.1.3 3.5-2 5.3-4.4 3.3-1.9-1.6-1.7-4.3.4-6.1 4.2-3.7 10.3-3.8 13.1-.2m42.6-.4c4.5 3.9 5 13.3 1 17.8-4 4.4-12.3 3.2-15-2.1-2.9-5.4-1.1-14.3 3.2-16.8 3.1-1.8 8-1.2 10.8 1.1m54.3-.6c2 1.3 2.2 2.4 2.2 9.4 0 6.7.3 7.9 1.8 8.2 1.4.3 1.2.7-1 2.2-2.6 1.7-3 1.7-5.2.2-2.2-1.4-2.7-1.4-5.5 0-5.6 2.8-9.3-2-5.7-7.2.8-1.1 3.3-2.9 5.5-3.9 4.4-1.9 5.5-5.1 2.6-7.5-2-1.7-3.6-.3-2.9 2.5.8 3.2-2.7 5.3-5 2.9-1.9-1.9-2-2.5-.3-4.6 3.1-3.9 9.6-5 13.5-2.2m127.9.6c2 1.9 2.3 3.1 2.3 9.5 0 4.2.4 7.3 1 7.3 1.9 0 1 1.7-1.5 2.8-3.2 1.5-3.1 1.5-4.9-.3-1.4-1.4-1.8-1.4-4.6 0-2.9 1.5-3.4 1.5-5.6 0-1.3-.8-2.4-2.4-2.4-3.4 0-2.1 5.7-7.6 9-8.6 2.9-.9 2.5-7-.5-7-1.6 0-1.9.6-1.7 3.1.3 3.5-2 5.3-4.4 3.3-1.9-1.6-1.7-4.3.4-6.1 3.9-3.4 9.6-3.7 12.9-.6M280 408c1.2 3.3 2.4 6 2.5 6s1.3-2.7 2.5-6l2.2-6h4.6c3.6 0 4.3.3 3.4 1.2-.7.7-1.2 4.3-1.2 9.3s.5 8.6 1.2 9.3c.9.9-.1 1.2-4.7 1.1-3.3 0-5.4-.3-4.7-.6.8-.3 1.2-2.7 1.2-7.1l-.1-6.7-3 7.2c-1.7 4-3.5 7.3-3.9 7.3-.5 0-2.1-3.3-3.7-7.3l-2.8-7.2-.3 6.4c-.2 4.5.1 6.7 1 7.2.8.6-.2.9-2.7.9-3.2-.1-3.6-.3-2.2-1.1s1.7-2.5 1.7-9.4-.3-8.6-1.7-9.4-.6-1 3.3-1.1h5.2zm59.9-2.8c0 3-.1 3.1-.9 1-.6-1.5-1.8-2.2-3.5-2.2-2.5 0-2.5.1-2.5 8.5 0 6.9.3 8.6 1.8 9.4 1.3.8.1 1-4.8 1.1-4.5 0-6-.3-5-1 1.1-.7 1.6-3.3 1.9-9.5l.3-8.5h-2.6c-1.5 0-2.9.7-3.2 1.5-.9 2.4-2.4 1.7-2.4-1V402h21zm41.3-1.5c2.2 1.9 2.3 4.6.4 6.2-1.2 1-1 1.6 1 3.6 2.5 2.5 2.9 4.2 1.6 6.1-1.6 2.4-5.5 3.4-13.4 3.3-4.6 0-7.7-.3-7-.6.8-.3 1.2-3.3 1.2-9.8s-.4-9.5-1.2-9.8c-.7-.3 2.5-.6 7.1-.6 6.5-.1 8.9.3 10.3 1.6m56.7 1.5c0 3.1-.1 3.2-1.1 1-.7-1.3-2-2.2-3.5-2.2-2.2 0-2.3.2-2.3 8.9 0 6.2.4 9.1 1.3 9.4.6.3-1.5.5-4.8.5s-5.4-.2-4.7-.5c.8-.3 1.2-3.2 1.2-9.4 0-8.7-.1-8.9-2.3-8.9-1.5 0-2.8.9-3.5 2.2-1 2.2-1.1 2.1-1.1-1l-.1-3.2h21zm12.4-2.5c-.8.2-1.3 2.2-1.3 4.4 0 3.5.3 3.9 2.4 3.9 3.1 0 7.8 1.8 8.8 3.3 1.5 2.3.8 5.6-1.4 7.1-2.9 2-20 2.4-18 .4 1.7-1.7 1.6-18.5 0-19.1-.7-.3 1.4-.5 4.7-.5s5.4.2 4.8.5m20.9.5c-.7.7-1.2 4.3-1.2 9.3s.5 8.6 1.2 9.3c.9.9-.1 1.2-4.7 1.1-3.3 0-5.4-.3-4.7-.6.8-.3 1.2-3.3 1.2-9.8s-.4-9.5-1.2-9.8c-.7-.3 1.4-.6 4.7-.6 4.6-.1 5.6.2 4.7 1.1m14.1-.5c-.8.2-1.3 2.2-1.3 4.4 0 3.5.3 3.9 2.5 3.9s2.5-.4 2.5-3.9c0-2.2-.5-4.2-1.2-4.4-.7-.3 1.4-.6 4.7-.6 4.6-.1 5.6.2 4.7 1.1-.7.7-1.2 4.3-1.2 9.3s.5 8.6 1.2 9.3c.9.9-.1 1.2-4.7 1.1-3.3 0-5.4-.3-4.7-.6s1.2-2.3 1.2-4.9c0-4-.2-4.4-2.5-4.4s-2.5.4-2.5 4.4c0 2.6.5 4.6 1.3 4.9.6.3-1.5.5-4.8.5s-5.4-.2-4.7-.5c.8-.3 1.2-3.3 1.2-9.8s-.4-9.5-1.2-9.8c-.7-.3 1.4-.5 4.7-.5s5.4.2 4.8.5m35 0c-1.6.6-1.8 19.3-.3 19.3.6 0 1 1.7 1 3.7-.1 3.7-.1 3.8-1.4 1.4-1.7-3.1-3.8-3.9-9.6-4-4.9-.1-9 2-9 4.5 0 .8-.4 1.2-1 .9-1.8-1.1-1.1-5.9.9-7.2 3.5-2.2 5.8-17.4 2.9-18.6-.7-.3 3-.5 8.2-.5s8.9.2 8.3.5m44.7 2.4c0 1.7-.4 2.8-1 2.4-.5-.3-1-1.3-1-2.1 0-1-1.2-1.4-4-1.4h-4v8.5c0 6.9.3 8.6 1.8 9.4 1.3.8.2 1-4.6 1.1-5.8 0-6.2-.1-4.8-1.6 1.2-1.1 1.6-3.5 1.6-8.9s-.4-7.8-1.6-8.9c-1.4-1.5-.7-1.6 8-1.6h9.6zm12.3-2.4c-.7.2-1.3 2.2-1.3 4.3 0 3.6.1 3.8 4.1 4.3 7.2 1 10.5 6.8 5.7 10.1-2.9 2-20 2.4-18 .4.7-.7 1.2-4.3 1.2-9.3s-.5-8.6-1.2-9.3c-.9-.9.1-1.2 4.8-1.1 3.2 0 5.3.3 4.7.6m20.9.5c-.7.7-1.2 4.3-1.2 9.3s.5 8.6 1.2 9.3c.9.9-.1 1.2-4.7 1.1-3.3 0-5.4-.3-4.7-.6.8-.3 1.2-3.3 1.2-9.8s-.4-9.5-1.2-9.8c-.7-.3 1.4-.6 4.7-.6 4.6-.1 5.6.2 4.7 1.1m-413.4 15.9c.4 3.1-2 5.3-4.6 4.4-4.4-1.3-3-7.8 1.6-7.3 2.1.2 2.8.9 3 2.9m101 33.1c-.3.7-1.8 1.4-3.4 1.6-4.7.5-5.4 2.4-5.4 14.9V480h22.2l-.4-11.9c-.1-6.6-.6-12.3-1-12.6-.4-.4-2.2-1-3.9-1.4-1.8-.4-3.4-1.2-3.7-1.9-.3-.9 3.6-1.2 16.3-1.2s16.6.3 16.3 1.2c-.3.7-1.9 1.5-3.7 1.9-1.7.4-3.5 1-3.9 1.4-.4.3-.8 12.4-1 26.7-.3 29.1 0 30.8 5.8 30.8 1.7 0 3 .4 3 1s-6.2 1-16.5 1-16.5-.4-16.5-1 1.3-1 2.9-1c5.1 0 6.1-2.8 6.1-16.2V485h-22v12.2c0 13.5.9 15.8 6.2 15.8 1.5 0 2.8.4 2.8 1s-6.2 1-16.5 1-16.5-.4-16.5-1 1.3-1 2.9-1c5.4 0 5.6-.9 5.6-29.5s-.2-29.5-5.6-29.5c-1.9 0-2.9-.5-2.9-1.5 0-1.3 2.5-1.5 16.6-1.5 12.8 0 16.5.3 16.2 1.2m79.2 18.5c4.6 10.9 8.6 20.2 9 20.6s4.4-8.4 9-19.7l8.4-20.6h12.9c9.8 0 12.8.3 12.5 1.2-.3.7-1.9 1.4-3.7 1.6-2.3.2-3.5 1-4.2 2.8-.5 1.4-.9 13.7-.9 27.2 0 27.5.4 29.2 6.1 29.2 1.6 0 2.9.4 2.9 1s-6.2 1-16.5 1-16.5-.4-16.5-1 1.3-1 3-1c5.7 0 6.1-1.8 5.8-29.3l-.3-24.5-11.5 27.6c-6.3 15.1-11.9 27.7-12.5 27.9-.5.1-5.2-9.7-10.4-22-5.2-12.2-10.5-24.5-11.7-27.2l-2.3-5v24.2c-.1 23 0 24.4 1.9 26.3 1.1 1.1 3.1 2 4.5 2s2.5.4 2.5 1-4.3 1-11 1-11-.4-11-1 .9-1 2-1c1.2 0 3.2-1.1 4.6-2.5l2.5-2.5-.3-25.9c-.2-14.3-.6-26.3-1-26.6-.4-.4-2.2-1-3.9-1.4-1.8-.4-3.4-1.2-3.7-1.9-.3-.9 2.8-1.2 12.6-1.2h12.9zm90.5-18.2c0 .5-1.3 1.1-2.8 1.3-1.6.2-3 .9-3.3 1.7-.3.7 3.2 8.1 7.7 16.5l8.3 15.1 6.9-13.6c8-16 8.3-18.8 2.5-19.3-2.5-.2-3.8-.8-3.8-1.8 0-1.1 2-1.4 10.5-1.4 11.3 0 13.3 1.1 7.3 4-2.7 1.3-5.1 5.3-16.9 28.4-7.5 14.7-14.7 27.9-16 29.2-4.8 5.2-14.1 5.5-17.9.7-4-5.1-1.6-12.3 4-12.3 3.3 0 4.5 1.3 5.7 6 .5 1.9 1.6 3.6 2.5 3.8 1.9.4 5.7-3.4 6.4-6.3.6-2.3-21.2-43.3-25.4-47.8-1.4-1.5-3.6-2.7-4.9-2.7-1.4 0-2.3-.6-2.3-1.5 0-1.3 2.2-1.5 15.8-1.3 9.6.2 15.7.7 15.7 1.3M308.2 585.6c.3 27.9.4 29.6 2.2 31 1.1.8 3 1.4 4.3 1.4s2.3.4 2.3 1-6 1-16 1-16-.4-16-1 1.3-1 2.8-1c1.6 0 3.7-.6 4.8-1.4 1.8-1.3 1.9-3 2.2-22.8.3-25.2 0-26.5-6.6-26-2.3.2-4.2 0-4.2-.5 0-.8 21.4-11.1 23.2-11.2.4-.1.8 13.2 1 29.5m44.6-28c4.7 1.9 8.8 5.8 11.5 10.9 1.8 3.3 2.2 5.7 2.2 14 0 8.9-.3 10.7-2.9 16.2-5.3 11.7-17.3 20.3-30.4 22.1-7.7 1.1-7.6-.1 0-3.2 9.3-3.8 13.7-8.1 16.9-16.7 2-5.2 1.7-5.5-2.7-3.8-6.5 2.4-16-2.5-19-9.8-2.4-5.6-1.8-14.3 1.4-20.4 2.3-4.5 3.7-5.9 8.1-8.2 6.2-3.1 9.6-3.4 14.9-1.1m47.9.9c9 4.5 12.8 12.8 12.1 26.4-.3 6.7-1 9.9-3.2 14.3-5.6 11.9-17.9 20.4-30.9 21.5-7 .6-6.9-.4.5-3.1 7.9-2.9 12.3-6.8 15.9-14.1 1.7-3.6 3-6.7 2.7-7-.2-.3-2 0-3.9.5-13.9 4.1-24.9-11.3-19.4-27.1 1.9-5.4 5.8-9.6 11-12 5.4-2.5 9.2-2.4 15.2.6m59.3-1.6c0 .4-2.6 1.8-5.7 2.9-9.5 3.5-15.6 9.9-18.3 19.3-.8 2.7-.7 2.7 2.2 1.7 4.2-1.5 11.1-.5 14.8 2.2 8.5 6.1 9.5 22.8 1.8 31.6-4.2 4.8-8.3 6.7-14.3 6.7-7.8 0-13.9-4.2-18.1-12.3-2.6-5.2-3.1-18.3-.9-25.1 3.3-10.3 10.3-18.8 19.2-23.3 6.6-3.3 19.3-5.8 19.3-3.7"></path><path d="M391 225.4c-10 3.8-13 5.3-13 6.7 0 2.2 3.3 2 6.9-.5 2-1.4 6.6-4.2 10.2-6.1 7.8-4.2 6.9-4.2-4.1-.1M339.1 224.9c-1 .7-.1 1.5 3.5 3.1 11.9 5.4 17.4 6.4 17.4 3.2 0-2.6-4.7-4.9-12.1-6.1-7.7-1.3-7.1-1.3-8.8-.2M231.4 414.6c-1.2 1.8-1.4 2.8-.6 3.6 1.8 1.8 4.2.1 4.2-3.2 0-3.7-1.4-3.9-3.6-.4M254.7 413.8c-2.3 2.6-2.2 5.2.3 5.2 1.6 0 2-.7 2-3.5 0-4-.1-4.1-2.3-1.7M307.7 413.8c-2.3 2.6-2.2 5.2.3 5.2 1.6 0 2-.7 2-3.5 0-4-.1-4.1-2.3-1.7M349.6 404.5c-.3.9-.6 4.7-.6 8.5 0 4.9.4 7.1 1.5 8 2.7 2.3 3.6-.2 3.3-9.1-.2-6.8-.6-8.4-1.9-8.7-.9-.2-1.9.4-2.3 1.3M404.4 414.6c-1.2 1.8-1.4 2.8-.6 3.6 1.8 1.8 4.2.1 4.2-3.2 0-3.7-1.4-3.9-3.6-.4M532.7 413.8c-2.3 2.6-2.2 5.2.3 5.2 1.6 0 2-.7 2-3.5 0-4-.1-4.1-2.3-1.7M372 407.6c0 2.8.4 3.5 1.6 3.2 4-.8 4.4-6.8.4-6.8-1.6 0-2 .6-2 3.6M372 417c0 3.7.2 4.1 2.1 3.8 3-.4 4.7-3.3 3.3-5.6-.6-.9-2.1-1.8-3.3-2-1.9-.3-2.1.1-2.1 3.8M449 417.1c0 3.6.2 4 2.3 3.7 3.9-.5 3.1-7.8-.9-7.8-1 0-1.4 1.3-1.4 4.1M507 409c0 2.8-.7 6.6-1.4 8.5l-1.5 3.5h7.9v-8.5c0-8.4 0-8.5-2.5-8.5-2.3 0-2.5.3-2.5 5M576 417.1c0 3.6.2 4 2.3 3.7 3.9-.5 3.1-7.8-.9-7.8-1 0-1.4 1.3-1.4 4.1M341.8 562.2c-2.1 3.8-1.6 20.4.7 25.3 2.1 4.2 4 5.1 8.2 4l2.6-.6-.5-10.8c-.7-13.1-3.1-20.1-7.2-20.1-1.6 0-3 .9-3.8 2.2M387.9 562.2c-.7 1.4-1.2 5.9-1.2 11.3.2 14.2 3.5 20.1 10.3 18 2.2-.7 2.2-1.1 1.8-11.9-.5-13.2-2.5-18.9-7-19.4-2-.2-3 .3-3.9 2M436.1 586.1c-2.3.9-2.3 1.1-1.9 11.7.7 15.1 3.6 21.4 8.9 19.7 2.6-.9 3.4-4.5 3.3-14.7-.2-12.9-4-19-10.3-16.7M211.8 91.6c-1.2 1.1 1.5 5.5 3.1 5.2 2.5-.5 2.1-5.2-.4-5.6-1.2-.2-2.4 0-2.7.4M184.5 108.3c-1.3 5.1 1.4 7.4 3.9 3.4.8-1.3.6-2.2-1.1-3.8l-2.2-2.2zM167.1 113.3c-1 1.3-.8 2.3 1.3 6 1.4 2.4 2.6 5.2 2.6 6.1 0 1.6.3 1.5 3-.4 3.4-2.4 3.3-3-2.2-9.4-3-3.4-3.5-3.6-4.7-2.3M137.5 151c-.4.7.2 2.2 1.4 3.4 1.9 1.8 2.3 1.9 3.1.6.6-.8.9-2.2.7-3-.3-1.8-4.2-2.6-5.2-1M116.2 176.2q.3 3.3 2.1 3.6c2.5.5 3.2-2.5 1.2-4.8q-3.9-4.35-3.3 1.2M650.8 193.6c-3.3 1.8-3.4 2.4-.8 5.2 2.3 2.5 4 2.8 5.8 1 2.1-2.1.8-7.9-1.7-7.8-.4.1-1.8.8-3.3 1.6M642.8 198.6c-3.2 1.7-3.5 3-1.2 6.2 3.1 4.5 8.7.9 6.9-4.4-1.2-3.4-2.3-3.7-5.7-1.8M94.6 193.5c-.7 1.9 3.2 4.1 4.6 2.7 1.5-1.5.2-4.2-2.1-4.2-1 0-2.1.7-2.5 1.5M101.5 196.7c-1.6 1.6-1.6 1.7.1 3 2.5 1.8 4.2 1.6 4.9-.7 1.2-3.9-2-5.4-5-2.3M85.6 208.5c-2.2 2.2-1.7 3.5 2.4 6.2 3.8 2.7 7.2 2.9 9 .8 1.5-1.9.8-4-2.2-5.9-3.9-2.5-7.3-2.9-9.2-1.1M671.8 230.7c-3.9 1.6-4.7 3-2.6 5.1 3 3 9-1 7.2-4.7-.8-1.8-1.1-1.8-4.6-.4M77.2 241.2c.2 2.5.8 3.4 2.6 3.6 3.3.5 3.1-4.1-.4-5.6-2.5-1.2-2.5-1.1-2.2 2M62 277.1c0 2.3 2.2 4.9 4 4.9 3 0 2.6-3.8-.6-5s-3.4-1.2-3.4.1M58 294c0 2.5 2.7 5.1 4.6 4.3 2.5-.9 1.2-4.6-1.8-5.4-2.3-.6-2.8-.4-2.8 1.1M684.7 467.6c-1.6 1.6-.5 3.3 3.3 4.8 5.1 2 11 2.1 11 .2 0-2.2-12.7-6.6-14.3-5M51.1 469.7c0 .5.4 1.6.8 2.6.6 1.6.9 1.6 3.1-.8l2.3-2.5h-3.1c-1.8 0-3.2.3-3.1.7M66.2 489.9l-4.3 1.7 1.9 2.4c1.7 2.2 2.3 2.3 4.6 1.2 2-.9 2.6-1.9 2.6-4.2 0-1.6-.1-3-.2-2.9-.2 0-2.2.8-4.6 1.8M680 501.9c0 .4.6 1.6 1.4 2.7 1.1 1.4 1.7 1.6 2.6.7.7-.6 1-1.6.6-2.1-.7-1.2-4.6-2.3-4.6-1.3M656.9 549.2c.9 2.4 4.1 3.8 4.1 1.7 0-1.2-2.8-3.8-4.2-3.9-.4 0-.4 1 .1 2.2M645.5 565.2c1 3.3 2.3 4.4 3.6 3.1s.5-2.9-2.3-4.4c-1.8-1-1.9-.8-1.3 1.3M125.8 594.7c-2.1.5-2.3 2.6-.5 4.2 1.1.8 1.6.5 2.5-1.5 1.8-3.7 1.7-3.7-2-2.7M570 633.3c0 .7.6 2.1 1.3 3.1 1.2 1.6 1.4 1.6 2.6.2 1.1-1.3 1.1-1.9.1-3.1-1.5-1.8-4-2-4-.2M539 664.5c0 1.6.6 2.5 1.5 2.5 1.6 0 1.9-.9.9-3.4-.9-2.5-2.4-1.9-2.4.9M510.5 670c-.4.6.4 3.2 1.7 5.8 3.8 7.7 7.8 5.3 4.1-2.4-1.8-3.9-4.5-5.5-5.8-3.4M495 677.9c0 3.3.6 3.7 3 2.1 1.1-.7 1.2-1.4.4-2.7-1.8-3-3.4-2.7-3.4.6M286.1 687.7c-1.5 5.3-1.4 5.5 1.6 5.1 3.8-.4 5.7-5.3 2.8-7.4-2.8-2.1-3.3-1.8-4.4 2.3M451.7 697.7c-1.3 1.2-.7 4.3.8 4.3.8 0 1.5-.6 1.5-1.3 0-1.8-1.5-3.8-2.3-3"></path></g>',1)])])}const F8={render:L8},U8={data(){return{status:!1}},props:{nav:Array,name:String,img:[String,Object]},methods:{menuOpen(){this.status=!0,document.body.style.overflow="hidden"},closeMenu(){this.status=!1,document.body.style.overflow=""}},watch:{"$route.fullPath":{handler(){this.closeMenu()},immediate:!0,deep:!0}}},$8={class:"flex items-center justify-center gap-1"},B8={class:"heading !text-lg text-[#336799]"},j8={class:"flex flex-col gap-1"};function q8(t,e,n,s,r,i){const o=Ft("router-link");return re(),Te("div",null,[Uu(oe("button",{onClick:e[0]||(e[0]=(...a)=>i.menuOpen&&i.menuOpen(...a)),class:"px-2 text-lg rounded-md font-bold text-[#E6A421] hover:bg-[#E6A421] hover:text-white transition-v"},[...e[4]||(e[4]=[oe("i",{class:"pi pi-bars"},null,-1)])],512),[[Wu,!r.status]]),Uu(oe("div",{class:"fixed inset-0 bg-black bg-opacity-90 z-50 pr-10",onClick:e[3]||(e[3]=(...a)=>i.closeMenu&&i.closeMenu(...a))},[De(Aa,{"enter-active-class":"transition-transform transition-v","enter-from-class":"-translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition-transform duration-300","leave-from-class":"translate-x-0","leave-to-class":"-translate-x-full"},{default:cn(()=>[Uu(oe("div",{class:"w-full bg-white h-full p-5 flex flex-col gap-10 relative",onClick:e[2]||(e[2]=Z0(()=>{},["stop"]))},[oe("button",{class:"absolute right-0 top-0 p-2 rounded hover:border",onClick:e[1]||(e[1]=(...a)=>i.closeMenu&&i.closeMenu(...a))},[...e[5]||(e[5]=[oe("i",{class:"pi pi-times font-bold"},null,-1)])]),oe("div",$8,[(re(),Kt(Vd(n.img),{class:"w-12 h-12"})),oe("h3",B8,ft(n.name),1)]),oe("nav",null,[oe("ul",j8,[(re(!0),Te(nt,null,Fi(n.nav,a=>(re(),Te("li",{key:a.id,class:"border-b border-[#E6A421] rounded"},[De(o,{to:a.rout,class:ls(["appText p-2 font-bold w-full flex items-center hover:text-[#E6A421] transition-v",{"text-[#E6A421]":t.$route.meta.mainRout===a.active}]),onClick:a.method},{default:cn(()=>[Ud(ft(a.name),1)]),_:2},1032,["to","class","onClick"])]))),128))])])],512),[[Wu,r.status]])]),_:1})],512),[[Wu,r.status]])])}const W8=_n(U8,[["render",q8]]),H8={components:{userCard:M8,burgerMenu:W8},data(){const t="Колледж ИЯиПКС",e=Ti(F8),n=[{id:1,rout:"/",name:"Главная",method:async()=>{this.$route.hash?(window.history.replaceState(null,"",window.location.pathname),window.location.reload()):(await this.$router.push("/"),await window.location.reload())},active:""},{id:2,rout:"/cours/all",name:"Курсы",active:"cours"},{id:3,rout:"/#about-app",name:"О сайте",active:"aboutApp"},{id:4,rout:"/auth/sign-in",name:"Войти",active:"auth"}];return{name:t,img:e,nav:n,menu:{nav:n,name:t,img:e}}},computed:{filteredNav(){const t=!!this.appStore.userProfile;return this.nav.filter(e=>!(e.name==="Войти"&&t))}}},z8={class:"w-full flex justify-between items-center h-full"},G8={class:"flex items-center gap-1 heading text-lg text-[#336799] max-lg:text-base max-md:text-sm"},K8={key:0},Q8={key:1},Y8={class:"flex items-center gap-10 max-lg:gap-5 max-md:gap-3 appText font-semibold"},X8={class:"relative"};function J8(t,e,n,s,r,i){const o=Ft("burgerMenu"),a=Ft("router-Link"),c=Ft("userCard");return re(),Te("div",z8,[t.appStore.sizeWindow<501?(re(),Kt(o,{key:0,nav:i.filteredNav,name:r.menu.name,img:r.menu.img},null,8,["nav","name","img"])):Fn("",!0),oe("div",G8,[(re(),Kt(Vd(r.img),{class:"max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10 sm"})),this.appStore.sizeWindow>768?(re(),Te("h3",K8,ft(r.name),1)):Fn("",!0)]),this.appStore.sizeWindow>500?(re(),Te("nav",Q8,[oe("ul",Y8,[(re(!0),Te(nt,null,Fi(i.filteredNav,u=>(re(),Te("li",null,[De(a,{to:u.rout,onClick:u.method,class:ls(["hover:text-[#E6A421] transition-v",{"text-[#E6A421]":t.$route.meta.mainRout===u.active}])},{default:cn(()=>[Ud(ft(u.name),1)]),_:2},1032,["to","onClick","class"])]))),256))])])):Fn("",!0),oe("div",X8,[De(c)])])}const Z8=_n(H8,[["render",J8]]),ek={data(){return{timeoutId:0,ALERT_TIMEOUT:3e3}},methods:{clearAlert(){clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.appStore.alert=[]},this.ALERT_TIMEOUT),this.appStore.alert.length>3&&this.appStore.alert.splice(0,this.appStore.alert.length-3)}},watch:{"appStore.alert":{handler(t){t.length>0&&this.clearAlert()},deep:!0}},mounted(){this.appStore.alert.length>0&&this.clearAlert()},beforeUnmount(){clearTimeout(this.timeoutId)}},tk={key:0,class:"flex fixed z-[9999999] flex-col bottom-3 left-1/2 -translate-x-1/2 gap-3 bg-black-100 w-[400px] max-[438px]:w-72"};function nk(t,e,n,s,r,i){return re(),Kt(Aa,{name:"fade"},{default:cn(()=>[this.appStore.alert.length?(re(),Te("div",tk,[De(B0,{name:"fade"},{default:cn(()=>[(re(!0),Te(nt,null,Fi(this.appStore.alert,(o,a)=>(re(),Te("div",{key:a,class:ls([" p-2 bg-white border-l-8 rounded-xl shadow-lg ",{"border-[#26A243] shadow-[#26a24383] ":o.type==="green","border-red-500 shadow-[#f8030393]":o.type==="red","border-yellow-500 shadow-[#e2df0d71]":o.type==="yellow","border-blue-500 shadow-[#020da569]":o.type==="blue"}])},[oe("p",{class:ls(["appText  font-semibold",{"text-[#26A243]":o.type==="green","text-red-500":o.type==="red","text-yellow-500":o.type==="yellow","text-blue-500":o.type==="blue"}])},ft(o.message),3)],2))),128))]),_:1})])):Fn("",!0)]),_:1})}const sk=_n(ek,[["render",nk],["__scopeId","data-v-fc1263f4"]]),rk={data(){return{status:!0,sidebar:[{id:1,vall:"Все куосы",rout:{to:"/cours/all",name:"recommendation"},icon:'<i class="pi pi-qrcode "/>'},{id:2,vall:"Поиск",rout:{to:"/cours/search",name:"search"},icon:'<i class="pi pi-search "/>'},{id:3,vall:"Курс",rout:{to:"/cours/page/null",name:"cours"},icon:'<i class="pi pi-graduation-cap "/>'},{id:4,vall:"Создать курс",rout:{to:"/cours/create-cours",name:"createCours"},icon:'<i class="pi pi-file-plus "/>'},{id:5,vall:"Подписки",rout:{to:"/cours/my-follow",name:"follow"},icon:' <i class="pi pi-bookmark-fill" />'},{id:6,vall:"Мои курсы",rout:{to:"/cours/my-cours",name:"myCours"},icon:'<i class="pi pi-book "/>'},{id:7,vall:"Мой профиль",rout:{to:"/cours/my-profile",name:"myProfile"},icon:'<i class="pi pi-user "/>'}]}},mounted(){this.status=!(this.appStore.sizeWindow<641)},watch:{"$route.fullPath":{handler(){this.status=!(this.appStore.sizeWindow<641)},immediate:!0}}},ik={key:0,class:"bg-[#fff] border rounded-2xl shadow-md w-72 h-screen flex flex-col gap-3 py-4 overflow-hidden my-3 sticky top-[92px] max-sm:fixed max-sm:top-[-12px] max-sm:w-52 max-sm:z-50 z-40"},ok={class:"px-3 flex items-center justify-end"},ak={class:"w-full h-full px-3 overflow-y-auto flex flex-col gap-1"},lk=["innerHTML"],ck={key:1,class:"p-4 bg-[#fff] border rounded-full shadow-md my-3 fixed top-[92px] z-40 left-1 flex justify-center items-center"};function uk(t,e,n,s,r,i){const o=Ft("router-Link");return re(),Kt(Aa,{"enter-active-class":"transition-all duration-300 ","leave-active-class":"transition-all duration-300 ","enter-from-class":"-translate-x-5 opacity-0","enter-to-class":"translate-x-0 opacity-100","leave-from-class":"translate-x-0 opacity-100","leave-to-class":"-translate-x-5 opacity-0"},{default:cn(()=>[r.status?(re(),Te("aside",ik,[oe("div",ok,[oe("button",{class:"heading text-black text-xl hover:text-[#E6A421] transition-v",onClick:e[0]||(e[0]=a=>r.status=!r.status)},[...e[2]||(e[2]=[oe("i",{class:"pi pi-align-left"},null,-1)])])]),oe("div",ak,[(re(!0),Te(nt,null,Fi(r.sidebar,a=>(re(),Kt(o,{to:a.rout.to,class:ls(["appText w-full flex gap-3 items-center p-3 font-semibold hover:bg-[#E6A421] rounded-md hover:text-black transition-v",{"text-[#E6A421] bg-[#e6a42138]":this.$route.name===a.rout.name}])},{default:cn(()=>[oe("i",{innerHTML:a.icon},null,8,lk),oe("span",null,ft(a.vall),1)]),_:2},1032,["to","class"]))),256))])])):(re(),Te("div",ck,[oe("button",{class:"heading text-black text-xl hover:text-[#E6A421] transition-v",onClick:e[1]||(e[1]=a=>r.status=!r.status)},[...e[3]||(e[3]=[oe("i",{class:"pi pi-align-right"},null,-1)])])]))]),_:1})}const hk=_n(rk,[["render",uk]]),dk={components:{headerV:Z8,footerV:E8,alertMessage:sk,sidebar:hk,workEmail:r8}},fk={key:1,class:"relative w-full"},pk={class:"w-full h-20 bg-[#fff] shadow-md border-b sticky top-0 z-50"},mk={class:"container mx-auto px-4 h-full"},gk={class:"flex gap-1 min-h-screen"},_k={class:"container mx-auto px-4"},yk={class:"w-full bg-[#E6A421] shadow-top"},vk={class:"container mx-auto px-4"};function Ek(t,e,n,s,r,i){const o=Ft("workEmail"),a=Ft("alertMessage"),c=Ft("router-view"),u=Ft("headerV"),h=Ft("sidebar"),d=Ft("footerV");return re(),Te(nt,null,[De(o),De(a),this.$route.name==="codeEditor"?(re(),Kt(c,{key:0})):Fn("",!0),this.$route.name!=="codeEditor"?(re(),Te("div",fk,[oe("header",pk,[oe("div",mk,[De(u)])]),oe("div",gk,[De(Aa,{"enter-active-class":"transition-all duration-300 ","leave-active-class":"transition-all duration-300","enter-from-class":"-translate-x-5 opacity-0","enter-to-class":"translate-x-0 opacity-100","leave-from-class":"translate-x-0 opacity-100","leave-to-class":"-translate-x-5 opacity-0"},{default:cn(()=>[this.$route.name!=="main"&&this.$route.name!=="auth"?(re(),Kt(h,{key:0})):Fn("",!0)]),_:1}),oe("main",_k,[De(c)])]),oe("footer",yk,[oe("div",vk,[De(d)])])])):Fn("",!0)],64)}const wk=_n(dk,[["render",Ek]]),Tk={components:{layout:wk},mounted(){this.appStore.resizeWindow(),this.appStore.initAuthListener(),this.appStore.fetchCourses(),window.addEventListener("offline",()=>{this.appStore.message("Интернет соединение потеряно","red")}),window.addEventListener("online",()=>{this.appStore.message("Интернет соединение восстановлено","green")})}};function Ik(t,e,n,s,r,i){const o=Ft("layout");return this.appStore.sizeWindow>300?(re(),Kt(o,{key:0})):Fn("",!0)}const bk=_n(Tk,[["render",Ik]]),Ck={},Sk={class:"outline-none max-sm:py-1 max-sm:px-1 max-sm:text-base max-md:py-2 max-md:px-3 max-md:text-lg max-lg:text-xl max-lg:px-5 max-lg:py-3 heading px-8 z-30 py-4 bg-[#E6A421] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#336799] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"};function Ak(t,e){return re(),Te("button",Sk,[E2(t.$slots,"default")])}const Rk=_n(Ck,[["render",Ak]]),Pk={props:{title:String}},kk={class:"flex flex-col gap-14"},Nk={class:"heading max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-4xl"};function xk(t,e,n,s,r,i){return re(),Te("div",kk,[oe("div",null,[oe("h2",Nk,ft(n.title),1)]),E2(t.$slots,"default")])}const Ok=_n(Pk,[["render",xk]]);function Dk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kl={exports:{}},Mk=kl.exports,b_;function Vk(){return b_||(b_=1,(function(t,e){(function(n,s){t.exports=s()})(Mk,function(){return(function(n){function s(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}var r={};return s.m=n,s.c=r,s.p="dist/",s(0)})([function(n,s,r){function i(Y){return Y&&Y.__esModule?Y:{default:Y}}var o=Object.assign||function(Y){for(var Ee=1;Ee<arguments.length;Ee++){var ve=arguments[Ee];for(var le in ve)Object.prototype.hasOwnProperty.call(ve,le)&&(Y[le]=ve[le])}return Y},a=r(1),c=(i(a),r(6)),u=i(c),h=r(7),d=i(h),p=r(8),g=i(p),S=r(9),P=i(S),N=r(10),L=i(N),U=r(11),B=i(U),G=r(14),te=i(G),ne=[],A=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},y=function(){var Y=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(Y&&(A=!0),A)return ne=(0,B.default)(ne,v),(0,L.default)(ne,v.once),ne},C=function(){ne=(0,te.default)(),y()},T=function(){ne.forEach(function(Y,Ee){Y.node.removeAttribute("data-aos"),Y.node.removeAttribute("data-aos-easing"),Y.node.removeAttribute("data-aos-duration"),Y.node.removeAttribute("data-aos-delay")})},E=function(Y){return Y===!0||Y==="mobile"&&P.default.mobile()||Y==="phone"&&P.default.phone()||Y==="tablet"&&P.default.tablet()||typeof Y=="function"&&Y()===!0},w=function(Y){v=o(v,Y),ne=(0,te.default)();var Ee=document.all&&!window.atob;return E(v.disable)||Ee?T():(v.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?y(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){y(!0)}):document.addEventListener(v.startEvent,function(){y(!0)}),window.addEventListener("resize",(0,d.default)(y,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(y,v.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,L.default)(ne,v.once)},v.throttleDelay)),v.disableMutationObserver||g.default.ready("[data-aos]",C),ne)};n.exports={init:w,refresh:y,refreshHard:C}},function(n,s){},,,,,function(n,s){(function(r){function i(E,w,Y){function Ee(R){var D=Ye,V=ht;return Ye=ht=void 0,Z=R,O=E.apply(V,D)}function ve(R){return Z=R,H=setTimeout(et,w),Ie?Ee(R):O}function le(R){var D=R-z,V=R-Z,M=w-D;return I?C(M,Be-V):M}function ye(R){var D=R-z,V=R-Z;return z===void 0||D>=w||D<0||I&&V>=Be}function et(){var R=T();return ye(R)?Wt(R):void(H=setTimeout(et,le(R)))}function Wt(R){return H=void 0,b&&Ye?Ee(R):(Ye=ht=void 0,O)}function Ct(){H!==void 0&&clearTimeout(H),Z=0,Ye=z=ht=H=void 0}function Je(){return H===void 0?O:Wt(T())}function at(){var R=T(),D=ye(R);if(Ye=arguments,ht=this,z=R,D){if(H===void 0)return ve(z);if(I)return H=setTimeout(et,w),Ee(z)}return H===void 0&&(H=setTimeout(et,w)),O}var Ye,ht,Be,O,H,z,Z=0,Ie=!1,I=!1,b=!0;if(typeof E!="function")throw new TypeError(p);return w=h(w)||0,a(Y)&&(Ie=!!Y.leading,I="maxWait"in Y,Be=I?y(h(Y.maxWait)||0,w):Be,b="trailing"in Y?!!Y.trailing:b),at.cancel=Ct,at.flush=Je,at}function o(E,w,Y){var Ee=!0,ve=!0;if(typeof E!="function")throw new TypeError(p);return a(Y)&&(Ee="leading"in Y?!!Y.leading:Ee,ve="trailing"in Y?!!Y.trailing:ve),i(E,w,{leading:Ee,maxWait:w,trailing:ve})}function a(E){var w=typeof E>"u"?"undefined":d(E);return!!E&&(w=="object"||w=="function")}function c(E){return!!E&&(typeof E>"u"?"undefined":d(E))=="object"}function u(E){return(typeof E>"u"?"undefined":d(E))=="symbol"||c(E)&&v.call(E)==S}function h(E){if(typeof E=="number")return E;if(u(E))return g;if(a(E)){var w=typeof E.valueOf=="function"?E.valueOf():E;E=a(w)?w+"":w}if(typeof E!="string")return E===0?E:+E;E=E.replace(P,"");var Y=L.test(E);return Y||U.test(E)?B(E.slice(2),Y?2:8):N.test(E)?g:+E}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},p="Expected a function",g=NaN,S="[object Symbol]",P=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,U=/^0o[0-7]+$/i,B=parseInt,G=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,te=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,ne=G||te||Function("return this")(),A=Object.prototype,v=A.toString,y=Math.max,C=Math.min,T=function(){return ne.Date.now()};n.exports=o}).call(s,(function(){return this})())},function(n,s){(function(r){function i(T,E,w){function Y(b){var R=at,D=Ye;return at=Ye=void 0,z=b,Be=T.apply(D,R)}function Ee(b){return z=b,O=setTimeout(ye,E),Z?Y(b):Be}function ve(b){var R=b-H,D=b-z,V=E-R;return Ie?y(V,ht-D):V}function le(b){var R=b-H,D=b-z;return H===void 0||R>=E||R<0||Ie&&D>=ht}function ye(){var b=C();return le(b)?et(b):void(O=setTimeout(ye,ve(b)))}function et(b){return O=void 0,I&&at?Y(b):(at=Ye=void 0,Be)}function Wt(){O!==void 0&&clearTimeout(O),z=0,at=H=Ye=O=void 0}function Ct(){return O===void 0?Be:et(C())}function Je(){var b=C(),R=le(b);if(at=arguments,Ye=this,H=b,R){if(O===void 0)return Ee(H);if(Ie)return O=setTimeout(ye,E),Y(H)}return O===void 0&&(O=setTimeout(ye,E)),Be}var at,Ye,ht,Be,O,H,z=0,Z=!1,Ie=!1,I=!0;if(typeof T!="function")throw new TypeError(d);return E=u(E)||0,o(w)&&(Z=!!w.leading,Ie="maxWait"in w,ht=Ie?v(u(w.maxWait)||0,E):ht,I="trailing"in w?!!w.trailing:I),Je.cancel=Wt,Je.flush=Ct,Je}function o(T){var E=typeof T>"u"?"undefined":h(T);return!!T&&(E=="object"||E=="function")}function a(T){return!!T&&(typeof T>"u"?"undefined":h(T))=="object"}function c(T){return(typeof T>"u"?"undefined":h(T))=="symbol"||a(T)&&A.call(T)==g}function u(T){if(typeof T=="number")return T;if(c(T))return p;if(o(T)){var E=typeof T.valueOf=="function"?T.valueOf():T;T=o(E)?E+"":E}if(typeof T!="string")return T===0?T:+T;T=T.replace(S,"");var w=N.test(T);return w||L.test(T)?U(T.slice(2),w?2:8):P.test(T)?p:+T}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},d="Expected a function",p=NaN,g="[object Symbol]",S=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,L=/^0o[0-7]+$/i,U=parseInt,B=(typeof r>"u"?"undefined":h(r))=="object"&&r&&r.Object===Object&&r,G=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,te=B||G||Function("return this")(),ne=Object.prototype,A=ne.toString,v=Math.max,y=Math.min,C=function(){return te.Date.now()};n.exports=i}).call(s,(function(){return this})())},function(n,s){function r(h){var d=void 0,p=void 0;for(d=0;d<h.length;d+=1)if(p=h[d],p.dataset&&p.dataset.aos||p.children&&r(p.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function a(h,d){var p=window.document,g=i(),S=new g(c);u=d,S.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(h){h&&h.forEach(function(d){var p=Array.prototype.slice.call(d.addedNodes),g=Array.prototype.slice.call(d.removedNodes),S=p.concat(g);if(r(S))return u()})}Object.defineProperty(s,"__esModule",{value:!0});var u=function(){};s.default={isSupported:o,ready:a}},function(n,s){function r(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var o=(function(){function p(g,S){for(var P=0;P<S.length;P++){var N=S[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(g,N.key,N)}}return function(g,S,P){return S&&p(g.prototype,S),P&&p(g,P),g}})(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=(function(){function p(){r(this,p)}return o(p,[{key:"phone",value:function(){var g=i();return!(!a.test(g)&&!c.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=i();return!(!u.test(g)&&!h.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p})();s.default=new d},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(o,a,c){var u=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!c&&u!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,a){var c=window.pageYOffset,u=window.innerHeight;o.forEach(function(h,d){r(h,u+c,a)})};s.default=i},function(n,s,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(s,"__esModule",{value:!0});var o=r(12),a=i(o),c=function(u,h){return u.forEach(function(d,p){d.node.classList.add("aos-init"),d.position=(0,a.default)(d.node,h.offset)}),u};s.default=c},function(n,s,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(s,"__esModule",{value:!0});var o=r(13),a=i(o),c=function(u,h){var d=0,p=0,g=window.innerHeight,S={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(S.offset&&!isNaN(S.offset)&&(p=parseInt(S.offset)),S.anchor&&document.querySelectorAll(S.anchor)&&(u=document.querySelectorAll(S.anchor)[0]),d=(0,a.default)(u).top,S.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=g/2;break;case"bottom-center":d+=g/2+u.offsetHeight;break;case"center-center":d+=g/2+u.offsetHeight/2;break;case"top-top":d+=g;break;case"bottom-top":d+=u.offsetHeight+g;break;case"center-top":d+=u.offsetHeight/2+g}return S.anchorPlacement||S.offset||isNaN(h)||(p=h),d+p};s.default=c},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(i){for(var o=0,a=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),a+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:a,left:o}};s.default=r},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};s.default=r}])})})(kl)),kl.exports}var Lk=Vk();const Fk=Dk(Lk),Qi=sT(bk);Qi.use(oT());Qi.use(vu);Qi.component("buttonV",Rk);Qi.component("section-layout",Ok);Qi.config.globalProperties.appStore=t4();Fk.init({duration:1e3,easing:"ease-in-out",once:!1});Qi.mount("#app");export{bd as A,n4 as B,$k as C,Z0 as D,ls as E,nt as F,Uk as G,jm as H,u2 as I,sw as J,y0 as K,g2 as L,xe as M,xd as N,B0 as O,Q0 as P,Aa as T,_n as _,oe as a,a0 as b,Te as c,Kt as d,Fi as e,Fn as f,Vd as g,Ud as h,De as i,Uu as j,Od as k,f2 as l,Ti as m,Iw as n,re as o,p2 as p,m2 as q,Ft as r,dn as s,ft as t,Bd as u,Wu as v,cn as w,Oo as x,Nc as y,ml as z};
