import{d as p,L as M,O as w,a2 as m,P as k,r as C,a0 as B,i as b,G as h,w as f,R as y,S as a,U as V,V as R,g,bk as z,A as v,o as S,aN as L,f as _,br as A,$ as H,Z as O,E as P,Q as D,bs as E,H as F}from"./BckcLqLM.js";import{_ as K}from"./sEo6W6yX.js";const[$,N]=R("TabsRoot"),Q=p({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(d,{emit:n}){const o=d,e=n,{orientation:l,unmountOnHide:r,dir:s}=M(o),t=w(s);m();const i=k(o,"modelValue",e,{defaultValue:o.defaultValue,passive:o.modelValue===void 0}),u=C();return N({modelValue:i,changeModelValue:c=>{i.value=c},orientation:l,dir:t,unmountOnHide:r,activationMode:o.activationMode,baseId:B(void 0,"reka-tabs"),tabsList:u}),(c,q)=>(b(),h(a(V),{dir:a(t),"data-orientation":a(l),"as-child":c.asChild,as:c.as},{default:f(()=>[y(c.$slots,"default",{modelValue:a(i)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),U=p({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(d){const n=d,{loop:o}=M(n),{forwardRef:e,currentElement:l}=m(),r=$();return r.tabsList=l,(s,t)=>(b(),h(a(z),{"as-child":"",orientation:a(r).orientation.value,dir:a(r).dir.value,loop:a(o)},{default:f(()=>[g(a(V),{ref:a(e),role:"tablist","as-child":s.asChild,as:s.as,"aria-orientation":a(r).orientation.value},{default:f(()=>[y(s.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function I(d,n){return`${d}-trigger-${n}`}function T(d,n){return`${d}-content-${n}`}const W=p({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(d){const n=d,{forwardRef:o}=m(),e=$(),l=v(()=>I(e.baseId,n.value)),r=v(()=>T(e.baseId,n.value)),s=v(()=>n.value===e.modelValue.value),t=C(s.value);return S(()=>{requestAnimationFrame(()=>{t.value=!1})}),(i,u)=>(b(),h(a(A),{present:i.forceMount||s.value,"force-mount":""},{default:f(({present:c})=>[g(a(V),{id:r.value,ref:a(o),"as-child":i.asChild,as:i.as,role:"tabpanel","data-state":s.value?"active":"inactive","data-orientation":a(e).orientation.value,"aria-labelledby":l.value,hidden:!c,tabindex:"0",style:L({animationDuration:t.value?"0s":void 0})},{default:f(()=>[!a(e).unmountOnHide.value||c?y(i.$slots,"default",{key:0}):_("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),Z=p({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(d){const n=d,{forwardRef:o}=m(),e=$(),l=v(()=>I(e.baseId,n.value)),r=v(()=>T(e.baseId,n.value)),s=v(()=>n.value===e.modelValue.value);return(t,i)=>(b(),h(a(K),{"as-child":"",focusable:!t.disabled,active:s.value},{default:f(()=>[g(a(V),{id:l.value,ref:a(o),role:"tab",type:t.as==="button"?"button":void 0,as:t.as,"as-child":t.asChild,"aria-selected":s.value?"true":"false","aria-controls":r.value,"data-state":s.value?"active":"inactive",disabled:t.disabled,"data-disabled":t.disabled?"":void 0,"data-orientation":a(e).orientation.value,onMousedown:i[0]||(i[0]=H(u=>{!t.disabled&&u.ctrlKey===!1?a(e).changeModelValue(t.value):u.preventDefault()},["left"])),onKeydown:i[1]||(i[1]=O(u=>a(e).changeModelValue(t.value),["enter","space"])),onFocus:i[2]||(i[2]=()=>{const u=a(e).activationMode!=="manual";!s.value&&!t.disabled&&u&&a(e).changeModelValue(t.value)})},{default:f(()=>[y(t.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),J=p({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(d){const n=d,o=$();m();const e=C(),l=C({size:null,position:null});P(()=>[o.modelValue.value,o==null?void 0:o.dir.value],async()=>{await D(),r()},{immediate:!0}),E([o.tabsList,e],r);function r(){var s;e.value=(s=o.tabsList.value)==null?void 0:s.querySelector('[role="tab"][data-state="active"]'),e.value&&(o.orientation.value==="horizontal"?l.value={size:e.value.offsetWidth,position:e.value.offsetLeft}:l.value={size:e.value.offsetHeight,position:e.value.offsetTop})}return(s,t)=>typeof l.value.size=="number"?(b(),h(a(V),F({key:0},n,{style:{"--reka-tabs-indicator-size":`${l.value.size}px`,"--reka-tabs-indicator-position":`${l.value.position}px`}}),{default:f(()=>[y(s.$slots,"default")]),_:3},16,["style"])):_("",!0)}});export{J as _,U as a,Q as b,Z as c,W as d};
