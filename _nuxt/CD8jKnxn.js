import{d as B,af as z,A as N,i as s,G as y,w as x,R as n,g as S,n as l,e as U,c as o,ac as c,t as d,f as r,F as V,J as j,H as F,S as A,U as D,aC as b,as as E,by as G,ae as J}from"./BckcLqLM.js";const L={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",wrapper:"",headline:"mb-4",title:"text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-[var(--ui-text-highlighted)]",description:"text-lg sm:text-xl/8 text-[var(--ui-text-muted)]",links:"mt-10 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",headline:"justify-center",wrapper:"text-center",description:"text-balance",links:"justify-center"}},reverse:{true:{wrapper:"order-last"}},headline:{true:{headline:"font-semibold text-[var(--ui-primary)] flex items-center gap-1.5"}},title:{true:{description:"mt-6"}}}},O={key:1,class:"hidden lg:block"},R=J;var w;const T=b({extend:b(L),...((w=R.uiPro)==null?void 0:w.pageHero)||{}}),q=B({__name:"PageHero",props:{as:{},headline:{},title:{},description:{},links:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(C){const t=C,a=z(),i=N(()=>T({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!a.title}));return(e,I)=>{var p;const _=E,H=G;return s(),y(A(D),{as:e.as,"data-orientation":e.orientation,class:l(i.value.root({class:[t.class,(p=t.ui)==null?void 0:p.root]}))},{default:x(()=>{var u;return[n(e.$slots,"top"),S(H,{class:l(i.value.container({class:(u=t.ui)==null?void 0:u.container}))},{default:x(()=>{var m,g,h,f,v,k;return[U("div",{class:l(i.value.wrapper({class:(m=t.ui)==null?void 0:m.wrapper}))},[e.headline||a.headline?(s(),o("div",{key:0,class:l(i.value.headline({class:(g=t.ui)==null?void 0:g.headline,headline:!a.headline}))},[n(e.$slots,"headline",{},()=>[c(d(e.headline),1)])],2)):r("",!0),e.title||a.title?(s(),o("h1",{key:1,class:l(i.value.title({class:(h=t.ui)==null?void 0:h.title}))},[n(e.$slots,"title",{},()=>[c(d(e.title),1)])],2)):r("",!0),e.description||a.description?(s(),o("div",{key:2,class:l(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[n(e.$slots,"description",{},()=>[c(d(e.description),1)])],2)):r("",!0),(v=e.links)!=null&&v.length||a.links?(s(),o("div",{key:3,class:l(i.value.links({class:(k=t.ui)==null?void 0:k.links}))},[n(e.$slots,"links",{},()=>[(s(!0),o(V,null,j(e.links,(P,$)=>(s(),y(_,F({key:$,size:"xl",ref_for:!0},P),null,16))),128))])],2)):r("",!0)],2),a.default?n(e.$slots,"default",{key:0}):e.orientation==="horizontal"?(s(),o("div",O)):r("",!0)]}),_:3},8,["class"]),n(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),M=Object.assign(q,{__name:"UPageHero"});export{M as default};
