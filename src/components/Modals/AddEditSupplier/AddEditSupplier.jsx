import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { styled } from "@mui/system";
import { MenuItem, Select, FormControl, OutlinedInput } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { capitalizeWords } from "../../../helpers/helperFunctions";
import {
  addSupplierThunk,
  editSupplierThunk,
  getSuppliersThunk,
} from "../../../redux/data/operations";
import { selectSelectedItem } from "../../../redux/selectors";
import {
  ButtonsWrpr,
  InputsWrpr,
  ModalTitle,
  ModalWrpr,
  StyledInput,
} from "../AddEditProduct/AddEditProduct.styled";
import { ErrorMsg } from "./AddEditSupplier.styled";

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

const StyledDatePicker = styled(DatePicker)({
  width: "224px",
  height: "44px",
  borderRadius: "60px",
  border: "1px solid var(--border-color)",
  "& .MuiOutlinedInput-root": {
    border: "none",
    borderRadius: "60px",
    boxShadow: "none",
    height: "100%",
    "&:hover": {
      border: "none",
    },
    "&.Mui-focused": {
      border: "none",
    },
  },
  "&.MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderRadius: "60px",
  },
  "& .MuiInputBase-input": {
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    boxShadow: "none",
    fontFamily: "Inter Regular",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  "& .MuiIconButton-root svg": {
    color: "var(--accent)",
  },
});

const AddEditSupplier = ({ addSupplierModal, closeModals }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const { _id, name, address, suppliers, date, amount, status } = selectedItem;

  const notFormattedAmount = (amount) =>
    parseFloat(amount.replace(/[^0-9.]/g, ""));

  const validationSchemaAdd = Yup.object().shape({
    name: Yup.string()
      .required("Supplier Info is required")
      .matches(
        /^[A-Za-z]+\s[A-Za-z]+$/,
        "Supplier Info must contain at least two words"
      )
      .max(20, "Supplier Info must be at most 20 characters")
      .min(4, "Supplier Info must be at least 4 characters"),
    address: Yup.string()
      .required("Address is required")
      .matches(
        /^[A-Za-z]+-\d+$/,
        "Address must be in the format 'StreetName-Number'"
      ),
    suppliers: Yup.string()
      .required("Suppliers is required")
      .min(3, "Suppliers must be at least 3 characters")
      .max(20, "Suppliers must be at most 20 characters"),
    date: Yup.string().required("Date is required"),
    amount: Yup.number()
      .required("Amount is required")
      .min(1, "Amount must be at least 1")
      .max(9999, "Amount must be at most 9999"),
    status: Yup.string()
      .required("Status is required")
      .oneOf(
        ["Active", "Deactive"],
        "Status must be either 'Active' or 'Deactive'"
      ),
  });

  const validationSchemaEdit = Yup.object().shape({
    name: Yup.string()
      .notRequired()
      .matches(/^[A-Za-z]+\s[A-Za-z]+$/, "Name must contain at least two words")
      .max(20, "Name must be at most 20 characters")
      .min(4, "Name must be at least 4 characters"),
    address: Yup.string()
      .notRequired()
      .matches(
        /^[A-Za-z]+-\d+$/,
        "Address must be in the format 'StreetName-Number'"
      ),
    suppliers: Yup.string()
      .notRequired()
      .min(3, "Suppliers must be at least 3 characters")
      .max(20, "Suppliers must be at most 20 characters"),
    date: Yup.string().notRequired(),
    amount: Yup.number()
      .notRequired()
      .min(1, "Amount must be at least 1")
      .max(9999, "Amount must be at most 9999"),
    status: Yup.string()
      .notRequired()
      .oneOf(
        ["Active", "Deactive"],
        "Status must be either 'Active' or 'Deactive'"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(
      addSupplierModal ? validationSchemaAdd : validationSchemaEdit
    ),
  });

  const [selectedDate, setSelectedDate] = useState(date ? dayjs(date) : null);

  useEffect(() => {
    setSelectedDate(date ? dayjs(date) : null);
  }, [date]);

  const onSubmit = (data) => {
    data.name = capitalizeWords(data.name);
    data.address = capitalizeWords(data.address);
    data.suppliers = capitalizeWords(data.suppliers);
    const formattedDate = selectedDate
      ? dayjs(selectedDate).format("MMMM D, YYYY")
      : null;
    data.date = formattedDate;
    data.amount = `৳ ${parseFloat(data.amount).toFixed(2)}`;

    const changedData = {};
    for (const key in data) {
      if (data[key] !== selectedItem[key]) {
        changedData[key] = data[key];
      }
    }

    if (addSupplierModal) {
      dispatch(addSupplierThunk(data))
        .then(() => {
          toast.success(`${data.name} successfully added`);
          dispatch(getSuppliersThunk());
        })
        .catch((err) => toast.error(err.message));
    } else {
      dispatch(editSupplierThunk({ _id, ...changedData }))
        .then(() => {
          toast.success(`${name} successfully edited`);
          dispatch(getSuppliersThunk());
        })
        .catch((err) => toast.error(err.message));
    }
    closeModals();
  };

  const statuses = ["Active", "Deactive"];

  return (
    <ModalWrpr>
      <ModalTitle>
        {addSupplierModal ? "Add a new suppliers" : "Edit supplier"}
      </ModalTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrpr>
          <StyledInput
            type="text"
            placeholder="Suppliers Info"
            defaultValue={addSupplierModal ? "" : name}
            {...register("name")}
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

          <StyledInput
            type="text"
            placeholder="Address"
            defaultValue={addSupplierModal ? "" : address}
            {...register("address")}
          />
          {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}

          <StyledInput
            type="text"
            placeholder="Company"
            defaultValue={addSupplierModal ? "" : suppliers}
            {...register("suppliers")}
          />
          {errors.suppliers && <ErrorMsg>{errors.suppliers.message}</ErrorMsg>}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setValue("date", date, { shouldValidate: true });
              }}
              slotProps={{
                textField: {
                  inputProps: {
                    placeholder: "Delivery date",
                  },
                },
              }}
            />
          </LocalizationProvider>
          {errors.date && <ErrorMsg>{errors.date.message}</ErrorMsg>}

          <StyledInput
            type="number"
            step="0.01"
            placeholder="Amount"
            defaultValue={addSupplierModal ? "" : notFormattedAmount(amount)}
            {...register("amount")}
          />
          {errors.amount && <ErrorMsg>{errors.amount.message}</ErrorMsg>}

          <StyledFormControl variant="outlined">
            <Select
              displayEmpty
              defaultValue={status || "Active"}
              {...register("status")}
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
                      Status
                    </span>
                  );
                }
                return selected;
              }}
            >
              {statuses.map((status, index) => (
                <StyledMenuItem key={index} value={status}>
                  {status}
                </StyledMenuItem>
              ))}
            </Select>
          </StyledFormControl>
          {errors.status && <ErrorMsg>{errors.status.message}</ErrorMsg>}
        </InputsWrpr>
        <ButtonsWrpr>
          <button type="submit">{addSupplierModal ? "Add" : "Save"}</button>
          <button
            className="cancel"
            type="button"
            onClick={() => closeModals()}
          >
            Cancel
          </button>
        </ButtonsWrpr>
      </form>
    </ModalWrpr>
  );
};

export default AddEditSupplier;
