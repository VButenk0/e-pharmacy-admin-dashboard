import styled from "styled-components";

export const LoginPageWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 226px;

  position: relative;

  padding: 28px 100px;

  background: var(--bg-color);
`;

export const LogoWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ContentWrpr = styled.div`
  display: flex;
  gap: 150px;

  padding-bottom: 262px;
`;

export const Title = styled.h1`
  width: 614px;

  font-size: 54px;
  line-height: 60px;

  span {
    color: var(--accent);
  }
`;

export const InputsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding-bottom: 40px;
`;

export const InputWrpr = styled.div`
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

    use {
      stroke: var(--primary-text);
    }
  }
`;

export const LogInBtn = styled.button`
  width: 323px;
  background-color: var(--accent);
  padding: 13px 0;
  border-radius: 60px;

  color: var(--white-text);
  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 1.28571;
`;

export const PillImg = styled.img`
  position: absolute;
  top: 194px;
  left: 516px;

  width: 179px;
  height: 175px;
  flex-shrink: 0;
`;

export const LinesImg = styled.img`
  position: absolute;
  right: -185.39px;
  bottom: -88.11px;

  width: 464.395px;
  height: 345.113px;
  flex-shrink: 0;
`;
