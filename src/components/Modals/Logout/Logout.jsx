import { useNavigate } from "react-router-dom";
import { LogoutBtn, LogoutWrpr } from "./Logout.styled";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../redux/auth/operations";
import { toast } from "react-toastify";

const Logout = ({ closeModals }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => toast.success("Logout successfully"))
      .catch((err) => {
        toast.error(err.message);
      });
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
