import{i as te,g as ae,o as ne,a as se}from"../chunks/navigation.frHbLkcC.js";import"../chunks/index.rE9O-scq.js";import{s as oe,i as le,d as s,n as M,r as ie}from"../chunks/scheduler.sMD3e7PM.js";import{S as ce,i as re,d as ee,v as de,s as j,j as o,A as ue,g as f,c as k,k as l,l as I,B,m as v,n as O,a as Z,z as t,C as $}from"../chunks/index.paqrU1Cq.js";const ve={apiKey:"AIzaSyBp1KKYhd_M5SK4y5Ofi8M7H-EjAotAWdo",authDomain:"lambda-community.firebaseapp.com",projectId:"lambda-community",storageBucket:"lambda-community.appspot.com",messagingSenderId:"316292399888",appId:"1:316292399888:web:40ddc69203c6c8c8c81b95",measurementId:"G-FGHWYFCPDN"},fe=te(ve),me=ae(fe);ne(me,u=>{u&&se("/home")});function he({params:u}){}const Ce=Object.freeze(Object.defineProperty({__proto__:null,load:he},Symbol.toStringTag,{value:"Module"})),i="src/routes/+page.svelte";function N(u){let n,c,m,e,a,D,S,h,r="Lambda",P,g,H="A personal notebook for your gender transition",V,b,y,_,R="Create a new account",z,E,T,C,x,p,q="Sign in",G,F;const L={c:function(){n=j(),c=o("div"),m=o("div"),e=o("div"),a=o("img"),S=j(),h=o("h1"),h.textContent=r,P=j(),g=o("p"),g.textContent=H,V=j(),b=o("div"),y=o("div"),_=o("button"),_.textContent=R,z=j(),E=o("br"),T=j(),C=o("div"),x=o("div"),p=o("button"),p.textContent=q,this.h()},l:function(w){ue("svelte-vvayrk",document.head).forEach(f),n=k(w),c=l(w,"DIV",{class:!0,style:!0});var U=I(c);m=l(U,"DIV",{class:!0});var W=I(m);e=l(W,"DIV",{class:!0});var d=I(e);a=l(d,"IMG",{src:!0,alt:!0,style:!0}),S=k(d),h=l(d,"H1",{"data-svelte-h":!0}),B(h)!=="svelte-bfnwdv"&&(h.textContent=r),P=k(d),g=l(d,"P",{"data-svelte-h":!0}),B(g)!=="svelte-1eyw3zw"&&(g.textContent=H),V=k(d),b=l(d,"DIV",{class:!0});var Y=I(b);y=l(Y,"DIV",{class:!0});var J=I(y);_=l(J,"BUTTON",{class:!0,"data-svelte-h":!0}),B(_)!=="svelte-47lcef"&&(_.textContent=R),J.forEach(f),Y.forEach(f),z=k(d),E=l(d,"BR",{}),T=k(d),C=l(d,"DIV",{class:!0});var Q=I(C);x=l(Q,"DIV",{class:!0});var X=I(x);p=l(X,"BUTTON",{class:!0,"data-svelte-h":!0}),B(p)!=="svelte-1cl4be3"&&(p.textContent=q),X.forEach(f),Q.forEach(f),d.forEach(f),W.forEach(f),U.forEach(f),this.h()},h:function(){document.title="Lambda",le(a.src,D="icon.png")||v(a,"src",D),v(a,"alt","Greek letter lambda in pink"),O(a,"width","200px"),O(a,"height","200px"),s(a,i,13,12,391),s(h,i,14,12,495),s(g,i,15,12,523),v(_,"class","btn btn-lg btn-primary rounded-pill"),s(_,i,17,33,640),v(y,"class","col"),s(y,i,17,16,623),v(b,"class","row"),s(b,i,16,12,589),s(E,i,19,12,796),v(p,"class","btn btn-lg btn-secondary rounded-pill"),s(p,i,21,33,865),v(x,"class","col"),s(x,i,21,16,848),v(C,"class","row"),s(C,i,20,12,814),v(e,"class","container align-items-center text-center p-2 my-auto"),s(e,i,12,8,312),v(m,"class","container"),s(m,i,11,4,280),v(c,"class","container vh-100 d-flex justify-content-center align-items-center"),O(c,"width","100%"),O(c,"height","100%"),s(c,i,10,0,164)},m:function(w,K){Z(w,n,K),Z(w,c,K),t(c,m),t(m,e),t(e,a),t(e,S),t(e,h),t(e,P),t(e,g),t(e,V),t(e,b),t(b,y),t(y,_),t(e,z),t(e,E),t(e,T),t(e,C),t(C,x),t(x,p),G||(F=[$(_,"click",u[1],!1,!1,!1,!1),$(p,"click",u[2],!1,!1,!1,!1)],G=!0)},p:M,i:M,o:M,d:function(w){w&&(f(n),f(c)),G=!1,ie(F)}};return ee("SvelteRegisterBlock",{block:L,id:N.name,type:"component",source:"",ctx:u}),L}function _e(u,n,c){let{$$slots:m={},$$scope:e}=n;de("Page",m,[]);let a=function(r){location.href=r};const D=[];Object.keys(n).forEach(r=>{!~D.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Page> was created with unknown prop '${r}'`)});const S=()=>a("/signup"),h=()=>a("/signin");return u.$capture_state=()=>({redirect:a}),u.$inject_state=r=>{"redirect"in r&&c(0,a=r.redirect)},n&&"$$inject"in n&&u.$inject_state(n.$$inject),[a,S,h]}class xe extends ce{constructor(n){super(n),re(this,n,_e,N,oe,{}),ee("SvelteRegisterComponent",{component:this,tagName:"Page",options:n,id:N.name})}}export{xe as component,Ce as universal};