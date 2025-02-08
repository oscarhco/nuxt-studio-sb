import{d as E,af as G,A as H,i as a,G as c,w as U,R as r,g as J,n,c as l,f as o,ac as p,t as g,F as j,J as z,H as B,S as L,U as O,aC as x,aj as R,as as T,by as q,ae as K}from"./BckcLqLM.js";import M from"./CKNcUnlS.js";const Q={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",wrapper:"",headline:"mb-3",leading:"flex items-center mb-6",leadingIcon:"size-10 shrink-0 text-[var(--ui-primary)]",title:"text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-[var(--ui-text-highlighted)]",description:"text-base sm:text-lg text-[var(--ui-text-muted)]",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3",features:"mt-8 grid"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty",features:"gap-4"},vertical:{container:"",headline:"justify-center",leading:"justify-center",title:"text-center",description:"text-center text-balance",links:"justify-center",features:"sm:grid-cols-2 lg:grid-cols-3 gap-8"}},reverse:{true:{wrapper:"lg:order-last"}},headline:{true:{headline:"font-semibold text-[var(--ui-primary)] flex items-center gap-1.5"}},title:{true:{description:"mt-6"}},description:{true:""},features:{true:""}},compoundVariants:[{orientation:"vertical",title:!0,class:{features:"mt-16"}},{orientation:"vertical",description:!0,class:{features:"mt-16"}},{orientation:"vertical",features:!0,class:{links:"mt-16"}}]},W={key:2,class:"hidden lg:block"},X=K;var I;const Y=x({extend:x(Q),...((I=X.uiPro)==null?void 0:I.pageSection)||{}}),Z=E({__name:"PageSection",props:{as:{default:"section"},headline:{},icon:{},title:{},description:{},links:{},features:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(V){const s=V,t=G(),i=H(()=>{var e;return Y({orientation:s.orientation,reverse:s.reverse,title:!!s.title||!!t.title,description:!!s.description||!!t.description,features:!!((e=s.features)!=null&&e.length)||!!t.features})});return(e,ee)=>{var f;const F=R,N=M,A=T,D=q;return a(),c(L(O),{as:e.as,"data-orientation":e.orientation,class:n(i.value.root({class:[s.class,(f=s.ui)==null?void 0:f.root]}))},{default:U(()=>{var m;return[r(e.$slots,"top"),J(D,{class:n(i.value.container({class:(m=s.ui)==null?void 0:m.container}))},{default:U(()=>{var h,v,k,y,b,S,$,C,P,_,w;return[e.icon||t.leading||e.headline||t.headline||e.title||t.title||e.description||t.description||(h=e.features)!=null&&h.length||t.features||(v=e.links)!=null&&v.length||t.links?(a(),l("div",{key:0,class:n(i.value.wrapper({class:(k=s.ui)==null?void 0:k.wrapper}))},[e.icon||t.leading?(a(),l("div",{key:0,class:n(i.value.leading({class:(y=s.ui)==null?void 0:y.leading}))},[r(e.$slots,"leading",{},()=>{var u;return[e.icon?(a(),c(F,{key:0,name:e.icon,class:n(i.value.leadingIcon({class:(u=s.ui)==null?void 0:u.leadingIcon}))},null,8,["name","class"])):o("",!0)]})],2)):o("",!0),e.headline||t.headline?(a(),l("div",{key:1,class:n(i.value.headline({class:(b=s.ui)==null?void 0:b.headline,headline:!t.headline}))},[r(e.$slots,"headline",{},()=>[p(g(e.headline),1)])],2)):o("",!0),e.title||t.title?(a(),l("h2",{key:2,class:n(i.value.title({class:(S=s.ui)==null?void 0:S.title}))},[r(e.$slots,"title",{},()=>[p(g(e.title),1)])],2)):o("",!0),e.description||t.description?(a(),l("div",{key:3,class:n(i.value.description({class:($=s.ui)==null?void 0:$.description}))},[r(e.$slots,"description",{},()=>[p(g(e.description),1)])],2)):o("",!0),(C=e.features)!=null&&C.length||t.features?(a(),l("ul",{key:4,class:n(i.value.features({class:(P=s.ui)==null?void 0:P.features}))},[r(e.$slots,"features",{},()=>[(a(!0),l(j,null,z(e.features,(u,d)=>(a(),c(N,B({key:d,as:"li",ref_for:!0},u),null,16))),128))])],2)):o("",!0),(_=e.links)!=null&&_.length||t.links?(a(),l("div",{key:5,class:n(i.value.links({class:(w=s.ui)==null?void 0:w.links}))},[r(e.$slots,"links",{},()=>[(a(!0),l(j,null,z(e.links,(u,d)=>(a(),c(A,B({key:d,size:"lg",ref_for:!0},u),null,16))),128))])],2)):o("",!0)],2)):o("",!0),t.default?r(e.$slots,"default",{key:1}):e.orientation==="horizontal"?(a(),l("div",W)):o("",!0)]}),_:3},8,["class"]),r(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),ae=Object.assign(Z,{__name:"UPageSection"});export{ae as default};
