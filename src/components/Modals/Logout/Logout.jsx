import { useNavigate } from "react-router-dom";
import { closeModals } from "../../../redux/modals/modalsSlice";
import { LogoutBtn, LogoutWrpr } from "./Logout.styled";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../redux/auth/operations";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
    closeModals();
  };

  return (
    <LogoutWrpr>
      <h2>Are you sure you want to log out?</h2>
      <LogoutBtn onClick={handleLogout}>Log Out</LogoutBtn>
    </LogoutWrpr>
  );
};

export default Logout;
