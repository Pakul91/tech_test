import{d as C,u as x,s as E,r as o,c as r,a as S,b as l,e as p,f as s,g as f,w as v,T as H,o as a,F as P,h as I,i as R,t as V}from"./index-ea65ede8.js";import{_ as i,g as j}from"./index-1e1a1c2d.js";const z={"data-testId":"main",class:"pt-5 text-theme3 overflow-hidden",role:"main"},F={key:3,"data-testId":"homeButtonsHolder"},U=C({__name:"Home",setup(G){const{getSectionText:h}=x(),{sectionText:e}=E(x()),m=o(!1),c=o(!1),u=o(!1),d=r(()=>e==null?void 0:e.value.greeting),g=r(()=>e==null?void 0:e.value.p1),y=r(()=>e==null?void 0:e.value.p2),_=[{name:"Users",path:"/users"},{name:"Organisations",path:"/organisations"},{name:"Emojis",path:"/emojis"}],k=()=>{m.value=!0},T=()=>{c.value=!0},b=()=>{u.value=!0},w=t=>{t.style.opacity="0",t.style.transform="translateX(100%)"},D=(t,B)=>{j.to(t,{opacity:1,x:0,duration:2,ease:"elastic.out(1, 0.3)",delay:t.dataset.index*.2})};return h(),(t,B)=>{const L=S("RouterLink");return a(),l("main",z,[d.value?(a(),p(i,{key:"H1",className:"text-center py-5",ariaLabel:"Greeting",element:"h1",text:d.value,speed:15,onTypingDone:k},null,8,["text"])):s("",!0),g.value&&m.value?(a(),p(i,{key:"p1",className:"paragraph text-center px-2",style:{"font-size":"clamp(1.25rem, 4vw, 1.75rem)"},ariaLabel:"Introduction",element:"p",text:g.value,speed:15,onTypingDone:T},null,8,["text"])):s("",!0),y.value&&c.value?(a(),p(i,{key:"p2",className:"paragraph text-center px-2",style:{"font-size":"clamp(1.25rem, 4vw, 1.75rem)"},ariaLabel:"Options",element:"p",text:y.value,speed:15,onTypingDone:b},null,8,["text"])):s("",!0),u.value?(a(),l("div",F,[f(H,{appear:"",class:"d-grid gap-2 col-8 col-sm-6 col-lg-4 mx-auto mt-5",name:"slide",tag:"section",onBeforeEnter:w,onEnter:D},{default:v(()=>[(a(),l(P,null,I(_,(n,N)=>f(L,{to:n.path,key:n.name,type:"button",name:n.name,"data-index":N,"aria-label":`button to ${n.name}`,class:"btn btn-primary p3"},{default:v(()=>[R(V(n.name),1)]),_:2},1032,["to","name","data-index","aria-label"])),64))]),_:1})])):s("",!0)])}}});export{U as default};
