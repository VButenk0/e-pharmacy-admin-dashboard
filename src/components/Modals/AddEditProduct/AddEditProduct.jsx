import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { styled } from "@mui/system";
import { MenuItem, Select, FormControl, OutlinedInput } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { capitalizeWords } from "../../../helpers/helperFunctions";
import {
  addProductThunk,
  editProductThunk,
  getProductsThunk,
} from "../../../redux/data/operations";
import { selectSelectedItem } from "../../../redux/selectors";
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

const AddEditProduct = ({ addProductModal, closeModals }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);

  const { _id, name, category, stock, suppliers, price } = selectedItem;

  const validationSchemaAdd = Yup.object().shape({
    name: Yup.string()
      .required("Product Info is required")
      .min(4, "Product Info must be at least 4 characters")
      .max(20, "Product Info must be at most 20 characters"),
    category: Yup.string().required("Category is required"),
    stock: Yup.number()
      .required("Stock is required")
      .min(1, "Stock must be at least 1")
      .max(100, "Stock must be at most 100"),
    suppliers: Yup.string()
      .required("Suppliers is required")
      .min(3, "Suppliers must be at least 3 characters")
      .max(20, "Suppliers must be at most 20 characters"),
    price: Yup.number()
      .required("Price is required")
      .min(1, "Price must be at least 1")
      .max(100, "Price must be at most 100"),
  });

  const validationSchemaEdit = Yup.object().shape({
    name: Yup.string()
      .notRequired()
      .min(4, "Product Info must be at least 4 characters")
      .max(20, "Product Info must be at most 20 characters"),
    category: Yup.string().required("Category is required"),
    stock: Yup.number()
      .notRequired()
      .min(1, "Stock must be at least 1")
      .max(100, "Stock must be at most 100"),
    suppliers: Yup.string()
      .notRequired()
      .min(3, "Suppliers must be at least 3 characters")
      .max(20, "Suppliers must be at most 20 characters"),
    price: Yup.number()
      .notRequired()
      .min(1, "Price must be at least 1")
      .max(100, "Price must be at most 100"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      addProductModal ? validationSchemaAdd : validationSchemaEdit
    ),
  });

  const onSubmit = (data) => {
    data.name = capitalizeWords(data.name);
    data.suppliers = capitalizeWords(data.suppliers);
    data.price = parseFloat(data.price).toFixed(2);

    const changedData = {};
    for (const key in data) {
      if (data[key] !== selectedItem[key]) {
        changedData[key] = data[key];
      }
    }

    if (addProductModal) {
      dispatch(addProductThunk(data))
        .then(() => {
          toast.success(`${data.name} successfully added`);
          dispatch(getProductsThunk());
        })
        .catch((err) => toast.error(err.message));
    } else {
      dispatch(editProductThunk({ _id, ...changedData }))
        .then(() => {
          toast.success(`${data.name} successfully edited`);
          dispatch(getProductsThunk());
        })
        .catch((err) => toast.error(err.message));
    }
    closeModals();
  };

  const categories = [
    "Medicine",
    "Heart",
    "Head",
    "Hand",
    "Leg",
    "Skin Care",
    "Dental Care",
  ];

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
            defaultValue={addProductModal ? "" : name}
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <StyledFormControl variant="outlined">
            <Select
              displayEmpty
              defaultValue={category || ""}
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

          <StyledInput
            type="number"
            placeholder="Stock"
            defaultValue={addProductModal ? "" : stock}
            {...register("stock")}
          />
          {errors.stock && <p>{errors.stock.message}</p>}
          <StyledInput
            type="text"
            placeholder="Suppliers"
            defaultValue={addProductModal ? "" : suppliers}
            {...register("suppliers")}
          />
          {errors.suppliers && <p>{errors.suppliers.message}</p>}
          <StyledInput
            type="number"
            step="0.01"
            placeholder="Price"
            defaultValue={addProductModal ? "" : price}
            {...register("price")}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </InputsWrpr>
        <ButtonsWrpr>
          <button type="submit">{addProductModal ? "Add" : "Save"}</button>
          <button
            type="button"
            onClick={() => {
              closeModals();
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
