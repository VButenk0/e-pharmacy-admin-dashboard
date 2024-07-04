import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { closeModals } from "../../../redux/modals/modalsSlice";
import {
  ButtonsWrpr,
  InputsWrpr,
  ModalTitle,
  ModalWrpr,
} from "./AddNewProduct.styled";

const AddNewProduct = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    prodInfo: Yup.string().required("Product Info is required"),
    stock: Yup.string().required("Stock is required"),
    price: Yup.string().required("Price is required"),
    category: Yup.string().required("Category is required"),
    suppliers: Yup.string().required("Suppliers is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const categories = ["Medicine", "Heart", "Head", "Hand", "Leg"];

  return (
    <ModalWrpr>
      <ModalTitle>Add a new product</ModalTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrpr>
          <input
            type="text"
            placeholder="Product Info"
            {...register("prodInfo")}
          />
          {errors.prodInfo && <p>{errors.prodInfo.message}</p>}

          <select {...register("category")} defaultValue="">
            <option value="" disabled hidden>
              Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p>{errors.category.message}</p>}

          <input type="text" placeholder="Stock" {...register("stock")} />
          {errors.stock && <p>{errors.stock.message}</p>}

          <input
            type="text"
            placeholder="Suppliers"
            {...register("suppliers")}
          />
          {errors.suppliers && <p>{errors.suppliers.message}</p>}

          <input type="text" placeholder="Price" {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </InputsWrpr>
        <ButtonsWrpr>
          <button type="submit">Add</button>
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
      </form>
    </ModalWrpr>
  );
};

export default AddNewProduct;
