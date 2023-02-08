import{r as B,I as wt,o as it,w as Bt,a as rt,p as J,i as X,c as f,b as z,d as w,g as ut,e as ct,f as Vt,h as dt,j as Tt,k as At,l as Ct,m as k,T as Rt,n as vt,q as ft,s as Lt,t as Y,u as r,v as mt,x as U,y as yt,z as Pt,A as zt,B as kt,C as pt,D as Q,E as tt,F as et,G as D,H as Et,J as Ht,K as Nt}from"./index.69852f9a.js";import{m as ot,u as T,a as Ot,b as Mt,c as Dt,d as jt,e as qt,f as Ft,g as Kt,V as G,h as Gt}from"./color.a455a82a.js";function Ut(t){const l=B(),n=B();if(wt){const e=new ResizeObserver(s=>{t==null||t(s,e),s.length&&(n.value=s[0].contentRect)});it(()=>{e.disconnect()}),Bt(l,(s,i)=>{i&&(e.unobserve(i),n.value=void 0),s&&e.observe(s)},{flush:"post"})}return{resizeRef:l,contentRect:rt(n)}}const j=Symbol.for("vuetify:layout"),gt=Symbol.for("vuetify:layout-item"),lt=1e3,Wt=J({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Zt=J({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Jt(){const t=X(j);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function Xt(t){var a;const l=X(j);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${Vt()}`,e=ut("useLayoutItem");dt(gt,{id:n});const s=B(!1);Tt(()=>s.value=!0),At(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=l.register(e,{...t,active:f(()=>s.value?!1:t.active.value),id:n});return it(()=>l.unregister(n)),{layoutItemStyles:i,layoutRect:l.layoutRect,layoutItemScrimStyles:o}}const Yt=(t,l,n,e)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of t){const a=l.get(o),d=n.get(o),y=e.get(o);if(!a||!d||!y)continue;const m={...s,[a.value]:parseInt(s[a.value],10)+(y.value?parseInt(d.value,10):0)};i.push({id:o,layer:m}),s=m}return i};function Qt(t){const l=X(j,null),n=f(()=>l?l.rootZIndex.value-100:lt),e=B([]),s=z(new Map),i=z(new Map),o=z(new Map),a=z(new Map),d=z(new Map),{resizeRef:y,contentRect:m}=Ut(),h=f(()=>{var u;const c=new Map,b=(u=t.overlaps)!=null?u:[];for(const S of b.filter(v=>v.includes(":"))){const[v,_]=S.split(":");if(!e.value.includes(v)||!e.value.includes(_))continue;const V=s.get(v),R=s.get(_),L=i.get(v),M=i.get(_);!V||!R||!L||!M||(c.set(_,{position:V.value,amount:parseInt(L.value,10)}),c.set(v,{position:R.value,amount:-parseInt(M.value,10)}))}return c}),p=f(()=>{const c=[...new Set([...o.values()].map(u=>u.value))].sort((u,S)=>u-S),b=[];for(const u of c){const S=e.value.filter(v=>{var _;return((_=o.get(v))==null?void 0:_.value)===u});b.push(...S)}return Yt(b,s,i,a)}),A=f(()=>!Array.from(d.values()).some(c=>c.value)),$=f(()=>p.value[p.value.length-1].layer),E=f(()=>({"--v-layout-left":w($.value.left),"--v-layout-right":w($.value.right),"--v-layout-top":w($.value.top),"--v-layout-bottom":w($.value.bottom),...A.value?void 0:{transition:"none"}})),I=f(()=>p.value.slice(1).map((c,b)=>{let{id:u}=c;const{layer:S}=p.value[b],v=i.get(u),_=s.get(u);return{id:u,...S,size:Number(v.value),position:_.value}})),C=c=>I.value.find(b=>b.id===c),H=ut("createLayout"),N=B(!1);ct(()=>{N.value=!0}),dt(j,{register:(c,b)=>{let{id:u,order:S,position:v,layoutSize:_,elementSize:V,active:R,disableTransitions:L,absolute:M}=b;o.set(u,S),s.set(u,v),i.set(u,_),a.set(u,R),L&&d.set(u,L);const nt=Ct(gt,H==null?void 0:H.vnode).indexOf(c);nt>-1?e.value.splice(nt,0,u):e.value.push(u);const at=f(()=>I.value.findIndex(P=>P.id===u)),q=f(()=>n.value+p.value.length*2-at.value*2),St=f(()=>{const P=v.value==="left"||v.value==="right",F=v.value==="right",It=v.value==="bottom",st={[v.value]:0,zIndex:q.value,transform:`translate${P?"X":"Y"}(${(R.value?0:-110)*(F||It?-1:1)}%)`,position:M.value||n.value!==lt?"absolute":"fixed",...A.value?void 0:{transition:"none"}};if(!N.value)return st;const x=I.value[at.value];if(!x)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const K=h.value.get(u);return K&&(x[K.position]+=K.amount),{...st,height:P?`calc(100% - ${x.top}px - ${x.bottom}px)`:V.value?`${V.value}px`:void 0,left:F?void 0:`${x.left}px`,right:F?`${x.right}px`:void 0,top:v.value!=="bottom"?`${x.top}px`:void 0,bottom:v.value!=="top"?`${x.bottom}px`:void 0,width:P?V.value?`${V.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),$t=f(()=>({zIndex:q.value-1}));return{layoutItemStyles:St,layoutItemScrimStyles:$t,zIndex:q}},unregister:c=>{o.delete(c),s.delete(c),i.delete(c),a.delete(c),d.delete(c),e.value=e.value.filter(b=>b!==c)},mainRect:$,mainStyles:E,getLayoutItem:C,items:I,layoutRect:m,rootZIndex:n});const O=f(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),xt=f(()=>({zIndex:n.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:O,layoutStyles:xt,getLayoutItem:C,items:I,layoutRect:m,layoutRef:y}}function g(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return k({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:l}},setup(e,s){let{slots:i}=s;return()=>{const o=e.group?Rt:vt;return ft(o,{name:t,mode:e.mode,onBeforeEnter(a){a.style.transformOrigin=e.origin},onLeave(a){if(e.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:m,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${d}px`,a.style.left=`${y}px`,a.style.width=`${m}px`,a.style.height=`${h}px`}e.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(e.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:d,top:y,left:m,width:h,height:p}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=d||"",a.style.top=y||"",a.style.left=m||"",a.style.width=h||"",a.style.height=p||""}}},i.default)}}})}function ht(t,l){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k({name:t,props:{mode:{type:String,default:n}},setup(e,s){let{slots:i}=s;return()=>ft(vt,{name:t,...l},i.default)}})}function bt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",e=Lt(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const d=`${o[e]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=d})},onAfterEnter:i,onEnterCancelled:i,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[e]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(o){t&&o._parent&&o._parent.classList.remove(t),i(o)}function i(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}g("fab-transition","center center","out-in");g("dialog-bottom-transition");g("dialog-top-transition");g("fade-transition");g("scale-transition");g("scroll-x-transition");g("scroll-x-reverse-transition");g("scroll-y-transition");g("scroll-y-reverse-transition");g("slide-x-transition");g("slide-x-reverse-transition");g("slide-y-transition");g("slide-y-reverse-transition");const te=ht("expand-transition",bt());ht("expand-x-transition",bt("",!0));const W=Y()({name:"VToolbarTitle",props:{text:String,...ot()},setup(t,l){let{slots:n}=l;return T(()=>{var e;const s=!!(n.default||n.text||t.text);return r(t.tag,{class:"v-toolbar-title"},{default:()=>[s&&r("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(e=n.default)==null?void 0:e.call(n)])]})}),{}}}),ee=[null,"prominent","default","comfortable","compact"],_t=J({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>ee.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ot(),...Mt(),...Dt(),...ot({tag:"header"}),...mt()},"v-toolbar"),Z=Y()({name:"VToolbar",props:_t(),setup(t,l){var n;let{slots:e}=l;const{backgroundColorClasses:s,backgroundColorStyles:i}=jt(U(t,"color")),{borderClasses:o}=qt(t),{elevationClasses:a}=Ft(t),{roundedClasses:d}=Kt(t),{themeClasses:y}=yt(t),m=B(!!(t.extended||(n=e.extension)!=null&&n.call(e))),h=f(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),p=f(()=>m.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Pt({VBtn:{variant:"text"}}),T(()=>{var A,$,E,I,C;const H=!!(t.title||e.title),N=!!(e.image||t.image),O=(A=e.extension)==null?void 0:A.call(e);return m.value=!!(t.extended||O),r(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,o.value,a.value,d.value,y.value],style:[i.value]},{default:()=>[N&&r("div",{key:"image",class:"v-toolbar__image"},[r(G,{defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[e.image?($=e.image)==null?void 0:$.call(e):r(Gt,null,null)]})]),r(G,{defaults:{VTabs:{height:w(h.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:w(h.value)}},[e.prepend&&r("div",{class:"v-toolbar__prepend"},[(E=e.prepend)==null?void 0:E.call(e)]),H&&r(W,{key:"title",text:t.title},{text:e.title}),(I=e.default)==null?void 0:I.call(e),e.append&&r("div",{class:"v-toolbar__append"},[(C=e.append)==null?void 0:C.call(e)])])]}),r(G,{defaults:{VTabs:{height:w(p.value)}}},{default:()=>[r(te,null,{default:()=>[m.value&&r("div",{class:"v-toolbar__extension",style:{height:w(p.value)}},[O])]})]})]})}),{contentHeight:h,extensionHeight:p}}});function oe(t){var l;return zt(t,Object.keys((l=Z==null?void 0:Z.props)!=null?l:{}))}const ne=Y()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},..._t(),...Zt(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,l){let{slots:n}=l;const e=B(),s=kt(t,"modelValue"),i=f(()=>{var h,p;var a,d;const y=(h=(a=e.value)==null?void 0:a.contentHeight)!=null?h:0,m=(p=(d=e.value)==null?void 0:d.extensionHeight)!=null?p:0;return y+m}),{layoutItemStyles:o}=Xt({id:t.name,order:f(()=>parseInt(t.order,10)),position:U(t,"location"),layoutSize:i,elementSize:i,active:s,absolute:U(t,"absolute")});return T(()=>{const[a]=oe(t);return r(Z,pt({ref:e,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...o.value,height:void 0}},a),n)}),{}}}),ae=k({name:"VAppBarTitle",props:{...W.props},setup(t,l){let{slots:n}=l;return T(()=>r(W,pt(t,{class:"v-app-bar-title"}),n)),{}}}),se=Q({__name:"AppBar",setup(t){return(l,n)=>(tt(),et(ne,{flat:""},{default:D(()=>[r(ae,null,{default:D(()=>[Et(" BlueOS Store Apps ")]),_:1})]),_:1}))}});function le(){const t=B(!1);return ct(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:f(()=>t.value?void 0:{transition:"none !important"}),isBooted:rt(t)}}const ie=k({name:"VMain",props:{scrollable:Boolean,...ot({tag:"main"})},setup(t,l){let{slots:n}=l;const{mainStyles:e}=Jt(),{ssrBootStyles:s}=le();return T(()=>{var i,o;return r(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[e.value,s.value]},{default:()=>[t.scrollable?r("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(o=n.default)==null?void 0:o.call(n)]})}),{}}}),re=Q({__name:"View",setup(t){return(l,n)=>{const e=Ht("router-view");return tt(),et(ie,null,{default:D(()=>[r(e)]),_:1})}}});const ue=k({name:"VApp",props:{...Wt({fullHeight:!0}),...mt()},setup(t,l){let{slots:n}=l;const e=yt(t),{layoutClasses:s,layoutStyles:i,getLayoutItem:o,items:a,layoutRef:d}=Qt(t),{rtlClasses:y}=Nt();return T(()=>{var m;return r("div",{ref:d,class:["v-application",e.themeClasses.value,s.value,y.value],style:i.value},[r("div",{class:"v-application__wrap"},[(m=n.default)==null?void 0:m.call(n)])])}),{getLayoutItem:o,items:a,theme:e}}}),fe=Q({__name:"Default",setup(t){return(l,n)=>(tt(),et(ue,null,{default:D(()=>[r(se),r(re)]),_:1}))}});export{fe as default};
