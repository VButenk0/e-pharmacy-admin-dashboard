import{_ as W,c as r,j as d,q as R,r as V,t as U,w as k}from"./index-jOJm0qSQ.js";import{a as E,b as G,q as Q,k as j,c as h,B as X,d as q,o as Y,e as D}from"./helperFunctions-D5Gpkkae.js";function Z(a){return E("MuiPagination",a)}G("MuiPagination",["root","ul","outlined","text"]);const S=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function w(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:n=!1,onChange:p,page:f,showFirstButton:z=!1,showLastButton:L=!1,siblingCount:y=1}=a,l=W(a,S),[e,B]=Q({controlled:f,default:v,name:o,state:"page"}),I=(i,C)=>{f||B(C),p&&p(i,C)},u=(i,C)=>{const J=C-i+1;return Array.from({length:J},(ua,K)=>i+K)},N=u(1,Math.min(t,s)),g=u(Math.max(s-t+1,t+1),s),M=Math.max(Math.min(e-y,s-t-y*2-1),t+2),$=Math.min(Math.max(e+y,t+y*2+2),g.length>0?g[0]-2:s-1),O=[...z?["first"]:[],...n?[]:["previous"],...N,...M>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...u(M,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...g,...x?[]:["next"],...L?["last"]:[]],m=i=>{switch(i){case"first":return 1;case"previous":return e-1;case"next":return e+1;case"last":return s;default:return null}},P=O.map(i=>typeof i=="number"?{onClick:C=>{I(C,i)},type:"page",page:i,selected:i===e,disabled:b,"aria-current":i===e?"true":void 0}:{onClick:C=>{I(C,m(i))},type:i,page:m(i),selected:!1,disabled:b||i.indexOf("ellipsis")===-1&&(i==="next"||i==="last"?e>=s:e<=1)});return r({items:P},l)}function aa(a){return E("MuiPaginationItem",a)}const c=G("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),_=j(d.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),T=j(d.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),A=j(d.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),F=j(d.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ta=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],H=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${k(o.size)}`],o.variant==="text"&&t[`text${k(o.color)}`],o.variant==="outlined"&&t[`outlined${k(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},oa=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:x,type:n,variant:p}=a,f={root:["root",`size${k(b)}`,p,x,o!=="standard"&&`color${k(o)}`,o!=="standard"&&`${p}${k(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n]],icon:["icon"]};return D(f,aa,t)},sa=h("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ia=h(X,{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${c.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:R(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:R(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${c.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),ea=h("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),na=V.forwardRef(function(t,o){const s=q({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:x,components:n={},disabled:p=!1,page:f,selected:z=!1,shape:L="circular",size:y="medium",slots:l={},type:e="page",variant:B="text"}=s,I=W(s,ta),u=r({},s,{color:b,disabled:p,selected:z,shape:L,size:y,type:e,variant:B}),N=Y(),g=oa(u),$=(N?{previous:l.next||n.next||F,next:l.previous||n.previous||A,last:l.first||n.first||_,first:l.last||n.last||T}:{previous:l.previous||n.previous||A,next:l.next||n.next||F,first:l.first||n.first||_,last:l.last||n.last||T})[e];return e==="start-ellipsis"||e==="end-ellipsis"?d.jsx(sa,{ref:o,ownerState:u,className:U(g.root,v),children:"…"}):d.jsxs(ia,r({ref:o,ownerState:u,component:x,disabled:p,className:U(g.root,v)},I,{children:[e==="page"&&f,$?d.jsx(ea,{as:$,ownerState:u,className:g.icon}):null]}))}),ra=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],la=a=>{const{classes:t,variant:o}=a;return D({root:["root",o],ul:["ul"]},Z,t)},ca=h("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),da=h("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function pa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const ba=V.forwardRef(function(t,o){const s=q({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:x="standard",count:n=1,defaultPage:p=1,disabled:f=!1,getItemAriaLabel:z=pa,hideNextButton:L=!1,hidePrevButton:y=!1,renderItem:l=P=>d.jsx(na,r({},P)),shape:e="circular",showFirstButton:B=!1,showLastButton:I=!1,siblingCount:u=1,size:N="medium",variant:g="text"}=s,M=W(s,ra),{items:$}=w(r({},s,{componentName:"Pagination"})),O=r({},s,{boundaryCount:v,color:x,count:n,defaultPage:p,disabled:f,getItemAriaLabel:z,hideNextButton:L,hidePrevButton:y,renderItem:l,shape:e,showFirstButton:B,showLastButton:I,siblingCount:u,size:N,variant:g}),m=la(O);return d.jsx(ca,r({"aria-label":"pagination navigation",className:U(m.root,b),ownerState:O,ref:o},M,{children:d.jsx(da,{className:m.ul,ownerState:O,children:$.map((P,i)=>d.jsx("li",{children:l(r({},P,{color:x,"aria-label":z(P.type,P.page,P.selected),shape:e,size:N,variant:g}))},i))})}))});export{ba as P,na as a};
