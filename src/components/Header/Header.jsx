import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import sprite from "../../assets/sprite.svg";
import logo from "../../images/logo.png";
import {
  changeBurgerMenu,
  changeLogoutModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { selectEmail, selectIsLogged } from "../../redux/selectors";
import {
  BurgerIcon,
  HeaderWrpr,
  LogoTitleWrpr,
  LogoutBtn,
  LogoWrpr,
  SubTitleWrpr,
  Title,
  TitleWrpr,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const isLogged = useSelector(selectIsLogged);
  const location = useLocation();
  const page = location.pathname;

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

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

  const handleBurgerClick = () => {
    dispatch(changeBurgerMenu(true));
  };

  const handleLogoutClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogoutModal(true));
  };

  return (
    <HeaderWrpr>
      <LogoTitleWrpr>
        <LogoWrpr>
          {!isDesktop && (
            <BurgerIcon width="32" height="32" onClick={handleBurgerClick}>
              <use href={sprite + "#burger"}></use>
            </BurgerIcon>
          )}
          <Link to={`/${isLogged ? "dashboard" : "login"}`}>
            <img
              src={logo}
              alt="Logo"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
            />
          </Link>
        </LogoWrpr>
        <TitleWrpr>
          <Title>Medicine store</Title>
          <SubTitleWrpr>
            <Link to={`${page}`}>{currentPageTitle}</Link>
            <p>|</p>
            <p>{email}</p>
          </SubTitleWrpr>
        </TitleWrpr>
      </LogoTitleWrpr>
      {isDesktop && (
        <LogoutBtn onClick={handleLogoutClick}>
          <svg width="16" height="16">
            <use href={sprite + "#logout"}></use>
          </svg>
        </LogoutBtn>
      )}
    </HeaderWrpr>
  );
};

export default Header;
