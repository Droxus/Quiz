const nf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};nf();function Go(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rf=Go(sf);function qc(t){return!!t||t===""}function $o(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Me(s)?lf(s):$o(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Me(t))return t;if(Pe(t))return t}}const of=/;(?![^(]*\))/g,af=/:(.+)/;function lf(t){const e={};return t.split(of).forEach(n=>{if(n){const s=n.split(af);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Uo(t){let e="";if(Me(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Uo(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const YC=t=>Me(t)?t:t==null?"":q(t)||Pe(t)&&(t.toString===Kc||!Q(t.toString))?JSON.stringify(t,Vc,2):String(t),Vc=(t,e)=>e&&e.__v_isRef?Vc(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:zc(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!q(e)&&!Yc(e)?String(e):e,fe={},Zn=[],pt=()=>{},cf=()=>!1,uf=/^on[^a-z]/,rr=t=>uf.test(t),Ho=t=>t.startsWith("onUpdate:"),je=Object.assign,Wo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},df=Object.prototype.hasOwnProperty,Z=(t,e)=>df.call(t,e),q=Array.isArray,es=t=>or(t)==="[object Map]",zc=t=>or(t)==="[object Set]",Q=t=>typeof t=="function",Me=t=>typeof t=="string",jo=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Qc=t=>Pe(t)&&Q(t.then)&&Q(t.catch),Kc=Object.prototype.toString,or=t=>Kc.call(t),hf=t=>or(t).slice(8,-1),Yc=t=>or(t)==="[object Object]",qo=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ff=/-(\w)/g,Pt=ar(t=>t.replace(ff,(e,n)=>n?n.toUpperCase():"")),mf=/\B([A-Z])/g,_s=ar(t=>t.replace(mf,"-$1").toLowerCase()),lr=ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sr=ar(t=>t?`on${lr(t)}`:""),Qs=(t,e)=>!Object.is(t,e),Pr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Di=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tl;const gf=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kt;class _f{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&kt&&(this.parent=kt,this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function yf(t,e=kt){e&&e.active&&e.effects.push(t)}const Vo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xc=t=>(t.w&ln)>0,Jc=t=>(t.n&ln)>0,Ef=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ln},vf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xc(i)&&!Jc(i)?i.delete(t):e[n++]=i,i.w&=~ln,i.n&=~ln}e.length=n}},Zr=new WeakMap;let Ls=0,ln=1;const eo=30;let dt;const Cn=Symbol(""),to=Symbol("");class zo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yf(this,s)}run(){if(!this.active)return this.fn();let e=dt,n=en;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dt,dt=this,en=!0,ln=1<<++Ls,Ls<=eo?Ef(this):nl(this),this.fn()}finally{Ls<=eo&&vf(this),ln=1<<--Ls,dt=this.parent,en=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(nl(this),this.onStop&&this.onStop(),this.active=!1)}}function nl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let en=!0;const Zc=[];function ys(){Zc.push(en),en=!1}function Es(){const t=Zc.pop();en=t===void 0?!0:t}function et(t,e,n){if(en&&dt){let s=Zr.get(t);s||Zr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Vo()),eu(i)}}function eu(t,e){let n=!1;Ls<=eo?Jc(t)||(t.n|=ln,n=!Xc(t)):n=!t.has(dt),n&&(t.add(dt),dt.deps.push(t))}function Ut(t,e,n,s,i,r){const o=Zr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?qo(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),es(t)&&a.push(o.get(to)));break;case"delete":q(t)||(a.push(o.get(Cn)),es(t)&&a.push(o.get(to)));break;case"set":es(t)&&a.push(o.get(Cn));break}if(a.length===1)a[0]&&no(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);no(Vo(l))}}function no(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&sl(s);for(const s of n)s.computed||sl(s)}function sl(t,e){(t!==dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const wf=Go("__proto__,__v_isRef,__isVue"),tu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jo)),Cf=Qo(),bf=Qo(!1,!0),If=Qo(!0),il=kf();function kf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ys();const s=ne(this)[e].apply(this,n);return Es(),s}}),t}function Qo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Uf:ou:e?ru:iu).get(s))return s;const o=q(s);if(!t&&o&&Z(il,i))return Reflect.get(il,i,r);const a=Reflect.get(s,i,r);return(jo(i)?tu.has(i):wf(i))||(t||et(s,"get",i),e)?a:Ge(a)?o&&qo(i)?a:a.value:Pe(a)?t?au(a):fi(a):a}}const Tf=nu(),Af=nu(!0);function nu(t=!1){return function(n,s,i,r){let o=n[s];if(Ks(o)&&Ge(o)&&!Ge(i))return!1;if(!t&&!Ks(i)&&(so(i)||(i=ne(i),o=ne(o)),!q(n)&&Ge(o)&&!Ge(i)))return o.value=i,!0;const a=q(n)&&qo(s)?Number(s)<n.length:Z(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?Qs(i,o)&&Ut(n,"set",s,i):Ut(n,"add",s,i)),l}}function Rf(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ut(t,"delete",e,void 0),s}function Sf(t,e){const n=Reflect.has(t,e);return(!jo(e)||!tu.has(e))&&et(t,"has",e),n}function Pf(t){return et(t,"iterate",q(t)?"length":Cn),Reflect.ownKeys(t)}const su={get:Cf,set:Tf,deleteProperty:Rf,has:Sf,ownKeys:Pf},xf={get:If,set(t,e){return!0},deleteProperty(t,e){return!0}},Nf=je({},su,{get:bf,set:Af}),Ko=t=>t,cr=t=>Reflect.getPrototypeOf(t);function wi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=cr(i),a=s?Ko:n?Jo:Ys;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ci(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function bi(t,e=!1){return t=t.__v_raw,!e&&et(ne(t),"iterate",Cn),Reflect.get(t,"size",t)}function rl(t){t=ne(t);const e=ne(this);return cr(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function ol(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=cr(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Qs(e,o)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function al(t){const e=ne(this),{has:n,get:s}=cr(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ut(e,"delete",t,void 0),r}function ll(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function Ii(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Ko:t?Jo:Ys;return!t&&et(a,"iterate",Cn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ki(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=es(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ko:e?Jo:Ys;return!e&&et(r,"iterate",l?to:Cn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function Bf(){const t={get(r){return wi(this,r)},get size(){return bi(this)},has:Ci,add:rl,set:ol,delete:al,clear:ll,forEach:Ii(!1,!1)},e={get(r){return wi(this,r,!1,!0)},get size(){return bi(this)},has:Ci,add:rl,set:ol,delete:al,clear:ll,forEach:Ii(!1,!0)},n={get(r){return wi(this,r,!0)},get size(){return bi(this,!0)},has(r){return Ci.call(this,r,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Ii(!0,!1)},s={get(r){return wi(this,r,!0,!0)},get size(){return bi(this,!0)},has(r){return Ci.call(this,r,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ki(r,!1,!1),n[r]=ki(r,!0,!1),e[r]=ki(r,!1,!0),s[r]=ki(r,!0,!0)}),[t,n,e,s]}const[Mf,Lf,Of,Df]=Bf();function Yo(t,e){const n=e?t?Df:Of:t?Lf:Mf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const Ff={get:Yo(!1,!1)},Gf={get:Yo(!1,!0)},$f={get:Yo(!0,!1)},iu=new WeakMap,ru=new WeakMap,ou=new WeakMap,Uf=new WeakMap;function Hf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wf(t){return t.__v_skip||!Object.isExtensible(t)?0:Hf(hf(t))}function fi(t){return Ks(t)?t:Xo(t,!1,su,Ff,iu)}function jf(t){return Xo(t,!1,Nf,Gf,ru)}function au(t){return Xo(t,!0,xf,$f,ou)}function Xo(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Wf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ts(t){return Ks(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function lu(t){return ts(t)||Ks(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function cu(t){return Di(t,"__v_skip",!0),t}const Ys=t=>Pe(t)?fi(t):t,Jo=t=>Pe(t)?au(t):t;function uu(t){en&&dt&&(t=ne(t),eu(t.dep||(t.dep=Vo())))}function du(t,e){t=ne(t),t.dep&&no(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function qf(t){return hu(t,!1)}function Vf(t){return hu(t,!0)}function hu(t,e){return Ge(t)?t:new zf(t,e)}class zf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Ys(e)}get value(){return uu(this),this._value}set value(e){e=this.__v_isShallow?e:ne(e),Qs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ys(e),du(this))}}function ns(t){return Ge(t)?t.value:t}const Qf={get:(t,e,n)=>ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fu(t){return ts(t)?t:new Proxy(t,Qf)}class Kf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new zo(e,()=>{this._dirty||(this._dirty=!0,du(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return uu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yf(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=pt):(s=t.get,i=t.set),new Kf(s,i,r||!i,n)}function tn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ur(r,e,n)}return i}function gt(t,e,n,s){if(Q(t)){const r=tn(t,e,n,s);return r&&Qc(r)&&r.catch(o=>{ur(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}function ur(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){tn(l,null,10,[t,o,a]);return}}Xf(t,n,i,s)}function Xf(t,e,n,s=!0){console.error(t)}let Fi=!1,io=!1;const Je=[];let Dt=0;const Gs=[];let Os=null,Qn=0;const $s=[];let Qt=null,Kn=0;const mu=Promise.resolve();let Zo=null,ro=null;function pu(t){const e=Zo||mu;return t?e.then(this?t.bind(this):t):e}function Jf(t){let e=Dt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Xs(Je[s])<t?e=s+1:n=s}return e}function gu(t){(!Je.length||!Je.includes(t,Fi&&t.allowRecurse?Dt+1:Dt))&&t!==ro&&(t.id==null?Je.push(t):Je.splice(Jf(t.id),0,t),_u())}function _u(){!Fi&&!io&&(io=!0,Zo=mu.then(vu))}function Zf(t){const e=Je.indexOf(t);e>Dt&&Je.splice(e,1)}function yu(t,e,n,s){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),_u()}function em(t){yu(t,Os,Gs,Qn)}function tm(t){yu(t,Qt,$s,Kn)}function dr(t,e=null){if(Gs.length){for(ro=e,Os=[...new Set(Gs)],Gs.length=0,Qn=0;Qn<Os.length;Qn++)Os[Qn]();Os=null,Qn=0,ro=null,dr(t,e)}}function Eu(t){if(dr(),$s.length){const e=[...new Set($s)];if($s.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>Xs(n)-Xs(s)),Kn=0;Kn<Qt.length;Kn++)Qt[Kn]();Qt=null,Kn=0}}const Xs=t=>t.id==null?1/0:t.id;function vu(t){io=!1,Fi=!0,dr(t),Je.sort((n,s)=>Xs(n)-Xs(s));const e=pt;try{for(Dt=0;Dt<Je.length;Dt++){const n=Je[Dt];n&&n.active!==!1&&tn(n,null,14)}}finally{Dt=0,Je.length=0,Eu(),Fi=!1,Zo=null,(Je.length||Gs.length||$s.length)&&vu(t)}}function nm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||fe;h&&(i=n.map(g=>g.trim())),d&&(i=n.map(pf))}let a,l=s[a=Sr(e)]||s[a=Sr(Pt(e))];!l&&r&&(l=s[a=Sr(_s(e))]),l&&gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,i)}}function wu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=wu(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):(q(r)?r.forEach(l=>o[l]=null):je(o,r),s.set(t,o),o)}function hr(t,e){return!t||!rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,_s(e))||Z(t,e))}let Rt=null,Cu=null;function Gi(t){const e=Rt;return Rt=t,Cu=t&&t.type.__scopeId||null,e}function Ds(t,e=Rt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yl(-1);const r=Gi(e),o=t(...i);return Gi(r),s._d&&yl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function xr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:g,ctx:y,inheritAttrs:x}=t;let k,N;const $=Gi(t);try{if(n.shapeFlag&4){const W=i||s;k=Tt(u.call(W,W,d,r,g,h,y)),N=l}else{const W=e;k=Tt(W.length>1?W(r,{attrs:l,slots:a,emit:c}):W(r,null)),N=e.props?l:sm(l)}}catch(W){Us.length=0,ur(W,t,1),k=Be(Tn)}let H=k;if(N&&x!==!1){const W=Object.keys(N),{shapeFlag:Ie}=H;W.length&&Ie&7&&(o&&W.some(Ho)&&(N=im(N,o)),H=rs(H,N))}return n.dirs&&(H=rs(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),k=H,Gi($),k}const sm=t=>{let e;for(const n in t)(n==="class"||n==="style"||rr(n))&&((e||(e={}))[n]=t[n]);return e},im=(t,e)=>{const n={};for(const s in t)(!Ho(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!hr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cl(s,o,c):!0:!!o;return!1}function cl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!hr(n,r))return!0}return!1}function om({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const am=t=>t.__isSuspense;function lm(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):tm(t)}function xi(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function nn(t,e,n=!1){const s=De||Rt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e}}const ul={};function Ni(t,e,n){return bu(t,e,n)}function bu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=fe){const a=De;let l,c=!1,u=!1;if(Ge(t)?(l=()=>t.value,c=so(t)):ts(t)?(l=()=>t,s=!0):q(t)?(u=!0,c=t.some(N=>ts(N)||so(N)),l=()=>t.map(N=>{if(Ge(N))return N.value;if(ts(N))return Xn(N);if(Q(N))return tn(N,a,2)})):Q(t)?e?l=()=>tn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),gt(t,a,3,[h])}:l=pt,e&&s){const N=l;l=()=>Xn(N())}let d,h=N=>{d=k.onStop=()=>{tn(N,a,4)}};if(Zs)return h=pt,e?n&&gt(e,a,3,[l(),u?[]:void 0,h]):l(),pt;let g=u?[]:ul;const y=()=>{if(!!k.active)if(e){const N=k.run();(s||c||(u?N.some(($,H)=>Qs($,g[H])):Qs(N,g)))&&(d&&d(),gt(e,a,3,[N,g===ul?void 0:g,h]),g=N)}else k.run()};y.allowRecurse=!!e;let x;i==="sync"?x=y:i==="post"?x=()=>ze(y,a&&a.suspense):x=()=>em(y);const k=new zo(l,x);return e?n?y():g=k.run():i==="post"?ze(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&Wo(a.scope.effects,k)}}function cm(t,e,n){const s=this.proxy,i=Me(t)?t.includes(".")?Iu(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=De;os(this);const a=bu(i,r.bind(s),n);return o?os(o):bn(),a}function Iu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Xn(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Xn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(zc(t)||es(t))t.forEach(n=>{Xn(n,e)});else if(Yc(t))for(const n in t)Xn(t[n],e);return t}function ku(t){return Q(t)?{setup:t,name:t.name}:t}const Bi=t=>!!t.type.__asyncLoader,Tu=t=>t.type.__isKeepAlive;function um(t,e){Au(t,"a",e)}function dm(t,e){Au(t,"da",e)}function Au(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Tu(i.parent.vnode)&&hm(s,e,n,i),i=i.parent}}function hm(t,e,n,s){const i=fr(e,t,s,!0);Ru(()=>{Wo(s[e],i)},n)}function fr(t,e,n=De,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ys(),os(n);const a=gt(e,n,t,o);return bn(),Es(),a});return s?i.unshift(r):i.push(r),r}}const Wt=t=>(e,n=De)=>(!Zs||t==="sp")&&fr(t,e,n),fm=Wt("bm"),mm=Wt("m"),pm=Wt("bu"),gm=Wt("u"),_m=Wt("bum"),Ru=Wt("um"),ym=Wt("sp"),Em=Wt("rtg"),vm=Wt("rtc");function wm(t,e=De){fr("ec",t,e)}function hn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ys(),gt(l,n,8,[t.el,a,t,e]),Es())}}const Su="components";function Pu(t,e){return bm(Su,t,!0,e)||t}const Cm=Symbol();function bm(t,e,n=!0,s=!1){const i=Rt||De;if(i){const r=i.type;if(t===Su){const a=Jm(r,!1);if(a&&(a===e||a===Pt(e)||a===lr(Pt(e))))return r}const o=dl(i[t]||r[t],e)||dl(i.appContext[t],e);return!o&&s?r:o}}function dl(t,e){return t&&(t[e]||t[Pt(e)]||t[lr(Pt(e))])}function XC(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Me(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const oo=t=>t?qu(t)?sa(t)||t.proxy:oo(t.parent):null,$i=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oo(t.parent),$root:t=>oo(t.root),$emit:t=>t.emit,$options:t=>Nu(t),$forceUpdate:t=>t.f||(t.f=()=>gu(t.update)),$nextTick:t=>t.n||(t.n=pu.bind(t.proxy)),$watch:t=>cm.bind(t)}),Im={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==fe&&Z(s,e))return o[e]=1,s[e];if(i!==fe&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==fe&&Z(n,e))return o[e]=4,n[e];ao&&(o[e]=0)}}const u=$i[e];let d,h;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==fe&&Z(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Z(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==fe&&Z(i,e)?(i[e]=n,!0):s!==fe&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==fe&&Z(t,o)||e!==fe&&Z(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z($i,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ao=!0;function km(t){const e=Nu(t),n=t.proxy,s=t.ctx;ao=!1,e.beforeCreate&&hl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:y,activated:x,deactivated:k,beforeDestroy:N,beforeUnmount:$,destroyed:H,unmounted:W,render:Ie,renderTracked:Le,renderTriggered:at,errorCaptured:vt,serverPrefetch:wt,expose:jt,inheritAttrs:Bt,components:lt,directives:Ln,filters:On}=e;if(c&&Tm(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];Q(ie)&&(s[ue]=ie.bind(n))}if(i){const ue=i.call(n,n);Pe(ue)&&(t.data=fi(ue))}if(ao=!0,r)for(const ue in r){const ie=r[ue],Ye=Q(ie)?ie.bind(n,n):Q(ie.get)?ie.get.bind(n,n):pt,Fn=!Q(ie)&&Q(ie.set)?ie.set.bind(n):pt,Mt=rt({get:Ye,set:Fn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Ct=>Mt.value=Ct})}if(a)for(const ue in a)xu(a[ue],s,n,ue);if(l){const ue=Q(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ie=>{xi(ie,ue[ie])})}u&&hl(u,t,"c");function ke(ue,ie){q(ie)?ie.forEach(Ye=>ue(Ye.bind(n))):ie&&ue(ie.bind(n))}if(ke(fm,d),ke(mm,h),ke(pm,g),ke(gm,y),ke(um,x),ke(dm,k),ke(wm,vt),ke(vm,Le),ke(Em,at),ke(_m,$),ke(Ru,W),ke(ym,wt),q(jt))if(jt.length){const ue=t.exposed||(t.exposed={});jt.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Ye=>n[ie]=Ye})})}else t.exposed||(t.exposed={});Ie&&t.render===pt&&(t.render=Ie),Bt!=null&&(t.inheritAttrs=Bt),lt&&(t.components=lt),Ln&&(t.directives=Ln)}function Tm(t,e,n=pt,s=!1){q(t)&&(t=lo(t));for(const i in t){const r=t[i];let o;Pe(r)?"default"in r?o=nn(r.from||i,r.default,!0):o=nn(r.from||i):o=nn(r),Ge(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function hl(t,e,n){gt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xu(t,e,n,s){const i=s.includes(".")?Iu(n,s):()=>n[s];if(Me(t)){const r=e[t];Q(r)&&Ni(i,r)}else if(Q(t))Ni(i,t.bind(n));else if(Pe(t))if(q(t))t.forEach(r=>xu(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&Ni(i,r,t)}}function Nu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ui(l,c,o,!0)),Ui(l,e,o)),r.set(e,l),l}function Ui(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ui(t,r,n,!0),i&&i.forEach(o=>Ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Am[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Am={data:fl,props:pn,emits:pn,methods:pn,computed:pn,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:pn,directives:pn,watch:Sm,provide:fl,inject:Rm};function fl(t,e){return e?t?function(){return je(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function Rm(t,e){return pn(lo(t),lo(e))}function lo(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?je(je(Object.create(null),t),e):e}function Sm(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function Pm(t,e,n,s=!1){const i={},r={};Di(r,pr,1),t.propsDefaults=Object.create(null),Bu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:jf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function xm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(hr(t.emitsOptions,h))continue;const g=e[h];if(l)if(Z(r,h))g!==r[h]&&(r[h]=g,c=!0);else{const y=Pt(h);i[y]=co(l,a,y,g,t,!1)}else g!==r[h]&&(r[h]=g,c=!0)}}}else{Bu(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Z(e,d)&&((u=_s(d))===d||!Z(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=co(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Z(e,d)&&!0)&&(delete r[d],c=!0)}c&&Ut(t,"set","$attrs")}function Bu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pi(l))continue;const c=e[l];let u;i&&Z(i,u=Pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:hr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||fe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=co(i,l,d,c[d],t,!Z(c,d))}}return o}function co(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(os(i),s=c[n]=l.call(null,e),bn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===_s(n))&&(s=!0))}return s}function Mu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=d=>{l=!0;const[h,g]=Mu(d,e,!0);je(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Zn),Zn;if(q(r))for(let u=0;u<r.length;u++){const d=Pt(r[u]);ml(d)&&(o[d]=fe)}else if(r)for(const u in r){const d=Pt(u);if(ml(d)){const h=r[u],g=o[d]=q(h)||Q(h)?{type:h}:h;if(g){const y=_l(Boolean,g.type),x=_l(String,g.type);g[0]=y>-1,g[1]=x<0||y<x,(y>-1||Z(g,"default"))&&a.push(d)}}}const c=[o,a];return s.set(t,c),c}function ml(t){return t[0]!=="$"}function pl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function gl(t,e){return pl(t)===pl(e)}function _l(t,e){return q(e)?e.findIndex(n=>gl(n,t)):Q(e)&&gl(e,t)?0:-1}const Lu=t=>t[0]==="_"||t==="$stable",ea=t=>q(t)?t.map(Tt):[Tt(t)],Nm=(t,e,n)=>{if(e._n)return e;const s=Ds((...i)=>ea(e(...i)),n);return s._c=!1,s},Ou=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Lu(i))continue;const r=t[i];if(Q(r))e[i]=Nm(i,r,s);else if(r!=null){const o=ea(r);e[i]=()=>o}}},Du=(t,e)=>{const n=ea(e);t.slots.default=()=>n},Bm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Di(e,"_",n)):Ou(e,t.slots={})}else t.slots={},e&&Du(t,e);Di(t.slots,pr,1)},Mm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(je(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Ou(e,i)),o=e}else e&&(Du(t,e),o={default:1});if(r)for(const a in i)!Lu(a)&&!(a in o)&&delete i[a]};function Fu(){return{app:null,config:{isNativeTag:cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Om(t,e){return function(s,i=null){Q(s)||(s=Object.assign({},s)),i!=null&&!Pe(i)&&(i=null);const r=Fu(),o=new Set;let a=!1;const l=r.app={_uid:Lm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ep,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=Be(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,sa(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function uo(t,e,n,s,i=!1){if(q(t)){t.forEach((h,g)=>uo(h,e&&(q(e)?e[g]:e),n,s,i));return}if(Bi(s)&&!i)return;const r=s.shapeFlag&4?sa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,Z(d,c)&&(d[c]=null)):Ge(c)&&(c.value=null)),Q(l))tn(l,a,12,[o,u]);else{const h=Me(l),g=Ge(l);if(h||g){const y=()=>{if(t.f){const x=h?u[l]:l.value;i?q(x)&&Wo(x,r):q(x)?x.includes(r)||x.push(r):h?(u[l]=[r],Z(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Z(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ze(y,n)):y()}}}const ze=lm;function Dm(t){return Fm(t)}function Fm(t,e){const n=gf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=pt,cloneNode:y,insertStaticContent:x}=t,k=(f,m,_,w=null,v=null,T=null,P=!1,I=null,R=!!m.dynamicChildren)=>{if(f===m)return;f&&!Ts(f,m)&&(w=D(f),tt(f,v,T,!0),f=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:C,ref:F,shapeFlag:L}=m;switch(C){case ta:N(f,m,_,w);break;case Tn:$(f,m,_,w);break;case Mi:f==null&&H(m,_,w,P);break;case Ot:Ln(f,m,_,w,v,T,P,I,R);break;default:L&1?Le(f,m,_,w,v,T,P,I,R):L&6?On(f,m,_,w,v,T,P,I,R):(L&64||L&128)&&C.process(f,m,_,w,v,T,P,I,R,de)}F!=null&&v&&uo(F,f&&f.ref,T,m||f,!m)},N=(f,m,_,w)=>{if(f==null)s(m.el=a(m.children),_,w);else{const v=m.el=f.el;m.children!==f.children&&c(v,m.children)}},$=(f,m,_,w)=>{f==null?s(m.el=l(m.children||""),_,w):m.el=f.el},H=(f,m,_,w)=>{[f.el,f.anchor]=x(f.children,m,_,w,f.el,f.anchor)},W=({el:f,anchor:m},_,w)=>{let v;for(;f&&f!==m;)v=h(f),s(f,_,w),f=v;s(m,_,w)},Ie=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=h(f),i(f),f=_;i(m)},Le=(f,m,_,w,v,T,P,I,R)=>{P=P||m.type==="svg",f==null?at(m,_,w,v,T,P,I,R):jt(f,m,v,T,P,I,R)},at=(f,m,_,w,v,T,P,I)=>{let R,C;const{type:F,props:L,shapeFlag:G,transition:j,patchFlag:ee,dirs:oe}=f;if(f.el&&y!==void 0&&ee===-1)R=f.el=y(f.el);else{if(R=f.el=o(f.type,T,L&&L.is,L),G&8?u(R,f.children):G&16&&wt(f.children,R,null,w,v,T&&F!=="foreignObject",P,I),oe&&hn(f,null,w,"created"),L){for(const me in L)me!=="value"&&!Pi(me)&&r(R,me,null,L[me],T,f.children,w,v,S);"value"in L&&r(R,"value",null,L.value),(C=L.onVnodeBeforeMount)&&It(C,w,f)}vt(R,f,f.scopeId,P,w)}oe&&hn(f,null,w,"beforeMount");const ae=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(R),s(R,m,_),((C=L&&L.onVnodeMounted)||ae||oe)&&ze(()=>{C&&It(C,w,f),ae&&j.enter(R),oe&&hn(f,null,w,"mounted")},v)},vt=(f,m,_,w,v)=>{if(_&&g(f,_),w)for(let T=0;T<w.length;T++)g(f,w[T]);if(v){let T=v.subTree;if(m===T){const P=v.vnode;vt(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},wt=(f,m,_,w,v,T,P,I,R=0)=>{for(let C=R;C<f.length;C++){const F=f[C]=I?Xt(f[C]):Tt(f[C]);k(null,F,m,_,w,v,T,P,I)}},jt=(f,m,_,w,v,T,P)=>{const I=m.el=f.el;let{patchFlag:R,dynamicChildren:C,dirs:F}=m;R|=f.patchFlag&16;const L=f.props||fe,G=m.props||fe;let j;_&&fn(_,!1),(j=G.onVnodeBeforeUpdate)&&It(j,_,m,f),F&&hn(m,f,_,"beforeUpdate"),_&&fn(_,!0);const ee=v&&m.type!=="foreignObject";if(C?Bt(f.dynamicChildren,C,I,_,w,ee,T):P||Ye(f,m,I,null,_,w,ee,T,!1),R>0){if(R&16)lt(I,m,L,G,_,w,v);else if(R&2&&L.class!==G.class&&r(I,"class",null,G.class,v),R&4&&r(I,"style",L.style,G.style,v),R&8){const oe=m.dynamicProps;for(let ae=0;ae<oe.length;ae++){const me=oe[ae],ct=L[me],Gn=G[me];(Gn!==ct||me==="value")&&r(I,me,ct,Gn,v,f.children,_,w,S)}}R&1&&f.children!==m.children&&u(I,m.children)}else!P&&C==null&&lt(I,m,L,G,_,w,v);((j=G.onVnodeUpdated)||F)&&ze(()=>{j&&It(j,_,m,f),F&&hn(m,f,_,"updated")},w)},Bt=(f,m,_,w,v,T,P)=>{for(let I=0;I<m.length;I++){const R=f[I],C=m[I],F=R.el&&(R.type===Ot||!Ts(R,C)||R.shapeFlag&70)?d(R.el):_;k(R,C,F,null,w,v,T,P,!0)}},lt=(f,m,_,w,v,T,P)=>{if(_!==w){for(const I in w){if(Pi(I))continue;const R=w[I],C=_[I];R!==C&&I!=="value"&&r(f,I,C,R,P,m.children,v,T,S)}if(_!==fe)for(const I in _)!Pi(I)&&!(I in w)&&r(f,I,_[I],null,P,m.children,v,T,S);"value"in w&&r(f,"value",_.value,w.value)}},Ln=(f,m,_,w,v,T,P,I,R)=>{const C=m.el=f?f.el:a(""),F=m.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:G,slotScopeIds:j}=m;j&&(I=I?I.concat(j):j),f==null?(s(C,_,w),s(F,_,w),wt(m.children,_,F,v,T,P,I,R)):L>0&&L&64&&G&&f.dynamicChildren?(Bt(f.dynamicChildren,G,_,v,T,P,I),(m.key!=null||v&&m===v.subTree)&&Gu(f,m,!0)):Ye(f,m,_,F,v,T,P,I,R)},On=(f,m,_,w,v,T,P,I,R)=>{m.slotScopeIds=I,f==null?m.shapeFlag&512?v.ctx.activate(m,_,w,P,R):Dn(m,_,w,v,T,P,R):ke(f,m,R)},Dn=(f,m,_,w,v,T,P)=>{const I=f.component=zm(f,w,v);if(Tu(f)&&(I.ctx.renderer=de),Qm(I),I.asyncDep){if(v&&v.registerDep(I,ue),!f.el){const R=I.subTree=Be(Tn);$(null,R,m,_)}return}ue(I,f,m,_,v,T,P)},ke=(f,m,_)=>{const w=m.component=f.component;if(rm(f,m,_))if(w.asyncDep&&!w.asyncResolved){ie(w,m,_);return}else w.next=m,Zf(w.update),w.update();else m.el=f.el,w.vnode=m},ue=(f,m,_,w,v,T,P)=>{const I=()=>{if(f.isMounted){let{next:F,bu:L,u:G,parent:j,vnode:ee}=f,oe=F,ae;fn(f,!1),F?(F.el=ee.el,ie(f,F,P)):F=ee,L&&Pr(L),(ae=F.props&&F.props.onVnodeBeforeUpdate)&&It(ae,j,F,ee),fn(f,!0);const me=xr(f),ct=f.subTree;f.subTree=me,k(ct,me,d(ct.el),D(ct),f,v,T),F.el=me.el,oe===null&&om(f,me.el),G&&ze(G,v),(ae=F.props&&F.props.onVnodeUpdated)&&ze(()=>It(ae,j,F,ee),v)}else{let F;const{el:L,props:G}=m,{bm:j,m:ee,parent:oe}=f,ae=Bi(m);if(fn(f,!1),j&&Pr(j),!ae&&(F=G&&G.onVnodeBeforeMount)&&It(F,oe,m),fn(f,!0),L&&V){const me=()=>{f.subTree=xr(f),V(L,f.subTree,f,v,null)};ae?m.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=xr(f);k(null,me,_,w,f,v,T),m.el=me.el}if(ee&&ze(ee,v),!ae&&(F=G&&G.onVnodeMounted)){const me=m;ze(()=>It(F,oe,me),v)}(m.shapeFlag&256||oe&&Bi(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&ze(f.a,v),f.isMounted=!0,m=_=w=null}},R=f.effect=new zo(I,()=>gu(C),f.scope),C=f.update=()=>R.run();C.id=f.uid,fn(f,!0),C()},ie=(f,m,_)=>{m.component=f;const w=f.vnode.props;f.vnode=m,f.next=null,xm(f,m.props,w,_),Mm(f,m.children,_),ys(),dr(void 0,f.update),Es()},Ye=(f,m,_,w,v,T,P,I,R=!1)=>{const C=f&&f.children,F=f?f.shapeFlag:0,L=m.children,{patchFlag:G,shapeFlag:j}=m;if(G>0){if(G&128){Mt(C,L,_,w,v,T,P,I,R);return}else if(G&256){Fn(C,L,_,w,v,T,P,I,R);return}}j&8?(F&16&&S(C,v,T),L!==C&&u(_,L)):F&16?j&16?Mt(C,L,_,w,v,T,P,I,R):S(C,v,T,!0):(F&8&&u(_,""),j&16&&wt(L,_,w,v,T,P,I,R))},Fn=(f,m,_,w,v,T,P,I,R)=>{f=f||Zn,m=m||Zn;const C=f.length,F=m.length,L=Math.min(C,F);let G;for(G=0;G<L;G++){const j=m[G]=R?Xt(m[G]):Tt(m[G]);k(f[G],j,_,null,v,T,P,I,R)}C>F?S(f,v,T,!0,!1,L):wt(m,_,w,v,T,P,I,R,L)},Mt=(f,m,_,w,v,T,P,I,R)=>{let C=0;const F=m.length;let L=f.length-1,G=F-1;for(;C<=L&&C<=G;){const j=f[C],ee=m[C]=R?Xt(m[C]):Tt(m[C]);if(Ts(j,ee))k(j,ee,_,null,v,T,P,I,R);else break;C++}for(;C<=L&&C<=G;){const j=f[L],ee=m[G]=R?Xt(m[G]):Tt(m[G]);if(Ts(j,ee))k(j,ee,_,null,v,T,P,I,R);else break;L--,G--}if(C>L){if(C<=G){const j=G+1,ee=j<F?m[j].el:w;for(;C<=G;)k(null,m[C]=R?Xt(m[C]):Tt(m[C]),_,ee,v,T,P,I,R),C++}}else if(C>G)for(;C<=L;)tt(f[C],v,T,!0),C++;else{const j=C,ee=C,oe=new Map;for(C=ee;C<=G;C++){const Xe=m[C]=R?Xt(m[C]):Tt(m[C]);Xe.key!=null&&oe.set(Xe.key,C)}let ae,me=0;const ct=G-ee+1;let Gn=!1,Ja=0;const ks=new Array(ct);for(C=0;C<ct;C++)ks[C]=0;for(C=j;C<=L;C++){const Xe=f[C];if(me>=ct){tt(Xe,v,T,!0);continue}let bt;if(Xe.key!=null)bt=oe.get(Xe.key);else for(ae=ee;ae<=G;ae++)if(ks[ae-ee]===0&&Ts(Xe,m[ae])){bt=ae;break}bt===void 0?tt(Xe,v,T,!0):(ks[bt-ee]=C+1,bt>=Ja?Ja=bt:Gn=!0,k(Xe,m[bt],_,null,v,T,P,I,R),me++)}const Za=Gn?Gm(ks):Zn;for(ae=Za.length-1,C=ct-1;C>=0;C--){const Xe=ee+C,bt=m[Xe],el=Xe+1<F?m[Xe+1].el:w;ks[C]===0?k(null,bt,_,el,v,T,P,I,R):Gn&&(ae<0||C!==Za[ae]?Ct(bt,_,el,2):ae--)}}},Ct=(f,m,_,w,v=null)=>{const{el:T,type:P,transition:I,children:R,shapeFlag:C}=f;if(C&6){Ct(f.component.subTree,m,_,w);return}if(C&128){f.suspense.move(m,_,w);return}if(C&64){P.move(f,m,_,de);return}if(P===Ot){s(T,m,_);for(let L=0;L<R.length;L++)Ct(R[L],m,_,w);s(f.anchor,m,_);return}if(P===Mi){W(f,m,_);return}if(w!==2&&C&1&&I)if(w===0)I.beforeEnter(T),s(T,m,_),ze(()=>I.enter(T),v);else{const{leave:L,delayLeave:G,afterLeave:j}=I,ee=()=>s(T,m,_),oe=()=>{L(T,()=>{ee(),j&&j()})};G?G(T,ee,oe):oe()}else s(T,m,_)},tt=(f,m,_,w=!1,v=!1)=>{const{type:T,props:P,ref:I,children:R,dynamicChildren:C,shapeFlag:F,patchFlag:L,dirs:G}=f;if(I!=null&&uo(I,null,_,f,!0),F&256){m.ctx.deactivate(f);return}const j=F&1&&G,ee=!Bi(f);let oe;if(ee&&(oe=P&&P.onVnodeBeforeUnmount)&&It(oe,m,f),F&6)O(f.component,_,w);else{if(F&128){f.suspense.unmount(_,w);return}j&&hn(f,null,m,"beforeUnmount"),F&64?f.type.remove(f,m,_,v,de,w):C&&(T!==Ot||L>0&&L&64)?S(C,m,_,!1,!0):(T===Ot&&L&384||!v&&F&16)&&S(R,m,_),w&&Is(f)}(ee&&(oe=P&&P.onVnodeUnmounted)||j)&&ze(()=>{oe&&It(oe,m,f),j&&hn(f,null,m,"unmounted")},_)},Is=f=>{const{type:m,el:_,anchor:w,transition:v}=f;if(m===Ot){E(_,w);return}if(m===Mi){Ie(f);return}const T=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:I}=v,R=()=>P(_,T);I?I(f.el,T,R):R()}else T()},E=(f,m)=>{let _;for(;f!==m;)_=h(f),i(f),f=_;i(m)},O=(f,m,_)=>{const{bum:w,scope:v,update:T,subTree:P,um:I}=f;w&&Pr(w),v.stop(),T&&(T.active=!1,tt(P,f,m,_)),I&&ze(I,m),ze(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},S=(f,m,_,w=!1,v=!1,T=0)=>{for(let P=T;P<f.length;P++)tt(f[P],m,_,w,v)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),re=(f,m,_)=>{f==null?m._vnode&&tt(m._vnode,null,null,!0):k(m._vnode||null,f,m,null,null,null,_),Eu(),m._vnode=f},de={p:k,um:tt,m:Ct,r:Is,mt:Dn,mc:wt,pc:Ye,pbc:Bt,n:D,o:t};let J,V;return e&&([J,V]=e(de)),{render:re,hydrate:J,createApp:Om(re,J)}}function fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gu(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Xt(i[r]),a.el=o.el),n||Gu(o,a))}}function Gm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const $m=t=>t.__isTeleport,Ot=Symbol(void 0),ta=Symbol(void 0),Tn=Symbol(void 0),Mi=Symbol(void 0),Us=[];let ft=null;function mr(t=!1){Us.push(ft=t?null:[])}function Um(){Us.pop(),ft=Us[Us.length-1]||null}let Js=1;function yl(t){Js+=t}function $u(t){return t.dynamicChildren=Js>0?ft||Zn:null,Um(),Js>0&&ft&&ft.push(t),t}function Uu(t,e,n,s,i,r){return $u(Re(t,e,n,s,i,r,!0))}function Hu(t,e,n,s,i){return $u(Be(t,e,n,s,i,!0))}function ho(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const pr="__vInternal",Wu=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Ge(t)||Q(t)?{i:Rt,r:t,k:e,f:!!n}:t:null;function Re(t,e=null,n=null,s=0,i=null,r=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wu(e),ref:e&&Li(e),scopeId:Cu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(na(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),Js>0&&!o&&ft&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ft.push(l),l}const Be=Hm;function Hm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Cm)&&(t=Tn),ho(t)){const a=rs(t,e,!0);return n&&na(a,n),Js>0&&!r&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(Zm(t)&&(t=t.__vccOpts),e){e=Wm(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=Uo(a)),Pe(l)&&(lu(l)&&!q(l)&&(l=je({},l)),e.style=$o(l))}const o=Me(t)?1:am(t)?128:$m(t)?64:Pe(t)?4:Q(t)?2:0;return Re(t,e,n,s,i,o,r,!0)}function Wm(t){return t?lu(t)||pr in t?je({},t):t:null}function rs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?jm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wu(a),ref:e&&e.ref?n&&i?q(i)?i.concat(Li(e)):[i,Li(e)]:Li(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor}}function mi(t=" ",e=0){return Be(ta,null,t,e)}function ju(t,e){const n=Be(Mi,null,t);return n.staticCount=e,n}function JC(t="",e=!1){return e?(mr(),Hu(Tn,null,t)):Be(Tn,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Be(Tn):q(t)?Be(Ot,null,t.slice()):typeof t=="object"?Xt(t):Be(ta,null,String(t))}function Xt(t){return t.el===null||t.memo?t:rs(t)}function na(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),na(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pr in e)?e._ctx=Rt:i===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),s&64?(n=16,e=[mi(e)]):n=8);t.children=e,t.shapeFlag|=n}function jm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Uo([e.class,s.class]));else if(i==="style")e.style=$o([e.style,s.style]);else if(rr(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function It(t,e,n,s=null){gt(t,e,7,[n,s])}const qm=Fu();let Vm=0;function zm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qm,r={uid:Vm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mu(s,i),emitsOptions:wu(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nm.bind(null,r),t.ce&&t.ce(r),r}let De=null;const os=t=>{De=t,t.scope.on()},bn=()=>{De&&De.scope.off(),De=null};function qu(t){return t.vnode.shapeFlag&4}let Zs=!1;function Qm(t,e=!1){Zs=e;const{props:n,children:s}=t.vnode,i=qu(t);Pm(t,n,i,e),Bm(t,s);const r=i?Km(t,e):void 0;return Zs=!1,r}function Km(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cu(new Proxy(t.ctx,Im));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Xm(t):null;os(t),ys();const r=tn(s,t,0,[t.props,i]);if(Es(),bn(),Qc(r)){if(r.then(bn,bn),e)return r.then(o=>{El(t,o,e)}).catch(o=>{ur(o,t,0)});t.asyncDep=r}else El(t,r,e)}else Vu(t,e)}function El(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=fu(e)),Vu(t,n)}let vl;function Vu(t,e,n){const s=t.type;if(!t.render){if(!e&&vl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=je(je({isCustomElement:r,delimiters:a},o),l);s.render=vl(i,c)}}t.render=s.render||pt}os(t),ys(),km(t),Es(),bn()}function Ym(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function Xm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ym(t))},slots:t.slots,emit:t.emit,expose:e}}function sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fu(cu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)}}))}function Jm(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function Zm(t){return Q(t)&&"__vccOpts"in t}const rt=(t,e)=>Yf(t,e,Zs);function zu(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!q(e)?ho(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ho(n)&&(n=[n]),Be(t,e,n))}const ep="3.2.37",tp="http://www.w3.org/2000/svg",En=typeof document<"u"?document:null,wl=En&&En.createElement("template"),np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?En.createElementNS(tp,t):En.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wl.innerHTML=s?`<svg>${t}</svg>`:t;const a=wl.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ip(t,e,n){const s=t.style,i=Me(n);if(n&&!i){for(const r in n)fo(s,r,n[r]);if(e&&!Me(e))for(const r in e)n[r]==null&&fo(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Cl=/\s*!important$/;function fo(t,e,n){if(q(n))n.forEach(s=>fo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=rp(t,e);Cl.test(n)?t.setProperty(_s(s),n.replace(Cl,""),"important"):t[s]=n}}const bl=["Webkit","Moz","ms"],Nr={};function rp(t,e){const n=Nr[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return Nr[e]=s;s=lr(s);for(let i=0;i<bl.length;i++){const r=bl[i]+s;if(r in t)return Nr[e]=r}return e}const Il="http://www.w3.org/1999/xlink";function op(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Il,e.slice(6,e.length)):t.setAttributeNS(Il,e,n);else{const r=rf(e);n==null||r&&!qc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ap(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Qu,lp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let mo=0;const cp=Promise.resolve(),up=()=>{mo=0},dp=()=>mo||(cp.then(up),mo=Qu());function hp(t,e,n,s){t.addEventListener(e,n,s)}function fp(t,e,n,s){t.removeEventListener(e,n,s)}function mp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=pp(e);if(s){const c=r[e]=gp(s,i);hp(t,a,c,l)}else o&&(fp(t,a,o,l),r[e]=void 0)}}const kl=/(?:Once|Passive|Capture)$/;function pp(t){let e;if(kl.test(t)){e={};let n;for(;n=t.match(kl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[_s(t.slice(2)),e]}function gp(t,e){const n=s=>{const i=s.timeStamp||Qu();(lp||i>=n.attached-1)&&gt(_p(s,n.value),e,5,[s])};return n.value=t,n.attached=dp(),n}function _p(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Tl=/^on[a-z]/,yp=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?sp(t,s,i):e==="style"?ip(t,n,s):rr(e)?Ho(e)||mp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ep(t,e,s,i))?ap(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),op(t,e,s,i))};function Ep(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tl.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tl.test(e)&&Me(n)?!1:e in t}const vp=je({patchProp:yp},np);let Al;function wp(){return Al||(Al=Dm(vp))}const Cp=(...t)=>{const e=wp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bp(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function bp(t){return Me(t)?document.querySelector(t):t}const ia=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ip={};function kp(t,e){const n=Pu("RouterView");return mr(),Hu(n)}const Tp=ia(Ip,[["render",kp]]),Ap="modulepreload",Rp=function(t){return"/Quiz/"+t},Rl={},As=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=Rp(i),i in Rl)return;Rl[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Ap,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function Sp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Br(t,e){const n={};for(const s in e){const i=e[s];n[s]=yt(i)?i.map(t):t(i)}return n}const Hs=()=>{},yt=Array.isArray,Pp=/\/$/,xp=t=>t.replace(Pp,"");function Mr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Lp(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Np(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&as(e.matched[s],n.matched[i])&&Ku(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ku(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mp(t[n],e[n]))return!1;return!0}function Mp(t,e){return yt(t)?Sl(t,e):yt(e)?Sl(e,t):t===e}function Sl(t,e){return yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Lp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var Hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hi||(Hi={}));const Lr="";function Op(t){if(!t)if(Yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xp(t)}const Dp=/^[^#]+#/;function Fp(t,e){return t.replace(Dp,"#")+e}function Gp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $p=()=>({left:window.pageXOffset,top:window.pageYOffset});function Up(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Gp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pl(t,e){return(history.state?history.state.position-e:-1)+t}const po=new Map;function Hp(t,e){po.set(t,e)}function Wp(t){const e=po.get(t);return po.delete(t),e}function jp(t=""){let e=[],n=[Lr],s=0;t=Op(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:ei.pop};for(const h of e)h(a,l,d)}const o={location:Lr,state:{},base:t,createHref:Fp.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Lr],s=0},go(a,l=!0){const c=this.location,u=a<0?Hi.back:Hi.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function qp(t){return typeof t=="string"||t&&typeof t=="object"}function Yu(t){return typeof t=="string"||typeof t=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xu=Symbol("");var xl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xl||(xl={}));function ls(t,e){return Ee(new Error,{type:t,[Xu]:!0},e)}function zt(t,e){return t instanceof Error&&Xu in t&&(e==null||!!(t.type&e))}const Nl="[^/]+?",Vp={sensitive:!1,strict:!1,start:!0,end:!0},zp=/[.+*?^${}()[\]/\\]/g;function Qp(t,e){const n=Ee({},Vp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(zp,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:x,optional:k,regexp:N}=h;r.push({name:y,repeatable:x,optional:k});const $=N||Nl;if($!==Nl){g+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${y}" (${$}): `+W.message)}}let H=x?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(H=k&&c.length<2?`(?:/${H})`:"/"+H),k&&(H+="?"),i+=H,g+=20,k&&(g+=-8),x&&(g+=-20),$===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",y=r[h-1];d[y.name]=g&&y.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:x,optional:k}=g,N=y in c?c[y]:"";if(yt(N)&&!x)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const $=yt(N)?N.join("/"):N;if(!$)if(k)h.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=$}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Kp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Yp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Kp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Bl(s))return 1;if(Bl(i))return-1}return i.length-s.length}function Bl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xp={type:0,value:""},Jp=/[a-zA-Z0-9_]/;function Zp(t){if(!t)return[[]];if(t==="/")return[[Xp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Jp.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function eg(t,e,n){const s=Qp(Zp(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function tg(t,e){const n=[],s=new Map;e=Ll({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const g=!h,y=sg(u);y.aliasOf=h&&h.record;const x=Ll(e,u),k=[y];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of H)k.push(Ee({},y,{components:h?h.record.components:y.components,path:W,aliasOf:h?h.record:y}))}let N,$;for(const H of k){const{path:W}=H;if(d&&W[0]!=="/"){const Ie=d.record.path,Le=Ie[Ie.length-1]==="/"?"":"/";H.path=d.record.path+(W&&Le+W)}if(N=eg(H,d,x),h?h.alias.push(N):($=$||N,$!==N&&$.alias.push(N),g&&u.name&&!Ml(N)&&o(u.name)),y.children){const Ie=y.children;for(let Le=0;Le<Ie.length;Le++)r(Ie[Le],N,h&&h.children[Le])}h=h||N,l(N)}return $?()=>{o($)}:Hs}function o(u){if(Yu(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Yp(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ju(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ml(u)&&s.set(u.record.name,u)}function c(u,d){let h,g={},y,x;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw ls(1,{location:u});x=h.record.name,g=Ee(ng(d.params,h.keys.filter($=>!$.optional).map($=>$.name)),u.params),y=h.stringify(g)}else if("path"in u)y=u.path,h=n.find($=>$.re.test(y)),h&&(g=h.parse(y),x=h.record.name);else{if(h=d.name?s.get(d.name):n.find($=>$.re.test(d.path)),!h)throw ls(1,{location:u,currentLocation:d});x=h.record.name,g=Ee({},d.params,u.params),y=h.stringify(g)}const k=[];let N=h;for(;N;)k.unshift(N.record),N=N.parent;return{name:x,path:y,params:g,matched:k,meta:rg(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ng(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ig(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ig(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ml(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rg(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Ll(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ju(t,e){return e.children.some(n=>n===t||Ju(t,n))}const Zu=/#/g,og=/&/g,ag=/\//g,lg=/=/g,cg=/\?/g,ed=/\+/g,ug=/%5B/g,dg=/%5D/g,td=/%5E/g,hg=/%60/g,nd=/%7B/g,fg=/%7C/g,sd=/%7D/g,mg=/%20/g;function ra(t){return encodeURI(""+t).replace(fg,"|").replace(ug,"[").replace(dg,"]")}function pg(t){return ra(t).replace(nd,"{").replace(sd,"}").replace(td,"^")}function go(t){return ra(t).replace(ed,"%2B").replace(mg,"+").replace(Zu,"%23").replace(og,"%26").replace(hg,"`").replace(nd,"{").replace(sd,"}").replace(td,"^")}function gg(t){return go(t).replace(lg,"%3D")}function _g(t){return ra(t).replace(Zu,"%23").replace(cg,"%3F")}function yg(t){return t==null?"":_g(t).replace(ag,"%2F")}function Wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Eg(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ed," "),o=r.indexOf("="),a=Wi(o<0?r:r.slice(0,o)),l=o<0?null:Wi(r.slice(o+1));if(a in e){let c=e[a];yt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ol(t){let e="";for(let n in t){const s=t[n];if(n=gg(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yt(s)?s.map(r=>r&&go(r)):[s&&go(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function vg(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const wg=Symbol(""),Dl=Symbol(""),oa=Symbol(""),id=Symbol(""),_o=Symbol("");function Rs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Jt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(ls(4,{from:n,to:e})):d instanceof Error?a(d):qp(d)?a(ls(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Or(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Cg(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Jt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Sp(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Jt(h,n,s,r,o)()}))}}return i}function Cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fl(t){const e=nn(oa),n=nn(id),s=rt(()=>e.resolve(ns(t.to))),i=rt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(as.bind(null,u));if(h>-1)return h;const g=Gl(l[c-2]);return c>1&&Gl(u)===g&&d[d.length-1].path!==g?d.findIndex(as.bind(null,l[c-2])):h}),r=rt(()=>i.value>-1&&Tg(n.params,s.value.params)),o=rt(()=>i.value>-1&&i.value===n.matched.length-1&&Ku(n.params,s.value.params));function a(l={}){return kg(l)?e[ns(t.replace)?"replace":"push"](ns(t.to)).catch(Hs):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const bg=ku({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fl,setup(t,{slots:e}){const n=fi(Fl(t)),{options:s}=nn(oa),i=rt(()=>({[$l(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$l(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:zu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ig=bg;function kg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Tg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Gl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $l=(t,e,n)=>t!=null?t:e!=null?e:n,Ag=ku({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=nn(_o),i=rt(()=>t.route||s.value),r=nn(Dl,0),o=rt(()=>{let c=ns(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=rt(()=>i.value.matched[o.value]);xi(Dl,rt(()=>o.value+1)),xi(wg,a),xi(_o,i);const l=qf();return Ni(()=>[l.value,a.value,t.name],([c,u,d],[h,g,y])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!as(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=i.value,u=a.value,d=u&&u.components[t.name],h=t.name;if(!d)return Ul(n.default,{Component:d,route:c});const g=u.props[t.name],y=g?g===!0?c.params:typeof g=="function"?g(c):g:null,k=zu(d,Ee({},y,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Ul(n.default,{Component:k,route:c})||k}}});function Ul(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rg=Ag;function Sg(t){const e=tg(t.routes,t),n=t.parseQuery||Eg,s=t.stringifyQuery||Ol,i=t.history,r=Rs(),o=Rs(),a=Rs(),l=Vf(Vt);let c=Vt;Yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Br.bind(null,E=>""+E),d=Br.bind(null,yg),h=Br.bind(null,Wi);function g(E,O){let S,D;return Yu(E)?(S=e.getRecordMatcher(E),D=O):D=E,e.addRoute(D,S)}function y(E){const O=e.getRecordMatcher(E);O&&e.removeRoute(O)}function x(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function N(E,O){if(O=Ee({},O||l.value),typeof E=="string"){const V=Mr(n,E,O.path),f=e.resolve({path:V.path},O),m=i.createHref(V.fullPath);return Ee(V,f,{params:h(f.params),hash:Wi(V.hash),redirectedFrom:void 0,href:m})}let S;if("path"in E)S=Ee({},E,{path:Mr(n,E.path,O.path).path});else{const V=Ee({},E.params);for(const f in V)V[f]==null&&delete V[f];S=Ee({},E,{params:d(E.params)}),O.params=d(O.params)}const D=e.resolve(S,O),re=E.hash||"";D.params=u(h(D.params));const de=Np(s,Ee({},E,{hash:pg(re),path:D.path})),J=i.createHref(de);return Ee({fullPath:de,hash:re,query:s===Ol?vg(E.query):E.query||{}},D,{redirectedFrom:void 0,href:J})}function $(E){return typeof E=="string"?Mr(n,E,l.value.path):Ee({},E)}function H(E,O){if(c!==E)return ls(8,{from:O,to:E})}function W(E){return at(E)}function Ie(E){return W(Ee($(E),{replace:!0}))}function Le(E){const O=E.matched[E.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let D=typeof S=="function"?S(E):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=$(D):{path:D},D.params={}),Ee({query:E.query,hash:E.hash,params:"path"in D?{}:E.params},D)}}function at(E,O){const S=c=N(E),D=l.value,re=E.state,de=E.force,J=E.replace===!0,V=Le(S);if(V)return at(Ee($(V),{state:re,force:de,replace:J}),O||S);const f=S;f.redirectedFrom=O;let m;return!de&&Bp(s,D,S)&&(m=ls(16,{to:f,from:D}),Fn(D,D,!0,!1)),(m?Promise.resolve(m):wt(f,D)).catch(_=>zt(_)?zt(_,2)?_:Ye(_):ue(_,f,D)).then(_=>{if(_){if(zt(_,2))return at(Ee($(_.to),{state:re,force:de,replace:J}),O||f)}else _=Bt(f,D,!0,J,re);return jt(f,D,_),_})}function vt(E,O){const S=H(E,O);return S?Promise.reject(S):Promise.resolve()}function wt(E,O){let S;const[D,re,de]=Pg(E,O);S=Or(D.reverse(),"beforeRouteLeave",E,O);for(const V of D)V.leaveGuards.forEach(f=>{S.push(Jt(f,E,O))});const J=vt.bind(null,E,O);return S.push(J),$n(S).then(()=>{S=[];for(const V of r.list())S.push(Jt(V,E,O));return S.push(J),$n(S)}).then(()=>{S=Or(re,"beforeRouteUpdate",E,O);for(const V of re)V.updateGuards.forEach(f=>{S.push(Jt(f,E,O))});return S.push(J),$n(S)}).then(()=>{S=[];for(const V of E.matched)if(V.beforeEnter&&!O.matched.includes(V))if(yt(V.beforeEnter))for(const f of V.beforeEnter)S.push(Jt(f,E,O));else S.push(Jt(V.beforeEnter,E,O));return S.push(J),$n(S)}).then(()=>(E.matched.forEach(V=>V.enterCallbacks={}),S=Or(de,"beforeRouteEnter",E,O),S.push(J),$n(S))).then(()=>{S=[];for(const V of o.list())S.push(Jt(V,E,O));return S.push(J),$n(S)}).catch(V=>zt(V,8)?V:Promise.reject(V))}function jt(E,O,S){for(const D of a.list())D(E,O,S)}function Bt(E,O,S,D,re){const de=H(E,O);if(de)return de;const J=O===Vt,V=Yn?history.state:{};S&&(D||J?i.replace(E.fullPath,Ee({scroll:J&&V&&V.scroll},re)):i.push(E.fullPath,re)),l.value=E,Fn(E,O,S,J),Ye()}let lt;function Ln(){lt||(lt=i.listen((E,O,S)=>{if(!Is.listening)return;const D=N(E),re=Le(D);if(re){at(Ee(re,{replace:!0}),D).catch(Hs);return}c=D;const de=l.value;Yn&&Hp(Pl(de.fullPath,S.delta),$p()),wt(D,de).catch(J=>zt(J,12)?J:zt(J,2)?(at(J.to,D).then(V=>{zt(V,20)&&!S.delta&&S.type===ei.pop&&i.go(-1,!1)}).catch(Hs),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ue(J,D,de))).then(J=>{J=J||Bt(D,de,!1),J&&(S.delta?i.go(-S.delta,!1):S.type===ei.pop&&zt(J,20)&&i.go(-1,!1)),jt(D,de,J)}).catch(Hs)}))}let On=Rs(),Dn=Rs(),ke;function ue(E,O,S){Ye(E);const D=Dn.list();return D.length?D.forEach(re=>re(E,O,S)):console.error(E),Promise.reject(E)}function ie(){return ke&&l.value!==Vt?Promise.resolve():new Promise((E,O)=>{On.add([E,O])})}function Ye(E){return ke||(ke=!E,Ln(),On.list().forEach(([O,S])=>E?S(E):O()),On.reset()),E}function Fn(E,O,S,D){const{scrollBehavior:re}=t;if(!Yn||!re)return Promise.resolve();const de=!S&&Wp(Pl(E.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return pu().then(()=>re(E,O,de)).then(J=>J&&Up(J)).catch(J=>ue(J,E,O))}const Mt=E=>i.go(E);let Ct;const tt=new Set,Is={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,hasRoute:k,getRoutes:x,resolve:N,options:t,push:W,replace:Ie,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Dn.add,isReady:ie,install(E){const O=this;E.component("RouterLink",Ig),E.component("RouterView",Rg),E.config.globalProperties.$router=O,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ns(l)}),Yn&&!Ct&&l.value===Vt&&(Ct=!0,W(i.location).catch(re=>{}));const S={};for(const re in Vt)S[re]=rt(()=>l.value[re]);E.provide(oa,O),E.provide(id,fi(S)),E.provide(_o,l);const D=E.unmount;tt.add(E),E.unmount=function(){tt.delete(E),tt.size<1&&(c=Vt,lt&&lt(),lt=null,l.value=Vt,Ct=!1,ke=!1),D()}}};return Is}function $n(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Pg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>as(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>as(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw vs(e)},vs=function(t){return new Error("Firebase Database ("+rd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(od(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const g=a<<4&240|c>>2;if(s.push(g),d!==64){const y=c<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ad=function(t){const e=od(t);return aa.encodeByteArray(e,!0)},ld=function(t){return ad(t).replace(/\./g,"")},Hl=function(t){try{return aa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){return cd(void 0,t)}function cd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bg(n)||(t[n]=cd(t[n],e[n]));return t}function Bg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mg())}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dd(){return rd.NODE_ADMIN===!0}function Og(){return typeof indexedDB=="object"}function Dg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="FirebaseError";class gr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fg,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hd.prototype.create)}}class hd{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gr(i,a,s)}}function Gg(t,e){return t.replace($g,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $g=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ti(Hl(r[0])||""),n=ti(Hl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ug=function(t){const e=fd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Hg=function(t){const e=fd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ji(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Wl(r)&&Wl(o)){if(!Eo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function us(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_r=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class Vg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ft;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zg(t){return t===gn?void 0:t}function Qg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Yg={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Xg=he.INFO,Jg={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Zg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Jg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=Xg,this._logHandler=Zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const e_=(t,e)=>e.some(n=>t instanceof n);let jl,ql;function t_(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n_(){return ql||(ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,vo=new WeakMap,gd=new WeakMap,Dr=new WeakMap,la=new WeakMap;function s_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(sn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pd.set(n,t)}).catch(()=>{}),la.set(e,t),e}function i_(t){if(vo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vo.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r_(t){wo=t(wo)}function o_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fr(this),e,...n);return gd.set(s,e.sort?e.sort():[e]),sn(s)}:n_().includes(t)?function(...e){return t.apply(Fr(this),e),sn(pd.get(this))}:function(...e){return sn(t.apply(Fr(this),e))}}function a_(t){return typeof t=="function"?o_(t):(t instanceof IDBTransaction&&i_(t),e_(t,t_())?new Proxy(t,wo):t)}function sn(t){if(t instanceof IDBRequest)return s_(t);if(Dr.has(t))return Dr.get(t);const e=a_(t);return e!==t&&(Dr.set(t,e),la.set(e,t)),e}const Fr=t=>la.get(t);function l_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=sn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const c_=["get","getKey","getAll","getAllKeys","count"],u_=["put","add","delete","clear"],Gr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=u_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||c_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gr.set(e,r),r}r_(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
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
 */class d_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function h_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Co="@firebase/app",zl="0.7.28";/**
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
 */const ca=new md("@firebase/app"),f_="@firebase/app-compat",m_="@firebase/analytics-compat",p_="@firebase/analytics",g_="@firebase/app-check-compat",__="@firebase/app-check",y_="@firebase/auth",E_="@firebase/auth-compat",v_="@firebase/database",w_="@firebase/database-compat",C_="@firebase/functions",b_="@firebase/functions-compat",I_="@firebase/installations",k_="@firebase/installations-compat",T_="@firebase/messaging",A_="@firebase/messaging-compat",R_="@firebase/performance",S_="@firebase/performance-compat",P_="@firebase/remote-config",x_="@firebase/remote-config-compat",N_="@firebase/storage",B_="@firebase/storage-compat",M_="@firebase/firestore",L_="@firebase/firestore-compat",O_="firebase",D_="9.9.0";/**
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
 */const _d="[DEFAULT]",F_={[Co]:"fire-core",[f_]:"fire-core-compat",[p_]:"fire-analytics",[m_]:"fire-analytics-compat",[__]:"fire-app-check",[g_]:"fire-app-check-compat",[y_]:"fire-auth",[E_]:"fire-auth-compat",[v_]:"fire-rtdb",[w_]:"fire-rtdb-compat",[C_]:"fire-fn",[b_]:"fire-fn-compat",[I_]:"fire-iid",[k_]:"fire-iid-compat",[T_]:"fire-fcm",[A_]:"fire-fcm-compat",[R_]:"fire-perf",[S_]:"fire-perf-compat",[P_]:"fire-rc",[x_]:"fire-rc-compat",[N_]:"fire-gcs",[B_]:"fire-gcs-compat",[M_]:"fire-fst",[L_]:"fire-fst-compat","fire-js":"fire-js",[O_]:"fire-js-all"};/**
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
 */const qi=new Map,bo=new Map;function G_(t,e){try{t.container.addComponent(e)}catch(n){ca.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(bo.has(e))return ca.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,t);for(const n of qi.values())G_(n,t);return!0}function yd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},An=new hd("app","Firebase",$_);/**
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
 */class U_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const Ed=D_;function H_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_d,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});const i=qi.get(s);if(i){if(Eo(t,i.options)&&Eo(n,i.config))return i;throw An.create("duplicate-app",{appName:s})}const r=new Kg(s);for(const a of bo.values())r.addComponent(a);const o=new U_(t,n,r);return qi.set(s,o),o}function vd(t=_d){const e=qi.get(t);if(!e)throw An.create("no-app",{appName:t});return e}function rn(t,e,n){var s;let i=(s=F_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ca.warn(a.join(" "));return}ni(new ds(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const W_="firebase-heartbeat-database",j_=1,si="firebase-heartbeat-store";let $r=null;function wd(){return $r||($r=l_(W_,j_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw An.create("storage-open",{originalErrorMessage:t.message})})),$r}async function q_(t){var e;try{return(await wd()).transaction(si).objectStore(si).get(Cd(t))}catch(n){throw An.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Ql(t,e){var n;try{const i=(await wd()).transaction(si,"readwrite");return await i.objectStore(si).put(e,Cd(t)),i.done}catch(s){throw An.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Cd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V_=1024,z_=30*24*60*60*1e3;class Q_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Y_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=z_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kl(),{heartbeatsToSend:n,unsentEntries:s}=K_(this._heartbeatsCache.heartbeats),i=ld(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kl(){return new Date().toISOString().substring(0,10)}function K_(t,e=V_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Og()?Dg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await q_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yl(t){return ld(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function X_(t){ni(new ds("platform-logger",e=>new d_(e),"PRIVATE")),ni(new ds("heartbeat",e=>new Q_(e),"PRIVATE")),rn(Co,zl,t),rn(Co,zl,"esm2017"),rn("fire-js","")}X_("");var J_="firebase",Z_="9.9.0";/**
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
 */rn(J_,Z_,"app");const Xl="@firebase/database",Jl="0.13.3";/**
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
 */let bd="";function ey(t){bd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ti(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ty(e)}}catch{}return new ny},vn=Id("localStorage"),Io=Id("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new md("@firebase/database"),sy=function(){let t=1;return function(){return t++}}(),kd=function(t){const e=qg(t),n=new jg;n.update(e);const s=n.digest();return aa.encodeByteArray(s)},pi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=pi.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let In=null,Zl=!0;const iy=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ss.logLevel=he.VERBOSE,In=ss.log.bind(ss),e&&Io.set("logging_enabled",!0)):typeof t=="function"?In=t:(In=null,Io.remove("logging_enabled"))},Oe=function(...t){if(Zl===!0&&(Zl=!1,In===null&&Io.get("logging_enabled")===!0&&iy(!0)),In){const e=pi.apply(null,t);In(e)}},gi=function(t){return function(...e){Oe(t,...e)}},ko=function(...t){const e="FIREBASE INTERNAL ERROR: "+pi(...t);ss.error(e)},Rn=function(...t){const e=`FIREBASE FATAL ERROR: ${pi(...t)}`;throw ss.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+pi(...t);ss.warn(e)},ry=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},oy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",Sn="[MAX_NAME]",Bn=function(t,e){if(t===e)return 0;if(t===hs||e===Sn)return-1;if(e===hs||t===Sn)return 1;{const n=ec(t),s=ec(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ay=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},ua=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Se(e[s]),n+=":",n+=ua(t[e[s]]);return n+="}",n},Td=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ad=function(t){b(!yr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},ly=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const dy=new RegExp("^-?(0*)\\d{1,10}$"),hy=-2147483648,fy=2147483647,ec=function(t){if(dy.test(t)){const e=Number(t);if(e>=hy&&e<=fy)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},my=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class py{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="5",Rd="v",Sd="s",Pd="r",xd="f",Nd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bd="ls",Md="p",Ao="ac",Ld="websocket",Od="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dd(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Ld)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Od)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yy(t)&&(n.ns=t.namespace);const i=[];return $e(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ng(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={},Hr={};function ha(t){const e=t.toString();return Ur[e]||(Ur[e]=new Ey),Ur[e]}function vy(t,e){const n=t.toString();return Hr[n]||(Hr[n]=e()),Hr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ws(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="start",Cy="close",by="pLPCommand",Iy="pRTLPCB",Fd="id",Gd="pw",$d="ser",ky="cb",Ty="seg",Ay="ts",Ry="d",Sy="dframe",Ud=1870,Hd=30,Py=Ud-Hd,xy=25e3,Ny=3e4;class Jn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gi(e),this.stats_=ha(n),this.urlFn=l=>(this.appCheckToken&&(l[Ao]=this.appCheckToken),Dd(n,Od,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ny)),oy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===tc)this.id=a,this.password=l;else if(o===Cy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[tc]="t",s[$d]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ky]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Rd]=da,this.transportSessionId&&(s[Sd]=this.transportSessionId),this.lastSessionId&&(s[Bd]=this.lastSessionId),this.applicationId&&(s[Md]=this.applicationId),this.appCheckToken&&(s[Ao]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nd.test(location.hostname)&&(s[Pd]=xd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ly()&&!cy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ad(n),i=Td(s,Py);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sy]="t",s[Fd]=e,s[Gd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sy(),window[by+this.uniqueCallbackIdentifier]=e,window[Iy+this.uniqueCallbackIdentifier]=n,this.myIFrame=fa.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oe("frame writing exception"),a.stack&&Oe(a.stack),Oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fd]=this.myID,e[Gd]=this.myPW,e[$d]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hd+s.length<=Ud;){const o=this.pendingSegs.shift();s=s+"&"+Ty+i+"="+o.seg+"&"+Ay+i+"="+o.ts+"&"+Ry+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(xy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=16384,My=45e3;let Vi=null;typeof MozWebSocket<"u"?Vi=MozWebSocket:typeof WebSocket<"u"&&(Vi=WebSocket);class ht{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gi(this.connId),this.stats_=ha(n),this.connURL=ht.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Rd]=da,typeof location<"u"&&location.hostname&&Nd.test(location.hostname)&&(o[Pd]=xd),n&&(o[Sd]=n),s&&(o[Bd]=s),i&&(o[Ao]=i),r&&(o[Md]=r),Dd(e,Ld,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vn.set("previous_websocket_failure",!0);try{let s;dd(),this.mySock=new Vi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vi!==null&&!ht.forceDisallow_}static previouslyFailed(){return vn.isInMemoryStorage||vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ti(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Td(n,By);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(My))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jn,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let s=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ht];else{const i=this.transports_=[];for(const r of ii.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ii.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=6e4,Oy=5e3,Dy=10*1024,Fy=100*1024,Wr="t",nc="d",Gy="s",sc="r",$y="e",ic="o",rc="a",oc="n",ac="p",Uy="h";class Hy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gi("c:"+this.id+":"),this.transportManager_=new ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wr in e){const n=e[Wr];n===rc?this.upgradeIfSecondaryHealthy_():n===sc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ic&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ac,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(Wr,e);if(nc in e){const s=e[nc];if(n===Uy)this.onHandshake_(s);else if(n===oc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gy?this.onConnectionShutdown_(s):n===sc?this.onReset_(s):n===$y?ko("Server Error: "+s):n===ic?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ko("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),da!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ly))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ac,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends jd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=32,cc=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function ma(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Wy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ri(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return We(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jy(t,e){const n=ri(t,0),s=ri(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Bn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function pa(t,e){if(cn(t)!==cn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ot(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(cn(t)>cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class qy{constructor(e,n){this.errorPrefix_=n,this.parts_=ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_r(this.parts_[s]);Vd(this)}}function Vy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_r(e),Vd(t)}function zy(t){const e=t.parts_.pop();t.byteLength_-=_r(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vd(t){if(t.byteLength_>cc)throw new Error(t.errorPrefix_+"has a key path longer than "+cc+" bytes ("+t.byteLength_+").");if(t.parts_.length>lc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lc+") or object contains a cycle "+_n(t))}function _n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends jd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ga}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=1e3,Qy=60*5*1e3,uc=30*1e3,Ky=1.3,Yy=3e4,Xy="server_kill",dc=3;class $t extends Wd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$t.nextPersistentConnectionId_++,this.log_=gi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ps,this.maxReconnectDelay_=Qy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ga.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Se(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ft,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$t.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const s=cs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ug(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ko("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yy&&(this.reconnectDelay_=Ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ky)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Hy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xy)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ke(d),l())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yo(this.interruptReasons_)&&(this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ua(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dc&&(this.reconnectDelay_=uc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bd.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:Lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zi.getInstance().currentlyOnline();return yo(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(hs,e),i=new X(hs,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class zd extends Er{static get __EMPTY_NODE(){return Ti}static set __EMPTY_NODE(e){Ti=e}compare(e,n){return Bn(e.name,n.name)}isDefinedOn(e){throw vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Sn,Ti)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Ti)}toString(){return".key"}}const is=new zd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ne.RED,this.left=i!=null?i:Qe.EMPTY_NODE,this.right=r!=null?r:Qe.EMPTY_NODE}copy(e,n,s,i,r){return new Ne(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class Jy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ai(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ai(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new Jy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e){return Bn(t.name,e.name)}function _a(t,e){return Bn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;function eE(t){Ro=t}const Qd=function(t){return typeof t=="number"?"number:"+Ad(t):"string:"+t},Kd=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else b(t===Ro||t.isEmpty(),"priority of unexpected type.");b(t===Ro||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kd(this.priorityNode_)}static set __childrenNodeConstructor(e){hc=e}static get __childrenNodeConstructor(){return hc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ad(this.value_):e+=this.value_,this.lazyHash_=kd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),r=xe.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd,Xd;function tE(t){Yd=t}function nE(t){Xd=t}class sE extends Er{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Sn,new xe("[PRIORITY-POST]",Xd))}makePost(e,n){const s=Yd(e);return new X(n,new xe("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new sE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=Math.log(2);class rE{constructor(e){const n=r=>parseInt(Math.log(r)/iE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,null,null);{const g=parseInt(u/2,10)+l,y=i(l,g),x=i(g+1,c);return d=t[g],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,y,x)}},r=function(l){let c=null,u=null,d=t.length;const h=function(y,x){const k=d-y,N=d;d-=y;const $=i(k+1,N),H=t[k],W=n?n(H):H;g(new Ne(W,H.node,x,null,$))},g=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const x=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));x?h(k,Ne.BLACK):(h(k,Ne.BLACK),h(k,Ne.RED))}return u},o=new rE(t.length),a=r(o);return new Qe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;const Un={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Un&&_e,"ChildrenNode.ts has not been loaded"),jr=jr||new Gt({".priority":Un},{".priority":_e}),jr}get(e){const n=cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Qi(s,e.getCompare()):a=Un;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Gt(u,c)}addToIndexes(e,n){const s=ji(this.indexes_,(i,r)=>{const o=cs(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Un)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qi(a,o.getCompare())}else return Un;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ji(this.indexes_,i=>{if(i===Un)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new Gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class U{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Kd(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xs||(xs=new U(new Qe(_a),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xs:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{b(K(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qd(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_i?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oE extends U{constructor(){super(new Qe(_a),U.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const _i=new oE;Object.defineProperties(X,{MIN:{value:new X(hs,U.EMPTY_NODE)},MAX:{value:new X(Sn,_i)}});zd.__EMPTY_NODE=U.EMPTY_NODE;xe.__childrenNodeConstructor=U;eE(_i);nE(_i);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=!0;function ve(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,ve(e))}if(!(t instanceof Array)&&aE){const n=[];let s=!1;if($e(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return U.EMPTY_NODE;const r=Qi(n,Zy,o=>o.name,_a);if(s){const o=Qi(n,_e.getCompare());return new U(r,ve(e),new Gt({".priority":o},{".priority":_e}))}else return new U(r,ve(e),Gt.Default)}else{let n=U.EMPTY_NODE;return $e(t,(s,i)=>{if(xt(t,s)&&s.substring(0,1)!=="."){const r=ve(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ve(e))}}tE(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends Er{constructor(e){super(),this.indexPath_=e,b(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}makePost(e,n){const s=ve(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,_i);return new X(Sn,e)}toString(){return ri(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends Er{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Bn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=ve(e);return new X(n,s)}toString(){return".value"}}const uE=new cE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){return{type:"value",snapshotNode:t}}function fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(oi(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(fs(n,s)):o.trackChildChange(ai(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(oi(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ai(i,r,o))}else s.trackChildChange(fs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.indexedFilter_=new ya(e.getIndex()),this.index_=e.getIndex(),this.startPost_=li.getStartPost_(e),this.endPost_=li.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new X(n,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new X(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.rangedFilter_=new li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new X(n,s))||(s=U.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,g)=>d(g,h)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(r,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new X(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ai(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(oi(n,d));const x=a.updateImmediateChild(n,U.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(fs(h.name,h.node)),x.updateImmediateChild(h.name,h.node)):x}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(oi(c.name,c.node)),r.trackChildChange(fs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Ea;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fE(t){return t.loadsAllData()?new ya(t.getIndex()):t.hasLimit()?new hE(t):new li(t)}function fc(t){const e={};if(t.isDefault())return e;let n;return t.index_===_e?n="$priority":t.index_===uE?n="$value":t.index_===is?n="$key":(b(t.index_ instanceof lE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_&&(e.startAt=Se(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Se(t.indexStartName_))),t.endSet_&&(e.endAt=Se(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Se(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function mc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Wd{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ki.getListenId_(e,s),a={};this.listens_[o]=a;const l=fc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),cs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Ki.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fc(e._queryParams),s=e._path.toString(),i=new Ft;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ti(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return{value:null,children:new Map}}function Cs(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Yi());const i=t.children.get(s);e=ce(e),Cs(i,e,n)}}function So(t,e){if(Y(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{Cs(t,new se(s),i)}),So(t,e)}}else if(t.children.size>0){const n=K(e);return e=ce(e),t.children.has(n)&&So(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Po(t,e,n){t.value!==null?n(e,t.value):pE(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Po(i,r,n)})}function pE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$e(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=10*1e3,_E=30*1e3,yE=5*60*1e3;class EE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gE(e);const s=pc+(_E-pc)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;$e(e,(i,r)=>{r>0&&xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*yE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Zd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function va(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=mt.ACK_USER_WRITE,this.source=Zd()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Xi(te(),n,this.revert)}}else return b(K(this.path)===e,"operationForChild called for unrelated child."),new Xi(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new ci(this.source,te()):new ci(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=mt.OVERWRITE}operationForChild(e){return Y(this.path)?new Pn(this.source,te(),this.snap.getImmediateChild(e)):new Pn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=mt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Pn(this.source,te(),n.value):new ui(this.source,te(),n)}else return b(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dE(o.childName,o.snapshotNode))}),Ns(t,i,"child_removed",e,s,n),Ns(t,i,"child_added",e,s,n),Ns(t,i,"child_moved",r,s,n),Ns(t,i,"child_changed",e,s,n),Ns(t,i,"value",e,s,n),i}function Ns(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>bE(t,a,l)),o.forEach(a=>{const l=CE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function CE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bE(t,e,n){if(e.childName==null||n.childName==null)throw vs("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){return{eventCache:t,serverCache:e}}function js(t,e,n,s){return vr(new un(e,n,s),t.serverCache)}function eh(t,e,n,s){return vr(t.eventCache,new un(e,n,s))}function Ji(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;const IE=()=>(qr||(qr=new Qe(ay)),qr);class pe{constructor(e,n=IE()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return $e(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:we(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new pe(null)}}set(e,n){if(Y(e))return new pe(n,this.children);{const s=K(e),r=(this.children.get(s)||new pe(null)).set(ce(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(Y(e))return n;{const s=K(e),r=(this.children.get(s)||new pe(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),we(n,i),s):new pe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new pe(null))}}function qs(t,e,n){if(Y(e))return new _t(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=We(i,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new _t(r)}}}function gc(t,e,n){let s=t;return $e(n,(i,r)=>{s=qs(s,we(e,i),r)}),s}function _c(t,e){if(Y(e))return _t.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new _t(n)}}function xo(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function on(t,e){if(Y(e))return t;{const n=Mn(t,e);return n!=null?new _t(new pe(n)):new _t(t.writeTree_.subtree(e))}}function No(t){return t.writeTree_.isEmpty()}function ms(t,e){return th(te(),t.writeTree_,e)}function th(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=th(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){return rh(e,t)}function kE(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=s}function TE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function AE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&RE(a,s.path)?i=!1:ot(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return SE(t),!0;if(s.snap)t.visibleWrites=_c(t.visibleWrites,s.path);else{const a=s.children;$e(a,l=>{t.visibleWrites=_c(t.visibleWrites,we(s.path,l))})}return!0}else return!1}function RE(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(we(t.path,n),e))return!0;return!1}function SE(t){t.visibleWrites=nh(t.allWrites,PE,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function PE(t){return t.visible}function nh(t,e,n){let s=_t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ot(n,o)?(a=We(n,o),s=qs(s,a,r.snap)):ot(o,n)&&(a=We(o,n),s=qs(s,te(),r.snap.getChild(a)));else if(r.children){if(ot(n,o))a=We(n,o),s=gc(s,a,r.children);else if(ot(o,n))if(a=We(o,n),Y(a))s=gc(s,te(),r.children);else{const l=cs(r.children,K(a));if(l){const c=l.getChild(ce(a));s=qs(s,te(),c)}}}else throw vs("WriteRecord should have .snap or .children")}}return s}function sh(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=on(t.visibleWrites,e);if(No(o))return n;if(n==null&&!xo(o,te()))return null;{const a=n||U.EMPTY_NODE;return ms(o,a)}}}else{const r=on(t.visibleWrites,e);if(!i&&No(r))return n;if(!i&&n==null&&!xo(r,te()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ot(c.path,e)||ot(e,c.path))},a=nh(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ms(a,l)}}}function xE(t,e,n){let s=U.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=on(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=ms(on(r,new se(o)),a);s=s.updateImmediateChild(o,l)}),yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=on(t.visibleWrites,e);return yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function NE(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(xo(t.visibleWrites,r))return null;{const o=on(t.visibleWrites,r);return No(o)?i.getChild(n):ms(o,i.getChild(n))}}function BE(t,e,n,s){const i=we(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=on(t.visibleWrites,i);return ms(o,s.getNode().getImmediateChild(n))}else return null}function ME(t,e){return Mn(t.visibleWrites,e)}function LE(t,e,n,s,i,r,o){let a;const l=on(t.visibleWrites,e),c=Mn(l,te());if(c!=null)a=c;else if(n!=null)a=ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=h.getNext();for(;g&&u.length<i;)d(g,s)!==0&&u.push(g),g=h.getNext();return u}else return[]}function OE(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Zi(t,e,n,s){return sh(t.writeTree,t.treePath,e,n,s)}function Ca(t,e){return xE(t.writeTree,t.treePath,e)}function Ec(t,e,n,s){return NE(t.writeTree,t.treePath,e,n,s)}function er(t,e){return ME(t.writeTree,we(t.treePath,e))}function DE(t,e,n,s,i,r){return LE(t.writeTree,t.treePath,e,n,s,i,r)}function ba(t,e,n){return BE(t.writeTree,t.treePath,e,n)}function ih(t,e){return rh(we(t.treePath,e),t.writeTree)}function rh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ai(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,oi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,fs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ai(s,e.snapshotNode,i.oldSnap));else throw vs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const oh=new GE;class Ia{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ba(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),r=DE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){return{filter:t}}function UE(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HE(t,e,n,s,i){const r=new FE;let o,a;if(n.type===mt.OVERWRITE){const c=n;c.source.fromUser?o=Bo(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=tr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===mt.MERGE){const c=n;c.source.fromUser?o=jE(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Mo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===mt.ACK_USER_WRITE){const c=n;c.revert?o=zE(t,e,c.path,s,i,r):o=qE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===mt.LISTEN_COMPLETE)o=VE(t,e,n.path,s,r);else throw vs("Unknown operation type: "+n.type);const l=r.getChanges();return WE(e,o,l),{viewCache:o,changes:l}}function WE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ji(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Jd(Ji(e)))}}function ah(t,e,n,s,i,r){const o=e.eventCache;if(er(s,n)!=null)return e;{let a,l;if(Y(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xn(e),u=c instanceof U?c:U.EMPTY_NODE,d=Ca(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Zi(s,xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){b(cn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Ec(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ce(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ec(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ba(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return js(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function tr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&cn(n)>1)return e;const y=ce(n),k=l.getNode().getImmediateChild(g).updateChild(y,s);g===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),g,k,y,oh,null)}const d=eh(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),h=new Ia(i,d,r);return ah(t,d,n,i,h,a)}function Bo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ia(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=js(e,c,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=js(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ce(n),g=a.getNode().getImmediateChild(d);let y;if(Y(h))y=s;else{const x=u.getCompleteChild(d);x!=null?ma(h)===".priority"&&x.getChild(qd(h)).isEmpty()?y=x:y=x.updateChild(h,s):y=U.EMPTY_NODE}if(g.equals(y))l=e;else{const x=t.filter.updateChild(a.getNode(),d,y,h,u,o);l=js(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function vc(t,e){return t.eventCache.isCompleteForChild(e)}function jE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=we(n,l);vc(e,K(u))&&(a=Bo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=we(n,l);vc(e,K(u))||(a=Bo(t,a,u,c,i,r,o))}),a}function wc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Mo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=wc(t,g,h);l=tr(t,l,new se(d),y,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),x=wc(t,y,h);l=tr(t,l,new se(d),x,i,r,o,a)}}),l}function qE(t,e,n,s,i,r,o){if(er(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new pe(null);return l.getNode().forEachChild(is,(u,d)=>{c=c.set(new se(u),d)}),Mo(t,e,n,c,i,r,a,o)}else return e}else{let c=new pe(null);return s.foreach((u,d)=>{const h=we(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Mo(t,e,n,c,i,r,a,o)}}function VE(t,e,n,s,i){const r=e.serverCache,o=eh(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return ah(t,o,n,s,oh,i)}function zE(t,e,n,s,i,r){let o;if(er(s,n)!=null)return e;{const a=new Ia(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zi(s,xn(e));else{const d=e.serverCache.getNode();b(d instanceof U,"serverChildren would be complete if leaf node"),u=Ca(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let d=ba(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zi(s,xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||er(s,te())!=null,js(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ya(s.getIndex()),r=fE(s);this.processor_=$E(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new un(l,o.isFullyInitialized(),i.filtersNodes()),d=new un(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=vr(d,u),this.eventGenerator_=new vE(this.query_)}get query(){return this.query_}}function KE(t){return t.viewCache_.serverCache.getNode()}function YE(t){return Ji(t.viewCache_)}function XE(t,e){const n=xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Cc(t){return t.eventRegistrations_.length===0}function JE(t,e){t.eventRegistrations_.push(e)}function bc(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ic(t,e,n,s){e.type===mt.MERGE&&e.source.queryId!==null&&(b(xn(t.viewCache_),"We should always have a full cache before handling merges"),b(Ji(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=HE(t.processor_,i,e,n,s);return UE(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ZE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(fs(r,o))}),n.isFullyInitialized()&&s.push(Jd(n.getNode())),lh(t,s,n.getNode(),e)}function lh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return wE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;class ch{constructor(){this.views=new Map}}function ev(t){b(!nr,"__referenceConstructor has already been defined"),nr=t}function tv(){return b(nr,"Reference.ts has not been loaded"),nr}function nv(t){return t.views.size===0}function ka(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ic(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ic(o,e,n,s));return r}}function Ta(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Zi(n,i?s:null),l=!1;a?l=!0:s instanceof U?(a=Ca(n,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=vr(new un(a,l,!1),new un(s,i,!1));return new QE(e,c)}return o}function sv(t,e,n,s,i,r){const o=Ta(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JE(o,n),ZE(o,n)}function iv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(bc(c,n,s)),Cc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(bc(l,n,s)),Cc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!dn(t)&&r.push(new(tv())(e._repo,e._path)),{removed:r,events:o}}function uh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function an(t,e){let n=null;for(const s of t.views.values())n=n||XE(s,e);return n}function dh(t,e){if(e._queryParams.loadsAllData())return Cr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function hh(t,e){return dh(t,e)!=null}function dn(t){return Cr(t)!=null}function Cr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;function rv(t){b(!sr,"__referenceConstructor has already been defined"),sr=t}function ov(){return b(sr,"Reference.ts has not been loaded"),sr}let av=1;class kc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=OE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fh(t,e,n,s,i){return kE(t.pendingWriteTree_,e,n,s,i),i?Ei(t,new Pn(Zd(),e,n)):[]}function wn(t,e,n=!1){const s=TE(t.pendingWriteTree_,e);if(AE(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(te(),!0):$e(s.children,o=>{r=r.set(new se(o),!0)}),Ei(t,new Xi(s.path,r,n))}else return[]}function yi(t,e,n){return Ei(t,new Pn(va(),e,n))}function lv(t,e,n){const s=pe.fromObject(n);return Ei(t,new ui(va(),e,s))}function cv(t,e){return Ei(t,new ci(va(),e))}function uv(t,e,n){const s=Ra(t,n);if(s){const i=Sa(s),r=i.path,o=i.queryId,a=We(r,e),l=new ci(wa(o),a);return Pa(t,r,l)}else return[]}function ir(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||hh(r,e))){const a=iv(r,e,n,s);nv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>dn(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=mv(d);for(let g=0;g<h.length;++g){const y=h[g],x=y.query,k=yh(t,y);t.listenProvider_.startListening(Vs(x),di(t,x),k.hashFn,k.onComplete)}}}!u&&l.length>0&&!s&&(c?t.listenProvider_.stopListening(Vs(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(br(d));t.listenProvider_.stopListening(Vs(d),h)})),pv(t,l)}return o}function dv(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=ph(e,t),o=Ta(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:di(t,e)}function mh(t,e,n,s){const i=Ra(t,s);if(i!=null){const r=Sa(i),o=r.path,a=r.queryId,l=We(o,e),c=new Pn(wa(a),l,n);return Pa(t,o,c)}else return[]}function hv(t,e,n,s){const i=Ra(t,s);if(i){const r=Sa(i),o=r.path,a=r.queryId,l=We(o,e),c=pe.fromObject(n),u=new ui(wa(a),l,c);return Pa(t,o,u)}else return[]}function ph(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=We(c,n);s=s||an(u,d),i=i||dn(u)});let r=e.syncPointTree_.get(n);r?(i=i||dn(r),s=s||an(r,te())):(r=new ch,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=U.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,d)=>{const h=an(d,te());h&&(s=s.updateImmediateChild(u,h))}));const a=hh(r,t);if(!a&&!t._queryParams.loadsAllData()){const c=br(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=gv();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const l=wr(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:l,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:a}}function Tc(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:l}=ph(e,t);let c=sv(s,e,n,r,i,o);if(!a&&!l){const u=dh(s,e);c=c.concat(_v(t,e,u))}return c}function Aa(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=an(a,l);if(c)return c});return sh(i,e,r,n,!0)}function fv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=We(c,n);s=s||an(u,d)});let i=t.syncPointTree_.get(n);i?s=s||an(i,te()):(i=new ch,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new un(s,!0,!1):null,a=wr(t.pendingWriteTree_,e._path),l=Ta(i,e,a,r?o.getNode():U.EMPTY_NODE,r);return YE(l)}function Ei(t,e){return gh(e,t.syncPointTree_,null,wr(t.pendingWriteTree_,te()))}function gh(t,e,n,s){if(Y(t.path))return _h(t,e,n,s);{const i=e.get(te());n==null&&i!=null&&(n=an(i,te()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ih(s,o);r=r.concat(gh(a,l,c,u))}return i&&(r=r.concat(ka(i,t,s,n))),r}}function _h(t,e,n,s){const i=e.get(te());n==null&&i!=null&&(n=an(i,te()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ih(s,o),u=t.operationForChild(o);u&&(r=r.concat(_h(u,a,l,c)))}),i&&(r=r.concat(ka(i,t,s,n))),r}function yh(t,e){const n=e.query,s=di(t,n);return{hashFn:()=>(KE(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uv(t,n._path,s):cv(t,n._path);{const r=uy(i,n);return ir(t,n,null,r)}}}}function di(t,e){const n=br(e);return t.queryToTagMap.get(n)}function br(t){return t._path.toString()+"$"+t._queryIdentifier}function Ra(t,e){return t.tagToQueryMap.get(e)}function Sa(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Pa(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=wr(t.pendingWriteTree_,e);return ka(s,n,i,null)}function mv(t){return t.fold((e,n,s)=>{if(n&&dn(n))return[Cr(n)];{let i=[];return n&&(i=uh(n)),$e(s,(r,o)=>{i=i.concat(o)}),i}})}function Vs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ov())(t._repo,t._path):t}function pv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=br(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function gv(){return av++}function _v(t,e,n){const s=e._path,i=di(t,e),r=yh(t,n),o=t.listenProvider_.startListening(Vs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Y(c)&&u&&dn(u))return[Cr(u).query];{let h=[];return u&&(h=h.concat(uh(u).map(g=>g.query))),$e(d,(g,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Vs(u),di(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xa(n)}node(){return this.node_}}class Na{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Na(this.syncTree_,n)}node(){return Aa(this.syncTree_,this.path_)}}const yv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ac=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ev(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ev=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},vv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wv=function(t,e,n,s){return Ba(e,new Na(n,t),s)},Eh=function(t,e,n){return Ba(t,new xa(e),n)};function Ba(t,e,n){const s=t.getPriority().val(),i=Ac(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ac(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,ve(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new xe(i))),o.forEachChild(_e,(a,l)=>{const c=Ba(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function La(t,e){let n=e instanceof se?e:new se(e),s=t,i=K(n);for(;i!==null;){const r=cs(s.node.children,i)||{children:{},childCount:0};s=new Ma(i,s,r),n=ce(n),i=K(n)}return s}function bs(t){return t.node.value}function vh(t,e){t.node.value=e,Lo(t)}function wh(t){return t.node.childCount>0}function Cv(t){return bs(t)===void 0&&!wh(t)}function Ir(t,e){$e(t.node.children,(n,s)=>{e(new Ma(n,t,s))})}function Ch(t,e,n,s){n&&!s&&e(t),Ir(t,i=>{Ch(i,e,!0,s)}),n&&s&&e(t)}function bv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vi(t){return new se(t.parent===null?t.name:vi(t.parent)+"/"+t.name)}function Lo(t){t.parent!==null&&Iv(t.parent,t.name,t)}function Iv(t,e,n){const s=Cv(n),i=xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Lo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Lo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/[\[\].#$\/\u0000-\u001F\u007F]/,Tv=/[\[\].#$\u0000-\u001F\u007F]/,Vr=10*1024*1024,Oa=function(t){return typeof t=="string"&&t.length!==0&&!kv.test(t)},bh=function(t){return typeof t=="string"&&t.length!==0&&!Tv.test(t)},Av=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bh(t)},Ih=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yr(t)||t&&typeof t=="object"&&xt(t,".sv")},Oo=function(t,e,n,s){s&&e===void 0||kr(us(t,"value"),e,n)},kr=function(t,e,n){const s=n instanceof se?new qy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_n(s));if(typeof e=="function")throw new Error(t+"contains a function "+_n(s)+" with contents = "+e.toString());if(yr(e))throw new Error(t+"contains "+e.toString()+" "+_n(s));if(typeof e=="string"&&e.length>Vr/3&&_r(e)>Vr)throw new Error(t+"contains a string greater than "+Vr+" utf8 bytes "+_n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($e(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Oa(o)))throw new Error(t+" contains an invalid key ("+o+") "+_n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vy(s,o),kr(t,a,s),zy(s)}),i&&r)throw new Error(t+' contains ".value" child '+_n(s)+" in addition to actual children.")}},Rv=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ri(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Oa(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ot(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Sv=function(t,e,n,s){if(s&&e===void 0)return;const i=us(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];$e(e,(o,a)=>{const l=new se(o);if(kr(i,a,we(n,l)),ma(l)===".priority"&&!Ih(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Rv(i,r)},Pv=function(t,e,n){if(!(n&&e===void 0)){if(yr(e))throw new Error(us(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ih(e))throw new Error(us(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},kh=function(t,e,n,s){if(!(s&&n===void 0)&&!bh(n))throw new Error(us(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kh(t,e,n,s)},Fs=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Nv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Av(n))throw new Error(us(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Da(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!pa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Th(t,e,n){Da(t,n),Ah(t,s=>pa(s,e))}function Ht(t,e,n){Da(t,n),Ah(t,s=>ot(s,e)||ot(e,s))}function Ah(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Mv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Mv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();In&&Oe("event: "+n.toString()),ws(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="repo_interrupt",Ov=25;class Dv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yi(),this.transactionQueueTree_=new Ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fv(t,e,n){if(t.stats_=ha(t.repoInfo_),t.forceRestClient_||my())t.server_=new Ki(t.repoInfo_,(s,i,r,o)=>{Rc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new $t(t.repoInfo_,e,(s,i,r,o)=>{Rc(t,s,i,r,o)},s=>{Sc(t,s)},s=>{$v(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vy(t.repoInfo_,()=>new EE(t.stats_,t.server_)),t.infoData_=new mE,t.infoSyncTree_=new kc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=yi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ga(t,"connected",!1),t.serverSyncTree_=new kc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ht(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Gv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fa(t){return yv({timestamp:Gv(t)})}function Rc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ji(n,c=>ve(c));o=hv(t.serverSyncTree_,r,l,i)}else{const l=ve(n);o=mh(t.serverSyncTree_,r,l,i)}else if(s){const l=ji(n,c=>ve(c));o=lv(t.serverSyncTree_,r,l)}else{const l=ve(n);o=yi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Tr(t,r)),Ht(t.eventQueue_,a,o)}function Sc(t,e){Ga(t,"connected",e),e===!1&&Wv(t)}function $v(t,e){$e(e,(n,s)=>{Ga(t,n,s)})}function Ga(t,e,n){const s=new se("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(s,i);const r=yi(t.infoSyncTree_,s,i);Ht(t.eventQueue_,s,r)}function Rh(t){return t.nextWriteId_++}function Uv(t,e){const n=fv(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=ve(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())yi(t.serverSyncTree_,e._path,i);else{const o=dv(t.serverSyncTree_,e);mh(t.serverSyncTree_,e._path,i,o)}return ir(t.serverSyncTree_,e,null).length>0&&hi(t,"unexpected cancel events in repoGetValue"),i},s=>(hi(t,"get for query "+Se(e)+" failed: "+s),Promise.reject(new Error(s))))}function Hv(t,e,n,s,i){hi(t,"set",{path:e.toString(),value:n,priority:s});const r=Fa(t),o=ve(n,s),a=Aa(t.serverSyncTree_,e),l=Eh(o,a,r),c=Rh(t),u=fh(t.serverSyncTree_,e,l,c,!0);Da(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const y=h==="ok";y||Ke("set at "+e+" failed: "+h);const x=wn(t.serverSyncTree_,c,!y);Ht(t.eventQueue_,e,x),ps(t,i,h,g)});const d=Bh(t,e);Tr(t,d),Ht(t.eventQueue_,d,[])}function Wv(t){hi(t,"onDisconnectEvents");const e=Fa(t),n=Yi();Po(t.onDisconnect_,te(),(i,r)=>{const o=wv(i,r,t.serverSyncTree_,e);Cs(n,i,o)});let s=[];Po(n,te(),(i,r)=>{s=s.concat(yi(t.serverSyncTree_,i,r));const o=Bh(t,i);Tr(t,o)}),t.onDisconnect_=Yi(),Ht(t.eventQueue_,te(),s)}function jv(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&So(t.onDisconnect_,e),ps(t,n,s,i)})}function Pc(t,e,n,s){const i=ve(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Cs(t.onDisconnect_,e,i),ps(t,s,r,o)})}function qv(t,e,n,s,i){const r=ve(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Cs(t.onDisconnect_,e,r),ps(t,i,o,a)})}function Vv(t,e,n,s){if(yo(n)){Oe("onDisconnect().update() called with empty data.  Don't do anything."),ps(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&$e(n,(o,a)=>{const l=ve(a);Cs(t.onDisconnect_,we(e,o),l)}),ps(t,s,i,r)})}function zv(t,e,n){let s;K(e._path)===".info"?s=Tc(t.infoSyncTree_,e,n):s=Tc(t.serverSyncTree_,e,n),Th(t.eventQueue_,e._path,s)}function xc(t,e,n){let s;K(e._path)===".info"?s=ir(t.infoSyncTree_,e,n):s=ir(t.serverSyncTree_,e,n),Th(t.eventQueue_,e._path,s)}function Qv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Lv)}function hi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function ps(t,e,n,s){e&&ws(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Sh(t,e,n){return Aa(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function $a(t,e=t.transactionQueueTree_){if(e||Ar(t,e),bs(e)){const n=xh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Kv(t,vi(e),n)}else wh(e)&&Ir(e,n=>{$a(t,n)})}function Kv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Sh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=We(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ar(t,La(t.transactionQueueTree_,e)),$a(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ws(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Tr(t,e)}},o)}function Tr(t,e){const n=Ph(t,e),s=vi(n),i=xh(t,n);return Yv(t,i,s),s}function Yv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,d;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ov)u=!0,d="maxretry",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Sh(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){kr("transaction failed: Data returned ",g,l.path);let y=ve(g);typeof g=="object"&&g!=null&&xt(g,".priority")||(y=y.updatePriority(h.getPriority()));const k=l.currentWriteId,N=Fa(t),$=Eh(y,h,N);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=$,l.currentWriteId=Rh(t),o.splice(o.indexOf(k),1),i=i.concat(fh(t.serverSyncTree_,l.path,$,l.currentWriteId,l.applyLocally)),i=i.concat(wn(t.serverSyncTree_,k,!0))}else u=!0,d="nodata",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0))}Ht(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ar(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ws(s[a]);$a(t,t.transactionQueueTree_)}function Ph(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&bs(s)===void 0;)s=La(s,n),e=ce(e),n=K(e);return s}function xh(t,e){const n=[];return Nh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Nh(t,e,n){const s=bs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ir(e,i=>{Nh(t,i,n)})}function Ar(t,e){const n=bs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,vh(e,n.length>0?n:void 0)}Ir(e,s=>{Ar(t,s)})}function Bh(t,e){const n=vi(Ph(t,e)),s=La(t.transactionQueueTree_,e);return bv(s,i=>{zr(t,i)}),zr(t,s),Ch(s,i=>{zr(t,i)}),n}function zr(t,e){const n=bs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vh(e,void 0):n.length=r+1,Ht(t.eventQueue_,vi(e),i);for(let o=0;o<s.length;o++)ws(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Jv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nc=function(t,e){const n=Zv(t),s=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ry();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _y(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},Zv=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Xv(t.substring(u,d)));const h=Jv(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class Lh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class tw{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ft;return jv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Fs("OnDisconnect.remove",this._path);const e=new Ft;return Pc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Fs("OnDisconnect.set",this._path),Oo("OnDisconnect.set",e,this._path,!1);const n=new Ft;return Pc(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Fs("OnDisconnect.setWithPriority",this._path),Oo("OnDisconnect.setWithPriority",e,this._path,!1),Pv("OnDisconnect.setWithPriority",n,!1);const s=new Ft;return qv(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Fs("OnDisconnect.update",this._path),Sv("OnDisconnect.update",e,this._path,!1);const n=new Ft;return Vv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ua{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:ma(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=mc(this._queryParams),n=ua(e);return n==="{}"?"default":n}get _queryObject(){return mc(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof Ua))return!1;const n=this._repo===e._repo,s=pa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wy(this._path)}}class Nt extends Ua{constructor(e,n){super(e,n,new Ea,!1)}get parent(){const e=qd(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=At(this.ref,e);return new gs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,At(this.ref,s),_e)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function z(t,e){return t=Et(t),t._checkNotDeleted("ref"),e!==void 0?At(t._root,e):t._root}function At(t,e){return t=Et(t),K(t._path)===null?xv("child","path",e,!1):kh("child","path",e,!1),new Nt(t._repo,we(t._path,e))}function Bc(t){return t=Et(t),new tw(t._repo,t._path)}function le(t,e){t=Et(t),Fs("set",t._path),Oo("set",e,t._path,!1);const n=new Ft;return Hv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hn(t){return t=Et(t),Uv(t._repo,t).then(e=>new gs(e,new Nt(t._repo,t._path),t._queryParams.getIndex()))}class Ha{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Mh("value",this,new gs(e.snapshotNode,new Nt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}matches(e){return e instanceof Ha?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Wa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=At(new Nt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Mh(e.type,this,new gs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Wa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function nw(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{xc(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ew(n,r||void 0),a=e==="value"?new Ha(o):new Wa(e,o);return zv(t._repo,t,a),()=>xc(t._repo,t,a)}function ut(t,e,n,s){return nw(t,"value",e,n,s)}ev(Nt);rv(Nt);/**
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
 */const sw="FIREBASE_DATABASE_EMULATOR_HOST",Do={};let iw=!1;function rw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[sw]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Nc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new To(To.OWNER):new gy(t.name,t.options,e);Nv("Invalid Firebase Database URL",o),Y(o.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=aw(a,t,u,new py(t.name,n));return new lw(d,t)}function ow(t,e){const n=Do[e];(!n||n[t.key]!==t)&&Rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qv(t),delete n[t.key]}function aw(t,e,n,s){let i=Do[e.name];i||(i={},Do[e.name]=i);let r=i[t.toURLString()];return r&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Dv(t,iw,n,s),i[t.toURLString()]=r,r}class lw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ow(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}function ja(t=vd(),e){return yd(t,"database").getImmediate({identifier:e})}/**
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
 */function cw(t){ey(Ed),ni(new ds("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),rn(Xl,Jl,t),rn(Xl,Jl,"esm2017")}/**
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
 */const uw={".sv":"timestamp"};function dw(){return uw}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cw();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebasestorage.googleapis.com",Dh="storageBucket",hw=2*60*1e3,fw=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends gr{constructor(e,n){super(Qr(e),`Firebase Storage: ${n} (${Qr(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}_codeEquals(e){return Qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qr(t){return"storage/"+t}function qa(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce("unknown",t)}function mw(t){return new Ce("object-not-found","Object '"+t+"' does not exist.")}function pw(t){return new Ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gw(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce("unauthenticated",t)}function _w(){return new Ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function yw(t){return new Ce("unauthorized","User does not have permission to access '"+t+"'.")}function Ew(){return new Ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function vw(){return new Ce("canceled","User canceled the upload/download.")}function ww(t){return new Ce("invalid-url","Invalid URL '"+t+"'.")}function Cw(t){return new Ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function bw(){return new Ce("no-default-bucket","No default bucket found. Did you set the '"+Dh+"' property when initializing the app?")}function Iw(){return new Ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function kw(){return new Ce("no-download-url","The given file does not have any download URLs.")}function Fo(t){return new Ce("invalid-argument",t)}function Fh(){return new Ce("app-deleted","The Firebase app was deleted.")}function Tw(t){return new Ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new Ce("invalid-format","String does not match format '"+t+"': "+e)}function Bs(t){throw new Ce("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ze.makeFromUrl(e,n)}catch{return new Ze(e,"")}if(s.path==="")return s;throw Cw(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(W){W.path_=decodeURIComponent(W.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},x=n===Oh?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",N=new RegExp(`^https?://${x}/${i}/${k}`,"i"),H=[{regex:a,indices:l,postModify:r},{regex:g,indices:y,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let W=0;W<H.length;W++){const Ie=H[W],Le=Ie.regex.exec(e);if(Le){const at=Le[Ie.indices.bucket];let vt=Le[Ie.indices.path];vt||(vt=""),s=new Ze(at,vt),Ie.postModify(s);break}}if(s==null)throw ww(e);return s}}class Aw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function d(k){i=setTimeout(()=>{i=null,t(g,l())},k)}function h(){r&&clearTimeout(r)}function g(k,...N){if(c){h();return}if(k){h(),u.call(null,k,...N);return}if(l()||o){h(),u.call(null,k,...N);return}s<64&&(s*=2);let H;a===1?(a=2,H=0):H=(s+Math.random())*1e3,d(H)}let y=!1;function x(k){y||(y=!0,h(),!c&&(i!==null?(k||(a=2),clearTimeout(i),d(0)):k||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,x(!0)},n),x}function Sw(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){return t!==void 0}function xw(t){return typeof t=="object"&&!Array.isArray(t)}function Va(t){return typeof t=="string"||t instanceof String}function Mc(t){return za()&&t instanceof Blob}function za(){return typeof Blob<"u"}function Lc(t,e,n,s){if(s<e)throw Fo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Gh(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kn||(kn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,s,i,r,o,a,l,c,u,d){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,g)=>{this.resolve_=h,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ri(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===kn.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=r.getErrorCode()===kn.ABORT;s(!1,new Ri(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ri(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Pw(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=qa();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Fh():vw();o(l)}else{const l=Ew();o(l)}};this.canceled_?n(!1,new Ri(!1,null,!0)):this.backoffId_=Rw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||r}}class Ri{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Bw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Mw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Lw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ow(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dw(t,e,n,s,i,r){const o=Gh(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return Lw(l,e),Bw(l,n),Mw(l,r),Ow(l,s),new Nw(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gw(...t){const e=Fw();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(za())return new Blob(t);throw new Ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function $w(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Uw(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kr{constructor(e,n){this.data=e,this.contentType=n||null}}function Hw(t,e){switch(t){case St.RAW:return new Kr($h(e));case St.BASE64:case St.BASE64URL:return new Kr(Uh(t,e));case St.DATA_URL:return new Kr(jw(e),qw(e))}throw qa()}function $h(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Ww(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(St.DATA_URL,"Malformed data URL.")}return $h(e)}function Uh(t,e){switch(t){case St.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Uw(e)}catch{throw zs(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Hh{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Vw(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function jw(t){const e=new Hh(t);return e.base64?Uh(St.BASE64,e.rest):Ww(e.rest)}function qw(t){return new Hh(t).contentType}function Vw(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){let s=0,i="";Mc(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mc(this.data_)){const s=this.data_,i=$w(s,e,n);return i===null?null:new Zt(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Zt(s,!0)}}static getBlob(...e){if(za()){const n=e.map(s=>s instanceof Zt?s.data_:s);return new Zt(Gw.apply(null,n))}else{const n=e.map(o=>Va(o)?Hw(St.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){let e;try{e=JSON.parse(t)}catch{return null}return xw(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qw(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function jh(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e){return e}class Ue{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||Kw}}let Si=null;function Yw(t){return!Va(t)||t.length<2?t:jh(t)}function Qa(){if(Si)return Si;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(r,o){return Yw(o)}const n=new Ue("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ue("size");return i.xform=s,t.push(i),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Si=t,Si}function Xw(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Ze(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Jw(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return Xw(s,t),s}function qh(t,e,n){const s=Wh(e);return s===null?null:Jw(t,s,n)}function Zw(t,e,n,s){const i=Wh(e);if(i===null||!Va(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,d=t.fullPath,h="/b/"+o(u)+"/o/"+o(d),g=Rr(h,n,s),y=Gh({alt:"media",token:c});return g+y})[0]}function eC(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Ka{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){if(!t)throw qa()}function zh(t,e){function n(s,i){const r=qh(t,i,e);return Vh(r!==null),r}return n}function tC(t,e){function n(s,i){const r=qh(t,i,e);return Vh(r!==null),Zw(r,i,t.host,t._protocol)}return n}function Qh(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_w():i=gw():n.getStatus()===402?i=pw(t.bucket):n.getStatus()===403?i=yw(t.path):i=s,i.serverResponse=s.serverResponse,i}return e}function Kh(t){const e=Qh(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=mw(t.path)),r.serverResponse=i.serverResponse,r}return n}function nC(t,e,n){const s=e.fullServerUrl(),i=Rr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ka(i,r,zh(t,n),o);return a.errorHandler=Kh(e),a}function sC(t,e,n){const s=e.fullServerUrl(),i=Rr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ka(i,r,tC(t,n),o);return a.errorHandler=Kh(e),a}function iC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function rC(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=iC(null,e)),s}function oC(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let H="";for(let W=0;W<2;W++)H=H+Math.random().toString().slice(2);return H}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=rC(e,s,i),u=eC(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Zt.getBlob(d,s,h);if(g===null)throw Iw();const y={name:c.fullPath},x=Rr(r,t.host,t._protocol),k="POST",N=t.maxUploadRetryTime,$=new Ka(x,k,zh(t,n),N);return $.urlParams=y,$.headers=o,$.body=g.uploadData(),$.errorHandler=Qh(e),$}class aC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lC extends aC{initXhr(){this.xhr_.responseType="text"}}function Ya(){return new lC}/**
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
 */class Nn{constructor(e,n){this._service=e,n instanceof Ze?this._location=n:this._location=Ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nn(e,n)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jh(this._location.path)}get storage(){return this._service}get parent(){const e=zw(this._location.path);if(e===null)return null;const n=new Ze(this._location.bucket,e);return new Nn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Tw(e)}}function cC(t,e,n){t._throwIfRoot("uploadBytes");const s=oC(t.storage,t._location,Qa(),new Zt(e,!0),n);return t.storage.makeRequestWithTokens(s,Ya).then(i=>({metadata:i,ref:t}))}function uC(t){t._throwIfRoot("getMetadata");const e=nC(t.storage,t._location,Qa());return t.storage.makeRequestWithTokens(e,Ya)}function dC(t){t._throwIfRoot("getDownloadURL");const e=sC(t.storage,t._location,Qa());return t.storage.makeRequestWithTokens(e,Ya).then(n=>{if(n===null)throw kw();return n})}function hC(t,e){const n=Qw(t._location.path,e),s=new Ze(t._location.bucket,n);return new Nn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){return/^[A-Za-z]+:\/\//.test(t)}function mC(t,e){return new Nn(t,e)}function Yh(t,e){if(t instanceof Xa){const n=t;if(n._bucket==null)throw bw();const s=new Nn(n,n._bucket);return e!=null?Yh(s,e):s}else return e!==void 0?hC(t,e):t}function pC(t,e){if(e&&fC(e)){if(t instanceof Xa)return mC(t,e);throw Fo("To use ref(service, url), the first argument must be a Storage instance.")}else return Yh(t,e)}function Oc(t,e){const n=e==null?void 0:e[Dh];return n==null?null:Ze.makeFromBucketSpec(n,t)}class Xa{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Oh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hw,this._maxUploadRetryTime=fw,this._requests=new Set,i!=null?this._bucket=Ze.makeFromBucketSpec(i,this._host):this._bucket=Oc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=Oc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nn(this,e)}_makeRequest(e,n,s,i){if(this._deleted)return new Aw(Fh());{const r=Dw(e,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Dc="@firebase/storage",Fc="0.9.9";/**
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
 */const Xh="storage";function Gc(t,e,n){return t=Et(t),cC(t,e,n)}function $c(t){return t=Et(t),uC(t)}function Yr(t){return t=Et(t),dC(t)}function Kt(t,e){return t=Et(t),pC(t,e)}function gC(t=vd(),e){return t=Et(t),yd(t,Xh).getImmediate({identifier:e})}function _C(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xa(n,s,i,e,Ed)}function yC(){ni(new ds(Xh,_C,"PUBLIC").setMultipleInstances(!0)),rn(Dc,Fc,""),rn(Dc,Fc,"esm2017")}yC();const EC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD4UlEQVR4nO2bW2gUVxjH/9/ZixtMxVLtBWI2NQhWrQ8NCD4ILVIK6jZ9MW8V+tIaJLZQaLq7EQeabIz4UFuwlD60DX2KUJvMsr0TSoWUYkq10iohzc5isWpFxcS1Ozvz+RAXWrTYMzM7N+f3uHu+y/ntmbMzcAaIiIiIiIi4byE7wTNKaVmqpncYIqYvxG/Mrld6ak415haWBJzPllbWYsYhMHoApG5/fIWJjtysGSNrD3Zfd67F5iIt4JxSajNqxhQIbXcdwDjHhL0dQ5ljtrtzASEbYOjGh/85eQAgtBHwqZZTx2f71XZb3bmA1ArQ9k2sh0mnJUIWmGl/Orn0MCnP1CV7cwW5FWBQl2T+pUR8SNPnp8tZdbNkrCtICSDBD1kpQsBGEjhezqlH5pRjy63kaBZyK4DJzt+mIEKv0OO/aTl1l408jiK9CTrAoyB8XMmrk3NZda0H9f+FFwIAAAw8LQR+0gZUZaavtMSrPjwTcJsWMPYnlxm/aDl1qxcNeC2gwRoQvtby6uj5bGmlm4X9IgBYvCd5sSaMs1q++DKDbT2n/F/8JKDBgwC/XxkofqdlP1vX7GJ+FLAIYwtE7GdtYOLAnDKZuneANfwrYJEEmPqFPn+6kis+14wCfhfQoJOJv9Dy6tjvufFHnEwcFAENdsZInNEG1FdZURzpPWgCAGA5GG9X9K4ftX1F2YezOwiigAZdMPkHLa8evqiMtVpNEmQBABAHsLeqt5yqZItbrCQIuoAGj7Pgb8q54nbZwLAIAIAkEX905o3xB2SCwiQAAFak4rGdMgFhEwACb5QZHzoBsoROAAmclBkfNgF/peLVozIBYRJQY+ZdDys98zJBIRFAZQBbOwrPfy4bGXQBdQDvtCRuPJkeyhy3kiDucENuMg1Br6Tf2jFtJ0kQV8BVEF5rT0xvsjt5IHgr4KjBZt/qoe4LTiUMioBZYtrTXtjxpdOJ/X4J6CAeMROtG5oxecDPK4DwPQxjd3r4hV+bWcaPAq4A9Gb74PYPCMTNLuYnAQzgk6QZe/2x4W2X3CrqFwEzYPSmC5lv3S7stYAqCAdr12LDa97d9rcXDXgpYNIgs3f1YPdZD3vwRMCfYPSnC5lRD2rfgdx9ALGdXdlkxntmov6EXyYPSK4ANumylcO1DJyCid0dw5kp+ejmIncJsHECFJOJ8P1BSenfU8sXvwL42XsOZEzUDfR1jmQqljpzCelNUIBfMoEpAKvuOqBxWLoQ0sPSq4YyfyQSeAqEUQA3//HVZQIGq3VzXVBOigM2X5i4qIy1zhstncm6qF5bslAO4gsTERERERER9zG3AIT8NZrQQB7xAAAAAElFTkSuQmCC";let it,Te,Fe,Ve,M,yn,B=0,Uc;function vC(){clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),clearInterval(yn),p.data().leaveGame()}function wC(){p.data().pickedGame.players.filter(e=>e.inGame==!0).length>1&&p.data().startGame()}function Jh(t){p.data().pickedGame.isHost=="NoHost"?p.data().informVoiting(t.currentTarget.innerText):p.data().hostVoited(t.currentTarget.innerText)}function Wn(){this.onAnswered;let t;if(p.data().pickedGame.gameLine.turn.id!==p.data().uid)if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers!==void 0&&p.data().pickedGame.pickedPack.rounds[B].wrongAnswers!==null)if(Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M]))if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0){let e=Array.from(document.getElementsByClassName("answersTest")).find(n=>n.value==p.data().pickedGame.gameLine.answer.answer);e&&(e.parentElement.style.background="#2185A6")}else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer;else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer;else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer;for(p.data().pickedGame.gameLine.turn.id==p.data().uid&&(M=p.data().pickedGame.gameLine.pikedQuestion,t=document.getElementById("answerInp").value,Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers)&&Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M])&&p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0&&(t=Array.from(document.getElementsByClassName("answersTest")).find(e=>e.checked===!0),t=t?t.value:!1),p.data().onAnswer(t,M));document.getElementById("onAnsweredBtn");)document.getElementById("onAnsweredBtn").remove();if(document.getElementById("answerLbl").innerText=document.getElementById("answerInp").value,document.getElementById("answerInp").style.display="none",document.getElementById("answerInp").value="",clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),p.data().pickedGame.pickedPack.rounds[B].wrongAnswers!==void 0)if(Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M]))if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0){let e=Array.from(document.getElementsByClassName("answersTest")).find(n=>n.value==p.data().pickedGame.pickedPack.rounds[B].answers[M]);e.parentElement.style.background="#76C5EF"}else document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());else document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());else document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());p.data().pickedGame.gameLine.turn.id!==p.data().uid&&(document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer),(p.data().pickedGame.isHost=="Host"&&p.data().pickedGame.host.id==p.data().uid||p.data().pickedGame.isHost=="NoHost"&&p.data().pickedGame.gameLine.turn.id!==p.data().uid)&&document.getElementsByClassName("markAnswerBtns").length<1&&(document.getElementById("questionBlock").insertAdjacentHTML("beforeend",`
                        <div id="chooseRightOrWrongAnswer">
                        <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                        <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
                        </div>
                        `),Array.from(document.getElementsByClassName("markAnswerBtns")).forEach(e=>e.addEventListener("click",Jh)))}function Zh(t){Array.from(t.target.parentElement.parentElement.getElementsByClassName("answersTest")).forEach(e=>e.parentElement.style.background="#2185A6"),t.target.checked===!0?t.target.parentElement.style.background="#145367":t.target.parentElement.style.background="#2185A6"}function Hc(){let t=Math.round(Math.random()*Array.from(document.getElementsByClassName("answersTest")).length);if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers){let e=p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M];if(Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M])&&e.length>0){for(p.data().uid==p.data().pickedGame.gameLine.turn.id&&p.data().informWrongAnswer(t),document.getElementById("testTypeAnswer").style.display="grid",document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].style.display="grid";document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].firstElementChild;)document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].firstElementChild.remove();for(let n=0;n<e.length;n++)document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].insertAdjacentHTML("beforeend",`
                                <label><input type="radio" class="answersTest" name="answers" value="${e[n]}">
                                <i>${e[n]}</i></label>`);t>Array.from(document.getElementsByClassName("answersTest")).length-1?Array.from(document.getElementsByClassName("answersTest"))[t-1].parentElement.insertAdjacentHTML("afterend",`
                                <label><input type="radio" class="answersTest" name="answers" value="${p.data().pickedGame.pickedPack.rounds[B].answers[M]}">
                                <i>${p.data().pickedGame.pickedPack.rounds[B].answers[M]}</i></label>`):Array.from(document.getElementsByClassName("answersTest"))[t].parentElement.insertAdjacentHTML("beforebegin",`
                                <label><input type="radio" class="answersTest" name="answers" value="${p.data().pickedGame.pickedPack.rounds[B].answers[M]}">
                                <i>${p.data().pickedGame.pickedPack.rounds[B].answers[M]}</i></label>`),Array.from(document.getElementsByClassName("answersTest")).forEach(n=>n.addEventListener("click",Zh)),document.getElementById("answerInp").display="none",document.getElementById("questionBlock")==null&&document.getElementById("questionBlock").insertAdjacentHTML("beforeend",'<button id="onAnsweredBtn">Answered</button>')}}}function CC(){p.data().pickedGame.host.id==p.data().uid&&(document.getElementById("questionBlock").style.display!=="none"&&(p.data().onAnswer(!1,M),document.getElementById("questionBlock").style.display="none",document.getElementById("tableWithQuestions").style.display="grid"),p.data().nextRound())}const bC={data(){return{pickedGame:p.data().pickedGame,players:p.data().pickedGame?p.data().pickedGame.players:null,startGame:function(){this.showPlayers(),this.showHeader(),this.showMain(),p.data().setGameDataListeners()},showPlayers:function(){if(document.getElementById("playersBlock"))for(;document.getElementById("playersBlock").firstElementChild;)document.getElementById("playersBlock").firstElementChild.remove();let t=p.data().pickedGame.players.filter(e=>e.inGame==!0);for(let e=0;e<t.length;e++)document.getElementById("playersBlock").insertAdjacentHTML("beforeend",`
                        <div class="player">
                        <img draggable="false" class="playerAvatars" src="${t.icon?t.icon:"#"}" alt="Icon">
                        <label class="playersNick">${t[e].name}</label>
                        <label class="playersPoints">${t[e].points?t[e].points:0}</label>
                    </div>`);Array.from(document.getElementsByClassName("player")).forEach(e=>e.addEventListener("click",this.onPlayer))},updatePlayerPoints:function(){let t=this.players.filter(e=>e.inGame==!0);for(let e=0;e<t.length;e++)Array.from(document.getElementsByClassName("playersPoints"))[e].innerText=t[e].points?t[e].points:0},onPlayer:function(t){p.data().pickedGame.host.id==p.data().uid&&(Uc=Array.from(document.getElementsByClassName("player")).findIndex(e=>e==t.currentTarget),document.getElementById("playerChangePointsBlock").style.display="grid",document.getElementById("changePointsInp").value=Number(t.currentTarget.getElementsByClassName("playersPoints")[0].innerText))},closePointchangeWindow:function(t){t.stopPropagation(),document.getElementById("changePointsInp").value,document.getElementById("playerChangePointsBlock").style.display="none",p.data().updatePointsByHost(Uc,Number(document.getElementById("changePointsInp").value))},onChangePointsInpBtns:function(t){t.currentTarget.innerText=="+"?document.getElementById("changePointsInp").value!==""?document.getElementById("changePointsInp").value=Number(document.getElementById("changePointsInp").value)+100:document.getElementById("changePointsInp").value=100:document.getElementById("changePointsInp").value!==""?document.getElementById("changePointsInp").value=Number(document.getElementById("changePointsInp").value)-100:document.getElementById("changePointsInp").value=-100},showHeader:function(){for(;document.getElementById("headerOfGame").firstElementChild;)document.getElementById("headerOfGame").firstElementChild.remove();this.pickedGame.host.id==p.data().uid?(document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`<button id="leaveBtn"><svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></button>`),this.pickedGame.started?(document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`
                        <button id="pauseGame"><img draggable="false" src="img/pause.png" alt="pause"></button>
                        <button id="skipQuestion">></button>
                        <button id="skipRound">> ></button>`),document.getElementById("pauseGame").addEventListener("click",this.onPauseGameBtn),document.getElementById("skipQuestion").addEventListener("click",this.onSkipQuestionBtn),document.getElementById("skipRound").addEventListener("click",this.onSkipRoundBtn)):(document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",'<button id="startingGame">Start Game</button>'),document.getElementById("startingGame").addEventListener("click",wC),this.pickedGame.toJoin=="Invited"&&(document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`<label id="gameCode">${this.pickedGame.ID}</label>`),document.getElementById("gameCode").addEventListener("click",t=>{navigator.clipboard.writeText(t.target.innerText)})))):document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`
                    <button id="leaveBtn"><svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></button>
                    `),document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`
                <label id="nowTurnPlayerName"></label>
                <label id="timerForGame"></label>`),document.getElementById("leaveBtn").addEventListener("click",vC)},showMain:function(){if(!document.getElementById("tableWithQuestions").firstElementChild){document.getElementById("tableWithQuestions").insertAdjacentHTML("beforeend",'<input disabled="disabled" value="Category">');for(let e=0;e<this.pickedGame.pickedPack.rounds[B].points.length;e++)document.getElementById("tableWithQuestions").insertAdjacentHTML("beforeend",`<div class="points">${this.pickedGame.pickedPack.rounds[B].points[e]}</div>`);let t=this.pickedGame.pickedPack.rounds[B].categories?this.pickedGame.pickedPack.rounds[B].categories.length:0;for(let e=0;e<Math.max(Math.min(7,Math.ceil(this.pickedGame.pickedPack.rounds[B].questions.findLastIndex(n=>n!=="")/this.pickedGame.pickedPack.rounds[B].points.length)),t);e++){this.pickedGame.pickedPack.rounds[B].categories!==void 0?document.getElementById("tableWithQuestions").insertAdjacentHTML("beforeend",`<div class="category">${this.pickedGame.pickedPack.rounds[B].categories[e]}</div>`):document.getElementById("tableWithQuestions").insertAdjacentHTML("beforeend",`<div class="category">Category ${e+1}</div>`);for(let n=0;n<this.pickedGame.pickedPack.rounds[B].points.length;n++)document.getElementById("tableWithQuestions").insertAdjacentHTML("beforeend",'<div class="qustions"><img draggable="false" class="questionMark" src="img/questionMark.png" alt="?"></div>')}Array.from(document.getElementsByClassName("qustions")).forEach(e=>e.addEventListener("click",this.onQuestion))}},showGameInfo:function(){document.getElementById("showBlock").style.display="grid",document.getElementById("mainLbl").innerText=p.data().pickedGame.name,document.getElementById("subMainLbl").innerText=p.data().pickedGame.host.name,setTimeout(()=>{document.getElementById("mainLbl").innerText=p.data().pickedGame.pickedPack.name,document.getElementById("subMainLbl").innerText=p.data().pickedGame.pickedPack.author,setTimeout(()=>{for(document.getElementById("mainLbl").style.display="none",document.getElementById("subMainLbl").style.display="none";document.getElementById("showBlock").firstElementChild;)document.getElementById("showBlock").firstElementChild.remove();if(p.data().pickedGame.pickedPack.rounds[0].categories!==void 0)for(let t=0;t<p.data().pickedGame.pickedPack.rounds[0].categories.length;t++)document.getElementById("showBlock").insertAdjacentHTML("beforeend",`<label>${p.data().pickedGame.pickedPack.rounds[0].categories[t]}<label>`);else for(let t=0;t<Array.from(document.getElementsByClassName("category")).length;t++)document.getElementById("showBlock").insertAdjacentHTML("beforeend",`<label>Category ${t+1}<label>`);setTimeout(()=>{document.getElementById("showBlock").style.display="none",document.getElementById("startingGame")&&(document.getElementById("startingGame").remove(),document.getElementById("gameCode")&&document.getElementById("gameCode").remove(),document.getElementById("headerOfGame").insertAdjacentHTML("beforeend",`
                                    <button id="pauseGame"><img draggable="false" src="img/pause.png" alt="pause"></button>
                                    <button id="skipQuestion">></button>
                                    <button id="skipRound">> ></button>`),document.getElementById("pauseGame").addEventListener("click",this.onPauseGameBtn),document.getElementById("skipQuestion").addEventListener("click",this.onSkipQuestionBtn),document.getElementById("skipRound").addEventListener("click",this.onSkipRoundBtn)),this.nextTurn()},3e3)},2e3)},2e3)},onPauseGameBtn:function(){p.data().pickedGame.host.id==p.data().uid&&(this.pauseGame,p.data().pauseGame(),Array.from(document.getElementsByClassName("backBtn")[0].children).forEach(t=>{t.style.stroke="#E17BB3",t.style.fill="#E17BB3"}))},pauseGame:function(){if(p.data().pickedGame.gameLine.paused)document.getElementById("pauseWindow").style.display="grid",document.getElementById("resumeGameBtn").style.display="none",clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),clearInterval(yn),p.data().pickedGame.host.id==p.data().uid&&(document.getElementById("resumeGameBtn").style.display="block"),document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&document.getElementsByClassName("fileMediaElement")[0].pause(),Array.from(document.getElementsByClassName("backBtn")[0].children).forEach(t=>{t.style.stroke="#E17BB3",t.style.fill="#E17BB3"});else{Array.from(document.getElementsByClassName("backBtn")[0].children).forEach(e=>{e.style.stroke="#145367",e.style.fill="#145367"}),document.getElementById("pauseWindow").style.display="none";let t=document.getElementById("timerForGame").innerText;document.getElementById("tableWithQuestions").style.display!=="none"?(Te=t,Fe=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3),it=setTimeout(()=>{this.pickRandomQuestion(),clearInterval(Fe)},t*1e3)):(Te=t,Ve=setTimeout(Wn,t*1e3),Fe=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3)),document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&document.getElementsByClassName("fileMediaElement")[0].play()}},onSkipQuestionBtn:function(){p.data().pickedGame.host.id==p.data().uid&&document.getElementById("questionBlock").style.display!=="none"&&(p.data().onAnswer(!1,M),document.getElementById("questionBlock").style.display="none",document.getElementById("tableWithQuestions").style.display="grid",Array.from(document.getElementsByClassName("questionMark")).length>0?p.data().nextTurn():CC())},onSkipRoundBtn:function(){p.data().pickedGame.host.id==p.data().uid&&(document.getElementById("questionBlock").style.display!=="none"&&(p.data().onAnswer(!1,M),document.getElementById("questionBlock").style.display="none",document.getElementById("tableWithQuestions").style.display="grid"),p.data().nextRound())},onResumeGame:function(){p.data().pickedGame.host.id==p.data().uid&&(document.getElementById("pauseWindow").style.display="none",p.data().resumeGame())},wrongAnswersAdd:function(t){if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers){let e=p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M];if(Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M])&&e.length>0){for(p.data().uid==p.data().pickedGame.gameLine.turn.id&&p.data().informWrongAnswer(t),document.getElementById("testTypeAnswer").style.display="grid",document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].style.display="grid";document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].firstElementChild;)document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].firstElementChild.remove();for(let n=0;n<e.length;n++)document.getElementById("testTypeAnswer").getElementsByTagName("form")[0].insertAdjacentHTML("beforeend",`
                                <label><input type="radio" class="answersTest" name="answers" value="${e[n]}">
                                <i>${e[n]}</i></label>`);t>Array.from(document.getElementsByClassName("answersTest")).length-1?Array.from(document.getElementsByClassName("answersTest"))[t-1]!==void 0?Array.from(document.getElementsByClassName("answersTest"))[t-1].parentElement.insertAdjacentHTML("afterend",`
                                    <label><input type="radio" class="answersTest" name="answers" value="${p.data().pickedGame.pickedPack.rounds[B].answers[M]}">
                                    <i>${p.data().pickedGame.pickedPack.rounds[B].answers[M]}</i></label>`):Array.from(document.getElementsByClassName("answersTest"))[t]!==void 0&&Array.from(document.getElementsByClassName("answersTest"))[t].parentElement.insertAdjacentHTML("beforebegin",`
                                    <label><input type="radio" class="answersTest" name="answers" value="${p.data().pickedGame.pickedPack.rounds[B].answers[M]}">
                                    <i>${p.data().pickedGame.pickedPack.rounds[B].answers[M]}</i></label>`):Array.from(document.getElementsByClassName("answersTest"))[t].parentElement.insertAdjacentHTML("beforebegin",`
                                <label><input type="radio" class="answersTest" name="answers" value="${p.data().pickedGame.pickedPack.rounds[B].answers[M]}">
                                <i>${p.data().pickedGame.pickedPack.rounds[B].answers[M]}</i></label>`),Array.from(document.getElementsByClassName("answersTest")).forEach(n=>n.addEventListener("click",Zh))}}},onFinishGameLeave:function(){clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),clearInterval(yn),p.data().leaveGame()},onQuestionPick:function(){document.getElementById("nowTurnPlayerName").innerText=p.data().pickedGame.gameLine.turn.name,clearInterval(Fe),clearTimeout(it),clearTimeout(Ve),Te=p.data().pickedGame.timeOnPickQuestion,document.getElementById("timerForGame").innerText=Te,Fe=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3),it=setTimeout(()=>{this.pickRandomQuestion(),clearInterval(Fe)},p.data().pickedGame.timeOnPickQuestion*1e3)},onQuestion:function(t){if(p.data().uid==p.data().pickedGame.gameLine.turn.id&&Array.from(t.currentTarget.getElementsByClassName("questionMark")).length>0){for(document.getElementById("chooseRightOrWrongAnswer")&&document.getElementById("chooseRightOrWrongAnswer").remove(),document.getElementById("rightAnswerLbl").innerText="",document.getElementById("answerLbl").innerText="",clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),Te=p.data().pickedGame.timeOnGiveAnswer,Fe=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3),M=Array.from(document.getElementsByClassName("qustions")).indexOf(t.currentTarget),p.data().informPickedQuestion(M),document.getElementById("questionBlock").style.display="grid",document.getElementById("tableWithQuestions").style.display="none",document.getElementById("questionLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].questions[M];document.getElementById("mediaFile").firstElementChild;)document.getElementById("mediaFile").firstElementChild.remove();p.data().pickedGame.pickedPack.rounds[B].mediaFiles!==void 0&&p.data().pickedGame.pickedPack.rounds[B].mediaFiles[M]!==""&&p.data().getQnFile(B,M),document.getElementById("testTypeAnswer").style.display="none",Hc(),document.getElementById("questionBlock").insertAdjacentHTML("beforeend",'<button id="onAnsweredBtn">Answered</button>'),document.getElementById("onAnsweredBtn").addEventListener("click",Wn),p.data().pickedGame.answerType=="Text"&&Array.from(document.getElementsByClassName("answersTest")).length<1?document.getElementById("answerInp").style.display="block":document.getElementById("answerInp").style.display="none",Ve=setTimeout(Wn,p.data().pickedGame.timeOnGiveAnswer*1e3),Array.from(document.getElementsByClassName("qustions"))[M].removeEventListener("click",this.onQuestion),Array.from(document.getElementsByClassName("qustions"))[M].getElementsByClassName("questionMark")[0].remove()}},onGetQuestion:function(){if(p.data().uid!==p.data().pickedGame.gameLine.turn.id){for(clearTimeout(it),clearInterval(Fe),clearTimeout(Ve),Te=p.data().pickedGame.timeOnGiveAnswer,yn=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3),document.getElementById("questionBlock").style.display="grid",document.getElementById("tableWithQuestions").style.display="none",document.getElementById("chooseRightOrWrongAnswer")&&document.getElementById("chooseRightOrWrongAnswer").remove(),document.getElementById("rightAnswerLbl").innerText="",document.getElementById("answerLbl").innerText="",M=p.data().pickedGame.gameLine.pikedQuestion,document.getElementById("questionLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].questions[M];document.getElementById("mediaFile").firstElementChild;)document.getElementById("mediaFile").firstElementChild.remove();for(p.data().pickedGame.pickedPack.rounds[B].mediaFiles!==void 0&&p.data().pickedGame.pickedPack.rounds[B].mediaFiles[M]!==""&&p.data().getQnFile(B,M),document.getElementById("testTypeAnswer").style.display="none";document.getElementById("onAnsweredBtn");)document.getElementById("onAnsweredBtn").remove();document.getElementById("answerInp").style.display="none",Ve=setTimeout(Wn,p.data().pickedGame.timeOnGiveAnswer*1e3),Array.from(document.getElementsByClassName("qustions"))[M].removeEventListener("click",this.onQuestion),Array.from(document.getElementsByClassName("qustions"))[M].getElementsByClassName("questionMark")[0]!==void 0&&Array.from(document.getElementsByClassName("qustions"))[M].getElementsByClassName("questionMark")[0].remove()}},nextTurn:function(){Array.from(document.getElementsByClassName("questionMark")).length>0?(document.getElementById("questionBlock").style.display="none",document.getElementById("tableWithQuestions").style.display="grid",p.data().nextTurn()):p.data().nextRound()},pickRandomQuestion:function(){if(Array.from(document.getElementsByClassName("questionMark")).length>0){document.getElementById("rightAnswerLbl").innerText="";let t=Math.round(Math.random()*(Array.from(document.getElementsByClassName("questionMark")).length-1));for(let e=0;e<Array.from(document.getElementsByClassName("qustions")).length;e++)if(Array.from(document.getElementsByClassName("qustions"))[e].getElementsByClassName("questionMark")[0]!==void 0&&Array.from(document.getElementsByClassName("qustions"))[e].getElementsByClassName("questionMark")[0]==Array.from(document.getElementsByClassName("questionMark"))[t]){M=e;break}if(p.data().uid==p.data().pickedGame.gameLine.turn.id){for(document.getElementById("chooseRightOrWrongAnswer")&&document.getElementById("chooseRightOrWrongAnswer").remove(),document.getElementById("answerLbl").innerText="",clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),Te=p.data().pickedGame.timeOnGiveAnswer,yn=setInterval(()=>{Te--,document.getElementById("timerForGame").innerText=Te},1e3),p.data().informPickedQuestion(M),document.getElementById("questionBlock").style.display="grid",document.getElementById("tableWithQuestions").style.display="none",document.getElementById("questionLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].questions[M];document.getElementById("mediaFile").firstElementChild;)document.getElementById("mediaFile").firstElementChild.remove();p.data().pickedGame.pickedPack.rounds[B].mediaFiles!==void 0&&p.data().pickedGame.pickedPack.rounds[B].mediaFiles[M]!==""&&p.data().getQnFile(B,M),document.getElementById("testTypeAnswer").style.display="none",Hc(),document.getElementById("questionBlock").insertAdjacentHTML("beforeend",'<button id="onAnsweredBtn">Answered</button>'),document.getElementById("onAnsweredBtn").addEventListener("click",Wn),p.data().pickedGame.answerType=="Text"&&Array.from(document.getElementsByClassName("answersTest")).length<1?document.getElementById("answerInp").style.display="block":document.getElementById("answerInp").style.display="none",Ve=setTimeout(Wn,p.data().pickedGame.timeOnGiveAnswer*1e3),Array.from(document.getElementsByClassName("qustions"))[M].removeEventListener("click",this.onQuestion),Array.from(document.getElementsByClassName("qustions"))[M].getElementsByClassName("questionMark")[0]&&Array.from(document.getElementsByClassName("qustions"))[M].getElementsByClassName("questionMark")[0].remove()}}},nextRound:function(){for(clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),clearInterval(yn),B=p.data().pickedGame.gameLine.round,document.getElementById("showBlock").style.display="grid";document.getElementById("showBlock").firstElementChild;)document.getElementById("showBlock").firstElementChild.remove();if(p.data().pickedGame.pickedPack.rounds[B].categories!==void 0)for(let t=0;t<p.data().pickedGame.pickedPack.rounds[B].categories.length;t++)document.getElementById("showBlock").insertAdjacentHTML("beforeend",`<label>${p.data().pickedGame.pickedPack.rounds[B].categories[t]}<label>`);else for(let t=0;t<Array.from(document.getElementsByClassName("category")).length;t++)document.getElementById("showBlock").insertAdjacentHTML("beforeend",`<label>Category ${t+1}<label>`);setTimeout(()=>{for(document.getElementById("showBlock").style.display="none";document.getElementById("tableWithQuestions").firstElementChild;)document.getElementById("tableWithQuestions").firstElementChild.remove();this.showMain(),this.nextTurn()},3e3)},announceWinner:function(){let t;for(let e=0;e<p.data().pickedGame.players.length-1;e++)p.data().pickedGame.players[e].points>p.data().pickedGame.players[e+1].points?t=p.data().pickedGame.players[e].name:t=p.data().pickedGame.players[e+1].name;document.getElementById("announceWinnerBlock").style.display="grid",document.getElementsByTagName("form")[0].style.display="none",document.getElementById("winerIsPlayer").innerText=t},onAnswered:function(){if(clearTimeout(it),clearTimeout(Ve),clearInterval(Fe),clearInterval(yn),M!=null){if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers)if(Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M])){if(p.data().pickedGame.gameLine.turn.id!==p.data().uid)if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0){let e=Array.from(document.getElementsByClassName("answersTest")).find(n=>n.value==p.data().pickedGame.gameLine.answer.answer);e!==void 0&&(e.parentElement.style.background="#2185A6")}else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer;if(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0){let e=Array.from(document.getElementsByClassName("answersTest")).find(n=>n.value==p.data().pickedGame.pickedPack.rounds[B].answers[M]);e!==void 0&&(e.parentElement.style.background="#76C5EF")}else document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());p.data().pickedGame.host.id==p.data().uid&&p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length>0&&setTimeout(()=>{let e=p.data().pickedGame.gameLine.answer.answer===p.data().pickedGame.pickedPack.rounds[B].answers[M]?"Right":"Wrong";p.data().hostVoited(e)},3e3)}else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer,document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());else document.getElementById("answerLbl").innerText=p.data().pickedGame.gameLine.answer.answer,document.getElementById("rightAnswerLbl").innerText=p.data().pickedGame.pickedPack.rounds[B].answers[M],document.getElementsByClassName("fileMediaElement")[0]!==void 0&&document.getElementsByClassName("fileMediaElement")[0].tagName!=="IMG"&&(document.getElementsByClassName("fileMediaElement")[0].firstElementChild.remove(),document.getElementsByClassName("fileMediaElement")[0].remove());let t;p.data().pickedGame.pickedPack.rounds[B].wrongAnswers&&Array.isArray(p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M])?t=p.data().pickedGame.pickedPack.rounds[B].wrongAnswers[M].length<1:t=!0,(p.data().pickedGame.isHost=="Host"&&p.data().pickedGame.host.id==p.data().uid&&t||p.data().pickedGame.isHost=="NoHost"&&p.data().pickedGame.gameLine.turn.id!==p.data().uid&&t)&&document.getElementsByClassName("markAnswerBtns").length<1&&(document.getElementById("questionBlock").insertAdjacentHTML("beforeend",`
                            <div id="chooseRightOrWrongAnswer">
                            <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                            <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
                            </div>
                            `),Array.from(document.getElementsByClassName("markAnswerBtns")).forEach(e=>e.addEventListener("click",Jh)))}}}}},IC={id:"game"},kC=ju('<div id="showBlock"><label id="mainLbl"></label><label id="subMainLbl"></label></div><div id="gameBlock"><div id="headerOfGame"></div><div id="tableWithQuestions"></div><div id="questionBlock"><label id="questionLbl"></label><div id="mediaFile"></div><div id="testTypeAnswer"><form></form></div><label id="answerLbl"></label><input id="answerInp" type="text"><label id="rightAnswerLbl"></label></div><div id="playersBlock"></div></div>',2),TC={id:"pauseWindow"},AC=Re("label",null,"Game Paused",-1),RC=Re("img",{draggable:"false",src:EC,alt:"resume"},null,-1),SC=[RC],PC=Re("input",{id:"changePointsInp",type:"number"},null,-1),xC=Re("label",null,"Winner is",-1),NC=Re("label",{id:"winerIsPlayer"},null,-1),BC=[xC,NC];function MC(t,e,n,s,i,r){return mr(),Uu("div",IC,[kC,Re("div",TC,[AC,Re("button",{id:"resumeGameBtn",onClick:e[0]||(e[0]=o=>i.onResumeGame())},SC)]),Re("div",{id:"playerChangePointsBlock",onClick:e[4]||(e[4]=o=>i.closePointchangeWindow(o))},[Re("div",{id:"playerChangePoints",onClick:e[3]||(e[3]=o=>o.stopPropagation())},[Re("button",{onClick:e[1]||(e[1]=o=>i.onChangePointsInpBtns(o))},"+"),PC,Re("button",{onClick:e[2]||(e[2]=o=>i.onChangePointsInpBtns(o))},"-")])]),Re("div",{id:"announceWinnerBlock",onClick:e[5]||(e[5]=o=>i.onFinishGameLeave())},BC)])}const ye=ia(bC,[["render",MC]]),LC=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),OC={apiKey:"API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",databaseURL:"https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"PROJECT_ID",storageBucket:"PROJECT_ID.appspot.com",messagingSenderId:"SENDER_ID",appId:"APP_ID",measurementId:"G-MEASUREMENT_ID",storageBucket:"gs://quiz-ef7f5.appspot.com"},ef=H_(OC),be=ja(ef),jn=z(ja()),Ae=ja(),Yt=gC(ef);Kt(Yt,"some-child");let ge,Wc=[],nt,qn,Xr=[],st,qe,Lt,A,mn,Vn,Ms=0,zn,Jr,jc=0;const p={components:{Game:ye},data(){return{firebaseLoaded:function(){jc++,jc>3&&KC.data().closeLoader()},setPackData:function(t){if(t.isGlobal){if(Vn||zn)do st=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,12));while(Object.keys(Object.assign(zn,Vn)).findIndex(n=>n==st)!==-1);else st=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,12));t.ID=st,le(z(be,`packs/${st}`),t)}else{if(Vn=localStorage.getItem("localPacks")?JSON.parse(localStorage.getItem("localPacks")):null,Vn||zn)do st=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,12));while(Object.keys(Object.assign(zn,Vn)).findIndex(s=>s==st)!==-1);else st=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,12));t.ID=st;let n={[st]:t};localStorage.setItem("localPacks",JSON.stringify(Object.assign(n,Vn)))}if(t.rounds){for(let n=0;n<t.rounds.length;n++)if(Array.from(t.rounds[n].mediaFiles).filter(i=>i!=="").length>0)for(let i=0;i<Array.from(t.rounds[n].mediaFiles).length;i++)Array.from(t.rounds[n].mediaFiles)[i].type!==void 0&&Gc(Kt(Yt,`packs/${st}/${n}/${i}`),Array.from(t.rounds[n].mediaFiles)[i]).then(r=>{})}let e=Array.isArray(JSON.parse(localStorage.getItem("likedPacks")))?JSON.parse(localStorage.getItem("likedPacks")):[];e.push(st),localStorage.setItem("likedPacks",JSON.stringify(e))},getQnFile:function(t,e){Yr(Kt(Yt,`packs/${A.pickedPack.ID}/${t}/${e}`)).then(n=>{$c(Kt(Yt,`packs/${A.pickedPack.ID}/${t}/${e}`)).then(s=>{switch(s.contentType.slice(0,5)){case"image":document.getElementById("mediaFile").insertAdjacentHTML("beforeend",`<img draggable="false" src="${n}" alt="file" class="fileMediaElement" importance="high" loading="eager">`);break;case"video":document.getElementById("mediaFile").insertAdjacentHTML("beforeend",`<video class="fileMediaElement" autoplay autobuffer preload="auto"><source src="${n}"></video>`);break;case"audio":document.getElementById("mediaFile").insertAdjacentHTML("beforeend",`<audio class="fileMediaElement" autoplay><source src="${n}"></audio>`);break}})})},getPacksData:async function(){Hn(At(jn,"packs/")).then(t=>{if(t.exists())return zn=t.val(),this.firebaseLoaded(),t.val();this.firebaseLoaded()})},authFirebase:async function(){localStorage.getItem("uid")===null?Hn(At(jn,"users/")).then(t=>{t.exists()&&(Wc=Object.keys(t.val()));do ge=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,12)),nt=`User${ge.toString().substring(0,4)}`;while(Wc.findIndex(e=>e==ge)!==-1);le(z(be,`users/${ge}`),{name:nt}).then(()=>{localStorage.setItem("uid",ge),localStorage.setItem("userName",nt),this.firebaseLoaded()})}).catch(t=>{console.error(t)}):(ge=localStorage.getItem("uid"),nt=localStorage.getItem("userName"),this.firebaseLoaded())},getUserAvatar:function(){Yr(Kt(Yt,`avatars/${ge}`)).then(t=>{$c(Kt(Yt,`avatars/${ge}`)).then(e=>{e.contentType.slice(0,5)=="image"&&document.getElementById("userMenuIcon")&&(document.getElementById("userMenuIcon")&&(document.getElementById("userMenuIcon").src=t),Jr=t),this.firebaseLoaded()})}).catch(t=>{switch(t.code){case"storage/object-not-found":Jr="./img/defaultIcon.png";break}this.firebaseLoaded()})},setUserAvatarL:function(t){Gc(Kt(Yt,`avatars/${ge}`),t).then(e=>{})},setUserName:function(t){nt=t,le(z(be,`users/${ge}`),{name:nt}).then(()=>{localStorage.setItem("userName",nt)})},createGame:function(t,e,n,s,i,r,o,a){if(localStorage.getItem("currentGame")!==void 0&&this.gameRooms[localStorage.getItem("currentGame")]!==void 0&&this.gameRooms[localStorage.getItem("currentGame")].players!==void 0)for(let l=0;l<Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players).length;l++)Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[l][1].id==ge&&(Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[l][1].inGame=!1,le(z(Ae,`rooms/${localStorage.getItem("currentGame")}/players/${l}`),{}));Hn(At(jn,"rooms/")).then(l=>{if(l.exists())Xr=Object.keys(l.val()),Xr.shift();else return qn=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,4))}).catch(l=>{console.error(l)});do qn=Number(String(Math.pow(10,4)*Math.random()).replace(".",0).slice(0,4));while(Xr.findIndex(l=>l==qn)!==-1);A={name:t,host:{id:ge,name:nt},answerType:e,toJoin:n,isHost:i,onWrongAnswer:r,pickedPack:s,ID:qn,started:!1,timeOnPickQuestion:o,timeOnGiveAnswer:a,gameLine:{turn:!1,pikedQuestion:!1,voiting:!1,answer:!1,finished:!1,wrongAnswer:!1,paused:!1,round:0},players:[{id:ge,name:nt,inGame:!0}]},ye.data().pickedGame=A,le(z(be,`rooms/${qn}`),A).then(()=>{localStorage.setItem("currentGame",qn),Lt=[],Lt.push({id:ge,name:nt,inGame:!0}),Oi.push("/game").then(()=>{ye.data().startGame()})})},getGameRooms:function(){Hn(At(jn,"rooms/")).then(t=>{if(t.exists()&&(qe=t.val(),delete qe.test),qe!==void 0)for(let e=0;e<Object.entries(qe).length;e++){let n=[];if(Object.entries(qe)[e][1].players!==void 0)for(let s=0;s<Object.entries(qe)[e][1].players.length;s++)Object.entries(qe)[e][1].players[s]!==null&&Object.entries(qe)[e][1].players[s]!==void 0&&Object.entries(qe)[e][1].players[s].inGame==!0&&n.push(Object.entries(qe)[e][1].players[s]);n.length<1&&le(z(Ae,`rooms/${Object.entries(qe)[e][0]}`),{})}this.firebaseLoaded()}).catch(t=>{this.firebaseLoaded(),console.error(t)})},joinGameRoom:function(t){if(localStorage.getItem("currentGame")!==void 0&&localStorage.getItem("currentGame")!==t&&this.gameRooms[localStorage.getItem("currentGame")]!==void 0&&this.gameRooms[localStorage.getItem("currentGame")].players!==void 0)for(let e=0;e<Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players).length;e++)Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[e][1].id==ge&&(Object.entries(this.gameRooms[localStorage.getItem("currentGame")].players)[e][1].inGame=!1,le(z(Ae,`rooms/${localStorage.getItem("currentGame")}/players/${e}`),{}));Hn(At(jn,`rooms/${t}/`)).then(e=>{e.exists()&&(A=e.val(),Lt=[],Lt=e.val().players)}).catch(e=>{console.error(e)}).then(()=>{let e=Lt.findIndex(n=>n.id==ge);e==-1?(Lt.push({id:ge,name:nt,inGame:!0}),le(z(be,`rooms/${t}/players`),Lt).then(()=>{Oi.push("/game").then(()=>{ye.data().startGame()})})):(Lt[e].inGame=!0,Oi.push("/game").then(()=>{ye.data().startGame()}))}).then(()=>{localStorage.setItem("currentGame",t);let e=Lt.findIndex(r=>r.id==ge);const n=z(Ae,`rooms/${t}/players/${e}/inGame`),s=z(Ae,`users/${ge}/lastOnline`),i=z(Ae,".info/connected");ut(i,r=>{r.val()===!0&&(Bc(n).remove(),le(n,!0),Bc(s).set(dw()))}),ge==A.host.id&&le(z(Ae,`rooms/${t}/gameLine/paused`),!1).then(()=>{})})},joinByCode:function(){Hn(At(jn,"rooms/")).then(t=>{t.exists()&&(qe=t.val())}).then(()=>{Object.keys(qe).findIndex(t=>t==document.getElementById("codeToJoinGameInp").value)!==-1&&this.joinGameRoom(document.getElementById("codeToJoinGameInp").value)})},leaveGame:function(){let t=A.players.filter(e=>e.inGame==!0);A.gameLine.finished===!0&&t.length<2?le(z(Ae,`rooms/${localStorage.getItem("currentGame")}`),null).then(()=>{ge==A.host.id,document.location.reload(),localStorage.setItem("currentGame",void 0)}):(ge==A.host.id?le(z(Ae,`rooms/${localStorage.getItem("currentGame")}/gameLine/paused`),!0).then(()=>{document.location.reload()}):document.location.reload(),localStorage.setItem("currentGame",void 0))},getRandomPlayer:function(){let t=[];for(let e=0;e<A.players.length;e++)A.players[e]!==null&&A.players[e]!==void 0&&A.players[e].inGame==!0&&t.push(A.players[e]);return t[Math.floor(Math.random()*t.length)].id},startGame:function(){mn=0,le(z(be,`rooms/${localStorage.getItem("currentGame")}/started`),!0)},nextTurn:function(){mn++,mn>A.players.length-1&&(A.isHost=="Host"?mn=1:mn=0),le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/turn`),A.players[mn]),le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/voiting`),!1)},informPickedQuestion:function(t){le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/pikedQuestion`),t)},informWrongAnswer:function(t){le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/wrongAnswer`),t)},updatePlayerPoints:function(){let t=A.players.findIndex(o=>o.id==A.gameLine.turn.id),e=Math.abs(A.gameLine.pikedQuestion-Math.floor(A.gameLine.pikedQuestion/Array.from(document.getElementsByClassName("points")).length)*Array.from(document.getElementsByClassName("points")).length),n=A.pickedPack.rounds[Ms].points[e];A.players[t].points||(A.players[t].points=0);let s=Object.values(A.gameLine.voiting).filter(o=>o==!0),i=Object.values(A.gameLine.voiting).filter(o=>o==!1),r=[];for(let o=0;o<A.players.length;o++)A.players[o]!==null&&A.players[o]!==void 0&&A.players[o].inGame==!0&&r.push(A.players[o]);Math.ceil(r.length/2)-1<s.length?(A.players[t].points+=n,ye.data().nextTurn()):Math.ceil(r.length/2)-1<i.length?(A.onWrongAnswer=="MinusPoints"&&(A.players[t].points-=n),ye.data().nextTurn()):r.length-1==Object.values(A.gameLine.voiting).length&&ye.data().nextTurn(),le(z(be,`rooms/${localStorage.getItem("currentGame")}/players`),this.pickedGame.players)},informVoiting:function(t){t=t=="Right",le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/voiting/${ge}`),t)},hostVoited:function(t){t=t=="Right";let e=[];for(let n=0;n<A.players.length;n++)A.players[n]!==null&&A.players[n]!==void 0&&A.players[n].inGame==!0&&e.push(A.players[n]);for(let n=0;n<e.length;n++)le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/voiting/${e[n].id}`),t)},updatePointsByHost:function(t,e){let n=A.players.filter(i=>i.inGame==!0),s=A.players.findIndex(i=>i==n[t]);le(z(be,`rooms/${localStorage.getItem("currentGame")}/players/${s}/points`),e)},nextRound:function(){Ms<A.pickedPack.rounds.length-1?(Ms++,le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/pikedQuestion`),!1),le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/round/`),Ms),ye.data().nextRound()):(le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/finished/`),!0),ye.data().announceWinner())},pauseGame:function(){le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/paused/`),!0)},resumeGame:function(){le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/paused/`),!1)},setGameDataListeners:function(){ut(z(Ae,`rooms/${A.ID}/players`),t=>{if(t.val()!==null){let e=A.players.filter(s=>s.inGame==!0),n=t.val().filter(s=>s.inGame==!0);if(e.length==n.length&&e.length!==1)A.players=t.val(),ye.data().updatePlayerPoints();else{A.players=t.val(),A.players.filter(r=>r.inGame==!1||r.inGame==null||r.inGame==null).findIndex(r=>r.id==A.gameLine.turn.id)!==-1&&this.nextTurn();let i=A.players.filter(r=>r.inGame==!0);for(let r=0;r<i.length;r++)Yr(Kt(Yt,`avatars/${i[r].id}`)).then(o=>{document.getElementsByClassName("playerAvatars")[r].src=o}).catch(o=>{switch(o.code){case"storage/object-not-found":document.getElementsByClassName("playerAvatars")[r].src="./img/defaultIcon.png";break}}),ye.data().showPlayers()}}}),ut(z(Ae,`rooms/${A.ID}/gameLine/turn`),t=>{t.val()!==null&&(A.gameLine.turn=t.val(),document.getElementById("questionBlock").style.display="none",document.getElementById("tableWithQuestions").style.display="grid",A.gameLine.turn&&ye.data().onQuestionPick())}),ut(z(Ae,`rooms/${A.ID}/gameLine/pikedQuestion`),t=>{t.val()!==null&&(A.gameLine.pikedQuestion=t.val(),(A.gameLine.pikedQuestion||A.gameLine.pikedQuestion===0)&&ye.data().onGetQuestion())}),ut(z(Ae,`rooms/${A.ID}/gameLine/voiting`),t=>{t.val()!==null&&(A.gameLine.voiting=t.val(),A.gameLine.voiting&&this.updatePlayerPoints())}),ut(z(Ae,`rooms/${A.ID}/started`),t=>{t.val()!==null&&(A.started=t.val(),A.started&&(mn=0,ye.data().showGameInfo()))}),ut(z(Ae,`rooms/${A.ID}/gameLine/answer/`),t=>{t.val()!==null&&(A.gameLine.answer=t.val(),ye.data().onAnswered())}),ut(z(Ae,`rooms/${A.ID}/gameLine/round/`),t=>{t.val()!==null&&t.val()!==A.gameLine.round&&(A.gameLine.round=t.val(),ye.data().nextRound())}),ut(z(Ae,`rooms/${A.ID}/gameLine/finished/`),t=>{t.val()!==null&&(A.gameLine.finished=t.val(),A.gameLine.finished&&ye.data().announceWinner())}),ut(z(Ae,`rooms/${A.ID}/gameLine/wrongAnswer`),t=>{t.val()!==null&&(A.gameLine.wrongAnswer=t.val(),ye.data().wrongAnswersAdd(A.gameLine.wrongAnswer))}),ut(z(Ae,`rooms/${A.ID}/gameLine/paused`),t=>{t.val()!==null&&(A.gameLine.paused=t.val(),ye.data().pauseGame())})},onAnswer:function(t="No Answer",e){le(z(be,`rooms/${localStorage.getItem("currentGame")}/gameLine/answer/`),{answer:t,turn:e})},pickedGame:A,gameRooms:qe,uid:ge,userName:nt,packs:zn,round:Ms,myIcon:Jr}}};const DC={data(){return{userName:p.data().userName,myIcon:p.data().myIcon,onUserName:function(t){let e=t.target.value;t.target.value=e.slice(0,12),p.data().setUserName(e.slice(0,12))},changeIcon:function(){document.getElementById("chooseAvatarInp").click()},onChangeIcon:function(t){t.target.files[0].type.slice(0,5)=="image"&&(p.data().setUserAvatarL(t.target.files[0]),document.getElementById("userMenuIcon").src=window.URL.createObjectURL(t.target.files[0]))}}},mounted(){document.getElementById("userMenuIcon").src||(p.data().myIcon?document.getElementById("userMenuIcon").src=p.data().myIcon:document.getElementById("userMenuIcon").src="img/defaultIcon.png")}},FC={id:"menu"},GC=ju('<div id="gameName" data-v-ad0cf499><svg width="87" height="98" viewBox="0 0 87 98" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ad0cf499><path d="M82.0208 80.8669L83.1986 79.2499L81.8792 77.7461L71.2033 65.5785C71.3668 64.0589 71.498 61.6763 71.5396 58.8335C71.5983 54.8211 71.4811 49.6458 70.9642 44.1205C70.4481 38.6024 69.5286 32.6812 67.9632 27.199C66.4056 21.7435 64.1619 16.5552 60.8983 12.643C54.3021 4.73583 47.2195 2.32363 40.9369 2.50989C34.8207 2.69122 29.7871 5.32802 27.1193 6.86688C23.5654 8.91691 18.1076 12.995 13.5773 18.1847C9.67393 22.6561 6.62571 27.977 4.67261 32.6371C2.39496 38.0717 1.69621 46.8007 3.60492 56.3383C5.52841 65.9497 10.143 76.6231 18.7919 85.936C25.9297 93.6217 33.6371 95.9164 40.4369 95.4402C46.395 95.0228 51.4796 92.4951 54.7487 89.9818L70.0802 94.4528L71.7666 94.9446L72.8008 93.5247L82.0208 80.8669ZM21.9578 41.2196C23.3823 34.814 27.0244 30.1921 30.921 27.0897C34.8041 23.9982 38.7457 22.5666 40.6676 22.3299C41.5097 22.344 42.5715 22.4951 43.5474 22.8117C44.6169 23.1587 45.2841 23.6059 45.5866 23.9876C46.7666 25.4766 47.7597 26.9759 49.5611 33.5222C50.9709 38.6455 52.5524 51.4288 53.1732 57.3197C53.4203 59.6642 53.2965 62.3929 51.7292 65.8019C51.3125 66.7085 50.2806 68.1341 48.9485 69.6427C47.6459 71.118 46.2692 72.4338 45.346 73.14C42.1679 75.5711 39.2154 75.6257 36.4113 74.3412C33.4073 72.9651 30.429 69.9563 27.9021 65.9788C23.4933 59.039 20.0152 49.9549 21.9578 41.2196Z" fill="#E17BB3" stroke="#145367" stroke-width="5" data-v-ad0cf499></path></svg><svg width="75" height="98" viewBox="0 0 75 98" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ad0cf499><path d="M35.7835 94.7552C35.7916 94.7553 35.7994 94.7554 35.8068 94.7555C35.8091 94.7556 35.8114 94.7558 35.8138 94.7559C35.8692 94.7589 35.9437 94.7624 36.0362 94.7655C36.2211 94.7716 36.4782 94.7759 36.7993 94.7715C37.4409 94.7625 38.3414 94.7181 39.4326 94.5801C41.611 94.3045 44.58 93.6521 47.774 92.1409C54.2593 89.0726 61.3765 82.5984 64.8119 69.3852L64.845 69.2578L64.8646 69.1277L72.3682 19.2135C73.3832 12.4618 68.1545 6.38827 61.3269 6.38828C55.4731 6.38828 50.6382 10.9262 50.173 16.7271C48.3557 39.3868 46.6777 53.749 45.0745 62.8337C44.0435 68.6759 39.8382 71.6596 35.7936 71.9296C31.8313 72.194 27.7571 69.8886 26.6439 64.1974C24.9141 55.3544 24.1749 40.403 25.7293 15.1077C26.1109 8.89804 21.4777 3.38497 15.1957 2.91218C9.09386 2.45296 3.66322 6.92546 3.26465 13.1473C2.54747 24.3429 1.83697 44.8595 4.36962 64.2968C6.33236 79.3602 14.1415 87.1052 21.6065 90.9745C25.2834 92.8803 28.821 93.8211 31.4346 94.288C32.745 94.5221 33.8342 94.639 34.6076 94.6975C34.9947 94.7267 35.3037 94.7414 35.523 94.7488C35.6326 94.7524 35.7199 94.7543 35.7835 94.7552Z" fill="#E17BB3" stroke="#145367" stroke-width="5" data-v-ad0cf499></path></svg><svg width="74" height="102" viewBox="0 0 74 102" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ad0cf499><path d="M12.2125 8.31622C6.10439 9.24439 1.90522 14.9484 2.83339 21.0565L2.86595 21.2707C3.77614 27.2605 9.36966 31.3783 15.3594 30.4681C18.6191 29.9728 21.6632 32.2138 22.1585 35.4734L27.2321 68.8615C27.7274 72.1212 25.4864 75.1652 22.2268 75.6606C16.237 76.5708 12.1192 82.1643 13.0294 88.1541L13.1325 88.8325C14.0996 95.197 20.043 99.5724 26.4075 98.6053L34.1029 97.4359L61.5604 93.2635C67.9249 92.2964 72.3003 86.353 71.3332 79.9885L71.0774 78.3052C70.2515 72.8704 65.1762 69.1341 59.7414 69.9599C57.0367 70.3709 54.5109 68.5115 54.0999 65.8068L48.721 30.409C48.31 27.7043 50.1694 25.1785 52.8741 24.7675C58.3089 23.9416 62.0452 18.8664 61.2193 13.4316L61.0341 12.2125C60.1059 6.10437 54.4019 1.90522 48.2938 2.83339L12.2125 8.31622Z" fill="#E17BB3" stroke="#145367" stroke-width="5" data-v-ad0cf499></path></svg><svg width="77" height="100" viewBox="0 0 77 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ad0cf499><path d="M10.4265 3.00331C5.68192 2.12252 1.66575 6.5365 2.98939 11.177L5.92478 21.4682C6.68089 24.119 9.02683 26.0047 11.7782 26.1731L35.7368 27.64C40.148 27.9101 42.4552 33.0093 39.7462 36.5011L6.17428 79.7737C0.833797 86.6573 5.71634 96.6753 14.4286 96.7099L65.4116 96.9123C70.1363 96.931 73.3019 92.0625 71.3679 87.7517L68.2809 80.8706C67.2915 78.6653 65.1601 77.1911 62.7476 77.0434L44.6398 75.9347C40.975 75.7103 39.107 71.428 41.4356 68.5892L71.683 31.7143C77.2322 24.9492 73.4935 14.7112 64.8906 13.1141L10.4265 3.00331Z" fill="#E17BB3" stroke="#145367" stroke-width="5" data-v-ad0cf499></path></svg></div>',1),$C={id:"meunNavPanel"},UC=mi("Join Game"),HC=mi("Create Game"),WC=mi("Find Pack"),jC=mi("Create Pack"),qC={id:"menuUserNickAva"},VC=["value"];function zC(t,e,n,s,i,r){const o=Pu("router-link");return mr(),Uu("div",FC,[GC,Re("div",$C,[Be(o,{class:"menuNavBtns",to:"/joinGame"},{default:Ds(()=>[UC]),_:1}),Be(o,{class:"menuNavBtns",to:"/createGame"},{default:Ds(()=>[HC]),_:1}),Be(o,{class:"menuNavBtns",to:"/findPack"},{default:Ds(()=>[WC]),_:1}),Be(o,{class:"menuNavBtns",to:"/createPack"},{default:Ds(()=>[jC]),_:1})]),Re("div",qC,[Re("img",{draggable:"false",id:"userMenuIcon",width:"48px",alt:"icon",onClick:e[0]||(e[0]=a=>i.changeIcon())}),Re("input",{type:"text",id:"inputUserNick",value:i.userName,onChange:e[1]||(e[1]=a=>i.onUserName(a))},null,40,VC),Re("input",{id:"chooseAvatarInp",type:"file",onInput:e[2]||(e[2]=a=>i.onChangeIcon(a))},null,32)])])}const QC=ia(DC,[["render",zC],["__scopeId","data-v-ad0cf499"]]),Oi=Sg({history:jp("/Quiz/"),routes:[{path:"/",name:"Menu",component:QC},{path:"/joinGame",name:"joinGame",component:()=>As(()=>import("./JoinGame.adf7485d.js"),["assets/JoinGame.adf7485d.js","assets/JoinGame.a4283b91.css"])},{path:"/createGame",name:"createGame",component:()=>As(()=>import("./CreateGame.bdf22534.js"),["assets/CreateGame.bdf22534.js","assets/CreateGame.2208dd19.css","assets/Packs.79f888f4.js","assets/Packs.aa51de9c.css"])},{path:"/findPack",name:"findPack",component:()=>As(()=>import("./FindPack.79a18dab.js"),["assets/FindPack.79a18dab.js","assets/FindPack.bf8ad95e.css","assets/Packs.79f888f4.js","assets/Packs.aa51de9c.css"])},{path:"/createPack",name:"createPack",component:()=>As(()=>import("./CreatePack.01bb4070.js"),["assets/CreatePack.01bb4070.js","assets/CreatePack.c2ea2f8a.css"])},{path:"/game",name:"game",component:()=>As(()=>Promise.resolve().then(()=>LC),void 0)}]});const tf=Cp(Tp);tf.use(Oi);tf.mount("#app");Array.prototype.findLastIndex=function(t){let e=this.slice();return e.length-e.reverse().findIndex(t)};document.querySelectorAll("img").forEach(t=>t.setAttribute("draggable",!1));document.getElementById("app").style.display="none";p.data().authFirebase();p.data().getPacksData();p.data().getGameRooms();p.data().getUserAvatar();const KC={data(){return{closeLoader:function(){document.getElementById("app").style.display="block",document.getElementById("loader").classList.add("closeLoader"),document.getElementById("loader").addEventListener("animationend",function(){document.getElementById("loader").style.display="none"})}}}};export{Ot as F,ia as _,Re as a,JC as b,Uu as c,ju as d,Be as e,p as f,XC as g,Hu as h,Oi as i,Uo as n,mr as o,Pu as r,YC as t,Ds as w};
