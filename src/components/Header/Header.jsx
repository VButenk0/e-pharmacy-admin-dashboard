import { Link, useLocation, useNavigate } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import {
  HeaderWrpr,
  LogoTitleWrpr,
  LogoutBtn,
  SubTitleWrpr,
  Title,
  TitleWrpr,
} from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectIsLogged } from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(selectEmail);
  const isLogged = useSelector(selectIsLogged);
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

  const handleLogoutClick = () => {
    dispatch();
    navigate("/login");
  };

  return (
    <HeaderWrpr>
      <LogoTitleWrpr>
        <Link to={`/${isLogged ? "dashboard" : "login"}`}>
          <img src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>
        <TitleWrpr>
          <Title>Medicine store</Title>
          <SubTitleWrpr>
            <Link to={`${page}`}>{currentPageTitle}</Link>
            <p>|</p>
            <p>{email}</p>
          </SubTitleWrpr>
        </TitleWrpr>
      </LogoTitleWrpr>
      <LogoutBtn onClick={handleLogoutClick}>
        <svg width="16" height="16">
          <use href={sprite + "#logout"}></use>
        </svg>
      </LogoutBtn>
    </HeaderWrpr>
  );
};

export default Header;
