import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const page = location.pathname;

  const getPageTitle = (path) => {
    const routes = {
      "/dashboard": "Dashboard",
      "/orders": "All orders",
      "/products": "All products",
      "/suppliers": "All suppliers",
      "/customers": "All customers",
    };
    return routes[path] || "Unknown page";
  };

  const currentPageTitle = getPageTitle(page);

  const email = "vendor@gmail.com";
  // Add here a selector

  return (
    <HeaderWrpr>
      <LogoTitleWrpr>
        <Link to={"/dashboard"}>
          <img src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>
        <TitleWrpr>
          <Title>Medicine store</Title>
          <SubTitleWrpr>
            <p>{currentPageTitle}</p>
            <p>|</p>
            <p>{email}</p>
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
