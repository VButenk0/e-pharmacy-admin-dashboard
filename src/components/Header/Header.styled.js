import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  padding: 15px 40px 15px 20px;
  border-bottom: 1px solid var(--border-color);
`;

export const LogoTitleWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const TitleWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  line-height: 1.16667;
`;

export const SubTitleWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--trans-text);
  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 1.5;
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: var(--accent);

  transition: all 0.2s;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
