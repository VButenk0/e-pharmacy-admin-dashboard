import{p as l,u as y,r as s,e as j,E as k,X as F,Y as I,J as O,j as e,K as W,s as f,N as w,M as D,Q as T,R as S,W as B}from"./index-DyrtvmBB.js";import{C as N,A as K,T as R,a as z,P as J}from"./AllOrdersPage.styled-B1Qsv-6J.js";import{F as L,a as Q}from"./AllProductsPage.styled-DtcTOvII.js";import{P as U,a as X}from"./Pagination-DvfYBxqm.js";const Y=l.button`
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
`,q=l.div`
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
`,G=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 17px;
  border-radius: 30px;
  border: 1px solid var(--accent);

  color: var(--accent);
`,$=()=>{const r=y(),[b,i]=s.useState(""),[o,c]=s.useState([]),[p,n]=s.useState(!1),[m,h]=s.useState(!1),[v,u]=s.useState(!1),x=j(k),d=j(F);s.useEffect(()=>{r(I()),i("")},[r]),s.useEffect(()=>{c(d)},[d]);const g=t=>{t.preventDefault();const a=T(d,b);c(a),r(S(1))},C=t=>{t.key==="Enter"&&g(t)},E=(t,a)=>{r(S(a))},M=O(o,x),A=()=>{n(!0),h(!0)},P=t=>{r(B(t)),n(!0),u(!0)};return e.jsxs(N,{children:[e.jsxs(K,{children:[e.jsxs(L,{children:[e.jsxs(Q,{children:[e.jsx("input",{type:"text",placeholder:"User Name",onChange:()=>W(event,i),onKeyPress:C}),e.jsxs("button",{onClick:g,children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:f+"#filter"})}),e.jsx("p",{children:"Filter"})]})]}),e.jsx(Y,{onClick:A,children:"Add a new suppliers"})]}),e.jsxs("div",{children:[e.jsx(R,{children:"All suppliers"}),e.jsx(z,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Suppliers Info"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Delivery date"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:M.map((t,a)=>e.jsxs("tr",{children:[e.jsx("th",{children:t.name}),e.jsx("th",{children:t.address}),e.jsx("th",{children:t.suppliers}),e.jsx("th",{children:t.date}),e.jsx("th",{children:t.amount}),e.jsx("th",{children:e.jsx(q,{className:t.status.toLowerCase(),children:t.status})}),e.jsx("th",{children:e.jsxs(G,{onClick:()=>P(t),children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:f+"#edit"})}),e.jsx("p",{children:"Edit"})]})})]},a))})]})})]}),e.jsx(J,{children:e.jsx(U,{page:x,count:w(o),hidePrevButton:!0,hideNextButton:!0,onChange:E,renderItem:t=>e.jsx(X,{...t,sx:{backgroundColor:"#E7F1ED",border:"1px solid transparent","&:hover":{border:"1px solid var(--accent)",backgroundColor:"#E7F1ED"},"&.Mui-selected":{backgroundColor:"var(--accent)","&:hover":{backgroundColor:"var(--accent)"}},"& .MuiPaginationItem-page":{display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',width:"10px",height:"10px",backgroundColor:"var(--accent)",borderRadius:"50%"},color:"transparent"}}})})})]}),p&&e.jsx(D,{modalIsOpen:p,addSupplierModal:m,editSupplierModal:v,closeModal:()=>n(!1),closeAddSupplierModal:()=>h(!1),closeEditSupplierModal:()=>u(!1)})]})};export{$ as default};
