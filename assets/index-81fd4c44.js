(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();function Es(e,t){const s=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)s[n[i]]=!0;return t?i=>!!s[i.toLowerCase()]:i=>!!s[i]}function ks(e){if(L(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=Z(n)?Ci(n):ks(n);if(i)for(const r in i)t[r]=i[r]}return t}else{if(Z(e))return e;if(K(e))return e}}const ki=/;(?![^(]*\))/g,wi=/:([^]+)/,Ti=/\/\*.*?\*\//gs;function Ci(e){const t={};return e.replace(Ti,"").split(ki).forEach(s=>{if(s){const n=s.split(wi);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ws(e){let t="";if(Z(e))t=e;else if(L(e))for(let s=0;s<e.length;s++){const n=ws(e[s]);n&&(t+=n+" ")}else if(K(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Ai="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ii=Es(Ai);function Tn(e){return!!e||e===""}const Oi=e=>Z(e)?e:e==null?"":L(e)||K(e)&&(e.toString===On||!N(e.toString))?JSON.stringify(e,Cn,2):String(e),Cn=(e,t)=>t&&t.__v_isRef?Cn(e,t.value):st(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i])=>(s[`${n} =>`]=i,s),{})}:An(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!L(t)&&!Ln(t)?String(t):t,z={},tt=[],ve=()=>{},Li=()=>!1,Mi=/^on[^a-z]/,Dt=e=>Mi.test(e),Ts=e=>e.startsWith("onUpdate:"),te=Object.assign,Cs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ni=Object.prototype.hasOwnProperty,P=(e,t)=>Ni.call(e,t),L=Array.isArray,st=e=>zt(e)==="[object Map]",An=e=>zt(e)==="[object Set]",N=e=>typeof e=="function",Z=e=>typeof e=="string",As=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",In=e=>K(e)&&N(e.then)&&N(e.catch),On=Object.prototype.toString,zt=e=>On.call(e),Si=e=>zt(e).slice(8,-1),Ln=e=>zt(e)==="[object Object]",Is=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nt=Es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kt=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Fi=/-(\w)/g,rt=Kt(e=>e.replace(Fi,(t,s)=>s?s.toUpperCase():"")),Pi=/\B([A-Z])/g,ct=Kt(e=>e.replace(Pi,"-$1").toLowerCase()),Mn=Kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),es=Kt(e=>e?`on${Mn(e)}`:""),vt=(e,t)=>!Object.is(e,t),St=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Bt=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Js;const Ri=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pe;class Bi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=pe;try{return pe=this,t()}finally{pe=s}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ji(e,t=pe){t&&t.active&&t.effects.push(e)}function Hi(){return pe}const Os=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nn=e=>(e.w&Re)>0,Sn=e=>(e.n&Re)>0,Ui=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Re},Di=e=>{const{deps:t}=e;if(t.length){let s=0;for(let n=0;n<t.length;n++){const i=t[n];Nn(i)&&!Sn(i)?i.delete(e):t[s++]=i,i.w&=~Re,i.n&=~Re}t.length=s}},fs=new WeakMap;let ht=0,Re=1;const as=30;let ge;const Je=Symbol(""),us=Symbol("");class Ls{constructor(t,s=null,n){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,ji(this,n)}run(){if(!this.active)return this.fn();let t=ge,s=Se;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Se=!0,Re=1<<++ht,ht<=as?Ui(this):Vs(this),this.fn()}finally{ht<=as&&Di(this),Re=1<<--ht,ge=this.parent,Se=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(Vs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vs(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let Se=!0;const Fn=[];function ft(){Fn.push(Se),Se=!1}function at(){const e=Fn.pop();Se=e===void 0?!0:e}function re(e,t,s){if(Se&&ge){let n=fs.get(e);n||fs.set(e,n=new Map);let i=n.get(s);i||n.set(s,i=Os()),Pn(i)}}function Pn(e,t){let s=!1;ht<=as?Sn(e)||(e.n|=Re,s=!Nn(e)):s=!e.has(ge),s&&(e.add(ge),ge.deps.push(e))}function Ie(e,t,s,n,i,r){const l=fs.get(e);if(!l)return;let o=[];if(t==="clear")o=[...l.values()];else if(s==="length"&&L(e)){const a=Number(n);l.forEach((u,p)=>{(p==="length"||p>=a)&&o.push(u)})}else switch(s!==void 0&&o.push(l.get(s)),t){case"add":L(e)?Is(s)&&o.push(l.get("length")):(o.push(l.get(Je)),st(e)&&o.push(l.get(us)));break;case"delete":L(e)||(o.push(l.get(Je)),st(e)&&o.push(l.get(us)));break;case"set":st(e)&&o.push(l.get(Je));break}if(o.length===1)o[0]&&ds(o[0]);else{const a=[];for(const u of o)u&&a.push(...u);ds(Os(a))}}function ds(e,t){const s=L(e)?e:[...e];for(const n of s)n.computed&&Zs(n);for(const n of s)n.computed||Zs(n)}function Zs(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zi=Es("__proto__,__v_isRef,__isVue"),Rn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(As)),Ki=Ms(),Wi=Ms(!1,!0),$i=Ms(!0),Ys=qi();function qi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const n=R(this);for(let r=0,l=this.length;r<l;r++)re(n,"get",r+"");const i=n[t](...s);return i===-1||i===!1?n[t](...s.map(R)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){ft();const n=R(this)[t].apply(this,s);return at(),n}}),e}function Ji(e){const t=R(this);return re(t,"has",e),t.hasOwnProperty(e)}function Ms(e=!1,t=!1){return function(n,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?fr:Dn:t?Un:Hn).get(n))return n;const l=L(n);if(!e){if(l&&P(Ys,i))return Reflect.get(Ys,i,r);if(i==="hasOwnProperty")return Ji}const o=Reflect.get(n,i,r);return(As(i)?Rn.has(i):zi(i))||(e||re(n,"get",i),t)?o:ee(o)?l&&Is(i)?o:o.value:K(o)?e?zn(o):bt(o):o}}const Vi=Bn(),Zi=Bn(!0);function Bn(e=!1){return function(s,n,i,r){let l=s[n];if(lt(l)&&ee(l)&&!ee(i))return!1;if(!e&&(!jt(i)&&!lt(i)&&(l=R(l),i=R(i)),!L(s)&&ee(l)&&!ee(i)))return l.value=i,!0;const o=L(s)&&Is(n)?Number(n)<s.length:P(s,n),a=Reflect.set(s,n,i,r);return s===R(r)&&(o?vt(i,l)&&Ie(s,"set",n,i):Ie(s,"add",n,i)),a}}function Yi(e,t){const s=P(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&Ie(e,"delete",t,void 0),n}function Gi(e,t){const s=Reflect.has(e,t);return(!As(t)||!Rn.has(t))&&re(e,"has",t),s}function Qi(e){return re(e,"iterate",L(e)?"length":Je),Reflect.ownKeys(e)}const jn={get:Ki,set:Vi,deleteProperty:Yi,has:Gi,ownKeys:Qi},Xi={get:$i,set(e,t){return!0},deleteProperty(e,t){return!0}},er=te({},jn,{get:Wi,set:Zi}),Ns=e=>e,Wt=e=>Reflect.getPrototypeOf(e);function Ct(e,t,s=!1,n=!1){e=e.__v_raw;const i=R(e),r=R(t);s||(t!==r&&re(i,"get",t),re(i,"get",r));const{has:l}=Wt(i),o=n?Ns:s?Ps:_t;if(l.call(i,t))return o(e.get(t));if(l.call(i,r))return o(e.get(r));e!==i&&e.get(t)}function At(e,t=!1){const s=this.__v_raw,n=R(s),i=R(e);return t||(e!==i&&re(n,"has",e),re(n,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)}function It(e,t=!1){return e=e.__v_raw,!t&&re(R(e),"iterate",Je),Reflect.get(e,"size",e)}function Gs(e){e=R(e);const t=R(this);return Wt(t).has.call(t,e)||(t.add(e),Ie(t,"add",e,e)),this}function Qs(e,t){t=R(t);const s=R(this),{has:n,get:i}=Wt(s);let r=n.call(s,e);r||(e=R(e),r=n.call(s,e));const l=i.call(s,e);return s.set(e,t),r?vt(t,l)&&Ie(s,"set",e,t):Ie(s,"add",e,t),this}function Xs(e){const t=R(this),{has:s,get:n}=Wt(t);let i=s.call(t,e);i||(e=R(e),i=s.call(t,e)),n&&n.call(t,e);const r=t.delete(e);return i&&Ie(t,"delete",e,void 0),r}function en(){const e=R(this),t=e.size!==0,s=e.clear();return t&&Ie(e,"clear",void 0,void 0),s}function Ot(e,t){return function(n,i){const r=this,l=r.__v_raw,o=R(l),a=t?Ns:e?Ps:_t;return!e&&re(o,"iterate",Je),l.forEach((u,p)=>n.call(i,a(u),a(p),r))}}function Lt(e,t,s){return function(...n){const i=this.__v_raw,r=R(i),l=st(r),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,u=i[e](...n),p=s?Ns:t?Ps:_t;return!t&&re(r,"iterate",a?us:Je),{next(){const{value:y,done:E}=u.next();return E?{value:y,done:E}:{value:o?[p(y[0]),p(y[1])]:p(y),done:E}},[Symbol.iterator](){return this}}}}function Me(e){return function(...t){return e==="delete"?!1:this}}function tr(){const e={get(r){return Ct(this,r)},get size(){return It(this)},has:At,add:Gs,set:Qs,delete:Xs,clear:en,forEach:Ot(!1,!1)},t={get(r){return Ct(this,r,!1,!0)},get size(){return It(this)},has:At,add:Gs,set:Qs,delete:Xs,clear:en,forEach:Ot(!1,!0)},s={get(r){return Ct(this,r,!0)},get size(){return It(this,!0)},has(r){return At.call(this,r,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Ot(!0,!1)},n={get(r){return Ct(this,r,!0,!0)},get size(){return It(this,!0)},has(r){return At.call(this,r,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Ot(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Lt(r,!1,!1),s[r]=Lt(r,!0,!1),t[r]=Lt(r,!1,!0),n[r]=Lt(r,!0,!0)}),[e,s,t,n]}const[sr,nr,ir,rr]=tr();function Ss(e,t){const s=t?e?rr:ir:e?nr:sr;return(n,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(P(s,i)&&i in n?s:n,i,r)}const lr={get:Ss(!1,!1)},or={get:Ss(!1,!0)},cr={get:Ss(!0,!1)},Hn=new WeakMap,Un=new WeakMap,Dn=new WeakMap,fr=new WeakMap;function ar(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ur(e){return e.__v_skip||!Object.isExtensible(e)?0:ar(Si(e))}function bt(e){return lt(e)?e:Fs(e,!1,jn,lr,Hn)}function dr(e){return Fs(e,!1,er,or,Un)}function zn(e){return Fs(e,!0,Xi,cr,Dn)}function Fs(e,t,s,n,i){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const l=ur(e);if(l===0)return e;const o=new Proxy(e,l===2?n:s);return i.set(e,o),o}function nt(e){return lt(e)?nt(e.__v_raw):!!(e&&e.__v_isReactive)}function lt(e){return!!(e&&e.__v_isReadonly)}function jt(e){return!!(e&&e.__v_isShallow)}function Kn(e){return nt(e)||lt(e)}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function Wn(e){return Bt(e,"__v_skip",!0),e}const _t=e=>K(e)?bt(e):e,Ps=e=>K(e)?zn(e):e;function $n(e){Se&&ge&&(e=R(e),Pn(e.dep||(e.dep=Os())))}function qn(e,t){e=R(e);const s=e.dep;s&&ds(s)}function ee(e){return!!(e&&e.__v_isRef===!0)}function Qe(e){return pr(e,!1)}function pr(e,t){return ee(e)?e:new hr(e,t)}class hr{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:R(t),this._value=s?t:_t(t)}get value(){return $n(this),this._value}set value(t){const s=this.__v_isShallow||jt(t)||lt(t);t=s?t:R(t),vt(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:_t(t),qn(this))}}function gr(e){return ee(e)?e.value:e}const mr={get:(e,t,s)=>gr(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return ee(i)&&!ee(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function Jn(e){return nt(e)?e:new Proxy(e,mr)}var Vn;class vr{constructor(t,s,n,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Vn]=!1,this._dirty=!0,this.effect=new Ls(t,()=>{this._dirty||(this._dirty=!0,qn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const t=R(this);return $n(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Vn="__v_isReadonly";function br(e,t,s=!1){let n,i;const r=N(e);return r?(n=e,i=ve):(n=e.get,i=e.set),new vr(n,i,r||!i,s)}function Fe(e,t,s,n){let i;try{i=n?e(...n):e()}catch(r){$t(r,t,s)}return i}function ue(e,t,s,n){if(N(e)){const r=Fe(e,t,s,n);return r&&In(r)&&r.catch(l=>{$t(l,t,s)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(ue(e[r],t,s,n));return i}function $t(e,t,s,n=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const l=t.proxy,o=s;for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,o)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){Fe(a,null,10,[e,l,o]);return}}_r(e,s,i,n)}function _r(e,t,s,n=!0){console.error(e)}let yt=!1,ps=!1;const X=[];let ke=0;const it=[];let Ce=null,Ke=0;const Zn=Promise.resolve();let Rs=null;function yr(e){const t=Rs||Zn;return e?t.then(this?e.bind(this):e):t}function xr(e){let t=ke+1,s=X.length;for(;t<s;){const n=t+s>>>1;xt(X[n])<e?t=n+1:s=n}return t}function Bs(e){(!X.length||!X.includes(e,yt&&e.allowRecurse?ke+1:ke))&&(e.id==null?X.push(e):X.splice(xr(e.id),0,e),Yn())}function Yn(){!yt&&!ps&&(ps=!0,Rs=Zn.then(Qn))}function Er(e){const t=X.indexOf(e);t>ke&&X.splice(t,1)}function kr(e){L(e)?it.push(...e):(!Ce||!Ce.includes(e,e.allowRecurse?Ke+1:Ke))&&it.push(e),Yn()}function tn(e,t=yt?ke+1:0){for(;t<X.length;t++){const s=X[t];s&&s.pre&&(X.splice(t,1),t--,s())}}function Gn(e){if(it.length){const t=[...new Set(it)];if(it.length=0,Ce){Ce.push(...t);return}for(Ce=t,Ce.sort((s,n)=>xt(s)-xt(n)),Ke=0;Ke<Ce.length;Ke++)Ce[Ke]();Ce=null,Ke=0}}const xt=e=>e.id==null?1/0:e.id,wr=(e,t)=>{const s=xt(e)-xt(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function Qn(e){ps=!1,yt=!0,X.sort(wr);const t=ve;try{for(ke=0;ke<X.length;ke++){const s=X[ke];s&&s.active!==!1&&Fe(s,null,14)}}finally{ke=0,X.length=0,Gn(),yt=!1,Rs=null,(X.length||it.length)&&Qn()}}function Tr(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||z;let i=s;const r=t.startsWith("update:"),l=r&&t.slice(7);if(l&&l in n){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:y,trim:E}=n[p]||z;E&&(i=s.map(I=>Z(I)?I.trim():I)),y&&(i=s.map(cs))}let o,a=n[o=es(t)]||n[o=es(rt(t))];!a&&r&&(a=n[o=es(ct(t))]),a&&ue(a,e,6,i);const u=n[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ue(u,e,6,i)}}function Xn(e,t,s=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const r=e.emits;let l={},o=!1;if(!N(e)){const a=u=>{const p=Xn(u,t,!0);p&&(o=!0,te(l,p))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!o?(K(e)&&n.set(e,null),null):(L(r)?r.forEach(a=>l[a]=null):te(l,r),K(e)&&n.set(e,l),l)}function qt(e,t){return!e||!Dt(t)?!1:(t=t.slice(2).replace(/Once$/,""),P(e,t[0].toLowerCase()+t.slice(1))||P(e,ct(t))||P(e,t))}let ae=null,ei=null;function Ht(e){const t=ae;return ae=e,ei=e&&e.type.__scopeId||null,t}function Cr(e,t=ae,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&dn(-1);const r=Ht(t);let l;try{l=e(...i)}finally{Ht(r),n._d&&dn(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function ts(e){const{type:t,vnode:s,proxy:n,withProxy:i,props:r,propsOptions:[l],slots:o,attrs:a,emit:u,render:p,renderCache:y,data:E,setupState:I,ctx:B,inheritAttrs:x}=e;let j,A;const G=Ht(e);try{if(s.shapeFlag&4){const W=i||n;j=Ee(p.call(W,W,y,r,I,E,B)),A=a}else{const W=t;j=Ee(W.length>1?W(r,{attrs:a,slots:o,emit:u}):W(r,null)),A=t.props?a:Ar(a)}}catch(W){mt.length=0,$t(W,e,1),j=Pe(Ae)}let M=j;if(A&&x!==!1){const W=Object.keys(A),{shapeFlag:Q}=M;W.length&&Q&7&&(l&&W.some(Ts)&&(A=Ir(A,l)),M=Be(M,A))}return s.dirs&&(M=Be(M),M.dirs=M.dirs?M.dirs.concat(s.dirs):s.dirs),s.transition&&(M.transition=s.transition),j=M,Ht(G),j}const Ar=e=>{let t;for(const s in e)(s==="class"||s==="style"||Dt(s))&&((t||(t={}))[s]=e[s]);return t},Ir=(e,t)=>{const s={};for(const n in e)(!Ts(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Or(e,t,s){const{props:n,children:i,component:r}=e,{props:l,children:o,patchFlag:a}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?sn(n,l,u):!!l;if(a&8){const p=t.dynamicProps;for(let y=0;y<p.length;y++){const E=p[y];if(l[E]!==n[E]&&!qt(u,E))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===l?!1:n?l?sn(n,l,u):!0:!!l;return!1}function sn(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(t[r]!==e[r]&&!qt(s,r))return!0}return!1}function Lr({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const Mr=e=>e.__isSuspense;function Nr(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):kr(e)}function Sr(e,t){if(V){let s=V.provides;const n=V.parent&&V.parent.provides;n===s&&(s=V.provides=Object.create(n)),s[e]=t}}function Ft(e,t,s=!1){const n=V||ae;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return s&&N(t)?t.call(n.proxy):t}}const Mt={};function ss(e,t,s){return ti(e,t,s)}function ti(e,t,{immediate:s,deep:n,flush:i,onTrack:r,onTrigger:l}=z){const o=Hi()===(V==null?void 0:V.scope)?V:null;let a,u=!1,p=!1;if(ee(e)?(a=()=>e.value,u=jt(e)):nt(e)?(a=()=>e,n=!0):L(e)?(p=!0,u=e.some(M=>nt(M)||jt(M)),a=()=>e.map(M=>{if(ee(M))return M.value;if(nt(M))return qe(M);if(N(M))return Fe(M,o,2)})):N(e)?t?a=()=>Fe(e,o,2):a=()=>{if(!(o&&o.isUnmounted))return y&&y(),ue(e,o,3,[E])}:a=ve,t&&n){const M=a;a=()=>qe(M())}let y,E=M=>{y=A.onStop=()=>{Fe(M,o,4)}},I;if(kt)if(E=ve,t?s&&ue(t,o,3,[a(),p?[]:void 0,E]):a(),i==="sync"){const M=Ml();I=M.__watcherHandles||(M.__watcherHandles=[])}else return ve;let B=p?new Array(e.length).fill(Mt):Mt;const x=()=>{if(A.active)if(t){const M=A.run();(n||u||(p?M.some((W,Q)=>vt(W,B[Q])):vt(M,B)))&&(y&&y(),ue(t,o,3,[M,B===Mt?void 0:p&&B[0]===Mt?[]:B,E]),B=M)}else A.run()};x.allowRecurse=!!t;let j;i==="sync"?j=x:i==="post"?j=()=>ie(x,o&&o.suspense):(x.pre=!0,o&&(x.id=o.uid),j=()=>Bs(x));const A=new Ls(a,j);t?s?x():B=A.run():i==="post"?ie(A.run.bind(A),o&&o.suspense):A.run();const G=()=>{A.stop(),o&&o.scope&&Cs(o.scope.effects,A)};return I&&I.push(G),G}function Fr(e,t,s){const n=this.proxy,i=Z(e)?e.includes(".")?si(n,e):()=>n[e]:e.bind(n,n);let r;N(t)?r=t:(r=t.handler,s=t);const l=V;ot(this);const o=ti(i,r.bind(n),s);return l?ot(l):Ve(),o}function si(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}function qe(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ee(e))qe(e.value,t);else if(L(e))for(let s=0;s<e.length;s++)qe(e[s],t);else if(An(e)||st(e))e.forEach(s=>{qe(s,t)});else if(Ln(e))for(const s in e)qe(e[s],t);return e}function Pr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return li(()=>{e.isMounted=!0}),oi(()=>{e.isUnmounting=!0}),e}const fe=[Function,Array],Rr={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fe,onEnter:fe,onAfterEnter:fe,onEnterCancelled:fe,onBeforeLeave:fe,onLeave:fe,onAfterLeave:fe,onLeaveCancelled:fe,onBeforeAppear:fe,onAppear:fe,onAfterAppear:fe,onAppearCancelled:fe},setup(e,{slots:t}){const s=kl(),n=Pr();let i;return()=>{const r=t.default&&ii(t.default(),!0);if(!r||!r.length)return;let l=r[0];if(r.length>1){for(const x of r)if(x.type!==Ae){l=x;break}}const o=R(e),{mode:a}=o;if(n.isLeaving)return ns(l);const u=nn(l);if(!u)return ns(l);const p=hs(u,o,n,s);gs(u,p);const y=s.subTree,E=y&&nn(y);let I=!1;const{getTransitionKey:B}=u.type;if(B){const x=B();i===void 0?i=x:x!==i&&(i=x,I=!0)}if(E&&E.type!==Ae&&(!We(u,E)||I)){const x=hs(E,o,n,s);if(gs(E,x),a==="out-in")return n.isLeaving=!0,x.afterLeave=()=>{n.isLeaving=!1,s.update.active!==!1&&s.update()},ns(l);a==="in-out"&&u.type!==Ae&&(x.delayLeave=(j,A,G)=>{const M=ni(n,E);M[String(E.key)]=E,j._leaveCb=()=>{A(),j._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=G})}return l}}},Br=Rr;function ni(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function hs(e,t,s,n){const{appear:i,mode:r,persisted:l=!1,onBeforeEnter:o,onEnter:a,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:y,onLeave:E,onAfterLeave:I,onLeaveCancelled:B,onBeforeAppear:x,onAppear:j,onAfterAppear:A,onAppearCancelled:G}=t,M=String(e.key),W=ni(s,e),Q=(S,Y)=>{S&&ue(S,n,9,Y)},Ze=(S,Y)=>{const $=Y[1];Q(S,Y),L(S)?S.every(le=>le.length<=1)&&$():S.length<=1&&$()},Le={mode:r,persisted:l,beforeEnter(S){let Y=o;if(!s.isMounted)if(i)Y=x||o;else return;S._leaveCb&&S._leaveCb(!0);const $=W[M];$&&We(e,$)&&$.el._leaveCb&&$.el._leaveCb(),Q(Y,[S])},enter(S){let Y=a,$=u,le=p;if(!s.isMounted)if(i)Y=j||a,$=A||u,le=G||p;else return;let be=!1;const we=S._enterCb=ut=>{be||(be=!0,ut?Q(le,[S]):Q($,[S]),Le.delayedLeave&&Le.delayedLeave(),S._enterCb=void 0)};Y?Ze(Y,[S,we]):we()},leave(S,Y){const $=String(e.key);if(S._enterCb&&S._enterCb(!0),s.isUnmounting)return Y();Q(y,[S]);let le=!1;const be=S._leaveCb=we=>{le||(le=!0,Y(),we?Q(B,[S]):Q(I,[S]),S._leaveCb=void 0,W[$]===e&&delete W[$])};W[$]=e,E?Ze(E,[S,be]):be()},clone(S){return hs(S,t,s,n)}};return Le}function ns(e){if(Jt(e))return e=Be(e),e.children=null,e}function nn(e){return Jt(e)?e.children?e.children[0]:void 0:e}function gs(e,t){e.shapeFlag&6&&e.component?gs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ii(e,t=!1,s){let n=[],i=0;for(let r=0;r<e.length;r++){let l=e[r];const o=s==null?l.key:String(s)+String(l.key!=null?l.key:r);l.type===he?(l.patchFlag&128&&i++,n=n.concat(ii(l.children,t,o))):(t||l.type!==Ae)&&n.push(o!=null?Be(l,{key:o}):l)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const Pt=e=>!!e.type.__asyncLoader,Jt=e=>e.type.__isKeepAlive;function jr(e,t){ri(e,"a",t)}function Hr(e,t){ri(e,"da",t)}function ri(e,t,s=V){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vt(t,n,s),s){let i=s.parent;for(;i&&i.parent;)Jt(i.parent.vnode)&&Ur(n,t,s,i),i=i.parent}}function Ur(e,t,s,n){const i=Vt(t,e,n,!0);ci(()=>{Cs(n[t],i)},s)}function Vt(e,t,s=V,n=!1){if(s){const i=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;ft(),ot(s);const o=ue(t,s,e,l);return Ve(),at(),o});return n?i.unshift(r):i.push(r),r}}const Oe=e=>(t,s=V)=>(!kt||e==="sp")&&Vt(e,(...n)=>t(...n),s),Dr=Oe("bm"),li=Oe("m"),zr=Oe("bu"),Kr=Oe("u"),oi=Oe("bum"),ci=Oe("um"),Wr=Oe("sp"),$r=Oe("rtg"),qr=Oe("rtc");function Jr(e,t=V){Vt("ec",e,t)}function rn(e,t){const s=ae;if(s===null)return e;const n=Gt(s)||s.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,o,a,u=z]=t[r];l&&(N(l)&&(l={mounted:l,updated:l}),l.deep&&qe(o),i.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:u}))}return e}function Ue(e,t,s,n){const i=e.dirs,r=t&&t.dirs;for(let l=0;l<i.length;l++){const o=i[l];r&&(o.oldValue=r[l].value);let a=o.dir[n];a&&(ft(),ue(a,s,8,[e.el,o,e,t]),at())}}const Vr=Symbol();function Zr(e,t,s,n){let i;const r=s&&s[n];if(L(e)||Z(e)){i=new Array(e.length);for(let l=0,o=e.length;l<o;l++)i[l]=t(e[l],l,void 0,r&&r[l])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,r&&r[l])}else if(K(e))if(e[Symbol.iterator])i=Array.from(e,(l,o)=>t(l,o,void 0,r&&r[o]));else{const l=Object.keys(e);i=new Array(l.length);for(let o=0,a=l.length;o<a;o++){const u=l[o];i[o]=t(e[u],u,o,r&&r[o])}}else i=[];return s&&(s[n]=i),i}const ms=e=>e?_i(e)?Gt(e)||e.proxy:ms(e.parent):null,gt=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ms(e.parent),$root:e=>ms(e.root),$emit:e=>e.emit,$options:e=>js(e),$forceUpdate:e=>e.f||(e.f=()=>Bs(e.update)),$nextTick:e=>e.n||(e.n=yr.bind(e.proxy)),$watch:e=>Fr.bind(e)}),is=(e,t)=>e!==z&&!e.__isScriptSetup&&P(e,t),Yr={get({_:e},t){const{ctx:s,setupState:n,data:i,props:r,accessCache:l,type:o,appContext:a}=e;let u;if(t[0]!=="$"){const I=l[t];if(I!==void 0)switch(I){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return r[t]}else{if(is(n,t))return l[t]=1,n[t];if(i!==z&&P(i,t))return l[t]=2,i[t];if((u=e.propsOptions[0])&&P(u,t))return l[t]=3,r[t];if(s!==z&&P(s,t))return l[t]=4,s[t];vs&&(l[t]=0)}}const p=gt[t];let y,E;if(p)return t==="$attrs"&&re(e,"get",t),p(e);if((y=o.__cssModules)&&(y=y[t]))return y;if(s!==z&&P(s,t))return l[t]=4,s[t];if(E=a.config.globalProperties,P(E,t))return E[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:r}=e;return is(i,t)?(i[t]=s,!0):n!==z&&P(n,t)?(n[t]=s,!0):P(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,propsOptions:r}},l){let o;return!!s[l]||e!==z&&P(e,l)||is(t,l)||(o=r[0])&&P(o,l)||P(n,l)||P(gt,l)||P(i.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:P(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let vs=!0;function Gr(e){const t=js(e),s=e.proxy,n=e.ctx;vs=!1,t.beforeCreate&&ln(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:l,watch:o,provide:a,inject:u,created:p,beforeMount:y,mounted:E,beforeUpdate:I,updated:B,activated:x,deactivated:j,beforeDestroy:A,beforeUnmount:G,destroyed:M,unmounted:W,render:Q,renderTracked:Ze,renderTriggered:Le,errorCaptured:S,serverPrefetch:Y,expose:$,inheritAttrs:le,components:be,directives:we,filters:ut}=t;if(u&&Qr(u,n,null,e.appContext.config.unwrapInjectedRef),l)for(const q in l){const U=l[q];N(U)&&(n[q]=U.bind(s))}if(i){const q=i.call(s,s);K(q)&&(e.data=bt(q))}if(vs=!0,r)for(const q in r){const U=r[q],je=N(U)?U.bind(s,s):N(U.get)?U.get.bind(s,s):ve,wt=!N(U)&&N(U.set)?U.set.bind(s):ve,He=Ol({get:je,set:wt});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>He.value,set:_e=>He.value=_e})}if(o)for(const q in o)fi(o[q],n,s,q);if(a){const q=N(a)?a.call(s):a;Reflect.ownKeys(q).forEach(U=>{Sr(U,q[U])})}p&&ln(p,e,"c");function se(q,U){L(U)?U.forEach(je=>q(je.bind(s))):U&&q(U.bind(s))}if(se(Dr,y),se(li,E),se(zr,I),se(Kr,B),se(jr,x),se(Hr,j),se(Jr,S),se(qr,Ze),se($r,Le),se(oi,G),se(ci,W),se(Wr,Y),L($))if($.length){const q=e.exposed||(e.exposed={});$.forEach(U=>{Object.defineProperty(q,U,{get:()=>s[U],set:je=>s[U]=je})})}else e.exposed||(e.exposed={});Q&&e.render===ve&&(e.render=Q),le!=null&&(e.inheritAttrs=le),be&&(e.components=be),we&&(e.directives=we)}function Qr(e,t,s=ve,n=!1){L(e)&&(e=bs(e));for(const i in e){const r=e[i];let l;K(r)?"default"in r?l=Ft(r.from||i,r.default,!0):l=Ft(r.from||i):l=Ft(r),ee(l)&&n?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[i]=l}}function ln(e,t,s){ue(L(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function fi(e,t,s,n){const i=n.includes(".")?si(s,n):()=>s[n];if(Z(e)){const r=t[e];N(r)&&ss(i,r)}else if(N(e))ss(i,e.bind(s));else if(K(e))if(L(e))e.forEach(r=>fi(r,t,s,n));else{const r=N(e.handler)?e.handler.bind(s):t[e.handler];N(r)&&ss(i,r,e)}}function js(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let a;return o?a=o:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(u=>Ut(a,u,l,!0)),Ut(a,t,l)),K(t)&&r.set(t,a),a}function Ut(e,t,s,n=!1){const{mixins:i,extends:r}=t;r&&Ut(e,r,s,!0),i&&i.forEach(l=>Ut(e,l,s,!0));for(const l in t)if(!(n&&l==="expose")){const o=Xr[l]||s&&s[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const Xr={data:on,props:ze,emits:ze,methods:ze,computed:ze,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:ze,directives:ze,watch:tl,provide:on,inject:el};function on(e,t){return t?e?function(){return te(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function el(e,t){return ze(bs(e),bs(t))}function bs(e){if(L(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function ze(e,t){return e?te(te(Object.create(null),e),t):t}function tl(e,t){if(!e)return t;if(!t)return e;const s=te(Object.create(null),e);for(const n in t)s[n]=ne(e[n],t[n]);return s}function sl(e,t,s,n=!1){const i={},r={};Bt(r,Yt,1),e.propsDefaults=Object.create(null),ai(e,t,i,r);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);s?e.props=n?i:dr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function nl(e,t,s,n){const{props:i,attrs:r,vnode:{patchFlag:l}}=e,o=R(i),[a]=e.propsOptions;let u=!1;if((n||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let y=0;y<p.length;y++){let E=p[y];if(qt(e.emitsOptions,E))continue;const I=t[E];if(a)if(P(r,E))I!==r[E]&&(r[E]=I,u=!0);else{const B=rt(E);i[B]=_s(a,o,B,I,e,!1)}else I!==r[E]&&(r[E]=I,u=!0)}}}else{ai(e,t,i,r)&&(u=!0);let p;for(const y in o)(!t||!P(t,y)&&((p=ct(y))===y||!P(t,p)))&&(a?s&&(s[y]!==void 0||s[p]!==void 0)&&(i[y]=_s(a,o,y,void 0,e,!0)):delete i[y]);if(r!==o)for(const y in r)(!t||!P(t,y))&&(delete r[y],u=!0)}u&&Ie(e,"set","$attrs")}function ai(e,t,s,n){const[i,r]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(Nt(a))continue;const u=t[a];let p;i&&P(i,p=rt(a))?!r||!r.includes(p)?s[p]=u:(o||(o={}))[p]=u:qt(e.emitsOptions,a)||(!(a in n)||u!==n[a])&&(n[a]=u,l=!0)}if(r){const a=R(s),u=o||z;for(let p=0;p<r.length;p++){const y=r[p];s[y]=_s(i,a,y,u[y],e,!P(u,y))}}return l}function _s(e,t,s,n,i,r){const l=e[s];if(l!=null){const o=P(l,"default");if(o&&n===void 0){const a=l.default;if(l.type!==Function&&N(a)){const{propsDefaults:u}=i;s in u?n=u[s]:(ot(i),n=u[s]=a.call(null,t),Ve())}else n=a}l[0]&&(r&&!o?n=!1:l[1]&&(n===""||n===ct(s))&&(n=!0))}return n}function ui(e,t,s=!1){const n=t.propsCache,i=n.get(e);if(i)return i;const r=e.props,l={},o=[];let a=!1;if(!N(e)){const p=y=>{a=!0;const[E,I]=ui(y,t,!0);te(l,E),I&&o.push(...I)};!s&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!a)return K(e)&&n.set(e,tt),tt;if(L(r))for(let p=0;p<r.length;p++){const y=rt(r[p]);cn(y)&&(l[y]=z)}else if(r)for(const p in r){const y=rt(p);if(cn(y)){const E=r[p],I=l[y]=L(E)||N(E)?{type:E}:Object.assign({},E);if(I){const B=un(Boolean,I.type),x=un(String,I.type);I[0]=B>-1,I[1]=x<0||B<x,(B>-1||P(I,"default"))&&o.push(y)}}}const u=[l,o];return K(e)&&n.set(e,u),u}function cn(e){return e[0]!=="$"}function fn(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function an(e,t){return fn(e)===fn(t)}function un(e,t){return L(t)?t.findIndex(s=>an(s,e)):N(t)&&an(t,e)?0:-1}const di=e=>e[0]==="_"||e==="$stable",Hs=e=>L(e)?e.map(Ee):[Ee(e)],il=(e,t,s)=>{if(t._n)return t;const n=Cr((...i)=>Hs(t(...i)),s);return n._c=!1,n},pi=(e,t,s)=>{const n=e._ctx;for(const i in e){if(di(i))continue;const r=e[i];if(N(r))t[i]=il(i,r,n);else if(r!=null){const l=Hs(r);t[i]=()=>l}}},hi=(e,t)=>{const s=Hs(t);e.slots.default=()=>s},rl=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=R(t),Bt(t,"_",s)):pi(t,e.slots={})}else e.slots={},t&&hi(e,t);Bt(e.slots,Yt,1)},ll=(e,t,s)=>{const{vnode:n,slots:i}=e;let r=!0,l=z;if(n.shapeFlag&32){const o=t._;o?s&&o===1?r=!1:(te(i,t),!s&&o===1&&delete i._):(r=!t.$stable,pi(t,i)),l=t}else t&&(hi(e,t),l={default:1});if(r)for(const o in i)!di(o)&&!(o in l)&&delete i[o]};function gi(){return{app:null,config:{isNativeTag:Li,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ol=0;function cl(e,t){return function(n,i=null){N(n)||(n=Object.assign({},n)),i!=null&&!K(i)&&(i=null);const r=gi(),l=new Set;let o=!1;const a=r.app={_uid:ol++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Nl,get config(){return r.config},set config(u){},use(u,...p){return l.has(u)||(u&&N(u.install)?(l.add(u),u.install(a,...p)):N(u)&&(l.add(u),u(a,...p))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,p){return p?(r.components[u]=p,a):r.components[u]},directive(u,p){return p?(r.directives[u]=p,a):r.directives[u]},mount(u,p,y){if(!o){const E=Pe(n,i);return E.appContext=r,p&&t?t(E,u):e(E,u,y),o=!0,a._container=u,u.__vue_app__=a,Gt(E.component)||E.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,p){return r.provides[u]=p,a}};return a}}function ys(e,t,s,n,i=!1){if(L(e)){e.forEach((E,I)=>ys(E,t&&(L(t)?t[I]:t),s,n,i));return}if(Pt(n)&&!i)return;const r=n.shapeFlag&4?Gt(n.component)||n.component.proxy:n.el,l=i?null:r,{i:o,r:a}=e,u=t&&t.r,p=o.refs===z?o.refs={}:o.refs,y=o.setupState;if(u!=null&&u!==a&&(Z(u)?(p[u]=null,P(y,u)&&(y[u]=null)):ee(u)&&(u.value=null)),N(a))Fe(a,o,12,[l,p]);else{const E=Z(a),I=ee(a);if(E||I){const B=()=>{if(e.f){const x=E?P(y,a)?y[a]:p[a]:a.value;i?L(x)&&Cs(x,r):L(x)?x.includes(r)||x.push(r):E?(p[a]=[r],P(y,a)&&(y[a]=p[a])):(a.value=[r],e.k&&(p[e.k]=a.value))}else E?(p[a]=l,P(y,a)&&(y[a]=l)):I&&(a.value=l,e.k&&(p[e.k]=l))};l?(B.id=-1,ie(B,s)):B()}}}const ie=Nr;function fl(e){return al(e)}function al(e,t){const s=Ri();s.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:l,createText:o,createComment:a,setText:u,setElementText:p,parentNode:y,nextSibling:E,setScopeId:I=ve,insertStaticContent:B}=e,x=(c,f,d,g=null,h=null,b=null,k=!1,v=null,_=!!f.dynamicChildren)=>{if(c===f)return;c&&!We(c,f)&&(g=Tt(c),_e(c,h,b,!0),c=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:m,ref:T,shapeFlag:w}=f;switch(m){case Zt:j(c,f,d,g);break;case Ae:A(c,f,d,g);break;case rs:c==null&&G(f,d,g,k);break;case he:be(c,f,d,g,h,b,k,v,_);break;default:w&1?Q(c,f,d,g,h,b,k,v,_):w&6?we(c,f,d,g,h,b,k,v,_):(w&64||w&128)&&m.process(c,f,d,g,h,b,k,v,_,Ye)}T!=null&&h&&ys(T,c&&c.ref,b,f||c,!f)},j=(c,f,d,g)=>{if(c==null)n(f.el=o(f.children),d,g);else{const h=f.el=c.el;f.children!==c.children&&u(h,f.children)}},A=(c,f,d,g)=>{c==null?n(f.el=a(f.children||""),d,g):f.el=c.el},G=(c,f,d,g)=>{[c.el,c.anchor]=B(c.children,f,d,g,c.el,c.anchor)},M=({el:c,anchor:f},d,g)=>{let h;for(;c&&c!==f;)h=E(c),n(c,d,g),c=h;n(f,d,g)},W=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=E(c),i(c),c=d;i(f)},Q=(c,f,d,g,h,b,k,v,_)=>{k=k||f.type==="svg",c==null?Ze(f,d,g,h,b,k,v,_):Y(c,f,h,b,k,v,_)},Ze=(c,f,d,g,h,b,k,v)=>{let _,m;const{type:T,props:w,shapeFlag:C,transition:O,dirs:F}=c;if(_=c.el=l(c.type,b,w&&w.is,w),C&8?p(_,c.children):C&16&&S(c.children,_,null,g,h,b&&T!=="foreignObject",k,v),F&&Ue(c,null,g,"created"),Le(_,c,c.scopeId,k,g),w){for(const H in w)H!=="value"&&!Nt(H)&&r(_,H,null,w[H],b,c.children,g,h,Te);"value"in w&&r(_,"value",null,w.value),(m=w.onVnodeBeforeMount)&&xe(m,g,c)}F&&Ue(c,null,g,"beforeMount");const D=(!h||h&&!h.pendingBranch)&&O&&!O.persisted;D&&O.beforeEnter(_),n(_,f,d),((m=w&&w.onVnodeMounted)||D||F)&&ie(()=>{m&&xe(m,g,c),D&&O.enter(_),F&&Ue(c,null,g,"mounted")},h)},Le=(c,f,d,g,h)=>{if(d&&I(c,d),g)for(let b=0;b<g.length;b++)I(c,g[b]);if(h){let b=h.subTree;if(f===b){const k=h.vnode;Le(c,k,k.scopeId,k.slotScopeIds,h.parent)}}},S=(c,f,d,g,h,b,k,v,_=0)=>{for(let m=_;m<c.length;m++){const T=c[m]=v?Ne(c[m]):Ee(c[m]);x(null,T,f,d,g,h,b,k,v)}},Y=(c,f,d,g,h,b,k)=>{const v=f.el=c.el;let{patchFlag:_,dynamicChildren:m,dirs:T}=f;_|=c.patchFlag&16;const w=c.props||z,C=f.props||z;let O;d&&De(d,!1),(O=C.onVnodeBeforeUpdate)&&xe(O,d,f,c),T&&Ue(f,c,d,"beforeUpdate"),d&&De(d,!0);const F=h&&f.type!=="foreignObject";if(m?$(c.dynamicChildren,m,v,d,g,F,b):k||U(c,f,v,null,d,g,F,b,!1),_>0){if(_&16)le(v,f,w,C,d,g,h);else if(_&2&&w.class!==C.class&&r(v,"class",null,C.class,h),_&4&&r(v,"style",w.style,C.style,h),_&8){const D=f.dynamicProps;for(let H=0;H<D.length;H++){const J=D[H],de=w[J],Ge=C[J];(Ge!==de||J==="value")&&r(v,J,de,Ge,h,c.children,d,g,Te)}}_&1&&c.children!==f.children&&p(v,f.children)}else!k&&m==null&&le(v,f,w,C,d,g,h);((O=C.onVnodeUpdated)||T)&&ie(()=>{O&&xe(O,d,f,c),T&&Ue(f,c,d,"updated")},g)},$=(c,f,d,g,h,b,k)=>{for(let v=0;v<f.length;v++){const _=c[v],m=f[v],T=_.el&&(_.type===he||!We(_,m)||_.shapeFlag&70)?y(_.el):d;x(_,m,T,null,g,h,b,k,!0)}},le=(c,f,d,g,h,b,k)=>{if(d!==g){if(d!==z)for(const v in d)!Nt(v)&&!(v in g)&&r(c,v,d[v],null,k,f.children,h,b,Te);for(const v in g){if(Nt(v))continue;const _=g[v],m=d[v];_!==m&&v!=="value"&&r(c,v,m,_,k,f.children,h,b,Te)}"value"in g&&r(c,"value",d.value,g.value)}},be=(c,f,d,g,h,b,k,v,_)=>{const m=f.el=c?c.el:o(""),T=f.anchor=c?c.anchor:o("");let{patchFlag:w,dynamicChildren:C,slotScopeIds:O}=f;O&&(v=v?v.concat(O):O),c==null?(n(m,d,g),n(T,d,g),S(f.children,d,T,h,b,k,v,_)):w>0&&w&64&&C&&c.dynamicChildren?($(c.dynamicChildren,C,d,h,b,k,v),(f.key!=null||h&&f===h.subTree)&&mi(c,f,!0)):U(c,f,d,T,h,b,k,v,_)},we=(c,f,d,g,h,b,k,v,_)=>{f.slotScopeIds=v,c==null?f.shapeFlag&512?h.ctx.activate(f,d,g,k,_):ut(f,d,g,h,b,k,_):Ds(c,f,_)},ut=(c,f,d,g,h,b,k)=>{const v=c.component=El(c,g,h);if(Jt(c)&&(v.ctx.renderer=Ye),wl(v),v.asyncDep){if(h&&h.registerDep(v,se),!c.el){const _=v.subTree=Pe(Ae);A(null,_,f,d)}return}se(v,c,f,d,h,b,k)},Ds=(c,f,d)=>{const g=f.component=c.component;if(Or(c,f,d))if(g.asyncDep&&!g.asyncResolved){q(g,f,d);return}else g.next=f,Er(g.update),g.update();else f.el=c.el,g.vnode=f},se=(c,f,d,g,h,b,k)=>{const v=()=>{if(c.isMounted){let{next:T,bu:w,u:C,parent:O,vnode:F}=c,D=T,H;De(c,!1),T?(T.el=F.el,q(c,T,k)):T=F,w&&St(w),(H=T.props&&T.props.onVnodeBeforeUpdate)&&xe(H,O,T,F),De(c,!0);const J=ts(c),de=c.subTree;c.subTree=J,x(de,J,y(de.el),Tt(de),c,h,b),T.el=J.el,D===null&&Lr(c,J.el),C&&ie(C,h),(H=T.props&&T.props.onVnodeUpdated)&&ie(()=>xe(H,O,T,F),h)}else{let T;const{el:w,props:C}=f,{bm:O,m:F,parent:D}=c,H=Pt(f);if(De(c,!1),O&&St(O),!H&&(T=C&&C.onVnodeBeforeMount)&&xe(T,D,f),De(c,!0),w&&Xt){const J=()=>{c.subTree=ts(c),Xt(w,c.subTree,c,h,null)};H?f.type.__asyncLoader().then(()=>!c.isUnmounted&&J()):J()}else{const J=c.subTree=ts(c);x(null,J,d,g,c,h,b),f.el=J.el}if(F&&ie(F,h),!H&&(T=C&&C.onVnodeMounted)){const J=f;ie(()=>xe(T,D,J),h)}(f.shapeFlag&256||D&&Pt(D.vnode)&&D.vnode.shapeFlag&256)&&c.a&&ie(c.a,h),c.isMounted=!0,f=d=g=null}},_=c.effect=new Ls(v,()=>Bs(m),c.scope),m=c.update=()=>_.run();m.id=c.uid,De(c,!0),m()},q=(c,f,d)=>{f.component=c;const g=c.vnode.props;c.vnode=f,c.next=null,nl(c,f.props,g,d),ll(c,f.children,d),ft(),tn(),at()},U=(c,f,d,g,h,b,k,v,_=!1)=>{const m=c&&c.children,T=c?c.shapeFlag:0,w=f.children,{patchFlag:C,shapeFlag:O}=f;if(C>0){if(C&128){wt(m,w,d,g,h,b,k,v,_);return}else if(C&256){je(m,w,d,g,h,b,k,v,_);return}}O&8?(T&16&&Te(m,h,b),w!==m&&p(d,w)):T&16?O&16?wt(m,w,d,g,h,b,k,v,_):Te(m,h,b,!0):(T&8&&p(d,""),O&16&&S(w,d,g,h,b,k,v,_))},je=(c,f,d,g,h,b,k,v,_)=>{c=c||tt,f=f||tt;const m=c.length,T=f.length,w=Math.min(m,T);let C;for(C=0;C<w;C++){const O=f[C]=_?Ne(f[C]):Ee(f[C]);x(c[C],O,d,null,h,b,k,v,_)}m>T?Te(c,h,b,!0,!1,w):S(f,d,g,h,b,k,v,_,w)},wt=(c,f,d,g,h,b,k,v,_)=>{let m=0;const T=f.length;let w=c.length-1,C=T-1;for(;m<=w&&m<=C;){const O=c[m],F=f[m]=_?Ne(f[m]):Ee(f[m]);if(We(O,F))x(O,F,d,null,h,b,k,v,_);else break;m++}for(;m<=w&&m<=C;){const O=c[w],F=f[C]=_?Ne(f[C]):Ee(f[C]);if(We(O,F))x(O,F,d,null,h,b,k,v,_);else break;w--,C--}if(m>w){if(m<=C){const O=C+1,F=O<T?f[O].el:g;for(;m<=C;)x(null,f[m]=_?Ne(f[m]):Ee(f[m]),d,F,h,b,k,v,_),m++}}else if(m>C)for(;m<=w;)_e(c[m],h,b,!0),m++;else{const O=m,F=m,D=new Map;for(m=F;m<=C;m++){const oe=f[m]=_?Ne(f[m]):Ee(f[m]);oe.key!=null&&D.set(oe.key,m)}let H,J=0;const de=C-F+1;let Ge=!1,Ws=0;const dt=new Array(de);for(m=0;m<de;m++)dt[m]=0;for(m=O;m<=w;m++){const oe=c[m];if(J>=de){_e(oe,h,b,!0);continue}let ye;if(oe.key!=null)ye=D.get(oe.key);else for(H=F;H<=C;H++)if(dt[H-F]===0&&We(oe,f[H])){ye=H;break}ye===void 0?_e(oe,h,b,!0):(dt[ye-F]=m+1,ye>=Ws?Ws=ye:Ge=!0,x(oe,f[ye],d,null,h,b,k,v,_),J++)}const $s=Ge?ul(dt):tt;for(H=$s.length-1,m=de-1;m>=0;m--){const oe=F+m,ye=f[oe],qs=oe+1<T?f[oe+1].el:g;dt[m]===0?x(null,ye,d,qs,h,b,k,v,_):Ge&&(H<0||m!==$s[H]?He(ye,d,qs,2):H--)}}},He=(c,f,d,g,h=null)=>{const{el:b,type:k,transition:v,children:_,shapeFlag:m}=c;if(m&6){He(c.component.subTree,f,d,g);return}if(m&128){c.suspense.move(f,d,g);return}if(m&64){k.move(c,f,d,Ye);return}if(k===he){n(b,f,d);for(let w=0;w<_.length;w++)He(_[w],f,d,g);n(c.anchor,f,d);return}if(k===rs){M(c,f,d);return}if(g!==2&&m&1&&v)if(g===0)v.beforeEnter(b),n(b,f,d),ie(()=>v.enter(b),h);else{const{leave:w,delayLeave:C,afterLeave:O}=v,F=()=>n(b,f,d),D=()=>{w(b,()=>{F(),O&&O()})};C?C(b,F,D):D()}else n(b,f,d)},_e=(c,f,d,g=!1,h=!1)=>{const{type:b,props:k,ref:v,children:_,dynamicChildren:m,shapeFlag:T,patchFlag:w,dirs:C}=c;if(v!=null&&ys(v,null,d,c,!0),T&256){f.ctx.deactivate(c);return}const O=T&1&&C,F=!Pt(c);let D;if(F&&(D=k&&k.onVnodeBeforeUnmount)&&xe(D,f,c),T&6)Ei(c.component,d,g);else{if(T&128){c.suspense.unmount(d,g);return}O&&Ue(c,null,f,"beforeUnmount"),T&64?c.type.remove(c,f,d,h,Ye,g):m&&(b!==he||w>0&&w&64)?Te(m,f,d,!1,!0):(b===he&&w&384||!h&&T&16)&&Te(_,f,d),g&&zs(c)}(F&&(D=k&&k.onVnodeUnmounted)||O)&&ie(()=>{D&&xe(D,f,c),O&&Ue(c,null,f,"unmounted")},d)},zs=c=>{const{type:f,el:d,anchor:g,transition:h}=c;if(f===he){xi(d,g);return}if(f===rs){W(c);return}const b=()=>{i(d),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:v}=h,_=()=>k(d,b);v?v(c.el,b,_):_()}else b()},xi=(c,f)=>{let d;for(;c!==f;)d=E(c),i(c),c=d;i(f)},Ei=(c,f,d)=>{const{bum:g,scope:h,update:b,subTree:k,um:v}=c;g&&St(g),h.stop(),b&&(b.active=!1,_e(k,c,f,d)),v&&ie(v,f),ie(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Te=(c,f,d,g=!1,h=!1,b=0)=>{for(let k=b;k<c.length;k++)_e(c[k],f,d,g,h)},Tt=c=>c.shapeFlag&6?Tt(c.component.subTree):c.shapeFlag&128?c.suspense.next():E(c.anchor||c.el),Ks=(c,f,d)=>{c==null?f._vnode&&_e(f._vnode,null,null,!0):x(f._vnode||null,c,f,null,null,null,d),tn(),Gn(),f._vnode=c},Ye={p:x,um:_e,m:He,r:zs,mt:ut,mc:S,pc:U,pbc:$,n:Tt,o:e};let Qt,Xt;return t&&([Qt,Xt]=t(Ye)),{render:Ks,hydrate:Qt,createApp:cl(Ks,Qt)}}function De({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function mi(e,t,s=!1){const n=e.children,i=t.children;if(L(n)&&L(i))for(let r=0;r<n.length;r++){const l=n[r];let o=i[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[r]=Ne(i[r]),o.el=l.el),s||mi(l,o)),o.type===Zt&&(o.el=l.el)}}function ul(e){const t=e.slice(),s=[0];let n,i,r,l,o;const a=e.length;for(n=0;n<a;n++){const u=e[n];if(u!==0){if(i=s[s.length-1],e[i]<u){t[n]=i,s.push(n);continue}for(r=0,l=s.length-1;r<l;)o=r+l>>1,e[s[o]]<u?r=o+1:l=o;u<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=t[l];return s}const dl=e=>e.__isTeleport,he=Symbol(void 0),Zt=Symbol(void 0),Ae=Symbol(void 0),rs=Symbol(void 0),mt=[];let me=null;function Xe(e=!1){mt.push(me=e?null:[])}function pl(){mt.pop(),me=mt[mt.length-1]||null}let Et=1;function dn(e){Et+=e}function vi(e){return e.dynamicChildren=Et>0?me||tt:null,pl(),Et>0&&me&&me.push(e),e}function pt(e,t,s,n,i,r){return vi(ce(e,t,s,n,i,r,!0))}function hl(e,t,s,n,i){return vi(Pe(e,t,s,n,i,!0))}function gl(e){return e?e.__v_isVNode===!0:!1}function We(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",bi=({key:e})=>e??null,Rt=({ref:e,ref_key:t,ref_for:s})=>e!=null?Z(e)||ee(e)||N(e)?{i:ae,r:e,k:t,f:!!s}:e:null;function ce(e,t=null,s=null,n=0,i=null,r=e===he?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bi(t),ref:t&&Rt(t),scopeId:ei,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ae};return o?(Us(a,s),r&128&&e.normalize(a)):s&&(a.shapeFlag|=Z(s)?8:16),Et>0&&!l&&me&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&me.push(a),a}const Pe=ml;function ml(e,t=null,s=null,n=0,i=null,r=!1){if((!e||e===Vr)&&(e=Ae),gl(e)){const o=Be(e,t,!0);return s&&Us(o,s),Et>0&&!r&&me&&(o.shapeFlag&6?me[me.indexOf(e)]=o:me.push(o)),o.patchFlag|=-2,o}if(Il(e)&&(e=e.__vccOpts),t){t=vl(t);let{class:o,style:a}=t;o&&!Z(o)&&(t.class=ws(o)),K(a)&&(Kn(a)&&!L(a)&&(a=te({},a)),t.style=ks(a))}const l=Z(e)?1:Mr(e)?128:dl(e)?64:K(e)?4:N(e)?2:0;return ce(e,t,s,n,i,l,r,!0)}function vl(e){return e?Kn(e)||Yt in e?te({},e):e:null}function Be(e,t,s=!1){const{props:n,ref:i,patchFlag:r,children:l}=e,o=t?_l(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&bi(o),ref:t&&t.ref?s&&i?L(i)?i.concat(Rt(t)):[i,Rt(t)]:Rt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Be(e.ssContent),ssFallback:e.ssFallback&&Be(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bl(e=" ",t=0){return Pe(Zt,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?Pe(Ae):L(e)?Pe(he,null,e.slice()):typeof e=="object"?Ne(e):Pe(Zt,null,String(e))}function Ne(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Be(e)}function Us(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(L(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Us(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!(Yt in t)?t._ctx=ae:i===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:ae},s=32):(t=String(t),n&64?(s=16,t=[bl(t)]):s=8);e.children=t,e.shapeFlag|=s}function _l(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=ws([t.class,n.class]));else if(i==="style")t.style=ks([t.style,n.style]);else if(Dt(i)){const r=t[i],l=n[i];l&&r!==l&&!(L(r)&&r.includes(l))&&(t[i]=r?[].concat(r,l):l)}else i!==""&&(t[i]=n[i])}return t}function xe(e,t,s,n=null){ue(e,t,7,[s,n])}const yl=gi();let xl=0;function El(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||yl,r={uid:xl++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ui(n,i),emitsOptions:Xn(n,i),emit:null,emitted:null,propsDefaults:z,inheritAttrs:n.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Tr.bind(null,r),e.ce&&e.ce(r),r}let V=null;const kl=()=>V||ae,ot=e=>{V=e,e.scope.on()},Ve=()=>{V&&V.scope.off(),V=null};function _i(e){return e.vnode.shapeFlag&4}let kt=!1;function wl(e,t=!1){kt=t;const{props:s,children:n}=e.vnode,i=_i(e);sl(e,s,i,t),rl(e,n);const r=i?Tl(e,t):void 0;return kt=!1,r}function Tl(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Wn(new Proxy(e.ctx,Yr));const{setup:n}=s;if(n){const i=e.setupContext=n.length>1?Al(e):null;ot(e),ft();const r=Fe(n,e,0,[e.props,i]);if(at(),Ve(),In(r)){if(r.then(Ve,Ve),t)return r.then(l=>{pn(e,l,t)}).catch(l=>{$t(l,e,0)});e.asyncDep=r}else pn(e,r,t)}else yi(e,t)}function pn(e,t,s){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=Jn(t)),yi(e,s)}let hn;function yi(e,t,s){const n=e.type;if(!e.render){if(!t&&hn&&!n.render){const i=n.template||js(e).template;if(i){const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:o,compilerOptions:a}=n,u=te(te({isCustomElement:r,delimiters:o},l),a);n.render=hn(i,u)}}e.render=n.render||ve}ot(e),ft(),Gr(e),at(),Ve()}function Cl(e){return new Proxy(e.attrs,{get(t,s){return re(e,"get","$attrs"),t[s]}})}function Al(e){const t=n=>{e.exposed=n||{}};let s;return{get attrs(){return s||(s=Cl(e))},slots:e.slots,emit:e.emit,expose:t}}function Gt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jn(Wn(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in gt)return gt[s](e)},has(t,s){return s in t||s in gt}}))}function Il(e){return N(e)&&"__vccOpts"in e}const Ol=(e,t)=>br(e,t,kt),Ll=Symbol(""),Ml=()=>Ft(Ll),Nl="3.2.47",Sl="http://www.w3.org/2000/svg",$e=typeof document<"u"?document:null,gn=$e&&$e.createElement("template"),Fl={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t?$e.createElementNS(Sl,e):$e.createElement(e,s?{is:s}:void 0);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,r){const l=s?s.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===r||!(i=i.nextSibling)););else{gn.innerHTML=n?`<svg>${e}</svg>`:e;const o=gn.content;if(n){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Pl(e,t,s){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function Rl(e,t,s){const n=e.style,i=Z(s);if(s&&!i){if(t&&!Z(t))for(const r in t)s[r]==null&&xs(n,r,"");for(const r in s)xs(n,r,s[r])}else{const r=n.display;i?t!==s&&(n.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=r)}}const mn=/\s*!important$/;function xs(e,t,s){if(L(s))s.forEach(n=>xs(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Bl(e,t);mn.test(s)?e.setProperty(ct(n),s.replace(mn,""),"important"):e[n]=s}}const vn=["Webkit","Moz","ms"],ls={};function Bl(e,t){const s=ls[t];if(s)return s;let n=rt(t);if(n!=="filter"&&n in e)return ls[t]=n;n=Mn(n);for(let i=0;i<vn.length;i++){const r=vn[i]+n;if(r in e)return ls[t]=r}return t}const bn="http://www.w3.org/1999/xlink";function jl(e,t,s,n,i){if(n&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(bn,t.slice(6,t.length)):e.setAttributeNS(bn,t,s);else{const r=Ii(t);s==null||r&&!Tn(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function Hl(e,t,s,n,i,r,l){if(t==="innerHTML"||t==="textContent"){n&&l(n,i,r),e[t]=s??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const a=s??"";(e.value!==a||e.tagName==="OPTION")&&(e.value=a),s==null&&e.removeAttribute(t);return}let o=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Tn(s):s==null&&a==="string"?(s="",o=!0):a==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(t)}function et(e,t,s,n){e.addEventListener(t,s,n)}function Ul(e,t,s,n){e.removeEventListener(t,s,n)}function Dl(e,t,s,n,i=null){const r=e._vei||(e._vei={}),l=r[t];if(n&&l)l.value=n;else{const[o,a]=zl(t);if(n){const u=r[t]=$l(n,i);et(e,o,u,a)}else l&&(Ul(e,o,l,a),r[t]=void 0)}}const _n=/(?:Once|Passive|Capture)$/;function zl(e){let t;if(_n.test(e)){t={};let n;for(;n=e.match(_n);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ct(e.slice(2)),t]}let os=0;const Kl=Promise.resolve(),Wl=()=>os||(Kl.then(()=>os=0),os=Date.now());function $l(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ue(ql(n,s.value),t,5,[n])};return s.value=e,s.attached=Wl(),s}function ql(e,t){if(L(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const yn=/^on[a-z]/,Jl=(e,t,s,n,i=!1,r,l,o,a)=>{t==="class"?Pl(e,n,i):t==="style"?Rl(e,s,n):Dt(t)?Ts(t)||Dl(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vl(e,t,n,i))?Hl(e,t,n,r,l,o,a):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),jl(e,t,n,i))};function Vl(e,t,s,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&yn.test(t)&&N(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||yn.test(t)&&Z(s)?!1:t in e}const Zl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Br.props;const xn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?s=>St(t,s):t};function Yl(e){e.target.composing=!0}function En(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kn={created(e,{modifiers:{lazy:t,trim:s,number:n}},i){e._assign=xn(i);const r=n||i.props&&i.props.type==="number";et(e,t?"change":"input",l=>{if(l.target.composing)return;let o=e.value;s&&(o=o.trim()),r&&(o=cs(o)),e._assign(o)}),s&&et(e,"change",()=>{e.value=e.value.trim()}),t||(et(e,"compositionstart",Yl),et(e,"compositionend",En),et(e,"change",En))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:n,number:i}},r){if(e._assign=xn(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||n&&e.value.trim()===t||(i||e.type==="number")&&cs(e.value)===t))return;const l=t??"";e.value!==l&&(e.value=l)}},Gl=te({patchProp:Jl},Fl);let wn;function Ql(){return wn||(wn=fl(Gl))}const Xl=(...e)=>{const t=Ql().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=eo(n);if(!i)return;const r=t._component;!N(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const l=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function eo(e){return Z(e)?document.querySelector(e):e}const to=`<div class="kore">
        <div class="kore-body">
          <div class="announcement-bar">
            <p class="announcement-bar__message">
              🌼 Frühlingsverkauf 🍃Kostenloser Versand ab €60 ✨
            </p>
          </div>
          <a href="#kore-product">
            <img
              class="img-responsive center-block hidden-xs"
              style="width: 100%"
              src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/lQDPJxogRZd1tKLNAvTNB4CwsakYaAPtJFAETGJYAAADAA_1920_756.jpg?v=1683275994"
            />
            <img
              class="img-responsive center-block visible-xs"
              style="width: 100%"
              src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/lQDPJwDm3AWN9KLNBIfNAu6wpGxoV1r1yYYETGJX_cAWAA_750_1159.jpg?v=1683275994"
            />
          </a>
          <div
            class="kore-wysiwyg-content"
            style="
              background: url('https://cdn.shopify.com/s/files/1/0726/6150/0206/files/27f02b63a1c3bd3e91cf10e35cfa18dc.jpg?v=1683275816');
            "
          >
            <div class="container">
              <img
                class="img-responsive center-block"
                src="https://cdn.shopify.com/s/files/1/0225/4818/5162/files/ia_33.png?v=1618388544"
              />
              <p style="color: #fff">
                "Guter Schneider! Mehr als ich erwartet hatte."
              </p>
              <p><span style="color: #fff">——Anton J.</span></p>
            </div>
          </div>
          <div class="kore-advantage-block">
            <div class="container">
              <h2>ERLEDIGEN SIE ALLES IN SEKUNDENSCHNELLE</h2>
              <h5>SCHNELLER &amp; SICHERER</h5>
              <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3">
                  <div class="kore-advantage-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/2a.png?v=1683275796"
                    />
                    <h3>SCHARFE KLINGE</h3>
                  </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3">
                  <div class="kore-advantage-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/2b.png?v=1683275795"
                    />
                    <h3>EINFACH ZU BENUTZEN</h3>
                  </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3">
                  <div class="kore-advantage-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/2c.png?v=1683275796"
                    />
                    <h3>SCHNELLES SCHNEIDEN</h3>
                  </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3">
                  <div class="kore-advantage-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/2d.png?v=1683275795"
                    />
                    <h3>ALLGEMEINES MODELL</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row kore-product-info">
              <div class="col-xs-12 col-sm-6 kore-product-left">
                <div id="gallery">
                  <div id="gallery_output">
                    <img
                      id="img1"
                      class="img-responsive"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/1_a4f5c439-f833-410a-b76d-c75dc3ef4df9.jpg?v=1683275841"
                    />
                  </div>
                  <div id="gallery_nav">
                    <a rel="img1"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/1_a4f5c439-f833-410a-b76d-c75dc3ef4df9.jpg?v=1683275841"
                    /></a>
                    <a rel="img2"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/2_fa9994ff-18ec-4c6b-b4fc-b115eb2cdee0.jpg?v=1683275841"
                    /></a>
                    <a rel="img3"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/3_ae3beaf7-bc31-48d4-9912-601630a7b53c.jpg?v=1683275841"
                    /></a>
                    <a rel="img4"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/4_2f897197-5d8b-434e-a770-fc2fa4793433.jpg?v=1683275841"
                    /></a>
                    <a rel="img5"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/5_0086c72f-9937-4b84-9e05-dfdf08421a7b.jpg?v=1683275841"
                    /></a>
                    <a rel="img6"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/6_a4fd9d27-9df6-4c0e-a94c-a0f6658e1ea5.jpg?v=1683275841"
                    /></a>
                    <a rel="img7"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/7_9a281f35-3148-43f3-9f7d-8117110401fc.jpg?v=1683275841"
                    /></a>
                    <a rel="img8"
                      ><img
                        class="img-responsive"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/8_da58e307-0ff4-4af9-8f67-05a5306066af.jpg?v=1683275841"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 kore-product-right">
                <div>
                  <h1
                    class="kore-product-name"
                    style="font-family: 'helveticaneue-light'"
                  >
                    <strong
                      ><a
                        href="/products/elektrische-bohrmaschine-schere-anbauschneider-nibbler?variant=44925781311790"
                        >Elektrische Bohrmaschine Schere Anbauschneider
                        Nibbler</a
                      ></strong
                    >
                  </h1>
                  <div class="kore-product-prices">
                    <span class="kore-product-compare-price">€55,99</span
                    ><span class="kore-product-price">€26,99</span
                    ><span class="kore-discount"
                      ><span class="kore-percent">BIS ZU 52% RABATT</span></span
                    >
                  </div>
                  <div class="clearfix"></div>
                  <a
                    class="kore-product-button"
                    href="#kore-product"
                    style="background: #dd741d"
                    >JA! ICH WILL JETZT BESTELLEN</a
                  >
                </div>
                <h1 class="alt-2">1h 32m 55s</h1>
                <p class="kore-text-sale">
                  Preis zurück zu €55,99 nach Verkaufsende
                </p>
                <p class="kore-text-tip">
                  🔒 Sicherer Checkout<br />📦 Versicherter DEU-Versand<br />✉️
                  24/7 Kundenbetreuung
                </p>
                <div class="right-content">
                  <img
                    class="img-responsive center-block"
                    src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/b75cc4154b81fa450d86f7c26f3f0391_1.webp?v=1683276274"
                  />
                  <ul>
                    <li>
                      <b>Sicher und langlebig:</b>
                      <span>Der Metallknabber-Bohraufsatz
                      ist aus hochwertigem Stahl und Eisen gefertigt, stark und
                      langlebig, scharf und robust, rost- und
                      korrosionsbeständig, nicht leicht zu brechen und zu
                      verformen, verschleißfest und kann für eine lange Zeit
                      verwendet werden.</span>
                    </li>
                  </ul>
                  <!-- <p style="margin-top: 15px;"><b style="color: #ff2a00;">HINWEIS: </b>Diese Artikel werden von Hand gemessen, die Größe kann von 1-3 cm, und die Farbe kann von Bildschirm zu Bildschirm variieren.</p> -->
                </div>
                <div class="kore-payment-image">
                  <img
                    class="img-responsive center-block"
                    src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/schatzda-_logo_37a0b399-47c0-4ba8-8a18-4c6e7ae1e8ef.png?v=1683276213"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="gc-headline-divider-container">
              <div class="gc-divider-style-solid"></div>
              <div class="headline-divider-block">
                <h4>WIE GESEHEN IN</h4>
              </div>
              <div class="gc-divider-style-solid"></div>
            </div>
            <div class="row gc-brand-list">
              <div class="col-xs-12">
                <img
                  class="img-responsive center-block"
                  src="https://cdn.shopify.com/s/files/1/0671/3825/7172/files/347c36125467736ffed54ecdc6db883b_1_1.jpg?v=1667290401"
                />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row" style="margin-bottom: 30px">
              <img
                class="img-responsive center-block"
                src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/3_98212d76-9483-4c1f-b566-f3e08e688178.jpg?v=1683361098"
              />
            </div>
          </div>
          <div id="kore-product" class="kore-buy">
            <div class="container">
              <h3 class="kore-product-title" style="font-weight: 600">
                MEHR KAUFEN, MEHR SPAREN!
              </h3>
              <div class="row new-chamfer">
                <div class="col-xs-12 col-md-4 col-sm-6">
                  <div class="kore-inner current-inner">
                    <h2 style="background: #dd741d">Bester Wert</h2>
                    <h3 class="pad-pc-15">2 Sätze * Universalmodell</h3>
                    <h4>56% RABATT</h4>
                    <figure>
                      <img
                        class="img-responsive center-block"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/4-_a.jpg?v=1683275831"
                      />
                    </figure>
                    <p>
                      <img
                        src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/five_stars.png?v=1619589505"
                      />30,6Ts Bewertungen
                    </p>
                    <h5><del>€104,99</del><span>€45,99</span></h5>
                    <input
                      class="kore-variants"
                      name="id"
                      type="hidden"
                      value="45212388917550"
                    />
                    <div class="kore-qty">
                      <a class="kore-minus_btn"></a>
                      <input
                        id="quantity"
                        class="kore-txtbox"
                        min="1"
                        name="quantity"
                        type="text"
                        value="1"
                      />
                      <a class="kore-plus_btn"></a>
                    </div>
                    <a
                      class="kore-order-now kore-buttonBounce kore-checkout"
                      href="/cart/45212388917550:1"
                      style="background: #dd741d"
                    >
                      <i class="fa fa-angle-double-right fa_prepended"></i>JETZT
                      BESTELLEN<i
                        class="fa fa_appended fas fa-angle-double-left"
                      ></i>
                    </a>
                    <div class="kore-lock">
                      Gesichert und Verschlüsselt<i
                        class="fa fa-lock"
                        style="color: #28a745; font-size: 10px"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4 col-sm-6">
                  <div class="kore-inner current-inner">
                    <h2 style="background: #dd741d">Am Beliebtesten</h2>
                    <h3 class="pad-pc-15">1 Satz * Universalmodell</h3>
                    <h4>52% RABATT</h4>
                    <figure>
                      <img
                        class="img-responsive center-block"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/4-_b.jpg?v=1683275831"
                      />
                    </figure>
                    <p>
                      <img
                        src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/five_stars.png?v=1619589505"
                      />32,7Ts Bewertungen
                    </p>
                    <h5><del>€55,99</del><span>€26,99</span></h5>
                    <input
                      class="kore-variants"
                      name="id"
                      type="hidden"
                      value="44925781279022"
                    />
                    <div class="kore-qty">
                      <a class="kore-minus_btn"></a>
                      <input
                        id="quantity"
                        class="kore-txtbox"
                        min="1"
                        name="quantity"
                        type="text"
                        value="1"
                      />
                      <a class="kore-plus_btn"></a>
                    </div>
                    <a
                      class="kore-order-now kore-buttonBounce kore-checkout"
                      href="/cart/44925781279022:1"
                      style="background: #dd741d"
                    >
                      <i class="fa fa-angle-double-right fa_prepended"></i>JETZT
                      BESTELLEN<i
                        class="fa fa_appended fas fa-angle-double-left"
                      ></i>
                    </a>
                    <div class="kore-lock">
                      Gesichert und Verschlüsselt<i
                        class="fa fa-lock"
                        style="color: #28a745; font-size: 10px"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4 col-sm-6 pt-20">
                  <div class="kore-inner current-inner">
                    <h2 style="background: #000">Erlebnis-Paket</h2>
                    <h3>1 Satz * Profimodell</h3>
                    <h4>52% RABATT</h4>
                    <figure>
                      <img
                        class="img-responsive center-block"
                        src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/4-_c.jpg?v=1683275831"
                      />
                    </figure>
                    <p>
                      <img
                        src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/five_stars.png?v=1619589505"
                      />29,1Ts Bewertungen
                    </p>
                    <h5><del>€49,99</del><span>€23,99</span></h5>
                    <input
                      class="kore-variants"
                      name="id"
                      type="hidden"
                      value="44925781311790"
                    />
                    <div class="kore-qty">
                      <a class="kore-minus_btn"></a>
                      <input
                        id="quantity"
                        class="kore-txtbox"
                        min="1"
                        name="quantity"
                        type="text"
                        value="1"
                      />
                      <a class="kore-plus_btn"></a>
                    </div>
                    <a
                      class="kore-order-now kore-buttonBounce kore-checkout"
                      href="/cart/44925781311790:1"
                      style="background: #000"
                    >
                      <i class="fa fa-angle-double-right fa_prepended"></i>JETZT
                      BESTELLEN<i
                        class="fa fa_appended fas fa-angle-double-left"
                      ></i>
                    </a>
                    <div class="kore-lock">
                      Gesichert und Verschlüsselt<i
                        class="fa fa-lock"
                        style="color: #28a745; font-size: 10px"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="kore-customer-review">
            <div class="container">
              <h2 style="font-weight: 600">
                Erfahrungen von Kunden, die unser Produkt gekauft haben
              </h2>
              <div class="row">
                <div class="col-xs-12 col-sm-4">
                  <div class="kore-review-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/5a.webp?v=1683276360"
                    />
                    <div class="kore-review-item-content">
                      <h3>WUNDERBARES WERKZEUG ÜBERHAUPT</h3>
                      <h4>04. Februar 2023</h4>
                      <div class="kore-review-star">
                        <img
                          class="img-responsive"
                          src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/stars_5blk.png?v=1618388545"
                        />
                      </div>
                      <p>
                        Es schneidet eine schöne gerade Linie. Ich muss sagen,
                        dass die Kante, die sie hinterlässt, viel besser ist als
                        jede Blechschere, die ich habe. Sie ist auch viel
                        handlicher als eine Blechschere, vor allem wenn man viel
                        schneiden muss.
                      </p>
                      <p>Wolfgang R.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="kore-review-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/5b.jpg?v=1683275815"
                    />
                    <div class="kore-review-item-content">
                      <h3>EINFACH ZU BENUTZEN</h3>
                      <h4>20. Januar 2023</h4>
                      <div class="kore-review-star">
                        <img
                          class="img-responsive"
                          src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/stars_5blk.png?v=1618388545"
                        />
                      </div>
                      <p>
                        Dieser Bohrplattenschneider ist sehr einfach zu benutzen
                        und passt sicher auf jede Bohrmaschine, mit der ich ihn
                        ausprobiert habe. Er scheint für leichtere Arbeiten
                        konzipiert zu sein. Leichter Stahl, Aluminium, Gitter
                        und Stahlgewebe sollten kein Problem sein. Es ist ein
                        Wert und für den Preis, macht es Sinn, eine in den
                        Werkzeugschrank zu haben.
                      </p>
                      <p>Martin W.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="kore-review-item">
                    <img
                      class="img-responsive center-block"
                      src="https://cdn.shopifycdn.net/s/files/1/0726/6150/0206/files/5c.jpg?v=1683275815"
                    />
                    <div class="kore-review-item-content">
                      <h3>MACHT EINEN GUTEN JOB</h3>
                      <h4>17. APRIL 2023</h4>
                      <div class="kore-review-star">
                        <img
                          class="img-responsive"
                          src="https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/stars_5blk.png?v=1618388545"
                        />
                      </div>
                      <p>
                        Wir haben Bleche für die Sockelleiste eines Wohnmobils
                        montiert. Meinem Mann gefällt das sehr gut, es hilft
                        ihm, schnell zu arbeiten und eine glatte Kante zu
                        bekommen. Es schneidet sehr gut. Wir werden ein paar
                        Exemplare kaufen und sie an Freunde verschenken, weil es
                        funktioniert.
                      </p>
                      <p>Stefan H.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="kore-special-promo"
            style="
              background: url('https://cdn.shopify.com/s/files/1/0726/6150/0206/files/cb9940b3a43e6ba6246f18015b17ac5a.jpg?v=1683275816')
                center/cover no-repeat;
            "
          >
            <div class="container">
              <h2>
                <span>SPEZIAL ANGEBOT</span><br /><span>JETZT IM ANGEBOT!</span>
              </h2>
              <h3>HEUTE BESTELLEN &amp; ERHALTEN <b>56%</b> RABATT</h3>
              <p>
                Dieser Rabatt ist nur für eine begrenzte Zeit gültig.<br />Die
                Stückzahlen sind begrenzt - handeln Sie jetzt!
              </p>
              <a
                class="kore-banner-btn snow-banner-btn"
                href="#kore-product"
                style="background: #dd741d"
                ><i class="fa fa-angle-right"></i>Fordern Sie Ihren 56%
                Rabatt</a
              >
              <ul>
                <li>
                  <strong>Garantiert hohe Qualität</strong>Wir sichern alle
                  unsere Produkte mit einer vollen Geld-zurück-Garantie ab.
                </li>
                <li>
                  <strong>Unkomplizierte Rückgabe</strong>Wenn Sie mit Ihrer
                  Bestellung nicht 100% zufrieden sind, können Sie sie innerhalb
                  von 60 Tagen zurücksenden und erhalten den vollen Betrag
                  zurück.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="kore-footer">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <p class="copyright-text">
                  E-Mail:
                  <a href="mailto:customer@schatzda.de">customer@schatzda.de</a>
                </p>
                <p class="copyright-text">© 2023 Alle Rechte vorbehalten.</p>
              </div>
              <div class="col-xs-12 col-sm-6">
                <p class="copyright-area">
                  <a href="/pages/uber-uns">Über uns</a> |
                  <a href="/pages/kontaktieren-uns">Kontaktieren uns</a> |
                  <a href="/pages/fragen-antworten">Fragen &amp; Antworten</a> |
                  <a href="/pages/datenschutz">Datenschutz</a> |
                  <a href="/pages/ruckgabe-ersatz">Rückgabe</a> |
                  <a href="/pages/versand-verfugbarkeit">Versand</a> |
                  <a href="/pages/agb">AGB</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;const so={class:"template-container"},no={class:"options"},io={class:"template"},ro=["innerHTML"],lo={class:"config"},oo={class:"form-label"},co=["onUpdate:modelValue"],fo=["onUpdate:modelValue"],ao={__name:"TemplateContainer",setup(e){const t=Qe("");t.value=to;const s=Qe(null),n=()=>{const x=document.createElement("a");document.body.appendChild(x);const j=URL.createObjectURL(new Blob([s.value.outerHTML],{type:"text/plain;charset='utf-8'"}));x.href=j,x.download=name+".html",x.click(),window.URL.revokeObjectURL(j)},i=Qe(null),r=Qe(""),l=()=>{let x=new FileReader;const j=i.value.files;x.readAsText(j[0],"UTF-8"),x.onload=A=>{A.target.result.includes("</style>")?r.value=A.target.result.split("</style>")[1]:r.value=A.target.result,t.value=r.value}},o=Qe(null),a=bt([{label:"图片地址/文字",key:"text"},{label:"背景色",key:"backgroundColor"},{label:"字体大小",key:"fontSize"},{label:"字体颜色",key:"color"}]),u=bt({text:"",backgroundColor:"",fontSize:"",color:""});window.addEventListener("click",x=>{if(y(x.target,"template")){o.value=x.target;const j=window.getComputedStyle(o.value);a.forEach(A=>{A.key!=="text"&&(u[A.key]=j[A.key])}),o.value.tagName==="IMG"?u.text=o.value.getAttribute("src"):u.text=o.value.innerText}});const p=Qe(null);window.addEventListener("mousemove",x=>{if(y(x.target,"template")){if(p.value===x.target)return;p.value!==null&&p.value.classList.remove("is-selected"),p.value=x.target,p.value.classList.add("is-selected"),console.log(x.target)}});const y=(x,j)=>{let A=x;for(;A!==null;){if(A.classList&&A.classList.contains(j))return A;A=A.parentNode}return!1},E=()=>{if(o.value&&o.value!==null){const x=o.value.cloneNode(!0);o.value.parentNode.appendChild(x)}},I=()=>{o.value&&o.value!==null&&(o.value.remove(),o.value=null,Object.keys(u).forEach(x=>{u[x]=""}))},B=()=>{o.value&&o.value!==null&&(a.forEach(x=>{o.value.style[x.key]=u[x.key]}),o.value.tagName==="IMG"?o.value.setAttribute("src",u.text):o.value.innerText=u.text)};return(x,j)=>(Xe(),pt("div",so,[ce("div",no,[ce("button",{onClick:n},"downloadHTML"),ce("input",{style:{border:"none",padding:"0","margin-top":"10px"},accept:".html",type:"file",id:"file",ref_key:"file",ref:i,onChange:l},null,544)]),ce("div",io,[ce("div",{innerHTML:t.value,ref_key:"ele",ref:s},null,8,ro)]),ce("div",lo,[(Xe(!0),pt(he,null,Zr(a,A=>(Xe(),pt("div",{key:A.key,class:"form-item"},[ce("div",oo,Oi(A.label),1),A.key==="text"?rn((Xe(),pt("textarea",{key:0,style:{width:"100%"},rows:"10","onUpdate:modelValue":G=>u[A.key]=G},null,8,co)),[[kn,u[A.key]]]):rn((Xe(),pt("input",{key:1,type:"text",class:"form-ipt","onUpdate:modelValue":G=>u[A.key]=G},null,8,fo)),[[kn,u[A.key]]])]))),128)),ce("div",{class:"btn-list"},[ce("button",{class:"btn second-btn",onClick:E},"增加当前项"),ce("button",{class:"btn second-btn",onClick:I},"删除当前项")]),ce("button",{class:"btn primary-btn",onClick:B},"submit")])]))}},uo={__name:"App",setup(e){return(t,s)=>(Xe(),hl(ao))}};Xl(uo).mount("#app");const po=document.querySelectorAll("a");po.forEach(e=>{e.addEventListener("click",t=>{console.log(t),t.preventDefault()})});
