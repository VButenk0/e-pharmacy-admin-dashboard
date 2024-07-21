import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../../redux/modals/modalsSlice";
import { ButtonsWrpr, DeleteModalWrpr } from "./DeleteProduct.styled";
import {
  deleteProductThunk,
  getProductsThunk,
} from "../../../redux/data/operations";
import { selectSelectedItem } from "../../../redux/selectors";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const { _id } = selectedItem;

  const handleDelete = () => {
    dispatch(deleteProductThunk(_id)).then(() => dispatch(getProductsThunk()));
    console.log(`Product with id: ${_id} has deleted`);
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
