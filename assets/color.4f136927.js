import{g as L,D as U,L as Q,z as X,p as _,c as g,d as h,m as V,u as i,S as j,q as G,C as J,n as K,r as b,w as x,M as Y,N as Z,O as W,P as ee,Q as te,R as ne,U as H,V as y,W as re,X as T}from"./index.47e5c53a.js";function O(e){const n=L("useRender");n.render=e}const ge=U({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:r}=n;const{defaults:t,reset:l,root:a,scoped:o}=Q(e);return X(t,{reset:l,root:a,scoped:o}),()=>{var d;return(d=r.default)==null?void 0:d.call(r)}}});const ae=_({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function se(e){return{dimensionStyles:g(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function le(e){return{aspectStyles:g(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const oe=V({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ae()},setup(e,n){let{slots:r}=n;const{aspectStyles:t}=le(e),{dimensionStyles:l}=se(e);return O(()=>{var a;return i("div",{class:"v-responsive",style:l.value},[i("div",{class:"v-responsive__sizer",style:t.value},null),(a=r.additional)==null?void 0:a.call(r),r.default&&i("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}});function ie(e,n){if(!j)return;const r=n.modifiers||{},t=n.value,{handler:l,options:a}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var d;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[n.instance.$.uid];if(!v)return;const S=f.some(C=>C.isIntersecting);l&&(!r.quiet||v.init)&&(!r.once||S||v.init)&&l(S,f,c),S&&r.once?D(e,n):v.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function D(e,n){var r;const t=(r=e._observe)==null?void 0:r[n.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const ue={mounted:ie,unmounted:D},ce=ue,de=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),N=(e,n)=>{let{slots:r}=n;const{transition:t,...l}=e,{component:a=K,...o}=typeof t=="object"?t:{};return G(a,J(typeof t=="string"?{name:t}:o,l),r)},me=V({name:"VImg",directives:{intersect:ce},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...de()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:r,slots:t}=n;const l=b(""),a=b(),o=b(e.eager?"loading":"idle"),d=b(),f=b(),c=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=g(()=>c.value.aspect||d.value/f.value||0);x(()=>e.src,()=>{S(o.value!=="idle")}),x(v,(s,u)=>{!s&&u&&a.value&&$(a.value)}),Y(()=>S());function S(s){if(!(e.eager&&s)&&!(j&&!s&&!e.eager)){if(o.value="loading",c.value.lazySrc){const u=new Image;u.src=c.value.lazySrc,$(u,null)}!c.value.src||Z(()=>{var u,m;if(r("loadstart",((u=a.value)==null?void 0:u.currentSrc)||c.value.src),(m=a.value)!=null&&m.complete){if(a.value.naturalWidth||R(),o.value==="error")return;v.value||$(a.value,null),C()}else v.value||$(a.value),k()})}}function C(){var s;k(),o.value="loaded",r("load",((s=a.value)==null?void 0:s.currentSrc)||c.value.src)}function R(){var s;o.value="error",r("error",((s=a.value)==null?void 0:s.currentSrc)||c.value.src)}function k(){const s=a.value;s&&(l.value=s.currentSrc||s.src)}let z=-1;function $(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(z);const{naturalHeight:B,naturalWidth:P}=s;B||P?(d.value=P,f.value=B):!s.complete&&o.value==="loading"&&u!=null?z=window.setTimeout(m,u):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};m()}const w=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var s;if(!c.value.src||o.value==="idle")return null;const u=i("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:C,onError:R},null),m=(s=t.sources)==null?void 0:s.call(t);return i(N,{transition:e.transition,appear:!0},{default:()=>[W(m?i("picture",{class:"v-img__picture"},[m,u]):u,[[ne,o.value==="loaded"]])]})},q=()=>i(N,{transition:e.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:""},null)]}),M=()=>t.placeholder?i(N,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&i("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,p=()=>t.error?i(N,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&i("div",{class:"v-img__error"},[t.error()])]}):null,A=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,I=b(!1);{const s=x(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{I.value=!0})}),s())})}return O(()=>W(i(oe,{class:["v-img",{"v-img--booting":!I.value}],style:{width:h(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>i(te,null,[i(F,null,null),i(q,null,null),i(A,null,null),i(M,null,null),i(p,null,null)]),default:t.default}),[[ee("intersect"),{handler:S,options:e.options},null,{once:!0}]])),{currentSrc:l,image:a,state:o,naturalWidth:d,naturalHeight:f}}}),fe=_({tag:{type:String,default:"div"}},"tag"),Se=_({border:[Boolean,Number,String]},"border");function he(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{borderClasses:g(()=>{const t=y(e)?e.value:e.border,l=[];if(t===!0||t==="")l.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))l.push(`border-${a}`);return l})}}const be=_({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function _e(e){return{elevationClasses:g(()=>{const r=y(e)?e.value:e.elevation,t=[];return r==null||t.push(`elevation-${r}`),t})}}const ye=_({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{roundedClasses:g(()=>{const t=y(e)?e.value:e.rounded,l=[];if(t===!0||t==="")l.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))l.push(`rounded-${a}`);return l})}}function E(e){return re(()=>{const n=[],r={};return e.value.background&&(T(e.value.background)?r.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(T(e.value.text)?(r.color=e.value.text,r.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:r}})}function $e(e,n){const r=g(()=>({text:y(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:l}=E(r);return{textColorClasses:t,textColorStyles:l}}function Ne(e,n){const r=g(()=>({background:y(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:l}=E(r);return{backgroundColorClasses:t,backgroundColorStyles:l}}export{ge as V,Se as a,be as b,ye as c,Ne as d,he as e,_e as f,Ce as g,me as h,E as i,$e as j,ae as k,se as l,fe as m,O as u};