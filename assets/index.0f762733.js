var M=Object.defineProperty,I=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var D=(u,t,a)=>t in u?M(u,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[t]=a,b=(u,t)=>{for(var a in t||(t={}))q.call(t,a)&&D(u,a,t[a]);if(O)for(var a of O(t))T.call(t,a)&&D(u,a,t[a]);return u},x=(u,t)=>I(u,U(t));import{d as R,r as K,o as f,c as g,w as o,a as v,u as i,S as L,C as W,b as n,e as h,t as k,R as z,_ as G,f as J,g as Q,h as X,i as Y,j as Z,k as B,L as ee,U as te,l as ne,M as oe,A as ae,D as se,m as ue,n as le,p as re,q as ce,s as ie,v as de,x as F,y as P,H as _e,z as S,B as pe,E as me,F as fe,G as he,I as ve,J as $,K as ge,N as ye,O as be}from"./vendor.f15c5e25.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}};xe();const we="modulepreload",H={},ke="/vue3-admin-template/",E=function(t,a){return!a||a.length===0?t():Promise.all(a.map(s=>{if(s=`${ke}${s}`,s in H)return;H[s]=!0;const e=s.endsWith(".css"),l=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":we,e||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),e)return new Promise((_,r)=>{c.addEventListener("load",_),c.addEventListener("error",r)})})).then(()=>t())};const Ee={class:"margin-bottom: 24px"},Ce=v("h3",null,"\u5BFC\u822A\u6A21\u5F0F",-1),Ve=h("\u5DE6\u4FA7\u83DC\u5355\u5E03\u5C40"),Ae=h("\u9876\u90E8\u83DC\u5355\u5E03\u5C40"),Re=h("\u6DF7\u5408\u83DC\u5355\u5E03\u5C40"),Fe=h("\u56FA\u5B9A Header"),Oe=h("\u56FA\u5B9A \u5DE6\u4FA7\u83DC\u5355"),De=h("\u81EA\u52A8\u5206\u5272\u83DC\u5355"),Ke=R({props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(u,{emit:t}){const a=u,s=K(!1),e=()=>{s.value=!s.value},l=p=>{t("update:modelValue",x(b({},k(a.modelValue)),{layout:p.target.value}))},c=p=>{t("update:modelValue",x(b({},k(a.modelValue)),{fixedHeader:p}))},_=p=>{t("update:modelValue",x(b({},k(a.modelValue)),{fixSiderbar:p}))},r=p=>{t("update:modelValue",x(b({},k(a.modelValue)),{splitMenus:p}))};return(p,w)=>{const y=z,d=G,C=J,m=Q,V=X,A=Y,N=Z;return f(),g(N,{visible:s.value,"onUpdate:visible":w[0]||(w[0]=j=>s.value=j),width:300,placement:"right",closable:!1},{handle:o(()=>[v("div",{class:"ant-pro-setting-drawer-handle",onClick:e},[s.value?(f(),g(i(W),{key:1})):(f(),g(i(L),{key:0}))])]),default:o(()=>[v("div",Ee,[Ce,n(d,{value:u.modelValue.layout,onChange:l},{default:o(()=>[n(y,{value:"side"},{default:o(()=>[Ve]),_:1}),n(y,{value:"top"},{default:o(()=>[Ae]),_:1}),n(y,{value:"mix"},{default:o(()=>[Re]),_:1})]),_:1},8,["value"]),n(C),n(A,{style:{"margin-bottom":"12px"}},{default:o(()=>[n(m,{span:12},{default:o(()=>[Fe]),_:1}),n(m,{span:12,style:{"text-align":"right"}},{default:o(()=>[n(V,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:u.modelValue.fixedHeader,onChange:c},null,8,["checked"])]),_:1})]),_:1}),n(A,{style:{"margin-bottom":"12px"}},{default:o(()=>[n(m,{span:12},{default:o(()=>[Oe]),_:1}),n(m,{span:12,style:{"text-align":"right"}},{default:o(()=>[n(V,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:u.modelValue.fixSiderbar,onChange:_},null,8,["checked"])]),_:1})]),_:1}),n(A,{style:{"margin-bottom":"12px"}},{default:o(()=>[n(m,{span:12},{default:o(()=>[De]),_:1}),n(m,{span:12,style:{"text-align":"right"}},{default:o(()=>[n(V,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:u.modelValue.splitMenus,onChange:r},null,8,["checked"])]),_:1})]),_:1})])]),_:1},8,["visible"])}}}),Le={style:{"margin-right":"12px"}},Be=v("span",null,"\u4E2A\u4EBA\u8BBE\u7F6E",-1),Pe=v("span",null,"\u9000\u51FA\u767B\u5F55",-1),Se=R({setup(u){return(t,a)=>{const s=ne,e=oe,l=ae,c=se;return f(),B("div",Le,[n(c,null,{overlay:o(()=>[n(e,null,{default:o(()=>[n(s,null,{icon:o(()=>[n(i(L))]),default:o(()=>[Be]),_:1}),n(s,null,{icon:o(()=>[n(i(ee))]),default:o(()=>[Pe]),_:1})]),_:1})]),default:o(()=>[n(l,{shape:"square",size:"small"},{icon:o(()=>[n(i(te))]),_:1})]),_:1})])}}}),$e=v("img",{src:"https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg"},null,-1),He=v("h1",null,"Preview Pro",-1),Ne={key:0},je=R({setup(u){const t=ue(),a=t.getRoutes(),{menuData:s}=le(re(a)),e=ce({collapsed:!1,openKeys:[],selectedKeys:[]}),l=K({layout:"left",fixedHeader:!1,fixSiderbar:!1,splitMenus:!1}),c=ie(()=>t.currentRoute.value.matched.concat().map(_=>({path:_.path,breadcrumbName:_.meta.title||""})));return de(()=>{if(t.currentRoute){const _=t.currentRoute.value.matched.concat();e.selectedKeys=_.filter(r=>r.name!=="index").map(r=>r.path),e.openKeys=_.filter(r=>r.path!==t.currentRoute.value.path).map(r=>r.path)}}),(_,r)=>{const p=Ke,w=F("router-view"),y=F("pro-layout");return f(),g(y,me({collapsed:i(e).collapsed,"onUpdate:collapsed":r[1]||(r[1]=d=>i(e).collapsed=d),selectedKeys:i(e).selectedKeys,"onUpdate:selectedKeys":r[2]||(r[2]=d=>i(e).selectedKeys=d),openKeys:i(e).openKeys,"onUpdate:openKeys":r[3]||(r[3]=d=>i(e).openKeys=d),"menu-data":i(s),breadcrumb:{routes:i(c)},"iconfont-url":"//at.alicdn.com/t/font_2804900_c2k6gsut3fn.js"},l.value),{menuHeaderRender:o(()=>[n(i(P),{to:{path:"/"}},{default:o(()=>[$e,He]),_:1})]),rightContentRender:o(()=>[n(Se)]),breadcrumbRender:o(({route:d,params:C,routes:m})=>[m.indexOf(d)===m.length-1?(f(),B("span",Ne,[n(i(_e)),h(" "+S(d.breadcrumbName),1)])):(f(),g(i(P),{key:1,to:{path:d.path,params:C}},{default:o(()=>[n(i(pe)),h(" "+S(d.breadcrumbName),1)]),_:2},1032,["to"]))]),default:o(()=>[n(p,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=d=>l.value=d)},null,8,["modelValue"]),n(w)]),_:1},16,["collapsed","selectedKeys","openKeys","menu-data","breadcrumb"])}}});var Me=fe({history:he(),routes:[{path:"/",name:"index",meta:{title:"Home"},component:je,redirect:"/welcome",children:[{path:"/user",name:"user-index",meta:{title:"\u7528\u6237",icon:"icon-icon-test"},component:ve,redirect:"/user/welcome",children:[{path:"welcome",name:"user-welcome",meta:{title:"\u7528\u6237\u6B22\u8FCE",icon:"icon-icon-test"},component:()=>E(()=>import("./page1.2858762c.js"),["assets/page1.2858762c.js","assets/page1.d7edacdd.css","assets/vendor.f15c5e25.js","assets/vendor.b6fa3e62.css"])},{path:"version",name:"user-version",meta:{title:"\u7528\u6237\u7248\u672C",icon:"icon-antdesign"},component:()=>E(()=>import("./detail.2774380f.js"),["assets/detail.2774380f.js","assets/detail.613b3365.css","assets/vendor.f15c5e25.js","assets/vendor.b6fa3e62.css"])}]},{path:"/welcome",name:"welcome",meta:{title:"Welcome",icon:"icon-icon-test"},component:()=>E(()=>import("./page1.2858762c.js"),["assets/page1.2858762c.js","assets/page1.d7edacdd.css","assets/vendor.f15c5e25.js","assets/vendor.b6fa3e62.css"])},{path:"/version",name:"version",meta:{title:"Version",icon:"icon-antdesign"},component:()=>E(()=>import("./detail.2774380f.js"),["assets/detail.2774380f.js","assets/detail.613b3365.css","assets/vendor.f15c5e25.js","assets/vendor.b6fa3e62.css"])}]}]});var Ie=(u,t)=>{const a=u.__vccOpts||u;for(const[s,e]of t)a[s]=e;return a};const Ue={};function qe(u,t){const a=F("router-view"),s=$;return f(),g(s,null,{default:o(()=>[n(a)]),_:1})}var Te=Ie(Ue,[["render",qe]]);ge(Te).use(Me).use($).use(ye).use(be).mount("#app");