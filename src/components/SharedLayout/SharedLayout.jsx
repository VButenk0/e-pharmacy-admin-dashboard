import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/selectors";
import Modal from "../Modals/Modal/Modal";

const SharedLayout = () => {
  const modalIsOpen = useSelector(selectIsModalOpen);
  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {modalIsOpen && <Modal />}
    </>
  );
};

export default SharedLayout;
