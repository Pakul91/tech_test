import{d as p,r as u,o as r,b as l,l as e,F as h,h as b,n as k,t as m,e as w,f as v,m as f,v as I}from"./index-ea65ede8.js";const y={class:"dropdown"},C=e("div",{class:"btn btn-outline-theme3 border-theme3 me-1",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"toggle dropdown"},[e("i",{class:"bi bi-sort-up-alt"})],-1),g={class:"dropdown-menu"},x=["onClick"],B=p({__name:"Dropdown",props:{dropdownItems:{type:Array,required:!0}},emits:["dropdownItemClicked"],setup(t,{emit:n}){const o=u(null),d=s=>{o.value=s.name,n("dropdownItemClicked",s)};return(s,i)=>(r(),l("div",y,[C,e("ul",g,[(r(!0),l(h,null,b(t.dropdownItems,a=>(r(),l("li",{key:a.name,role:"button"},[e("a",{class:k(["dropdown-item",{active:o.value===a.name}]),onClick:c=>d(a)},m(a.name),11,x)]))),128))])]))}}),$={class:"navbar bg-dark px-2 py-3"},N=e("i",{class:"bi bi-chevron-left"},null,-1),D={class:"d-none d-sm-inline px-4"},S={class:"d-flex justify-content-end w-75"},V={class:"d-flex",role:"search"},A={class:"input-group border-theme1"},F=e("span",{class:"input-group-text bg-theme1",id:"basic-addon1"},[e("i",{class:"bi bi-search text-theme3"})],-1),U=["placeholder"],q=p({__name:"Navbar",props:{buttonName:{type:String,default:"Back"},placeholder:{type:String,default:"search"},dropdownItems:{type:Array,default:null}},emits:["searchInput","dropdownItemClicked","backButtonClicked"],setup(t,{emit:n}){const o=u("");function d(){n("searchInput",o.value)}const s=a=>{n("dropdownItemClicked",a)};function i(){n("backButtonClicked")}return(a,c)=>(r(),l("nav",$,[e("div",{class:"btn btn-outline-theme3",onClick:i},[N,e("span",D,m(t.buttonName),1)]),e("div",S,[t.dropdownItems?(r(),w(B,{key:0,dropdownItems:t.dropdownItems,onDropdownItemClicked:s},null,8,["dropdownItems"])):v("",!0),e("form",V,[e("div",A,[F,f(e("input",{type:"text",class:"form-control shadow-none",placeholder:t.placeholder,"aria-label":"Username","aria-describedby":"basic-addon1","onUpdate:modelValue":c[0]||(c[0]=_=>o.value=_),onInput:d},null,40,U),[[I,o.value]])])])])]))}}),z=(t,n)=>{const o=t.__vccOpts||t;for(const[d,s]of n)o[d]=s;return o};export{q as _,z as a};
