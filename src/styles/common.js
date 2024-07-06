import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  user-select: none;

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:#FFFFFF66;
    border-radius: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

body {
  display: flex;
  justify-content: center;
  
  color: var(--primary-text);
  font-family: "Inter Medium";
  font-size: 16px;
  line-height: 1.125;

  background-color: var(--bg-color);

  min-width: 320px;
  max-width: 1440px;
  max-height: 100vh;

  margin: 0 auto;

  @media only screen and (min-width: 1440px) {
     /* width: 1440px; */
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
     /* width: 768px; */
  }

  @media only screen and (max-width: 767px) {
     /* width: 375px; */
  }
}

h1,
h1,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  font-family: "Inter Medium";
  font-size: 14px;
line-height: 1.28571;
}

input, select{
  /* background: transparent; */
  border: none;
  outline: none;
}
`;

export default Global;
