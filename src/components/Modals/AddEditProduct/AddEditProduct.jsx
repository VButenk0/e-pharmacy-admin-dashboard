import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { MenuItem, Select, FormControl, OutlinedInput } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { closeModals } from "../../../redux/modals/modalsSlice";
import { selectAddProductModal } from "../../../redux/selectors";
import {
  ButtonsWrpr,
  InputsWrpr,
  ModalTitle,
  ModalWrpr,
  StyledInput,
} from "./AddEditProduct.styled";

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

const StyledMenuItem = styled(MenuItem)({
  color: "#FFFFFF80",
  fontFamily: "Inter Regular",
  fontSize: "12px",
  lineHeight: "1.5",
  "&.Mui-selected": {
    color: "#FFFFFF",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "transparent",
  },
});

const AddEditProduct = () => {
  const dispatch = useDispatch();
  const addProductModal = useSelector(selectAddProductModal);

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
      console.log("Added a product with this parameters:", data);
    } else {
      console.log("Edited a product with this parameters:", data);
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
          <StyledInput
            type="text"
            placeholder="Product Info"
            {...register("prodInfo")}
          />
          {errors.prodInfo && <p>{errors.prodInfo.message}</p>}

          <StyledFormControl variant="outlined">
            <Select
              defaultValue=""
              displayEmpty
              {...register("category")}
              input={<OutlinedInput notched={false} />}
              sx={{
                height: "100%",
                fontSize: "12px",
                fontFamily: "Inter Regular",
                lineHeight: "1.5",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    marginTop: "8px",
                    backgroundColor: "var(--accent)",
                    borderRadius: "15px",
                    maxHeight: "140px",
                  },
                },
              }}
              renderValue={(selected) => {
                if (!selected) {
                  return (
                    <span
                      style={{
                        color: "var(--trans-text)",
                        fontSize: "12px",
                        fontFamily: "Inter Regular",
                      }}
                    >
                      Category
                    </span>
                  );
                }
                return selected;
              }}
            >
              {categories.map((category, index) => (
                <StyledMenuItem key={index} value={category}>
                  {category}
                </StyledMenuItem>
              ))}
            </Select>
          </StyledFormControl>
          {errors.category && <p>{errors.category.message}</p>}

          <StyledInput type="text" placeholder="Stock" {...register("stock")} />
          {errors.stock && <p>{errors.stock.message}</p>}

          <StyledInput
            type="text"
            placeholder="Suppliers"
            {...register("suppliers")}
          />
          {errors.suppliers && <p>{errors.suppliers.message}</p>}

          <StyledInput type="text" placeholder="Price" {...register("price")} />
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
