import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import sprite from "../../assets/sprite.svg";
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
import {
  changeBurgerMenu,
  changeLogoutModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const isLogged = useSelector(selectIsLogged);
  const location = useLocation();
  const page = location.pathname;

  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
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
            <img src="/logo.svg" alt="Logo" width={40} height={40} />
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
