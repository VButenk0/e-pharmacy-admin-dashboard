import{p as i,u as C,r as a,J as p,at as y,aC as P,aa as E,j as e,s as x,aw as u,$ as g,aD as k,az as A,aE as F}from"./index-jOJm0qSQ.js";import{C as w,A as I,T as D,a as M,P as W}from"./AllOrdersPage.styled-Fl9q1U_S.js";import{F as T,a as z}from"./AllProductsPage.styled-DKds5n_e.js";import{w as B,x as N,y as O,z as K}from"./helperFunctions-D5Gpkkae.js";import{P as R,a as J}from"./Pagination-CN9woKaX.js";const L=i.button`
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
`,U=i.div`
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
`,$=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 17px;
  border-radius: 30px;
  border: 1px solid var(--accent);

  color: var(--accent);
`,X=()=>{const r=C(),[j,d]=a.useState(""),[c,l]=a.useState([]),o=p(y),n=p(P);a.useEffect(()=>{r(E()),d("")},[r]),a.useEffect(()=>{l(n)},[n]);const h=t=>{t.preventDefault();const s=K(n,j);l(s),r(u(1))},f=t=>{t.key==="Enter"&&h(t)},m=(t,s)=>{r(u(s))},b=B(c,o),v=()=>{r(g(!0)),r(k(!0))},S=t=>{r(A(t)),r(g(!0)),r(F(!0))};return e.jsx(w,{children:e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"text",placeholder:"User Name",onChange:()=>N(event,d),onKeyPress:f}),e.jsxs("button",{onClick:h,children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:x+"#filter"})}),e.jsx("p",{children:"Filter"})]})]}),e.jsx(L,{onClick:v,children:"Add a new suppliers"})]}),e.jsxs("div",{children:[e.jsx(D,{children:"All suppliers"}),e.jsx(M,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Suppliers Info"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Delivery date"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:b.map((t,s)=>e.jsxs("tr",{children:[e.jsx("th",{children:t.name}),e.jsx("th",{children:t.address}),e.jsx("th",{children:t.suppliers}),e.jsx("th",{children:t.date}),e.jsx("th",{children:t.amount}),e.jsx("th",{children:e.jsx(U,{className:t.status.toLowerCase(),children:t.status})}),e.jsx("th",{children:e.jsxs($,{onClick:()=>S(t),children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:x+"#edit"})}),e.jsx("p",{children:"Edit"})]})})]},s))})]})})]}),e.jsx(W,{children:e.jsx(R,{page:o,count:O(c),hidePrevButton:!0,hideNextButton:!0,onChange:m,renderItem:t=>e.jsx(J,{...t,sx:{backgroundColor:"#E7F1ED",border:"1px solid transparent","&:hover":{border:"1px solid var(--accent)",backgroundColor:"#E7F1ED"},"&.Mui-selected":{backgroundColor:"var(--accent)","&:hover":{backgroundColor:"var(--accent)"}},"& .MuiPaginationItem-page":{display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',width:"10px",height:"10px",backgroundColor:"var(--accent)",borderRadius:"50%"},color:"transparent"}}})})})]})})};export{X as default};
