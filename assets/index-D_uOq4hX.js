(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const ut=!1;var qt=Array.isArray,Pn=Array.prototype.indexOf,st=Array.from,Mn=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,In=Object.prototype,On=Array.prototype,wt=Object.getPrototypeOf,Mt=Object.isExtensible;function Ln(e){return e()}function dt(e){for(var t=0;t<e.length;t++)e[t]()}function Yt(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const D=2,Gt=4,ot=8,Rn=1<<24,ve=16,pe=32,Ie=64,lt=128,Q=512,j=1024,q=2048,se=4096,G=8192,ue=16384,bt=32768,je=65536,It=1<<17,Kt=1<<18,Ve=1<<19,Xt=1<<20,me=1<<25,Ce=32768,vt=1<<21,xt=1<<22,we=1<<23,ze=Symbol("$state"),Nn=Symbol("legacy props"),Fn=Symbol(""),Re=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Dn=11;function zn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function jn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Wn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Bn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Un(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Yn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Kn(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Xn=1,$n=2,Zn=16,Jn=1,Qn=2,er=4,tr=8,nr=16,rr=1,ir=2,z=Symbol(),ar="http://www.w3.org/1999/xhtml";function sr(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function $t(e){return e===this.v}function or(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zt(e){return!or(e,this.v)}let qe=!1,lr=!1;function fr(){qe=!0}let O=null;function We(e){O=e}function ee(e,t=!1,n){O={p:O,i:!1,c:null,e:null,s:e,x:null,l:qe&&!t?{s:null,u:null,$:[]}:null}}function te(e){var t=O,n=t.e;if(n!==null){t.e=null;for(var r of n)dn(r)}return t.i=!0,O=t.p,{}}function Ze(){return!qe||O!==null&&O.l===null}let Ne=[];function cr(){var e=Ne;Ne=[],dt(e)}function ft(e){if(Ne.length===0){var t=Ne;queueMicrotask(()=>{t===Ne&&cr()})}Ne.push(e)}function Jt(e){var t=E;if(t===null)return b.f|=we,e;if((t.f&bt)===0){if((t.f&lt)===0)throw e;t.b.error(e)}else Be(e,t)}function Be(e,t){for(;t!==null;){if((t.f&lt)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e}const et=new Set;let A=null,Z=null,re=[],Et=null,pt=!1;class ie{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#r=0;#n=0;#l=null;#a=new Set;#i=new Set;skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(t){re=[],this.apply();var n={parent:null,effect:null,effects:[],render_effects:[]};for(const r of t)this.#s(r,n);this.is_fork||this.#c(),this.is_deferred()?(this.#o(n.effects),this.#o(n.render_effects)):(A=null,Ot(n.render_effects),Ot(n.effects),this.#l?.resolve()),Z=null}#s(t,n){t.f^=j;for(var r=t.first;r!==null;){var a=r.f,i=(a&(pe|Ie))!==0,s=i&&(a&j)!==0,l=s||(a&G)!==0||this.skipped_effects.has(r);if((r.f&lt)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[]}),!l&&r.fn!==null){i?r.f^=j:(a&Gt)!==0?n.effects.push(r):Qe(r)&&((r.f&ve)!==0&&this.#a.add(r),$e(r));var o=r.first;if(o!==null){r=o;continue}}var f=r.parent;for(r=r.next;r===null&&f!==null;)f===n.effect&&(this.#o(n.effects),this.#o(n.render_effects),n=n.parent),r=f.next,f=f.parent}}#o(t){for(const n of t)(n.f&q)!==0?this.#a.add(n):(n.f&se)!==0&&this.#i.add(n),this.#f(n.deps),W(n,j)}#f(t){if(t!==null)for(const n of t)(n.f&D)===0||(n.f&Ce)===0||(n.f^=Ce,this.#f(n.deps))}capture(t,n){this.previous.has(t)||this.previous.set(t,n),(t.f&we)===0&&(this.current.set(t,t.v),Z?.set(t,t.v))}activate(){A=this,this.apply()}deactivate(){A===this&&(A=null,Z=null)}flush(){if(this.activate(),re.length>0){if(ur(),A!==null&&A!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#t)t(this);this.#t.clear()}#c(){if(this.#n===0){for(const t of this.#e)t();this.#e.clear()}this.#r===0&&this.#u()}#u(){if(et.size>1){this.previous.clear();var t=Z,n=!0,r={parent:null,effect:null,effects:[],render_effects:[]};for(const i of et){if(i===this){n=!1;continue}const s=[];for(const[o,f]of this.current){if(i.current.has(o))if(n&&f!==i.current.get(o))i.current.set(o,f);else continue;s.push(o)}if(s.length===0)continue;const l=[...i.current.keys()].filter(o=>!this.current.has(o));if(l.length>0){var a=re;re=[];const o=new Set,f=new Map;for(const c of s)Qt(c,l,o,f);if(re.length>0){A=i,i.apply();for(const c of re)i.#s(c,r);i.deactivate()}re=a}}A=null,Z=t}this.committed=!0,et.delete(this)}increment(t){this.#r+=1,t&&(this.#n+=1)}decrement(t){this.#r-=1,t&&(this.#n-=1),this.revive()}revive(){for(const t of this.#a)this.#i.delete(t),W(t,q),Ae(t);for(const t of this.#i)W(t,se),Ae(t);this.flush()}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#l??=Yt()).promise}static ensure(){if(A===null){const t=A=new ie;et.add(A),ie.enqueue(()=>{A===t&&t.flush()})}return A}static enqueue(t){ft(t)}apply(){}}function ur(){var e=ke;pt=!0;var t=null;try{var n=0;for(it(!0);re.length>0;){var r=ie.ensure();if(n++>1e3){var a,i;dr()}r.process(re),be.clear()}}finally{pt=!1,it(e),Et=null}}function dr(){try{Vn()}catch(e){Be(e,Et)}}let ce=null;function Ot(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(ue|G))===0&&Qe(r)&&(ce=new Set,$e(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?_n(r):r.fn=null),ce?.size>0)){be.clear();for(const a of ce){if((a.f&(ue|G))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)ce.has(s)&&(ce.delete(s),i.push(s)),s=s.parent;for(let l=i.length-1;l>=0;l--){const o=i[l];(o.f&(ue|G))===0&&$e(o)}}ce.clear()}}ce=null}}function Qt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&D)!==0?Qt(a,t,n,r):(i&(xt|ve))!==0&&(i&q)===0&&en(a,t,r)&&(W(a,q),Ae(a))}}function en(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(t.includes(a))return!0;if((a.f&D)!==0&&en(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Ae(e){for(var t=Et=e;t.parent!==null;){t=t.parent;var n=t.f;if(pt&&t===E&&(n&ve)!==0&&(n&Kt)===0)return;if((n&(Ie|pe))!==0){if((n&j)===0)return;t.f^=j}}re.push(t)}function vr(e){let t=0,n=Pe(0),r;return()=>{Ke()&&(h(n),Pr(()=>(t===0&&(r=g(()=>e(()=>Ge(n)))),t+=1,()=>{ft(()=>{t-=1,t===0&&(r?.(),r=void 0,Ge(n))})})))}}var pr=je|Ve|lt;function hr(e,t,n){new _r(e,t,n)}class _r{parent;#e=!1;#t;#r=null;#n;#l;#a;#i=null;#s=null;#o=null;#f=null;#c=null;#u=0;#d=0;#p=!1;#v=null;#y=vr(()=>(this.#v=Pe(this.#u),()=>{this.#v=null}));constructor(t,n,r){this.#t=t,this.#n=n,this.#l=r,this.parent=E.b,this.#e=!!this.#n.pending,this.#a=At(()=>{E.b=this;{var a=this.#g();try{this.#i=X(()=>r(a))}catch(i){this.error(i)}this.#d>0?this.#_():this.#e=!1}return()=>{this.#c?.remove()}},pr)}#w(){try{this.#i=X(()=>this.#l(this.#t))}catch(t){this.error(t)}this.#e=!1}#b(){const t=this.#n.pending;t&&(this.#s=X(()=>t(this.#t)),ie.enqueue(()=>{var n=this.#g();this.#i=this.#h(()=>(ie.ensure(),X(()=>this.#l(n)))),this.#d>0?this.#_():(Se(this.#s,()=>{this.#s=null}),this.#e=!1)}))}#g(){var t=this.#t;return this.#e&&(this.#c=Ee(),this.#t.before(this.#c),t=this.#c),t}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#h(t){var n=E,r=b,a=O;oe(this.#a),U(this.#a),We(this.#a.ctx);try{return t()}catch(i){return Jt(i),null}finally{oe(n),U(r),We(a)}}#_(){const t=this.#n.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),this.#f.append(this.#c),yn(this.#i,this.#f)),this.#s===null&&(this.#s=X(()=>t(this.#t)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#s&&Se(this.#s,()=>{this.#s=null}),this.#f&&(this.#t.before(this.#f),this.#f=null))}update_pending_count(t){this.#m(t),this.#u+=t,this.#v&&Ue(this.#v,this.#u)}get_effect_pending(){return this.#y(),h(this.#v)}error(t){var n=this.#n.onerror;let r=this.#n.failed;if(this.#p||!n&&!r)throw t;this.#i&&(V(this.#i),this.#i=null),this.#s&&(V(this.#s),this.#s=null),this.#o&&(V(this.#o),this.#o=null);var a=!1,i=!1;const s=()=>{if(a){sr();return}a=!0,i&&Kn(),ie.ensure(),this.#u=0,this.#o!==null&&Se(this.#o,()=>{this.#o=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#p=!1,X(()=>this.#l(this.#t)))),this.#d>0?this.#_():this.#e=!1};var l=b;try{U(null),i=!0,n?.(t,s),i=!1}catch(o){Be(o,this.#a&&this.#a.parent)}finally{U(l)}r&&ft(()=>{this.#o=this.#h(()=>{ie.ensure(),this.#p=!0;try{return X(()=>{r(this.#t,()=>t,()=>s)})}catch(o){return Be(o,this.#a.parent),null}finally{this.#p=!1}})})}}function gr(e,t,n,r){const a=Ze()?ct:St;if(n.length===0&&e.length===0){r(t.map(a));return}var i=A,s=E,l=mr();function o(){Promise.all(n.map(f=>yr(f))).then(f=>{l();try{r([...t.map(a),...f])}catch(c){(s.f&ue)===0&&Be(c,s)}i?.deactivate(),rt()}).catch(f=>{Be(f,s)})}e.length>0?Promise.all(e).then(()=>{l();try{return o()}finally{i?.deactivate(),rt()}}):o()}function mr(){var e=E,t=b,n=O,r=A;return function(i=!0){oe(e),U(t),We(n),i&&r?.activate()}}function rt(){oe(null),U(null),We(null)}function ct(e){var t=D|q,n=b!==null&&(b.f&D)!==0?b:null;return E!==null&&(E.f|=Ve),{ctx:O,deps:null,effects:null,equals:$t,f:t,fn:e,reactions:null,rv:0,v:z,wv:0,parent:n??E,ac:null}}function yr(e,t){let n=E;n===null&&jn();var r=n.b,a=void 0,i=Pe(z),s=!b,l=new Map;return Ar(()=>{var o=Yt();a=o.promise;try{Promise.resolve(e()).then(o.resolve,o.reject).then(()=>{f===A&&f.committed&&f.deactivate(),rt()})}catch(u){o.reject(u),rt()}var f=A;if(s){var c=!r.is_pending();r.update_pending_count(1),f.increment(c),l.get(f)?.reject(Re),l.delete(f),l.set(f,o)}const d=(u,p=void 0)=>{if(f.activate(),p)p!==Re&&(i.f|=we,Ue(i,p));else{(i.f&we)!==0&&(i.f^=we),Ue(i,u);for(const[v,y]of l){if(l.delete(v),v===f)break;y.reject(Re)}}s&&(r.update_pending_count(-1),f.decrement(c))};o.promise.then(d,u=>d(null,u||"unknown"))}),un(()=>{for(const o of l.values())o.reject(Re)}),new Promise(o=>{function f(c){function d(){c===a?o(i):f(a)}c.then(d,d)}f(a)})}function St(e){const t=ct(e);return t.equals=Zt,t}function tn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)V(t[n])}}function wr(e){for(var t=e.parent;t!==null;){if((t.f&D)===0)return(t.f&ue)===0?t:null;t=t.parent}return null}function kt(e){var t,n=E;oe(wr(e));try{e.f&=~Ce,tn(e),t=En(e)}finally{oe(n)}return t}function nn(e){var t=kt(e);if(e.equals(t)||(A?.is_fork||(e.v=t),e.wv=bn()),!Oe)if(Z!==null)(Ke()||A?.is_fork)&&Z.set(e,t);else{var n=(e.f&Q)===0?se:j;W(e,n)}}let ht=new Set;const be=new Map;let rn=!1;function Pe(e,t){var n={f:0,v:e,reactions:null,equals:$t,rv:0,wv:0};return n}function _e(e,t){const n=Pe(e);return Ir(n),n}function Tt(e,t=!1,n=!0){const r=Pe(e);return t||(r.equals=Zt),qe&&n&&O!==null&&O.l!==null&&(O.l.s??=[]).push(r),r}function $(e,t,n=!1){b!==null&&(!ae||(b.f&It)!==0)&&Ze()&&(b.f&(D|ve|xt|It))!==0&&!de?.includes(e)&&Gn();let r=n?Fe(t):t;return Ue(e,r)}function Ue(e,t){if(!e.equals(t)){var n=e.v;Oe?be.set(e,t):be.set(e,n),e.v=t;var r=ie.ensure();r.capture(e,n),(e.f&D)!==0&&((e.f&q)!==0&&kt(e),W(e,(e.f&Q)!==0?j:se)),e.wv=bn(),an(e,q),Ze()&&E!==null&&(E.f&j)!==0&&(E.f&(pe|Ie))===0&&(K===null?Or([e]):K.push(e)),!r.is_fork&&ht.size>0&&!rn&&br()}return t}function br(){rn=!1;var e=ke;it(!0);const t=Array.from(ht);try{for(const n of t)(n.f&j)!==0&&W(n,se),Qe(n)&&$e(n)}finally{it(e)}ht.clear()}function Ge(e){$(e,e.v+1)}function an(e,t){var n=e.reactions;if(n!==null)for(var r=Ze(),a=n.length,i=0;i<a;i++){var s=n[i],l=s.f;if(!(!r&&s===E)){var o=(l&q)===0;if(o&&W(s,t),(l&D)!==0){var f=s;Z?.delete(f),(l&Ce)===0&&(l&Q&&(s.f|=Ce),an(f,se))}else o&&((l&ve)!==0&&ce!==null&&ce.add(s),Ae(s))}}}function Fe(e){if(typeof e!="object"||e===null||ze in e)return e;const t=wt(e);if(t!==In&&t!==On)return e;var n=new Map,r=qt(e),a=_e(0),i=Te,s=l=>{if(Te===i)return l();var o=b,f=Te;U(null),Nt(i);var c=l();return U(o),Nt(f),c};return r&&n.set("length",_e(e.length)),new Proxy(e,{defineProperty(l,o,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Hn();var c=n.get(o);return c===void 0?c=s(()=>{var d=_e(f.value);return n.set(o,d),d}):$(c,f.value,!0),!0},deleteProperty(l,o){var f=n.get(o);if(f===void 0){if(o in l){const c=s(()=>_e(z));n.set(o,c),Ge(a)}}else $(f,z),Ge(a);return!0},get(l,o,f){if(o===ze)return e;var c=n.get(o),d=o in l;if(c===void 0&&(!d||De(l,o)?.writable)&&(c=s(()=>{var p=Fe(d?l[o]:z),v=_e(p);return v}),n.set(o,c)),c!==void 0){var u=h(c);return u===z?void 0:u}return Reflect.get(l,o,f)},getOwnPropertyDescriptor(l,o){var f=Reflect.getOwnPropertyDescriptor(l,o);if(f&&"value"in f){var c=n.get(o);c&&(f.value=h(c))}else if(f===void 0){var d=n.get(o),u=d?.v;if(d!==void 0&&u!==z)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return f},has(l,o){if(o===ze)return!0;var f=n.get(o),c=f!==void 0&&f.v!==z||Reflect.has(l,o);if(f!==void 0||E!==null&&(!c||De(l,o)?.writable)){f===void 0&&(f=s(()=>{var u=c?Fe(l[o]):z,p=_e(u);return p}),n.set(o,f));var d=h(f);if(d===z)return!1}return c},set(l,o,f,c){var d=n.get(o),u=o in l;if(r&&o==="length")for(var p=f;p<d.v;p+=1){var v=n.get(p+"");v!==void 0?$(v,z):p in l&&(v=s(()=>_e(z)),n.set(p+"",v))}if(d===void 0)(!u||De(l,o)?.writable)&&(d=s(()=>_e(void 0)),$(d,Fe(f)),n.set(o,d));else{u=d.v!==z;var y=s(()=>Fe(f));$(d,y)}var w=Reflect.getOwnPropertyDescriptor(l,o);if(w?.set&&w.set.call(c,f),!u){if(r&&typeof o=="string"){var k=n.get("length"),S=Number(o);Number.isInteger(S)&&S>=k.v&&$(k,S+1)}Ge(a)}return!0},ownKeys(l){h(a);var o=Reflect.ownKeys(l).filter(d=>{var u=n.get(d);return u===void 0||u.v!==z});for(var[f,c]of n)c.v!==z&&!(f in l)&&o.push(f);return o},setPrototypeOf(){Yn()}})}var Lt,sn,on,ln;function xr(){if(Lt===void 0){Lt=window,sn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;on=De(t,"firstChild").get,ln=De(t,"nextSibling").get,Mt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Mt(n)&&(n.__t=void 0)}}function Ee(e=""){return document.createTextNode(e)}function ye(e){return on.call(e)}function Je(e){return ln.call(e)}function _(e,t){return ye(e)}function Er(e,t=!1){{var n=ye(e);return n instanceof Comment&&n.data===""?Je(n):n}}function m(e,t=1,n=!1){let r=e;for(;t--;)r=Je(r);return r}function Sr(e){e.textContent=""}function fn(){return!1}function Ct(e){var t=b,n=E;U(null),oe(null);try{return e()}finally{U(t),oe(n)}}function cn(e){E===null&&(b===null&&Un(),Bn()),Oe&&Wn()}function kr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function he(e,t,n){var r=E;r!==null&&(r.f&G)!==0&&(e|=G);var a={ctx:O,deps:null,nodes:null,f:e|q|Q,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{$e(a),a.f|=bt}catch(l){throw V(a),l}else t!==null&&Ae(a);var i=a;if(n&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Ve)===0&&(i=i.first,(e&ve)!==0&&(e&je)!==0&&i!==null&&(i.f|=je)),i!==null&&(i.parent=r,r!==null&&kr(i,r),b!==null&&(b.f&D)!==0&&(e&Ie)===0)){var s=b;(s.effects??=[]).push(i)}return a}function Ke(){return b!==null&&!ae}function un(e){const t=he(ot,null,!1);return W(t,j),t.teardown=e,t}function _t(e){cn();var t=E.f,n=!b&&(t&pe)!==0&&(t&bt)===0;if(n){var r=O;(r.e??=[]).push(e)}else return dn(e)}function dn(e){return he(Gt|Xt,e,!1)}function Tr(e){return cn(),he(ot|Xt,e,!0)}function Cr(e){ie.ensure();const t=he(Ie|Ve,e,!0);return(n={})=>new Promise(r=>{n.outro?Se(t,()=>{V(t),r(void 0)}):(V(t),r(void 0))})}function Ar(e){return he(xt|Ve,e,!0)}function Pr(e,t=0){return he(ot|t,e,!0)}function F(e,t=[],n=[],r=[]){gr(r,t,n,a=>{he(ot,()=>e(...a.map(h)),!0)})}function At(e,t=0){var n=he(ve|t,e,!0);return n}function X(e){return he(pe|Ve,e,!0)}function vn(e){var t=e.teardown;if(t!==null){const n=Oe,r=b;Rt(!0),U(null);try{t.call(null)}finally{Rt(n),U(r)}}}function pn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Ct(()=>{a.abort(Re)});var r=n.next;(n.f&Ie)!==0?n.parent=null:V(n,t),n=r}}function Mr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&pe)===0&&V(t),t=n}}function V(e,t=!0){var n=!1;(t||(e.f&Kt)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(hn(e.nodes.start,e.nodes.end),n=!0),pn(e,t&&!n),at(e,0),W(e,ue);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();vn(e);var a=e.parent;a!==null&&a.first!==null&&_n(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function hn(e,t){for(;e!==null;){var n=e===t?null:Je(e);e.remove(),e=n}}function _n(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Se(e,t,n=!0){var r=[];gn(e,r,!0);var a=()=>{n&&V(e),t&&t()},i=r.length;if(i>0){var s=()=>--i||a();for(var l of r)l.out(s)}else a()}function gn(e,t,n){if((e.f&G)===0){e.f^=G;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,s=(a.f&je)!==0||(a.f&pe)!==0&&(e.f&ve)!==0;gn(a,t,s?n:!1),a=i}}}function Pt(e){mn(e,!0)}function mn(e,t){if((e.f&G)!==0){e.f^=G,(e.f&j)===0&&(W(e,q),Ae(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&je)!==0||(n.f&pe)!==0;mn(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function yn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:Je(n);t.append(n),n=a}}let ke=!1;function it(e){ke=e}let Oe=!1;function Rt(e){Oe=e}let b=null,ae=!1;function U(e){b=e}let E=null;function oe(e){E=e}let de=null;function Ir(e){b!==null&&(de===null?de=[e]:de.push(e))}let B=null,H=0,K=null;function Or(e){K=e}let wn=1,Xe=0,Te=Xe;function Nt(e){Te=e}function bn(){return++wn}function Qe(e){var t=e.f;if((t&q)!==0)return!0;if(t&D&&(e.f&=~Ce),(t&se)!==0){var n=e.deps;if(n!==null)for(var r=n.length,a=0;a<r;a++){var i=n[a];if(Qe(i)&&nn(i),i.wv>e.wv)return!0}(t&Q)!==0&&Z===null&&W(e,j)}return!1}function xn(e,t,n=!0){var r=e.reactions;if(r!==null&&!de?.includes(e))for(var a=0;a<r.length;a++){var i=r[a];(i.f&D)!==0?xn(i,t,!1):t===i&&(n?W(i,q):(i.f&j)!==0&&W(i,se),Ae(i))}}function En(e){var t=B,n=H,r=K,a=b,i=de,s=O,l=ae,o=Te,f=e.f;B=null,H=0,K=null,b=(f&(pe|Ie))===0?e:null,de=null,We(e.ctx),ae=!1,Te=++Xe,e.ac!==null&&(Ct(()=>{e.ac.abort(Re)}),e.ac=null);try{e.f|=vt;var c=e.fn,d=c(),u=e.deps;if(B!==null){var p;if(at(e,H),u!==null&&H>0)for(u.length=H+B.length,p=0;p<B.length;p++)u[H+p]=B[p];else e.deps=u=B;if(Ke()&&(e.f&Q)!==0)for(p=H;p<u.length;p++)(u[p].reactions??=[]).push(e)}else u!==null&&H<u.length&&(at(e,H),u.length=H);if(Ze()&&K!==null&&!ae&&u!==null&&(e.f&(D|se|q))===0)for(p=0;p<K.length;p++)xn(K[p],e);return a!==null&&a!==e&&(Xe++,K!==null&&(r===null?r=K:r.push(...K))),(e.f&we)!==0&&(e.f^=we),d}catch(v){return Jt(v)}finally{e.f^=vt,B=t,H=n,K=r,b=a,de=i,We(s),ae=l,Te=o}}function Lr(e,t){let n=t.reactions;if(n!==null){var r=Pn.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(t.f&D)!==0&&(B===null||!B.includes(t))&&(W(t,se),(t.f&Q)!==0&&(t.f^=Q,t.f&=~Ce),tn(t),at(t,0))}function at(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Lr(e,n[r])}function $e(e){var t=e.f;if((t&ue)===0){W(e,j);var n=E,r=ke;E=e,ke=!0;try{(t&(ve|Rn))!==0?Mr(e):pn(e),vn(e);var a=En(e);e.teardown=typeof a=="function"?a:null,e.wv=wn;var i;ut&&lr&&(e.f&q)!==0&&e.deps}finally{ke=r,E=n}}}function h(e){var t=e.f,n=(t&D)!==0;if(b!==null&&!ae){var r=E!==null&&(E.f&ue)!==0;if(!r&&!de?.includes(e)){var a=b.deps;if((b.f&vt)!==0)e.rv<Xe&&(e.rv=Xe,B===null&&a!==null&&a[H]===e?H++:B===null?B=[e]:B.includes(e)||B.push(e));else{(b.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[b]:i.includes(b)||i.push(b)}}}if(Oe){if(be.has(e))return be.get(e);if(n){var s=e,l=s.v;return((s.f&j)===0&&s.reactions!==null||kn(s))&&(l=kt(s)),be.set(s,l),l}}else n&&(!Z?.has(e)||A?.is_fork&&!Ke())&&(s=e,Qe(s)&&nn(s),ke&&Ke()&&(s.f&Q)===0&&Sn(s));if(Z?.has(e))return Z.get(e);if((e.f&we)!==0)throw e.v;return e.v}function Sn(e){if(e.deps!==null){e.f^=Q;for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&D)!==0&&(t.f&Q)===0&&Sn(t)}}function kn(e){if(e.v===z)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(be.has(t)||(t.f&D)!==0&&kn(t))return!0;return!1}function g(e){var t=ae;try{return ae=!0,e()}finally{ae=t}}const Rr=-7169;function W(e,t){e.f=e.f&Rr|t}function N(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ze in e)gt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ze in n&&gt(n)}}}function gt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gt(e[r],t)}catch{}const n=wt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Ht(n);for(let a in r){const i=r[a].get;if(i)try{i.call(e)}catch{}}}}}const Nr=["touchstart","touchmove"];function Fr(e){return Nr.includes(e)}const Dr=new Set,Ft=new Set;function zr(e,t,n,r={}){function a(i){if(r.capture||He.call(t,i),!i.cancelBubble)return Ct(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ft(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function Dt(e,t,n,r,a){var i={capture:r,passive:a},s=zr(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&un(()=>{t.removeEventListener(e,s,i)})}let zt=null;function He(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;zt=e;var s=0,l=zt===e&&e.__root;if(l){var o=a.indexOf(l);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;o<=f&&(s=o)}if(i=a[s]||e.target,i!==t){Mn(e,"currentTarget",{configurable:!0,get(){return i||n}});var c=b,d=E;U(null),oe(null);try{for(var u,p=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+r];y!=null&&(!i.disabled||e.target===i)&&y.call(i,e)}catch(w){u?p.push(w):u=w}if(e.cancelBubble||v===t||v===null)break;i=v}if(u){for(let w of p)queueMicrotask(()=>{throw w});throw u}}finally{e.__root=t,delete e.currentTarget,U(c),oe(d)}}}function Tn(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function mt(e,t){var n=E;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function M(e,t){var n=(t&rr)!==0,r=(t&ir)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=Tn(i?e:"<!>"+e),n||(a=ye(a)));var s=r||sn?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=ye(s),o=s.lastChild;mt(l,o)}else mt(s,s);return s}}function jr(e){return()=>Wr(e())}function Wr(e){const t=e.nodeType===Dn,n=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),r=E;for(const i of n){const s=document.createElement("script");for(var a of i.attributes)s.setAttribute(a.name,a.value);s.textContent=i.textContent,(t?e.firstChild===i:e===i)&&(r.nodes.start=s),(t?e.lastChild===i:e===i)&&(r.nodes.end=s),i.replaceWith(s)}return e}function P(e,t){e!==null&&e.before(t)}function C(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Br(e,t){return Ur(e,t)}const Le=new Map;function Ur(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:s=!0}){xr();var l=new Set,o=d=>{for(var u=0;u<d.length;u++){var p=d[u];if(!l.has(p)){l.add(p);var v=Fr(p);t.addEventListener(p,He,{passive:v});var y=Le.get(p);y===void 0?(document.addEventListener(p,He,{passive:v}),Le.set(p,1)):Le.set(p,y+1)}}};o(st(Dr)),Ft.add(o);var f=void 0,c=Cr(()=>{var d=n??t.appendChild(Ee());return hr(d,{pending:()=>{}},u=>{if(i){ee({});var p=O;p.c=i}a&&(r.$$events=a),f=e(u,r)||{},i&&te()}),()=>{for(var u of l){t.removeEventListener(u,He);var p=Le.get(u);--p===0?(document.removeEventListener(u,He),Le.delete(u)):Le.set(u,p)}Ft.delete(o),d!==n&&d.parentNode?.removeChild(d)}});return Vr.set(f,c),f}let Vr=new WeakMap;class qr{anchor;#e=new Map;#t=new Map;#r=new Map;#n=new Set;#l=!0;constructor(t,n=!0){this.anchor=t,this.#l=n}#a=()=>{var t=A;if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)Pt(r),this.#n.delete(n);else{var a=this.#r.get(n);a&&(this.#t.set(n,a.effect),this.#r.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[i,s]of this.#e){if(this.#e.delete(i),i===t)break;const l=this.#r.get(s);l&&(V(l.effect),this.#r.delete(s))}for(const[i,s]of this.#t){if(i===n||this.#n.has(i))continue;const l=()=>{if(Array.from(this.#e.values()).includes(i)){var f=document.createDocumentFragment();yn(s,f),f.append(Ee()),this.#r.set(i,{effect:s,fragment:f})}else V(s);this.#n.delete(i),this.#t.delete(i)};this.#l||!r?(this.#n.add(i),Se(s,l,!1)):l()}}};#i=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[r,a]of this.#r)n.includes(r)||(V(a.effect),this.#r.delete(r))};ensure(t,n){var r=A,a=fn();if(n&&!this.#t.has(t)&&!this.#r.has(t))if(a){var i=document.createDocumentFragment(),s=Ee();i.append(s),this.#r.set(t,{effect:X(()=>n(s)),fragment:i})}else this.#t.set(t,X(()=>n(this.anchor)));if(this.#e.set(r,t),a){for(const[l,o]of this.#t)l===t?r.skipped_effects.delete(o):r.skipped_effects.add(o);for(const[l,o]of this.#r)l===t?r.skipped_effects.delete(o.effect):r.skipped_effects.add(o.effect);r.oncommit(this.#a),r.ondiscard(this.#i)}else this.#a()}}function jt(e,t,n=!1){var r=new qr(e),a=n?je:0;function i(s,l){r.ensure(s,l)}At(()=>{var s=!1;t((l,o=!0)=>{s=!0,i(o,l)}),s||i(!1,null)},a)}function Me(e,t){return t}function Hr(e,t,n){for(var r=[],a=t.length,i,s=t.length,l=0;l<a;l++){let d=t[l];Se(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var u=e.outrogroups;yt(st(i.done)),u.delete(i),u.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var o=r.length===0&&n!==null;if(o){var f=n,c=f.parentNode;Sr(c),c.append(f),e.items.clear()}yt(t,!o)}else i={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(i)}function yt(e,t=!0){for(var n=0;n<e.length;n++)V(e[n],t)}var Wt;function xe(e,t,n,r,a,i=null){var s=e,l=new Map;{var o=e;s=o.appendChild(Ee())}var f=null,c=St(()=>{var w=n();return qt(w)?w:w==null?[]:st(w)}),d,u=!0;function p(){y.fallback=f,Yr(y,d,s,t,r),f!==null&&(d.length===0?(f.f&me)===0?Pt(f):(f.f^=me,Ye(f,null,s)):Se(f,()=>{f=null}))}var v=At(()=>{d=h(c);for(var w=d.length,k=new Set,S=A,x=fn(),T=0;T<w;T+=1){var R=d[T],L=r(R,T),I=u?null:l.get(L);I?(I.v&&Ue(I.v,R),I.i&&Ue(I.i,T),x&&S.skipped_effects.delete(I.e)):(I=Gr(l,u?s:Wt??=Ee(),R,L,T,a,t,n),u||(I.e.f|=me),l.set(L,I)),k.add(L)}if(w===0&&i&&!f&&(u?f=X(()=>i(s)):(f=X(()=>i(Wt??=Ee())),f.f|=me)),!u)if(x){for(const[ne,An]of l)k.has(ne)||S.skipped_effects.add(An.e);S.oncommit(p),S.ondiscard(()=>{})}else p();h(c)}),y={effect:v,items:l,outrogroups:null,fallback:f};u=!1}function Yr(e,t,n,r,a){var i=t.length,s=e.items,l=e.effect.first,o,f=null,c=[],d=[],u,p,v,y;for(y=0;y<i;y+=1){if(u=t[y],p=a(u,y),v=s.get(p).e,e.outrogroups!==null)for(const ne of e.outrogroups)ne.pending.delete(v),ne.done.delete(v);if((v.f&me)!==0)if(v.f^=me,v===l)Ye(v,null,n);else{var w=f?f.next:l;v===e.effect.last&&(e.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),ge(e,f,v),ge(e,v,w),Ye(v,w,n),f=v,c=[],d=[],l=f.next;continue}if((v.f&G)!==0&&Pt(v),v!==l){if(o!==void 0&&o.has(v)){if(c.length<d.length){var k=d[0],S;f=k.prev;var x=c[0],T=c[c.length-1];for(S=0;S<c.length;S+=1)Ye(c[S],k,n);for(S=0;S<d.length;S+=1)o.delete(d[S]);ge(e,x.prev,T.next),ge(e,f,x),ge(e,T,k),l=k,f=T,y-=1,c=[],d=[]}else o.delete(v),Ye(v,l,n),ge(e,v.prev,v.next),ge(e,v,f===null?e.effect.first:f.next),ge(e,f,v),f=v;continue}for(c=[],d=[];l!==null&&l!==v;)(o??=new Set).add(l),d.push(l),l=l.next;if(l===null)continue}(v.f&me)===0&&c.push(v),f=v,l=v.next}if(e.outrogroups!==null){for(const ne of e.outrogroups)ne.pending.size===0&&(yt(st(ne.done)),e.outrogroups?.delete(ne));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||o!==void 0){var R=[];if(o!==void 0)for(v of o)(v.f&G)===0&&R.push(v);for(;l!==null;)(l.f&G)===0&&l!==e.fallback&&R.push(l),l=l.next;var L=R.length;if(L>0){var I=i===0?n:null;Hr(e,R,I)}}}function Gr(e,t,n,r,a,i,s,l){var o=(s&Xn)!==0?(s&Zn)===0?Tt(n,!1,!1):Pe(n):null,f=(s&$n)!==0?Pe(a):null;return{v:o,i:f,e:X(()=>(i(t,o??n,f??a,l),()=>{e.delete(r)}))}}function Ye(e,t,n){if(e.nodes)for(var r=e.nodes.start,a=e.nodes.end,i=t&&(t.f&me)===0?t.nodes.start:n;r!==null;){var s=Je(r);if(i.before(r),r===a)return;r=s}}function ge(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Cn(e,t,n=!1,r=!1,a=!1){var i=e,s="";F(()=>{var l=E;if(s!==(s=t()??"")&&(l.nodes!==null&&(hn(l.nodes.start,l.nodes.end),l.nodes=null),s!=="")){var o=s+"";n?o=`<svg>${o}</svg>`:r&&(o=`<math>${o}</math>`);var f=Tn(o);if((n||r)&&(f=ye(f)),mt(ye(f),f.lastChild),n||r)for(;ye(f);)i.before(ye(f));else i.before(f)}})}const Bt=[...` 	
\r\f \v\uFEFF`];function Kr(e,t,n){var r=""+e;if(n){for(var a in n)if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+i;(s===0||Bt.includes(r[s-1]))&&(l===r.length||Bt.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function tt(e,t,n,r,a,i){var s=e.__className;if(s!==n||s===void 0){var l=Kr(n,r,i);l==null?e.removeAttribute("class"):e.className=l,e.__className=n}else if(i&&a!==i)for(var o in i){var f=!!i[o];(a==null||f!==!!a[o])&&e.classList.toggle(o,f)}return i}const Xr=Symbol("is custom element"),$r=Symbol("is html");function J(e,t,n,r){var a=Zr(e);a[t]!==(a[t]=n)&&(t==="loading"&&(e[Fn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Jr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Zr(e){return e.__attributes??={[Xr]:e.nodeName.includes("-"),[$r]:e.namespaceURI===ar}}var Ut=new Map;function Jr(e){var t=e.getAttribute("is")||e.nodeName,n=Ut.get(t);if(n)return n;Ut.set(t,n=[]);for(var r,a=e,i=Element.prototype;i!==a;){r=Ht(a);for(var s in r)r[s].set&&n.push(s);a=wt(a)}return n}function le(e=!1){const t=O,n=t.l.u;if(!n)return;let r=()=>N(t.s);if(e){let a=0,i={};const s=ct(()=>{let l=!1;const o=t.s;for(const f in o)o[f]!==i[f]&&(i[f]=o[f],l=!0);return l&&a++,a});r=()=>h(s)}n.b.length&&Tr(()=>{Vt(t,r),dt(n.b)}),_t(()=>{const a=g(()=>n.m.map(Ln));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&_t(()=>{Vt(t,r),dt(n.a)})}function Vt(e,t){if(e.l.s)for(const n of e.l.s)h(n);t()}let nt=!1;function Qr(e){var t=nt;try{return nt=!1,[e(),nt]}finally{nt=t}}function Y(e,t,n,r){var a=!qe||(n&Qn)!==0,i=(n&tr)!==0,s=(n&nr)!==0,l=r,o=!0,f=()=>(o&&(o=!1,l=s?g(r):r),l),c;if(i){var d=ze in e||Nn in e;c=De(e,t)?.set??(d&&t in e?x=>e[t]=x:void 0)}var u,p=!1;i?[u,p]=Qr(()=>e[t]):u=e[t],u===void 0&&r!==void 0&&(u=f(),c&&(a&&qn(),c(u)));var v;if(a?v=()=>{var x=e[t];return x===void 0?f():(o=!0,x)}:v=()=>{var x=e[t];return x!==void 0&&(l=void 0),x===void 0?l:x},a&&(n&er)===0)return v;if(c){var y=e.$$legacy;return(function(x,T){return arguments.length>0?((!a||!T||y||p)&&c(T?v():x),x):v()})}var w=!1,k=((n&Jn)!==0?ct:St)(()=>(w=!1,v()));i&&h(k);var S=E;return(function(x,T){if(arguments.length>0){const R=T?h(k):a&&i?Fe(x):x;return $(k,R),w=!0,l!==void 0&&(l=R),x}return Oe&&w||(S.f&ue)!==0?k.v:h(k)})}function ei(e){O===null&&zn(),qe&&O.l!==null?ti(O).m.push(e):_t(()=>{const t=g(e);if(typeof t=="function")return t})}function ti(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const ni="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ni);fr();const ri={title:"GNESL",nav:[{label:"Home",id:"hero"},{label:"Services",id:"services"},{label:"Process",id:"process"},{label:"Projects",id:"projects"},{label:"Our Team",id:"team"},{label:"Contact",id:"contact"}]},ii={title:"Complete Windmill Solutions",subtitle:"From planning to erection, we provide end-to-end windmill services for sustainable energy generation.Transform wind into power with our expertise.",cta:"Start Your Project",typing_texts:["Clean Energy","Wind Innovation","Sustainable Power","Renewable Solutions"],typing_text_subtitle:"End-to-end wind energy solutions for a greener tomorrow."},ai=[{value:"150+",label:"Windmills Installed"},{value:"500MW",label:"Total Capacity"},{value:"15",label:"Years Experience"},{value:"98%",label:"Client Satisfaction"}],si={title:"Our Comprehensive Services",items:[{key:"site_assessment",title:"Site Assessment & Planning",description:"Comprehensive wind resource analysis, environmental impact studies, and optimal site selection for maximum energy generation potential.",svg_icon_path:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"},{key:"engineering_design",title:"Engineering & Design",description:"Custom windmill design, structural engineering, electrical system planning, and grid integration solutions tailored to your needs.",svg_icon_path:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"},{key:"permits_compliance",title:"Permits & Compliance",description:"Full regulatory compliance support, permit acquisition, environmental clearances, and liaison with local authorities.",svg_icon_path:"M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"},{key:"procurement_logistics",title:"Procurement & Logistics",description:"Strategic sourcing of quality components, efficient supply chain management, and safe transportation to project sites.",svg_icon_path:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"},{key:"installation_erection",title:"Installation & Erection",description:"Professional tower erection, turbine installation, electrical connections, and complete commissioning by certified technicians.",svg_icon_path:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"},{key:"maintenance_support",title:"Maintenance & Support",description:"24/7 monitoring, preventive maintenance, emergency repairs, performance optimization, and long-term service agreements.",svg_icon_path:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}]},oi={title:"Our Proven Process",steps:[{key:"consultation_assessment",title:"Consultation & Assessment",description:"Initial site visit, wind resource evaluation, feasibility study, and project scope definition with detailed cost estimates."},{key:"design_engineering",title:"Design & Engineering",description:"Detailed engineering design, structural calculations, electrical schematics, and comprehensive project documentation."},{key:"approvals_permits",title:"Approvals & Permits",description:"Regulatory submissions, environmental clearances, grid connection approvals, and all necessary permits secured."},{key:"procurement_preparation",title:"Procurement & Preparation",description:"Component sourcing, site preparation, foundation construction, and logistics coordination for seamless execution."},{key:"installation_commissioning",title:"Installation & Commissioning",description:"Professional installation, thorough testing, grid synchronization, and full system commissioning with performance verification."},{key:"ongoing_support",title:"Ongoing Support",description:"Regular maintenance, performance monitoring, troubleshooting, and continuous optimization for maximum energy output."}]},li={title:"Featured Projects",items:[{key:"coastal_wind_farm",icon:"🌬️",title:"Coastal Wind Farm",description:"Large-scale offshore wind installation delivering clean energy to coastal communities with exceptional efficiency.",stats:[{value:"25",label:"Turbines"},{value:"75MW",label:"Capacity"}]},{key:"mountain_ridge_installation",icon:"⚡",title:"Mountain Ridge Installation",description:"High-altitude wind project maximizing natural wind corridors for optimal power generation in challenging terrain.",stats:[{value:"40",label:"Turbines"},{value:"120MW",label:"Capacity"}]},{key:"industrial_park_solution",icon:"🏭",title:"Industrial Park Solution",description:"Custom wind energy system providing reliable renewable power for manufacturing facilities and reducing carbon footprint.",stats:[{value:"12",label:"Turbines"},{value:"36MW",label:"Capacity"}]}]},fi={members_info:[{name:"Rahul Sharma",role:"Founder & CEO",bio:"With over 18 years of experience in renewable energy, Rahul leads the company with a vision to accelerate the transition to sustainable power through innovative wind solutions.",image:"https://placehold.net/avatar-3.png",linkedin:"#",email:"mailto:info@company.com"},{name:"Anita Verma",role:"CTO",bio:"Expert in wind turbine technology and grid optimization.",image:"https://placehold.net/avatar-3.png",linkedin:"https://linkedin.com/in/anitaverma",email:"mailto:anita@company.com"}]},ci={title:"Ready to Harness Wind Energy?",subtitle:"Let's discuss your windmill project and create a sustainable energy solution tailored to your needs.",cta:"Get In Touch",primaryEmail:"info@windpowersolutions.com",items:[{key:"address",title:"Visit Us",html_data:"<p>123 Wind Energy Park<br>Green City, GC 12345</p>",svg_icon_path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},{key:"emails",title:"Email Us",svg_icon_path:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",html_data:"<p>info@windpowersolutions.com<br>support@windpowersolutions.com</p>"},{key:"phone",title:"Call Us",html_data:"<p>+1 (555) 123-4567<br>24/7 Support Available</p>",svg_icon_path:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}]},ui={copyright:"© 2026 GNESL PVT LTD. All rights reserved."},fe={header:ri,hero:ii,stats:ai,services:si,process:oi,projects:li,team:fi,contact:ci,footer:ui};var di=jr(M(`<!DOCTYPE html=""/> <html lang="en"><head><meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>WindPower Solutions - Loading</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> <style>/* Loading Screen Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, sans-serif;
      }

      #loader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--bg-dark);
        /* background: linear-gradient(
          135deg,
          #0a4d3c 0%,
          #1a7a5e 50%,
          #2d9f7a 100%
        ); */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      /* Fade Out Animation for entire wrapper */
      .loader-wrapper.fade-out {
        animation: fadeOutUp 1.5s ease-in-out forwards;
      }

      @keyframes fadeOutUp {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1.1);
        }
      }

      .loader-content {
        text-align: center !important;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      /* Windmill Animation */
      .windmill {
        position: relative;
        width: 200px;
        height: 250px;
        margin: 0 auto 2rem;
      }

      .windmill-tower {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 150px;
        background: linear-gradient(180deg, #34a873 0%, #2d8f63 100%);
        border-radius: 5px 5px 0 0;
        box-shadow: 0 5px 20px rgba(52, 168, 115, 0.3);
      }

      .windmill-blades {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 180px;
        height: 180px;
        animation: rotate 3s linear infinite;
      }

      @keyframes rotate {
        from {
          transform: translateX(-50%) rotate(0deg);
        }
        to {
          transform: translateX(-50%) rotate(360deg);
        }
      }

      .blade {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 20px;
        background: linear-gradient(90deg, #4cceac 0%, #34a873 100%);
        border-radius: 50px 0 0 50px;
        transform-origin: right center;
        box-shadow: 0 3px 15px rgba(76, 206, 172, 0.4);
      }

      .blade-1 {
        transform: translate(-100%, -50%) rotate(0deg);
      }

      .blade-2 {
        transform: translate(-100%, -50%) rotate(120deg);
      }

      .blade-3 {
        transform: translate(-100%, -50%) rotate(240deg);
      }

      .windmill-center {
        position: absolute;
        top: 90px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        box-shadow:
          0 0 20px rgba(76, 206, 172, 0.6),
          0 0 40px rgba(76, 206, 172, 0.4);
        z-index: 2;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
        }
      }

      /* Loading Text */
      .loading-text {
        color: #fff;
        margin-bottom: 2rem;
        text-align: center !important;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .loading-text h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        text-align: center !important;
        width: 100%;
        display: block;
      }

      .loading-dots {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        gap: 0.5rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        background: #4cceac;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(76, 206, 172, 0.6);
      }

      /* Progress Bar */
      .progress-container {
        width: 300px;
        height: 8px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        margin: auto 1rem;
        overflow: hidden;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      .progress-bar {
        height: 100%;
        width: 0%;
        background: linear-gradient(
          90deg,
          #4cceac 0%,
          #34a873 50%,
          #2d9f7a 100%
        );
        border-radius: 50px;
        transition: width 0.3s ease;
        box-shadow:
          0 0 20px rgba(76, 206, 172, 0.6),
          0 0 40px rgba(76, 206, 172, 0.4);
        animation:
          glow 2s ease-in-out infinite,
          progressFill 3s ease-in-out forwards;
      }

      @keyframes progressFill {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }

      @keyframes glow {
        0%,
        100% {
          box-shadow:
            0 0 20px rgba(76, 206, 172, 0.6),
            0 0 40px rgba(76, 206, 172, 0.4);
        }
        50% {
          box-shadow:
            0 0 30px rgba(76, 206, 172, 0.8),
            0 0 60px rgba(76, 206, 172, 0.6);
        }
      }

      .progress-percentage {
        color: #4cceac;
        font-size: 1.2rem;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        text-align: center !important;
        width: 100%;
      }

      /* Eco Icons */
      .eco-icons {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
      }

      .eco-icon {
        font-size: 2rem;
        animation: float 3s ease-in-out infinite;
        opacity: 0.8;
      }

      .eco-icon:nth-child(1) {
        animation-delay: 0s;
      }

      .eco-icon:nth-child(2) {
        animation-delay: 0.5s;
      }

      .eco-icon:nth-child(3) {
        animation-delay: 1s;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      /* Background Wind Animation */
      .bg-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
      }

      .wind-line {
        position: absolute;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(76, 206, 172, 0.3) 50%,
          transparent 100%
        );
        animation: windMove 4s linear infinite;
      }

      @keyframes windMove {
        0% {
          left: -100%;
        }
        100% {
          left: 100%;
        }
      }

      /* Energy Particles */
      .energy-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(76, 206, 172, 0.6);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(76, 206, 172, 0.8);
        animation: floatParticle 6s linear infinite;
      }

      @keyframes floatParticle {
        0% {
          transform: translateY(100vh) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) scale(1);
          opacity: 0;
        }
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .windmill {
          width: 150px;
          height: 200px;
        }

        .windmill-tower {
          width: 25px;
          height: 120px;
        }

        .windmill-blades {
          width: 140px;
          height: 140px;
        }

        .blade {
          width: 60px;
          height: 15px;
        }

        .windmill-center {
          top: 70px;
          width: 20px;
          height: 20px;
        }

        .loading-text h2 {
          font-size: 1.2rem;
        }

        .progress-container {
          width: 250px;
        }

        .eco-icons {
          gap: 1rem;
        }

        .eco-icon {
          font-size: 1.5rem;
        }
      }</style></head> <body><div id="loader-wrapper" class="loader-wrapper"><div class="loader-content"><div class="windmill animate__animated animate__zoomIn"><div class="windmill-tower"></div> <div class="windmill-blades"><div class="blade blade-1"></div> <div class="blade blade-2"></div> <div class="blade blade-3"></div></div> <div class="windmill-center"></div></div> <div class="loading-text animate__animated animate__fadeIn"><h2 class="animate__animated animate__flash animate__infinite">Harnessing Wind Energy</h2></div> <div class="progress-container animate__animated animate__fadeIn" style="animation-delay: 0.3s;"><div class="progress-bar" id="progressBar"></div></div> <div class="progress-percentage animate__animated animate__fadeIn" id="progressText" style="animation-delay: 0.5s;">0%</div> <div class="eco-icons"><div class="eco-icon animate__animated animate__bounceIn" style="animation-delay: 0.5s;">🌱</div> <div class="eco-icon animate__animated animate__bounceIn" style="animation-delay: 0.7s;">♻️</div> <div class="eco-icon animate__animated animate__bounceIn" style="animation-delay: 0.9s;">🌍</div></div></div> <div class="bg-animation"><div class="wind-line" style="top: 20%; animation-delay: 0s;"></div> <div class="wind-line" style="top: 40%; animation-delay: 0.5s;"></div> <div class="wind-line" style="top: 60%; animation-delay: 1s;"></div> <div class="wind-line" style="top: 80%; animation-delay: 1.5s;"></div> <div class="energy-particle" style="left: 10%; animation-delay: 0s;"></div> <div class="energy-particle" style="left: 25%; animation-delay: 1s;"></div> <div class="energy-particle" style="left: 40%; animation-delay: 2s;"></div> <div class="energy-particle" style="left: 55%; animation-delay: 0.5s;"></div> <div class="energy-particle" style="left: 70%; animation-delay: 1.5s;"></div> <div class="energy-particle" style="left: 85%; animation-delay: 2.5s;"></div></div></div> <script>
      // Minimal JavaScript - Only for progress updates
      document.addEventListener("DOMContentLoaded", function () {
        const loaderWrapper = document.getElementById("loader-wrapper");
        const progressText = document.getElementById("progressText");

        let progress = 0;
        const loadingDuration = 3000;
        const intervalTime = 30;
        const increment = (100 * intervalTime) / loadingDuration;

        // Update progress percentage text
        const loadingInterval = setInterval(() => {
          progress += increment;

          if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(() => {
              // Add animate.css classes for exit
              loaderWrapper.classList.add(
                "animate__animated",
                "animate__fadeOut"
              );

              setTimeout(() => {
                loaderWrapper.style.display = "none";
                document.body.style.overflow = "auto";
              }, 1000);
            }, 500);
          }

          progressText.textContent = Math.floor(progress) + "%";
        }, intervalTime);

        // Skip loader on click
        loaderWrapper.addEventListener("click", function () {
          if (progress < 100) {
            progress = 100;
            progressText.textContent = "100%";
            clearInterval(loadingInterval);

            setTimeout(() => {
              loaderWrapper.classList.add(
                "animate__animated",
                "animate__fadeOut"
              );

              setTimeout(() => {
                loaderWrapper.style.display = "none";
                document.body.style.overflow = "auto";
              }, 1000);
            }, 500);
          }
        });
      });
    <\/script></body></html>`,1));function vi(e){var t=di();P(e,t)}const pi="/gnesl-portfolio-website/assets/logo_new_3-B37-9wna.png";var hi=M("<li><a> </a></li>"),_i=M('<header><nav class="navbar"><div class="logo"><img class="logo-image"/></div> <button class="hamburger" aria-label="Toggle navigation"><span></span> <span></span> <span></span></button> <ul></ul></nav></header>');function gi(e,t){ee(t,!1);let n=Y(t,"header",8),r=Tt(!1);function a(){$(r,!h(r))}function i(){$(r,!1)}le();var s=_i(),l=_(s),o=_(l),f=_(o),c=m(o,2),d=_(c);let u;var p=m(d,2);let v;var y=m(p,2);let w;var k=m(c,2);let S;xe(k,5,()=>(N(n()),g(()=>n().nav)),Me,(x,T)=>{var R=hi(),L=_(R),I=_(L);F(()=>{J(L,"href",(h(T),g(()=>`#${h(T).id}`))),C(I,(h(T),g(()=>h(T).label)))}),Dt("click",L,i),P(x,R)}),F(()=>{J(f,"src",pi),J(f,"alt",(N(n()),g(()=>n().title))),J(c,"aria-expanded",h(r)),u=tt(d,1,"",null,u,{open:h(r)}),v=tt(p,1,"",null,v,{open:h(r)}),w=tt(y,1,"",null,w,{open:h(r)}),S=tt(k,1,"",null,S,{open:h(r)})}),Dt("click",c,a),P(e,s),te()}var mi=M('<span class="typing"> </span>');function yi(e,t){ee(t,!1);let n=Y(t,"texts",24,()=>[]),r=Y(t,"typingSpeed",8,120),a=Y(t,"deletingSpeed",8,60),i=Y(t,"pause",8,1100),s=Tt(""),l=0,o=0,f=!1;ei(()=>{const u=()=>{const p=n()[l];f?($(s,p.slice(0,--o)),o===0&&(f=!1,l=(l+1)%n().length)):($(s,p.slice(0,++o)),o===p.length&&setTimeout(()=>f=!0,i())),setTimeout(u,f?a():r())};u()}),le();var c=mi(),d=_(c);F(()=>C(d,h(s))),P(e,c),te()}var wi=M('<section class="hero" id="hero"><h1>Powering the future with&nbsp; <!></h1> <p> </p> <a href="#contact" class="cta-button"> </a></section>');function bi(e,t){ee(t,!1);let n=Y(t,"hero",8);le();var r=wi(),a=_(r),i=m(_(a));yi(i,{get texts(){return N(n()),g(()=>n().typing_texts)}});var s=m(a,2),l=_(s),o=m(s,2),f=_(o);F(()=>{C(l,(N(n()),g(()=>n().typing_text_subtitle))),C(f,(N(n()),g(()=>n().cta)))}),P(e,r),te()}var xi=M('<div class="stat-item"><div class="stat-number"> </div> <div class="stat-label"> </div></div>'),Ei=M('<section class="stats"><div class="stats-container"></div></section>');function Si(e,t){let n=Y(t,"stats",8);var r=Ei(),a=_(r);xe(a,5,n,Me,(i,s)=>{var l=xi(),o=_(l),f=_(o),c=m(o,2),d=_(c);F(()=>{C(f,(h(s),g(()=>h(s).value))),C(d,(h(s),g(()=>h(s).label)))}),P(i,l)}),P(e,r)}var ki=M('<div class="service-card"><div class="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path></path></svg> <!></div> <h3> </h3> <p> </p></div>'),Ti=M('<section class="services" id="services"><h2 class="section-title"> </h2> <div class="services-grid"></div></section>');function Ci(e,t){ee(t,!1);let n=Y(t,"services",8);le();var r=Ti(),a=_(r),i=_(a),s=m(a,2);xe(s,5,()=>(N(n()),g(()=>n().items)),Me,(l,o)=>{var f=ki(),c=_(f),d=_(c),u=_(d),p=m(d,2);Cn(p,()=>(h(o),g(()=>h(o).icon)));var v=m(c,2),y=_(v),w=m(v,2),k=_(w);F(()=>{J(u,"d",(h(o),g(()=>h(o).svg_icon_path))),C(y,(h(o),g(()=>h(o).title))),C(k,(h(o),g(()=>h(o).description)))}),P(l,f)}),F(()=>C(i,(N(n()),g(()=>n().title)))),P(e,r),te()}var Ai=M('<div class="timeline-item"><div class="timeline-number"></div> <div class="timeline-content"><h3> </h3> <p> </p></div></div>'),Pi=M('<section class="process" id="process"><h2 class="section-title"> </h2> <div class="process-timeline"></div></section>');function Mi(e,t){ee(t,!1);let n=Y(t,"process",8);le();var r=Pi(),a=_(r),i=_(a),s=m(a,2);xe(s,5,()=>(N(n()),g(()=>n().steps)),Me,(l,o,f)=>{var c=Ai(),d=_(c);d.textContent=f+1;var u=m(d,2),p=_(u),v=_(p),y=m(p,2),w=_(y);F(()=>{C(v,(h(o),g(()=>h(o).title))),C(w,(h(o),g(()=>h(o).description)))}),P(l,c)}),F(()=>C(i,(N(n()),g(()=>n().title)))),P(e,r),te()}var Ii=M('<div class="project-stat"><div class="project-stat-value"> </div> <div class="project-stat-label"> </div></div>'),Oi=M('<div class="project-card"><div class="project-image"> </div> <div class="project-content"><h3> </h3> <p> </p> <div class="project-stats"></div></div></div>'),Li=M('<section class="projects" id="projects"><h2 class="section-title"> </h2> <div class="projects-grid"></div></section>');function Ri(e,t){ee(t,!1);let n=Y(t,"projects",8);le();var r=Li(),a=_(r),i=_(a),s=m(a,2);xe(s,5,()=>(N(n()),g(()=>n().items)),Me,(l,o)=>{var f=Oi(),c=_(f),d=_(c),u=m(c,2),p=_(u),v=_(p),y=m(p,2),w=_(y),k=m(y,2);xe(k,5,()=>(h(o),g(()=>h(o).stats)),Me,(S,x)=>{var T=Ii(),R=_(T),L=_(R),I=m(R,2),ne=_(I);F(()=>{C(L,(h(x),g(()=>h(x).value))),C(ne,(h(x),g(()=>h(x).label)))}),P(S,T)}),F(()=>{C(d,(h(o),g(()=>h(o).icon))),C(v,(h(o),g(()=>h(o).title))),C(w,(h(o),g(()=>h(o).description)))}),P(l,f)}),F(()=>C(i,(N(n()),g(()=>n().title)))),P(e,r),te()}var Ni=M('<div class="contact-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path></path></svg> <h3> </h3> <p><!></p></div>'),Fi=M('<section class="contact" id="contact"><div class="contact-container"><h2> </h2> <p> </p> <a class="cta-button btn-white"> </a> <div class="contact-info"></div></div></section>');function Di(e,t){ee(t,!1);let n=Y(t,"contact",8);le();var r=Fi(),a=_(r),i=_(a),s=_(i),l=m(i,2),o=_(l),f=m(l,2),c=_(f),d=m(f,2);xe(d,5,()=>(N(n()),g(()=>n().items)),Me,(u,p)=>{var v=Ni(),y=_(v),w=_(y),k=m(y,2),S=_(k),x=m(k,2),T=_(x);Cn(T,()=>(h(p),g(()=>h(p).html_data))),F(()=>{J(w,"d",(h(p),g(()=>h(p).svg_icon_path))),C(S,(h(p),g(()=>h(p).title)))}),P(u,v)}),F(()=>{C(s,(N(n()),g(()=>n().title))),C(o,(N(n()),g(()=>n().subtitle))),J(f,"href",`mailto:${N(n()),g(()=>n().primaryEmail)??""}`),C(c,(N(n()),g(()=>n().cta)))}),P(e,r),te()}var zi=M("<footer><p> </p></footer>");function ji(e,t){ee(t,!1);let n=Y(t,"footer",8);le();var r=zi(),a=_(r),i=_(a);F(()=>C(i,(N(n()),g(()=>n().copyright)))),P(e,r),te()}var Wi=M('<a target="_blank" aria-label="LinkedIn">🔗 LinkedIn</a>'),Bi=M('<a aria-label="Email">✉️ Email</a>'),Ui=M('<div class="team-card"><div class="team-image"><img/></div> <div class="team-content"><h3> </h3> <span class="team-role"> </span> <p> </p> <div class="team-actions"><!> <!></div></div></div>'),Vi=M('<section class="team" id="team"><h2 class="section-title">Our Team</h2> <div class="team-grid"></div></section>');function qi(e,t){ee(t,!1);let n=Y(t,"team",8);le();var r=Vi(),a=m(_(r),2);xe(a,5,()=>(N(n()),g(()=>n().members_info)),i=>i.name,(i,s)=>{var l=Ui(),o=_(l),f=_(o),c=m(o,2),d=_(c),u=_(d),p=m(d,2),v=_(p),y=m(p,2),w=_(y),k=m(y,2),S=_(k);{var x=L=>{var I=Wi();F(()=>J(I,"href",(h(s),g(()=>h(s).linkedin)))),P(L,I)};jt(S,L=>{h(s),g(()=>h(s).linkedin)&&L(x)})}var T=m(S,2);{var R=L=>{var I=Bi();F(()=>J(I,"href",(h(s),g(()=>h(s).email)))),P(L,I)};jt(T,L=>{h(s),g(()=>h(s).email)&&L(R)})}F(()=>{J(f,"src",(h(s),g(()=>h(s).image))),J(f,"alt",(h(s),g(()=>h(s).name))),C(u,(h(s),g(()=>h(s).name))),C(v,(h(s),g(()=>h(s).role))),C(w,(h(s),g(()=>h(s).bio)))}),P(i,l)}),P(e,r),te()}var Hi=M("<!> <!> <main><!> <!> <!> <!> <!> <!> <!></main> <!>",1);function Yi(e,t){ee(t,!1),le();var n=Hi(),r=Er(n);vi(r);var a=m(r,2);gi(a,{get header(){return fe.header}});var i=m(a,2),s=_(i);bi(s,{get hero(){return fe.hero}});var l=m(s,2);Si(l,{get stats(){return fe.stats}});var o=m(l,2);Ci(o,{get services(){return fe.services}});var f=m(o,2);Mi(f,{get process(){return fe.process}});var c=m(f,2);Ri(c,{get projects(){return fe.projects}});var d=m(c,2);qi(d,{get team(){return fe.team}});var u=m(d,2);Di(u,{get contact(){return fe.contact}});var p=m(i,2);ji(p,{get footer(){return fe.footer}}),P(e,n),te()}Br(Yi,{target:document.getElementById("app")});
