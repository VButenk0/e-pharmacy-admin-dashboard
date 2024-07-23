import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import SidebarMenu from "../Sidebar/SidebarMenu";
import Modal from "../Modals/Modal/Modal";
import { selectIsModalOpen } from "../../redux/selectors";

const SharedLayout = () => {
  const modalIsOpen = useSelector(selectIsModalOpen);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      <Header />
      {isDesktop && <SidebarMenu />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {modalIsOpen && <Modal />}
    </>
  );
};

export default SharedLayout;
