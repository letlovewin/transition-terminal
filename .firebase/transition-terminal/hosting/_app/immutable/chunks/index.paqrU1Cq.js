import{r as $,n as y,j as g,k as C,l as S,m as M,p as E,q as b,w as j,x as I,y as R,z as T,A as B}from"./scheduler.sMD3e7PM.js";let p=!1;function L(){p=!0}function P(){p=!1}function H(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function q(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let o=0;o<t.length;o++){const u=t[o];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const o=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=o?r+1:H(1,r,m=>t[n[m]].claim_order,o))-1;i[s]=n[u]+1;const f=u+1;n[f]=s,r=Math.max(f,r)}const c=[],a=[];let l=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);l>=s;l--)a.push(t[l]);l--}for(;l>=0;l--)a.push(t[l]);c.reverse(),a.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<a.length;s++){for(;o<c.length&&a[s].claim_order>=c[o].claim_order;)o++;const u=o<c.length?c[o]:null;e.insertBefore(a[s],u)}}function A(e,t){if(p){for(q(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function z(e,t,n){p&&!n?A(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function k(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function re(){return v(" ")}function se(){return v("")}function U(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function W(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function N(e,t,n,i,r=!1){G(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const l=e[a];if(t(l)){const s=n(l);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),l}}for(let a=e.claim_info.last_index-1;a>=0;a--){const l=e[a];if(t(l)){const s=n(l);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,l}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function O(e,t,n,i){return N(e,r=>r.nodeName===t,r=>{const c=[];for(let a=0;a<r.attributes.length;a++){const l=r.attributes[a];n[l.name]||c.push(l.name)}c.forEach(a=>r.removeAttribute(a))},()=>i(t))}function oe(e,t,n){return O(e,t,n,V)}function le(e,t,n){return O(e,t,n,k)}function J(e,t){return N(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(t),!0)}function ce(e){return J(e," ")}function fe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function K(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function ue(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}const h=new Set;let _;function de(){_={r:0,c:[],p:_}}function _e(){_.r||$(_.c),_=_.p}function Q(e,t){e&&e.i&&(h.delete(e),e.i(t))}function me(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),S(()=>{const c=e.$$.on_mount.map(I).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...c):$(c),e.$$.on_mount=[]}),r.forEach(S)}function Y(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(T.push(e),B(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,i,r,c,a=null,l=[-1]){const s=M;E(e);const o=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:g(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:g(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};a&&a(o.root);let u=!1;if(o.ctx=n?n(e,t.props||{},(f,m,...x)=>{const w=x.length?x[0]:m;return o.ctx&&r(o.ctx[f],o.ctx[f]=w)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](w),u&&Z(e,f)),m}):[],o.update(),u=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){L();const f=F(t.target);o.fragment&&o.fragment.l(f),f.forEach(D)}else o.fragment&&o.fragment.c();t.intro&&Q(e.$$.fragment),X(e,t.target,t.anchor),P(),C()}E(s)}class ee{$$=void 0;$$set=void 0;$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!b(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te="4.2.8",ne="4";function d(e,t){document.dispatchEvent(K(e,{version:te,...t},{bubbles:!0}))}function ye(e,t){d("SvelteDOMInsert",{target:e,node:t}),A(e,t)}function ve(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),z(e,t,n)}function xe(e){d("SvelteDOMRemove",{node:e}),D(e)}function we(e,t,n,i,r,c,a){const l=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&l.push("preventDefault"),c&&l.push("stopPropagation"),a&&l.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:l});const s=U(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:l}),s()}}function ge(e,t,n){W(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function Se(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ee(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function be(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ae extends ee{$$prop_def;$$events_def;$$slot_def;constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);export{ue as A,ae as B,we as C,k as D,le as E,Ae as S,ve as a,_e as b,ce as c,d,se as e,Q as f,xe as g,be as h,pe as i,V as j,oe as k,F as l,ge as m,fe as n,v as o,J as p,Se as q,de as r,re as s,me as t,he as u,Ee as v,$e as w,X as x,Y as y,ye as z};
