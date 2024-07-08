import { useDispatch } from "react-redux";
import { closeModals } from "../../../redux/modals/modalsSlice";
import { ButtonsWrpr, DeleteModalWrpr } from "./DeleteProduct.styled";

const DeleteProduct = () => {
  const dispatch = useDispatch();

  return (
    <DeleteModalWrpr>
      <h2>Delete this product?</h2>
      <ButtonsWrpr>
        <button type="submit">Delete</button>
        <button
          type="button"
          onClick={() => {
            dispatch(closeModals());
          }}
          className="cancel"
        >
          Cancel
        </button>
      </ButtonsWrpr>
    </DeleteModalWrpr>
  );
};

export default DeleteProduct;
