import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { styled } from "@mui/system";
import { MenuItem, Select, FormControl, OutlinedInput } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { selectAddSupplierModal } from "../../../redux/selectors";
import { closeModals } from "../../../redux/modals/modalsSlice";
import {
  ButtonsWrpr,
  InputsWrpr,
  ModalTitle,
  ModalWrpr,
  StyledInput,
} from "../AddEditProduct/AddEditProduct.styled";

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
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    "&.Mui-focused": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    boxShadow: "none",
  },
});

const AddEditSupplier = () => {
  const dispatch = useDispatch();
  const addSupplierModal = useSelector(selectAddSupplierModal);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Suppliers Info is required"),
    address: Yup.string().required("Address is required"),
    suppliers: Yup.string().required("Company is required"),
    date: Yup.string().required("Delivery date is required"),
    ammount: Yup.string().required("Ammount is required"),
    status: Yup.string().required("Status is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    const formattedDate = selectedDate
      ? dayjs(selectedDate).format("MMMM D, YYYY")
      : null;
    data.delivDate = formattedDate;

    dispatch(closeModals());
    if (addSupplierModal) {
      console.log(`Added a supplier with this parameters:`, data);
    } else {
      console.log(`Edited a supplier with this parameters:`, data);
    }
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
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <StyledInput
            type="text"
            placeholder="Address"
            {...register("address")}
          />
          {errors.address && <p>{errors.address.message}</p>}

          <StyledInput
            type="text"
            placeholder="Company"
            {...register("suppliers")}
          />
          {errors.suppliers && <p>{errors.suppliers.message}</p>}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setValue("date", date, { shouldValidate: true });
              }}
              renderInput={(params) => (
                <StyledInput
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "Delivery date", // Custom placeholder
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {errors.date && <p>{errors.date.message}</p>}

          <StyledInput
            type="text"
            placeholder="Ammount"
            {...register("ammount")}
          />
          {errors.ammount && <p>{errors.ammount.message}</p>}

          <StyledFormControl variant="outlined">
            <Select
              defaultValue=""
              displayEmpty
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
          {errors.status && <p>{errors.status.message}</p>}
        </InputsWrpr>
        <ButtonsWrpr>
          <button type="submit">{addSupplierModal ? "Add" : "Save"}</button>
          <button
            className="cancel"
            type="button"
            onClick={() => {
              dispatch(closeModals());
            }}
          >
            Cancel
          </button>
        </ButtonsWrpr>
      </form>
    </ModalWrpr>
  );
};

export default AddEditSupplier;
