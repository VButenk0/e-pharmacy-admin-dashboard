import{p as e,j as o}from"./index-jOJm0qSQ.js";const t=e.div`
  position: absolute;
  top: 80px;
  left: 80px;

  padding: 20px 40px 40px;

  overflow: auto;

  @media only screen and (max-width: 1439px) {
    width: 768px;

    left: 0;

    padding: 20px 32px 40px;
  }

  @media only screen and (max-width: 767px) {
    width: 375px;

    padding: 20px 20px 80px;
  }
`,i=({children:r})=>o.jsx(t,{children:r}),n=e.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,a=e.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding-top: 55px;

  @media only screen and (max-width: 1439px) {
    padding-top: 30px;
  }

  @media only screen and (max-width: 767px) {
    gap: 8px;

    padding-top: 20px;
  }

  input {
    width: 224px;
    height: 44px;
    border-radius: 60px;
    padding: 0 18px;

    &::placeholder {
      color: var(--trans-text);
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: var(--accent);
    border-radius: 60px;
    padding: 13px 30px;

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

    @media only screen and (max-width: 767px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`,p=e.h2`
  background-color: var(--tab-bg);
  border-radius: 8px 8px 0 0;
  width: 1280px;

  font-family: "Inter SemiBold";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33333;

  padding: 20px;

  @media only screen and (max-width: 1439px) {
    width: 960px;
  }

  @media only screen and (max-width: 767px) {
    width: 671px;

    font-size: 16px;
    line-height: 1.25;

    padding: 14px;
  }
`,l=e.div`
  width: 1280px;
  height: fit-content;
  border-radius: 0 0 8px 8px;
  padding: 0 20px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-top: none;

  @media only screen and (max-width: 1439px) {
    width: 960px;
    overflow-x: scroll;
  }

  @media only screen and (max-width: 767px) {
    width: 671px;
  }

  table {
    border-collapse: collapse;
    background-color: var(--white);
    width: 100%;

    thead {
      color: var(--trans-text);

      tr th {
        font-family: "Inter Medium";
        font-size: 14px;
        font-weight: 500;
        line-height: 1.28571;
      }
    }

    tbody tr {
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);

      &:last-of-type {
        border-bottom: none;
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

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
`,x=e.div`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.7px;

  &.completed {
    color: var(--completed);
    background-color: var(--completed-bg);
  }
  &.confirmed {
    color: var(--confirmed);
    background-color: var(--confirmed-bg);
  }
  &.pending {
    color: var(--pending);
    background-color: var(--pending-bg);
  }
  &.cancelled {
    color: var(--cancelled);
    background-color: var(--cancelled-bg);
  }
  &.processing {
    color: var(--processing);
    background-color: var(--processing-bg);
  }
  &.delivered {
    color: var(--delivered);
    background-color: var(--delivered-bg);
  }
  &.shipped {
    color: var(--shipped);
    background-color: var(--shipped-bg);
  }
`,c=e.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
`,s=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`;export{n as A,i as C,a as F,s as I,x as O,c as P,p as T,l as a};
