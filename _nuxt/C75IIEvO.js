import{d as f,af as w,A as C,i,c as n,e as P,R as l,n as s,f as b,aC as u,ae as _}from"./BckcLqLM.js";const y={slots:{root:"my-5",preview:"flex justify-center border border-[var(--ui-border-muted)] relative p-4 rounded-[calc(var(--ui-radius)*1.5)]",code:"[&>div>pre]:rounded-t-none [&>div]:my-0"},variants:{code:{true:{preview:"border-b-0 rounded-b-none"}}}},g=_;var v,p;const k=u({extend:u(y),...((p=(v=g.uiPro)==null?void 0:v.prose)==null?void 0:p.codePreview)||{}}),B=f({__name:"CodePreview",props:{class:{},ui:{}},setup(m){const e=m,r=w(),o=C(()=>k({code:!!r.code}));return(a,h)=>{var t,c,d;return i(),n("div",{class:s(o.value.root({class:[e.class,(t=e.ui)==null?void 0:t.root]}))},[P("div",{class:s(o.value.preview({class:[(c=e.ui)==null?void 0:c.preview]}))},[l(a.$slots,"default")],2),r.code?(i(),n("div",{key:0,class:s(o.value.code({class:[(d=e.ui)==null?void 0:d.code]}))},[l(a.$slots,"code")],2)):b("",!0)],2)}}}),x=Object.assign(B,{__name:"ProseCodePreview"});export{x as default};
