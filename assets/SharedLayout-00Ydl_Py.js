import{g as U,r as d,p as f,N as F,u as B,R as q,j as t,b as M,s as z,c as K,d as V,L as k,O as G}from"./index-BafUE7VM.js";import{P as i,O as X,F as Y,M as I}from"./Modal-CiymlftV.js";import{s as x}from"./sprite-DRLobJkB.js";import{l as Z}from"./logo-Hhs7serZ.js";import"./index.esm-DqhOQcHW.js";import"./helperFunctions-av6ioSE7.js";var j={};j.match=ne;j.parse=R;var J=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,ee=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,te=/^(?:(min|max)-)?(.+)/,se=/(em|rem|px|cm|mm|in|pt|pc)?$/,re=/(dpi|dpcm|dppx)?$/;function ne(e,s){return R(e).some(function(r){var o=r.inverse,n=r.type==="all"||s.type===r.type;if(n&&o||!(n||o))return!1;var l=r.expressions.every(function(a){var h=a.feature,g=a.modifier,c=a.value,u=s[h];if(!u)return!1;switch(h){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=O(c),u=O(u);break;case"resolution":c=E(c),u=E(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=L(c),u=L(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0;break}switch(g){case"min":return u>=c;case"max":return u<=c;default:return u===c}});return l&&!o||!l&&o})}function R(e){return e.split(",").map(function(s){s=s.trim();var r=s.match(J),o=r[1],n=r[2],l=r[3]||"",a={};return a.inverse=!!o&&o.toLowerCase()==="not",a.type=n?n.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],a.expressions=l.map(function(h){var g=h.match(ee),c=g[1].toLowerCase().match(te);return{modifier:c[1],feature:c[2],value:g[2]}}),a})}function L(e){var s=Number(e),r;return s||(r=e.match(/^(\d+)\s*\/\s*(\d+)$/),s=r[1]/r[2]),s}function E(e){var s=parseFloat(e),r=String(e).match(re)[1];switch(r){case"dpcm":return s/2.54;case"dppx":return s*96;default:return s}}function O(e){var s=parseFloat(e),r=String(e).match(se)[1];switch(r){case"em":return s*16;case"rem":return s*16;case"cm":return s*96/2.54;case"mm":return s*96/2.54/10;case"in":return s*96;case"pt":return s*72;case"pc":return s*72/12;default:return s}}var oe=j.match,S=typeof window<"u"?window.matchMedia:null;function ie(e,s,r){var o=this,n;S&&!r&&(n=S.call(window,e)),n?(this.matches=n.matches,this.media=n.media,n.addListener(h)):(this.matches=oe(e,s),this.media=e),this.addListener=l,this.removeListener=a,this.dispose=g;function l(c){n&&n.addListener(c)}function a(c){n&&n.removeListener(c)}function h(c){o.matches=c.matches,o.media=c.media}function g(){n&&n.removeListener(h)}}function ae(e,s,r){return new ie(e,s,r)}var ce=ae;const le=U(ce);var de=/[A-Z]/g,ue=/^ms-/,y={};function he(e){return"-"+e.toLowerCase()}function D(e){if(y.hasOwnProperty(e))return y[e];var s=e.replace(de,he);return y[e]=ue.test(s)?"-"+s:s}function pe(e,s){if(e===s)return!0;if(!e||!s)return!1;const r=Object.keys(e),o=Object.keys(s),n=r.length;if(o.length!==n)return!1;for(let l=0;l<n;l++){const a=r[l];if(e[a]!==s[a]||!Object.prototype.hasOwnProperty.call(s,a))return!1}return!0}const p=i.oneOfType([i.string,i.number]),w={all:i.bool,grid:i.bool,aural:i.bool,braille:i.bool,handheld:i.bool,print:i.bool,projection:i.bool,screen:i.bool,tty:i.bool,tv:i.bool,embossed:i.bool},W={orientation:i.oneOf(["portrait","landscape"]),scan:i.oneOf(["progressive","interlace"]),aspectRatio:i.string,deviceAspectRatio:i.string,height:p,deviceHeight:p,width:p,deviceWidth:p,color:i.bool,colorIndex:i.bool,monochrome:i.bool,resolution:p,type:Object.keys(w)},{type:Xe,...fe}=W,T={minAspectRatio:i.string,maxAspectRatio:i.string,minDeviceAspectRatio:i.string,maxDeviceAspectRatio:i.string,minHeight:p,maxHeight:p,minDeviceHeight:p,maxDeviceHeight:p,minWidth:p,maxWidth:p,minDeviceWidth:p,maxDeviceWidth:p,minColor:i.number,maxColor:i.number,minColorIndex:i.number,maxColorIndex:i.number,minMonochrome:i.number,maxMonochrome:i.number,minResolution:p,maxResolution:p,...fe},xe={...w,...T};var me={all:xe,types:w,matchers:W,features:T};const ge=e=>`not ${e}`,ve=(e,s)=>{const r=D(e);return typeof s=="number"&&(s=`${s}px`),s===!0?r:s===!1?ge(r):`(${r}: ${s})`},ye=e=>e.join(" and "),be=e=>{const s=[];return Object.keys(me.all).forEach(r=>{const o=e[r];o!=null&&s.push(ve(r,o))}),ye(s)},je=d.createContext(void 0),we=e=>e.query||be(e),C=e=>e?Object.keys(e).reduce((r,o)=>(r[D(o)]=e[o],r),{}):void 0,N=()=>{const e=d.useRef(!1);return d.useEffect(()=>{e.current=!0},[]),e.current},Me=e=>{const s=d.useContext(je),r=()=>C(e)||C(s),[o,n]=d.useState(r);return d.useEffect(()=>{const l=r();pe(o,l)||n(l)},[e,s]),o},ke=e=>{const s=()=>we(e),[r,o]=d.useState(s);return d.useEffect(()=>{const n=s();r!==n&&o(n)},[e]),r},Le=(e,s)=>{const r=()=>le(e,s||{},!!s),[o,n]=d.useState(r),l=N();return d.useEffect(()=>{if(l){const a=r();return n(a),()=>{a&&a.dispose()}}},[e,s]),o},Ee=e=>{const[s,r]=d.useState(e.matches);return d.useEffect(()=>{const o=n=>{r(n.matches)};return e.addListener(o),r(e.matches),()=>{e.removeListener(o)}},[e]),s},b=(e,s,r)=>{const o=Me(s),n=ke(e);if(!n)throw new Error("Invalid or missing MediaQuery!");const l=Le(n,o),a=Ee(l),h=N();return d.useEffect(()=>{h&&r&&r(a)},[a]),d.useEffect(()=>()=>{l&&l.dispose()},[]),a},Oe=f.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 84px;
  height: 100%;

  @media only screen and (max-width: 767px) {
    width: 78px;
  }
`,Se=f.div`
  display: flex;
  width: auto;
  height: 100%;
  z-index: 1000;
  background-color: var(--bg-color);
`,Ce=f.button`
  flex-shrink: 0;
  background-color: transparent;
  position: absolute;
  border: none;
  padding: 0;
  top: 20px;
  right: 14px;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.4;
  }
`,Ie=f.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: space-between;
  padding: 92px 20px 20px;
`,Re=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 15px 40px 15px 20px;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
`,De=f.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media only screen and (max-width: 767px) {
    gap: 20px;

    & a img {
      width: 32px;
      height: 32px;
    }
  }
`,We=f.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media only screen and (max-width: 1439px) {
    gap: 32px;
  }
  @media only screen and (max-width: 767px) {
    gap: 20px;
  }
`,Te=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ne=f.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  line-height: 1.16667;
`,Pe=f.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--trans-text);
  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 1.5;
`,P=f.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: var(--accent);

  transition: all 0.2s;

  &:hover {
    background-color: var(--accent-hover);
  }
`,_e=f.svg`
  stroke: var(--primary-text);
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    stroke: var(--accent);
  }
`,$e=f.div`
  display: flex;
  justify-content: center;

  height: 100%;

  position: fixed;
  top: 81px;
  left: 0;
  z-index: 10;

  padding: 40px 18px;

  background-color: var(--bg-color);
  border-right: 1px solid var(--border-color);
`,_=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`,m=f(F)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: var(--white);

  svg {
    fill: var(--secondary-text);
    transition: all 0.2s;
  }

  &.active svg {
    fill: var(--accent);
  }

  &:hover {
    svg {
      fill: var(--accent);
    }
  }
`,Ae=({burgerMenu:e,closeBurgerMenu:s})=>{const r=B(),[o,n]=d.useState(!1),[l,a]=d.useState(!1);d.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const h=d.useCallback(()=>{document.body.style.overflow="auto",n(!1),a(!1),s()},[s]);d.useEffect(()=>{const u=v=>{v.key==="Escape"&&(document.body.style.overflow="auto",h())};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[h,r]);const g=u=>{u.target===u.currentTarget&&h()},c=()=>{n(!0),a(!0)};return q.createPortal(t.jsxs(t.Fragment,{children:[t.jsx(X,{onClick:g,children:t.jsx(Oe,{children:t.jsx(Y,{in:e,timeout:700,children:t.jsxs(Se,{children:[t.jsxs(Ie,{children:[t.jsxs(_,{children:[t.jsx(m,{to:"/dashboard",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#dashboard"})})}),t.jsx(m,{to:"/orders",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#orders"})})}),t.jsx(m,{to:"/products",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#products"})})}),t.jsx(m,{to:"/suppliers",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#customers"})})}),t.jsx(m,{to:"/customers",children:t.jsx("svg",{width:"16",height:"16",fill:"none",children:t.jsx("use",{href:x+"#suppliers"})})})]}),t.jsx(P,{onClick:c,children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#logout"})})})]}),t.jsx(Ce,{type:"button",onClick:h,children:t.jsx("svg",{width:26,height:26,children:t.jsx("use",{href:x+"#x"})})})]})})})}),o&&t.jsx(I,{modalIsOpen:o,logoutModal:l,closeModal:()=>n(!1),closeLogoutModal:()=>a(!1)})]}),document.getElementById("portal"))},He=()=>{const[e,s]=d.useState(!1),[r,o]=d.useState(!1),[n,l]=d.useState(!1),a=M(z),h=M(K),c=V().pathname,u=b({maxWidth:767}),v=b({minWidth:1440}),$=(Q=>({"/dashboard":"Dashboard","/orders":"All orders","/products":"All products","/suppliers":"All suppliers","/customers":"All customers"})[Q]||"Unknown page")(c),A=()=>{l(!0)},H=()=>{s(!0),o(!0)};return t.jsxs(Re,{children:[t.jsxs(We,{children:[t.jsxs(De,{children:[!v&&t.jsx(_e,{width:"32",height:"32",onClick:A,children:t.jsx("use",{href:x+"#burger"})}),t.jsx(k,{to:`/${h?"dashboard":"login"}`,children:t.jsx("img",{src:Z,alt:"Logo",width:u?32:40,height:u?32:40})})]}),t.jsxs(Te,{children:[t.jsx(Ne,{children:"Medicine store"}),t.jsxs(Pe,{children:[t.jsx(k,{to:`${c}`,children:$}),t.jsx("p",{children:"|"}),t.jsx("p",{children:a})]})]})]}),v&&t.jsx(P,{onClick:H,children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#logout"})})}),e&&t.jsx(I,{modalIsOpen:e,logoutModal:r,closeModal:()=>s(!1),closeLogoutModal:()=>o(!1)}),n&&t.jsx(Ae,{burgerMenu:n,closeBurgerMenu:()=>l(!1)})]})},Qe=()=>t.jsx($e,{children:t.jsxs(_,{children:[t.jsx(m,{to:"/dashboard",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#dashboard"})})}),t.jsx(m,{to:"/orders",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#orders"})})}),t.jsx(m,{to:"/products",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#products"})})}),t.jsx(m,{to:"/suppliers",children:t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:x+"#customers"})})}),t.jsx(m,{to:"/customers",children:t.jsx("svg",{width:"16",height:"16",fill:"none",children:t.jsx("use",{href:x+"#suppliers"})})})]})}),Ye=()=>{const e=b({minWidth:1440});return t.jsxs(t.Fragment,{children:[t.jsx(He,{}),e&&t.jsx(Qe,{}),t.jsx(d.Suspense,{fallback:null,children:t.jsx(G,{})})]})};export{Ye as default};
