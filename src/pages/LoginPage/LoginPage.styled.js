import styled from "styled-components";

export const LoginPageWrpr = styled.div`
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
`;

export const LogoWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  font-family: "Inter SemiBold";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.6px;
`;

export const ContentWrpr = styled.div`
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
`;

export const Title = styled.h1`
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
    cursor: pointer;

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
  font-weight: 500;
  line-height: 1.28571;

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`;

export const PillImg = styled.img`
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
`;

export const LinesImg = styled.img`
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
`;
