import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { closeModals } from "../../../redux/modals/modalsSlice";
import {
  ButtonsWrpr,
  InputsWrpr,
  ModalTitle,
  ModalWrpr,
} from "./AddEditProduct.styled";
import {
  selectAddProductModal,
  // selectEditProductModal,
} from "../../../redux/selectors";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledFormControl = styled(FormControl)({
  width: "224px",
  height: "44px",
  borderRadius: "60px",
  border: "1px solid var(--border-color)",
  "& .MuiSelect-select": {
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: "var(--primary-text)",
  },
});

const AddEditProduct = () => {
  const dispatch = useDispatch();
  const addProductModal = useSelector(selectAddProductModal);
  // const editProductModal = useSelector(selectEditProductModal);

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
    dispatch(closeModals());
    if (addProductModal) {
      // dispatch(addProductThunk(data))
      console.log(`Added a product with this parameters: ${data}`);
    } else {
      // dispatch(editProductThunk(data))
      console.log(`Edited a product with this parameters: ${data}`);
    }
  };

  const categories = ["Medicine", "Heart", "Head", "Hand", "Leg"];

  return (
    <ModalWrpr>
      <ModalTitle>
        {addProductModal ? "Add a new product" : "Edit product"}
      </ModalTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrpr>
          <input
            type="text"
            placeholder="Product Info"
            {...register("prodInfo")}
          />
          {errors.prodInfo && <p>{errors.prodInfo.message}</p>}

          <StyledFormControl variant="outlined">
            <Select
              defaultValue={""}
              {...register("category")}
              input={<OutlinedInput notched={false} />}
              sx={{ height: "100%" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    marginTop: "8px",
                    backgroundColor: "var(--accent)",
                    borderRadius: "15px",
                  },
                },
              }}
            >
              <MenuItem value={""} disabled hidden>
                Category
              </MenuItem>
              {categories.map((category, index) => (
                <MenuItem
                  key={index}
                  value={category}
                  style={{
                    color: "#FFFFFF80",
                  }}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
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
          <button type="submit">{addProductModal ? "Add" : "Save"}</button>
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

export default AddEditProduct;
