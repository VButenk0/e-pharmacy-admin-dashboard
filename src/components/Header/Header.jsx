import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import {
  HeaderWrpr,
  LogoTitleWrpr,
  LogoutBtn,
  SubTitleWrpr,
  Title,
  TitleWrpr,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrpr>
      <LogoTitleWrpr>
        <Link to={"/dashboard"}>
          <img src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>
        <TitleWrpr>
          <Title>Medicine store</Title>
          <SubTitleWrpr>
            <p>All suppliers</p>
            <p>|</p>
            <p>vendor@gmail.com</p>
          </SubTitleWrpr>
        </TitleWrpr>
      </LogoTitleWrpr>
      <LogoutBtn>
        <svg width="16" height="16">
          <use href={sprite + "#logout"}></use>
        </svg>
      </LogoutBtn>
    </HeaderWrpr>
  );
};

export default Header;
