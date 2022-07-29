const Wh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Wh();function oo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Uh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=oo(Uh);function tc(t){return!!t||t===""}function lo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?zh(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(be(t))return t;if(ye(t))return t}}const Gh=/;(?![^(]*\))/g,Vh=/:(.+)/;function zh(t){const e={};return t.split(Gh).forEach(n=>{if(n){const s=n.split(Vh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ao(t){let e="";if(be(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=ao(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kh=t=>be(t)?t:t==null?"":H(t)||ye(t)&&(t.toString===rc||!U(t.toString))?JSON.stringify(t,nc,2):String(t),nc=(t,e)=>e&&e.__v_isRef?nc(t,e.value):Tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:sc(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!H(e)&&!oc(e)?String(e):e,ce={},Sn=[],Ze=()=>{},qh=()=>!1,Yh=/^on[^a-z]/,Oi=t=>Yh.test(t),co=t=>t.startsWith("onUpdate:"),Ae=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qh=Object.prototype.hasOwnProperty,q=(t,e)=>Qh.call(t,e),H=Array.isArray,Tn=t=>Di(t)==="[object Map]",sc=t=>Di(t)==="[object Set]",U=t=>typeof t=="function",be=t=>typeof t=="string",ho=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",ic=t=>ye(t)&&U(t.then)&&U(t.catch),rc=Object.prototype.toString,Di=t=>rc.call(t),Xh=t=>Di(t).slice(8,-1),oc=t=>Di(t)==="[object Object]",fo=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jh=/-(\w)/g,pt=Mi(t=>t.replace(Jh,(e,n)=>n?n.toUpperCase():"")),Zh=/\B([A-Z])/g,jn=Mi(t=>t.replace(Zh,"-$1").toLowerCase()),Li=Mi(t=>t.charAt(0).toUpperCase()+t.slice(1)),tr=Mi(t=>t?`on${Li(t)}`:""),ws=(t,e)=>!Object.is(t,e),nr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ef=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vl;const tf=()=>vl||(vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class nf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function sf(t,e=ut){e&&e.active&&e.effects.push(t)}const po=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lc=t=>(t.w&Ut)>0,ac=t=>(t.n&Ut)>0,rf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},of=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];lc(i)&&!ac(i)?i.delete(t):e[n++]=i,i.w&=~Ut,i.n&=~Ut}e.length=n}},Er=new WeakMap;let cs=0,Ut=1;const br=30;let Ye;const tn=Symbol(""),wr=Symbol("");class _o{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sf(this,s)}run(){if(!this.active)return this.fn();let e=Ye,n=Lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,Lt=!0,Ut=1<<++cs,cs<=br?rf(this):Cl(this),this.fn()}finally{cs<=br&&of(this),Ut=1<<--cs,Ye=this.parent,Lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(Cl(this),this.onStop&&this.onStop(),this.active=!1)}}function Cl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Lt=!0;const cc=[];function Gn(){cc.push(Lt),Lt=!1}function Vn(){const t=cc.pop();Lt=t===void 0?!0:t}function He(t,e,n){if(Lt&&Ye){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=po()),uc(i)}}function uc(t,e){let n=!1;cs<=br?ac(t)||(t.n|=Ut,n=!lc(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function Tt(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?fo(n)&&l.push(o.get("length")):(l.push(o.get(tn)),Tn(t)&&l.push(o.get(wr)));break;case"delete":H(t)||(l.push(o.get(tn)),Tn(t)&&l.push(o.get(wr)));break;case"set":Tn(t)&&l.push(o.get(tn));break}if(l.length===1)l[0]&&Ir(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ir(po(a))}}function Ir(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&El(s);for(const s of n)s.computed||El(s)}function El(t,e){(t!==Ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const lf=oo("__proto__,__v_isRef,__isVue"),hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ho)),af=mo(),cf=mo(!1,!0),uf=mo(!0),bl=hf();function hf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)He(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn();const s=X(this)[e].apply(this,n);return Vn(),s}}),t}function mo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Rf:mc:e?_c:pc).get(s))return s;const o=H(s);if(!t&&o&&q(bl,i))return Reflect.get(bl,i,r);const l=Reflect.get(s,i,r);return(ho(i)?hc.has(i):lf(i))||(t||He(s,"get",i),e)?l:Te(l)?o&&fo(i)?l:l.value:ye(l)?t?gc(l):js(l):l}}const ff=fc(),df=fc(!0);function fc(t=!1){return function(n,s,i,r){let o=n[s];if(Is(o)&&Te(o)&&!Te(i))return!1;if(!t&&!Is(i)&&(Sr(i)||(i=X(i),o=X(o)),!H(n)&&Te(o)&&!Te(i)))return o.value=i,!0;const l=H(n)&&fo(s)?Number(s)<n.length:q(n,s),a=Reflect.set(n,s,i,r);return n===X(r)&&(l?ws(i,o)&&Tt(n,"set",s,i):Tt(n,"add",s,i)),a}}function pf(t,e){const n=q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Tt(t,"delete",e,void 0),s}function _f(t,e){const n=Reflect.has(t,e);return(!ho(e)||!hc.has(e))&&He(t,"has",e),n}function mf(t){return He(t,"iterate",H(t)?"length":tn),Reflect.ownKeys(t)}const dc={get:af,set:ff,deleteProperty:pf,has:_f,ownKeys:mf},gf={get:uf,set(t,e){return!0},deleteProperty(t,e){return!0}},yf=Ae({},dc,{get:cf,set:df}),go=t=>t,Fi=t=>Reflect.getPrototypeOf(t);function Xs(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);n||(e!==r&&He(i,"get",e),He(i,"get",r));const{has:o}=Fi(i),l=s?go:n?Co:Ss;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Js(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return e||(t!==i&&He(s,"has",t),He(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zs(t,e=!1){return t=t.__v_raw,!e&&He(X(t),"iterate",tn),Reflect.get(t,"size",t)}function wl(t){t=X(t);const e=X(this);return Fi(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function Il(t,e){e=X(e);const n=X(this),{has:s,get:i}=Fi(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ws(e,o)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function Sl(t){const e=X(this),{has:n,get:s}=Fi(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tt(e,"delete",t,void 0),r}function Tl(){const t=X(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function ei(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),a=e?go:t?Co:Ss;return!t&&He(l,"iterate",tn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function ti(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=Tn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?go:e?Co:Ss;return!e&&He(r,"iterate",a?wr:tn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xt(t){return function(...e){return t==="delete"?!1:this}}function vf(){const t={get(r){return Xs(this,r)},get size(){return Zs(this)},has:Js,add:wl,set:Il,delete:Sl,clear:Tl,forEach:ei(!1,!1)},e={get(r){return Xs(this,r,!1,!0)},get size(){return Zs(this)},has:Js,add:wl,set:Il,delete:Sl,clear:Tl,forEach:ei(!1,!0)},n={get(r){return Xs(this,r,!0)},get size(){return Zs(this,!0)},has(r){return Js.call(this,r,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:ei(!0,!1)},s={get(r){return Xs(this,r,!0,!0)},get size(){return Zs(this,!0)},has(r){return Js.call(this,r,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ti(r,!1,!1),n[r]=ti(r,!0,!1),e[r]=ti(r,!1,!0),s[r]=ti(r,!0,!0)}),[t,n,e,s]}const[Cf,Ef,bf,wf]=vf();function yo(t,e){const n=e?t?wf:bf:t?Ef:Cf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const If={get:yo(!1,!1)},Sf={get:yo(!1,!0)},Tf={get:yo(!0,!1)},pc=new WeakMap,_c=new WeakMap,mc=new WeakMap,Rf=new WeakMap;function Nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(t){return t.__v_skip||!Object.isExtensible(t)?0:Nf(Xh(t))}function js(t){return Is(t)?t:vo(t,!1,dc,If,pc)}function xf(t){return vo(t,!1,yf,Sf,_c)}function gc(t){return vo(t,!0,gf,Tf,mc)}function vo(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Pf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Rn(t){return Is(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Sr(t){return!!(t&&t.__v_isShallow)}function yc(t){return Rn(t)||Is(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function vc(t){return hi(t,"__v_skip",!0),t}const Ss=t=>ye(t)?js(t):t,Co=t=>ye(t)?gc(t):t;function Cc(t){Lt&&Ye&&(t=X(t),uc(t.dep||(t.dep=po())))}function Ec(t,e){t=X(t),t.dep&&Ir(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Af(t){return bc(t,!1)}function kf(t){return bc(t,!0)}function bc(t,e){return Te(t)?t:new Of(t,e)}class Of{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Ss(e)}get value(){return Cc(this),this._value}set value(e){e=this.__v_isShallow?e:X(e),ws(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ss(e),Ec(this))}}function Nn(t){return Te(t)?t.value:t}const Df={get:(t,e,n)=>Nn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wc(t){return Rn(t)?t:new Proxy(t,Df)}class Mf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _o(e,()=>{this._dirty||(this._dirty=!0,Ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=X(this);return Cc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new Mf(s,i,r||!i,n)}function Ft(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Bi(r,e,n)}return i}function et(t,e,n,s){if(U(t)){const r=Ft(t,e,n,s);return r&&ic(r)&&r.catch(o=>{Bi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(et(t[r],e,n,s));return i}function Bi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Ft(a,null,10,[t,o,l]);return}}Ff(t,n,i,s)}function Ff(t,e,n,s=!0){console.error(t)}let fi=!1,Tr=!1;const $e=[];let Et=0;const ps=[];let us=null,Cn=0;const _s=[];let Ot=null,En=0;const Ic=Promise.resolve();let Eo=null,Rr=null;function Sc(t){const e=Eo||Ic;return t?e.then(this?t.bind(this):t):e}function Bf(t){let e=Et+1,n=$e.length;for(;e<n;){const s=e+n>>>1;Ts($e[s])<t?e=s+1:n=s}return e}function Tc(t){(!$e.length||!$e.includes(t,fi&&t.allowRecurse?Et+1:Et))&&t!==Rr&&(t.id==null?$e.push(t):$e.splice(Bf(t.id),0,t),Rc())}function Rc(){!fi&&!Tr&&(Tr=!0,Eo=Ic.then(xc))}function $f(t){const e=$e.indexOf(t);e>Et&&$e.splice(e,1)}function Nc(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Rc()}function Hf(t){Nc(t,us,ps,Cn)}function Wf(t){Nc(t,Ot,_s,En)}function $i(t,e=null){if(ps.length){for(Rr=e,us=[...new Set(ps)],ps.length=0,Cn=0;Cn<us.length;Cn++)us[Cn]();us=null,Cn=0,Rr=null,$i(t,e)}}function Pc(t){if($i(),_s.length){const e=[...new Set(_s)];if(_s.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,s)=>Ts(n)-Ts(s)),En=0;En<Ot.length;En++)Ot[En]();Ot=null,En=0}}const Ts=t=>t.id==null?1/0:t.id;function xc(t){Tr=!1,fi=!0,$i(t),$e.sort((n,s)=>Ts(n)-Ts(s));const e=Ze;try{for(Et=0;Et<$e.length;Et++){const n=$e[Et];n&&n.active!==!1&&Ft(n,null,14)}}finally{Et=0,$e.length=0,Pc(),fi=!1,Eo=null,($e.length||ps.length||_s.length)&&xc(t)}}function Uf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ce;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(ef))}let l,a=s[l=tr(e)]||s[l=tr(pt(e))];!a&&r&&(a=s[l=tr(jn(e))]),a&&et(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,et(c,t,6,i)}}function Ac(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=Ac(c,e,!0);u&&(l=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Ae(o,r),s.set(t,o),o)}function Hi(t,e){return!t||!Oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,jn(e))||q(t,e))}let dt=null,kc=null;function di(t){const e=dt;return dt=t,kc=t&&t.type.__scopeId||null,e}function hs(t,e=dt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ll(-1);const r=di(e),o=t(...i);return di(r),s._d&&Ll(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function sr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:g,inheritAttrs:P}=t;let R,x;const B=di(t);try{if(n.shapeFlag&4){const J=i||s;R=ft(u.call(J,J,h,r,_,f,g)),x=a}else{const J=e;R=ft(J.length>1?J(r,{attrs:a,slots:l,emit:c}):J(r,null)),x=e.props?a:jf(a)}}catch(J){ms.length=0,Bi(J,t,1),R=ge(Rs)}let K=R;if(x&&P!==!1){const J=Object.keys(x),{shapeFlag:ke}=K;J.length&&ke&7&&(o&&J.some(co)&&(x=Gf(x,o)),K=kn(K,x))}return n.dirs&&(K=kn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),R=K,di(B),R}const jf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oi(n))&&((e||(e={}))[n]=t[n]);return e},Gf=(t,e)=>{const n={};for(const s in t)(!co(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Rl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Hi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Rl(s,o,c):!0:!!o;return!1}function Rl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hi(n,r))return!0}return!1}function zf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kf=t=>t.__isSuspense;function qf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Wf(t)}function oi(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function Bt(t,e,n=!1){const s=Ie||dt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Nl={};function li(t,e,n){return Oc(t,e,n)}function Oc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=Ie;let a,c=!1,u=!1;if(Te(t)?(a=()=>t.value,c=Sr(t)):Rn(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(x=>Rn(x)||Sr(x)),a=()=>t.map(x=>{if(Te(x))return x.value;if(Rn(x))return wn(x);if(U(x))return Ft(x,l,2)})):U(t)?e?a=()=>Ft(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),et(t,l,3,[f])}:a=Ze,e&&s){const x=a;a=()=>wn(x())}let h,f=x=>{h=R.onStop=()=>{Ft(x,l,4)}};if(Ps)return f=Ze,e?n&&et(e,l,3,[a(),u?[]:void 0,f]):a(),Ze;let _=u?[]:Nl;const g=()=>{if(!!R.active)if(e){const x=R.run();(s||c||(u?x.some((B,K)=>ws(B,_[K])):ws(x,_)))&&(h&&h(),et(e,l,3,[x,_===Nl?void 0:_,f]),_=x)}else R.run()};g.allowRecurse=!!e;let P;i==="sync"?P=g:i==="post"?P=()=>Oe(g,l&&l.suspense):P=()=>Hf(g);const R=new _o(a,P);return e?n?g():_=R.run():i==="post"?Oe(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&uo(l.scope.effects,R)}}function Yf(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Ie;On(this);const l=Oc(i,r.bind(s),n);return o?On(o):nn(),l}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function wn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))wn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)wn(t[n],e);else if(sc(t)||Tn(t))t.forEach(n=>{wn(n,e)});else if(oc(t))for(const n in t)wn(t[n],e);return t}function Mc(t){return U(t)?{setup:t,name:t.name}:t}const ai=t=>!!t.type.__asyncLoader,Lc=t=>t.type.__isKeepAlive;function Qf(t,e){Fc(t,"a",e)}function Xf(t,e){Fc(t,"da",e)}function Fc(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Lc(i.parent.vnode)&&Jf(s,e,n,i),i=i.parent}}function Jf(t,e,n,s){const i=Wi(e,t,s,!0);Bc(()=>{uo(s[e],i)},n)}function Wi(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),On(n);const l=et(e,n,t,o);return nn(),Vn(),l});return s?i.unshift(r):i.push(r),r}}const Nt=t=>(e,n=Ie)=>(!Ps||t==="sp")&&Wi(t,e,n),Zf=Nt("bm"),ed=Nt("m"),td=Nt("bu"),nd=Nt("u"),sd=Nt("bum"),Bc=Nt("um"),id=Nt("sp"),rd=Nt("rtg"),od=Nt("rtc");function ld(t,e=Ie){Wi("ec",t,e)}function zt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Gn(),et(a,n,8,[t.el,l,t,e]),Vn())}}const $c="components";function Nr(t,e){return cd($c,t,!0,e)||t}const ad=Symbol();function cd(t,e,n=!0,s=!1){const i=dt||Ie;if(i){const r=i.type;if(t===$c){const l=$d(r,!1);if(l&&(l===e||l===pt(e)||l===Li(pt(e))))return r}const o=Pl(i[t]||r[t],e)||Pl(i.appContext[t],e);return!o&&s?r:o}}function Pl(t,e){return t&&(t[e]||t[pt(e)]||t[Li(pt(e))])}function OC(t,e,n,s){let i;const r=n&&n[s];if(H(t)||be(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Pr=t=>t?Xc(t)?Ro(t)||t.proxy:Pr(t.parent):null,pi=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$emit:t=>t.emit,$options:t=>Wc(t),$forceUpdate:t=>t.f||(t.f=()=>Tc(t.update)),$nextTick:t=>t.n||(t.n=Sc.bind(t.proxy)),$watch:t=>Yf.bind(t)}),ud={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ce&&q(s,e))return o[e]=1,s[e];if(i!==ce&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==ce&&q(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const u=pi[e];let h,f;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ce&&q(i,e)?(i[e]=n,!0):s!==ce&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&q(t,o)||e!==ce&&q(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(pi,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let xr=!0;function hd(t){const e=Wc(t),n=t.proxy,s=t.ctx;xr=!1,e.beforeCreate&&xl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:g,activated:P,deactivated:R,beforeDestroy:x,beforeUnmount:B,destroyed:K,unmounted:J,render:ke,renderTracked:Le,renderTriggered:gt,errorCaptured:fn,serverPrefetch:it,expose:Pt,inheritAttrs:yt,components:Ke,directives:dn,filters:pn}=e;if(c&&fd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const ee=o[oe];U(ee)&&(s[oe]=ee.bind(n))}if(i){const oe=i.call(n,n);ye(oe)&&(t.data=js(oe))}if(xr=!0,r)for(const oe in r){const ee=r[oe],Fe=U(ee)?ee.bind(n,n):U(ee.get)?ee.get.bind(n,n):Ze,mn=!U(ee)&&U(ee.set)?ee.set.bind(n):Ze,vt=Ve({get:Fe,set:mn});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>vt.value,set:rt=>vt.value=rt})}if(l)for(const oe in l)Hc(l[oe],s,n,oe);if(a){const oe=U(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ee=>{oi(ee,oe[ee])})}u&&xl(u,t,"c");function _e(oe,ee){H(ee)?ee.forEach(Fe=>oe(Fe.bind(n))):ee&&oe(ee.bind(n))}if(_e(Zf,h),_e(ed,f),_e(td,_),_e(nd,g),_e(Qf,P),_e(Xf,R),_e(ld,fn),_e(od,Le),_e(rd,gt),_e(sd,B),_e(Bc,J),_e(id,it),H(Pt))if(Pt.length){const oe=t.exposed||(t.exposed={});Pt.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:Fe=>n[ee]=Fe})})}else t.exposed||(t.exposed={});ke&&t.render===Ze&&(t.render=ke),yt!=null&&(t.inheritAttrs=yt),Ke&&(t.components=Ke),dn&&(t.directives=dn)}function fd(t,e,n=Ze,s=!1){H(t)&&(t=Ar(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Bt(r.from||i,r.default,!0):o=Bt(r.from||i):o=Bt(r),Te(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function xl(t,e,n){et(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,s){const i=s.includes(".")?Dc(n,s):()=>n[s];if(be(t)){const r=e[t];U(r)&&li(i,r)}else if(U(t))li(i,t.bind(n));else if(ye(t))if(H(t))t.forEach(r=>Hc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&li(i,r,t)}}function Wc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>_i(a,c,o,!0)),_i(a,e,o)),r.set(e,a),a}function _i(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_i(t,r,n,!0),i&&i.forEach(o=>_i(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=dd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const dd={data:Al,props:Yt,emits:Yt,methods:Yt,computed:Yt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Yt,directives:Yt,watch:_d,provide:Al,inject:pd};function Al(t,e){return e?t?function(){return Ae(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function pd(t,e){return Yt(Ar(t),Ar(e))}function Ar(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Yt(t,e){return t?Ae(Ae(Object.create(null),t),e):e}function _d(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function md(t,e,n,s=!1){const i={},r={};hi(r,Ui,1),t.propsDefaults=Object.create(null),Uc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function gd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Hi(t.emitsOptions,f))continue;const _=e[f];if(a)if(q(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const g=pt(f);i[g]=kr(a,l,g,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Uc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=jn(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h)&&!0)&&(delete r[h],c=!0)}c&&Tt(t,"set","$attrs")}function Uc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ri(a))continue;const c=e[a];let u;i&&q(i,u=pt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Hi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=X(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=kr(i,a,h,c[h],t,!q(c,h))}}return o}function kr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(On(i),s=c[n]=a.call(null,e),nn())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===jn(n))&&(s=!0))}return s}function jc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,_]=jc(h,e,!0);Ae(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,Sn),Sn;if(H(r))for(let u=0;u<r.length;u++){const h=pt(r[u]);kl(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=pt(u);if(kl(h)){const f=r[u],_=o[h]=H(f)||U(f)?{type:f}:f;if(_){const g=Ml(Boolean,_.type),P=Ml(String,_.type);_[0]=g>-1,_[1]=P<0||g<P,(g>-1||q(_,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function kl(t){return t[0]!=="$"}function Ol(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Dl(t,e){return Ol(t)===Ol(e)}function Ml(t,e){return H(e)?e.findIndex(n=>Dl(n,t)):U(e)&&Dl(e,t)?0:-1}const Gc=t=>t[0]==="_"||t==="$stable",bo=t=>H(t)?t.map(ft):[ft(t)],yd=(t,e,n)=>{if(e._n)return e;const s=hs((...i)=>bo(e(...i)),n);return s._c=!1,s},Vc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Gc(i))continue;const r=t[i];if(U(r))e[i]=yd(i,r,s);else if(r!=null){const o=bo(r);e[i]=()=>o}}},zc=(t,e)=>{const n=bo(e);t.slots.default=()=>n},vd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),hi(e,"_",n)):Vc(e,t.slots={})}else t.slots={},e&&zc(t,e);hi(t.slots,Ui,1)},Cd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ae(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Vc(e,i)),o=e}else e&&(zc(t,e),o={default:1});if(r)for(const l in i)!Gc(l)&&!(l in o)&&delete i[l]};function Kc(){return{app:null,config:{isNativeTag:qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ed=0;function bd(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Kc(),o=new Set;let l=!1;const a=r.app={_uid:Ed++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Wd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=ge(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Ro(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Or(t,e,n,s,i=!1){if(H(t)){t.forEach((f,_)=>Or(f,e&&(H(e)?e[_]:e),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?Ro(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(be(c)?(u[c]=null,q(h,c)&&(h[c]=null)):Te(c)&&(c.value=null)),U(a))Ft(a,l,12,[o,u]);else{const f=be(a),_=Te(a);if(f||_){const g=()=>{if(t.f){const P=f?u[a]:a.value;i?H(P)&&uo(P,r):H(P)?P.includes(r)||P.push(r):f?(u[a]=[r],q(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,q(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Oe(g,n)):g()}}}const Oe=qf;function wd(t){return Id(t)}function Id(t,e){const n=tf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Ze,cloneNode:g,insertStaticContent:P}=t,R=(d,p,m,C=null,v=null,I=null,N=!1,w=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Zn(d,p)&&(C=O(d),We(d,v,I,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:M,shapeFlag:A}=p;switch(E){case wo:x(d,p,m,C);break;case Rs:B(d,p,m,C);break;case ci:d==null&&K(p,m,C,N);break;case ht:dn(d,p,m,C,v,I,N,w,S);break;default:A&1?Le(d,p,m,C,v,I,N,w,S):A&6?pn(d,p,m,C,v,I,N,w,S):(A&64||A&128)&&E.process(d,p,m,C,v,I,N,w,S,le)}M!=null&&v&&Or(M,d&&d.ref,I,p||d,!p)},x=(d,p,m,C)=>{if(d==null)s(p.el=l(p.children),m,C);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},B=(d,p,m,C)=>{d==null?s(p.el=a(p.children||""),m,C):p.el=d.el},K=(d,p,m,C)=>{[d.el,d.anchor]=P(d.children,p,m,C,d.el,d.anchor)},J=({el:d,anchor:p},m,C)=>{let v;for(;d&&d!==p;)v=f(d),s(d,m,C),d=v;s(p,m,C)},ke=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},Le=(d,p,m,C,v,I,N,w,S)=>{N=N||p.type==="svg",d==null?gt(p,m,C,v,I,N,w,S):Pt(d,p,v,I,N,w,S)},gt=(d,p,m,C,v,I,N,w)=>{let S,E;const{type:M,props:A,shapeFlag:L,transition:$,patchFlag:Y,dirs:ne}=d;if(d.el&&g!==void 0&&Y===-1)S=d.el=g(d.el);else{if(S=d.el=o(d.type,I,A&&A.is,A),L&8?u(S,d.children):L&16&&it(d.children,S,null,C,v,I&&M!=="foreignObject",N,w),ne&&zt(d,null,C,"created"),A){for(const ue in A)ue!=="value"&&!ri(ue)&&r(S,ue,null,A[ue],I,d.children,C,v,T);"value"in A&&r(S,"value",null,A.value),(E=A.onVnodeBeforeMount)&&lt(E,C,d)}fn(S,d,d.scopeId,N,C)}ne&&zt(d,null,C,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;se&&$.beforeEnter(S),s(S,p,m),((E=A&&A.onVnodeMounted)||se||ne)&&Oe(()=>{E&&lt(E,C,d),se&&$.enter(S),ne&&zt(d,null,C,"mounted")},v)},fn=(d,p,m,C,v)=>{if(m&&_(d,m),C)for(let I=0;I<C.length;I++)_(d,C[I]);if(v){let I=v.subTree;if(p===I){const N=v.vnode;fn(d,N,N.scopeId,N.slotScopeIds,v.parent)}}},it=(d,p,m,C,v,I,N,w,S=0)=>{for(let E=S;E<d.length;E++){const M=d[E]=w?Dt(d[E]):ft(d[E]);R(null,M,p,m,C,v,I,N,w)}},Pt=(d,p,m,C,v,I,N)=>{const w=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:M}=p;S|=d.patchFlag&16;const A=d.props||ce,L=p.props||ce;let $;m&&Kt(m,!1),($=L.onVnodeBeforeUpdate)&&lt($,m,p,d),M&&zt(p,d,m,"beforeUpdate"),m&&Kt(m,!0);const Y=v&&p.type!=="foreignObject";if(E?yt(d.dynamicChildren,E,w,m,C,Y,I):N||Fe(d,p,w,null,m,C,Y,I,!1),S>0){if(S&16)Ke(w,p,A,L,m,C,v);else if(S&2&&A.class!==L.class&&r(w,"class",null,L.class,v),S&4&&r(w,"style",A.style,L.style,v),S&8){const ne=p.dynamicProps;for(let se=0;se<ne.length;se++){const ue=ne[se],qe=A[ue],gn=L[ue];(gn!==qe||ue==="value")&&r(w,ue,qe,gn,v,d.children,m,C,T)}}S&1&&d.children!==p.children&&u(w,p.children)}else!N&&E==null&&Ke(w,p,A,L,m,C,v);(($=L.onVnodeUpdated)||M)&&Oe(()=>{$&&lt($,m,p,d),M&&zt(p,d,m,"updated")},C)},yt=(d,p,m,C,v,I,N)=>{for(let w=0;w<p.length;w++){const S=d[w],E=p[w],M=S.el&&(S.type===ht||!Zn(S,E)||S.shapeFlag&70)?h(S.el):m;R(S,E,M,null,C,v,I,N,!0)}},Ke=(d,p,m,C,v,I,N)=>{if(m!==C){for(const w in C){if(ri(w))continue;const S=C[w],E=m[w];S!==E&&w!=="value"&&r(d,w,E,S,N,p.children,v,I,T)}if(m!==ce)for(const w in m)!ri(w)&&!(w in C)&&r(d,w,m[w],null,N,p.children,v,I,T);"value"in C&&r(d,"value",m.value,C.value)}},dn=(d,p,m,C,v,I,N,w,S)=>{const E=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:L,slotScopeIds:$}=p;$&&(w=w?w.concat($):$),d==null?(s(E,m,C),s(M,m,C),it(p.children,m,M,v,I,N,w,S)):A>0&&A&64&&L&&d.dynamicChildren?(yt(d.dynamicChildren,L,m,v,I,N,w),(p.key!=null||v&&p===v.subTree)&&qc(d,p,!0)):Fe(d,p,m,M,v,I,N,w,S)},pn=(d,p,m,C,v,I,N,w,S)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,m,C,N,S):_n(p,m,C,v,I,N,S):_e(d,p,S)},_n=(d,p,m,C,v,I,N)=>{const w=d.component=Dd(d,C,v);if(Lc(d)&&(w.ctx.renderer=le),Md(w),w.asyncDep){if(v&&v.registerDep(w,oe),!d.el){const S=w.subTree=ge(Rs);B(null,S,p,m)}return}oe(w,d,p,m,v,I,N)},_e=(d,p,m)=>{const C=p.component=d.component;if(Vf(d,p,m))if(C.asyncDep&&!C.asyncResolved){ee(C,p,m);return}else C.next=p,$f(C.update),C.update();else p.el=d.el,C.vnode=p},oe=(d,p,m,C,v,I,N)=>{const w=()=>{if(d.isMounted){let{next:M,bu:A,u:L,parent:$,vnode:Y}=d,ne=M,se;Kt(d,!1),M?(M.el=Y.el,ee(d,M,N)):M=Y,A&&nr(A),(se=M.props&&M.props.onVnodeBeforeUpdate)&&lt(se,$,M,Y),Kt(d,!0);const ue=sr(d),qe=d.subTree;d.subTree=ue,R(qe,ue,h(qe.el),O(qe),d,v,I),M.el=ue.el,ne===null&&zf(d,ue.el),L&&Oe(L,v),(se=M.props&&M.props.onVnodeUpdated)&&Oe(()=>lt(se,$,M,Y),v)}else{let M;const{el:A,props:L}=p,{bm:$,m:Y,parent:ne}=d,se=ai(p);if(Kt(d,!1),$&&nr($),!se&&(M=L&&L.onVnodeBeforeMount)&&lt(M,ne,p),Kt(d,!0),A&&W){const ue=()=>{d.subTree=sr(d),W(A,d.subTree,d,v,null)};se?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=sr(d);R(null,ue,m,C,d,v,I),p.el=ue.el}if(Y&&Oe(Y,v),!se&&(M=L&&L.onVnodeMounted)){const ue=p;Oe(()=>lt(M,ne,ue),v)}(p.shapeFlag&256||ne&&ai(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Oe(d.a,v),d.isMounted=!0,p=m=C=null}},S=d.effect=new _o(w,()=>Tc(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,Kt(d,!0),E()},ee=(d,p,m)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,gd(d,p.props,C,m),Cd(d,p.children,m),Gn(),$i(void 0,d.update),Vn()},Fe=(d,p,m,C,v,I,N,w,S=!1)=>{const E=d&&d.children,M=d?d.shapeFlag:0,A=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){vt(E,A,m,C,v,I,N,w,S);return}else if(L&256){mn(E,A,m,C,v,I,N,w,S);return}}$&8?(M&16&&T(E,v,I),A!==E&&u(m,A)):M&16?$&16?vt(E,A,m,C,v,I,N,w,S):T(E,v,I,!0):(M&8&&u(m,""),$&16&&it(A,m,C,v,I,N,w,S))},mn=(d,p,m,C,v,I,N,w,S)=>{d=d||Sn,p=p||Sn;const E=d.length,M=p.length,A=Math.min(E,M);let L;for(L=0;L<A;L++){const $=p[L]=S?Dt(p[L]):ft(p[L]);R(d[L],$,m,null,v,I,N,w,S)}E>M?T(d,v,I,!0,!1,A):it(p,m,C,v,I,N,w,S,A)},vt=(d,p,m,C,v,I,N,w,S)=>{let E=0;const M=p.length;let A=d.length-1,L=M-1;for(;E<=A&&E<=L;){const $=d[E],Y=p[E]=S?Dt(p[E]):ft(p[E]);if(Zn($,Y))R($,Y,m,null,v,I,N,w,S);else break;E++}for(;E<=A&&E<=L;){const $=d[A],Y=p[L]=S?Dt(p[L]):ft(p[L]);if(Zn($,Y))R($,Y,m,null,v,I,N,w,S);else break;A--,L--}if(E>A){if(E<=L){const $=L+1,Y=$<M?p[$].el:C;for(;E<=L;)R(null,p[E]=S?Dt(p[E]):ft(p[E]),m,Y,v,I,N,w,S),E++}}else if(E>L)for(;E<=A;)We(d[E],v,I,!0),E++;else{const $=E,Y=E,ne=new Map;for(E=Y;E<=L;E++){const Be=p[E]=S?Dt(p[E]):ft(p[E]);Be.key!=null&&ne.set(Be.key,E)}let se,ue=0;const qe=L-Y+1;let gn=!1,ml=0;const Jn=new Array(qe);for(E=0;E<qe;E++)Jn[E]=0;for(E=$;E<=A;E++){const Be=d[E];if(ue>=qe){We(Be,v,I,!0);continue}let ot;if(Be.key!=null)ot=ne.get(Be.key);else for(se=Y;se<=L;se++)if(Jn[se-Y]===0&&Zn(Be,p[se])){ot=se;break}ot===void 0?We(Be,v,I,!0):(Jn[ot-Y]=E+1,ot>=ml?ml=ot:gn=!0,R(Be,p[ot],m,null,v,I,N,w,S),ue++)}const gl=gn?Sd(Jn):Sn;for(se=gl.length-1,E=qe-1;E>=0;E--){const Be=Y+E,ot=p[Be],yl=Be+1<M?p[Be+1].el:C;Jn[E]===0?R(null,ot,m,yl,v,I,N,w,S):gn&&(se<0||E!==gl[se]?rt(ot,m,yl,2):se--)}}},rt=(d,p,m,C,v=null)=>{const{el:I,type:N,transition:w,children:S,shapeFlag:E}=d;if(E&6){rt(d.component.subTree,p,m,C);return}if(E&128){d.suspense.move(p,m,C);return}if(E&64){N.move(d,p,m,le);return}if(N===ht){s(I,p,m);for(let A=0;A<S.length;A++)rt(S[A],p,m,C);s(d.anchor,p,m);return}if(N===ci){J(d,p,m);return}if(C!==2&&E&1&&w)if(C===0)w.beforeEnter(I),s(I,p,m),Oe(()=>w.enter(I),v);else{const{leave:A,delayLeave:L,afterLeave:$}=w,Y=()=>s(I,p,m),ne=()=>{A(I,()=>{Y(),$&&$()})};L?L(I,Y,ne):ne()}else s(I,p,m)},We=(d,p,m,C=!1,v=!1)=>{const{type:I,props:N,ref:w,children:S,dynamicChildren:E,shapeFlag:M,patchFlag:A,dirs:L}=d;if(w!=null&&Or(w,null,m,d,!0),M&256){p.ctx.deactivate(d);return}const $=M&1&&L,Y=!ai(d);let ne;if(Y&&(ne=N&&N.onVnodeBeforeUnmount)&&lt(ne,p,d),M&6)k(d.component,m,C);else{if(M&128){d.suspense.unmount(m,C);return}$&&zt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,m,v,le,C):E&&(I!==ht||A>0&&A&64)?T(E,p,m,!1,!0):(I===ht&&A&384||!v&&M&16)&&T(S,p,m),C&&Xn(d)}(Y&&(ne=N&&N.onVnodeUnmounted)||$)&&Oe(()=>{ne&&lt(ne,p,d),$&&zt(d,null,p,"unmounted")},m)},Xn=d=>{const{type:p,el:m,anchor:C,transition:v}=d;if(p===ht){y(m,C);return}if(p===ci){ke(d);return}const I=()=>{i(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:w}=v,S=()=>N(m,I);w?w(d.el,I,S):S()}else I()},y=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},k=(d,p,m)=>{const{bum:C,scope:v,update:I,subTree:N,um:w}=d;C&&nr(C),v.stop(),I&&(I.active=!1,We(N,d,p,m)),w&&Oe(w,p),Oe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},T=(d,p,m,C=!1,v=!1,I=0)=>{for(let N=I;N<d.length;N++)We(d[N],p,m,C,v)},O=d=>d.shapeFlag&6?O(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),te=(d,p,m)=>{d==null?p._vnode&&We(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),Pc(),p._vnode=d},le={p:R,um:We,m:rt,r:Xn,mt:_n,mc:it,pc:Fe,pbc:yt,n:O,o:t};let z,W;return e&&([z,W]=e(le)),{render:te,hydrate:z,createApp:bd(te,z)}}function Kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Dt(i[r]),l.el=o.el),n||qc(o,l))}}function Sd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Td=t=>t.__isTeleport,ht=Symbol(void 0),wo=Symbol(void 0),Rs=Symbol(void 0),ci=Symbol(void 0),ms=[];let Xe=null;function Io(t=!1){ms.push(Xe=t?null:[])}function Rd(){ms.pop(),Xe=ms[ms.length-1]||null}let Ns=1;function Ll(t){Ns+=t}function Yc(t){return t.dynamicChildren=Ns>0?Xe||Sn:null,Rd(),Ns>0&&Xe&&Xe.push(t),t}function So(t,e,n,s,i,r){return Yc(D(t,e,n,s,i,r,!0))}function DC(t,e,n,s,i){return Yc(ge(t,e,n,s,i,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const Ui="__vInternal",Qc=({key:t})=>t!=null?t:null,ui=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Te(t)||U(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,s=0,i=null,r=t===ht?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&ui(e),scopeId:kc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(To(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=be(n)?8:16),Ns>0&&!o&&Xe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Xe.push(a),a}const ge=Nd;function Nd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ad)&&(t=Rs),Dr(t)){const l=kn(t,e,!0);return n&&To(l,n),Ns>0&&!r&&Xe&&(l.shapeFlag&6?Xe[Xe.indexOf(t)]=l:Xe.push(l)),l.patchFlag|=-2,l}if(Hd(t)&&(t=t.__vccOpts),e){e=Pd(e);let{class:l,style:a}=e;l&&!be(l)&&(e.class=ao(l)),ye(a)&&(yc(a)&&!H(a)&&(a=Ae({},a)),e.style=lo(a))}const o=be(t)?1:Kf(t)?128:Td(t)?64:ye(t)?4:U(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function Pd(t){return t?yc(t)||Ui in t?Ae({},t):t:null}function kn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Ad(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(ui(e)):[i,ui(e)]:ui(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor}}function Gs(t=" ",e=0){return ge(wo,null,t,e)}function xd(t,e){const n=ge(ci,null,t);return n.staticCount=e,n}function ft(t){return t==null||typeof t=="boolean"?ge(Rs):H(t)?ge(ht,null,t.slice()):typeof t=="object"?Dt(t):ge(wo,null,String(t))}function Dt(t){return t.el===null||t.memo?t:kn(t)}function To(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),To(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ui in e)?e._ctx=dt:i===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Gs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ad(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ao([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(Oi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){et(t,e,7,[n,s])}const kd=Kc();let Od=0;function Dd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||kd,r={uid:Od++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(s,i),emitsOptions:Ac(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Uf.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const On=t=>{Ie=t,t.scope.on()},nn=()=>{Ie&&Ie.scope.off(),Ie=null};function Xc(t){return t.vnode.shapeFlag&4}let Ps=!1;function Md(t,e=!1){Ps=e;const{props:n,children:s}=t.vnode,i=Xc(t);md(t,n,i,e),vd(t,s);const r=i?Ld(t,e):void 0;return Ps=!1,r}function Ld(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vc(new Proxy(t.ctx,ud));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Bd(t):null;On(t),Gn();const r=Ft(s,t,0,[t.props,i]);if(Vn(),nn(),ic(r)){if(r.then(nn,nn),e)return r.then(o=>{Fl(t,o,e)}).catch(o=>{Bi(o,t,0)});t.asyncDep=r}else Fl(t,r,e)}else Jc(t,e)}function Fl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=wc(e)),Jc(t,n)}let Bl;function Jc(t,e,n){const s=t.type;if(!t.render){if(!e&&Bl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ae(Ae({isCustomElement:r,delimiters:l},o),a);s.render=Bl(i,c)}}t.render=s.render||Ze}On(t),Gn(),hd(t),Vn(),nn()}function Fd(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function Bd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Fd(t))},slots:t.slots,emit:t.emit,expose:e}}function Ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wc(vc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)}}))}function $d(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Hd(t){return U(t)&&"__vccOpts"in t}const Ve=(t,e)=>Lf(t,e,Ps);function Zc(t,e,n){const s=arguments.length;return s===2?ye(e)&&!H(e)?Dr(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dr(n)&&(n=[n]),ge(t,e,n))}const Wd="3.2.37",Ud="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,$l=Jt&&Jt.createElement("template"),jd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Jt.createElementNS(Ud,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{$l.innerHTML=s?`<svg>${t}</svg>`:t;const l=$l.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Gd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Vd(t,e,n){const s=t.style,i=be(n);if(n&&!i){for(const r in n)Mr(s,r,n[r]);if(e&&!be(e))for(const r in e)n[r]==null&&Mr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Hl=/\s*!important$/;function Mr(t,e,n){if(H(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=zd(t,e);Hl.test(n)?t.setProperty(jn(s),n.replace(Hl,""),"important"):t[s]=n}}const Wl=["Webkit","Moz","ms"],ir={};function zd(t,e){const n=ir[e];if(n)return n;let s=pt(e);if(s!=="filter"&&s in t)return ir[e]=s;s=Li(s);for(let i=0;i<Wl.length;i++){const r=Wl[i]+s;if(r in t)return ir[e]=r}return e}const Ul="http://www.w3.org/1999/xlink";function Kd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const r=jh(e);n==null||r&&!tc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function qd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[eu,Yd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Lr=0;const Qd=Promise.resolve(),Xd=()=>{Lr=0},Jd=()=>Lr||(Qd.then(Xd),Lr=eu());function Zd(t,e,n,s){t.addEventListener(e,n,s)}function ep(t,e,n,s){t.removeEventListener(e,n,s)}function tp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=np(e);if(s){const c=r[e]=sp(s,i);Zd(t,l,c,a)}else o&&(ep(t,l,o,a),r[e]=void 0)}}const jl=/(?:Once|Passive|Capture)$/;function np(t){let e;if(jl.test(t)){e={};let n;for(;n=t.match(jl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[jn(t.slice(2)),e]}function sp(t,e){const n=s=>{const i=s.timeStamp||eu();(Yd||i>=n.attached-1)&&et(ip(s,n.value),e,5,[s])};return n.value=t,n.attached=Jd(),n}function ip(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Gl=/^on[a-z]/,rp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Gd(t,s,i):e==="style"?Vd(t,n,s):Oi(e)?co(e)||tp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(t,e,s,i))?qd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Kd(t,e,s,i))};function op(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Gl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Gl.test(e)&&be(n)?!1:e in t}const lp=Ae({patchProp:rp},jd);let Vl;function ap(){return Vl||(Vl=wd(lp))}const cp=(...t)=>{const e=ap().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=up(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function up(t){return be(t)?document.querySelector(t):t}const No=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};/**
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
 */const b=function(t,e){if(!t)throw zn(e)},zn=function(t){return new Error("Firebase Database ("+tu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},su=function(t){const e=nu(t);return Po.encodeByteArray(e,!0)},iu=function(t){return su(t).replace(/\./g,"")},zl=function(t){try{return Po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pp())}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lu(){return tu.NODE_ADMIN===!0}function mp(){return typeof indexedDB=="object"}function gp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const yp="FirebaseError";class xo extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yp,Object.setPrototypeOf(this,xo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xo(i,l,s)}}function vp(t,e){return t.replace(Cp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Cp=/\{\$([^}]+)}/g;/**
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
 */function xs(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
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
 */const cu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=xs(zl(r[0])||""),n=xs(zl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ep=function(t){const e=cu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=cu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kl(r)&&Kl(o)){if(!Br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
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
 */class Ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Mn(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Sp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ji=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Kn(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Tp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Np(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Qt?void 0:t}function Np(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const xp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ap=ae.INFO,kp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let ql,Yl;function Mp(){return ql||(ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lp(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,$r=new WeakMap,fu=new WeakMap,rr=new WeakMap,Ao=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n($t(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function Bp(t){if($r.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$r.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $p(t){Hr=t(Hr)}function Hp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(or(this),e,...n);return fu.set(s,e.sort?e.sort():[e]),$t(s)}:Lp().includes(t)?function(...e){return t.apply(or(this),e),$t(hu.get(this))}:function(...e){return $t(t.apply(or(this),e))}}function Wp(t){return typeof t=="function"?Hp(t):(t instanceof IDBTransaction&&Bp(t),Dp(t,Mp())?new Proxy(t,Hr):t)}function $t(t){if(t instanceof IDBRequest)return Fp(t);if(rr.has(t))return rr.get(t);const e=Wp(t);return e!==t&&(rr.set(t,e),Ao.set(e,t)),e}const or=t=>Ao.get(t);function Up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=$t(o);return s&&o.addEventListener("upgradeneeded",a=>{s($t(o.result),a.oldVersion,a.newVersion,$t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const jp=["get","getKey","getAll","getAllKeys","count"],Gp=["put","add","delete","clear"],lr=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return lr.set(e,r),r}$p(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
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
 */class Vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",Xl="0.7.28";/**
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
 */const ko=new uu("@firebase/app"),Kp="@firebase/app-compat",qp="@firebase/analytics-compat",Yp="@firebase/analytics",Qp="@firebase/app-check-compat",Xp="@firebase/app-check",Jp="@firebase/auth",Zp="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/database-compat",n_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",r_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",u_="@firebase/remote-config",h_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",p_="@firebase/firestore",__="@firebase/firestore-compat",m_="firebase",g_="9.9.0";/**
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
 */const du="[DEFAULT]",y_={[Wr]:"fire-core",[Kp]:"fire-core-compat",[Yp]:"fire-analytics",[qp]:"fire-analytics-compat",[Xp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Jp]:"fire-auth",[Zp]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[r_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[u_]:"fire-rc",[h_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[p_]:"fire-fst",[__]:"fire-fst-compat","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const gi=new Map,Ur=new Map;function v_(t,e){try{t.container.addComponent(e)}catch(n){ko.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(Ur.has(e))return ko.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,t);for(const n of gi.values())v_(n,t);return!0}function C_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const E_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},rn=new au("app","Firebase",E_);/**
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
 */class b_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const w_=g_;function I_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw rn.create("bad-app-name",{appName:String(s)});const i=gi.get(s);if(i){if(Br(t,i.options)&&Br(n,i.config))return i;throw rn.create("duplicate-app",{appName:s})}const r=new Pp(s);for(const l of Ur.values())r.addComponent(l);const o=new b_(t,n,r);return gi.set(s,o),o}function S_(t=du){const e=gi.get(t);if(!e)throw rn.create("no-app",{appName:t});return e}function Pn(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ko.warn(l.join(" "));return}yi(new As(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const T_="firebase-heartbeat-database",R_=1,ks="firebase-heartbeat-store";let ar=null;function pu(){return ar||(ar=Up(T_,R_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}}).catch(t=>{throw rn.create("storage-open",{originalErrorMessage:t.message})})),ar}async function N_(t){var e;try{return(await pu()).transaction(ks).objectStore(ks).get(_u(t))}catch(n){throw rn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Jl(t,e){var n;try{const i=(await pu()).transaction(ks,"readwrite");return await i.objectStore(ks).put(e,_u(t)),i.done}catch(s){throw rn.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P_=1024,x_=30*24*60*60*1e3;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=x_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zl(),{heartbeatsToSend:n,unsentEntries:s}=k_(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zl(){return new Date().toISOString().substring(0,10)}function k_(t,e=P_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ea(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ea(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?gp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ea(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function D_(t){yi(new As("platform-logger",e=>new Vp(e),"PRIVATE")),yi(new As("heartbeat",e=>new A_(e),"PRIVATE")),Pn(Wr,Xl,t),Pn(Wr,Xl,"esm2017"),Pn("fire-js","")}D_("");var M_="firebase",L_="9.9.0";/**
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
 */Pn(M_,L_,"app");const ta="@firebase/database",na="0.13.3";/**
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
 */let mu="";function F_(t){mu=t}/**
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
 */class B_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const gu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new B_(e)}}catch{}return new $_},Zt=gu("localStorage"),jr=gu("sessionStorage");/**
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
 */const xn=new uu("@firebase/database"),H_=function(){let t=1;return function(){return t++}}(),yu=function(t){const e=Sp(t),n=new Ip;n.update(e);const s=n.digest();return Po.encodeByteArray(s)},Vs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let sn=null,sa=!0;const W_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xn.logLevel=ae.VERBOSE,sn=xn.log.bind(xn),e&&jr.set("logging_enabled",!0)):typeof t=="function"?sn=t:(sn=null,jr.remove("logging_enabled"))},we=function(...t){if(sa===!0&&(sa=!1,sn===null&&jr.get("logging_enabled")===!0&&W_(!0)),sn){const e=Vs.apply(null,t);sn(e)}},zs=function(t){return function(...e){we(t,...e)}},Gr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vs(...t);xn.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${Vs(...t)}`;throw xn.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Vs(...t);xn.warn(e)},U_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},j_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ln="[MIN_NAME]",ln="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Ln||e===ln)return-1;if(e===Ln||t===ln)return 1;{const n=ia(t),s=ia(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},G_=function(t,e){return t===e?0:t<e?-1:1},es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Oo=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Oo(t[e[s]]);return n+="}",n},vu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cu=function(t){b(!Gi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},V_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},z_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function K_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const q_=new RegExp("^-?(0*)\\d{1,10}$"),Y_=-2147483648,Q_=2147483647,ia=function(t){if(q_.test(t)){const e=Number(t);if(e>=Y_&&e<=Q_)return e}return null},qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},X_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class J_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Z_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Vr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vr.OWNER="owner";/**
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
 */const Do="5",Eu="v",bu="s",wu="r",Iu="f",Su=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tu="ls",Ru="p",zr="ac",Nu="websocket",Pu="long_polling";/**
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
 */class em{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function tm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Nu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tm(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class nm{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fp(this.counters_)}}/**
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
 */const cr={},ur={};function Mo(t){const e=t.toString();return cr[e]||(cr[e]=new nm),cr[e]}function sm(t,e){const n=t.toString();return ur[n]||(ur[n]=e()),ur[n]}/**
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
 */class im{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ra="start",rm="close",om="pLPCommand",lm="pRTLPCB",Au="id",ku="pw",Ou="ser",am="cb",cm="seg",um="ts",hm="d",fm="dframe",Du=1870,Mu=30,dm=Du-Mu,pm=25e3,_m=3e4;class In{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=Mo(n),this.urlFn=a=>(this.appCheckToken&&(a[zr]=this.appCheckToken),xu(n,Pu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new im(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_m)),j_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ra)this.id=l,this.password=a;else if(o===rm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ra]="t",s[Ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[am]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Eu]=Do,this.transportSessionId&&(s[bu]=this.transportSessionId),this.lastSessionId&&(s[Tu]=this.lastSessionId),this.applicationId&&(s[Ru]=this.applicationId),this.appCheckToken&&(s[zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Su.test(location.hostname)&&(s[wu]=Iu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){In.forceAllow_=!0}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){return In.forceAllow_?!0:!In.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!V_()&&!z_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=su(n),i=vu(s,dm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fm]="t",s[Au]=e,s[ku]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=H_(),window[om+this.uniqueCallbackIdentifier]=e,window[lm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Au]=this.myID,e[ku]=this.myPW,e[Ou]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mu+s.length<=Du;){const o=this.pendingSegs.shift();s=s+"&"+cm+i+"="+o.seg+"&"+um+i+"="+o.ts+"&"+hm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(pm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const mm=16384,gm=45e3;let vi=null;typeof MozWebSocket<"u"?vi=MozWebSocket:typeof WebSocket<"u"&&(vi=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=Mo(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Eu]=Do,typeof location<"u"&&location.hostname&&Su.test(location.hostname)&&(o[wu]=Iu),n&&(o[bu]=n),s&&(o[Tu]=s),i&&(o[zr]=i),r&&(o[Ru]=r),xu(e,Nu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let s;lu(),this.mySock=new vi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vi!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vu(n,mm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
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
 */class Os{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[In,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of Os.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
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
 */const ym=6e4,vm=5e3,Cm=10*1024,Em=100*1024,hr="t",oa="d",bm="s",la="r",wm="e",aa="o",ca="a",ua="n",ha="p",Im="h";class Sm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Em?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hr in e){const n=e[hr];n===ca?this.upgradeIfSecondaryHealthy_():n===la?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===aa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=es("t",e),s=es("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ca,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ua,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=es("t",e),s=es("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=es(hr,e);if(oa in e){const s=e[oa];if(n===Im)this.onHandshake_(s);else if(n===ua){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bm?this.onConnectionShutdown_(s):n===la?this.onReset_(s):n===wm?Gr("Server Error: "+s):n===aa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Do!==s&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ym))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ha,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ci extends Fu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ou()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ci}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fa=32,da=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new Z("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function Fo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Tm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ds(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Bu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return xe(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rm(t,e){const n=Ds(t,0),s=Ds(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=un(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Bo(t,e){if(jt(t)!==jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jt(t)>jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Nm{constructor(e,n){this.errorPrefix_=n,this.parts_=Ds(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ji(this.parts_[s]);$u(this)}}function Pm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ji(e),$u(t)}function xm(t){const e=t.parts_.pop();t.byteLength_-=ji(e),t.parts_.length>0&&(t.byteLength_-=1)}function $u(t){if(t.byteLength_>da)throw new Error(t.errorPrefix_+"has a key path longer than "+da+" bytes ("+t.byteLength_+").");if(t.parts_.length>fa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fa+") or object contains a cycle "+Xt(t))}function Xt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $o extends Fu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $o}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ts=1e3,Am=60*5*1e3,pa=30*1e3,km=1.3,Om=3e4,Dm="server_kill",_a=3;class St extends Lu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=St.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ts,this.maxReconnectDelay_=Am,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ci.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new bt,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;St.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ep(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Om&&(this.reconnectDelay_=ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*km)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Sm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Me(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Me(h),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fr(this.interruptReasons_)&&(this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Oo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_a&&(this.reconnectDelay_=pa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_a&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mu.replace(/\./g,"-")]=1,ou()?e["framework.cordova"]=1:_p()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ci.getInstance().currentlyOnline();return Fr(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class Vi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Ln,e),i=new V(Ln,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
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
 */let ni;class Hu extends Vi{static get __EMPTY_NODE(){return ni}static set __EMPTY_NODE(e){ni=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(ln,ni)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,ni)}toString(){return".key"}}const An=new Hu;/**
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
 */class si{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ee.RED,this.left=i!=null?i:De.EMPTY_NODE,this.right=r!=null?r:De.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Mm{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new si(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new si(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new si(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Mm;/**
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
 */function Lm(t,e){return un(t.name,e.name)}function Ho(t,e){return un(t,e)}/**
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
 */let Kr;function Fm(t){Kr=t}const Wu=function(t){return typeof t=="number"?"number:"+Cu(t):"string:"+t},Uu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else b(t===Kr||t.isEmpty(),"priority of unexpected type.");b(t===Kr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ma;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uu(this.priorityNode_)}static set __childrenNodeConstructor(e){ma=e}static get __childrenNodeConstructor(){return ma}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:j(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cu(this.value_):e+=this.value_,this.lazyHash_=yu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ju,Gu;function Bm(t){ju=t}function $m(t){Gu=t}class Hm extends Vi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(ln,new Ce("[PRIORITY-POST]",Gu))}makePost(e,n){const s=ju(e);return new V(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new Hm;/**
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
 */const Wm=Math.log(2);class Um{constructor(e){const n=r=>parseInt(Math.log(r)/Wm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ei=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+a,g=i(a,_),P=i(_+1,c);return h=t[_],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,g,P)}},r=function(a){let c=null,u=null,h=t.length;const f=function(g,P){const R=h-g,x=h;h-=g;const B=i(R+1,x),K=t[R],J=n?n(K):K;_(new Ee(J,K.node,P,null,B))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const P=a.nextBitIsOne(),R=Math.pow(2,a.count-(g+1));P?f(R,Ee.BLACK):(f(R,Ee.BLACK),f(R,Ee.RED))}return u},o=new Um(t.length),l=r(o);return new De(s||e,l)};/**
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
 */let fr;const yn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(yn&&fe,"ChildrenNode.ts has not been loaded"),fr=fr||new It({".priority":yn},{".priority":fe}),fr}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){b(e!==An,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ei(s,e.getCompare()):l=yn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new It(u,c)}addToIndexes(e,n){const s=mi(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===yn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ei(l,o.getCompare())}else return yn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=mi(this.indexes_,i=>{if(i===yn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
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
 */let ns;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Uu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ns||(ns=new F(new De(Ho),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ns}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ns:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ns:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{b(j(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wu(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ks?-1:0}withIndex(e){if(e===An||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===An||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===An?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jm extends F{constructor(){super(new De(Ho),F.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ks=new jm;Object.defineProperties(V,{MIN:{value:new V(Ln,F.EMPTY_NODE)},MAX:{value:new V(ln,Ks)}});Hu.__EMPTY_NODE=F.EMPTY_NODE;Ce.__childrenNodeConstructor=F;Fm(Ks);$m(Ks);/**
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
 */const Gm=!0;function de(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,de(e))}if(!(t instanceof Array)&&Gm){const n=[];let s=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=de(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return F.EMPTY_NODE;const r=Ei(n,Lm,o=>o.name,Ho);if(s){const o=Ei(n,fe.getCompare());return new F(r,de(e),new It({".priority":o},{".priority":fe}))}else return new F(r,de(e),It.Default)}else{let n=F.EMPTY_NODE;return Re(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=de(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(de(e))}}Bm(de);/**
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
 */class Vm extends Vi{constructor(e){super(),this.indexPath_=e,b(!G(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?un(e.name,n.name):r}makePost(e,n){const s=de(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ks);return new V(ln,e)}toString(){return Ds(this.indexPath_,0).join("/")}}/**
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
 */class zm extends Vi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?un(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=de(e);return new V(n,s)}toString(){return".value"}}const Km=new zm;/**
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
 */function Vu(t){return{type:"value",snapshotNode:t}}function Fn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ms(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ms(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Fn(n,s)):o.trackChildChange(Ls(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ms(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ls(i,r,o))}else s.trackChildChange(Fn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Fs{constructor(e){this.indexedFilter_=new Wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fs.getStartPost_(e),this.endPost_=Fs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ym{constructor(e){this.rangedFilter_=new Fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new V(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ls(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ms(n,h));const P=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Fn(f.name,f.node)),P.updateImmediateChild(f.name,f.node)):P}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ms(c.name,c.node)),r.trackChildChange(Fn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class Uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ln}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qm(t){return t.loadsAllData()?new Wo(t.getIndex()):t.hasLimit()?new Ym(t):new Fs(t)}function ga(t){const e={};if(t.isDefault())return e;let n;return t.index_===fe?n="$priority":t.index_===Km?n="$value":t.index_===An?n="$key":(b(t.index_ instanceof Vm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_&&(e.startAt=me(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+me(t.indexStartName_))),t.endSet_&&(e.endAt=me(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+me(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ya(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class bi extends Lu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bi.getListenId_(e,s),l={};this.listens_[o]=l;const a=ga(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Dn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=bi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ga(e._queryParams),s=e._path.toString(),i=new bt;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=xs(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Xm{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wi(){return{value:null,children:new Map}}function Yn(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,wi());const i=t.children.get(s);e=re(e),Yn(i,e,n)}}function qr(t,e){if(G(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(fe,(s,i)=>{Yn(t,new Z(s),i)}),qr(t,e)}}else if(t.children.size>0){const n=j(e);return e=re(e),t.children.has(n)&&qr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Yr(t,e,n){t.value!==null?n(e,t.value):Jm(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Yr(i,r,n)})}function Jm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Zm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const va=10*1e3,eg=30*1e3,tg=5*60*1e3;class ng{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zm(e);const s=va+(eg-va)*Math.random();gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*tg))}}/**
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
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function zu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Go(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=zu()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Ii(Q(),n,this.revert)}}else return b(j(this.path)===e,"operationForChild called for unrelated child."),new Ii(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Bs(this.source,Q()):new Bs(this.source,re(this.path))}}/**
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
 */class an{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return G(this.path)?new an(this.source,Q(),this.snap.getImmediateChild(e)):new an(this.source,re(this.path),this.snap)}}/**
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
 */class $s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new an(this.source,Q(),n.value):new $s(this.source,Q(),n)}else return b(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class sg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ig(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qm(o.childName,o.snapshotNode))}),ss(t,i,"child_removed",e,s,n),ss(t,i,"child_added",e,s,n),ss(t,i,"child_moved",r,s,n),ss(t,i,"child_changed",e,s,n),ss(t,i,"value",e,s,n),i}function ss(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>og(t,l,a)),o.forEach(l=>{const a=rg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function rg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function og(t,e,n){if(e.childName==null||n.childName==null)throw zn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function zi(t,e){return{eventCache:t,serverCache:e}}function ys(t,e,n,s){return zi(new Gt(e,n,s),t.serverCache)}function Ku(t,e,n,s){return zi(t.eventCache,new Gt(e,n,s))}function Si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let dr;const lg=()=>(dr||(dr=new De(G_)),dr);class he{constructor(e,n=lg()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Re(e,(s,i)=>{n=n.set(new Z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(G(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:pe(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new he(null)}}set(e,n){if(G(e))return new he(n,this.children);{const s=j(e),r=(this.children.get(s)||new he(null)).set(re(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(G(e))return n;{const s=j(e),r=(this.children.get(s)||new he(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(re(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),pe(n,i),s):new he(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new he(null))}}function vs(t,e,n){if(G(e))return new tt(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function Ca(t,e,n){let s=t;return Re(n,(i,r)=>{s=vs(s,pe(e,i),r)}),s}function Ea(t,e){if(G(e))return tt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new tt(n)}}function Qr(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function ba(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Ht(t,e){if(G(e))return t;{const n=hn(t,e);return n!=null?new tt(new he(n)):new tt(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Bn(t,e){return qu(Q(),t.writeTree_,e)}function qu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qu(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
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
 */function Ki(t,e){return Ju(e,t)}function ag(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=vs(t.visibleWrites,e,n)),t.lastWriteId=s}function cg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ug(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hg(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return fg(t),!0;if(s.snap)t.visibleWrites=Ea(t.visibleWrites,s.path);else{const l=s.children;Re(l,a=>{t.visibleWrites=Ea(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function hg(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(pe(t.path,n),e))return!0;return!1}function fg(t){t.visibleWrites=Yu(t.allWrites,dg,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dg(t){return t.visible}function Yu(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=xe(n,o),s=vs(s,l,r.snap)):ze(o,n)&&(l=xe(o,n),s=vs(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=xe(n,o),s=Ca(s,l,r.children);else if(ze(o,n))if(l=xe(o,n),G(l))s=Ca(s,Q(),r.children);else{const a=Dn(r.children,j(l));if(a){const c=a.getChild(re(l));s=vs(s,Q(),c)}}}else throw zn("WriteRecord should have .snap or .children")}}return s}function Qu(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=Ht(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,Q()))return null;{const l=n||F.EMPTY_NODE;return Bn(o,l)}}}else{const r=Ht(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=Yu(t.allWrites,o,e),a=n||F.EMPTY_NODE;return Bn(l,a)}}}function pg(t,e,n){let s=F.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ht(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Bn(Ht(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),ba(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ht(t.visibleWrites,e);return ba(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _g(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Ht(t.visibleWrites,r);return Xr(o)?i.getChild(n):Bn(o,i.getChild(n))}}function mg(t,e,n,s){const i=pe(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ht(t.visibleWrites,i);return Bn(o,s.getNode().getImmediateChild(n))}else return null}function gg(t,e){return hn(t.visibleWrites,e)}function yg(t,e,n,s,i,r,o){let l;const a=Ht(t.visibleWrites,e),c=hn(a,Q());if(c!=null)l=c;else if(n!=null)l=Bn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function vg(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,s){return Qu(t.writeTree,t.treePath,e,n,s)}function Vo(t,e){return pg(t.writeTree,t.treePath,e)}function wa(t,e,n,s){return _g(t.writeTree,t.treePath,e,n,s)}function Ri(t,e){return gg(t.writeTree,pe(t.treePath,e))}function Cg(t,e,n,s,i,r){return yg(t.writeTree,t.treePath,e,n,s,i,r)}function zo(t,e,n){return mg(t.writeTree,t.treePath,e,n)}function Xu(t,e){return Ju(pe(t.treePath,e),t.writeTree)}function Ju(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Eg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ls(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ms(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Fn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ls(s,e.snapshotNode,i.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zu=new bg;class Ko{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Cg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function wg(t){return{filter:t}}function Ig(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sg(t,e,n,s,i){const r=new Eg;let o,l;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=Ni(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=Rg(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=xg(t,e,c.path,s,i,r):o=Ng(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=Pg(t,e,n.path,s,r);else throw zn("Unknown operation type: "+n.type);const a=r.getChanges();return Tg(e,o,a),{viewCache:o,changes:a}}function Tg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Si(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vu(Si(e)))}}function eh(t,e,n,s,i,r){const o=e.eventCache;if(Ri(s,n)!=null)return e;{let l,a;if(G(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof F?c:F.EMPTY_NODE,h=Vo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ti(s,cn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){b(jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=wa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=wa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ys(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Ni(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&jt(n)>1)return e;const g=re(n),R=a.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,g,Zu,null)}const h=Ku(e,c,a.isFullyInitialized()||G(n),u.filtersNodes()),f=new Ko(i,h,r);return eh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ko(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ys(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ys(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=re(n),_=l.getNode().getImmediateChild(h);let g;if(G(f))g=s;else{const P=u.getCompleteChild(h);P!=null?Fo(f)===".priority"&&P.getChild(Bu(f)).isEmpty()?g=P:g=P.updateChild(f,s):g=F.EMPTY_NODE}if(_.equals(g))a=e;else{const P=t.filter.updateChild(l.getNode(),h,g,f,u,o);a=ys(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ia(t,e){return t.eventCache.isCompleteForChild(e)}function Rg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=pe(n,a);Ia(e,j(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=pe(n,a);Ia(e,j(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function Sa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=Sa(t,_,f);a=Ni(t,a,new Z(h),g,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),P=Sa(t,g,f);a=Ni(t,a,new Z(h),P,i,r,o,l)}}),a}function Ng(t,e,n,s,i,r,o){if(Ri(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ni(t,e,n,a.getNode().getChild(n),i,r,l,o);if(G(n)){let c=new he(null);return a.getNode().forEachChild(An,(u,h)=>{c=c.set(new Z(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const f=pe(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Zr(t,e,n,c,i,r,l,o)}}function Pg(t,e,n,s,i){const r=e.serverCache,o=Ku(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return eh(t,o,n,s,Zu,i)}function xg(t,e,n,s,i,r){let o;if(Ri(s,n)!=null)return e;{const l=new Ko(s,e,i),a=e.eventCache.getNode();let c;if(G(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(s,cn(e));else{const h=e.serverCache.getNode();b(h instanceof F,"serverChildren would be complete if leaf node"),u=Vo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=j(n);let h=zo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,re(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,F.EMPTY_NODE,re(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(s,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ri(s,Q())!=null,ys(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Ag{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wo(s.getIndex()),r=Qm(s);this.processor_=wg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Gt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Gt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zi(h,u),this.eventGenerator_=new sg(this.query_)}get query(){return this.query_}}function kg(t){return t.viewCache_.serverCache.getNode()}function Og(t){return Si(t.viewCache_)}function Dg(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Ta(t){return t.eventRegistrations_.length===0}function Mg(t,e){t.eventRegistrations_.push(e)}function Ra(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Na(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(b(cn(t.viewCache_),"We should always have a full cache before handling merges"),b(Si(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Sg(t.processor_,i,e,n,s);return Ig(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,th(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(Fn(r,o))}),n.isFullyInitialized()&&s.push(Vu(n.getNode())),th(t,s,n.getNode(),e)}function th(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ig(t.eventGenerator_,e,n,i)}/**
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
 */let Pi;class nh{constructor(){this.views=new Map}}function Fg(t){b(!Pi,"__referenceConstructor has already been defined"),Pi=t}function Bg(){return b(Pi,"Reference.ts has not been loaded"),Pi}function $g(t){return t.views.size===0}function qo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Na(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Na(o,e,n,s));return r}}function Yo(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ti(n,i?s:null),a=!1;l?a=!0:s instanceof F?(l=Vo(n,s),a=!1):(l=F.EMPTY_NODE,a=!1);const c=zi(new Gt(l,a,!1),new Gt(s,i,!1));return new Ag(e,c)}return o}function Hg(t,e,n,s,i,r){const o=Yo(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mg(o,n),Lg(o,n)}function Wg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Vt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ra(c,n,s)),Ta(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ra(a,n,s)),Ta(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Vt(t)&&r.push(new(Bg())(e._repo,e._path)),{removed:r,events:o}}function sh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wt(t,e){let n=null;for(const s of t.views.values())n=n||Dg(s,e);return n}function ih(t,e){if(e._queryParams.loadsAllData())return qi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rh(t,e){return ih(t,e)!=null}function Vt(t){return qi(t)!=null}function qi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xi;function Ug(t){b(!xi,"__referenceConstructor has already been defined"),xi=t}function jg(){return b(xi,"Reference.ts has not been loaded"),xi}let Gg=1;class Pa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=vg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(t,e,n,s,i){return ag(t.pendingWriteTree_,e,n,s,i),i?Ys(t,new an(zu(),e,n)):[]}function en(t,e,n=!1){const s=cg(t.pendingWriteTree_,e);if(ug(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Q(),!0):Re(s.children,o=>{r=r.set(new Z(o),!0)}),Ys(t,new Ii(s.path,r,n))}else return[]}function qs(t,e,n){return Ys(t,new an(jo(),e,n))}function Vg(t,e,n){const s=he.fromObject(n);return Ys(t,new $s(jo(),e,s))}function zg(t,e){return Ys(t,new Bs(jo(),e))}function Kg(t,e,n){const s=Xo(t,n);if(s){const i=Jo(s),r=i.path,o=i.queryId,l=xe(r,e),a=new Bs(Go(o),l);return Zo(t,r,a)}else return[]}function Ai(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||rh(r,e))){const l=Wg(r,e,n,s);$g(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Vt(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Xg(h);for(let _=0;_<f.length;++_){const g=f[_],P=g.query,R=hh(t,g);t.listenProvider_.startListening(Cs(P),Hs(t,P),R.hashFn,R.onComplete)}}}!u&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(Cs(e),null):a.forEach(h=>{const f=t.queryToTagMap.get(Yi(h));t.listenProvider_.stopListening(Cs(h),f)})),Jg(t,a)}return o}function qg(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=ah(e,t),o=Yo(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:Hs(t,e)}function lh(t,e,n,s){const i=Xo(t,s);if(i!=null){const r=Jo(i),o=r.path,l=r.queryId,a=xe(o,e),c=new an(Go(l),a,n);return Zo(t,o,c)}else return[]}function Yg(t,e,n,s){const i=Xo(t,s);if(i){const r=Jo(i),o=r.path,l=r.queryId,a=xe(o,e),c=he.fromObject(n),u=new $s(Go(l),a,c);return Zo(t,o,u)}else return[]}function ah(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=xe(c,n);s=s||Wt(u,h),i=i||Vt(u)});let r=e.syncPointTree_.get(n);r?(i=i||Vt(r),s=s||Wt(r,Q())):(r=new nh,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=F.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Wt(h,Q());f&&(s=s.updateImmediateChild(u,f))}));const l=rh(r,t);if(!l&&!t._queryParams.loadsAllData()){const c=Yi(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Zg();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const a=Ki(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:a,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function xa(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:l,foundAncestorDefaultView:a}=ah(e,t);let c=Hg(s,e,n,r,i,o);if(!l&&!a){const u=ih(s,e);c=c.concat(ey(t,e,u))}return c}function Qo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),c=Wt(l,a);if(c)return c});return Qu(i,e,r,n,!0)}function Qg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=xe(c,n);s=s||Wt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Wt(i,Q()):(i=new nh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Gt(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),a=Yo(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return Og(a)}function Ys(t,e){return ch(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,Q()))}function ch(t,e,n,s){if(G(t.path))return uh(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Wt(i,Q()));let r=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Xu(s,o);r=r.concat(ch(l,a,c,u))}return i&&(r=r.concat(qo(i,t,s,n))),r}}function uh(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Wt(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Xu(s,o),u=t.operationForChild(o);u&&(r=r.concat(uh(u,l,a,c)))}),i&&(r=r.concat(qo(i,t,s,n))),r}function hh(t,e){const n=e.query,s=Hs(t,n);return{hashFn:()=>(kg(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Kg(t,n._path,s):zg(t,n._path);{const r=K_(i,n);return Ai(t,n,null,r)}}}}function Hs(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Xo(t,e){return t.tagToQueryMap.get(e)}function Jo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Zo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return qo(s,n,i,null)}function Xg(t){return t.fold((e,n,s)=>{if(n&&Vt(n))return[qi(n)];{let i=[];return n&&(i=sh(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function Cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(jg())(t._repo,t._path):t}function Jg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Zg(){return Gg++}function ey(t,e,n){const s=e._path,i=Hs(t,e),r=hh(t,n),o=t.listenProvider_.startListening(Cs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!G(c)&&u&&Vt(u))return[qi(u).query];{let f=[];return u&&(f=f.concat(sh(u).map(_=>_.query))),Re(h,(_,g)=>{f=f.concat(g)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Cs(u),Hs(t,u))}}return o}/**
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
 */class el{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new el(n)}node(){return this.node_}}class tl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new tl(this.syncTree_,n)}node(){return Qo(this.syncTree_,this.path_)}}const ty=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Aa=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ny(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sy(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ny=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},sy=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},iy=function(t,e,n,s){return nl(e,new tl(n,t),s)},fh=function(t,e,n){return nl(t,new el(e),n)};function nl(t,e,n){const s=t.getPriority().val(),i=Aa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Aa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,de(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(fe,(l,a)=>{const c=nl(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class sl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function il(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=j(n);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new sl(i,s,r),n=re(n),i=j(n)}return s}function Qn(t){return t.node.value}function dh(t,e){t.node.value=e,eo(t)}function ph(t){return t.node.childCount>0}function ry(t){return Qn(t)===void 0&&!ph(t)}function Qi(t,e){Re(t.node.children,(n,s)=>{e(new sl(n,t,s))})}function _h(t,e,n,s){n&&!s&&e(t),Qi(t,i=>{_h(i,e,!0,s)}),n&&s&&e(t)}function oy(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qs(t){return new Z(t.parent===null?t.name:Qs(t.parent)+"/"+t.name)}function eo(t){t.parent!==null&&ly(t.parent,t.name,t)}function ly(t,e,n){const s=ry(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eo(t))}/**
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
 */const ay=/[\[\].#$\/\u0000-\u001F\u007F]/,cy=/[\[\].#$\u0000-\u001F\u007F]/,pr=10*1024*1024,rl=function(t){return typeof t=="string"&&t.length!==0&&!ay.test(t)},mh=function(t){return typeof t=="string"&&t.length!==0&&!cy.test(t)},uy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mh(t)},gh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gi(t)||t&&typeof t=="object"&&_t(t,".sv")},to=function(t,e,n,s){s&&e===void 0||Xi(Mn(t,"value"),e,n)},Xi=function(t,e,n){const s=n instanceof Z?new Nm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xt(s)+" with contents = "+e.toString());if(Gi(e))throw new Error(t+"contains "+e.toString()+" "+Xt(s));if(typeof e=="string"&&e.length>pr/3&&ji(e)>pr)throw new Error(t+"contains a string greater than "+pr+" utf8 bytes "+Xt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pm(s,o),Xi(t,l,s),xm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xt(s)+" in addition to actual children.")}},hy=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ds(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!rl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Rm);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ze(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},fy=function(t,e,n,s){if(s&&e===void 0)return;const i=Mn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Re(e,(o,l)=>{const a=new Z(o);if(Xi(i,l,pe(n,a)),Fo(a)===".priority"&&!gh(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),hy(i,r)},dy=function(t,e,n){if(!(n&&e===void 0)){if(Gi(e))throw new Error(Mn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!gh(e))throw new Error(Mn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},yh=function(t,e,n,s){if(!(s&&n===void 0)&&!mh(n))throw new Error(Mn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},py=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yh(t,e,n,s)},fs=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_y=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uy(n))throw new Error(Mn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class my{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ol(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Bo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vh(t,e,n){ol(t,n),Ch(t,s=>Bo(s,e))}function Rt(t,e,n){ol(t,n),Ch(t,s=>ze(s,e)||ze(e,s))}function Ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();sn&&we("event: "+n.toString()),qn(s)}}}/**
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
 */const yy="repo_interrupt",vy=25;class Cy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new my,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wi(),this.transactionQueueTree_=new sl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ey(t,e,n){if(t.stats_=Mo(t.repoInfo_),t.forceRestClient_||X_())t.server_=new bi(t.repoInfo_,(s,i,r,o)=>{ka(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Oa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new St(t.repoInfo_,e,(s,i,r,o)=>{ka(t,s,i,r,o)},s=>{Oa(t,s)},s=>{wy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=sm(t.repoInfo_,()=>new ng(t.stats_,t.server_)),t.infoData_=new Xm,t.infoSyncTree_=new Pa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=qs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),al(t,"connected",!1),t.serverSyncTree_=new Pa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function by(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ll(t){return ty({timestamp:by(t)})}function ka(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=mi(n,c=>de(c));o=Yg(t.serverSyncTree_,r,a,i)}else{const a=de(n);o=lh(t.serverSyncTree_,r,a,i)}else if(s){const a=mi(n,c=>de(c));o=Vg(t.serverSyncTree_,r,a)}else{const a=de(n);o=qs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ji(t,r)),Rt(t.eventQueue_,l,o)}function Oa(t,e){al(t,"connected",e),e===!1&&Ty(t)}function wy(t,e){Re(e,(n,s)=>{al(t,n,s)})}function al(t,e,n){const s=new Z("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(s,i);const r=qs(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function Eh(t){return t.nextWriteId_++}function Iy(t,e){const n=Qg(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=de(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())qs(t.serverSyncTree_,e._path,i);else{const o=qg(t.serverSyncTree_,e);lh(t.serverSyncTree_,e._path,i,o)}return Ai(t.serverSyncTree_,e,null).length>0&&Ws(t,"unexpected cancel events in repoGetValue"),i},s=>(Ws(t,"get for query "+me(e)+" failed: "+s),Promise.reject(new Error(s))))}function Sy(t,e,n,s,i){Ws(t,"set",{path:e.toString(),value:n,priority:s});const r=ll(t),o=de(n,s),l=Qo(t.serverSyncTree_,e),a=fh(o,l,r),c=Eh(t),u=oh(t.serverSyncTree_,e,a,c,!0);ol(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const g=f==="ok";g||Me("set at "+e+" failed: "+f);const P=en(t.serverSyncTree_,c,!g);Rt(t.eventQueue_,e,P),$n(t,i,f,_)});const h=Th(t,e);Ji(t,h),Rt(t.eventQueue_,h,[])}function Ty(t){Ws(t,"onDisconnectEvents");const e=ll(t),n=wi();Yr(t.onDisconnect_,Q(),(i,r)=>{const o=iy(i,r,t.serverSyncTree_,e);Yn(n,i,o)});let s=[];Yr(n,Q(),(i,r)=>{s=s.concat(qs(t.serverSyncTree_,i,r));const o=Th(t,i);Ji(t,o)}),t.onDisconnect_=wi(),Rt(t.eventQueue_,Q(),s)}function Ry(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&qr(t.onDisconnect_,e),$n(t,n,s,i)})}function Da(t,e,n,s){const i=de(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Yn(t.onDisconnect_,e,i),$n(t,s,r,o)})}function Ny(t,e,n,s,i){const r=de(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Yn(t.onDisconnect_,e,r),$n(t,i,o,l)})}function Py(t,e,n,s){if(Fr(n)){we("onDisconnect().update() called with empty data.  Don't do anything."),$n(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Re(n,(o,l)=>{const a=de(l);Yn(t.onDisconnect_,pe(e,o),a)}),$n(t,s,i,r)})}function xy(t,e,n){let s;j(e._path)===".info"?s=xa(t.infoSyncTree_,e,n):s=xa(t.serverSyncTree_,e,n),vh(t.eventQueue_,e._path,s)}function Ma(t,e,n){let s;j(e._path)===".info"?s=Ai(t.infoSyncTree_,e,n):s=Ai(t.serverSyncTree_,e,n),vh(t.eventQueue_,e._path,s)}function Ay(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yy)}function Ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function $n(t,e,n,s){e&&qn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bh(t,e,n){return Qo(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function cl(t,e=t.transactionQueueTree_){if(e||Zi(t,e),Qn(e)){const n=Ih(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ky(t,Qs(e),n)}else ph(e)&&Qi(e,n=>{cl(t,n)})}function ky(t,e,n){const s=n.map(c=>c.currentWriteId),i=bh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ws(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(en(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Zi(t,il(t.transactionQueueTree_,e)),cl(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)qn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Me("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=wh(t,e),s=Qs(n),i=Ih(t,n);return Oy(t,i,s),s}function Oy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=xe(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=vy)u=!0,h="maxretry",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else{const f=bh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Xi("transaction failed: Data returned ",_,a.path);let g=de(_);typeof _=="object"&&_!=null&&_t(_,".priority")||(g=g.updatePriority(f.getPriority()));const R=a.currentWriteId,x=ll(t),B=fh(g,f,x);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=B,a.currentWriteId=Eh(t),o.splice(o.indexOf(R),1),i=i.concat(oh(t.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(en(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)qn(s[l]);cl(t,t.transactionQueueTree_)}function wh(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&Qn(s)===void 0;)s=il(s,n),e=re(e),n=j(e);return s}function Ih(t,e){const n=[];return Sh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Sh(t,e,n){const s=Qn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{Sh(t,i,n)})}function Zi(t,e){const n=Qn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dh(e,n.length>0?n:void 0)}Qi(e,s=>{Zi(t,s)})}function Th(t,e){const n=Qs(wh(t,e)),s=il(t.transactionQueueTree_,e);return oy(s,i=>{_r(t,i)}),_r(t,s),_h(s,i=>{_r(t,i)}),n}function _r(t,e){const n=Qn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dh(e,void 0):n.length=r+1,Rt(t.eventQueue_,Qs(e),i);for(let o=0;o<s.length;o++)qn(s[o])}}/**
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
 */function Dy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function My(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const La=function(t,e){const n=Ly(t),s=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||U_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new em(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},Ly=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Dy(t.substring(u,h)));const f=My(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Rh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class Nh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class By{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new bt;return Ry(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){fs("OnDisconnect.remove",this._path);const e=new bt;return Da(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){fs("OnDisconnect.set",this._path),to("OnDisconnect.set",e,this._path,!1);const n=new bt;return Da(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){fs("OnDisconnect.setWithPriority",this._path),to("OnDisconnect.setWithPriority",e,this._path,!1),dy("OnDisconnect.setWithPriority",n,!1);const s=new bt;return Ny(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){fs("OnDisconnect.update",this._path),fy("OnDisconnect.update",e,this._path,!1);const n=new bt;return Py(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class ul{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Fo(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=ya(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return ya(this._queryParams)}isEqual(e){if(e=Kn(e),!(e instanceof ul))return!1;const n=this._repo===e._repo,s=Bo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tm(this._path)}}class mt extends ul{constructor(e,n){super(e,n,new Uo,!1)}get parent(){const e=Bu(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=wt(this.ref,e);return new Hn(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Hn(i,wt(this.ref,s),fe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Se(t,e){return t=Kn(t),t._checkNotDeleted("ref"),e!==void 0?wt(t._root,e):t._root}function wt(t,e){return t=Kn(t),j(t._path)===null?py("child","path",e,!1):yh("child","path",e,!1),new mt(t._repo,pe(t._path,e))}function Fa(t){return t=Kn(t),new By(t._repo,t._path)}function at(t,e){t=Kn(t),fs("set",t._path),to("set",e,t._path,!1);const n=new bt;return Sy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function is(t){return t=Kn(t),Iy(t._repo,t).then(e=>new Hn(e,new mt(t._repo,t._path),t._queryParams.getIndex()))}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Rh("value",this,new Hn(e.snapshotNode,new mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nh(this,e,n):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=wt(new mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Rh(e.type,this,new Hn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function $y(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Ma(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Fy(n,r||void 0),l=e==="value"?new hl(o):new fl(e,o);return xy(t._repo,t,l),()=>Ma(t._repo,t,l)}function ii(t,e,n,s){return $y(t,"value",e,n,s)}Fg(mt);Ug(mt);/**
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
 */const Hy="FIREBASE_DATABASE_EMULATOR_HOST",no={};let Wy=!1;function Uy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=La(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Hy]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=La(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Vr(Vr.OWNER):new Z_(t.name,t.options,e);_y("Invalid Firebase Database URL",o),G(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Gy(l,t,u,new J_(t.name,n));return new Vy(h,t)}function jy(t,e){const n=no[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ay(t),delete n[t.key]}function Gy(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Cy(t,Wy,n,s),i[t.toURLString()]=r,r}class Vy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ey(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function dl(t=S_(),e){return C_(t,"database").getImmediate({identifier:e})}/**
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
 */function zy(t){F_(w_),yi(new As("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Uy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pn(ta,na,t),Pn(ta,na,"esm2017")}/**
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
 */const Ky={".sv":"timestamp"};function qy(){return Ky}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zy();const Yy="modulepreload",Qy=function(t){return"/Quiz/"+t},Ba={},rs=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=Qy(i),i in Ba)return;Ba[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Yy,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function Xy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function mr(t,e){const n={};for(const s in e){const i=e[s];n[s]=st(i)?i.map(t):t(i)}return n}const Es=()=>{},st=Array.isArray,Jy=/\/$/,Zy=t=>t.replace(Jy,"");function gr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=sv(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function ev(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $a(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Wn(e.matched[s],n.matched[i])&&Ph(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ph(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nv(t[n],e[n]))return!1;return!0}function nv(t,e){return st(t)?Ha(t,e):st(e)?Ha(e,t):t===e}function Ha(t,e){return st(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function sv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Us;(function(t){t.pop="pop",t.push="push"})(Us||(Us={}));var bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bs||(bs={}));function iv(t){if(!t)if(bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zy(t)}const rv=/^[^#]+#/;function ov(t,e){return t.replace(rv,"#")+e}function lv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function av(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=lv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wa(t,e){return(history.state?history.state.position-e:-1)+t}const so=new Map;function cv(t,e){so.set(t,e)}function uv(t){const e=so.get(t);return so.delete(t),e}let hv=()=>location.protocol+"//"+location.host;function xh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),$a(a,"")}return $a(n,t)+s+i}function fv(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=xh(t,location),g=n.value,P=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===g){o=null;return}R=P?f.position-P.position:0}else s(_);i.forEach(x=>{x(n.value,g,{delta:R,type:Us.pop,direction:R?R>0?bs.forward:bs.back:bs.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ie({},f.state,{scroll:er()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function Ua(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?er():null}}function dv(t){const{history:e,location:n}=window,s={value:xh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:hv()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ie({},e.state,Ua(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ie({},i.value,e.state,{forward:a,scroll:er()});r(u.current,u,!0);const h=ie({},Ua(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function pv(t){t=iv(t);const e=dv(t),n=fv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:ov.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _v(t){return typeof t=="string"||t&&typeof t=="object"}function Ah(t){return typeof t=="string"||typeof t=="symbol"}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kh=Symbol("");var ja;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ja||(ja={}));function Un(t,e){return ie(new Error,{type:t,[kh]:!0},e)}function kt(t,e){return t instanceof Error&&kh in t&&(e==null||!!(t.type&e))}const Ga="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0},gv=/[.+*?^${}()[\]/\\]/g;function yv(t,e){const n=ie({},mv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(gv,"\\$&"),_+=40;else if(f.type===1){const{value:g,repeatable:P,optional:R,regexp:x}=f;r.push({name:g,repeatable:P,optional:R});const B=x||Ga;if(B!==Ga){_+=10;try{new RegExp(`(${B})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${g}" (${B}): `+J.message)}}let K=P?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(K=R&&c.length<2?`(?:/${K})`:"/"+K),R&&(K+="?"),i+=K,_+=20,R&&(_+=-8),P&&(_+=-20),B===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",g=r[f-1];h[g.name]=_&&g.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:P,optional:R}=_,x=g in c?c[g]:"";if(st(x)&&!P)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const B=st(x)?x.join("/"):x;if(!B)if(R)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=B}}return u}return{re:o,score:s,keys:r,parse:l,stringify:a}}function vv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=vv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Va(s))return 1;if(Va(i))return-1}return i.length-s.length}function Va(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ev={type:0,value:""},bv=/[a-zA-Z0-9_]/;function wv(t){if(!t)return[[]];if(t==="/")return[[Ev]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:bv.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Iv(t,e,n){const s=yv(wv(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Sv(t,e){const n=[],s=new Map;e=Ka({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,g=Rv(u);g.aliasOf=f&&f.record;const P=Ka(e,u),R=[g];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of K)R.push(ie({},g,{components:f?f.record.components:g.components,path:J,aliasOf:f?f.record:g}))}let x,B;for(const K of R){const{path:J}=K;if(h&&J[0]!=="/"){const ke=h.record.path,Le=ke[ke.length-1]==="/"?"":"/";K.path=h.record.path+(J&&Le+J)}if(x=Iv(K,h,P),f?f.alias.push(x):(B=B||x,B!==x&&B.alias.push(x),_&&u.name&&!za(x)&&o(u.name)),g.children){const ke=g.children;for(let Le=0;Le<ke.length;Le++)r(ke[Le],x,f&&f.children[Le])}f=f||x,a(x)}return B?()=>{o(B)}:Es}function o(u){if(Ah(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Cv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Oh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!za(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},g,P;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Un(1,{location:u});P=f.record.name,_=ie(Tv(h.params,f.keys.filter(B=>!B.optional).map(B=>B.name)),u.params),g=f.stringify(_)}else if("path"in u)g=u.path,f=n.find(B=>B.re.test(g)),f&&(_=f.parse(g),P=f.record.name);else{if(f=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!f)throw Un(1,{location:u,currentLocation:h});P=f.record.name,_=ie({},h.params,u.params),g=f.stringify(_)}const R=[];let x=f;for(;x;)R.unshift(x.record),x=x.parent;return{name:P,path:g,params:_,matched:R,meta:Pv(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Tv(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Rv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function za(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pv(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Ka(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Oh(t,e){return e.children.some(n=>n===t||Oh(t,n))}const Dh=/#/g,xv=/&/g,Av=/\//g,kv=/=/g,Ov=/\?/g,Mh=/\+/g,Dv=/%5B/g,Mv=/%5D/g,Lh=/%5E/g,Lv=/%60/g,Fh=/%7B/g,Fv=/%7C/g,Bh=/%7D/g,Bv=/%20/g;function pl(t){return encodeURI(""+t).replace(Fv,"|").replace(Dv,"[").replace(Mv,"]")}function $v(t){return pl(t).replace(Fh,"{").replace(Bh,"}").replace(Lh,"^")}function io(t){return pl(t).replace(Mh,"%2B").replace(Bv,"+").replace(Dh,"%23").replace(xv,"%26").replace(Lv,"`").replace(Fh,"{").replace(Bh,"}").replace(Lh,"^")}function Hv(t){return io(t).replace(kv,"%3D")}function Wv(t){return pl(t).replace(Dh,"%23").replace(Ov,"%3F")}function Uv(t){return t==null?"":Wv(t).replace(Av,"%2F")}function ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Mh," "),o=r.indexOf("="),l=ki(o<0?r:r.slice(0,o)),a=o<0?null:ki(r.slice(o+1));if(l in e){let c=e[l];st(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function qa(t){let e="";for(let n in t){const s=t[n];if(n=Hv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&io(r)):[s&&io(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Gv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=st(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Vv=Symbol(""),Ya=Symbol(""),_l=Symbol(""),$h=Symbol(""),ro=Symbol("");function os(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Mt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Un(4,{from:n,to:e})):h instanceof Error?l(h):_v(h)?l(Un(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function yr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(zv(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Mt(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Xy(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Mt(f,n,s,r,o)()}))}}return i}function zv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qa(t){const e=Bt(_l),n=Bt($h),s=Ve(()=>e.resolve(Nn(t.to))),i=Ve(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Wn.bind(null,u));if(f>-1)return f;const _=Xa(a[c-2]);return c>1&&Xa(u)===_&&h[h.length-1].path!==_?h.findIndex(Wn.bind(null,a[c-2])):f}),r=Ve(()=>i.value>-1&&Qv(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&Ph(n.params,s.value.params));function l(a={}){return Yv(a)?e[Nn(t.replace)?"replace":"push"](Nn(t.to)).catch(Es):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Kv=Mc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qa,setup(t,{slots:e}){const n=js(Qa(t)),{options:s}=Bt(_l),i=Ve(()=>({[Ja(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ja(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),qv=Kv;function Yv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!st(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Xa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ja=(t,e,n)=>t!=null?t:e!=null?e:n,Xv=Mc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Bt(ro),i=Ve(()=>t.route||s.value),r=Bt(Ya,0),o=Ve(()=>{let c=Nn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Ve(()=>i.value.matched[o.value]);oi(Ya,Ve(()=>o.value+1)),oi(Vv,l),oi(ro,i);const a=Af();return li(()=>[a.value,l.value,t.name],([c,u,h],[f,_,g])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Wn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=i.value,u=l.value,h=u&&u.components[t.name],f=t.name;if(!h)return Za(n.default,{Component:h,route:c});const _=u.props[t.name],g=_?_===!0?c.params:typeof _=="function"?_(c):_:null,R=Zc(h,ie({},g,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Za(n.default,{Component:R,route:c})||R}}});function Za(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jv=Xv;function Zv(t){const e=Sv(t.routes,t),n=t.parseQuery||jv,s=t.stringifyQuery||qa,i=t.history,r=os(),o=os(),l=os(),a=kf(At);let c=At;bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mr.bind(null,y=>""+y),h=mr.bind(null,Uv),f=mr.bind(null,ki);function _(y,k){let T,O;return Ah(y)?(T=e.getRecordMatcher(y),O=k):O=y,e.addRoute(O,T)}function g(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function P(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function x(y,k){if(k=ie({},k||a.value),typeof y=="string"){const W=gr(n,y,k.path),d=e.resolve({path:W.path},k),p=i.createHref(W.fullPath);return ie(W,d,{params:f(d.params),hash:ki(W.hash),redirectedFrom:void 0,href:p})}let T;if("path"in y)T=ie({},y,{path:gr(n,y.path,k.path).path});else{const W=ie({},y.params);for(const d in W)W[d]==null&&delete W[d];T=ie({},y,{params:h(y.params)}),k.params=h(k.params)}const O=e.resolve(T,k),te=y.hash||"";O.params=u(f(O.params));const le=ev(s,ie({},y,{hash:$v(te),path:O.path})),z=i.createHref(le);return ie({fullPath:le,hash:te,query:s===qa?Gv(y.query):y.query||{}},O,{redirectedFrom:void 0,href:z})}function B(y){return typeof y=="string"?gr(n,y,a.value.path):ie({},y)}function K(y,k){if(c!==y)return Un(8,{from:k,to:y})}function J(y){return gt(y)}function ke(y){return J(ie(B(y),{replace:!0}))}function Le(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let O=typeof T=="function"?T(y):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=B(O):{path:O},O.params={}),ie({query:y.query,hash:y.hash,params:"path"in O?{}:y.params},O)}}function gt(y,k){const T=c=x(y),O=a.value,te=y.state,le=y.force,z=y.replace===!0,W=Le(T);if(W)return gt(ie(B(W),{state:te,force:le,replace:z}),k||T);const d=T;d.redirectedFrom=k;let p;return!le&&tv(s,O,T)&&(p=Un(16,{to:d,from:O}),mn(O,O,!0,!1)),(p?Promise.resolve(p):it(d,O)).catch(m=>kt(m)?kt(m,2)?m:Fe(m):oe(m,d,O)).then(m=>{if(m){if(kt(m,2))return gt(ie(B(m.to),{state:te,force:le,replace:z}),k||d)}else m=yt(d,O,!0,z,te);return Pt(d,O,m),m})}function fn(y,k){const T=K(y,k);return T?Promise.reject(T):Promise.resolve()}function it(y,k){let T;const[O,te,le]=eC(y,k);T=yr(O.reverse(),"beforeRouteLeave",y,k);for(const W of O)W.leaveGuards.forEach(d=>{T.push(Mt(d,y,k))});const z=fn.bind(null,y,k);return T.push(z),vn(T).then(()=>{T=[];for(const W of r.list())T.push(Mt(W,y,k));return T.push(z),vn(T)}).then(()=>{T=yr(te,"beforeRouteUpdate",y,k);for(const W of te)W.updateGuards.forEach(d=>{T.push(Mt(d,y,k))});return T.push(z),vn(T)}).then(()=>{T=[];for(const W of y.matched)if(W.beforeEnter&&!k.matched.includes(W))if(st(W.beforeEnter))for(const d of W.beforeEnter)T.push(Mt(d,y,k));else T.push(Mt(W.beforeEnter,y,k));return T.push(z),vn(T)}).then(()=>(y.matched.forEach(W=>W.enterCallbacks={}),T=yr(le,"beforeRouteEnter",y,k),T.push(z),vn(T))).then(()=>{T=[];for(const W of o.list())T.push(Mt(W,y,k));return T.push(z),vn(T)}).catch(W=>kt(W,8)?W:Promise.reject(W))}function Pt(y,k,T){for(const O of l.list())O(y,k,T)}function yt(y,k,T,O,te){const le=K(y,k);if(le)return le;const z=k===At,W=bn?history.state:{};T&&(O||z?i.replace(y.fullPath,ie({scroll:z&&W&&W.scroll},te)):i.push(y.fullPath,te)),a.value=y,mn(y,k,T,z),Fe()}let Ke;function dn(){Ke||(Ke=i.listen((y,k,T)=>{if(!Xn.listening)return;const O=x(y),te=Le(O);if(te){gt(ie(te,{replace:!0}),O).catch(Es);return}c=O;const le=a.value;bn&&cv(Wa(le.fullPath,T.delta),er()),it(O,le).catch(z=>kt(z,12)?z:kt(z,2)?(gt(z.to,O).then(W=>{kt(W,20)&&!T.delta&&T.type===Us.pop&&i.go(-1,!1)}).catch(Es),Promise.reject()):(T.delta&&i.go(-T.delta,!1),oe(z,O,le))).then(z=>{z=z||yt(O,le,!1),z&&(T.delta?i.go(-T.delta,!1):T.type===Us.pop&&kt(z,20)&&i.go(-1,!1)),Pt(O,le,z)}).catch(Es)}))}let pn=os(),_n=os(),_e;function oe(y,k,T){Fe(y);const O=_n.list();return O.length?O.forEach(te=>te(y,k,T)):console.error(y),Promise.reject(y)}function ee(){return _e&&a.value!==At?Promise.resolve():new Promise((y,k)=>{pn.add([y,k])})}function Fe(y){return _e||(_e=!y,dn(),pn.list().forEach(([k,T])=>y?T(y):k()),pn.reset()),y}function mn(y,k,T,O){const{scrollBehavior:te}=t;if(!bn||!te)return Promise.resolve();const le=!T&&uv(Wa(y.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Sc().then(()=>te(y,k,le)).then(z=>z&&av(z)).catch(z=>oe(z,y,k))}const vt=y=>i.go(y);let rt;const We=new Set,Xn={currentRoute:a,listening:!0,addRoute:_,removeRoute:g,hasRoute:R,getRoutes:P,resolve:x,options:t,push:J,replace:ke,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:_n.add,isReady:ee,install(y){const k=this;y.component("RouterLink",qv),y.component("RouterView",Jv),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Nn(a)}),bn&&!rt&&a.value===At&&(rt=!0,J(i.location).catch(te=>{}));const T={};for(const te in At)T[te]=Ve(()=>a.value[te]);y.provide(_l,k),y.provide($h,js(T)),y.provide(ro,a);const O=y.unmount;We.add(y),y.unmount=function(){We.delete(y),We.size<1&&(c=At,Ke&&Ke(),Ke=null,a.value=At,rt=!1,_e=!1),O()}}};return Xn}function vn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function eC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Wn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Wn(c,a))||i.push(a))}return[n,s,i]}const tC={data(){return{userName:nt.data().userName,onUserName:function(t){let e=t.target.value,n=nt.data().userName;e.length>3?nt.data().setUserName(e):t.target.value=n}}}},nC={id:"menu"},sC=D("h1",null,"Menu",-1),iC=Gs("Join Game"),rC=Gs("Create Game"),oC=Gs("Find Pack"),lC=Gs("Create Pack"),aC=["value"];function cC(t,e,n,s,i,r){const o=Nr("router-link");return Io(),So("div",nC,[sC,D("ul",null,[D("li",null,[ge(o,{to:"/joinGame"},{default:hs(()=>[iC]),_:1})]),D("li",null,[ge(o,{to:"/createGame"},{default:hs(()=>[rC]),_:1})]),D("li",null,[ge(o,{to:"/findPack"},{default:hs(()=>[oC]),_:1})]),D("li",null,[ge(o,{to:"/createPack"},{default:hs(()=>[lC]),_:1})]),D("input",{type:"text",value:i.userName,onChange:e[0]||(e[0]=l=>i.onUserName(l))},null,40,aC)])])}const uC=No(tC,[["render",cC]]),ds=Zv({history:pv("/Quiz/"),routes:[{path:"/",name:"Menu",component:uC},{path:"/joinGame",name:"joinGame",component:()=>rs(()=>import("./JoinGame.d0f50a06.js"),["assets/JoinGame.d0f50a06.js","assets/JoinGame.37a37249.css"])},{path:"/createGame",name:"createGame",component:()=>rs(()=>import("./CreateGame.aab63f3c.js"),["assets/CreateGame.aab63f3c.js","assets/CreateGame.29a1254a.css","assets/Packs.8bdf5f41.js","assets/Packs.b665a396.css"])},{path:"/findPack",name:"findPack",component:()=>rs(()=>import("./FindPack.69c72003.js"),["assets/FindPack.69c72003.js","assets/FindPack.2e32aa02.css","assets/Packs.8bdf5f41.js","assets/Packs.b665a396.css"])},{path:"/createPack",name:"createPack",component:()=>rs(()=>import("./CreatePack.3bd10491.js"),[])},{path:"/game",name:"game",component:()=>rs(()=>Promise.resolve().then(()=>RC),void 0)}]});function hC(){console.log("aa"),nt.data().leaveGame()}const fC={data(){return{pickedGame:nt.data().pickedGame,players:nt.data().pickedGame?nt.data().pickedGame.players:null,showPlayers:function(){for(;document.getElementById("playersBlock").firstElementChild;)document.getElementById("playersBlock").firstElementChild.remove();console.log(this.pickedGame);let t=this.players.filter(e=>e.inGame==!0);console.log(t);for(let e=0;e<t.length;e++)document.getElementById("playersBlock").insertAdjacentHTML("beforeend",`
                        <div class="player">
                        <img src="#" alt="Icon">
                        <label class="playersNick">${t[e].name}</label>
                        <label class="playersPoints">${t[e].points?t[e].points:0}</label>
                    </div>`)},showHeader:function(){for(;document.getElementById("headerOfGame").firstElementChild;)document.getElementById("headerOfGame").firstElementChild.remove();document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`
                <button id="leaveBtn">Leave</button>
                `),document.getElementById("leaveBtn").addEventListener("click",hC)}}}},dC={id:"game"},pC=D("div",{id:"roundChange"},null,-1),_C={id:"gameBlock"},mC={id:"headerOfGame"},gC={id:"tableWithQuestions"},yC=xd('<input disabled="disabled" value="Category"><div class="points">100</div><div class="points">200</div><div class="points">300</div><div class="points">400</div><div class="points">500</div><div class="category"></div>',7),vC=D("div",{class:"category"},null,-1),CC=D("div",{class:"category"},null,-1),EC=D("div",{class:"category"},null,-1),bC=D("div",{class:"category"},null,-1),wC=D("div",{class:"category"},null,-1),IC=D("div",{class:"category"},null,-1),SC=D("div",{id:"playersBlock"},null,-1);function TC(t,e,n,s,i,r){return Io(),So("div",dC,[pC,D("div",_C,[D("div",mC,[D("label",null,Kh(i.pickedGame.name),1)]),D("div",gC,[yC,D("div",{onClick:e[0]||(e[0]=o=>t.onclick(o))}),D("div",{onClick:e[1]||(e[1]=o=>t.onclick(o))}),D("div",{onClick:e[2]||(e[2]=o=>t.onclick(o))}),D("div",{onClick:e[3]||(e[3]=o=>t.onclick(o))}),D("div",{onClick:e[4]||(e[4]=o=>t.onclick(o))}),vC,D("div",{onClick:e[5]||(e[5]=o=>t.onclick(o))}),D("div",{onClick:e[6]||(e[6]=o=>t.onclick(o))}),D("div",{onClick:e[7]||(e[7]=o=>t.onclick(o))}),D("div",{onClick:e[8]||(e[8]=o=>t.onclick(o))}),D("div",{onClick:e[9]||(e[9]=o=>t.onclick(o))}),CC,D("div",{onClick:e[10]||(e[10]=o=>t.onclick(o))}),D("div",{onClick:e[11]||(e[11]=o=>t.onclick(o))}),D("div",{onClick:e[12]||(e[12]=o=>t.onclick(o))}),D("div",{onClick:e[13]||(e[13]=o=>t.onclick(o))}),D("div",{onClick:e[14]||(e[14]=o=>t.onclick(o))}),EC,D("div",{onClick:e[15]||(e[15]=o=>t.onclick(o))}),D("div",{onClick:e[16]||(e[16]=o=>t.onclick(o))}),D("div",{onClick:e[17]||(e[17]=o=>t.onclick(o))}),D("div",{onClick:e[18]||(e[18]=o=>t.onclick(o))}),D("div",{onClick:e[19]||(e[19]=o=>t.onclick(o))}),bC,D("div",{onClick:e[20]||(e[20]=o=>t.onclick(o))}),D("div",{onClick:e[21]||(e[21]=o=>t.onclick(o))}),D("div",{onClick:e[22]||(e[22]=o=>t.onclick(o))}),D("div",{onClick:e[23]||(e[23]=o=>t.onclick(o))}),D("div",{onClick:e[24]||(e[24]=o=>t.onclick(o))}),wC,D("div",{onClick:e[25]||(e[25]=o=>t.onclick(o))}),D("div",{onClick:e[26]||(e[26]=o=>t.onclick(o))}),D("div",{onClick:e[27]||(e[27]=o=>t.onclick(o))}),D("div",{onClick:e[28]||(e[28]=o=>t.onclick(o))}),D("div",{onClick:e[29]||(e[29]=o=>t.onclick(o))}),IC,D("div",{onClick:e[30]||(e[30]=o=>t.onclick(o))}),D("div",{onClick:e[31]||(e[31]=o=>t.onclick(o))}),D("div",{onClick:e[32]||(e[32]=o=>t.onclick(o))}),D("div",{onClick:e[33]||(e[33]=o=>t.onclick(o))}),D("div",{onClick:e[34]||(e[34]=o=>t.onclick(o))})]),SC])])}const Ct=No(fC,[["render",TC]]),RC=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"})),NC={apiKey:"API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",databaseURL:"https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"PROJECT_ID",storageBucket:"PROJECT_ID.appspot.com",messagingSenderId:"SENDER_ID",appId:"APP_ID",measurementId:"G-MEASUREMENT_ID"},PC=I_(NC),ls=dl(PC),as=Se(dl()),ct=dl();let ve,ec=[],Ue,qt,vr=[],je,Ge,Ne,Cr;const nt={components:{Game:Ct},data(){return{setData:function(t,e){console.log("start"),at(Se(ls,t),e).then(()=>{console.log("fifnish")})},getPacksData:async function(){is(wt(as,"packs/")).then(t=>{if(t.exists())return Cr=t.val(),console.log(Cr),t.val();console.log("No data available")})},authFirebase:async function(){if(localStorage.getItem("uid")===null){is(wt(as,"users/")).then(t=>{t.exists()?ec=Object.keys(t.val()):console.log("No data available")}).catch(t=>{console.error(t)});do ve=Math.floor(Math.random()*Math.pow(10,12)),Ue=`User${ve.toString().substring(0,4)}`;while(ec.findIndex(t=>t==ve)!==-1);at(Se(ls,`users/${ve}`),{name:Ue}).then(()=>{localStorage.setItem("uid",ve),localStorage.setItem("userName",Ue)})}else ve=localStorage.getItem("uid"),Ue=localStorage.getItem("userName")},setUserName:function(t){Ue=t,at(Se(ls,`users/${ve}`),{name:Ue}).then(()=>{localStorage.setItem("userName",Ue)})},createGame:function(t,e,n,s){if(localStorage.getItem("currentGame")!==void 0&&this.gameRooms[localStorage.getItem("currentGame")]!==void 0&&this.gameRooms[localStorage.getItem("currentGame")].players!==void 0)for(let i=0;i<Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players).length;i++)Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[i][1].id==ve&&(Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[i][1].inGame=!1,at(Se(ct,`rooms/${localStorage.getItem("currentGame")}/players/${i}`),{}));is(wt(as,"rooms/")).then(i=>{if(i.exists())vr=Object.keys(i.val()),vr.shift();else return qt=Math.floor(Math.random()*Math.pow(10,12))}).catch(i=>{console.error(i)});do qt=Math.floor(Math.random()*Math.pow(10,12));while(vr.findIndex(i=>i==qt)!==-1);Ne={name:t,host:{id:ve,name:Ue},answerType:e,toJoin:n,pickedPack:s,ID:qt,players:[{id:ve,name:Ue,inGame:!0}]},Ct.data().pickedGame=Ne,at(Se(ls,`rooms/${qt}`),Ne).then(()=>{ii(Se(ct,`rooms/${qt}`),i=>{console.log(i.val()),i.val()!==null&&(Ne=i.val(),console.log(Ne)),Ct.data().showPlayers(),Ct.data().showHeader()})}).then(()=>{localStorage.setItem("currentGame",qt),Ge=[],Ge.push({id:ve,name:Ue,inGame:!0}),ds.push("/game")})},getGameRooms:function(){is(wt(as,"rooms/")).then(t=>{if(t.exists()&&(je=t.val(),delete je.test,console.log(je)),console.log(je),je!==void 0)for(let e=0;e<Object.entries(je).length;e++){let n=[];if(Object.entries(je)[e][1].players!==void 0)for(let s=0;s<Object.entries(je)[e][1].players.length;s++)Object.entries(je)[e][1].players[s].inGame==!0&&n.push(Object.entries(je)[e][1].players[s]);n.length<1&&(console.log("DELETE"),at(Se(ct,`rooms/${Object.entries(je)[e][0]}`),{}))}}).catch(t=>{console.error(t)})},joinGameRoom:function(t){if(localStorage.getItem("currentGame")!==void 0&&localStorage.getItem("currentGame")!==t&&this.gameRooms[localStorage.getItem("currentGame")]!==void 0&&this.gameRooms[localStorage.getItem("currentGame")].players!==void 0)for(let e=0;e<Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players).length;e++)Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[e][1].id==ve&&(Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[e][1].inGame=!1,at(Se(ct,`rooms/${localStorage.getItem("currentGame")}/players/${e}`),{}));is(wt(as,`rooms/${t}/`)).then(e=>{e.exists()&&(Ne=e.val(),console.log(Ne),Ge=[],Ge=e.val().players,console.log(Ge))}).catch(e=>{console.error(e)}).then(()=>{console.log(Ge);let e=Ge.findIndex(n=>n.id==ve);e==-1?(Ge.push({id:ve,name:Ue,inGame:!0}),console.log(Ge),at(Se(ls,`rooms/${t}/players`),Ge).then(()=>{ii(Se(ct,`rooms/${t}`),n=>{console.log(n.val()),n.val()!==null&&(Ne=n.val(),console.log(Ne)),Ct.data().showPlayers(),Ct.data().showHeader()})}).then(()=>{ds.push("/game")})):(ii(Se(ct,`rooms/${t}`),n=>{console.log(n.val()),n.val()!==null&&(Ne=n.val(),console.log(Ne)),Ct.data().showPlayers(),Ct.data().showHeader()}),Ge[e].inGame=!0,ds.push("/game"))}).then(()=>{localStorage.setItem("currentGame",t);let e=Ge.findIndex(r=>r.id==ve);const n=Se(ct,`rooms/${t}/players/${e}/inGame`),s=Se(ct,`users/${ve}/lastOnline`),i=Se(ct,".info/connected");ii(i,r=>{r.val()===!0&&(Fa(n).remove(),at(n,!0),Fa(s).set(qy()))})})},leaveGame:function(){console.log(Object.entries(Ne.players).length);for(let t=0;t<Object.entries(Ne.players).length;t++)Object.entries(Ne.players)[t][1].id==ve&&at(Se(ct,`rooms/${localStorage.getItem("currentGame")}/players/${t}/inGame`),!1).then(()=>{localStorage.setItem("currentGame",void 0),ds.push("/joinGame")})},pickedGame:Ne,gameRooms:je,uid:ve,userName:Ue,packs:Cr}}};nt.data().authFirebase();nt.data().getPacksData();nt.data().getGameRooms();console.log(nt.data().userName);const xC={};function AC(t,e,n,s,i,r){const o=Nr("Loader"),l=Nr("RouterView");return Io(),So(ht,null,[ge(o),ge(l)],64)}const kC=No(xC,[["render",AC]]);const Hh=cp(kC);Hh.use(ds);Hh.mount("#app");export{ht as F,No as _,D as a,ge as b,So as c,OC as d,DC as e,nt as f,Gs as g,xd as h,ds as i,ao as n,Io as o,Nr as r,Kh as t,hs as w};
