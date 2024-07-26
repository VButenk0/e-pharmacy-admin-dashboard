import{p as s,e as a,z as m,j as e,A as g,C as j,s as n,u as f,r as b,D as u}from"./index-DyrtvmBB.js";import{I as w,C as v}from"./AllOrdersPage.styled-B1Qsv-6J.js";const c=s.h2`
  background-color: var(--tab-bg);
  border-radius: 8px 8px 0 0;
  font-family: "Inter SemiBold";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33333;
  padding: 20px;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
  }
`,x=s.div`
  background-color: var(--white);
  border-radius: 0 0 8px 8px;
  width: 630px;
  height: 512px;
  padding: 0 20px;
  border: 1px solid var(--border-color);

  @media only screen and (max-width: 1439px) {
    width: 704px;
  }

  @media only screen and (max-width: 767px) {
    overflow-x: scroll;

    width: 335px;
    height: 460px;

    padding: 0 14px;
  }
`,h=s.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border-radius: 0 0 8px 8px;

  thead {
    position: sticky;
    top: 0;
    background-color: var(--white);

    color: var(--trans-text);
    font-family: "Inter Medium";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28571;

    tr {
      border-bottom: 1px solid var(--border-color);
    }

    @media only screen and (max-width: 767px) {
      font-size: 12px;
      line-height: 1.16667;
    }
  }

  tr th {
    padding: 20px;

    text-align: left;
    font-family: "Inter Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.125;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);

    &:first-of-type {
      border-left: none;
      padding-left: 0;
    }
    &:last-of-type {
      border-right: none;
      padding-right: 0;
    }

    @media only screen and (max-width: 767px) {
      padding: 14px 10px;

      font-size: 12px;
      line-height: 1.16667;
    }
  }

  tbody tr {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    &:last-of-type {
      border-bottom: none;
    }
  }
`,y=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 13.5px;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.7px;

  &.expense {
    color: var(--accent2);
    background-color: var(--light-accent2);
  }
  &.income {
    color: var(--accent);
    background-color: var(--light-accent);
  }
  &.error {
    background-color: var(--border-color);
  }
`,T=s.p`
  &.expense {
    color: var(--accent2);
  }
  &.income {
    color: var(--accent);
  }
  &.error {
    text-decoration: line-through;
  }
`,k=()=>{const r=a(m);return e.jsxs("div",{children:[e.jsx(c,{children:"Income/Expenses"}),e.jsx(x,{children:e.jsxs(h,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Amount"})]})}),e.jsx("tbody",{children:r.map((t,i)=>e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(y,{className:t.type.toLowerCase(),children:t.type})}),e.jsx("th",{children:t.name}),e.jsx("th",{children:e.jsx(T,{className:t.type.toLowerCase(),children:t.amount})})]},i))})]})})]})},z=()=>{const r=a(g);return e.jsxs("div",{children:[e.jsx(c,{children:"Recent Customers"}),e.jsx(x,{children:e.jsxs(h,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Spent"})]})}),e.jsx("tbody",{children:r.map((t,i)=>e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs(w,{children:[e.jsx("img",{src:t.image||t.photo,alt:t.name+"'s Photo",width:36,height:36}),t.name]})}),e.jsx("th",{children:t.email}),e.jsx("th",{children:t.spent})]},i))})]})})]})},C=s.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding-bottom: 40px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`,o=s.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 240px;

  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--white);

  padding: 14px 18px;
  &:first-of-type {
    border: 1px solid var(--accent);
  }

  @media only screen and (max-width: 1439px) {
    width: 221px;
  }

  @media only screen and (max-width: 767px) {
    width: 157px;
    gap: 32px;

    padding: 14px;
  }
`,d=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: var(--trans-text);

    font-family: "Inter Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    @media only screen and (max-width: 767px) {
      line-height: 1.16667;
    }
  }
`,l=s.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33333;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,I=()=>{const r=a(j),t=r.allProducts,i=r.allSuppliers,p=r.allCustomers;return e.jsxs(C,{children:[e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-products"})}),e.jsx("p",{children:"All products"})]}),e.jsx(l,{children:t.toLocaleString("en-US")})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-users"})}),e.jsx("p",{children:"All suppliers"})]}),e.jsx(l,{children:i})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-users"})}),e.jsx("p",{children:"All customers"})]}),e.jsx(l,{children:p})]})]})},S=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1439px) {
    flex-direction: column;
  }
`,W=()=>{const r=f();return b.useEffect(()=>{r(u())},[r]),e.jsxs(v,{children:[e.jsx(I,{}),e.jsxs(S,{children:[e.jsx(z,{}),e.jsx(k,{})]})]})};export{W as default};
