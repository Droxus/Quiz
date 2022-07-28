const Uh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Uh();function oo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=oo(Hh);function tc(t){return!!t||t===""}function lo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ee(s)?zh(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ee(t))return t;if(ye(t))return t}}const Vh=/;(?![^(]*\))/g,Gh=/:(.+)/;function zh(t){const e={};return t.split(Vh).forEach(n=>{if(n){const s=n.split(Gh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ao(t){let e="";if(Ee(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ao(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kh=t=>Ee(t)?t:t==null?"":W(t)||ye(t)&&(t.toString===rc||!H(t.toString))?JSON.stringify(t,nc,2):String(t),nc=(t,e)=>e&&e.__v_isRef?nc(t,e.value):In(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:sc(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!W(e)&&!oc(e)?String(e):e,ce={},wn=[],Je=()=>{},qh=()=>!1,Yh=/^on[^a-z]/,ki=t=>Yh.test(t),co=t=>t.startsWith("onUpdate:"),Pe=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qh=Object.prototype.hasOwnProperty,q=(t,e)=>Qh.call(t,e),W=Array.isArray,In=t=>Oi(t)==="[object Map]",sc=t=>Oi(t)==="[object Set]",H=t=>typeof t=="function",Ee=t=>typeof t=="string",ho=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",ic=t=>ye(t)&&H(t.then)&&H(t.catch),rc=Object.prototype.toString,Oi=t=>rc.call(t),Xh=t=>Oi(t).slice(8,-1),oc=t=>Oi(t)==="[object Object]",fo=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jh=/-(\w)/g,ut=Di(t=>t.replace(Jh,(e,n)=>n?n.toUpperCase():"")),Zh=/\B([A-Z])/g,Un=Di(t=>t.replace(Zh,"-$1").toLowerCase()),Mi=Di(t=>t.charAt(0).toUpperCase()+t.slice(1)),tr=Di(t=>t?`on${Mi(t)}`:""),Es=(t,e)=>!Object.is(t,e),nr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ui=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ef=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yl;const tf=()=>yl||(yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ot;class nf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ot&&(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function sf(t,e=ot){e&&e.active&&e.effects.push(t)}const po=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lc=t=>(t.w&Bt)>0,ac=t=>(t.n&Bt)>0,rf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},of=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];lc(i)&&!ac(i)?i.delete(t):e[n++]=i,i.w&=~Bt,i.n&=~Bt}e.length=n}},Er=new WeakMap;let ls=0,Bt=1;const br=30;let qe;const Qt=Symbol(""),wr=Symbol("");class _o{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sf(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,kt=!0,Bt=1<<++ls,ls<=br?rf(this):vl(this),this.fn()}finally{ls<=br&&of(this),Bt=1<<--ls,qe=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(vl(this),this.onStop&&this.onStop(),this.active=!1)}}function vl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const cc=[];function Hn(){cc.push(kt),kt=!1}function jn(){const t=cc.pop();kt=t===void 0?!0:t}function Be(t,e,n){if(kt&&qe){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=po()),uc(i)}}function uc(t,e){let n=!1;ls<=br?ac(t)||(t.n|=Bt,n=!lc(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function bt(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?fo(n)&&l.push(o.get("length")):(l.push(o.get(Qt)),In(t)&&l.push(o.get(wr)));break;case"delete":W(t)||(l.push(o.get(Qt)),In(t)&&l.push(o.get(wr)));break;case"set":In(t)&&l.push(o.get(Qt));break}if(l.length===1)l[0]&&Ir(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ir(po(a))}}function Ir(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Cl(s);for(const s of n)s.computed||Cl(s)}function Cl(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const lf=oo("__proto__,__v_isRef,__isVue"),hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ho)),af=go(),cf=go(!1,!0),uf=go(!0),El=hf();function hf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hn();const s=X(this)[e].apply(this,n);return jn(),s}}),t}function go(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Rf:gc:e?_c:pc).get(s))return s;const o=W(s);if(!t&&o&&q(El,i))return Reflect.get(El,i,r);const l=Reflect.get(s,i,r);return(ho(i)?hc.has(i):lf(i))||(t||Be(s,"get",i),e)?l:Ie(l)?o&&fo(i)?l:l.value:ye(l)?t?mc(l):Us(l):l}}const ff=fc(),df=fc(!0);function fc(t=!1){return function(n,s,i,r){let o=n[s];if(bs(o)&&Ie(o)&&!Ie(i))return!1;if(!t&&!bs(i)&&(Tr(i)||(i=X(i),o=X(o)),!W(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const l=W(n)&&fo(s)?Number(s)<n.length:q(n,s),a=Reflect.set(n,s,i,r);return n===X(r)&&(l?Es(i,o)&&bt(n,"set",s,i):bt(n,"add",s,i)),a}}function pf(t,e){const n=q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&bt(t,"delete",e,void 0),s}function _f(t,e){const n=Reflect.has(t,e);return(!ho(e)||!hc.has(e))&&Be(t,"has",e),n}function gf(t){return Be(t,"iterate",W(t)?"length":Qt),Reflect.ownKeys(t)}const dc={get:af,set:ff,deleteProperty:pf,has:_f,ownKeys:gf},mf={get:uf,set(t,e){return!0},deleteProperty(t,e){return!0}},yf=Pe({},dc,{get:cf,set:df}),mo=t=>t,Li=t=>Reflect.getPrototypeOf(t);function Ys(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);n||(e!==r&&Be(i,"get",e),Be(i,"get",r));const{has:o}=Li(i),l=s?mo:n?Co:ws;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Qs(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return e||(t!==i&&Be(s,"has",t),Be(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xs(t,e=!1){return t=t.__v_raw,!e&&Be(X(t),"iterate",Qt),Reflect.get(t,"size",t)}function bl(t){t=X(t);const e=X(this);return Li(e).has.call(e,t)||(e.add(t),bt(e,"add",t,t)),this}function wl(t,e){e=X(e);const n=X(this),{has:s,get:i}=Li(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Es(e,o)&&bt(n,"set",t,e):bt(n,"add",t,e),this}function Il(t){const e=X(this),{has:n,get:s}=Li(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&bt(e,"delete",t,void 0),r}function Tl(){const t=X(this),e=t.size!==0,n=t.clear();return e&&bt(t,"clear",void 0,void 0),n}function Js(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),a=e?mo:t?Co:ws;return!t&&Be(l,"iterate",Qt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Zs(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=In(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?mo:e?Co:ws;return!e&&Be(r,"iterate",a?wr:Qt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:this}}function vf(){const t={get(r){return Ys(this,r)},get size(){return Xs(this)},has:Qs,add:bl,set:wl,delete:Il,clear:Tl,forEach:Js(!1,!1)},e={get(r){return Ys(this,r,!1,!0)},get size(){return Xs(this)},has:Qs,add:bl,set:wl,delete:Il,clear:Tl,forEach:Js(!1,!0)},n={get(r){return Ys(this,r,!0)},get size(){return Xs(this,!0)},has(r){return Qs.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Js(!0,!1)},s={get(r){return Ys(this,r,!0,!0)},get size(){return Xs(this,!0)},has(r){return Qs.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zs(r,!1,!1),n[r]=Zs(r,!0,!1),e[r]=Zs(r,!1,!0),s[r]=Zs(r,!0,!0)}),[t,n,e,s]}const[Cf,Ef,bf,wf]=vf();function yo(t,e){const n=e?t?wf:bf:t?Ef:Cf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const If={get:yo(!1,!1)},Tf={get:yo(!1,!0)},Sf={get:yo(!0,!1)},pc=new WeakMap,_c=new WeakMap,gc=new WeakMap,Rf=new WeakMap;function Nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(t){return t.__v_skip||!Object.isExtensible(t)?0:Nf(Xh(t))}function Us(t){return bs(t)?t:vo(t,!1,dc,If,pc)}function xf(t){return vo(t,!1,yf,Tf,_c)}function mc(t){return vo(t,!0,mf,Sf,gc)}function vo(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Pf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Tn(t){return bs(t)?Tn(t.__v_raw):!!(t&&t.__v_isReactive)}function bs(t){return!!(t&&t.__v_isReadonly)}function Tr(t){return!!(t&&t.__v_isShallow)}function yc(t){return Tn(t)||bs(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function vc(t){return ui(t,"__v_skip",!0),t}const ws=t=>ye(t)?Us(t):t,Co=t=>ye(t)?mc(t):t;function Cc(t){kt&&qe&&(t=X(t),uc(t.dep||(t.dep=po())))}function Ec(t,e){t=X(t),t.dep&&Ir(t.dep)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function Af(t){return bc(t,!1)}function kf(t){return bc(t,!0)}function bc(t,e){return Ie(t)?t:new Of(t,e)}class Of{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:ws(e)}get value(){return Cc(this),this._value}set value(e){e=this.__v_isShallow?e:X(e),Es(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ws(e),Ec(this))}}function Sn(t){return Ie(t)?t.value:t}const Df={get:(t,e,n)=>Sn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wc(t){return Tn(t)?t:new Proxy(t,Df)}class Mf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _o(e,()=>{this._dirty||(this._dirty=!0,Ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=X(this);return Cc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lf(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=Je):(s=t.get,i=t.set),new Mf(s,i,r||!i,n)}function Ot(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Fi(r,e,n)}return i}function Ze(t,e,n,s){if(H(t)){const r=Ot(t,e,n,s);return r&&ic(r)&&r.catch(o=>{Fi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function Fi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Ot(a,null,10,[t,o,l]);return}}Ff(t,n,i,s)}function Ff(t,e,n,s=!0){console.error(t)}let hi=!1,Sr=!1;const Fe=[];let gt=0;const fs=[];let as=null,yn=0;const ds=[];let Pt=null,vn=0;const Ic=Promise.resolve();let Eo=null,Rr=null;function Tc(t){const e=Eo||Ic;return t?e.then(this?t.bind(this):t):e}function Bf(t){let e=gt+1,n=Fe.length;for(;e<n;){const s=e+n>>>1;Is(Fe[s])<t?e=s+1:n=s}return e}function Sc(t){(!Fe.length||!Fe.includes(t,hi&&t.allowRecurse?gt+1:gt))&&t!==Rr&&(t.id==null?Fe.push(t):Fe.splice(Bf(t.id),0,t),Rc())}function Rc(){!hi&&!Sr&&(Sr=!0,Eo=Ic.then(xc))}function $f(t){const e=Fe.indexOf(t);e>gt&&Fe.splice(e,1)}function Nc(t,e,n,s){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Rc()}function Wf(t){Nc(t,as,fs,yn)}function Uf(t){Nc(t,Pt,ds,vn)}function Bi(t,e=null){if(fs.length){for(Rr=e,as=[...new Set(fs)],fs.length=0,yn=0;yn<as.length;yn++)as[yn]();as=null,yn=0,Rr=null,Bi(t,e)}}function Pc(t){if(Bi(),ds.length){const e=[...new Set(ds)];if(ds.length=0,Pt){Pt.push(...e);return}for(Pt=e,Pt.sort((n,s)=>Is(n)-Is(s)),vn=0;vn<Pt.length;vn++)Pt[vn]();Pt=null,vn=0}}const Is=t=>t.id==null?1/0:t.id;function xc(t){Sr=!1,hi=!0,Bi(t),Fe.sort((n,s)=>Is(n)-Is(s));const e=Je;try{for(gt=0;gt<Fe.length;gt++){const n=Fe[gt];n&&n.active!==!1&&Ot(n,null,14)}}finally{gt=0,Fe.length=0,Pc(),hi=!1,Eo=null,(Fe.length||fs.length||ds.length)&&xc(t)}}function Hf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ce;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(ef))}let l,a=s[l=tr(e)]||s[l=tr(ut(e))];!a&&r&&(a=s[l=tr(Un(e))]),a&&Ze(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(c,t,6,i)}}function Ac(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const a=c=>{const u=Ac(c,e,!0);u&&(l=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):Pe(o,r),s.set(t,o),o)}function $i(t,e){return!t||!ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Un(e))||q(t,e))}let ct=null,kc=null;function fi(t){const e=ct;return ct=t,kc=t&&t.type.__scopeId||null,e}function cs(t,e=ct,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ml(-1);const r=fi(e),o=t(...i);return fi(r),s._d&&Ml(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function sr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:P}=t;let R,x;const B=fi(t);try{if(n.shapeFlag&4){const J=i||s;R=at(u.call(J,J,h,r,_,f,m)),x=a}else{const J=e;R=at(J.length>1?J(r,{attrs:a,slots:l,emit:c}):J(r,null)),x=e.props?a:jf(a)}}catch(J){ps.length=0,Fi(J,t,1),R=me(Ts)}let K=R;if(x&&P!==!1){const J=Object.keys(x),{shapeFlag:xe}=K;J.length&&xe&7&&(o&&J.some(co)&&(x=Vf(x,o)),K=xn(K,x))}return n.dirs&&(K=xn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),R=K,fi(B),R}const jf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ki(n))&&((e||(e={}))[n]=t[n]);return e},Vf=(t,e)=>{const n={};for(const s in t)(!co(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Sl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!$i(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Sl(s,o,c):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!$i(n,r))return!0}return!1}function zf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kf=t=>t.__isSuspense;function qf(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Uf(t)}function ii(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=we||ct;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const Rl={};function ri(t,e,n){return Oc(t,e,n)}function Oc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=we;let a,c=!1,u=!1;if(Ie(t)?(a=()=>t.value,c=Tr(t)):Tn(t)?(a=()=>t,s=!0):W(t)?(u=!0,c=t.some(x=>Tn(x)||Tr(x)),a=()=>t.map(x=>{if(Ie(x))return x.value;if(Tn(x))return En(x);if(H(x))return Ot(x,l,2)})):H(t)?e?a=()=>Ot(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ze(t,l,3,[f])}:a=Je,e&&s){const x=a;a=()=>En(x())}let h,f=x=>{h=R.onStop=()=>{Ot(x,l,4)}};if(Rs)return f=Je,e?n&&Ze(e,l,3,[a(),u?[]:void 0,f]):a(),Je;let _=u?[]:Rl;const m=()=>{if(!!R.active)if(e){const x=R.run();(s||c||(u?x.some((B,K)=>Es(B,_[K])):Es(x,_)))&&(h&&h(),Ze(e,l,3,[x,_===Rl?void 0:_,f]),_=x)}else R.run()};m.allowRecurse=!!e;let P;i==="sync"?P=m:i==="post"?P=()=>Ae(m,l&&l.suspense):P=()=>Wf(m);const R=new _o(a,P);return e?n?m():_=R.run():i==="post"?Ae(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&uo(l.scope.effects,R)}}function Yf(t,e,n){const s=this.proxy,i=Ee(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=we;An(this);const l=Oc(i,r.bind(s),n);return o?An(o):Xt(),l}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function En(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))En(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)En(t[n],e);else if(sc(t)||In(t))t.forEach(n=>{En(n,e)});else if(oc(t))for(const n in t)En(t[n],e);return t}function Mc(t){return H(t)?{setup:t,name:t.name}:t}const oi=t=>!!t.type.__asyncLoader,Lc=t=>t.type.__isKeepAlive;function Qf(t,e){Fc(t,"a",e)}function Xf(t,e){Fc(t,"da",e)}function Fc(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Lc(i.parent.vnode)&&Jf(s,e,n,i),i=i.parent}}function Jf(t,e,n,s){const i=Wi(e,t,s,!0);Bc(()=>{uo(s[e],i)},n)}function Wi(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hn(),An(n);const l=Ze(e,n,t,o);return Xt(),jn(),l});return s?i.unshift(r):i.push(r),r}}const It=t=>(e,n=we)=>(!Rs||t==="sp")&&Wi(t,e,n),Zf=It("bm"),ed=It("m"),td=It("bu"),nd=It("u"),sd=It("bum"),Bc=It("um"),id=It("sp"),rd=It("rtg"),od=It("rtc");function ld(t,e=we){Wi("ec",t,e)}function Ht(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Hn(),Ze(a,n,8,[t.el,l,t,e]),jn())}}const $c="components";function Nr(t,e){return cd($c,t,!0,e)||t}const ad=Symbol();function cd(t,e,n=!0,s=!1){const i=ct||we;if(i){const r=i.type;if(t===$c){const l=$d(r,!1);if(l&&(l===e||l===ut(e)||l===Mi(ut(e))))return r}const o=Nl(i[t]||r[t],e)||Nl(i.appContext[t],e);return!o&&s?r:o}}function Nl(t,e){return t&&(t[e]||t[ut(e)]||t[Mi(ut(e))])}function MC(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Ee(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Pr=t=>t?Xc(t)?Ro(t)||t.proxy:Pr(t.parent):null,di=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$emit:t=>t.emit,$options:t=>Uc(t),$forceUpdate:t=>t.f||(t.f=()=>Sc(t.update)),$nextTick:t=>t.n||(t.n=Tc.bind(t.proxy)),$watch:t=>Yf.bind(t)}),ud={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ce&&q(s,e))return o[e]=1,s[e];if(i!==ce&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==ce&&q(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const u=di[e];let h,f;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ce&&q(i,e)?(i[e]=n,!0):s!==ce&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&q(t,o)||e!==ce&&q(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(di,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let xr=!0;function hd(t){const e=Uc(t),n=t.proxy,s=t.ctx;xr=!1,e.beforeCreate&&Pl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:P,deactivated:R,beforeDestroy:x,beforeUnmount:B,destroyed:K,unmounted:J,render:xe,renderTracked:De,renderTriggered:dt,errorCaptured:ln,serverPrefetch:nt,expose:Tt,inheritAttrs:pt,components:Ve,directives:an,filters:cn}=e;if(c&&fd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const ee=o[oe];H(ee)&&(s[oe]=ee.bind(n))}if(i){const oe=i.call(n,n);ye(oe)&&(t.data=Us(oe))}if(xr=!0,r)for(const oe in r){const ee=r[oe],Me=H(ee)?ee.bind(n,n):H(ee.get)?ee.get.bind(n,n):Je,hn=!H(ee)&&H(ee.set)?ee.set.bind(n):Je,_t=He({get:Me,set:hn});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>_t.value,set:st=>_t.value=st})}if(l)for(const oe in l)Wc(l[oe],s,n,oe);if(a){const oe=H(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ee=>{ii(ee,oe[ee])})}u&&Pl(u,t,"c");function _e(oe,ee){W(ee)?ee.forEach(Me=>oe(Me.bind(n))):ee&&oe(ee.bind(n))}if(_e(Zf,h),_e(ed,f),_e(td,_),_e(nd,m),_e(Qf,P),_e(Xf,R),_e(ld,ln),_e(od,De),_e(rd,dt),_e(sd,B),_e(Bc,J),_e(id,nt),W(Tt))if(Tt.length){const oe=t.exposed||(t.exposed={});Tt.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:Me=>n[ee]=Me})})}else t.exposed||(t.exposed={});xe&&t.render===Je&&(t.render=xe),pt!=null&&(t.inheritAttrs=pt),Ve&&(t.components=Ve),an&&(t.directives=an)}function fd(t,e,n=Je,s=!1){W(t)&&(t=Ar(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Dt(r.from||i,r.default,!0):o=Dt(r.from||i):o=Dt(r),Ie(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Pl(t,e,n){Ze(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wc(t,e,n,s){const i=s.includes(".")?Dc(n,s):()=>n[s];if(Ee(t)){const r=e[t];H(r)&&ri(i,r)}else if(H(t))ri(i,t.bind(n));else if(ye(t))if(W(t))t.forEach(r=>Wc(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&ri(i,r,t)}}function Uc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>pi(a,c,o,!0)),pi(a,e,o)),r.set(e,a),a}function pi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&pi(t,r,n,!0),i&&i.forEach(o=>pi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=dd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const dd={data:xl,props:Vt,emits:Vt,methods:Vt,computed:Vt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Vt,directives:Vt,watch:_d,provide:xl,inject:pd};function xl(t,e){return e?t?function(){return Pe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function pd(t,e){return Vt(Ar(t),Ar(e))}function Ar(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Vt(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function _d(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function gd(t,e,n,s=!1){const i={},r={};ui(r,Ui,1),t.propsDefaults=Object.create(null),Hc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function md(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if($i(t.emitsOptions,f))continue;const _=e[f];if(a)if(q(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=ut(f);i[m]=kr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Hc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=Un(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h)&&!0)&&(delete r[h],c=!0)}c&&bt(t,"set","$attrs")}function Hc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(si(a))continue;const c=e[a];let u;i&&q(i,u=ut(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:$i(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=X(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=kr(i,a,h,c[h],t,!q(c,h))}}return o}function kr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&H(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(An(i),s=c[n]=a.call(null,e),Xt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Un(n))&&(s=!0))}return s}function jc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!H(t)){const u=h=>{a=!0;const[f,_]=jc(h,e,!0);Pe(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,wn),wn;if(W(r))for(let u=0;u<r.length;u++){const h=ut(r[u]);Al(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=ut(u);if(Al(h)){const f=r[u],_=o[h]=W(f)||H(f)?{type:f}:f;if(_){const m=Dl(Boolean,_.type),P=Dl(String,_.type);_[0]=m>-1,_[1]=P<0||m<P,(m>-1||q(_,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function Al(t){return t[0]!=="$"}function kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ol(t,e){return kl(t)===kl(e)}function Dl(t,e){return W(e)?e.findIndex(n=>Ol(n,t)):H(e)&&Ol(e,t)?0:-1}const Vc=t=>t[0]==="_"||t==="$stable",bo=t=>W(t)?t.map(at):[at(t)],yd=(t,e,n)=>{if(e._n)return e;const s=cs((...i)=>bo(e(...i)),n);return s._c=!1,s},Gc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Vc(i))continue;const r=t[i];if(H(r))e[i]=yd(i,r,s);else if(r!=null){const o=bo(r);e[i]=()=>o}}},zc=(t,e)=>{const n=bo(e);t.slots.default=()=>n},vd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),ui(e,"_",n)):Gc(e,t.slots={})}else t.slots={},e&&zc(t,e);ui(t.slots,Ui,1)},Cd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Pe(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Gc(e,i)),o=e}else e&&(zc(t,e),o={default:1});if(r)for(const l in i)!Vc(l)&&!(l in o)&&delete i[l]};function Kc(){return{app:null,config:{isNativeTag:qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ed=0;function bd(t,e){return function(s,i=null){H(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Kc(),o=new Set;let l=!1;const a=r.app={_uid:Ed++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ud,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(a,...u)):H(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=me(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Ro(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Or(t,e,n,s,i=!1){if(W(t)){t.forEach((f,_)=>Or(f,e&&(W(e)?e[_]:e),n,s,i));return}if(oi(s)&&!i)return;const r=s.shapeFlag&4?Ro(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ee(c)?(u[c]=null,q(h,c)&&(h[c]=null)):Ie(c)&&(c.value=null)),H(a))Ot(a,l,12,[o,u]);else{const f=Ee(a),_=Ie(a);if(f||_){const m=()=>{if(t.f){const P=f?u[a]:a.value;i?W(P)&&uo(P,r):W(P)?P.includes(r)||P.push(r):f?(u[a]=[r],q(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,q(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ae(m,n)):m()}}}const Ae=qf;function wd(t){return Id(t)}function Id(t,e){const n=tf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Je,cloneNode:m,insertStaticContent:P}=t,R=(d,p,g,C=null,v=null,I=null,N=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xn(d,p)&&(C=O(d),$e(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:M,shapeFlag:A}=p;switch(E){case wo:x(d,p,g,C);break;case Ts:B(d,p,g,C);break;case li:d==null&&K(p,g,C,N);break;case lt:an(d,p,g,C,v,I,N,w,T);break;default:A&1?De(d,p,g,C,v,I,N,w,T):A&6?cn(d,p,g,C,v,I,N,w,T):(A&64||A&128)&&E.process(d,p,g,C,v,I,N,w,T,le)}M!=null&&v&&Or(M,d&&d.ref,I,p||d,!p)},x=(d,p,g,C)=>{if(d==null)s(p.el=l(p.children),g,C);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},B=(d,p,g,C)=>{d==null?s(p.el=a(p.children||""),g,C):p.el=d.el},K=(d,p,g,C)=>{[d.el,d.anchor]=P(d.children,p,g,C,d.el,d.anchor)},J=({el:d,anchor:p},g,C)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,C),d=v;s(p,g,C)},xe=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},De=(d,p,g,C,v,I,N,w,T)=>{N=N||p.type==="svg",d==null?dt(p,g,C,v,I,N,w,T):Tt(d,p,v,I,N,w,T)},dt=(d,p,g,C,v,I,N,w)=>{let T,E;const{type:M,props:A,shapeFlag:L,transition:$,patchFlag:Y,dirs:ne}=d;if(d.el&&m!==void 0&&Y===-1)T=d.el=m(d.el);else{if(T=d.el=o(d.type,I,A&&A.is,A),L&8?u(T,d.children):L&16&&nt(d.children,T,null,C,v,I&&M!=="foreignObject",N,w),ne&&Ht(d,null,C,"created"),A){for(const ue in A)ue!=="value"&&!si(ue)&&r(T,ue,null,A[ue],I,d.children,C,v,S);"value"in A&&r(T,"value",null,A.value),(E=A.onVnodeBeforeMount)&&rt(E,C,d)}ln(T,d,d.scopeId,N,C)}ne&&Ht(d,null,C,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;se&&$.beforeEnter(T),s(T,p,g),((E=A&&A.onVnodeMounted)||se||ne)&&Ae(()=>{E&&rt(E,C,d),se&&$.enter(T),ne&&Ht(d,null,C,"mounted")},v)},ln=(d,p,g,C,v)=>{if(g&&_(d,g),C)for(let I=0;I<C.length;I++)_(d,C[I]);if(v){let I=v.subTree;if(p===I){const N=v.vnode;ln(d,N,N.scopeId,N.slotScopeIds,v.parent)}}},nt=(d,p,g,C,v,I,N,w,T=0)=>{for(let E=T;E<d.length;E++){const M=d[E]=w?xt(d[E]):at(d[E]);R(null,M,p,g,C,v,I,N,w)}},Tt=(d,p,g,C,v,I,N)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:M}=p;T|=d.patchFlag&16;const A=d.props||ce,L=p.props||ce;let $;g&&jt(g,!1),($=L.onVnodeBeforeUpdate)&&rt($,g,p,d),M&&Ht(p,d,g,"beforeUpdate"),g&&jt(g,!0);const Y=v&&p.type!=="foreignObject";if(E?pt(d.dynamicChildren,E,w,g,C,Y,I):N||Me(d,p,w,null,g,C,Y,I,!1),T>0){if(T&16)Ve(w,p,A,L,g,C,v);else if(T&2&&A.class!==L.class&&r(w,"class",null,L.class,v),T&4&&r(w,"style",A.style,L.style,v),T&8){const ne=p.dynamicProps;for(let se=0;se<ne.length;se++){const ue=ne[se],Ge=A[ue],fn=L[ue];(fn!==Ge||ue==="value")&&r(w,ue,Ge,fn,v,d.children,g,C,S)}}T&1&&d.children!==p.children&&u(w,p.children)}else!N&&E==null&&Ve(w,p,A,L,g,C,v);(($=L.onVnodeUpdated)||M)&&Ae(()=>{$&&rt($,g,p,d),M&&Ht(p,d,g,"updated")},C)},pt=(d,p,g,C,v,I,N)=>{for(let w=0;w<p.length;w++){const T=d[w],E=p[w],M=T.el&&(T.type===lt||!Xn(T,E)||T.shapeFlag&70)?h(T.el):g;R(T,E,M,null,C,v,I,N,!0)}},Ve=(d,p,g,C,v,I,N)=>{if(g!==C){for(const w in C){if(si(w))continue;const T=C[w],E=g[w];T!==E&&w!=="value"&&r(d,w,E,T,N,p.children,v,I,S)}if(g!==ce)for(const w in g)!si(w)&&!(w in C)&&r(d,w,g[w],null,N,p.children,v,I,S);"value"in C&&r(d,"value",g.value,C.value)}},an=(d,p,g,C,v,I,N,w,T)=>{const E=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:L,slotScopeIds:$}=p;$&&(w=w?w.concat($):$),d==null?(s(E,g,C),s(M,g,C),nt(p.children,g,M,v,I,N,w,T)):A>0&&A&64&&L&&d.dynamicChildren?(pt(d.dynamicChildren,L,g,v,I,N,w),(p.key!=null||v&&p===v.subTree)&&qc(d,p,!0)):Me(d,p,g,M,v,I,N,w,T)},cn=(d,p,g,C,v,I,N,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,C,N,T):un(p,g,C,v,I,N,T):_e(d,p,T)},un=(d,p,g,C,v,I,N)=>{const w=d.component=Dd(d,C,v);if(Lc(d)&&(w.ctx.renderer=le),Md(w),w.asyncDep){if(v&&v.registerDep(w,oe),!d.el){const T=w.subTree=me(Ts);B(null,T,p,g)}return}oe(w,d,p,g,v,I,N)},_e=(d,p,g)=>{const C=p.component=d.component;if(Gf(d,p,g))if(C.asyncDep&&!C.asyncResolved){ee(C,p,g);return}else C.next=p,$f(C.update),C.update();else p.el=d.el,C.vnode=p},oe=(d,p,g,C,v,I,N)=>{const w=()=>{if(d.isMounted){let{next:M,bu:A,u:L,parent:$,vnode:Y}=d,ne=M,se;jt(d,!1),M?(M.el=Y.el,ee(d,M,N)):M=Y,A&&nr(A),(se=M.props&&M.props.onVnodeBeforeUpdate)&&rt(se,$,M,Y),jt(d,!0);const ue=sr(d),Ge=d.subTree;d.subTree=ue,R(Ge,ue,h(Ge.el),O(Ge),d,v,I),M.el=ue.el,ne===null&&zf(d,ue.el),L&&Ae(L,v),(se=M.props&&M.props.onVnodeUpdated)&&Ae(()=>rt(se,$,M,Y),v)}else{let M;const{el:A,props:L}=p,{bm:$,m:Y,parent:ne}=d,se=oi(p);if(jt(d,!1),$&&nr($),!se&&(M=L&&L.onVnodeBeforeMount)&&rt(M,ne,p),jt(d,!0),A&&U){const ue=()=>{d.subTree=sr(d),U(A,d.subTree,d,v,null)};se?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=sr(d);R(null,ue,g,C,d,v,I),p.el=ue.el}if(Y&&Ae(Y,v),!se&&(M=L&&L.onVnodeMounted)){const ue=p;Ae(()=>rt(M,ne,ue),v)}(p.shapeFlag&256||ne&&oi(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ae(d.a,v),d.isMounted=!0,p=g=C=null}},T=d.effect=new _o(w,()=>Sc(E),d.scope),E=d.update=()=>T.run();E.id=d.uid,jt(d,!0),E()},ee=(d,p,g)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,md(d,p.props,C,g),Cd(d,p.children,g),Hn(),Bi(void 0,d.update),jn()},Me=(d,p,g,C,v,I,N,w,T=!1)=>{const E=d&&d.children,M=d?d.shapeFlag:0,A=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){_t(E,A,g,C,v,I,N,w,T);return}else if(L&256){hn(E,A,g,C,v,I,N,w,T);return}}$&8?(M&16&&S(E,v,I),A!==E&&u(g,A)):M&16?$&16?_t(E,A,g,C,v,I,N,w,T):S(E,v,I,!0):(M&8&&u(g,""),$&16&&nt(A,g,C,v,I,N,w,T))},hn=(d,p,g,C,v,I,N,w,T)=>{d=d||wn,p=p||wn;const E=d.length,M=p.length,A=Math.min(E,M);let L;for(L=0;L<A;L++){const $=p[L]=T?xt(p[L]):at(p[L]);R(d[L],$,g,null,v,I,N,w,T)}E>M?S(d,v,I,!0,!1,A):nt(p,g,C,v,I,N,w,T,A)},_t=(d,p,g,C,v,I,N,w,T)=>{let E=0;const M=p.length;let A=d.length-1,L=M-1;for(;E<=A&&E<=L;){const $=d[E],Y=p[E]=T?xt(p[E]):at(p[E]);if(Xn($,Y))R($,Y,g,null,v,I,N,w,T);else break;E++}for(;E<=A&&E<=L;){const $=d[A],Y=p[L]=T?xt(p[L]):at(p[L]);if(Xn($,Y))R($,Y,g,null,v,I,N,w,T);else break;A--,L--}if(E>A){if(E<=L){const $=L+1,Y=$<M?p[$].el:C;for(;E<=L;)R(null,p[E]=T?xt(p[E]):at(p[E]),g,Y,v,I,N,w,T),E++}}else if(E>L)for(;E<=A;)$e(d[E],v,I,!0),E++;else{const $=E,Y=E,ne=new Map;for(E=Y;E<=L;E++){const Le=p[E]=T?xt(p[E]):at(p[E]);Le.key!=null&&ne.set(Le.key,E)}let se,ue=0;const Ge=L-Y+1;let fn=!1,_l=0;const Qn=new Array(Ge);for(E=0;E<Ge;E++)Qn[E]=0;for(E=$;E<=A;E++){const Le=d[E];if(ue>=Ge){$e(Le,v,I,!0);continue}let it;if(Le.key!=null)it=ne.get(Le.key);else for(se=Y;se<=L;se++)if(Qn[se-Y]===0&&Xn(Le,p[se])){it=se;break}it===void 0?$e(Le,v,I,!0):(Qn[it-Y]=E+1,it>=_l?_l=it:fn=!0,R(Le,p[it],g,null,v,I,N,w,T),ue++)}const gl=fn?Td(Qn):wn;for(se=gl.length-1,E=Ge-1;E>=0;E--){const Le=Y+E,it=p[Le],ml=Le+1<M?p[Le+1].el:C;Qn[E]===0?R(null,it,g,ml,v,I,N,w,T):fn&&(se<0||E!==gl[se]?st(it,g,ml,2):se--)}}},st=(d,p,g,C,v=null)=>{const{el:I,type:N,transition:w,children:T,shapeFlag:E}=d;if(E&6){st(d.component.subTree,p,g,C);return}if(E&128){d.suspense.move(p,g,C);return}if(E&64){N.move(d,p,g,le);return}if(N===lt){s(I,p,g);for(let A=0;A<T.length;A++)st(T[A],p,g,C);s(d.anchor,p,g);return}if(N===li){J(d,p,g);return}if(C!==2&&E&1&&w)if(C===0)w.beforeEnter(I),s(I,p,g),Ae(()=>w.enter(I),v);else{const{leave:A,delayLeave:L,afterLeave:$}=w,Y=()=>s(I,p,g),ne=()=>{A(I,()=>{Y(),$&&$()})};L?L(I,Y,ne):ne()}else s(I,p,g)},$e=(d,p,g,C=!1,v=!1)=>{const{type:I,props:N,ref:w,children:T,dynamicChildren:E,shapeFlag:M,patchFlag:A,dirs:L}=d;if(w!=null&&Or(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const $=M&1&&L,Y=!oi(d);let ne;if(Y&&(ne=N&&N.onVnodeBeforeUnmount)&&rt(ne,p,d),M&6)k(d.component,g,C);else{if(M&128){d.suspense.unmount(g,C);return}$&&Ht(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,le,C):E&&(I!==lt||A>0&&A&64)?S(E,p,g,!1,!0):(I===lt&&A&384||!v&&M&16)&&S(T,p,g),C&&Yn(d)}(Y&&(ne=N&&N.onVnodeUnmounted)||$)&&Ae(()=>{ne&&rt(ne,p,d),$&&Ht(d,null,p,"unmounted")},g)},Yn=d=>{const{type:p,el:g,anchor:C,transition:v}=d;if(p===lt){y(g,C);return}if(p===li){xe(d);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:w}=v,T=()=>N(g,I);w?w(d.el,I,T):T()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},k=(d,p,g)=>{const{bum:C,scope:v,update:I,subTree:N,um:w}=d;C&&nr(C),v.stop(),I&&(I.active=!1,$e(N,d,p,g)),w&&Ae(w,p),Ae(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,g,C=!1,v=!1,I=0)=>{for(let N=I;N<d.length;N++)$e(d[N],p,g,C,v)},O=d=>d.shapeFlag&6?O(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),te=(d,p,g)=>{d==null?p._vnode&&$e(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Pc(),p._vnode=d},le={p:R,um:$e,m:st,r:Yn,mt:un,mc:nt,pc:Me,pbc:pt,n:O,o:t};let z,U;return e&&([z,U]=e(le)),{render:te,hydrate:z,createApp:bd(te,z)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qc(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=xt(i[r]),l.el=o.el),n||qc(o,l))}}function Td(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Sd=t=>t.__isTeleport,lt=Symbol(void 0),wo=Symbol(void 0),Ts=Symbol(void 0),li=Symbol(void 0),ps=[];let Qe=null;function Io(t=!1){ps.push(Qe=t?null:[])}function Rd(){ps.pop(),Qe=ps[ps.length-1]||null}let Ss=1;function Ml(t){Ss+=t}function Yc(t){return t.dynamicChildren=Ss>0?Qe||wn:null,Rd(),Ss>0&&Qe&&Qe.push(t),t}function To(t,e,n,s,i,r){return Yc(D(t,e,n,s,i,r,!0))}function LC(t,e,n,s,i){return Yc(me(t,e,n,s,i,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const Ui="__vInternal",Qc=({key:t})=>t!=null?t:null,ai=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ee(t)||Ie(t)||H(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,s=0,i=null,r=t===lt?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&ai(e),scopeId:kc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(So(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ee(n)?8:16),Ss>0&&!o&&Qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Qe.push(a),a}const me=Nd;function Nd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ad)&&(t=Ts),Dr(t)){const l=xn(t,e,!0);return n&&So(l,n),Ss>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(t)]=l:Qe.push(l)),l.patchFlag|=-2,l}if(Wd(t)&&(t=t.__vccOpts),e){e=Pd(e);let{class:l,style:a}=e;l&&!Ee(l)&&(e.class=ao(l)),ye(a)&&(yc(a)&&!W(a)&&(a=Pe({},a)),e.style=lo(a))}const o=Ee(t)?1:Kf(t)?128:Sd(t)?64:ye(t)?4:H(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function Pd(t){return t?yc(t)||Ui in t?Pe({},t):t:null}function xn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Ad(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qc(l),ref:e&&e.ref?n&&i?W(i)?i.concat(ai(e)):[i,ai(e)]:ai(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor}}function Hs(t=" ",e=0){return me(wo,null,t,e)}function xd(t,e){const n=me(li,null,t);return n.staticCount=e,n}function at(t){return t==null||typeof t=="boolean"?me(Ts):W(t)?me(lt,null,t.slice()):typeof t=="object"?xt(t):me(wo,null,String(t))}function xt(t){return t.el===null||t.memo?t:xn(t)}function So(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),So(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ui in e)?e._ctx=ct:i===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),s&64?(n=16,e=[Hs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ad(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ao([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(ki(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rt(t,e,n,s=null){Ze(t,e,7,[n,s])}const kd=Kc();let Od=0;function Dd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||kd,r={uid:Od++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(s,i),emitsOptions:Ac(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Hf.bind(null,r),t.ce&&t.ce(r),r}let we=null;const An=t=>{we=t,t.scope.on()},Xt=()=>{we&&we.scope.off(),we=null};function Xc(t){return t.vnode.shapeFlag&4}let Rs=!1;function Md(t,e=!1){Rs=e;const{props:n,children:s}=t.vnode,i=Xc(t);gd(t,n,i,e),vd(t,s);const r=i?Ld(t,e):void 0;return Rs=!1,r}function Ld(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vc(new Proxy(t.ctx,ud));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Bd(t):null;An(t),Hn();const r=Ot(s,t,0,[t.props,i]);if(jn(),Xt(),ic(r)){if(r.then(Xt,Xt),e)return r.then(o=>{Ll(t,o,e)}).catch(o=>{Fi(o,t,0)});t.asyncDep=r}else Ll(t,r,e)}else Jc(t,e)}function Ll(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=wc(e)),Jc(t,n)}let Fl;function Jc(t,e,n){const s=t.type;if(!t.render){if(!e&&Fl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Pe(Pe({isCustomElement:r,delimiters:l},o),a);s.render=Fl(i,c)}}t.render=s.render||Je}An(t),Hn(),hd(t),jn(),Xt()}function Fd(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Bd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Fd(t))},slots:t.slots,emit:t.emit,expose:e}}function Ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wc(vc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)}}))}function $d(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Wd(t){return H(t)&&"__vccOpts"in t}const He=(t,e)=>Lf(t,e,Rs);function Zc(t,e,n){const s=arguments.length;return s===2?ye(e)&&!W(e)?Dr(e)?me(t,null,[e]):me(t,e):me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dr(n)&&(n=[n]),me(t,e,n))}const Ud="3.2.37",Hd="http://www.w3.org/2000/svg",Kt=typeof document<"u"?document:null,Bl=Kt&&Kt.createElement("template"),jd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Kt.createElementNS(Hd,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Bl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Bl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gd(t,e,n){const s=t.style,i=Ee(n);if(n&&!i){for(const r in n)Mr(s,r,n[r]);if(e&&!Ee(e))for(const r in e)n[r]==null&&Mr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $l=/\s*!important$/;function Mr(t,e,n){if(W(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=zd(t,e);$l.test(n)?t.setProperty(Un(s),n.replace($l,""),"important"):t[s]=n}}const Wl=["Webkit","Moz","ms"],ir={};function zd(t,e){const n=ir[e];if(n)return n;let s=ut(e);if(s!=="filter"&&s in t)return ir[e]=s;s=Mi(s);for(let i=0;i<Wl.length;i++){const r=Wl[i]+s;if(r in t)return ir[e]=r}return e}const Ul="http://www.w3.org/1999/xlink";function Kd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const r=jh(e);n==null||r&&!tc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function qd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[eu,Yd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Lr=0;const Qd=Promise.resolve(),Xd=()=>{Lr=0},Jd=()=>Lr||(Qd.then(Xd),Lr=eu());function Zd(t,e,n,s){t.addEventListener(e,n,s)}function ep(t,e,n,s){t.removeEventListener(e,n,s)}function tp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=np(e);if(s){const c=r[e]=sp(s,i);Zd(t,l,c,a)}else o&&(ep(t,l,o,a),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function np(t){let e;if(Hl.test(t)){e={};let n;for(;n=t.match(Hl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Un(t.slice(2)),e]}function sp(t,e){const n=s=>{const i=s.timeStamp||eu();(Yd||i>=n.attached-1)&&Ze(ip(s,n.value),e,5,[s])};return n.value=t,n.attached=Jd(),n}function ip(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const jl=/^on[a-z]/,rp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Vd(t,s,i):e==="style"?Gd(t,n,s):ki(e)?co(e)||tp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(t,e,s,i))?qd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Kd(t,e,s,i))};function op(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&jl.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jl.test(e)&&Ee(n)?!1:e in t}const lp=Pe({patchProp:rp},jd);let Vl;function ap(){return Vl||(Vl=wd(lp))}const cp=(...t)=>{const e=ap().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=up(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function up(t){return Ee(t)?document.querySelector(t):t}const Hi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};/**
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
 */const tu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw Vn(e)},Vn=function(t){return new Error("Firebase Database ("+tu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},su=function(t){const e=nu(t);return No.encodeByteArray(e,!0)},iu=function(t){return su(t).replace(/\./g,"")},Gl=function(t){try{return No.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fp(t){return ru(void 0,t)}function ru(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dp(n)||(t[n]=ru(t[n],e[n]));return t}function dp(t){return t!=="__proto__"}/**
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
 */class mt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pp())}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lu(){return tu.NODE_ADMIN===!0}function gp(){return typeof indexedDB=="object"}function mp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const yp="FirebaseError";class Po extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yp,Object.setPrototypeOf(this,Po.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Po(i,l,s)}}function vp(t,e){return t.replace(Cp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Cp=/\{\$([^}]+)}/g;/**
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
 */function Ns(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const cu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ns(Gl(r[0])||""),n=Ns(Gl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ep=function(t){const e=cu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=cu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _i(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(zl(r)&&zl(o)){if(!Br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function zl(t){return t!==null&&typeof t=="object"}/**
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
 */function wp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function On(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Tp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ji=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Gn(t){return t&&t._delegate?t._delegate:t}class Ps{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Np(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Gt?void 0:t}function Np(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const xp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ap=ae.INFO,kp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let Kl,ql;function Mp(){return Kl||(Kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lp(){return ql||(ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,$r=new WeakMap,fu=new WeakMap,rr=new WeakMap,xo=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function Bp(t){if($r.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$r.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $p(t){Wr=t(Wr)}function Wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(or(this),e,...n);return fu.set(s,e.sort?e.sort():[e]),Mt(s)}:Lp().includes(t)?function(...e){return t.apply(or(this),e),Mt(hu.get(this))}:function(...e){return Mt(t.apply(or(this),e))}}function Up(t){return typeof t=="function"?Wp(t):(t instanceof IDBTransaction&&Bp(t),Dp(t,Mp())?new Proxy(t,Wr):t)}function Mt(t){if(t instanceof IDBRequest)return Fp(t);if(rr.has(t))return rr.get(t);const e=Up(t);return e!==t&&(rr.set(t,e),xo.set(e,t)),e}const or=t=>xo.get(t);function Hp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Mt(o.result),a.oldVersion,a.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const jp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],lr=new Map;function Yl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return lr.set(e,r),r}$p(t=>({...t,get:(e,n,s)=>Yl(e,n)||t.get(e,n,s),has:(e,n)=>!!Yl(e,n)||t.has(e,n)}));/**
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
 */class Gp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ur="@firebase/app",Ql="0.7.28";/**
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
 */const Ao=new uu("@firebase/app"),Kp="@firebase/app-compat",qp="@firebase/analytics-compat",Yp="@firebase/analytics",Qp="@firebase/app-check-compat",Xp="@firebase/app-check",Jp="@firebase/auth",Zp="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/database-compat",n_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",r_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",u_="@firebase/remote-config",h_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",p_="@firebase/firestore",__="@firebase/firestore-compat",g_="firebase",m_="9.9.0";/**
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
 */const du="[DEFAULT]",y_={[Ur]:"fire-core",[Kp]:"fire-core-compat",[Yp]:"fire-analytics",[qp]:"fire-analytics-compat",[Xp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Jp]:"fire-auth",[Zp]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[r_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[u_]:"fire-rc",[h_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[p_]:"fire-fst",[__]:"fire-fst-compat","fire-js":"fire-js",[g_]:"fire-js-all"};/**
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
 */const gi=new Map,Hr=new Map;function v_(t,e){try{t.container.addComponent(e)}catch(n){Ao.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Hr.has(e))return Ao.debug(`There were multiple attempts to register component ${e}.`),!1;Hr.set(e,t);for(const n of gi.values())v_(n,t);return!0}function C_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const E_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Zt=new au("app","Firebase",E_);/**
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
 */class b_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const w_=m_;function I_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});const i=gi.get(s);if(i){if(Br(t,i.options)&&Br(n,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const r=new Pp(s);for(const l of Hr.values())r.addComponent(l);const o=new b_(t,n,r);return gi.set(s,o),o}function T_(t=du){const e=gi.get(t);if(!e)throw Zt.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ao.warn(l.join(" "));return}mi(new Ps(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",R_=1,xs="firebase-heartbeat-store";let ar=null;function pu(){return ar||(ar=Hp(S_,R_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}}).catch(t=>{throw Zt.create("storage-open",{originalErrorMessage:t.message})})),ar}async function N_(t){var e;try{return(await pu()).transaction(xs).objectStore(xs).get(_u(t))}catch(n){throw Zt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Xl(t,e){var n;try{const i=(await pu()).transaction(xs,"readwrite");return await i.objectStore(xs).put(e,_u(t)),i.done}catch(s){throw Zt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P_=1024,x_=30*24*60*60*1e3;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=x_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jl(),{heartbeatsToSend:n,unsentEntries:s}=k_(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jl(){return new Date().toISOString().substring(0,10)}function k_(t,e=P_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Zl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zl(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function D_(t){mi(new Ps("platform-logger",e=>new Gp(e),"PRIVATE")),mi(new Ps("heartbeat",e=>new A_(e),"PRIVATE")),Rn(Ur,Ql,t),Rn(Ur,Ql,"esm2017"),Rn("fire-js","")}D_("");var M_="firebase",L_="9.9.0";/**
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
 */Rn(M_,L_,"app");const ea="@firebase/database",ta="0.13.3";/**
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
 */let gu="";function F_(t){gu=t}/**
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
 */class B_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new B_(e)}}catch{}return new $_},qt=mu("localStorage"),jr=mu("sessionStorage");/**
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
 */const Nn=new uu("@firebase/database"),W_=function(){let t=1;return function(){return t++}}(),yu=function(t){const e=Tp(t),n=new Ip;n.update(e);const s=n.digest();return No.encodeByteArray(s)},js=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=js.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let Jt=null,na=!0;const U_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Nn.logLevel=ae.VERBOSE,Jt=Nn.log.bind(Nn),e&&jr.set("logging_enabled",!0)):typeof t=="function"?Jt=t:(Jt=null,jr.remove("logging_enabled"))},be=function(...t){if(na===!0&&(na=!1,Jt===null&&jr.get("logging_enabled")===!0&&U_(!0)),Jt){const e=js.apply(null,t);Jt(e)}},Vs=function(t){return function(...e){be(t,...e)}},Vr=function(...t){const e="FIREBASE INTERNAL ERROR: "+js(...t);Nn.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${js(...t)}`;throw Nn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+js(...t);Nn.warn(e)},H_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},j_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",tn="[MAX_NAME]",rn=function(t,e){if(t===e)return 0;if(t===Dn||e===tn)return-1;if(e===Dn||t===tn)return 1;{const n=sa(t),s=sa(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},V_=function(t,e){return t===e?0:t<e?-1:1},Jn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},ko=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ge(e[s]),n+=":",n+=ko(t[e[s]]);return n+="}",n},vu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cu=function(t){b(!Vi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},G_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},z_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function K_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const q_=new RegExp("^-?(0*)\\d{1,10}$"),Y_=-2147483648,Q_=2147483647,sa=function(t){if(q_.test(t)){const e=Number(t);if(e>=Y_&&e<=Q_)return e}return null},zn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},X_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class J_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Z_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Gr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gr.OWNER="owner";/**
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
 */const Oo="5",Eu="v",bu="s",wu="r",Iu="f",Tu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Ru="p",zr="ac",Nu="websocket",Pu="long_polling";/**
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
 */class eg{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function tg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Nu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tg(t)&&(n.ns=t.namespace);const i=[];return Te(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class ng{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fp(this.counters_)}}/**
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
 */const cr={},ur={};function Do(t){const e=t.toString();return cr[e]||(cr[e]=new ng),cr[e]}function sg(t,e){const n=t.toString();return ur[n]||(ur[n]=e()),ur[n]}/**
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
 */class ig{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&zn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ia="start",rg="close",og="pLPCommand",lg="pRTLPCB",Au="id",ku="pw",Ou="ser",ag="cb",cg="seg",ug="ts",hg="d",fg="dframe",Du=1870,Mu=30,dg=Du-Mu,pg=25e3,_g=3e4;class bn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vs(e),this.stats_=Do(n),this.urlFn=a=>(this.appCheckToken&&(a[zr]=this.appCheckToken),xu(n,Pu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ig(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_g)),j_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ia)this.id=l,this.password=a;else if(o===rg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ia]="t",s[Ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ag]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Eu]=Oo,this.transportSessionId&&(s[bu]=this.transportSessionId),this.lastSessionId&&(s[Su]=this.lastSessionId),this.applicationId&&(s[Ru]=this.applicationId),this.appCheckToken&&(s[zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tu.test(location.hostname)&&(s[wu]=Iu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!G_()&&!z_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=su(n),i=vu(s,dg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fg]="t",s[Au]=e,s[ku]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=W_(),window[og+this.uniqueCallbackIdentifier]=e,window[lg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Au]=this.myID,e[ku]=this.myPW,e[Ou]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mu+s.length<=Du;){const o=this.pendingSegs.shift();s=s+"&"+cg+i+"="+o.seg+"&"+ug+i+"="+o.ts+"&"+hg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(pg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const gg=16384,mg=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class Ye{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vs(this.connId),this.stats_=Do(n),this.connURL=Ye.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Eu]=Oo,typeof location<"u"&&location.hostname&&Tu.test(location.hostname)&&(o[wu]=Iu),n&&(o[bu]=n),s&&(o[Su]=s),i&&(o[zr]=i),r&&(o[Ru]=r),xu(e,Nu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;lu(),this.mySock=new yi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ns(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vu(n,gg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
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
 */class As{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of As.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
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
 */const yg=6e4,vg=5e3,Cg=10*1024,Eg=100*1024,hr="t",ra="d",bg="s",oa="r",wg="e",la="o",aa="a",ca="n",ua="p",Ig="h";class Tg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vs("c:"+this.id+":"),this.transportManager_=new As(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hr in e){const n=e[hr];n===aa?this.upgradeIfSecondaryHealthy_():n===oa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===la&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jn("t",e),s=Jn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ua,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:aa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ca,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jn("t",e),s=Jn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jn(hr,e);if(ra in e){const s=e[ra];if(n===Ig)this.onHandshake_(s);else if(n===ca){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bg?this.onConnectionShutdown_(s):n===oa?this.onReset_(s):n===wg?Vr("Server Error: "+s):n===la?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oo!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ua,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Lu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Fu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vi extends Fu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ou()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ha=32,fa=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new Z("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $t(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function Lo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ks(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Bu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return Ne(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rg(t,e){const n=ks(t,0),s=ks(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=rn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Fo(t,e){if($t(t)!==$t(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if($t(t)>$t(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ng{constructor(e,n){this.errorPrefix_=n,this.parts_=ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ji(this.parts_[s]);$u(this)}}function Pg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ji(e),$u(t)}function xg(t){const e=t.parts_.pop();t.byteLength_-=ji(e),t.parts_.length>0&&(t.byteLength_-=1)}function $u(t){if(t.byteLength_>fa)throw new Error(t.errorPrefix_+"has a key path longer than "+fa+" bytes ("+t.byteLength_+").");if(t.parts_.length>ha)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ha+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Bo extends Fu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Bo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zn=1e3,Ag=60*5*1e3,da=30*1e3,kg=1.3,Og=3e4,Dg="server_kill",pa=3;class Ct extends Lu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ct.nextPersistentConnectionId_++,this.log_=Vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=Ag,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ge(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new mt,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const s=kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=da)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ep(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vr("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Og&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Tg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fr(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ko(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pa&&(this.reconnectDelay_=da,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gu.replace(/\./g,"-")]=1,ou()?e["framework.cordova"]=1:_p()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vi.getInstance().currentlyOnline();return Fr(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Dn,e),i=new G(Dn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let ei;class Wu extends Gi{static get __EMPTY_NODE(){return ei}static set __EMPTY_NODE(e){ei=e}compare(e,n){return rn(e.name,n.name)}isDefinedOn(e){throw Vn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(tn,ei)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ei)}toString(){return".key"}}const Pn=new Wu;/**
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
 */class ti{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ce.RED,this.left=i!=null?i:ke.EMPTY_NODE,this.right=r!=null?r:ke.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Mg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,n=ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ti(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ti(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ti(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ti(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new Mg;/**
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
 */function Lg(t,e){return rn(t.name,e.name)}function $o(t,e){return rn(t,e)}/**
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
 */let Kr;function Fg(t){Kr=t}const Uu=function(t){return typeof t=="number"?"number:"+Cu(t):"string:"+t},Hu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else b(t===Kr||t.isEmpty(),"priority of unexpected type.");b(t===Kr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _a;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hu(this.priorityNode_)}static set __childrenNodeConstructor(e){_a=e}static get __childrenNodeConstructor(){return _a}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:j(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cu(this.value_):e+=this.value_,this.lazyHash_=yu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ju,Vu;function Bg(t){ju=t}function $g(t){Vu=t}class Wg extends Gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?rn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(tn,new ve("[PRIORITY-POST]",Vu))}makePost(e,n){const s=ju(e);return new G(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new Wg;/**
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
 */const Ug=Math.log(2);class Hg{constructor(e){const n=r=>parseInt(Math.log(r)/Ug,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ci=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),P=i(_+1,c);return h=t[_],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,m,P)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,P){const R=h-m,x=h;h-=m;const B=i(R+1,x),K=t[R],J=n?n(K):K;_(new Ce(J,K.node,P,null,B))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const P=a.nextBitIsOne(),R=Math.pow(2,a.count-(m+1));P?f(R,Ce.BLACK):(f(R,Ce.BLACK),f(R,Ce.RED))}return u},o=new Hg(t.length),l=r(o);return new ke(s||e,l)};/**
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
 */let fr;const dn={};class vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(dn&&fe,"ChildrenNode.ts has not been loaded"),fr=fr||new vt({".priority":dn},{".priority":fe}),fr}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ke?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ci(s,e.getCompare()):l=dn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new vt(u,c)}addToIndexes(e,n){const s=_i(this.indexes_,(i,r)=>{const o=kn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(G.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ci(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new G(e.name,l))),a.insert(e,e.node)}});return new vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=_i(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new vt(s,this.indexSet_)}}/**
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
 */let es;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return es||(es=new F(new ke($o),null,vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||es}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?es:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?es:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{b(j(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uu(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===Pn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jg extends F{constructor(){super(new ke($o),F.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Gs=new jg;Object.defineProperties(G,{MIN:{value:new G(Dn,F.EMPTY_NODE)},MAX:{value:new G(tn,Gs)}});Wu.__EMPTY_NODE=F.EMPTY_NODE;ve.__childrenNodeConstructor=F;Fg(Gs);$g(Gs);/**
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
 */const Vg=!0;function de(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,de(e))}if(!(t instanceof Array)&&Vg){const n=[];let s=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=de(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return F.EMPTY_NODE;const r=Ci(n,Lg,o=>o.name,$o);if(s){const o=Ci(n,fe.getCompare());return new F(r,de(e),new vt({".priority":o},{".priority":fe}))}else return new F(r,de(e),vt.Default)}else{let n=F.EMPTY_NODE;return Te(t,(s,i)=>{if(ht(t,s)&&s.substring(0,1)!=="."){const r=de(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(de(e))}}Bg(de);/**
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
 */class Gg extends Gi{constructor(e){super(),this.indexPath_=e,b(!V(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?rn(e.name,n.name):r}makePost(e,n){const s=de(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new G(tn,e)}toString(){return ks(this.indexPath_,0).join("/")}}/**
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
 */class zg extends Gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?rn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=de(e);return new G(n,s)}toString(){return".value"}}const Kg=new zg;/**
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
 */function Gu(t){return{type:"value",snapshotNode:t}}function Mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Os(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mn(n,s)):o.trackChildChange(Ds(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Os(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ds(i,r,o))}else s.trackChildChange(Mn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ms{constructor(e){this.indexedFilter_=new Wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ms.getStartPost_(e),this.endPost_=Ms.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Yg{constructor(e){this.rangedFilter_=new Ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new G(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ds(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Os(n,h));const P=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Mn(f.name,f.node)),P.updateImmediateChild(f.name,f.node)):P}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Os(c.name,c.node)),r.trackChildChange(Mn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class Uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qg(t){return t.loadsAllData()?new Wo(t.getIndex()):t.hasLimit()?new Yg(t):new Ms(t)}function ga(t){const e={};if(t.isDefault())return e;let n;return t.index_===fe?n="$priority":t.index_===Kg?n="$value":t.index_===Pn?n="$key":(b(t.index_ instanceof Gg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_&&(e.startAt=ge(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ge(t.indexStartName_))),t.endSet_&&(e.endAt=ge(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ge(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ma(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class Ei extends Lu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ei.getListenId_(e,s),l={};this.listens_[o]=l;const a=ga(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),kn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ga(e._queryParams),s=e._path.toString(),i=new mt;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ns(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Xg{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function bi(){return{value:null,children:new Map}}function Kn(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,bi());const i=t.children.get(s);e=re(e),Kn(i,e,n)}}function qr(t,e){if(V(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(fe,(s,i)=>{Kn(t,new Z(s),i)}),qr(t,e)}}else if(t.children.size>0){const n=j(e);return e=re(e),t.children.has(n)&&qr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Yr(t,e,n){t.value!==null?n(e,t.value):Jg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Yr(i,r,n)})}function Jg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Zg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ya=10*1e3,em=30*1e3,tm=5*60*1e3;class nm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zg(e);const s=ya+(em-ya)*Math.random();_s(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Te(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*tm))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function zu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ho(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=zu()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new wi(Q(),n,this.revert)}}else return b(j(this.path)===e,"operationForChild called for unrelated child."),new wi(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Ls(this.source,Q()):new Ls(this.source,re(this.path))}}/**
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
 */class nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return V(this.path)?new nn(this.source,Q(),this.snap.getImmediateChild(e)):new nn(this.source,re(this.path),this.snap)}}/**
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
 */class Fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new nn(this.source,Q(),n.value):new Fs(this.source,Q(),n)}else return b(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fs(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class sm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function im(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qg(o.childName,o.snapshotNode))}),ts(t,i,"child_removed",e,s,n),ts(t,i,"child_added",e,s,n),ts(t,i,"child_moved",r,s,n),ts(t,i,"child_changed",e,s,n),ts(t,i,"value",e,s,n),i}function ts(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>om(t,l,a)),o.forEach(l=>{const a=rm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function rm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function om(t,e,n){if(e.childName==null||n.childName==null)throw Vn("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function zi(t,e){return{eventCache:t,serverCache:e}}function gs(t,e,n,s){return zi(new Wt(e,n,s),t.serverCache)}function Ku(t,e,n,s){return zi(t.eventCache,new Wt(e,n,s))}function Ii(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let dr;const lm=()=>(dr||(dr=new ke(V_)),dr);class he{constructor(e,n=lm()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Te(e,(s,i)=>{n=n.set(new Z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(V(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:pe(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new he(null)}}set(e,n){if(V(e))return new he(n,this.children);{const s=j(e),r=(this.children.get(s)||new he(null)).set(re(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(V(e))return n;{const s=j(e),r=(this.children.get(s)||new he(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(V(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(re(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(V(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),pe(n,i),s):new he(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new he(null))}}function ms(t,e,n){if(V(e))return new et(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function va(t,e,n){let s=t;return Te(n,(i,r)=>{s=ms(s,pe(e,i),r)}),s}function Ca(t,e){if(V(e))return et.empty();{const n=t.writeTree_.setTree(e,new he(null));return new et(n)}}function Qr(t,e){return on(t,e)!=null}function on(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function Ea(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Lt(t,e){if(V(e))return t;{const n=on(t,e);return n!=null?new et(new he(n)):new et(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Ln(t,e){return qu(Q(),t.writeTree_,e)}function qu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qu(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
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
 */function Ki(t,e){return Ju(e,t)}function am(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ms(t.visibleWrites,e,n)),t.lastWriteId=s}function cm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function um(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hm(l,s.path)?i=!1:je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return fm(t),!0;if(s.snap)t.visibleWrites=Ca(t.visibleWrites,s.path);else{const l=s.children;Te(l,a=>{t.visibleWrites=Ca(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function hm(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(pe(t.path,n),e))return!0;return!1}function fm(t){t.visibleWrites=Yu(t.allWrites,dm,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dm(t){return t.visible}function Yu(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)je(n,o)?(l=Ne(n,o),s=ms(s,l,r.snap)):je(o,n)&&(l=Ne(o,n),s=ms(s,Q(),r.snap.getChild(l)));else if(r.children){if(je(n,o))l=Ne(n,o),s=va(s,l,r.children);else if(je(o,n))if(l=Ne(o,n),V(l))s=va(s,Q(),r.children);else{const a=kn(r.children,j(l));if(a){const c=a.getChild(re(l));s=ms(s,Q(),c)}}}else throw Vn("WriteRecord should have .snap or .children")}}return s}function Qu(t,e,n,s,i){if(!s&&!i){const r=on(t.visibleWrites,e);if(r!=null)return r;{const o=Lt(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,Q()))return null;{const l=n||F.EMPTY_NODE;return Ln(o,l)}}}else{const r=Lt(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(je(c.path,e)||je(e,c.path))},l=Yu(t.allWrites,o,e),a=n||F.EMPTY_NODE;return Ln(l,a)}}}function pm(t,e,n){let s=F.EMPTY_NODE;const i=on(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Lt(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Ln(Lt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Ea(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Lt(t.visibleWrites,e);return Ea(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _m(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Lt(t.visibleWrites,r);return Xr(o)?i.getChild(n):Ln(o,i.getChild(n))}}function gm(t,e,n,s){const i=pe(e,n),r=on(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Lt(t.visibleWrites,i);return Ln(o,s.getNode().getImmediateChild(n))}else return null}function mm(t,e){return on(t.visibleWrites,e)}function ym(t,e,n,s,i,r,o){let l;const a=Lt(t.visibleWrites,e),c=on(a,Q());if(c!=null)l=c;else if(n!=null)l=Ln(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function vm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,s){return Qu(t.writeTree,t.treePath,e,n,s)}function Vo(t,e){return pm(t.writeTree,t.treePath,e)}function ba(t,e,n,s){return _m(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return mm(t.writeTree,pe(t.treePath,e))}function Cm(t,e,n,s,i,r){return ym(t.writeTree,t.treePath,e,n,s,i,r)}function Go(t,e,n){return gm(t.writeTree,t.treePath,e,n)}function Xu(t,e){return Ju(pe(t.treePath,e),t.writeTree)}function Ju(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Em{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ds(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Os(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ds(s,e.snapshotNode,i.oldSnap));else throw Vn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zu=new bm;class zo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Go(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=Cm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function wm(t){return{filter:t}}function Im(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tm(t,e,n,s,i){const r=new Em;let o,l;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=Ri(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=Rm(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=xm(t,e,c.path,s,i,r):o=Nm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Pm(t,e,n.path,s,r);else throw Vn("Unknown operation type: "+n.type);const a=r.getChanges();return Sm(e,o,a),{viewCache:o,changes:a}}function Sm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ii(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Gu(Ii(e)))}}function eh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let l,a;if(V(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof F?c:F.EMPTY_NODE,h=Vo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ti(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){b($t(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ba(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ba(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Go(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return gs(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function Ri(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&$t(n)>1)return e;const m=re(n),R=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,m,Zu,null)}const h=Ku(e,c,a.isFullyInitialized()||V(n),u.filtersNodes()),f=new zo(i,h,r);return eh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new zo(i,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=gs(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=gs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=re(n),_=l.getNode().getImmediateChild(h);let m;if(V(f))m=s;else{const P=u.getCompleteChild(h);P!=null?Lo(f)===".priority"&&P.getChild(Bu(f)).isEmpty()?m=P:m=P.updateChild(f,s):m=F.EMPTY_NODE}if(_.equals(m))a=e;else{const P=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=gs(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function wa(t,e){return t.eventCache.isCompleteForChild(e)}function Rm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=pe(n,a);wa(e,j(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=pe(n,a);wa(e,j(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function Ia(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Ia(t,_,f);a=Ri(t,a,new Z(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),P=Ia(t,m,f);a=Ri(t,a,new Z(h),P,i,r,o,l)}}),a}function Nm(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ri(t,e,n,a.getNode().getChild(n),i,r,l,o);if(V(n)){let c=new he(null);return a.getNode().forEachChild(Pn,(u,h)=>{c=c.set(new Z(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const f=pe(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Zr(t,e,n,c,i,r,l,o)}}function Pm(t,e,n,s,i){const r=e.serverCache,o=Ku(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return eh(t,o,n,s,Zu,i)}function xm(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const l=new zo(s,e,i),a=e.eventCache.getNode();let c;if(V(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(s,sn(e));else{const h=e.serverCache.getNode();b(h instanceof F,"serverChildren would be complete if leaf node"),u=Vo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=j(n);let h=Go(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,re(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,F.EMPTY_NODE,re(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,Q())!=null,gs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Am{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wo(s.getIndex()),r=Qg(s);this.processor_=wm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Wt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zi(h,u),this.eventGenerator_=new sm(this.query_)}get query(){return this.query_}}function km(t){return t.viewCache_.serverCache.getNode()}function Om(t){return Ii(t.viewCache_)}function Dm(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Ta(t){return t.eventRegistrations_.length===0}function Mm(t,e){t.eventRegistrations_.push(e)}function Sa(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ra(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(b(sn(t.viewCache_),"We should always have a full cache before handling merges"),b(Ii(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Tm(t.processor_,i,e,n,s);return Im(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,th(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(Mn(r,o))}),n.isFullyInitialized()&&s.push(Gu(n.getNode())),th(t,s,n.getNode(),e)}function th(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return im(t.eventGenerator_,e,n,i)}/**
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
 */let Ni;class nh{constructor(){this.views=new Map}}function Fm(t){b(!Ni,"__referenceConstructor has already been defined"),Ni=t}function Bm(){return b(Ni,"Reference.ts has not been loaded"),Ni}function $m(t){return t.views.size===0}function Ko(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ra(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ra(o,e,n,s));return r}}function qo(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ti(n,i?s:null),a=!1;l?a=!0:s instanceof F?(l=Vo(n,s),a=!1):(l=F.EMPTY_NODE,a=!1);const c=zi(new Wt(l,a,!1),new Wt(s,i,!1));return new Am(e,c)}return o}function Wm(t,e,n,s,i,r){const o=qo(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mm(o,n),Lm(o,n)}function Um(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ut(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Sa(c,n,s)),Ta(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Sa(a,n,s)),Ta(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ut(t)&&r.push(new(Bm())(e._repo,e._path)),{removed:r,events:o}}function sh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||Dm(s,e);return n}function ih(t,e){if(e._queryParams.loadsAllData())return qi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rh(t,e){return ih(t,e)!=null}function Ut(t){return qi(t)!=null}function qi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pi;function Hm(t){b(!Pi,"__referenceConstructor has already been defined"),Pi=t}function jm(){return b(Pi,"Reference.ts has not been loaded"),Pi}let Vm=1;class Na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(t,e,n,s,i){return am(t.pendingWriteTree_,e,n,s,i),i?Ks(t,new nn(zu(),e,n)):[]}function Yt(t,e,n=!1){const s=cm(t.pendingWriteTree_,e);if(um(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Q(),!0):Te(s.children,o=>{r=r.set(new Z(o),!0)}),Ks(t,new wi(s.path,r,n))}else return[]}function zs(t,e,n){return Ks(t,new nn(Ho(),e,n))}function Gm(t,e,n){const s=he.fromObject(n);return Ks(t,new Fs(Ho(),e,s))}function zm(t,e){return Ks(t,new Ls(Ho(),e))}function Km(t,e,n){const s=Qo(t,n);if(s){const i=Xo(s),r=i.path,o=i.queryId,l=Ne(r,e),a=new Ls(jo(o),l);return Jo(t,r,a)}else return[]}function xi(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||rh(r,e))){const l=Um(r,e,n,s);$m(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Ut(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Xm(h);for(let _=0;_<f.length;++_){const m=f[_],P=m.query,R=hh(t,m);t.listenProvider_.startListening(ys(P),Bs(t,P),R.hashFn,R.onComplete)}}}!u&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(ys(e),null):a.forEach(h=>{const f=t.queryToTagMap.get(Yi(h));t.listenProvider_.stopListening(ys(h),f)})),Jm(t,a)}return o}function qm(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=ah(e,t),o=qo(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:Bs(t,e)}function lh(t,e,n,s){const i=Qo(t,s);if(i!=null){const r=Xo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=new nn(jo(l),a,n);return Jo(t,o,c)}else return[]}function Ym(t,e,n,s){const i=Qo(t,s);if(i){const r=Xo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=he.fromObject(n),u=new Fs(jo(l),a,c);return Jo(t,o,u)}else return[]}function ah(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ne(c,n);s=s||Ft(u,h),i=i||Ut(u)});let r=e.syncPointTree_.get(n);r?(i=i||Ut(r),s=s||Ft(r,Q())):(r=new nh,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=F.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Ft(h,Q());f&&(s=s.updateImmediateChild(u,f))}));const l=rh(r,t);if(!l&&!t._queryParams.loadsAllData()){const c=Yi(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Zm();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const a=Ki(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:a,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function Pa(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:l,foundAncestorDefaultView:a}=ah(e,t);let c=Wm(s,e,n,r,i,o);if(!l&&!a){const u=ih(s,e);c=c.concat(ey(t,e,u))}return c}function Yo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),c=Ft(l,a);if(c)return c});return Qu(i,e,r,n,!0)}function Qm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ne(c,n);s=s||Ft(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,Q()):(i=new nh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),a=qo(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return Om(a)}function Ks(t,e){return ch(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,Q()))}function ch(t,e,n,s){if(V(t.path))return uh(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Ft(i,Q()));let r=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Xu(s,o);r=r.concat(ch(l,a,c,u))}return i&&(r=r.concat(Ko(i,t,s,n))),r}}function uh(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Ft(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Xu(s,o),u=t.operationForChild(o);u&&(r=r.concat(uh(u,l,a,c)))}),i&&(r=r.concat(Ko(i,t,s,n))),r}function hh(t,e){const n=e.query,s=Bs(t,n);return{hashFn:()=>(km(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Km(t,n._path,s):zm(t,n._path);{const r=K_(i,n);return xi(t,n,null,r)}}}}function Bs(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Qo(t,e){return t.tagToQueryMap.get(e)}function Xo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Jo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return Ko(s,n,i,null)}function Xm(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[qi(n)];{let i=[];return n&&(i=sh(n)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function ys(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(jm())(t._repo,t._path):t}function Jm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Zm(){return Vm++}function ey(t,e,n){const s=e._path,i=Bs(t,e),r=hh(t,n),o=t.listenProvider_.startListening(ys(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!V(c)&&u&&Ut(u))return[qi(u).query];{let f=[];return u&&(f=f.concat(sh(u).map(_=>_.query))),Te(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ys(u),Bs(t,u))}}return o}/**
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
 */class Zo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zo(n)}node(){return this.node_}}class el{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new el(this.syncTree_,n)}node(){return Yo(this.syncTree_,this.path_)}}const ty=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xa=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ny(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sy(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ny=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},sy=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},iy=function(t,e,n,s){return tl(e,new el(n,t),s)},fh=function(t,e,n){return tl(t,new Zo(e),n)};function tl(t,e,n){const s=t.getPriority().val(),i=xa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=xa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,de(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(fe,(l,a)=>{const c=tl(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class nl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sl(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=j(n);for(;i!==null;){const r=kn(s.node.children,i)||{children:{},childCount:0};s=new nl(i,s,r),n=re(n),i=j(n)}return s}function qn(t){return t.node.value}function dh(t,e){t.node.value=e,eo(t)}function ph(t){return t.node.childCount>0}function ry(t){return qn(t)===void 0&&!ph(t)}function Qi(t,e){Te(t.node.children,(n,s)=>{e(new nl(n,t,s))})}function _h(t,e,n,s){n&&!s&&e(t),Qi(t,i=>{_h(i,e,!0,s)}),n&&s&&e(t)}function oy(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qs(t){return new Z(t.parent===null?t.name:qs(t.parent)+"/"+t.name)}function eo(t){t.parent!==null&&ly(t.parent,t.name,t)}function ly(t,e,n){const s=ry(n),i=ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eo(t))}/**
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
 */const ay=/[\[\].#$\/\u0000-\u001F\u007F]/,cy=/[\[\].#$\u0000-\u001F\u007F]/,pr=10*1024*1024,il=function(t){return typeof t=="string"&&t.length!==0&&!ay.test(t)},gh=function(t){return typeof t=="string"&&t.length!==0&&!cy.test(t)},uy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gh(t)},mh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vi(t)||t&&typeof t=="object"&&ht(t,".sv")},to=function(t,e,n,s){s&&e===void 0||Xi(On(t,"value"),e,n)},Xi=function(t,e,n){const s=n instanceof Z?new Ng(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+zt(s)+" with contents = "+e.toString());if(Vi(e))throw new Error(t+"contains "+e.toString()+" "+zt(s));if(typeof e=="string"&&e.length>pr/3&&ji(e)>pr)throw new Error(t+"contains a string greater than "+pr+" utf8 bytes "+zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!il(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pg(s,o),Xi(t,l,s),xg(s)}),i&&r)throw new Error(t+' contains ".value" child '+zt(s)+" in addition to actual children.")}},hy=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ks(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!il(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Rg);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},fy=function(t,e,n,s){if(s&&e===void 0)return;const i=On(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,l)=>{const a=new Z(o);if(Xi(i,l,pe(n,a)),Lo(a)===".priority"&&!mh(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),hy(i,r)},dy=function(t,e,n){if(!(n&&e===void 0)){if(Vi(e))throw new Error(On(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!mh(e))throw new Error(On(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},yh=function(t,e,n,s){if(!(s&&n===void 0)&&!gh(n))throw new Error(On(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},py=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yh(t,e,n,s)},us=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_y=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!il(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uy(n))throw new Error(On(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class gy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vh(t,e,n){rl(t,n),Ch(t,s=>Fo(s,e))}function wt(t,e,n){rl(t,n),Ch(t,s=>je(s,e)||je(e,s))}function Ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(my(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function my(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Jt&&be("event: "+n.toString()),zn(s)}}}/**
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
 */const yy="repo_interrupt",vy=25;class Cy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bi(),this.transactionQueueTree_=new nl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ey(t,e,n){if(t.stats_=Do(t.repoInfo_),t.forceRestClient_||X_())t.server_=new Ei(t.repoInfo_,(s,i,r,o)=>{Aa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ka(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(s,i,r,o)=>{Aa(t,s,i,r,o)},s=>{ka(t,s)},s=>{wy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=sg(t.repoInfo_,()=>new nm(t.stats_,t.server_)),t.infoData_=new Xg,t.infoSyncTree_=new Na({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=zs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ll(t,"connected",!1),t.serverSyncTree_=new Na({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);wt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function by(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ol(t){return ty({timestamp:by(t)})}function Aa(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=_i(n,c=>de(c));o=Ym(t.serverSyncTree_,r,a,i)}else{const a=de(n);o=lh(t.serverSyncTree_,r,a,i)}else if(s){const a=_i(n,c=>de(c));o=Gm(t.serverSyncTree_,r,a)}else{const a=de(n);o=zs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ji(t,r)),wt(t.eventQueue_,l,o)}function ka(t,e){ll(t,"connected",e),e===!1&&Sy(t)}function wy(t,e){Te(e,(n,s)=>{ll(t,n,s)})}function ll(t,e,n){const s=new Z("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(s,i);const r=zs(t.infoSyncTree_,s,i);wt(t.eventQueue_,s,r)}function Eh(t){return t.nextWriteId_++}function Iy(t,e){const n=Qm(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=de(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())zs(t.serverSyncTree_,e._path,i);else{const o=qm(t.serverSyncTree_,e);lh(t.serverSyncTree_,e._path,i,o)}return xi(t.serverSyncTree_,e,null).length>0&&$s(t,"unexpected cancel events in repoGetValue"),i},s=>($s(t,"get for query "+ge(e)+" failed: "+s),Promise.reject(new Error(s))))}function Ty(t,e,n,s,i){$s(t,"set",{path:e.toString(),value:n,priority:s});const r=ol(t),o=de(n,s),l=Yo(t.serverSyncTree_,e),a=fh(o,l,r),c=Eh(t),u=oh(t.serverSyncTree_,e,a,c,!0);rl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Oe("set at "+e+" failed: "+f);const P=Yt(t.serverSyncTree_,c,!m);wt(t.eventQueue_,e,P),Fn(t,i,f,_)});const h=Sh(t,e);Ji(t,h),wt(t.eventQueue_,h,[])}function Sy(t){$s(t,"onDisconnectEvents");const e=ol(t),n=bi();Yr(t.onDisconnect_,Q(),(i,r)=>{const o=iy(i,r,t.serverSyncTree_,e);Kn(n,i,o)});let s=[];Yr(n,Q(),(i,r)=>{s=s.concat(zs(t.serverSyncTree_,i,r));const o=Sh(t,i);Ji(t,o)}),t.onDisconnect_=bi(),wt(t.eventQueue_,Q(),s)}function Ry(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&qr(t.onDisconnect_,e),Fn(t,n,s,i)})}function Oa(t,e,n,s){const i=de(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Kn(t.onDisconnect_,e,i),Fn(t,s,r,o)})}function Ny(t,e,n,s,i){const r=de(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Kn(t.onDisconnect_,e,r),Fn(t,i,o,l)})}function Py(t,e,n,s){if(Fr(n)){be("onDisconnect().update() called with empty data.  Don't do anything."),Fn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Te(n,(o,l)=>{const a=de(l);Kn(t.onDisconnect_,pe(e,o),a)}),Fn(t,s,i,r)})}function xy(t,e,n){let s;j(e._path)===".info"?s=Pa(t.infoSyncTree_,e,n):s=Pa(t.serverSyncTree_,e,n),vh(t.eventQueue_,e._path,s)}function Da(t,e,n){let s;j(e._path)===".info"?s=xi(t.infoSyncTree_,e,n):s=xi(t.serverSyncTree_,e,n),vh(t.eventQueue_,e._path,s)}function Ay(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yy)}function $s(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Fn(t,e,n,s){e&&zn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bh(t,e,n){return Yo(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function al(t,e=t.transactionQueueTree_){if(e||Zi(t,e),qn(e)){const n=Ih(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ky(t,qs(e),n)}else ph(e)&&Qi(e,n=>{al(t,n)})}function ky(t,e,n){const s=n.map(c=>c.currentWriteId),i=bh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{$s(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Yt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Zi(t,sl(t.transactionQueueTree_,e)),al(t,t.transactionQueueTree_),wt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)zn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=wh(t,e),s=qs(n),i=Ih(t,n);return Oy(t,i,s),s}function Oy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ne(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=vy)u=!0,h="maxretry",i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=bh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Xi("transaction failed: Data returned ",_,a.path);let m=de(_);typeof _=="object"&&_!=null&&ht(_,".priority")||(m=m.updatePriority(f.getPriority()));const R=a.currentWriteId,x=ol(t),B=fh(m,f,x);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=B,a.currentWriteId=Eh(t),o.splice(o.indexOf(R),1),i=i.concat(oh(t.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)zn(s[l]);al(t,t.transactionQueueTree_)}function wh(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&qn(s)===void 0;)s=sl(s,n),e=re(e),n=j(e);return s}function Ih(t,e){const n=[];return Th(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Th(t,e,n){const s=qn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{Th(t,i,n)})}function Zi(t,e){const n=qn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dh(e,n.length>0?n:void 0)}Qi(e,s=>{Zi(t,s)})}function Sh(t,e){const n=qs(wh(t,e)),s=sl(t.transactionQueueTree_,e);return oy(s,i=>{_r(t,i)}),_r(t,s),_h(s,i=>{_r(t,i)}),n}function _r(t,e){const n=qn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dh(e,void 0):n.length=r+1,wt(t.eventQueue_,qs(e),i);for(let o=0;o<s.length;o++)zn(s[o])}}/**
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
 */function Dy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function My(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ma=function(t,e){const n=Ly(t),s=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||H_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eg(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},Ly=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Dy(t.substring(u,h)));const f=My(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Rh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class Nh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Fy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class By{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new mt;return Ry(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){us("OnDisconnect.remove",this._path);const e=new mt;return Oa(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){us("OnDisconnect.set",this._path),to("OnDisconnect.set",e,this._path,!1);const n=new mt;return Oa(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){us("OnDisconnect.setWithPriority",this._path),to("OnDisconnect.setWithPriority",e,this._path,!1),dy("OnDisconnect.setWithPriority",n,!1);const s=new mt;return Ny(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){us("OnDisconnect.update",this._path),fy("OnDisconnect.update",e,this._path,!1);const n=new mt;return Py(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class cl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:Lo(this._path)}get ref(){return new ft(this._repo,this._path)}get _queryIdentifier(){const e=ma(this._queryParams),n=ko(e);return n==="{}"?"default":n}get _queryObject(){return ma(this._queryParams)}isEqual(e){if(e=Gn(e),!(e instanceof cl))return!1;const n=this._repo===e._repo,s=Fo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sg(this._path)}}class ft extends cl{constructor(e,n){super(e,n,new Uo,!1)}get parent(){const e=Bu(this._path);return e===null?null:new ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=yt(this.ref,e);return new Bn(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bn(i,yt(this.ref,s),fe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ue(t,e){return t=Gn(t),t._checkNotDeleted("ref"),e!==void 0?yt(t._root,e):t._root}function yt(t,e){return t=Gn(t),j(t._path)===null?py("child","path",e,!1):yh("child","path",e,!1),new ft(t._repo,pe(t._path,e))}function La(t){return t=Gn(t),new By(t._repo,t._path)}function pn(t,e){t=Gn(t),us("set",t._path),to("set",e,t._path,!1);const n=new mt;return Ty(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ns(t){return t=Gn(t),Iy(t._repo,t).then(e=>new Bn(e,new ft(t._repo,t._path),t._queryParams.getIndex()))}class ul{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Rh("value",this,new Bn(e.snapshotNode,new ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nh(this,e,n):null}matches(e){return e instanceof ul?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=yt(new ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Rh(e.type,this,new Bn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function $y(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Da(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Fy(n,r||void 0),l=e==="value"?new ul(o):new hl(e,o);return xy(t._repo,t,l),()=>Da(t._repo,t,l)}function ni(t,e,n,s){return $y(t,"value",e,n,s)}Fm(ft);Hm(ft);/**
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
 */const Wy="FIREBASE_DATABASE_EMULATOR_HOST",no={};let Uy=!1;function Hy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ma(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Wy]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ma(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Gr(Gr.OWNER):new Z_(t.name,t.options,e);_y("Invalid Firebase Database URL",o),V(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Vy(l,t,u,new J_(t.name,n));return new Gy(h,t)}function jy(t,e){const n=no[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ay(t),delete n[t.key]}function Vy(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Cy(t,Uy,n,s),i[t.toURLString()]=r,r}class Gy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ey(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ft(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function fl(t=T_(),e){return C_(t,"database").getImmediate({identifier:e})}/**
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
 */function zy(t){F_(w_),mi(new Ps("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Hy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rn(ea,ta,t),Rn(ea,ta,"esm2017")}/**
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
 */const Ky={".sv":"timestamp"};function qy(){return Ky}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zy();const Yy="modulepreload",Qy=function(t){return"/Quiz/"+t},Fa={},ss=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=Qy(i),i in Fa)return;Fa[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Yy,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function Xy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function gr(t,e){const n={};for(const s in e){const i=e[s];n[s]=tt(i)?i.map(t):t(i)}return n}const vs=()=>{},tt=Array.isArray,Jy=/\/$/,Zy=t=>t.replace(Jy,"");function mr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=sv(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function ev(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ba(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&$n(e.matched[s],n.matched[i])&&Ph(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $n(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ph(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nv(t[n],e[n]))return!1;return!0}function nv(t,e){return tt(t)?$a(t,e):tt(e)?$a(e,t):t===e}function $a(t,e){return tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function sv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ws;(function(t){t.pop="pop",t.push="push"})(Ws||(Ws={}));var Cs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cs||(Cs={}));function iv(t){if(!t)if(Cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zy(t)}const rv=/^[^#]+#/;function ov(t,e){return t.replace(rv,"#")+e}function lv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function av(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=lv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wa(t,e){return(history.state?history.state.position-e:-1)+t}const so=new Map;function cv(t,e){so.set(t,e)}function uv(t){const e=so.get(t);return so.delete(t),e}let hv=()=>location.protocol+"//"+location.host;function xh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Ba(a,"")}return Ba(n,t)+s+i}function fv(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=xh(t,location),m=n.value,P=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}R=P?f.position-P.position:0}else s(_);i.forEach(x=>{x(n.value,m,{delta:R,type:Ws.pop,direction:R?R>0?Cs.forward:Cs.back:Cs.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ie({},f.state,{scroll:er()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function Ua(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?er():null}}function dv(t){const{history:e,location:n}=window,s={value:xh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:hv()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ie({},e.state,Ua(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ie({},i.value,e.state,{forward:a,scroll:er()});r(u.current,u,!0);const h=ie({},Ua(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function pv(t){t=iv(t);const e=dv(t),n=fv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:ov.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _v(t){return typeof t=="string"||t&&typeof t=="object"}function Ah(t){return typeof t=="string"||typeof t=="symbol"}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kh=Symbol("");var Ha;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ha||(Ha={}));function Wn(t,e){return ie(new Error,{type:t,[kh]:!0},e)}function Nt(t,e){return t instanceof Error&&kh in t&&(e==null||!!(t.type&e))}const ja="[^/]+?",gv={sensitive:!1,strict:!1,start:!0,end:!0},mv=/[.+*?^${}()[\]/\\]/g;function yv(t,e){const n=ie({},gv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(mv,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:P,optional:R,regexp:x}=f;r.push({name:m,repeatable:P,optional:R});const B=x||ja;if(B!==ja){_+=10;try{new RegExp(`(${B})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+J.message)}}let K=P?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(K=R&&c.length<2?`(?:/${K})`:"/"+K),R&&(K+="?"),i+=K,_+=20,R&&(_+=-8),P&&(_+=-20),B===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:P,optional:R}=_,x=m in c?c[m]:"";if(tt(x)&&!P)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=tt(x)?x.join("/"):x;if(!B)if(R)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=B}}return u}return{re:o,score:s,keys:r,parse:l,stringify:a}}function vv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=vv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Va(s))return 1;if(Va(i))return-1}return i.length-s.length}function Va(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ev={type:0,value:""},bv=/[a-zA-Z0-9_]/;function wv(t){if(!t)return[[]];if(t==="/")return[[Ev]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:bv.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Iv(t,e,n){const s=yv(wv(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Tv(t,e){const n=[],s=new Map;e=za({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=Rv(u);m.aliasOf=f&&f.record;const P=za(e,u),R=[m];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of K)R.push(ie({},m,{components:f?f.record.components:m.components,path:J,aliasOf:f?f.record:m}))}let x,B;for(const K of R){const{path:J}=K;if(h&&J[0]!=="/"){const xe=h.record.path,De=xe[xe.length-1]==="/"?"":"/";K.path=h.record.path+(J&&De+J)}if(x=Iv(K,h,P),f?f.alias.push(x):(B=B||x,B!==x&&B.alias.push(x),_&&u.name&&!Ga(x)&&o(u.name)),m.children){const xe=m.children;for(let De=0;De<xe.length;De++)r(xe[De],x,f&&f.children[De])}f=f||x,a(x)}return B?()=>{o(B)}:vs}function o(u){if(Ah(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Cv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Oh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ga(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,P;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Wn(1,{location:u});P=f.record.name,_=ie(Sv(h.params,f.keys.filter(B=>!B.optional).map(B=>B.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(B=>B.re.test(m)),f&&(_=f.parse(m),P=f.record.name);else{if(f=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!f)throw Wn(1,{location:u,currentLocation:h});P=f.record.name,_=ie({},h.params,u.params),m=f.stringify(_)}const R=[];let x=f;for(;x;)R.unshift(x.record),x=x.parent;return{name:P,path:m,params:_,matched:R,meta:Pv(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Sv(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Rv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ga(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pv(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function za(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Oh(t,e){return e.children.some(n=>n===t||Oh(t,n))}const Dh=/#/g,xv=/&/g,Av=/\//g,kv=/=/g,Ov=/\?/g,Mh=/\+/g,Dv=/%5B/g,Mv=/%5D/g,Lh=/%5E/g,Lv=/%60/g,Fh=/%7B/g,Fv=/%7C/g,Bh=/%7D/g,Bv=/%20/g;function dl(t){return encodeURI(""+t).replace(Fv,"|").replace(Dv,"[").replace(Mv,"]")}function $v(t){return dl(t).replace(Fh,"{").replace(Bh,"}").replace(Lh,"^")}function io(t){return dl(t).replace(Mh,"%2B").replace(Bv,"+").replace(Dh,"%23").replace(xv,"%26").replace(Lv,"`").replace(Fh,"{").replace(Bh,"}").replace(Lh,"^")}function Wv(t){return io(t).replace(kv,"%3D")}function Uv(t){return dl(t).replace(Dh,"%23").replace(Ov,"%3F")}function Hv(t){return t==null?"":Uv(t).replace(Av,"%2F")}function Ai(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Mh," "),o=r.indexOf("="),l=Ai(o<0?r:r.slice(0,o)),a=o<0?null:Ai(r.slice(o+1));if(l in e){let c=e[l];tt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Ka(t){let e="";for(let n in t){const s=t[n];if(n=Wv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&io(r)):[s&&io(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Vv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Gv=Symbol(""),qa=Symbol(""),pl=Symbol(""),$h=Symbol(""),ro=Symbol("");function is(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function At(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Wn(4,{from:n,to:e})):h instanceof Error?l(h):_v(h)?l(Wn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function yr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(zv(l)){const c=(l.__vccOpts||l)[e];c&&i.push(At(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Xy(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&At(f,n,s,r,o)()}))}}return i}function zv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ya(t){const e=Dt(pl),n=Dt($h),s=He(()=>e.resolve(Sn(t.to))),i=He(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex($n.bind(null,u));if(f>-1)return f;const _=Qa(a[c-2]);return c>1&&Qa(u)===_&&h[h.length-1].path!==_?h.findIndex($n.bind(null,a[c-2])):f}),r=He(()=>i.value>-1&&Qv(n.params,s.value.params)),o=He(()=>i.value>-1&&i.value===n.matched.length-1&&Ph(n.params,s.value.params));function l(a={}){return Yv(a)?e[Sn(t.replace)?"replace":"push"](Sn(t.to)).catch(vs):Promise.resolve()}return{route:s,href:He(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Kv=Mc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ya,setup(t,{slots:e}){const n=Us(Ya(t)),{options:s}=Dt(pl),i=He(()=>({[Xa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),qv=Kv;function Yv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Qa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xa=(t,e,n)=>t!=null?t:e!=null?e:n,Xv=Mc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(ro),i=He(()=>t.route||s.value),r=Dt(qa,0),o=He(()=>{let c=Sn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=He(()=>i.value.matched[o.value]);ii(qa,He(()=>o.value+1)),ii(Gv,l),ii(ro,i);const a=Af();return ri(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!$n(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=i.value,u=l.value,h=u&&u.components[t.name],f=t.name;if(!h)return Ja(n.default,{Component:h,route:c});const _=u.props[t.name],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,R=Zc(h,ie({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Ja(n.default,{Component:R,route:c})||R}}});function Ja(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jv=Xv;function Zv(t){const e=Tv(t.routes,t),n=t.parseQuery||jv,s=t.stringifyQuery||Ka,i=t.history,r=is(),o=is(),l=is(),a=kf(Rt);let c=Rt;Cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gr.bind(null,y=>""+y),h=gr.bind(null,Hv),f=gr.bind(null,Ai);function _(y,k){let S,O;return Ah(y)?(S=e.getRecordMatcher(y),O=k):O=y,e.addRoute(O,S)}function m(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function P(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function x(y,k){if(k=ie({},k||a.value),typeof y=="string"){const U=mr(n,y,k.path),d=e.resolve({path:U.path},k),p=i.createHref(U.fullPath);return ie(U,d,{params:f(d.params),hash:Ai(U.hash),redirectedFrom:void 0,href:p})}let S;if("path"in y)S=ie({},y,{path:mr(n,y.path,k.path).path});else{const U=ie({},y.params);for(const d in U)U[d]==null&&delete U[d];S=ie({},y,{params:h(y.params)}),k.params=h(k.params)}const O=e.resolve(S,k),te=y.hash||"";O.params=u(f(O.params));const le=ev(s,ie({},y,{hash:$v(te),path:O.path})),z=i.createHref(le);return ie({fullPath:le,hash:te,query:s===Ka?Vv(y.query):y.query||{}},O,{redirectedFrom:void 0,href:z})}function B(y){return typeof y=="string"?mr(n,y,a.value.path):ie({},y)}function K(y,k){if(c!==y)return Wn(8,{from:k,to:y})}function J(y){return dt(y)}function xe(y){return J(ie(B(y),{replace:!0}))}function De(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:S}=k;let O=typeof S=="function"?S(y):S;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=B(O):{path:O},O.params={}),ie({query:y.query,hash:y.hash,params:"path"in O?{}:y.params},O)}}function dt(y,k){const S=c=x(y),O=a.value,te=y.state,le=y.force,z=y.replace===!0,U=De(S);if(U)return dt(ie(B(U),{state:te,force:le,replace:z}),k||S);const d=S;d.redirectedFrom=k;let p;return!le&&tv(s,O,S)&&(p=Wn(16,{to:d,from:O}),hn(O,O,!0,!1)),(p?Promise.resolve(p):nt(d,O)).catch(g=>Nt(g)?Nt(g,2)?g:Me(g):oe(g,d,O)).then(g=>{if(g){if(Nt(g,2))return dt(ie(B(g.to),{state:te,force:le,replace:z}),k||d)}else g=pt(d,O,!0,z,te);return Tt(d,O,g),g})}function ln(y,k){const S=K(y,k);return S?Promise.reject(S):Promise.resolve()}function nt(y,k){let S;const[O,te,le]=eC(y,k);S=yr(O.reverse(),"beforeRouteLeave",y,k);for(const U of O)U.leaveGuards.forEach(d=>{S.push(At(d,y,k))});const z=ln.bind(null,y,k);return S.push(z),_n(S).then(()=>{S=[];for(const U of r.list())S.push(At(U,y,k));return S.push(z),_n(S)}).then(()=>{S=yr(te,"beforeRouteUpdate",y,k);for(const U of te)U.updateGuards.forEach(d=>{S.push(At(d,y,k))});return S.push(z),_n(S)}).then(()=>{S=[];for(const U of y.matched)if(U.beforeEnter&&!k.matched.includes(U))if(tt(U.beforeEnter))for(const d of U.beforeEnter)S.push(At(d,y,k));else S.push(At(U.beforeEnter,y,k));return S.push(z),_n(S)}).then(()=>(y.matched.forEach(U=>U.enterCallbacks={}),S=yr(le,"beforeRouteEnter",y,k),S.push(z),_n(S))).then(()=>{S=[];for(const U of o.list())S.push(At(U,y,k));return S.push(z),_n(S)}).catch(U=>Nt(U,8)?U:Promise.reject(U))}function Tt(y,k,S){for(const O of l.list())O(y,k,S)}function pt(y,k,S,O,te){const le=K(y,k);if(le)return le;const z=k===Rt,U=Cn?history.state:{};S&&(O||z?i.replace(y.fullPath,ie({scroll:z&&U&&U.scroll},te)):i.push(y.fullPath,te)),a.value=y,hn(y,k,S,z),Me()}let Ve;function an(){Ve||(Ve=i.listen((y,k,S)=>{if(!Yn.listening)return;const O=x(y),te=De(O);if(te){dt(ie(te,{replace:!0}),O).catch(vs);return}c=O;const le=a.value;Cn&&cv(Wa(le.fullPath,S.delta),er()),nt(O,le).catch(z=>Nt(z,12)?z:Nt(z,2)?(dt(z.to,O).then(U=>{Nt(U,20)&&!S.delta&&S.type===Ws.pop&&i.go(-1,!1)}).catch(vs),Promise.reject()):(S.delta&&i.go(-S.delta,!1),oe(z,O,le))).then(z=>{z=z||pt(O,le,!1),z&&(S.delta?i.go(-S.delta,!1):S.type===Ws.pop&&Nt(z,20)&&i.go(-1,!1)),Tt(O,le,z)}).catch(vs)}))}let cn=is(),un=is(),_e;function oe(y,k,S){Me(y);const O=un.list();return O.length?O.forEach(te=>te(y,k,S)):console.error(y),Promise.reject(y)}function ee(){return _e&&a.value!==Rt?Promise.resolve():new Promise((y,k)=>{cn.add([y,k])})}function Me(y){return _e||(_e=!y,an(),cn.list().forEach(([k,S])=>y?S(y):k()),cn.reset()),y}function hn(y,k,S,O){const{scrollBehavior:te}=t;if(!Cn||!te)return Promise.resolve();const le=!S&&uv(Wa(y.fullPath,0))||(O||!S)&&history.state&&history.state.scroll||null;return Tc().then(()=>te(y,k,le)).then(z=>z&&av(z)).catch(z=>oe(z,y,k))}const _t=y=>i.go(y);let st;const $e=new Set,Yn={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:P,resolve:x,options:t,push:J,replace:xe,go:_t,back:()=>_t(-1),forward:()=>_t(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:un.add,isReady:ee,install(y){const k=this;y.component("RouterLink",qv),y.component("RouterView",Jv),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(a)}),Cn&&!st&&a.value===Rt&&(st=!0,J(i.location).catch(te=>{}));const S={};for(const te in Rt)S[te]=He(()=>a.value[te]);y.provide(pl,k),y.provide($h,Us(S)),y.provide(ro,a);const O=y.unmount;$e.add(y),y.unmount=function(){$e.delete(y),$e.size<1&&(c=Rt,Ve&&Ve(),Ve=null,a.value=Rt,st=!1,_e=!1),O()}}};return Yn}function _n(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function eC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>$n(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>$n(c,a))||i.push(a))}return[n,s,i]}const tC={data(){return{userName:Et.data().userName,onUserName:function(t){let e=t.target.value,n=Et.data().userName;e.length>3?Et.data().setUserName(e):t.target.value=n}}}},nC={id:"menu"},sC=D("h1",null,"Menu",-1),iC=Hs("Join Game"),rC=Hs("Create Game"),oC=Hs("Find Pack"),lC=Hs("Create Pack"),aC=["value"];function cC(t,e,n,s,i,r){const o=Nr("router-link");return Io(),To("div",nC,[sC,D("ul",null,[D("li",null,[me(o,{to:"/joinGame"},{default:cs(()=>[iC]),_:1})]),D("li",null,[me(o,{to:"/createGame"},{default:cs(()=>[rC]),_:1})]),D("li",null,[me(o,{to:"/findPack"},{default:cs(()=>[oC]),_:1})]),D("li",null,[me(o,{to:"/createPack"},{default:cs(()=>[lC]),_:1})]),D("input",{type:"text",value:i.userName,onChange:e[0]||(e[0]=l=>i.onUserName(l))},null,40,aC)])])}const uC=Hi(tC,[["render",cC]]),ci=Zv({history:pv("/Quiz/"),routes:[{path:"/",name:"Menu",component:uC},{path:"/joinGame",name:"joinGame",component:()=>ss(()=>import("./JoinGame.b65cd075.js"),["assets/JoinGame.b65cd075.js","assets/JoinGame.37a37249.css"])},{path:"/createGame",name:"createGame",component:()=>ss(()=>import("./CreateGame.fb50f457.js"),["assets/CreateGame.fb50f457.js","assets/CreateGame.29a1254a.css","assets/Packs.ea74edb4.js","assets/Packs.b665a396.css"])},{path:"/findPack",name:"findPack",component:()=>ss(()=>import("./FindPack.dea42286.js"),["assets/FindPack.dea42286.js","assets/FindPack.2e32aa02.css","assets/Packs.ea74edb4.js","assets/Packs.b665a396.css"])},{path:"/createPack",name:"createPack",component:()=>ss(()=>import("./CreatePack.3bfb4669.js"),[])},{path:"/game",name:"game",component:()=>ss(()=>Promise.resolve().then(()=>PC),void 0)}]}),hC={props:["nickName"]};function fC(t,e,n,s,i,r){return null}const dC=Hi(hC,[["render",fC]]);const pC={components:{PlayersInGame:dC},data(){return{pickedGame:Et.data().pickedGame,players:Et.data().pickedGame.players,showPlayers:function(){for(;document.getElementById("playersBlock").firstElementChild;)document.getElementById("playersBlock").firstElementChild.remove();let t=this.players.filter(e=>e.inGame==!0);console.log(t);for(let e=0;e<t.length;e++)document.getElementById("playersBlock").insertAdjacentHTML("beforeend",`
                        <div class="player">
                        <img src="#" alt="Icon">
                        <label class="playersNick">${t[e].name}</label>
                        <label class="playersPoints">${t[e].points?t[e].points:0}</label>
                    </div>`)}}}},_C={id:"game"},gC=D("div",{id:"roundChange"},null,-1),mC={id:"gameBlock"},yC={id:"headerOfGame"},vC={id:"tableWithQuestions"},CC=xd('<input disabled="disabled" value="Category"><div class="points">100</div><div class="points">200</div><div class="points">300</div><div class="points">400</div><div class="points">500</div><div class="category"></div>',7),EC=D("div",{class:"category"},null,-1),bC=D("div",{class:"category"},null,-1),wC=D("div",{class:"category"},null,-1),IC=D("div",{class:"category"},null,-1),TC=D("div",{class:"category"},null,-1),SC=D("div",{class:"category"},null,-1),RC=D("div",{id:"playersBlock"},null,-1);function NC(t,e,n,s,i,r){return Io(),To("div",_C,[gC,D("div",mC,[D("div",yC,[D("label",null,Kh(i.pickedGame.name),1)]),D("div",vC,[CC,D("div",{onClick:e[0]||(e[0]=o=>t.onclick(o))}),D("div",{onClick:e[1]||(e[1]=o=>t.onclick(o))}),D("div",{onClick:e[2]||(e[2]=o=>t.onclick(o))}),D("div",{onClick:e[3]||(e[3]=o=>t.onclick(o))}),D("div",{onClick:e[4]||(e[4]=o=>t.onclick(o))}),EC,D("div",{onClick:e[5]||(e[5]=o=>t.onclick(o))}),D("div",{onClick:e[6]||(e[6]=o=>t.onclick(o))}),D("div",{onClick:e[7]||(e[7]=o=>t.onclick(o))}),D("div",{onClick:e[8]||(e[8]=o=>t.onclick(o))}),D("div",{onClick:e[9]||(e[9]=o=>t.onclick(o))}),bC,D("div",{onClick:e[10]||(e[10]=o=>t.onclick(o))}),D("div",{onClick:e[11]||(e[11]=o=>t.onclick(o))}),D("div",{onClick:e[12]||(e[12]=o=>t.onclick(o))}),D("div",{onClick:e[13]||(e[13]=o=>t.onclick(o))}),D("div",{onClick:e[14]||(e[14]=o=>t.onclick(o))}),wC,D("div",{onClick:e[15]||(e[15]=o=>t.onclick(o))}),D("div",{onClick:e[16]||(e[16]=o=>t.onclick(o))}),D("div",{onClick:e[17]||(e[17]=o=>t.onclick(o))}),D("div",{onClick:e[18]||(e[18]=o=>t.onclick(o))}),D("div",{onClick:e[19]||(e[19]=o=>t.onclick(o))}),IC,D("div",{onClick:e[20]||(e[20]=o=>t.onclick(o))}),D("div",{onClick:e[21]||(e[21]=o=>t.onclick(o))}),D("div",{onClick:e[22]||(e[22]=o=>t.onclick(o))}),D("div",{onClick:e[23]||(e[23]=o=>t.onclick(o))}),D("div",{onClick:e[24]||(e[24]=o=>t.onclick(o))}),TC,D("div",{onClick:e[25]||(e[25]=o=>t.onclick(o))}),D("div",{onClick:e[26]||(e[26]=o=>t.onclick(o))}),D("div",{onClick:e[27]||(e[27]=o=>t.onclick(o))}),D("div",{onClick:e[28]||(e[28]=o=>t.onclick(o))}),D("div",{onClick:e[29]||(e[29]=o=>t.onclick(o))}),SC,D("div",{onClick:e[30]||(e[30]=o=>t.onclick(o))}),D("div",{onClick:e[31]||(e[31]=o=>t.onclick(o))}),D("div",{onClick:e[32]||(e[32]=o=>t.onclick(o))}),D("div",{onClick:e[33]||(e[33]=o=>t.onclick(o))}),D("div",{onClick:e[34]||(e[34]=o=>t.onclick(o))})]),RC])])}const hs=Hi(pC,[["render",NC]]),PC=Object.freeze(Object.defineProperty({__proto__:null,default:hs},Symbol.toStringTag,{value:"Module"})),xC={apiKey:"API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",databaseURL:"https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"PROJECT_ID",storageBucket:"PROJECT_ID.appspot.com",messagingSenderId:"SENDER_ID",appId:"APP_ID",measurementId:"G-MEASUREMENT_ID"},AC=I_(xC),rs=fl(AC),os=Ue(fl()),gn=fl();let Se,Za=[],We,mn,ec=[],vr,ze,Ke,Cr;const Et={components:{Game:hs},data(){return{setData:function(t,e){console.log("start"),pn(Ue(rs,t),e).then(()=>{console.log("fifnish")})},getPacksData:async function(){ns(yt(os,"packs/")).then(t=>{if(t.exists())return Cr=t.val(),console.log(Cr),t.val();console.log("No data available")})},authFirebase:async function(){if(localStorage.getItem("uid")===null){ns(yt(os,"users/")).then(t=>{t.exists()?Za=Object.keys(t.val()):console.log("No data available")}).catch(t=>{console.error(t)});do Se=Math.floor(Math.random()*Math.pow(10,12)),We=`User${Se.toString().substring(0,4)}`;while(Za.findIndex(t=>t==Se)!==-1);pn(Ue(rs,`users/${Se}`),{name:We}).then(()=>{localStorage.setItem("uid",Se),localStorage.setItem("userName",We)})}else Se=localStorage.getItem("uid"),We=localStorage.getItem("userName")},setUserName:function(t){We=t,pn(Ue(rs,`users/${Se}`),{name:We}).then(()=>{localStorage.setItem("userName",We)})},createGame:function(t,e,n,s){ns(yt(os,"rooms/")).then(i=>{if(i.exists())ec=Object.keys(i.val());else return mn=Math.floor(Math.random()*Math.pow(10,12))}).catch(i=>{console.error(i)});do mn=Math.floor(Math.random()*Math.pow(10,12));while(ec.findIndex(i=>i==mn)!==-1);Ke={name:t,host:{id:Se,name:We},answerType:e,toJoin:n,pickedPack:s,ID:mn,players:[{id:Se,name:We,inGame:!0}]},pn(Ue(rs,`rooms/${mn}`),Ke).then(()=>{ni(Ue(gn,`rooms/${mn}`),i=>{Ke=i.val(),hs.data().showPlayers(),console.log(Ke)})}).then(()=>{ze=[],ze.push({id:Se,name:We,inGame:!0}),ci.push("/game")})},getGameRooms:function(){ns(yt(os,"rooms/")).then(t=>{t.exists()&&(vr=t.val(),console.log(vr))}).catch(t=>{console.error(t)})},joinGameRoom:function(t){ns(yt(os,`rooms/${t}/`)).then(e=>{e.exists()&&(Ke=e.val(),console.log(Ke),ze=[],ze=e.val().players,console.log(ze))}).catch(e=>{console.error(e)}).then(()=>{let e=ze.findIndex(n=>n.id==Se);e==-1?(ze.push({id:Se,name:We,inGame:!0}),console.log(ze),pn(Ue(rs,`rooms/${t}/players`),ze).then(()=>{ni(Ue(gn,`rooms/${t}`),n=>{Ke=n.val(),hs.data().showPlayers(),console.log(Ke)})}).then(()=>{ci.push("/game")})):(ni(Ue(gn,`rooms/${t}`),n=>{Ke=n.val(),hs.data().showPlayers(),console.log(Ke)}),ze[e].inGame=!0,ci.push("/game"))}).then(()=>{let e=ze.findIndex(r=>r.id==Se);const n=Ue(gn,`rooms/${t}/players/${e}/inGame`),s=Ue(gn,`users/${Se}/lastOnline`),i=Ue(gn,".info/connected");ni(i,r=>{r.val()===!0&&(La(n).remove(),pn(n,!0),La(s).set(qy()))})})},pickedGame:Ke,gameRooms:vr,uid:Se,userName:We,packs:Cr}}};Et.data().authFirebase();Et.data().getPacksData();Et.data().getGameRooms();console.log(Et.data().userName);const kC={};function OC(t,e,n,s,i,r){const o=Nr("Loader"),l=Nr("RouterView");return Io(),To(lt,null,[me(o),me(l)],64)}const DC=Hi(kC,[["render",OC]]);const Wh=cp(DC);Wh.use(ci);Wh.mount("#app");export{lt as F,Hi as _,D as a,me as b,To as c,MC as d,LC as e,Et as f,Hs as g,xd as h,ci as i,ao as n,Io as o,Nr as r,Kh as t,cs as w};
