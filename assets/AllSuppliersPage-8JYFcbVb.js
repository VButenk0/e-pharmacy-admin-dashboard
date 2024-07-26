import{p as d,u as k,r,b as j,k as y,w as F,x as I,j as e,o as f,v as O}from"./index-DLbzULYX.js";import{C as w,A as W,T as D,a as T,P as B}from"./AllOrdersPage.styled-D2dBQYZT.js";import{M as N}from"./Modal-DpdorUFd.js";import{s as m}from"./sprite-DRLobJkB.js";import{d as z,h as K,p as R,a as L}from"./helperFunctions-CDi2mk5s.js";import{F as U,a as q}from"./AllProductsPage.styled-Bu91UgdQ.js";import{P as G,a as H}from"./Pagination-vSf0fb7C.js";import"./index.esm-D8vKP7TC.js";const J=d.button`
  padding: 13px 30px;
  border-radius: 60px;
  border: 1px solid var(--accent);

  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 1.28571;

  transition: all 0.3s;

  &:hover,
  &:active {
    border: 1px solid var(--accent-hover);
    background-color: var(--light-accent);
  }
`,Q=d.div`
  width: 89px;
  border-radius: 40px;
  padding: 4px 0;

  font-size: 14px;
  letter-spacing: -0.7px;
  text-align: center;

  &.active {
    color: var(--accent);
    background-color: var(--completed-bg);
  }
  &.deactive {
    color: var(--accent2);
    background-color: var(--cancelled-bg);
  }
`,V=d.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 17px;
  border-radius: 30px;
  border: 1px solid var(--accent);

  color: var(--accent);
`,se=()=>{const s=k(),[b,l]=r.useState(""),[o,c]=r.useState([]),[p,n]=r.useState(!1),[v,h]=r.useState(!1),[S,u]=r.useState(!1),x=j(y),i=j(F);r.useEffect(()=>{s(I()),l("")},[s]),r.useEffect(()=>{c(i)},[i]);const g=t=>{t.preventDefault();const a=L(i,b);c(a),s(f(1))},C=t=>{t.key==="Enter"&&g(t)},M=(t,a)=>{s(f(a))},A=z(o,x),E=()=>{n(!0),h(!0)},P=t=>{s(O(t)),n(!0),u(!0)};return e.jsxs(w,{children:[e.jsxs(W,{children:[e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx("input",{type:"text",placeholder:"User Name",onChange:()=>K(event,l),onKeyPress:C}),e.jsxs("button",{onClick:g,children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:m+"#filter"})}),e.jsx("p",{children:"Filter"})]})]}),e.jsx(J,{onClick:E,children:"Add a new suppliers"})]}),e.jsxs("div",{children:[e.jsx(D,{children:"All suppliers"}),e.jsx(T,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Suppliers Info"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Delivery date"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:A.map((t,a)=>e.jsxs("tr",{children:[e.jsx("th",{children:t.name}),e.jsx("th",{children:t.address}),e.jsx("th",{children:t.suppliers}),e.jsx("th",{children:t.date}),e.jsx("th",{children:t.amount}),e.jsx("th",{children:e.jsx(Q,{className:t.status.toLowerCase(),children:t.status})}),e.jsx("th",{children:e.jsxs(V,{onClick:()=>P(t),children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:m+"#edit"})}),e.jsx("p",{children:"Edit"})]})})]},a))})]})})]}),e.jsx(B,{children:e.jsx(G,{page:x,count:R(o),hidePrevButton:!0,hideNextButton:!0,onChange:M,renderItem:t=>e.jsx(H,{...t,sx:{backgroundColor:"#E7F1ED",border:"1px solid transparent","&:hover":{border:"1px solid var(--accent)",backgroundColor:"#E7F1ED"},"&.Mui-selected":{backgroundColor:"var(--accent)","&:hover":{backgroundColor:"var(--accent)"}},"& .MuiPaginationItem-page":{display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',width:"10px",height:"10px",backgroundColor:"var(--accent)",borderRadius:"50%"},color:"transparent"}}})})})]}),p&&e.jsx(N,{modalIsOpen:p,addSupplierModal:v,editSupplierModal:S,closeModal:()=>n(!1),closeAddSupplierModal:()=>h(!1),closeEditSupplierModal:()=>u(!1)})]})};export{se as default};
