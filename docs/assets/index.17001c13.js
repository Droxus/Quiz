const hh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};hh();function Lr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dh=Lr(fh);function wc(t){return!!t||t===""}function Fr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ee(s)?gh(s):Fr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ee(t))return t;if(_e(t))return t}}const ph=/;(?![^(]*\))/g,_h=/:(.+)/;function gh(t){const e={};return t.split(ph).forEach(n=>{if(n){const s=n.split(_h);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Br(t){let e="";if(Ee(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Br(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ov=t=>Ee(t)?t:t==null?"":U(t)||_e(t)&&(t.toString===Rc||!W(t.toString))?JSON.stringify(t,Ic,2):String(t),Ic=(t,e)=>e&&e.__v_isRef?Ic(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Tc(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!U(e)&&!Nc(e)?String(e):e,le={},fn=[],ze=()=>{},mh=()=>!1,yh=/^on[^a-z]/,fi=t=>yh.test(t),Ur=t=>t.startsWith("onUpdate:"),Se=Object.assign,Hr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vh=Object.prototype.hasOwnProperty,K=(t,e)=>vh.call(t,e),U=Array.isArray,dn=t=>di(t)==="[object Map]",Tc=t=>di(t)==="[object Set]",W=t=>typeof t=="function",Ee=t=>typeof t=="string",Wr=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Sc=t=>_e(t)&&W(t.then)&&W(t.catch),Rc=Object.prototype.toString,di=t=>Rc.call(t),Eh=t=>di(t).slice(8,-1),Nc=t=>di(t)==="[object Object]",$r=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ch=/-(\w)/g,it=pi(t=>t.replace(Ch,(e,n)=>n?n.toUpperCase():"")),bh=/\B([A-Z])/g,Nn=pi(t=>t.replace(bh,"-$1").toLowerCase()),_i=pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oi=pi(t=>t?`on${_i(t)}`:""),es=(t,e)=>!Object.is(t,e),Mi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $o;const Ih=()=>$o||($o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let et;class Th{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&et&&(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Sh(t,e=et){e&&e.active&&e.effects.push(t)}const jr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xc=t=>(t.w&At)>0,Pc=t=>(t.n&At)>0,Rh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},Nh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];xc(i)&&!Pc(i)?i.delete(t):e[n++]=i,i.w&=~At,i.n&=~At}e.length=n}},er=new WeakMap;let jn=0,At=1;const tr=30;let We;const jt=Symbol(""),nr=Symbol("");class Vr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sh(this,s)}run(){if(!this.active)return this.fn();let e=We,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=We,We=this,Tt=!0,At=1<<++jn,jn<=tr?Rh(this):jo(this),this.fn()}finally{jn<=tr&&Nh(this),At=1<<--jn,We=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(jo(this),this.onStop&&this.onStop(),this.active=!1)}}function jo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const Ac=[];function xn(){Ac.push(Tt),Tt=!1}function Pn(){const t=Ac.pop();Tt=t===void 0?!0:t}function ke(t,e,n){if(Tt&&We){let s=er.get(t);s||er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=jr()),Oc(i)}}function Oc(t,e){let n=!1;jn<=tr?Pc(t)||(t.n|=At,n=!xc(t)):n=!t.has(We),n&&(t.add(We),We.deps.push(t))}function ft(t,e,n,s,i,r){const o=er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,a)=>{(a==="length"||a>=s)&&l.push(c)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?$r(n)&&l.push(o.get("length")):(l.push(o.get(jt)),dn(t)&&l.push(o.get(nr)));break;case"delete":U(t)||(l.push(o.get(jt)),dn(t)&&l.push(o.get(nr)));break;case"set":dn(t)&&l.push(o.get(jt));break}if(l.length===1)l[0]&&sr(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);sr(jr(c))}}function sr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Vo(s);for(const s of n)s.computed||Vo(s)}function Vo(t,e){(t!==We||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const xh=Lr("__proto__,__v_isRef,__isVue"),Mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wr)),Ph=qr(),Ah=qr(!1,!0),Oh=qr(!0),qo=Mh();function Mh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)ke(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xn();const s=Q(this)[e].apply(this,n);return Pn(),s}}),t}function qr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Yh:Bc:e?Fc:Lc).get(s))return s;const o=U(s);if(!t&&o&&K(qo,i))return Reflect.get(qo,i,r);const l=Reflect.get(s,i,r);return(Wr(i)?Mc.has(i):xh(i))||(t||ke(s,"get",i),e)?l:we(l)?o&&$r(i)?l:l.value:_e(l)?t?Uc(l):Es(l):l}}const Dh=Dc(),kh=Dc(!0);function Dc(t=!1){return function(n,s,i,r){let o=n[s];if(ts(o)&&we(o)&&!we(i))return!1;if(!t&&!ts(i)&&(ir(i)||(i=Q(i),o=Q(o)),!U(n)&&we(o)&&!we(i)))return o.value=i,!0;const l=U(n)&&$r(s)?Number(s)<n.length:K(n,s),c=Reflect.set(n,s,i,r);return n===Q(r)&&(l?es(i,o)&&ft(n,"set",s,i):ft(n,"add",s,i)),c}}function Lh(t,e){const n=K(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function Fh(t,e){const n=Reflect.has(t,e);return(!Wr(e)||!Mc.has(e))&&ke(t,"has",e),n}function Bh(t){return ke(t,"iterate",U(t)?"length":jt),Reflect.ownKeys(t)}const kc={get:Ph,set:Dh,deleteProperty:Lh,has:Fh,ownKeys:Bh},Uh={get:Oh,set(t,e){return!0},deleteProperty(t,e){return!0}},Hh=Se({},kc,{get:Ah,set:kh}),zr=t=>t,gi=t=>Reflect.getPrototypeOf(t);function xs(t,e,n=!1,s=!1){t=t.__v_raw;const i=Q(t),r=Q(e);n||(e!==r&&ke(i,"get",e),ke(i,"get",r));const{has:o}=gi(i),l=s?zr:n?Yr:ns;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ps(t,e=!1){const n=this.__v_raw,s=Q(n),i=Q(t);return e||(t!==i&&ke(s,"has",t),ke(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function As(t,e=!1){return t=t.__v_raw,!e&&ke(Q(t),"iterate",jt),Reflect.get(t,"size",t)}function zo(t){t=Q(t);const e=Q(this);return gi(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function Ko(t,e){e=Q(e);const n=Q(this),{has:s,get:i}=gi(n);let r=s.call(n,t);r||(t=Q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?es(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Go(t){const e=Q(this),{has:n,get:s}=gi(e);let i=n.call(e,t);i||(t=Q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function Yo(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Os(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Q(o),c=e?zr:t?Yr:ns;return!t&&ke(l,"iterate",jt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ms(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?zr:e?Yr:ns;return!e&&ke(r,"iterate",c?nr:jt),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function Wh(){const t={get(r){return xs(this,r)},get size(){return As(this)},has:Ps,add:zo,set:Ko,delete:Go,clear:Yo,forEach:Os(!1,!1)},e={get(r){return xs(this,r,!1,!0)},get size(){return As(this)},has:Ps,add:zo,set:Ko,delete:Go,clear:Yo,forEach:Os(!1,!0)},n={get(r){return xs(this,r,!0)},get size(){return As(this,!0)},has(r){return Ps.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Os(!0,!1)},s={get(r){return xs(this,r,!0,!0)},get size(){return As(this,!0)},has(r){return Ps.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ms(r,!1,!1),n[r]=Ms(r,!0,!1),e[r]=Ms(r,!1,!0),s[r]=Ms(r,!0,!0)}),[t,n,e,s]}const[$h,jh,Vh,qh]=Wh();function Kr(t,e){const n=e?t?qh:Vh:t?jh:$h;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const zh={get:Kr(!1,!1)},Kh={get:Kr(!1,!0)},Gh={get:Kr(!0,!1)},Lc=new WeakMap,Fc=new WeakMap,Bc=new WeakMap,Yh=new WeakMap;function Qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xh(t){return t.__v_skip||!Object.isExtensible(t)?0:Qh(Eh(t))}function Es(t){return ts(t)?t:Gr(t,!1,kc,zh,Lc)}function Jh(t){return Gr(t,!1,Hh,Kh,Fc)}function Uc(t){return Gr(t,!0,Uh,Gh,Bc)}function Gr(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Xh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function pn(t){return ts(t)?pn(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function ir(t){return!!(t&&t.__v_isShallow)}function Hc(t){return pn(t)||ts(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Wc(t){return Vs(t,"__v_skip",!0),t}const ns=t=>_e(t)?Es(t):t,Yr=t=>_e(t)?Uc(t):t;function $c(t){Tt&&We&&(t=Q(t),Oc(t.dep||(t.dep=jr())))}function jc(t,e){t=Q(t),t.dep&&sr(t.dep)}function we(t){return!!(t&&t.__v_isRef===!0)}function Zh(t){return Vc(t,!1)}function ef(t){return Vc(t,!0)}function Vc(t,e){return we(t)?t:new tf(t,e)}class tf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:ns(e)}get value(){return $c(this),this._value}set value(e){e=this.__v_isShallow?e:Q(e),es(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ns(e),jc(this))}}function _n(t){return we(t)?t.value:t}const nf={get:(t,e,n)=>_n(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qc(t){return pn(t)?t:new Proxy(t,nf)}class sf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vr(e,()=>{this._dirty||(this._dirty=!0,jc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Q(this);return $c(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rf(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=ze):(s=t.get,i=t.set),new sf(s,i,r||!i,n)}function St(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){mi(r,e,n)}return i}function Ke(t,e,n,s){if(W(t)){const r=St(t,e,n,s);return r&&Sc(r)&&r.catch(o=>{mi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ke(t[r],e,n,s));return i}function mi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){St(c,null,10,[t,o,l]);return}}of(t,n,i,s)}function of(t,e,n,s=!0){console.error(t)}let qs=!1,rr=!1;const De=[];let at=0;const zn=[];let Vn=null,ln=0;const Kn=[];let bt=null,cn=0;const zc=Promise.resolve();let Qr=null,or=null;function Kc(t){const e=Qr||zc;return t?e.then(this?t.bind(this):t):e}function lf(t){let e=at+1,n=De.length;for(;e<n;){const s=e+n>>>1;ss(De[s])<t?e=s+1:n=s}return e}function Gc(t){(!De.length||!De.includes(t,qs&&t.allowRecurse?at+1:at))&&t!==or&&(t.id==null?De.push(t):De.splice(lf(t.id),0,t),Yc())}function Yc(){!qs&&!rr&&(rr=!0,Qr=zc.then(Jc))}function cf(t){const e=De.indexOf(t);e>at&&De.splice(e,1)}function Qc(t,e,n,s){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Yc()}function af(t){Qc(t,Vn,zn,ln)}function uf(t){Qc(t,bt,Kn,cn)}function yi(t,e=null){if(zn.length){for(or=e,Vn=[...new Set(zn)],zn.length=0,ln=0;ln<Vn.length;ln++)Vn[ln]();Vn=null,ln=0,or=null,yi(t,e)}}function Xc(t){if(yi(),Kn.length){const e=[...new Set(Kn)];if(Kn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,s)=>ss(n)-ss(s)),cn=0;cn<bt.length;cn++)bt[cn]();bt=null,cn=0}}const ss=t=>t.id==null?1/0:t.id;function Jc(t){rr=!1,qs=!0,yi(t),De.sort((n,s)=>ss(n)-ss(s));const e=ze;try{for(at=0;at<De.length;at++){const n=De[at];n&&n.active!==!1&&St(n,null,14)}}finally{at=0,De.length=0,Xc(),qs=!1,Qr=null,(De.length||zn.length||Kn.length)&&Jc(t)}}function hf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||le;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(wh))}let l,c=s[l=Oi(e)]||s[l=Oi(it(e))];!c&&r&&(c=s[l=Oi(Nn(e))]),c&&Ke(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ke(a,t,6,i)}}function Zc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const c=a=>{const u=Zc(a,e,!0);u&&(l=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Se(o,r),s.set(t,o),o)}function vi(t,e){return!t||!fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Nn(e))||K(t,e))}let st=null,ea=null;function zs(t){const e=st;return st=t,ea=t&&t.type.__scopeId||null,e}function qn(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&rl(-1);const r=zs(e),o=t(...i);return zs(r),s._d&&rl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Di(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:x}=t;let R,P;const F=zs(t);try{if(n.shapeFlag&4){const X=i||s;R=nt(u.call(X,X,h,r,_,f,m)),P=c}else{const X=e;R=nt(X.length>1?X(r,{attrs:c,slots:l,emit:a}):X(r,null)),P=e.props?c:ff(c)}}catch(X){Gn.length=0,mi(X,t,1),R=pe(is)}let z=R;if(P&&x!==!1){const X=Object.keys(P),{shapeFlag:Re}=z;X.length&&Re&7&&(o&&X.some(Ur)&&(P=df(P,o)),z=En(z,P))}return n.dirs&&(z=En(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),R=z,zs(F),R}const ff=t=>{let e;for(const n in t)(n==="class"||n==="style"||fi(n))&&((e||(e={}))[n]=t[n]);return e},df=(t,e)=>{const n={};for(const s in t)(!Ur(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Qo(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!vi(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Qo(s,o,a):!0:!!o;return!1}function Qo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!vi(n,r))return!0}return!1}function _f({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gf=t=>t.__isSuspense;function mf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):uf(t)}function Bs(t,e){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Ce||st;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const Xo={};function Us(t,e,n){return ta(t,e,n)}function ta(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=le){const l=Ce;let c,a=!1,u=!1;if(we(t)?(c=()=>t.value,a=ir(t)):pn(t)?(c=()=>t,s=!0):U(t)?(u=!0,a=t.some(P=>pn(P)||ir(P)),c=()=>t.map(P=>{if(we(P))return P.value;if(pn(P))return un(P);if(W(P))return St(P,l,2)})):W(t)?e?c=()=>St(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ke(t,l,3,[f])}:c=ze,e&&s){const P=c;c=()=>un(P())}let h,f=P=>{h=R.onStop=()=>{St(P,l,4)}};if(os)return f=ze,e?n&&Ke(e,l,3,[c(),u?[]:void 0,f]):c(),ze;let _=u?[]:Xo;const m=()=>{if(!!R.active)if(e){const P=R.run();(s||a||(u?P.some((F,z)=>es(F,_[z])):es(P,_)))&&(h&&h(),Ke(e,l,3,[P,_===Xo?void 0:_,f]),_=P)}else R.run()};m.allowRecurse=!!e;let x;i==="sync"?x=m:i==="post"?x=()=>Ne(m,l&&l.suspense):x=()=>af(m);const R=new Vr(c,x);return e?n?m():_=R.run():i==="post"?Ne(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Hr(l.scope.effects,R)}}function yf(t,e,n){const s=this.proxy,i=Ee(t)?t.includes(".")?na(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ce;Cn(this);const l=ta(i,r.bind(s),n);return o?Cn(o):Vt(),l}function na(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function un(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))un(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)un(t[n],e);else if(Tc(t)||dn(t))t.forEach(n=>{un(n,e)});else if(Nc(t))for(const n in t)un(t[n],e);return t}function sa(t){return W(t)?{setup:t,name:t.name}:t}const Hs=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function vf(t,e){ra(t,"a",e)}function Ef(t,e){ra(t,"da",e)}function ra(t,e,n=Ce){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ei(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ia(i.parent.vnode)&&Cf(s,e,n,i),i=i.parent}}function Cf(t,e,n,s){const i=Ei(e,t,s,!0);oa(()=>{Hr(s[e],i)},n)}function Ei(t,e,n=Ce,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xn(),Cn(n);const l=Ke(e,n,t,o);return Vt(),Pn(),l});return s?i.unshift(r):i.push(r),r}}const pt=t=>(e,n=Ce)=>(!os||t==="sp")&&Ei(t,e,n),bf=pt("bm"),wf=pt("m"),If=pt("bu"),Tf=pt("u"),Sf=pt("bum"),oa=pt("um"),Rf=pt("sp"),Nf=pt("rtg"),xf=pt("rtc");function Pf(t,e=Ce){Ei("ec",t,e)}function kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(xn(),Ke(c,n,8,[t.el,l,t,e]),Pn())}}const la="components";function lr(t,e){return Of(la,t,!0,e)||t}const Af=Symbol();function Of(t,e,n=!0,s=!1){const i=st||Ce;if(i){const r=i.type;if(t===la){const l=ld(r,!1);if(l&&(l===e||l===it(e)||l===_i(it(e))))return r}const o=Jo(i[t]||r[t],e)||Jo(i.appContext[t],e);return!o&&s?r:o}}function Jo(t,e){return t&&(t[e]||t[it(e)]||t[_i(it(e))])}function Mv(t,e,n,s){let i;const r=n&&n[s];if(U(t)||Ee(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const cr=t=>t?Ca(t)?eo(t)||t.proxy:cr(t.parent):null,Ks=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cr(t.parent),$root:t=>cr(t.root),$emit:t=>t.emit,$options:t=>aa(t),$forceUpdate:t=>t.f||(t.f=()=>Gc(t.update)),$nextTick:t=>t.n||(t.n=Kc.bind(t.proxy)),$watch:t=>yf.bind(t)}),Mf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==le&&K(s,e))return o[e]=1,s[e];if(i!==le&&K(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&K(a,e))return o[e]=3,r[e];if(n!==le&&K(n,e))return o[e]=4,n[e];ar&&(o[e]=0)}}const u=Ks[e];let h,f;if(u)return e==="$attrs"&&ke(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==le&&K(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==le&&K(i,e)?(i[e]=n,!0):s!==le&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==le&&K(t,o)||e!==le&&K(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(Ks,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ar=!0;function Df(t){const e=aa(t),n=t.proxy,s=t.ctx;ar=!1,e.beforeCreate&&Zo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:x,deactivated:R,beforeDestroy:P,beforeUnmount:F,destroyed:z,unmounted:X,render:Re,renderTracked:Ae,renderTriggered:rt,errorCaptured:Jt,serverPrefetch:Qe,expose:gt,inheritAttrs:ot,components:Ue,directives:Zt,filters:en}=e;if(a&&kf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];W(J)&&(s[ie]=J.bind(n))}if(i){const ie=i.call(n,n);_e(ie)&&(t.data=Es(ie))}if(ar=!0,r)for(const ie in r){const J=r[ie],Oe=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):ze,nn=!W(J)&&W(J.set)?J.set.bind(n):ze,lt=Be({get:Oe,set:nn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Xe=>lt.value=Xe})}if(l)for(const ie in l)ca(l[ie],s,n,ie);if(c){const ie=W(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(J=>{Bs(J,ie[J])})}u&&Zo(u,t,"c");function fe(ie,J){U(J)?J.forEach(Oe=>ie(Oe.bind(n))):J&&ie(J.bind(n))}if(fe(bf,h),fe(wf,f),fe(If,_),fe(Tf,m),fe(vf,x),fe(Ef,R),fe(Pf,Jt),fe(xf,Ae),fe(Nf,rt),fe(Sf,F),fe(oa,X),fe(Rf,Qe),U(gt))if(gt.length){const ie=t.exposed||(t.exposed={});gt.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:Oe=>n[J]=Oe})})}else t.exposed||(t.exposed={});Re&&t.render===ze&&(t.render=Re),ot!=null&&(t.inheritAttrs=ot),Ue&&(t.components=Ue),Zt&&(t.directives=Zt)}function kf(t,e,n=ze,s=!1){U(t)&&(t=ur(t));for(const i in t){const r=t[i];let o;_e(r)?"default"in r?o=Rt(r.from||i,r.default,!0):o=Rt(r.from||i):o=Rt(r),we(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Zo(t,e,n){Ke(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ca(t,e,n,s){const i=s.includes(".")?na(n,s):()=>n[s];if(Ee(t)){const r=e[t];W(r)&&Us(i,r)}else if(W(t))Us(i,t.bind(n));else if(_e(t))if(U(t))t.forEach(r=>ca(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Us(i,r,t)}}function aa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Gs(c,a,o,!0)),Gs(c,e,o)),r.set(e,c),c}function Gs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Gs(t,r,n,!0),i&&i.forEach(o=>Gs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Lf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Lf={data:el,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ft,directives:Ft,watch:Bf,provide:el,inject:Ff};function el(t,e){return e?t?function(){return Se(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Ff(t,e){return Ft(ur(t),ur(e))}function ur(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?Se(Se(Object.create(null),t),e):e}function Bf(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=Ie(t[s],e[s]);return n}function Uf(t,e,n,s=!1){const i={},r={};Vs(r,Ci,1),t.propsDefaults=Object.create(null),ua(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Hf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(vi(t.emitsOptions,f))continue;const _=e[f];if(c)if(K(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=it(f);i[m]=hr(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{ua(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!K(e,h)&&((u=Nn(h))===h||!K(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=hr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!K(e,h)&&!0)&&(delete r[h],a=!0)}a&&ft(t,"set","$attrs")}function ua(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Fs(c))continue;const a=e[c];let u;i&&K(i,u=it(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:vi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Q(n),a=l||le;for(let u=0;u<r.length;u++){const h=r[u];n[h]=hr(i,c,h,a[h],t,!K(a,h))}}return o}function hr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(Cn(i),s=a[n]=c.call(null,e),Vt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}function ha(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!W(t)){const u=h=>{c=!0;const[f,_]=ha(h,e,!0);Se(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,fn),fn;if(U(r))for(let u=0;u<r.length;u++){const h=it(r[u]);tl(h)&&(o[h]=le)}else if(r)for(const u in r){const h=it(u);if(tl(h)){const f=r[u],_=o[h]=U(f)||W(f)?{type:f}:f;if(_){const m=il(Boolean,_.type),x=il(String,_.type);_[0]=m>-1,_[1]=x<0||m<x,(m>-1||K(_,"default"))&&l.push(h)}}}const a=[o,l];return s.set(t,a),a}function tl(t){return t[0]!=="$"}function nl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sl(t,e){return nl(t)===nl(e)}function il(t,e){return U(e)?e.findIndex(n=>sl(n,t)):W(e)&&sl(e,t)?0:-1}const fa=t=>t[0]==="_"||t==="$stable",Xr=t=>U(t)?t.map(nt):[nt(t)],Wf=(t,e,n)=>{if(e._n)return e;const s=qn((...i)=>Xr(e(...i)),n);return s._c=!1,s},da=(t,e,n)=>{const s=t._ctx;for(const i in t){if(fa(i))continue;const r=t[i];if(W(r))e[i]=Wf(i,r,s);else if(r!=null){const o=Xr(r);e[i]=()=>o}}},pa=(t,e)=>{const n=Xr(e);t.slots.default=()=>n},$f=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Vs(e,"_",n)):da(e,t.slots={})}else t.slots={},e&&pa(t,e);Vs(t.slots,Ci,1)},jf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Se(i,e),!n&&l===1&&delete i._):(r=!e.$stable,da(e,i)),o=e}else e&&(pa(t,e),o={default:1});if(r)for(const l in i)!fa(l)&&!(l in o)&&delete i[l]};function _a(){return{app:null,config:{isNativeTag:mh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function qf(t,e){return function(s,i=null){W(s)||(s=Object.assign({},s)),i!=null&&!_e(i)&&(i=null);const r=_a(),o=new Set;let l=!1;const c=r.app={_uid:Vf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ad,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(c,...u)):W(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=pe(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,eo(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function fr(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>fr(f,e&&(U(e)?e[_]:e),n,s,i));return}if(Hs(s)&&!i)return;const r=s.shapeFlag&4?eo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===le?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(Ee(a)?(u[a]=null,K(h,a)&&(h[a]=null)):we(a)&&(a.value=null)),W(c))St(c,l,12,[o,u]);else{const f=Ee(c),_=we(c);if(f||_){const m=()=>{if(t.f){const x=f?u[c]:c.value;i?U(x)&&Hr(x,r):U(x)?x.includes(r)||x.push(r):f?(u[c]=[r],K(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,K(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ne(m,n)):m()}}}const Ne=mf;function zf(t){return Kf(t)}function Kf(t,e){const n=Ih();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=ze,cloneNode:m,insertStaticContent:x}=t,R=(d,p,g,E=null,v=null,w=null,N=!1,b=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Fn(d,p)&&(E=M(d),Fe(d,v,w,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:D,shapeFlag:A}=p;switch(C){case Jr:P(d,p,g,E);break;case is:F(d,p,g,E);break;case Ws:d==null&&z(p,g,E,N);break;case tt:Zt(d,p,g,E,v,w,N,b,T);break;default:A&1?Ae(d,p,g,E,v,w,N,b,T):A&6?en(d,p,g,E,v,w,N,b,T):(A&64||A&128)&&C.process(d,p,g,E,v,w,N,b,T,re)}D!=null&&v&&fr(D,d&&d.ref,w,p||d,!p)},P=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&a(v,p.children)}},F=(d,p,g,E)=>{d==null?s(p.el=c(p.children||""),g,E):p.el=d.el},z=(d,p,g,E)=>{[d.el,d.anchor]=x(d.children,p,g,E,d.el,d.anchor)},X=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,E),d=v;s(p,g,E)},Re=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Ae=(d,p,g,E,v,w,N,b,T)=>{N=N||p.type==="svg",d==null?rt(p,g,E,v,w,N,b,T):gt(d,p,v,w,N,b,T)},rt=(d,p,g,E,v,w,N,b)=>{let T,C;const{type:D,props:A,shapeFlag:k,transition:B,patchFlag:G,dirs:ee}=d;if(d.el&&m!==void 0&&G===-1)T=d.el=m(d.el);else{if(T=d.el=o(d.type,w,A&&A.is,A),k&8?u(T,d.children):k&16&&Qe(d.children,T,null,E,v,w&&D!=="foreignObject",N,b),ee&&kt(d,null,E,"created"),A){for(const ae in A)ae!=="value"&&!Fs(ae)&&r(T,ae,null,A[ae],w,d.children,E,v,S);"value"in A&&r(T,"value",null,A.value),(C=A.onVnodeBeforeMount)&&Ze(C,E,d)}Jt(T,d,d.scopeId,N,E)}ee&&kt(d,null,E,"beforeMount");const te=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;te&&B.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||te||ee)&&Ne(()=>{C&&Ze(C,E,d),te&&B.enter(T),ee&&kt(d,null,E,"mounted")},v)},Jt=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let w=0;w<E.length;w++)_(d,E[w]);if(v){let w=v.subTree;if(p===w){const N=v.vnode;Jt(d,N,N.scopeId,N.slotScopeIds,v.parent)}}},Qe=(d,p,g,E,v,w,N,b,T=0)=>{for(let C=T;C<d.length;C++){const D=d[C]=b?wt(d[C]):nt(d[C]);R(null,D,p,g,E,v,w,N,b)}},gt=(d,p,g,E,v,w,N)=>{const b=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:D}=p;T|=d.patchFlag&16;const A=d.props||le,k=p.props||le;let B;g&&Lt(g,!1),(B=k.onVnodeBeforeUpdate)&&Ze(B,g,p,d),D&&kt(p,d,g,"beforeUpdate"),g&&Lt(g,!0);const G=v&&p.type!=="foreignObject";if(C?ot(d.dynamicChildren,C,b,g,E,G,w):N||Oe(d,p,b,null,g,E,G,w,!1),T>0){if(T&16)Ue(b,p,A,k,g,E,v);else if(T&2&&A.class!==k.class&&r(b,"class",null,k.class,v),T&4&&r(b,"style",A.style,k.style,v),T&8){const ee=p.dynamicProps;for(let te=0;te<ee.length;te++){const ae=ee[te],He=A[ae],sn=k[ae];(sn!==He||ae==="value")&&r(b,ae,He,sn,v,d.children,g,E,S)}}T&1&&d.children!==p.children&&u(b,p.children)}else!N&&C==null&&Ue(b,p,A,k,g,E,v);((B=k.onVnodeUpdated)||D)&&Ne(()=>{B&&Ze(B,g,p,d),D&&kt(p,d,g,"updated")},E)},ot=(d,p,g,E,v,w,N)=>{for(let b=0;b<p.length;b++){const T=d[b],C=p[b],D=T.el&&(T.type===tt||!Fn(T,C)||T.shapeFlag&70)?h(T.el):g;R(T,C,D,null,E,v,w,N,!0)}},Ue=(d,p,g,E,v,w,N)=>{if(g!==E){for(const b in E){if(Fs(b))continue;const T=E[b],C=g[b];T!==C&&b!=="value"&&r(d,b,C,T,N,p.children,v,w,S)}if(g!==le)for(const b in g)!Fs(b)&&!(b in E)&&r(d,b,g[b],null,N,p.children,v,w,S);"value"in E&&r(d,"value",g.value,E.value)}},Zt=(d,p,g,E,v,w,N,b,T)=>{const C=p.el=d?d.el:l(""),D=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:k,slotScopeIds:B}=p;B&&(b=b?b.concat(B):B),d==null?(s(C,g,E),s(D,g,E),Qe(p.children,g,D,v,w,N,b,T)):A>0&&A&64&&k&&d.dynamicChildren?(ot(d.dynamicChildren,k,g,v,w,N,b),(p.key!=null||v&&p===v.subTree)&&ga(d,p,!0)):Oe(d,p,g,D,v,w,N,b,T)},en=(d,p,g,E,v,w,N,b,T)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,N,T):tn(p,g,E,v,w,N,T):fe(d,p,T)},tn=(d,p,g,E,v,w,N)=>{const b=d.component=nd(d,E,v);if(ia(d)&&(b.ctx.renderer=re),sd(b),b.asyncDep){if(v&&v.registerDep(b,ie),!d.el){const T=b.subTree=pe(is);F(null,T,p,g)}return}ie(b,d,p,g,v,w,N)},fe=(d,p,g)=>{const E=p.component=d.component;if(pf(d,p,g))if(E.asyncDep&&!E.asyncResolved){J(E,p,g);return}else E.next=p,cf(E.update),E.update();else p.el=d.el,E.vnode=p},ie=(d,p,g,E,v,w,N)=>{const b=()=>{if(d.isMounted){let{next:D,bu:A,u:k,parent:B,vnode:G}=d,ee=D,te;Lt(d,!1),D?(D.el=G.el,J(d,D,N)):D=G,A&&Mi(A),(te=D.props&&D.props.onVnodeBeforeUpdate)&&Ze(te,B,D,G),Lt(d,!0);const ae=Di(d),He=d.subTree;d.subTree=ae,R(He,ae,h(He.el),M(He),d,v,w),D.el=ae.el,ee===null&&_f(d,ae.el),k&&Ne(k,v),(te=D.props&&D.props.onVnodeUpdated)&&Ne(()=>Ze(te,B,D,G),v)}else{let D;const{el:A,props:k}=p,{bm:B,m:G,parent:ee}=d,te=Hs(p);if(Lt(d,!1),B&&Mi(B),!te&&(D=k&&k.onVnodeBeforeMount)&&Ze(D,ee,p),Lt(d,!0),A&&H){const ae=()=>{d.subTree=Di(d),H(A,d.subTree,d,v,null)};te?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ae()):ae()}else{const ae=d.subTree=Di(d);R(null,ae,g,E,d,v,w),p.el=ae.el}if(G&&Ne(G,v),!te&&(D=k&&k.onVnodeMounted)){const ae=p;Ne(()=>Ze(D,ee,ae),v)}(p.shapeFlag&256||ee&&Hs(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Ne(d.a,v),d.isMounted=!0,p=g=E=null}},T=d.effect=new Vr(b,()=>Gc(C),d.scope),C=d.update=()=>T.run();C.id=d.uid,Lt(d,!0),C()},J=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Hf(d,p.props,E,g),jf(d,p.children,g),xn(),yi(void 0,d.update),Pn()},Oe=(d,p,g,E,v,w,N,b,T=!1)=>{const C=d&&d.children,D=d?d.shapeFlag:0,A=p.children,{patchFlag:k,shapeFlag:B}=p;if(k>0){if(k&128){lt(C,A,g,E,v,w,N,b,T);return}else if(k&256){nn(C,A,g,E,v,w,N,b,T);return}}B&8?(D&16&&S(C,v,w),A!==C&&u(g,A)):D&16?B&16?lt(C,A,g,E,v,w,N,b,T):S(C,v,w,!0):(D&8&&u(g,""),B&16&&Qe(A,g,E,v,w,N,b,T))},nn=(d,p,g,E,v,w,N,b,T)=>{d=d||fn,p=p||fn;const C=d.length,D=p.length,A=Math.min(C,D);let k;for(k=0;k<A;k++){const B=p[k]=T?wt(p[k]):nt(p[k]);R(d[k],B,g,null,v,w,N,b,T)}C>D?S(d,v,w,!0,!1,A):Qe(p,g,E,v,w,N,b,T,A)},lt=(d,p,g,E,v,w,N,b,T)=>{let C=0;const D=p.length;let A=d.length-1,k=D-1;for(;C<=A&&C<=k;){const B=d[C],G=p[C]=T?wt(p[C]):nt(p[C]);if(Fn(B,G))R(B,G,g,null,v,w,N,b,T);else break;C++}for(;C<=A&&C<=k;){const B=d[A],G=p[k]=T?wt(p[k]):nt(p[k]);if(Fn(B,G))R(B,G,g,null,v,w,N,b,T);else break;A--,k--}if(C>A){if(C<=k){const B=k+1,G=B<D?p[B].el:E;for(;C<=k;)R(null,p[C]=T?wt(p[C]):nt(p[C]),g,G,v,w,N,b,T),C++}}else if(C>k)for(;C<=A;)Fe(d[C],v,w,!0),C++;else{const B=C,G=C,ee=new Map;for(C=G;C<=k;C++){const Me=p[C]=T?wt(p[C]):nt(p[C]);Me.key!=null&&ee.set(Me.key,C)}let te,ae=0;const He=k-G+1;let sn=!1,Uo=0;const Ln=new Array(He);for(C=0;C<He;C++)Ln[C]=0;for(C=B;C<=A;C++){const Me=d[C];if(ae>=He){Fe(Me,v,w,!0);continue}let Je;if(Me.key!=null)Je=ee.get(Me.key);else for(te=G;te<=k;te++)if(Ln[te-G]===0&&Fn(Me,p[te])){Je=te;break}Je===void 0?Fe(Me,v,w,!0):(Ln[Je-G]=C+1,Je>=Uo?Uo=Je:sn=!0,R(Me,p[Je],g,null,v,w,N,b,T),ae++)}const Ho=sn?Gf(Ln):fn;for(te=Ho.length-1,C=He-1;C>=0;C--){const Me=G+C,Je=p[Me],Wo=Me+1<D?p[Me+1].el:E;Ln[C]===0?R(null,Je,g,Wo,v,w,N,b,T):sn&&(te<0||C!==Ho[te]?Xe(Je,g,Wo,2):te--)}}},Xe=(d,p,g,E,v=null)=>{const{el:w,type:N,transition:b,children:T,shapeFlag:C}=d;if(C&6){Xe(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){N.move(d,p,g,re);return}if(N===tt){s(w,p,g);for(let A=0;A<T.length;A++)Xe(T[A],p,g,E);s(d.anchor,p,g);return}if(N===Ws){X(d,p,g);return}if(E!==2&&C&1&&b)if(E===0)b.beforeEnter(w),s(w,p,g),Ne(()=>b.enter(w),v);else{const{leave:A,delayLeave:k,afterLeave:B}=b,G=()=>s(w,p,g),ee=()=>{A(w,()=>{G(),B&&B()})};k?k(w,G,ee):ee()}else s(w,p,g)},Fe=(d,p,g,E=!1,v=!1)=>{const{type:w,props:N,ref:b,children:T,dynamicChildren:C,shapeFlag:D,patchFlag:A,dirs:k}=d;if(b!=null&&fr(b,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const B=D&1&&k,G=!Hs(d);let ee;if(G&&(ee=N&&N.onVnodeBeforeUnmount)&&Ze(ee,p,d),D&6)O(d.component,g,E);else{if(D&128){d.suspense.unmount(g,E);return}B&&kt(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,v,re,E):C&&(w!==tt||A>0&&A&64)?S(C,p,g,!1,!0):(w===tt&&A&384||!v&&D&16)&&S(T,p,g),E&&kn(d)}(G&&(ee=N&&N.onVnodeUnmounted)||B)&&Ne(()=>{ee&&Ze(ee,p,d),B&&kt(d,null,p,"unmounted")},g)},kn=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===tt){y(g,E);return}if(p===Ws){Re(d);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:b}=v,T=()=>N(g,w);b?b(d.el,w,T):T()}else w()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},O=(d,p,g)=>{const{bum:E,scope:v,update:w,subTree:N,um:b}=d;E&&Mi(E),v.stop(),w&&(w.active=!1,Fe(N,d,p,g)),b&&Ne(b,p),Ne(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,g,E=!1,v=!1,w=0)=>{for(let N=w;N<d.length;N++)Fe(d[N],p,g,E,v)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Z=(d,p,g)=>{d==null?p._vnode&&Fe(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Xc(),p._vnode=d},re={p:R,um:Fe,m:Xe,r:kn,mt:tn,mc:Qe,pc:Oe,pbc:ot,n:M,o:t};let j,H;return e&&([j,H]=e(re)),{render:Z,hydrate:j,createApp:qf(Z,j)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ga(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),n||ga(o,l))}}function Gf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Yf=t=>t.__isTeleport,tt=Symbol(void 0),Jr=Symbol(void 0),is=Symbol(void 0),Ws=Symbol(void 0),Gn=[];let je=null;function ma(t=!1){Gn.push(je=t?null:[])}function Qf(){Gn.pop(),je=Gn[Gn.length-1]||null}let rs=1;function rl(t){rs+=t}function ya(t){return t.dynamicChildren=rs>0?je||fn:null,Qf(),rs>0&&je&&je.push(t),t}function va(t,e,n,s,i,r){return ya(ct(t,e,n,s,i,r,!0))}function Dv(t,e,n,s,i){return ya(pe(t,e,n,s,i,!0))}function dr(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const Ci="__vInternal",Ea=({key:t})=>t!=null?t:null,$s=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ee(t)||we(t)||W(t)?{i:st,r:t,k:e,f:!!n}:t:null;function ct(t,e=null,n=null,s=0,i=null,r=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ea(e),ref:e&&$s(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Zr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),rs>0&&!o&&je&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&je.push(c),c}const pe=Xf;function Xf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Af)&&(t=is),dr(t)){const l=En(t,e,!0);return n&&Zr(l,n),rs>0&&!r&&je&&(l.shapeFlag&6?je[je.indexOf(t)]=l:je.push(l)),l.patchFlag|=-2,l}if(cd(t)&&(t=t.__vccOpts),e){e=Jf(e);let{class:l,style:c}=e;l&&!Ee(l)&&(e.class=Br(l)),_e(c)&&(Hc(c)&&!U(c)&&(c=Se({},c)),e.style=Fr(c))}const o=Ee(t)?1:gf(t)?128:Yf(t)?64:_e(t)?4:W(t)?2:0;return ct(t,e,n,s,i,o,r,!0)}function Jf(t){return t?Hc(t)||Ci in t?Se({},t):t:null}function En(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Zf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ea(l),ref:e&&e.ref?n&&i?U(i)?i.concat($s(e)):[i,$s(e)]:$s(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor}}function Cs(t=" ",e=0){return pe(Jr,null,t,e)}function kv(t,e){const n=pe(Ws,null,t);return n.staticCount=e,n}function nt(t){return t==null||typeof t=="boolean"?pe(is):U(t)?pe(tt,null,t.slice()):typeof t=="object"?wt(t):pe(Jr,null,String(t))}function wt(t){return t.el===null||t.memo?t:En(t)}function Zr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Zr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ci in e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[Cs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Br([e.class,s.class]));else if(i==="style")e.style=Fr([e.style,s.style]);else if(fi(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){Ke(t,e,7,[n,s])}const ed=_a();let td=0;function nd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ed,r={uid:td++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Th(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ha(s,i),emitsOptions:Zc(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hf.bind(null,r),t.ce&&t.ce(r),r}let Ce=null;const Cn=t=>{Ce=t,t.scope.on()},Vt=()=>{Ce&&Ce.scope.off(),Ce=null};function Ca(t){return t.vnode.shapeFlag&4}let os=!1;function sd(t,e=!1){os=e;const{props:n,children:s}=t.vnode,i=Ca(t);Uf(t,n,i,e),$f(t,s);const r=i?id(t,e):void 0;return os=!1,r}function id(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wc(new Proxy(t.ctx,Mf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?od(t):null;Cn(t),xn();const r=St(s,t,0,[t.props,i]);if(Pn(),Vt(),Sc(r)){if(r.then(Vt,Vt),e)return r.then(o=>{ol(t,o,e)}).catch(o=>{mi(o,t,0)});t.asyncDep=r}else ol(t,r,e)}else ba(t,e)}function ol(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=qc(e)),ba(t,n)}let ll;function ba(t,e,n){const s=t.type;if(!t.render){if(!e&&ll&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Se(Se({isCustomElement:r,delimiters:l},o),c);s.render=ll(i,a)}}t.render=s.render||ze}Cn(t),xn(),Df(t),Pn(),Vt()}function rd(t){return new Proxy(t.attrs,{get(e,n){return ke(t,"get","$attrs"),e[n]}})}function od(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=rd(t))},slots:t.slots,emit:t.emit,expose:e}}function eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qc(Wc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)}}))}function ld(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function cd(t){return W(t)&&"__vccOpts"in t}const Be=(t,e)=>rf(t,e,os);function wa(t,e,n){const s=arguments.length;return s===2?_e(e)&&!U(e)?dr(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dr(n)&&(n=[n]),pe(t,e,n))}const ad="3.2.37",ud="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,cl=Ht&&Ht.createElement("template"),hd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ht.createElementNS(ud,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{cl.innerHTML=s?`<svg>${t}</svg>`:t;const l=cl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dd(t,e,n){const s=t.style,i=Ee(n);if(n&&!i){for(const r in n)pr(s,r,n[r]);if(e&&!Ee(e))for(const r in e)n[r]==null&&pr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const al=/\s*!important$/;function pr(t,e,n){if(U(n))n.forEach(s=>pr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pd(t,e);al.test(n)?t.setProperty(Nn(s),n.replace(al,""),"important"):t[s]=n}}const ul=["Webkit","Moz","ms"],ki={};function pd(t,e){const n=ki[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return ki[e]=s;s=_i(s);for(let i=0;i<ul.length;i++){const r=ul[i]+s;if(r in t)return ki[e]=r}return e}const hl="http://www.w3.org/1999/xlink";function _d(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hl,e.slice(6,e.length)):t.setAttributeNS(hl,e,n);else{const r=dh(e);n==null||r&&!wc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Ia,md]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let _r=0;const yd=Promise.resolve(),vd=()=>{_r=0},Ed=()=>_r||(yd.then(vd),_r=Ia());function Cd(t,e,n,s){t.addEventListener(e,n,s)}function bd(t,e,n,s){t.removeEventListener(e,n,s)}function wd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Id(e);if(s){const a=r[e]=Td(s,i);Cd(t,l,a,c)}else o&&(bd(t,l,o,c),r[e]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function Id(t){let e;if(fl.test(t)){e={};let n;for(;n=t.match(fl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Nn(t.slice(2)),e]}function Td(t,e){const n=s=>{const i=s.timeStamp||Ia();(md||i>=n.attached-1)&&Ke(Sd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ed(),n}function Sd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dl=/^on[a-z]/,Rd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?fd(t,s,i):e==="style"?dd(t,n,s):fi(e)?Ur(e)||wd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nd(t,e,s,i))?gd(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_d(t,e,s,i))};function Nd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dl.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dl.test(e)&&Ee(n)?!1:e in t}const xd=Se({patchProp:Rd},hd);let pl;function Pd(){return pl||(pl=zf(xd))}const Ad=(...t)=>{const e=Pd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Od(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Od(t){return Ee(t)?document.querySelector(t):t}const Ta=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw An(e)},An=function(t){return new Error("Firebase Database ("+Sa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Md=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},to={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ra(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Md(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Na=function(t){const e=Ra(t);return to.encodeByteArray(e,!0)},xa=function(t){return Na(t).replace(/\./g,"")},_l=function(t){try{return to.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){return Pa(void 0,t)}function Pa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kd(n)||(t[n]=Pa(t[n],e[n]));return t}function kd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Aa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ld())}function Fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oa(){return Sa.NODE_ADMIN===!0}function Bd(){return typeof indexedDB=="object"}function Ud(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="FirebaseError";class no extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Hd,Object.setPrototypeOf(this,no.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new no(i,l,s)}}function Wd(t,e){return t.replace($d,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $d=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(_l(r[0])||""),n=ls(_l(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},jd=function(t){const e=Da(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vd=function(t){const e=Da(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ml(r)&&ml(o)){if(!gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ml(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function so(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bs(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class Gd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qd(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yd(t){return t===Bt?void 0:t}function Qd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Jd={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Zd=oe.INFO,ep={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},tp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ep[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=Zd,this._logHandler=tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const np=(t,e)=>e.some(n=>t instanceof n);let yl,vl;function sp(){return yl||(yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ip(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,mr=new WeakMap,Fa=new WeakMap,Li=new WeakMap,io=new WeakMap;function rp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&La.set(n,t)}).catch(()=>{}),io.set(e,t),e}function op(t){if(mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mr.set(t,e)}let yr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lp(t){yr=t(yr)}function cp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fi(this),e,...n);return Fa.set(s,e.sort?e.sort():[e]),Nt(s)}:ip().includes(t)?function(...e){return t.apply(Fi(this),e),Nt(La.get(this))}:function(...e){return Nt(t.apply(Fi(this),e))}}function ap(t){return typeof t=="function"?cp(t):(t instanceof IDBTransaction&&op(t),np(t,sp())?new Proxy(t,yr):t)}function Nt(t){if(t instanceof IDBRequest)return rp(t);if(Li.has(t))return Li.get(t);const e=ap(t);return e!==t&&(Li.set(t,e),io.set(e,t)),e}const Fi=t=>io.get(t);function up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const hp=["get","getKey","getAll","getAllKeys","count"],fp=["put","add","delete","clear"],Bi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Bi.set(e,r),r}lp(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",Cl="0.7.28";/**
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
 */const ro=new ka("@firebase/app"),_p="@firebase/app-compat",gp="@firebase/analytics-compat",mp="@firebase/analytics",yp="@firebase/app-check-compat",vp="@firebase/app-check",Ep="@firebase/auth",Cp="@firebase/auth-compat",bp="@firebase/database",wp="@firebase/database-compat",Ip="@firebase/functions",Tp="@firebase/functions-compat",Sp="@firebase/installations",Rp="@firebase/installations-compat",Np="@firebase/messaging",xp="@firebase/messaging-compat",Pp="@firebase/performance",Ap="@firebase/performance-compat",Op="@firebase/remote-config",Mp="@firebase/remote-config-compat",Dp="@firebase/storage",kp="@firebase/storage-compat",Lp="@firebase/firestore",Fp="@firebase/firestore-compat",Bp="firebase",Up="9.9.0";/**
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
 */const Ba="[DEFAULT]",Hp={[vr]:"fire-core",[_p]:"fire-core-compat",[mp]:"fire-analytics",[gp]:"fire-analytics-compat",[vp]:"fire-app-check",[yp]:"fire-app-check-compat",[Ep]:"fire-auth",[Cp]:"fire-auth-compat",[bp]:"fire-rtdb",[wp]:"fire-rtdb-compat",[Ip]:"fire-fn",[Tp]:"fire-fn-compat",[Sp]:"fire-iid",[Rp]:"fire-iid-compat",[Np]:"fire-fcm",[xp]:"fire-fcm-compat",[Pp]:"fire-perf",[Ap]:"fire-perf-compat",[Op]:"fire-rc",[Mp]:"fire-rc-compat",[Dp]:"fire-gcs",[kp]:"fire-gcs-compat",[Lp]:"fire-fst",[Fp]:"fire-fst-compat","fire-js":"fire-js",[Bp]:"fire-js-all"};/**
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
 */const Qs=new Map,Er=new Map;function Wp(t,e){try{t.container.addComponent(e)}catch(n){ro.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Er.has(e))return ro.debug(`There were multiple attempts to register component ${e}.`),!1;Er.set(e,t);for(const n of Qs.values())Wp(n,t);return!0}function $p(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},zt=new Ma("app","Firebase",jp);/**
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
 */class Vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const qp=Up;function zp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ba,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});const i=Qs.get(s);if(i){if(gr(t,i.options)&&gr(n,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const r=new Xd(s);for(const l of Er.values())r.addComponent(l);const o=new Vp(t,n,r);return Qs.set(s,o),o}function Kp(t=Ba){const e=Qs.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=Hp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ro.warn(l.join(" "));return}Xs(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gp="firebase-heartbeat-database",Yp=1,as="firebase-heartbeat-store";let Ui=null;function Ua(){return Ui||(Ui=up(Gp,Yp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}}).catch(t=>{throw zt.create("storage-open",{originalErrorMessage:t.message})})),Ui}async function Qp(t){var e;try{return(await Ua()).transaction(as).objectStore(as).get(Ha(t))}catch(n){throw zt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function bl(t,e){var n;try{const i=(await Ua()).transaction(as,"readwrite");return await i.objectStore(as).put(e,Ha(t)),i.done}catch(s){throw zt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Ha(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xp=1024,Jp=30*24*60*60*1e3;class Zp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wl(),{heartbeatsToSend:n,unsentEntries:s}=e_(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wl(){return new Date().toISOString().substring(0,10)}function e_(t,e=Xp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class t_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?Ud().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Il(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function n_(t){Xs(new cs("platform-logger",e=>new dp(e),"PRIVATE")),Xs(new cs("heartbeat",e=>new Zp(e),"PRIVATE")),gn(vr,Cl,t),gn(vr,Cl,"esm2017"),gn("fire-js","")}n_("");var s_="firebase",i_="9.9.0";/**
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
 */gn(s_,i_,"app");const Tl="@firebase/database",Sl="0.13.3";/**
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
 */let Wa="";function r_(t){Wa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o_(e)}}catch{}return new l_},Wt=$a("localStorage"),Cr=$a("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new ka("@firebase/database"),c_=function(){let t=1;return function(){return t++}}(),ja=function(t){const e=Kd(t),n=new zd;n.update(e);const s=n.digest();return to.encodeByteArray(s)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ws.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let qt=null,Rl=!0;const a_=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mn.logLevel=oe.VERBOSE,qt=mn.log.bind(mn),e&&Cr.set("logging_enabled",!0)):typeof t=="function"?qt=t:(qt=null,Cr.remove("logging_enabled"))},be=function(...t){if(Rl===!0&&(Rl=!1,qt===null&&Cr.get("logging_enabled")===!0&&a_(!0)),qt){const e=ws.apply(null,t);qt(e)}},Is=function(t){return function(...e){be(t,...e)}},br=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);mn.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw mn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+ws(...t);mn.warn(e)},u_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Va=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},h_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",Gt="[MAX_NAME]",On=function(t,e){if(t===e)return 0;if(t===wn||e===Gt)return-1;if(e===wn||t===Gt)return 1;{const n=Nl(t),s=Nl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},f_=function(t,e){return t===e?0:t<e?-1:1},Bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},oo=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=oo(t[e[s]]);return n+="}",n},qa=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Le(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const za=function(t){I(!Va(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},d_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},p_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function __(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const g_=new RegExp("^-?(0*)\\d{1,10}$"),m_=-2147483648,y_=2147483647,Nl=function(t){if(g_.test(t)){const e=Number(t);if(e>=m_&&e<=y_)return e}return null},Mn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},v_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class E_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class wr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="5",Ka="v",Ga="s",Ya="r",Qa="f",Xa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ja="ls",Za="p",Ir="ac",eu="websocket",tu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function w_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nu(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===eu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);w_(t)&&(n.ns=t.namespace);const i=[];return Le(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi={},Wi={};function co(t){const e=t.toString();return Hi[e]||(Hi[e]=new I_),Hi[e]}function T_(t,e){const n=t.toString();return Wi[n]||(Wi[n]=e()),Wi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="start",R_="close",N_="pLPCommand",x_="pRTLPCB",su="id",iu="pw",ru="ser",P_="cb",A_="seg",O_="ts",M_="d",D_="dframe",ou=1870,lu=30,k_=ou-lu,L_=25e3,F_=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Is(e),this.stats_=co(n),this.urlFn=c=>(this.appCheckToken&&(c[Ir]=this.appCheckToken),nu(n,tu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new S_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F_)),h_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ao((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xl)this.id=l,this.password=c;else if(o===R_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[xl]="t",s[ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[P_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ka]=lo,this.transportSessionId&&(s[Ga]=this.transportSessionId),this.lastSessionId&&(s[Ja]=this.lastSessionId),this.applicationId&&(s[Za]=this.applicationId),this.appCheckToken&&(s[Ir]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xa.test(location.hostname)&&(s[Ya]=Qa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!d_()&&!p_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Na(n),i=qa(s,k_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[D_]="t",s[su]=e,s[iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=c_(),window[N_+this.uniqueCallbackIdentifier]=e,window[x_+this.uniqueCallbackIdentifier]=n,this.myIFrame=ao.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[su]=this.myID,e[iu]=this.myPW,e[ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lu+s.length<=ou;){const o=this.pendingSegs.shift();s=s+"&"+A_+i+"="+o.seg+"&"+O_+i+"="+o.ts+"&"+M_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(L_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=16384,U_=45e3;let Js=null;typeof MozWebSocket<"u"?Js=MozWebSocket:typeof WebSocket<"u"&&(Js=WebSocket);class $e{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Is(this.connId),this.stats_=co(n),this.connURL=$e.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ka]=lo,typeof location<"u"&&location.hostname&&Xa.test(location.hostname)&&(o[Ya]=Qa),n&&(o[Ga]=n),s&&(o[Ja]=s),i&&(o[Ir]=i),r&&(o[Za]=r),nu(e,eu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wt.set("previous_websocket_failure",!0);try{let s;Oa(),this.mySock=new Js(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Js!==null&&!$e.forceDisallow_}static previouslyFailed(){return Wt.isInMemoryStorage||Wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qa(n,B_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=6e4,W_=5e3,$_=10*1024,j_=100*1024,$i="t",Pl="d",V_="s",Al="r",q_="e",Ol="o",Ml="a",Dl="n",kl="p",z_="h";class K_{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Is("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>j_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($i in e){const n=e[$i];n===Ml?this.upgradeIfSecondaryHealthy_():n===Al?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bn($i,e);if(Pl in e){const s=e[Pl];if(n===z_)this.onHandshake_(s);else if(n===Dl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===V_?this.onConnectionShutdown_(s):n===Al?this.onReset_(s):n===q_?br("Server Error: "+s):n===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):br("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lo!==s&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Yn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(H_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(W_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends au{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Aa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zs}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=32,Fl=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new se("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ot(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function uu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function G_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Te(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function du(t,e){if(Ot(t)!==Ot(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ve(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ot(t)>Ot(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Y_{constructor(e,n){this.errorPrefix_=n,this.parts_=hu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wi(this.parts_[s]);pu(this)}}function Q_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wi(e),pu(t)}function X_(t){const e=t.parts_.pop();t.byteLength_-=wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function pu(t){if(t.byteLength_>Fl)throw new Error(t.errorPrefix_+"has a key path longer than "+Fl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ll)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ll+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends au{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new uo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3,J_=60*5*1e3,Bl=30*1e3,Z_=1.3,eg=3e4,tg="server_kill",Ul=3;class ht extends cu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ht.nextPersistentConnectionId_++,this.log_=Is("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=J_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Oa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new bi,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;ht.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):br("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eg&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Z_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new K_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(tg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),c())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gl(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>oo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ul&&(this.reconnectDelay_=Bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ul&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wa.replace(/\./g,"-")]=1,Aa()?e["framework.cordova"]=1:Fd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zs.getInstance().currentlyOnline();return gl(this.interruptReasons_)&&e}}ht.nextPersistentConnectionId_=0;ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(wn,e),i=new $(wn,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class _u extends Ii{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(e){Ds=e}compare(e,n){return On(e.name,n.name)}isDefinedOn(e){throw An("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Gt,Ds)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Ds)}toString(){return".key"}}const yn=new _u;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:me.RED,this.left=i!=null?i:xe.EMPTY_NODE,this.right=r!=null?r:xe.EMPTY_NODE}copy(e,n,s,i,r){return new me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class ng{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xe{constructor(e,n=xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}}xe.EMPTY_NODE=new ng;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){return On(t.name,e.name)}function ho(t,e){return On(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;function ig(t){Tr=t}const gu=function(t){return typeof t=="number"?"number:"+za(t):"string:"+t},mu=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else I(t===Tr||t.isEmpty(),"priority of unexpected type.");I(t===Tr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mu(this.priorityNode_)}static set __childrenNodeConstructor(e){Hl=e}static get __childrenNodeConstructor(){return Hl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:V(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=za(this.value_):e+=this.value_,this.lazyHash_=ja(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu,vu;function rg(t){yu=t}function og(t){vu=t}class lg extends Ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?On(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Gt,new ge("[PRIORITY-POST]",vu))}makePost(e,n){const s=yu(e);return new $(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new lg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=Math.log(2);class ag{constructor(e){const n=r=>parseInt(Math.log(r)/cg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ei=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new me(f,h.node,me.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),x=i(_+1,a);return h=t[_],f=n?n(h):h,new me(f,h.node,me.BLACK,m,x)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,x){const R=h-m,P=h;h-=m;const F=i(R+1,P),z=t[R],X=n?n(z):z;_(new me(X,z.node,x,null,F))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const x=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));x?f(R,me.BLACK):(f(R,me.BLACK),f(R,me.RED))}return u},o=new ag(t.length),l=r(o);return new xe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;const rn={};class ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(rn&&he,"ChildrenNode.ts has not been loaded"),ji=ji||new ut({".priority":rn},{".priority":he}),ji}get(e){const n=bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xe?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){I(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ei(s,e.getCompare()):l=rn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new ut(u,a)}addToIndexes(e,n){const s=Ys(this.indexes_,(i,r)=>{const o=bn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===rn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator($.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ei(l,o.getCompare())}else return rn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new $(e.name,l))),c.insert(e,e.node)}});return new ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ys(this.indexes_,i=>{if(i===rn)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new ut(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mu(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hn||(Hn=new L(new xe(ho),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{I(V(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gu(this.getPriority().val())+":"),this.forEachChild(he,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ja(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(he),i=n.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ug extends L{constructor(){super(new xe(ho),L.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ts=new ug;Object.defineProperties($,{MIN:{value:new $(wn,L.EMPTY_NODE)},MAX:{value:new $(Gt,Ts)}});_u.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;ig(Ts);og(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=!0;function ye(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ye(e))}if(!(t instanceof Array)&&hg){const n=[];let s=!1;if(Le(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ye(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new $(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ei(n,sg,o=>o.name,ho);if(s){const o=ei(n,he.getCompare());return new L(r,ye(e),new ut({".priority":o},{".priority":he}))}else return new L(r,ye(e),ut.Default)}else{let n=L.EMPTY_NODE;return Le(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}rg(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends Ii{constructor(e){super(),this.indexPath_=e,I(!q(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?On(e.name,n.name):r}makePost(e,n){const s=ye(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new $(Gt,e)}toString(){return hu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends Ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?On(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=ye(e);return new $(n,s)}toString(){return".value"}}const pg=new dg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){return{type:"value",snapshotNode:t}}function hs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(hs(n,s)):o.trackChildChange(ds(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{n.hasChild(i)||s.trackChildChange(fs(i,r))}),n.isLeafNode()||n.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ds(i,r,o))}else s.trackChildChange(hs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.indexedFilter_=new fo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,l,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let a=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&l(r,h)<=0&&(u=!0),u&&a<this.limit_&&l(h,o)<=0?a++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const c=new $(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ds(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(fs(n,h));const x=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(hs(f.name,f.node)),x.updateImmediateChild(f.name,f.node)):x}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(fs(a.name,a.node)),r.trackChildChange(hs(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yg(t){return t.loadsAllData()?new fo(t.getIndex()):t.hasLimit()?new mg(t):new ps(t)}function Wl(t){const e={};if(t.isDefault())return e;let n;return t.index_===he?n="$priority":t.index_===pg?n="$value":t.index_===yn?n="$key":(I(t.index_ instanceof fg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_&&(e.startAt=ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ve(t.indexStartName_))),t.endSet_&&(e.endAt=ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $l(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends cu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Is("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ti.getListenId_(e,s),l={};this.listens_[o]=l;const c=Wl(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),bn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=ti.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wl(e._queryParams),s=e._path.toString(),i=new bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ls(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return{value:null,children:new Map}}function Eu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,ni());const i=t.children.get(s);e=ce(e),Eu(i,e,n)}}function Sr(t,e,n){t.value!==null?n(e,t.value):Eg(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Sr(i,r,n)})}function Eg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Le(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=10*1e3,bg=30*1e3,wg=5*60*1e3;class Ig{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cg(e);const s=jl+(bg-jl)*Math.random();Yn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Le(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Yn(this.reportStats_.bind(this),Math.floor(Math.random()*2*wg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Cu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _o(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function go(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=Cu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new si(Y(),n,this.revert)}}else return I(V(this.path)===e,"operationForChild called for unrelated child."),new si(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new _s(this.source,Y()):new _s(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return q(this.path)?new Yt(this.source,Y(),this.snap.getImmediateChild(e)):new Yt(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Yt(this.source,Y(),n.value):new gs(this.source,Y(),n)}else return I(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gg(o.childName,o.snapshotNode))}),Wn(t,i,"child_removed",e,s,n),Wn(t,i,"child_added",e,s,n),Wn(t,i,"child_moved",r,s,n),Wn(t,i,"child_changed",e,s,n),Wn(t,i,"value",e,s,n),i}function Wn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Ng(t,l,c)),o.forEach(l=>{const c=Rg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Rg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ng(t,e,n){if(e.childName==null||n.childName==null)throw An("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return{eventCache:t,serverCache:e}}function Qn(t,e,n,s){return Ti(new Mt(e,n,s),t.serverCache)}function bu(t,e,n,s){return Ti(t.eventCache,new Mt(e,n,s))}function ii(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;const xg=()=>(Vi||(Vi=new xe(f_)),Vi);class ue{constructor(e,n=xg()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Le(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(q(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:de(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ue(null)}}set(e,n){if(q(e))return new ue(n,this.children);{const s=V(e),r=(this.children.get(s)||new ue(null)).set(ce(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(q(e))return n;{const s=V(e),r=(this.children.get(s)||new ue(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),de(n,i),s):new ue(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new ue(null))}}function Xn(t,e,n){if(q(e))return new Ge(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new Ge(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new Ge(r)}}}function Vl(t,e,n){let s=t;return Le(n,(i,r)=>{s=Xn(s,de(e,i),r)}),s}function ql(t,e){if(q(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Ge(n)}}function Rr(t,e){return Xt(t,e)!=null}function Xt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function zl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function xt(t,e){if(q(e))return t;{const n=Xt(t,e);return n!=null?new Ge(new ue(n)):new Ge(t.writeTree_.subtree(e))}}function Nr(t){return t.writeTree_.isEmpty()}function In(t,e){return wu(Y(),t.writeTree_,e)}function wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){return Ru(e,t)}function Pg(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function Ag(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Og(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Mg(l,s.path)?i=!1:Ve(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Dg(t),!0;if(s.snap)t.visibleWrites=ql(t.visibleWrites,s.path);else{const l=s.children;Le(l,c=>{t.visibleWrites=ql(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function Mg(t,e){if(t.snap)return Ve(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ve(de(t.path,n),e))return!0;return!1}function Dg(t){t.visibleWrites=Iu(t.allWrites,kg,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kg(t){return t.visible}function Iu(t,e,n){let s=Ge.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ve(n,o)?(l=Te(n,o),s=Xn(s,l,r.snap)):Ve(o,n)&&(l=Te(o,n),s=Xn(s,Y(),r.snap.getChild(l)));else if(r.children){if(Ve(n,o))l=Te(n,o),s=Vl(s,l,r.children);else if(Ve(o,n))if(l=Te(o,n),q(l))s=Vl(s,Y(),r.children);else{const c=bn(r.children,V(l));if(c){const a=c.getChild(ce(l));s=Xn(s,Y(),a)}}}else throw An("WriteRecord should have .snap or .children")}}return s}function Tu(t,e,n,s,i){if(!s&&!i){const r=Xt(t.visibleWrites,e);if(r!=null)return r;{const o=xt(t.visibleWrites,e);if(Nr(o))return n;if(n==null&&!Rr(o,Y()))return null;{const l=n||L.EMPTY_NODE;return In(o,l)}}}else{const r=xt(t.visibleWrites,e);if(!i&&Nr(r))return n;if(!i&&n==null&&!Rr(r,Y()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ve(a.path,e)||Ve(e,a.path))},l=Iu(t.allWrites,o,e),c=n||L.EMPTY_NODE;return In(l,c)}}}function Lg(t,e,n){let s=L.EMPTY_NODE;const i=Xt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xt(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const c=In(xt(r,new se(o)),l);s=s.updateImmediateChild(o,c)}),zl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xt(t.visibleWrites,e);return zl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Fg(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Rr(t.visibleWrites,r))return null;{const o=xt(t.visibleWrites,r);return Nr(o)?i.getChild(n):In(o,i.getChild(n))}}function Bg(t,e,n,s){const i=de(e,n),r=Xt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xt(t.visibleWrites,i);return In(o,s.getNode().getImmediateChild(n))}else return null}function Ug(t,e){return Xt(t.visibleWrites,e)}function Hg(t,e,n,s,i,r,o){let l;const c=xt(t.visibleWrites,e),a=Xt(c,Y());if(a!=null)l=a;else if(n!=null)l=In(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Wg(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function ri(t,e,n,s){return Tu(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return Lg(t.writeTree,t.treePath,e)}function Kl(t,e,n,s){return Fg(t.writeTree,t.treePath,e,n,s)}function oi(t,e){return Ug(t.writeTree,de(t.treePath,e))}function $g(t,e,n,s,i,r){return Hg(t.writeTree,t.treePath,e,n,s,i,r)}function yo(t,e,n){return Bg(t.writeTree,t.treePath,e,n)}function Su(t,e){return Ru(de(t.treePath,e),t.writeTree)}function Ru(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ds(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,fs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,hs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ds(s,e.snapshotNode,i.oldSnap));else throw An("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Nu=new Vg;class vo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qt(this.viewCache_),r=$g(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return{filter:t}}function zg(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Kg(t,e,n,s,i){const r=new jg;let o,l;if(n.type===qe.OVERWRITE){const a=n;a.source.fromUser?o=xr(t,e,a.path,a.snap,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=li(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===qe.MERGE){const a=n;a.source.fromUser?o=Yg(t,e,a.path,a.children,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Pr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===qe.ACK_USER_WRITE){const a=n;a.revert?o=Jg(t,e,a.path,s,i,r):o=Qg(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=Xg(t,e,n.path,s,r);else throw An("Unknown operation type: "+n.type);const c=r.getChanges();return Gg(e,o,c),{viewCache:o,changes:c}}function Gg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ii(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_g(ii(e)))}}function xu(t,e,n,s,i,r){const o=e.eventCache;if(oi(s,n)!=null)return e;{let l,c;if(q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Qt(e),u=a instanceof L?a:L.EMPTY_NODE,h=mo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=ri(s,Qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=V(n);if(a===".priority"){I(Ot(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Kl(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=Kl(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=yo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Qn(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function li(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=V(n);if(!c.isCompleteForPath(n)&&Ot(n)>1)return e;const m=ce(n),R=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),R):a=u.updateChild(c.getNode(),_,R,m,Nu,null)}const h=bu(e,a,c.isFullyInitialized()||q(n),u.filtersNodes()),f=new vo(i,h,r);return xu(t,h,n,i,f,l)}function xr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new vo(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Qn(e,a,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Qn(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=ce(n),_=l.getNode().getImmediateChild(h);let m;if(q(f))m=s;else{const x=u.getCompleteChild(h);x!=null?uu(f)===".priority"&&x.getChild(fu(f)).isEmpty()?m=x:m=x.updateChild(f,s):m=L.EMPTY_NODE}if(_.equals(m))c=e;else{const x=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=Qn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Gl(t,e){return t.eventCache.isCompleteForChild(e)}function Yg(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=de(n,c);Gl(e,V(u))&&(l=xr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=de(n,c);Gl(e,V(u))||(l=xr(t,l,u,a,i,r,o))}),l}function Yl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Yl(t,_,f);c=li(t,c,new se(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),x=Yl(t,m,f);c=li(t,c,new se(h),x,i,r,o,l)}}),c}function Qg(t,e,n,s,i,r,o){if(oi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return li(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new ue(null);return c.getNode().forEachChild(yn,(u,h)=>{a=a.set(new se(u),h)}),Pr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ue(null);return s.foreach((u,h)=>{const f=de(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Pr(t,e,n,a,i,r,l,o)}}function Xg(t,e,n,s,i){const r=e.serverCache,o=bu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return xu(t,o,n,s,Nu,i)}function Jg(t,e,n,s,i,r){let o;if(oi(s,n)!=null)return e;{const l=new vo(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ri(s,Qt(e));else{const h=e.serverCache.getNode();I(h instanceof L,"serverChildren would be complete if leaf node"),u=mo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=V(n);let h=yo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,ce(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ri(s,Qt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||oi(s,Y())!=null,Qn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new fo(s.getIndex()),r=yg(s);this.processor_=qg(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new Mt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Mt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ti(h,u),this.eventGenerator_=new Tg(this.query_)}get query(){return this.query_}}function em(t){return t.viewCache_.serverCache.getNode()}function tm(t){return ii(t.viewCache_)}function nm(t,e){const n=Qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Ql(t){return t.eventRegistrations_.length===0}function Xl(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Jl(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(I(Qt(t.viewCache_),"We should always have a full cache before handling merges"),I(ii(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Kg(t.processor_,i,e,n,s);return zg(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,sm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Sg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class Pu{constructor(){this.views=new Map}}function im(t){I(!ci,"__referenceConstructor has already been defined"),ci=t}function rm(){return I(ci,"Reference.ts has not been loaded"),ci}function om(t){return t.views.size===0}function Eo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Jl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Jl(o,e,n,s));return r}}function Au(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ri(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=mo(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=Ti(new Mt(l,c,!1),new Mt(s,i,!1));return new Zg(e,a)}return o}function lm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Tn(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Xl(a,n,s)),Ql(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Xl(c,n,s)),Ql(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Tn(t)&&r.push(new(rm())(e._repo,e._path)),{removed:r,events:o}}function cm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||nm(s,e);return n}function am(t,e){if(e._queryParams.loadsAllData())return Co(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ou(t,e){return am(t,e)!=null}function Tn(t){return Co(t)!=null}function Co(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;function um(t){I(!ai,"__referenceConstructor has already been defined"),ai=t}function hm(){return I(ai,"Reference.ts has not been loaded"),ai}let fm=1;class Zl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Wg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mu(t,e,n,s,i){return Pg(t.pendingWriteTree_,e,n,s,i),i?Rs(t,new Yt(Cu(),e,n)):[]}function $t(t,e,n=!1){const s=Ag(t.pendingWriteTree_,e);if(Og(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(Y(),!0):Le(s.children,o=>{r=r.set(new se(o),!0)}),Rs(t,new si(s.path,r,n))}else return[]}function Ss(t,e,n){return Rs(t,new Yt(_o(),e,n))}function dm(t,e,n){const s=ue.fromObject(n);return Rs(t,new gs(_o(),e,s))}function pm(t,e){return Rs(t,new _s(_o(),e))}function _m(t,e,n){const s=Io(t,n);if(s){const i=To(s),r=i.path,o=i.queryId,l=Te(r,e),c=new _s(go(o),l);return So(t,r,c)}else return[]}function Du(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Ou(r,e))){const l=lm(r,e,n,s);om(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;o=l.events;const a=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Tn(f));if(a&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Cm(h);for(let _=0;_<f.length;++_){const m=f[_],x=m.query,R=Em(t,m);t.listenProvider_.startListening(qi(x),wo(t,x),R.hashFn,R.onComplete)}}}!u&&c.length>0&&!s&&(a?t.listenProvider_.stopListening(qi(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Ri(h));t.listenProvider_.stopListening(qi(h),f)})),bm(t,c)}return o}function gm(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=ym(e,t),o=Au(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:wo(t,e)}function ku(t,e,n,s){const i=Io(t,s);if(i!=null){const r=To(i),o=r.path,l=r.queryId,c=Te(o,e),a=new Yt(go(l),c,n);return So(t,o,a)}else return[]}function mm(t,e,n,s){const i=Io(t,s);if(i){const r=To(i),o=r.path,l=r.queryId,c=Te(o,e),a=ue.fromObject(n),u=new gs(go(l),c,a);return So(t,o,u)}else return[]}function ym(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=Te(a,n);s=s||Pt(u,h),i=i||Tn(u)});let r=e.syncPointTree_.get(n);r?(i=i||Tn(r),s=s||Pt(r,Y())):(r=new Pu,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=L.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Pt(h,Y());f&&(s=s.updateImmediateChild(u,f))}));const l=Ou(r,t);if(!l&&!t._queryParams.loadsAllData()){const a=Ri(t);I(!e.queryToTagMap.has(a),"View does not exist, but we have a tag");const u=wm();e.queryToTagMap.set(a,u),e.tagToQueryMap.set(u,a)}const c=Si(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:c,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function bo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Te(o,e),a=Pt(l,c);if(a)return a});return Tu(i,e,r,n,!0)}function vm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=Te(a,n);s=s||Pt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,Y()):(i=new Pu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Mt(s,!0,!1):null,l=Si(t.pendingWriteTree_,e._path),c=Au(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return tm(c)}function Rs(t,e){return Lu(e,t.syncPointTree_,null,Si(t.pendingWriteTree_,Y()))}function Lu(t,e,n,s){if(q(t.path))return Fu(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=Pt(i,Y()));let r=[];const o=V(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Su(s,o);r=r.concat(Lu(l,c,a,u))}return i&&(r=r.concat(Eo(i,t,s,n))),r}}function Fu(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=Pt(i,Y()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Su(s,o),u=t.operationForChild(o);u&&(r=r.concat(Fu(u,l,c,a)))}),i&&(r=r.concat(Eo(i,t,s,n))),r}function Em(t,e){const n=e.query,s=wo(t,n);return{hashFn:()=>(em(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?_m(t,n._path,s):pm(t,n._path);{const r=__(i,n);return Du(t,n,null,r)}}}}function wo(t,e){const n=Ri(e);return t.queryToTagMap.get(n)}function Ri(t){return t._path.toString()+"$"+t._queryIdentifier}function Io(t,e){return t.tagToQueryMap.get(e)}function To(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function So(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Si(t.pendingWriteTree_,e);return Eo(s,n,i,null)}function Cm(t){return t.fold((e,n,s)=>{if(n&&Tn(n))return[Co(n)];{let i=[];return n&&(i=cm(n)),Le(s,(r,o)=>{i=i.concat(o)}),i}})}function qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hm())(t._repo,t._path):t}function bm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ri(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function wm(){return fm++}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ro(n)}node(){return this.node_}}class No{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new No(this.syncTree_,n)}node(){return bo(this.syncTree_,this.path_)}}const Im=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ec=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Tm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sm(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Tm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Sm=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Rm=function(t,e,n,s){return xo(e,new No(n,t),s)},Bu=function(t,e,n){return xo(t,new Ro(e),n)};function xo(t,e,n){const s=t.getPriority().val(),i=ec(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ec(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(he,(l,c)=>{const a=xo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ao(t,e){let n=e instanceof se?e:new se(e),s=t,i=V(n);for(;i!==null;){const r=bn(s.node.children,i)||{children:{},childCount:0};s=new Po(i,s,r),n=ce(n),i=V(n)}return s}function Dn(t){return t.node.value}function Uu(t,e){t.node.value=e,Ar(t)}function Hu(t){return t.node.childCount>0}function Nm(t){return Dn(t)===void 0&&!Hu(t)}function Ni(t,e){Le(t.node.children,(n,s)=>{e(new Po(n,t,s))})}function Wu(t,e,n,s){n&&!s&&e(t),Ni(t,i=>{Wu(i,e,!0,s)}),n&&s&&e(t)}function xm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ns(t){return new se(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function Ar(t){t.parent!==null&&Pm(t.parent,t.name,t)}function Pm(t,e,n){const s=Nm(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ar(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ar(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=/[\[\].#$\/\u0000-\u001F\u007F]/,Om=/[\[\].#$\u0000-\u001F\u007F]/,zi=10*1024*1024,$u=function(t){return typeof t=="string"&&t.length!==0&&!Am.test(t)},ju=function(t){return typeof t=="string"&&t.length!==0&&!Om.test(t)},Mm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ju(t)},Dm=function(t,e,n,s){s&&e===void 0||Oo(so(t,"value"),e,n)},Oo=function(t,e,n){const s=n instanceof se?new Y_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(Va(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>zi/3&&wi(e)>zi)throw new Error(t+"contains a string greater than "+zi+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Le(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$u(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Q_(s,o),Oo(t,l,s),X_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},Vu=function(t,e,n,s){if(!(s&&n===void 0)&&!ju(n))throw new Error(so(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},km=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vu(t,e,n,s)},Lm=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Fm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$u(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Mm(n))throw new Error(so(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qu(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!du(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function dt(t,e,n){qu(t,n),Um(t,s=>Ve(s,e)||Ve(e,s))}function Um(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Hm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Hm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qt&&be("event: "+n.toString()),Mn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="repo_interrupt",$m=25;class jm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ni(),this.transactionQueueTree_=new Po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vm(t,e,n){if(t.stats_=co(t.repoInfo_),t.forceRestClient_||v_())t.server_=new ti(t.repoInfo_,(s,i,r,o)=>{tc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ht(t.repoInfo_,e,(s,i,r,o)=>{tc(t,s,i,r,o)},s=>{nc(t,s)},s=>{zm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=T_(t.repoInfo_,()=>new Ig(t.stats_,t.server_)),t.infoData_=new vg,t.infoSyncTree_=new Zl({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ss(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new Zl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);dt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function qm(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mo(t){return Im({timestamp:qm(t)})}function tc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ys(n,a=>ye(a));o=mm(t.serverSyncTree_,r,c,i)}else{const c=ye(n);o=ku(t.serverSyncTree_,r,c,i)}else if(s){const c=Ys(n,a=>ye(a));o=dm(t.serverSyncTree_,r,c)}else{const c=ye(n);o=Ss(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=xi(t,r)),dt(t.eventQueue_,l,o)}function nc(t,e){Do(t,"connected",e),e===!1&&Ym(t)}function zm(t,e){Le(e,(n,s)=>{Do(t,n,s)})}function Do(t,e,n){const s=new se("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=Ss(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function zu(t){return t.nextWriteId_++}function Km(t,e){const n=vm(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=ye(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())Ss(t.serverSyncTree_,e._path,i);else{const o=gm(t.serverSyncTree_,e);ku(t.serverSyncTree_,e._path,i,o)}return Du(t.serverSyncTree_,e,null).length>0&&ms(t,"unexpected cancel events in repoGetValue"),i},s=>(ms(t,"get for query "+ve(e)+" failed: "+s),Promise.reject(new Error(s))))}function Gm(t,e,n,s,i){ms(t,"set",{path:e.toString(),value:n,priority:s});const r=Mo(t),o=ye(n,s),l=bo(t.serverSyncTree_,e),c=Bu(o,l,r),a=zu(t),u=Mu(t.serverSyncTree_,e,c,a,!0);qu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Pe("set at "+e+" failed: "+f);const x=$t(t.serverSyncTree_,a,!m);dt(t.eventQueue_,e,x),Xm(t,i,f,_)});const h=Xu(t,e);xi(t,h),dt(t.eventQueue_,h,[])}function Ym(t){ms(t,"onDisconnectEvents");const e=Mo(t),n=ni();Sr(t.onDisconnect_,Y(),(i,r)=>{const o=Rm(i,r,t.serverSyncTree_,e);Eu(n,i,o)});let s=[];Sr(n,Y(),(i,r)=>{s=s.concat(Ss(t.serverSyncTree_,i,r));const o=Xu(t,i);xi(t,o)}),t.onDisconnect_=ni(),dt(t.eventQueue_,Y(),s)}function Qm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wm)}function ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Xm(t,e,n,s){e&&Mn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ku(t,e,n){return bo(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function ko(t,e=t.transactionQueueTree_){if(e||Pi(t,e),Dn(e)){const n=Yu(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jm(t,Ns(e),n)}else Hu(e)&&Ni(e,n=>{ko(t,n)})}function Jm(t,e,n){const s=n.map(a=>a.currentWriteId),i=Ku(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ms(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat($t(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Pi(t,Ao(t.transactionQueueTree_,e)),ko(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Mn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pe("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}xi(t,e)}},o)}function xi(t,e){const n=Gu(t,e),s=Ns(n),i=Yu(t,n);return Zm(t,i,s),s}function Zm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Te(n,c.path);let u=!1,h;if(I(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat($t(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$m)u=!0,h="maxretry",i=i.concat($t(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ku(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Oo("transaction failed: Data returned ",_,c.path);let m=ye(_);typeof _=="object"&&_!=null&&_t(_,".priority")||(m=m.updatePriority(f.getPriority()));const R=c.currentWriteId,P=Mo(t),F=Bu(m,f,P);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=F,c.currentWriteId=zu(t),o.splice(o.indexOf(R),1),i=i.concat(Mu(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat($t(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat($t(t.serverSyncTree_,c.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Pi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mn(s[l]);ko(t,t.transactionQueueTree_)}function Gu(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&Dn(s)===void 0;)s=Ao(s,n),e=ce(e),n=V(e);return s}function Yu(t,e){const n=[];return Qu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Qu(t,e,n){const s=Dn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ni(e,i=>{Qu(t,i,n)})}function Pi(t,e){const n=Dn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Uu(e,n.length>0?n:void 0)}Ni(e,s=>{Pi(t,s)})}function Xu(t,e){const n=Ns(Gu(t,e)),s=Ao(t.transactionQueueTree_,e);return xm(s,i=>{Ki(t,i)}),Ki(t,s),Wu(s,i=>{Ki(t,i)}),n}function Ki(t,e){const n=Dn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($t(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Uu(e,void 0):n.length=r+1,dt(t.eventQueue_,Ns(e),i);for(let o=0;o<s.length;o++)Mn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ty(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const sc=function(t,e){const n=ny(t),s=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||u_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new b_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},ny=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ey(t.substring(u,h)));const f=ty(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Lo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:uu(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=$l(this._queryParams),n=oo(e);return n==="{}"?"default":n}get _queryObject(){return $l(this._queryParams)}isEqual(e){if(e=bs(e),!(e instanceof Lo))return!1;const n=this._repo===e._repo,s=du(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+G_(this._path)}}class Dt extends Lo{constructor(e,n){super(e,n,new po,!1)}get parent(){const e=fu(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ui{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=ys(this.ref,e);return new ui(this._node.getChild(n),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ui(i,ys(this.ref,s),he)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function js(t,e){return t=bs(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=bs(t),V(t._path)===null?km("child","path",e,!1):Vu("child","path",e,!1),new Dt(t._repo,de(t._path,e))}function Gi(t,e){t=bs(t),Lm("set",t._path),Dm("set",e,t._path,!1);const n=new bi;return Gm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ic(t){return t=bs(t),Km(t._repo,t).then(e=>new ui(e,new Dt(t._repo,t._path),t._queryParams.getIndex()))}im(Dt);um(Dt);/**
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
 */const sy="FIREBASE_DATABASE_EMULATOR_HOST",Or={};let iy=!1;function ry(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sc(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[sy]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=sc(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new wr(wr.OWNER):new C_(t.name,t.options,e);Fm("Invalid Firebase Database URL",o),q(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ly(l,t,u,new E_(t.name,n));return new cy(h,t)}function oy(t,e){const n=Or[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qm(t),delete n[t.key]}function ly(t,e,n,s){let i=Or[e.name];i||(i={},Or[e.name]=i);let r=i[t.toURLString()];return r&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jm(t,iy,n,s),i[t.toURLString()]=r,r}class cy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Ju(t=Kp(),e){return $p(t,"database").getImmediate({identifier:e})}/**
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
 */function ay(t){r_(qp),Xs(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ry(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Tl,Sl,t),gn(Tl,Sl,"esm2017")}ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ay();const uy={apiKey:"API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",databaseURL:"https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"PROJECT_ID",storageBucket:"PROJECT_ID.appspot.com",messagingSenderId:"SENDER_ID",appId:"APP_ID",measurementId:"G-MEASUREMENT_ID"},hy=zp(uy),Yi=Ju(hy),rc=js(Ju());let yt,oc=[],vt,Qi;const vn={data(){return{setData:function(t,e){console.log("start"),Gi(js(Yi,t),e).then(()=>{console.log("fifnish")})},getPacksData:async function(){ic(ys(rc,"packs/")).then(t=>{if(t.exists())return Qi=t.val(),console.log(Qi),t.val();console.log("No data available")})},authFirebase:async function(){if(localStorage.getItem("uid")===null){ic(ys(rc,"users/")).then(t=>{t.exists()?oc=Object.keys(t.val()):console.log("No data available")}).catch(t=>{console.error(t)});do yt=Math.floor(Math.random()*Math.pow(10,12)),vt=`User${yt.toString().substring(0,4)}`;while(oc.findIndex(t=>t==yt)!==-1);Gi(js(Yi,`users/${yt}`),{name:vt}).then(()=>{localStorage.setItem("uid",yt),localStorage.setItem("userName",vt)})}else yt=localStorage.getItem("uid"),vt=localStorage.getItem("userName")},setUserName:function(t){vt=t,Gi(js(Yi,`users/${yt}`),{name:vt}).then(()=>{localStorage.setItem("userName",vt)})},uid:yt,userName:vt,packs:Qi}}};vn.data().authFirebase();vn.data().getPacksData();console.log(vn.data().userName);const fy={};function dy(t,e,n,s,i,r){const o=lr("Loader"),l=lr("RouterView");return ma(),va(tt,null,[pe(o),pe(l)],64)}const py=Ta(fy,[["render",dy]]),_y="modulepreload",gy=function(t){return"/Quiz/"+t},lc={},Ls=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=gy(i),i in lc)return;lc[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":_y,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((c,a)=>{l.addEventListener("load",c),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function my(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Xi(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ye(i)?i.map(t):t(i)}return n}const Jn=()=>{},Ye=Array.isArray,yy=/\/$/,vy=t=>t.replace(yy,"");function Ji(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=wy(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Ey(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cy(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Sn(e.matched[s],n.matched[i])&&Zu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!by(t[n],e[n]))return!1;return!0}function by(t,e){return Ye(t)?ac(t,e):Ye(e)?ac(e,t):t===e}function ac(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function wy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var vs;(function(t){t.pop="pop",t.push="push"})(vs||(vs={}));var Zn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zn||(Zn={}));function Iy(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vy(t)}const Ty=/^[^#]+#/;function Sy(t,e){return t.replace(Ty,"#")+e}function Ry(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ai=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ny(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Ry(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uc(t,e){return(history.state?history.state.position-e:-1)+t}const Mr=new Map;function xy(t,e){Mr.set(t,e)}function Py(t){const e=Mr.get(t);return Mr.delete(t),e}let Ay=()=>location.protocol+"//"+location.host;function eh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),cc(c,"")}return cc(n,t)+s+i}function Oy(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=eh(t,location),m=n.value,x=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}R=x?f.position-x.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:R,type:vs.pop,direction:R?R>0?Zn.forward:Zn.back:Zn.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ne({},f.state,{scroll:Ai()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:h}}function hc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ai():null}}function My(t){const{history:e,location:n}=window,s={value:eh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Ay()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=ne({},e.state,hc(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=ne({},i.value,e.state,{forward:c,scroll:Ai()});r(u.current,u,!0);const h=ne({},hc(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Dy(t){t=Iy(t);const e=My(t),n=Oy(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:Sy.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ky(t){return typeof t=="string"||t&&typeof t=="object"}function th(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nh=Symbol("");var fc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fc||(fc={}));function Rn(t,e){return ne(new Error,{type:t,[nh]:!0},e)}function Ct(t,e){return t instanceof Error&&nh in t&&(e==null||!!(t.type&e))}const dc="[^/]+?",Ly={sensitive:!1,strict:!1,start:!0,end:!0},Fy=/[.+*?^${}()[\]/\\]/g;function By(t,e){const n=ne({},Ly,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Fy,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:x,optional:R,regexp:P}=f;r.push({name:m,repeatable:x,optional:R});const F=P||dc;if(F!==dc){_+=10;try{new RegExp(`(${F})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+X.message)}}let z=x?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(z=R&&a.length<2?`(?:/${z})`:"/"+z),R&&(z+="?"),i+=z,_+=20,R&&(_+=-8),x&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:x,optional:R}=_,P=m in a?a[m]:"";if(Ye(P)&&!x)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=Ye(P)?P.join("/"):P;if(!F)if(R)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Uy(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hy(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Uy(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pc(s))return 1;if(pc(i))return-1}return i.length-s.length}function pc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wy={type:0,value:""},$y=/[a-zA-Z0-9_]/;function jy(t){if(!t)return[[]];if(t==="/")return[[Wy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){!a||(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:$y.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function Vy(t,e,n){const s=By(jy(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function qy(t,e){const n=[],s=new Map;e=gc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=Ky(u);m.aliasOf=f&&f.record;const x=gc(e,u),R=[m];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of z)R.push(ne({},m,{components:f?f.record.components:m.components,path:X,aliasOf:f?f.record:m}))}let P,F;for(const z of R){const{path:X}=z;if(h&&X[0]!=="/"){const Re=h.record.path,Ae=Re[Re.length-1]==="/"?"":"/";z.path=h.record.path+(X&&Ae+X)}if(P=Vy(z,h,x),f?f.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),_&&u.name&&!_c(P)&&o(u.name)),m.children){const Re=m.children;for(let Ae=0;Ae<Re.length;Ae++)r(Re[Ae],P,f&&f.children[Ae])}f=f||P,c(P)}return F?()=>{o(F)}:Jn}function o(u){if(th(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&Hy(u,n[h])>=0&&(u.record.path!==n[h].record.path||!sh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_c(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,x;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Rn(1,{location:u});x=f.record.name,_=ne(zy(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(F=>F.re.test(m)),f&&(_=f.parse(m),x=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Rn(1,{location:u,currentLocation:h});x=f.record.name,_=ne({},h.params,u.params),m=f.stringify(_)}const R=[];let P=f;for(;P;)R.unshift(P.record),P=P.parent;return{name:x,path:m,params:_,matched:R,meta:Yy(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function zy(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ky(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Gy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function _c(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yy(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function gc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function sh(t,e){return e.children.some(n=>n===t||sh(t,n))}const ih=/#/g,Qy=/&/g,Xy=/\//g,Jy=/=/g,Zy=/\?/g,rh=/\+/g,ev=/%5B/g,tv=/%5D/g,oh=/%5E/g,nv=/%60/g,lh=/%7B/g,sv=/%7C/g,ch=/%7D/g,iv=/%20/g;function Fo(t){return encodeURI(""+t).replace(sv,"|").replace(ev,"[").replace(tv,"]")}function rv(t){return Fo(t).replace(lh,"{").replace(ch,"}").replace(oh,"^")}function Dr(t){return Fo(t).replace(rh,"%2B").replace(iv,"+").replace(ih,"%23").replace(Qy,"%26").replace(nv,"`").replace(lh,"{").replace(ch,"}").replace(oh,"^")}function ov(t){return Dr(t).replace(Jy,"%3D")}function lv(t){return Fo(t).replace(ih,"%23").replace(Zy,"%3F")}function cv(t){return t==null?"":lv(t).replace(Xy,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function av(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(rh," "),o=r.indexOf("="),l=hi(o<0?r:r.slice(0,o)),c=o<0?null:hi(r.slice(o+1));if(l in e){let a=e[l];Ye(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function mc(t){let e="";for(let n in t){const s=t[n];if(n=ov(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(r=>r&&Dr(r)):[s&&Dr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function uv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const hv=Symbol(""),yc=Symbol(""),Bo=Symbol(""),ah=Symbol(""),kr=Symbol("");function $n(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function It(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Rn(4,{from:n,to:e})):h instanceof Error?l(h):ky(h)?l(Rn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Zi(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(fv(l)){const a=(l.__vccOpts||l)[e];a&&i.push(It(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=my(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&It(f,n,s,r,o)()}))}}return i}function fv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vc(t){const e=Rt(Bo),n=Rt(ah),s=Be(()=>e.resolve(_n(t.to))),i=Be(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Sn.bind(null,u));if(f>-1)return f;const _=Ec(c[a-2]);return a>1&&Ec(u)===_&&h[h.length-1].path!==_?h.findIndex(Sn.bind(null,c[a-2])):f}),r=Be(()=>i.value>-1&&gv(n.params,s.value.params)),o=Be(()=>i.value>-1&&i.value===n.matched.length-1&&Zu(n.params,s.value.params));function l(c={}){return _v(c)?e[_n(t.replace)?"replace":"push"](_n(t.to)).catch(Jn):Promise.resolve()}return{route:s,href:Be(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const dv=sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vc,setup(t,{slots:e}){const n=Es(vc(t)),{options:s}=Rt(Bo),i=Be(()=>({[Cc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),pv=dv;function _v(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ye(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ec(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cc=(t,e,n)=>t!=null?t:e!=null?e:n,mv=sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(kr),i=Be(()=>t.route||s.value),r=Rt(yc,0),o=Be(()=>{let a=_n(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Be(()=>i.value.matched[o.value]);Bs(yc,Be(()=>o.value+1)),Bs(hv,l),Bs(kr,i);const c=Zh();return Us(()=>[c.value,l.value,t.name],([a,u,h],[f,_,m])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Sn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(x=>x(a))},{flush:"post"}),()=>{const a=i.value,u=l.value,h=u&&u.components[t.name],f=t.name;if(!h)return bc(n.default,{Component:h,route:a});const _=u.props[t.name],m=_?_===!0?a.params:typeof _=="function"?_(a):_:null,R=wa(h,ne({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return bc(n.default,{Component:R,route:a})||R}}});function bc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yv=mv;function vv(t){const e=qy(t.routes,t),n=t.parseQuery||av,s=t.stringifyQuery||mc,i=t.history,r=$n(),o=$n(),l=$n(),c=ef(Et);let a=Et;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xi.bind(null,y=>""+y),h=Xi.bind(null,cv),f=Xi.bind(null,hi);function _(y,O){let S,M;return th(y)?(S=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,S)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function x(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function P(y,O){if(O=ne({},O||c.value),typeof y=="string"){const H=Ji(n,y,O.path),d=e.resolve({path:H.path},O),p=i.createHref(H.fullPath);return ne(H,d,{params:f(d.params),hash:hi(H.hash),redirectedFrom:void 0,href:p})}let S;if("path"in y)S=ne({},y,{path:Ji(n,y.path,O.path).path});else{const H=ne({},y.params);for(const d in H)H[d]==null&&delete H[d];S=ne({},y,{params:h(y.params)}),O.params=h(O.params)}const M=e.resolve(S,O),Z=y.hash||"";M.params=u(f(M.params));const re=Ey(s,ne({},y,{hash:rv(Z),path:M.path})),j=i.createHref(re);return ne({fullPath:re,hash:Z,query:s===mc?uv(y.query):y.query||{}},M,{redirectedFrom:void 0,href:j})}function F(y){return typeof y=="string"?Ji(n,y,c.value.path):ne({},y)}function z(y,O){if(a!==y)return Rn(8,{from:O,to:y})}function X(y){return rt(y)}function Re(y){return X(ne(F(y),{replace:!0}))}function Ae(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),ne({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function rt(y,O){const S=a=P(y),M=c.value,Z=y.state,re=y.force,j=y.replace===!0,H=Ae(S);if(H)return rt(ne(F(H),{state:Z,force:re,replace:j}),O||S);const d=S;d.redirectedFrom=O;let p;return!re&&Cy(s,M,S)&&(p=Rn(16,{to:d,from:M}),nn(M,M,!0,!1)),(p?Promise.resolve(p):Qe(d,M)).catch(g=>Ct(g)?Ct(g,2)?g:Oe(g):ie(g,d,M)).then(g=>{if(g){if(Ct(g,2))return rt(ne(F(g.to),{state:Z,force:re,replace:j}),O||d)}else g=ot(d,M,!0,j,Z);return gt(d,M,g),g})}function Jt(y,O){const S=z(y,O);return S?Promise.reject(S):Promise.resolve()}function Qe(y,O){let S;const[M,Z,re]=Ev(y,O);S=Zi(M.reverse(),"beforeRouteLeave",y,O);for(const H of M)H.leaveGuards.forEach(d=>{S.push(It(d,y,O))});const j=Jt.bind(null,y,O);return S.push(j),on(S).then(()=>{S=[];for(const H of r.list())S.push(It(H,y,O));return S.push(j),on(S)}).then(()=>{S=Zi(Z,"beforeRouteUpdate",y,O);for(const H of Z)H.updateGuards.forEach(d=>{S.push(It(d,y,O))});return S.push(j),on(S)}).then(()=>{S=[];for(const H of y.matched)if(H.beforeEnter&&!O.matched.includes(H))if(Ye(H.beforeEnter))for(const d of H.beforeEnter)S.push(It(d,y,O));else S.push(It(H.beforeEnter,y,O));return S.push(j),on(S)}).then(()=>(y.matched.forEach(H=>H.enterCallbacks={}),S=Zi(re,"beforeRouteEnter",y,O),S.push(j),on(S))).then(()=>{S=[];for(const H of o.list())S.push(It(H,y,O));return S.push(j),on(S)}).catch(H=>Ct(H,8)?H:Promise.reject(H))}function gt(y,O,S){for(const M of l.list())M(y,O,S)}function ot(y,O,S,M,Z){const re=z(y,O);if(re)return re;const j=O===Et,H=an?history.state:{};S&&(M||j?i.replace(y.fullPath,ne({scroll:j&&H&&H.scroll},Z)):i.push(y.fullPath,Z)),c.value=y,nn(y,O,S,j),Oe()}let Ue;function Zt(){Ue||(Ue=i.listen((y,O,S)=>{if(!kn.listening)return;const M=P(y),Z=Ae(M);if(Z){rt(ne(Z,{replace:!0}),M).catch(Jn);return}a=M;const re=c.value;an&&xy(uc(re.fullPath,S.delta),Ai()),Qe(M,re).catch(j=>Ct(j,12)?j:Ct(j,2)?(rt(j.to,M).then(H=>{Ct(H,20)&&!S.delta&&S.type===vs.pop&&i.go(-1,!1)}).catch(Jn),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ie(j,M,re))).then(j=>{j=j||ot(M,re,!1),j&&(S.delta?i.go(-S.delta,!1):S.type===vs.pop&&Ct(j,20)&&i.go(-1,!1)),gt(M,re,j)}).catch(Jn)}))}let en=$n(),tn=$n(),fe;function ie(y,O,S){Oe(y);const M=tn.list();return M.length?M.forEach(Z=>Z(y,O,S)):console.error(y),Promise.reject(y)}function J(){return fe&&c.value!==Et?Promise.resolve():new Promise((y,O)=>{en.add([y,O])})}function Oe(y){return fe||(fe=!y,Zt(),en.list().forEach(([O,S])=>y?S(y):O()),en.reset()),y}function nn(y,O,S,M){const{scrollBehavior:Z}=t;if(!an||!Z)return Promise.resolve();const re=!S&&Py(uc(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Kc().then(()=>Z(y,O,re)).then(j=>j&&Ny(j)).catch(j=>ie(j,y,O))}const lt=y=>i.go(y);let Xe;const Fe=new Set,kn={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:x,resolve:P,options:t,push:X,replace:Re,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:tn.add,isReady:J,install(y){const O=this;y.component("RouterLink",pv),y.component("RouterView",yv),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(c)}),an&&!Xe&&c.value===Et&&(Xe=!0,X(i.location).catch(Z=>{}));const S={};for(const Z in Et)S[Z]=Be(()=>c.value[Z]);y.provide(Bo,O),y.provide(ah,Es(S)),y.provide(kr,c);const M=y.unmount;Fe.add(y),y.unmount=function(){Fe.delete(y),Fe.size<1&&(a=Et,Ue&&Ue(),Ue=null,c.value=Et,Xe=!1,fe=!1),M()}}};return kn}function on(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ev(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Sn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Sn(a,c))||i.push(c))}return[n,s,i]}const Cv={data(){return{userName:vn.data().userName,onUserName:function(t){let e=t.target.value,n=vn.data().userName;e.length>3?vn.data().setUserName(e):t.target.value=n}}}},bv={id:"menu"},wv=ct("h1",null,"Menu",-1),Iv=Cs("Join Game"),Tv=Cs("Create Game"),Sv=Cs("Find Pack"),Rv=Cs("Create Pack"),Nv=["value"];function xv(t,e,n,s,i,r){const o=lr("router-link");return ma(),va("div",bv,[wv,ct("ul",null,[ct("li",null,[pe(o,{to:"/joinGame"},{default:qn(()=>[Iv]),_:1})]),ct("li",null,[pe(o,{to:"/createGame"},{default:qn(()=>[Tv]),_:1})]),ct("li",null,[pe(o,{to:"/findPack"},{default:qn(()=>[Sv]),_:1})]),ct("li",null,[pe(o,{to:"/createPack"},{default:qn(()=>[Rv]),_:1})]),ct("input",{type:"text",value:i.userName,onChange:e[0]||(e[0]=l=>i.onUserName(l))},null,40,Nv)])])}const Pv=Ta(Cv,[["render",xv]]),Av=vv({history:Dy("/Quiz/"),routes:[{path:"/",name:"Menu",component:Pv},{path:"/joinGame",name:"joinGame",component:()=>Ls(()=>import("./JoinGame.6bea6f13.js"),["assets/JoinGame.6bea6f13.js","assets/JoinGame.37a37249.css"])},{path:"/createGame",name:"createGame",component:()=>Ls(()=>import("./CreateGame.1a8f1555.js"),["assets/CreateGame.1a8f1555.js","assets/CreateGame.29a1254a.css","assets/star.2046cd51.js"])},{path:"/findPack",name:"findPack",component:()=>Ls(()=>import("./FindPack.f438dba2.js"),["assets/FindPack.f438dba2.js","assets/FindPack.8e05b7bb.css","assets/star.2046cd51.js"])},{path:"/createPack",name:"createPack",component:()=>Ls(()=>import("./CreatePack.96295b42.js"),[])}]});const uh=Ad(py);uh.use(Av);uh.mount("#app");export{tt as F,Ta as _,ct as a,pe as b,va as c,Cs as d,kv as e,Mv as f,Dv as g,vn as h,Av as i,Br as n,ma as o,lr as r,Ov as t,qn as w};
