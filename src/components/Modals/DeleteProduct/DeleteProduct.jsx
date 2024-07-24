import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../../redux/modals/modalsSlice";
import { ButtonsWrpr, DeleteModalWrpr } from "./DeleteProduct.styled";
import {
  deleteProductThunk,
  getProductsThunk,
} from "../../../redux/data/operations";
import { selectSelectedItem } from "../../../redux/selectors";
import { toast } from "react-toastify";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const { _id, name } = selectedItem;

  const handleDelete = () => {
    dispatch(deleteProductThunk(_id))
      .then(() => {
        toast.success(`${name} successfully deleted`);
        dispatch(getProductsThunk());
      })
      .catch((err) => toast.error(err.message));
    dispatch(closeModals());
  };

  return (
    <DeleteModalWrpr>
      <h2>Delete this product?</h2>
      <ButtonsWrpr>
        <button onClick={handleDelete}>Delete</button>
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
