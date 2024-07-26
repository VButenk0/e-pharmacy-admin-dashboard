import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import SidebarMenu from "../Sidebar/SidebarMenu";

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      <Header />
      {isDesktop && <SidebarMenu />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
