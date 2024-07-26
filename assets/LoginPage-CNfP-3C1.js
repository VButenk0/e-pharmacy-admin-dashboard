import{p as i,u,a as f,r as w,c as y,b as r,d as b,j as e,s as v,o as j,l as k,B as n}from"./index-DyrtvmBB.js";import{l as I}from"./logo-Hhs7serZ.js";const P="/e-pharmacy-admin-dashboard/assets/white%20round%20pill-C5tvX5z5.png",S="/e-pharmacy-admin-dashboard/assets/three%20lines-C0NrBoyo.png",L=i.div`
  display: flex;
  flex-direction: column;
  gap: 226px;

  position: relative;

  padding: 28px 100px;

  background: var(--bg-color);

  @media only screen and (max-width: 1439px) {
    gap: 214px;
    padding: 24px 32px;
  }

  @media only screen and (max-width: 767px) {
    gap: 148px;
    padding: 24px 20px;
  }
`,z=i.div`
  display: flex;
  align-items: center;
  gap: 14px;

  font-family: "Inter SemiBold";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.6px;
`,W=i.div`
  display: flex;
  gap: 150px;

  padding-bottom: 262px;

  @media only screen and (max-width: 1439px) {
    flex-direction: column;
    gap: 50px;
    padding-bottom: 276px;
  }

  @media only screen and (max-width: 767px) {
    gap: 40px;
    padding-bottom: 234px;
  }
`,B=i.h1`
  width: 614px;

  font-family: "Inter SemiBold";
  font-size: 54px;
  font-weight: 600;
  line-height: 1.11111;

  span {
    color: var(--accent);
  }

  @media only screen and (max-width: 767px) {
    width: 335px;

    font-size: 28px;
    font-weight: 600;
    line-height: 1.21429;
  }
`,q=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding-bottom: 40px;
`,p=i.div`
  display: flex;
  align-items: center;

  position: relative;

  border-radius: 60px;
  border: 1px solid var(--border-color);
  background: var(--white);
  padding: 13px 18px;
  width: 323px;
  height: 44px;

  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 1.5;

  input {
    flex: 1;
  }

  svg {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;

    use {
      stroke: var(--primary-text);
    }
  }
`,C=i.button`
  width: 323px;
  background-color: var(--accent);
  padding: 13px 0;
  border-radius: 60px;

  color: var(--white-text);
  font-family: "Inter Medium";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`,E=i.img`
  position: absolute;
  top: 193px;
  left: 510px;

  width: 179px;
  height: 175px;
  flex-shrink: 0;

  @media only screen and (max-width: 1439px) {
    top: 190px;
    left: 440px;
  }

  @media only screen and (max-width: 767px) {
    top: 160px;
    left: 240px;

    width: 95px;
    height: 93px;
  }
`,M=i.img`
  position: absolute;
  right: -185.39px;
  bottom: -88.11px;

  width: 464.395px;
  height: 345.113px;
  flex-shrink: 0;

  @media only screen and (max-width: 1439px) {
    right: -206.39px;
    bottom: -199.11px;
  }
`,T=()=>{const d=u(),l=f(),[a,x]=w.useState(!1),c=y().shape({email:r().email("Invalid email format").required("Mail is required"),password:r().min(7,"Password must be at least 7 characters").required("Password is required")}),{register:o,handleSubmit:h,formState:{errors:t}}=b({resolver:j(c)}),m=s=>{d(k(s)).unwrap().then(()=>{n.success("Welcome back!"),l("/")}).catch(g=>{n.error(g.message)})};return e.jsxs(L,{children:[e.jsxs(z,{children:[e.jsx("img",{src:I,alt:"Logo",width:44,height:44}),e.jsx("p",{children:"E-Pharmacy"})]}),e.jsxs(W,{children:[e.jsxs(B,{children:["Your medication, delivered Say goodbye to all"," ",e.jsx("span",{children:"your healthcare"})," worries with us"]}),e.jsxs("form",{onSubmit:h(m),children:[e.jsxs(q,{children:[e.jsxs(p,{children:[e.jsx("input",{type:"text",name:"email",placeholder:"Email address",...o("email")}),t.email&&e.jsx("p",{children:t.email.message})]}),e.jsxs(p,{children:[e.jsx("input",{type:a?"text":"password",name:"password",placeholder:"Password",...o("password")}),e.jsx("svg",{width:"18",height:"18",onClick:()=>x(s=>!s),children:e.jsx("use",{href:v+(a?"#eye-off":"#eye")})}),t.password&&e.jsx("p",{children:t.password.message})]})]}),e.jsx(C,{type:"submit",children:"Log in"})]})]}),e.jsx(E,{src:P,alt:"Pill"}),e.jsx(M,{src:S,alt:"Lines"})]})};export{T as default};
