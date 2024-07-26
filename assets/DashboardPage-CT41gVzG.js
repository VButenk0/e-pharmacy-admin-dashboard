import{p as i,b as a,e as m,j as e,f as g,h as j,u as f,r as b,i as u}from"./index-BafUE7VM.js";import{I as w,C as v}from"./AllOrdersPage.styled-2cww2EsH.js";import{s as n}from"./sprite-DRLobJkB.js";const c=i.h2`
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
`,x=i.div`
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
`,h=i.table`
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
`,y=i.div`
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
`,T=i.p`
  &.expense {
    color: var(--accent2);
  }
  &.income {
    color: var(--accent);
  }
  &.error {
    text-decoration: line-through;
  }
`,k=()=>{const t=a(m);return e.jsxs("div",{children:[e.jsx(c,{children:"Income/Expenses"}),e.jsx(x,{children:e.jsxs(h,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Amount"})]})}),e.jsx("tbody",{children:t.map((r,s)=>e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(y,{className:r.type.toLowerCase(),children:r.type})}),e.jsx("th",{children:r.name}),e.jsx("th",{children:e.jsx(T,{className:r.type.toLowerCase(),children:r.amount})})]},s))})]})})]})},I=()=>{const t=a(g);return e.jsxs("div",{children:[e.jsx(c,{children:"Recent Customers"}),e.jsx(x,{children:e.jsxs(h,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Spent"})]})}),e.jsx("tbody",{children:t.map((r,s)=>e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs(w,{children:[e.jsx("img",{src:r.image||r.photo,alt:r.name+"'s Photo",width:36,height:36}),r.name]})}),e.jsx("th",{children:r.email}),e.jsx("th",{children:r.spent})]},s))})]})})]})},S=i.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding-bottom: 40px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`,o=i.div`
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
`,d=i.div`
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
`,l=i.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33333;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,z=()=>{const t=a(j),r=t.allProducts,s=t.allSuppliers,p=t.allCustomers;return e.jsxs(S,{children:[e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-products"})}),e.jsx("p",{children:"All products"})]}),e.jsx(l,{children:r.toLocaleString("en-US")})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-users"})}),e.jsx("p",{children:"All suppliers"})]}),e.jsx(l,{children:s})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:n+"#all-users"})}),e.jsx("p",{children:"All customers"})]}),e.jsx(l,{children:p})]})]})},C=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1439px) {
    flex-direction: column;
  }
`,B=()=>{const t=f();return b.useEffect(()=>{t(u())},[t]),e.jsxs(v,{children:[e.jsx(z,{}),e.jsxs(C,{children:[e.jsx(I,{}),e.jsx(k,{})]})]})};export{B as default};
