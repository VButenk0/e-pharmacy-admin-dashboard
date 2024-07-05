import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { selectAddSupplierModal } from "../../../redux/selectors";
import { closeModals } from "../../../redux/modals/modalsSlice";

const AddEditSupplier = () => {
  const dispatch = useDispatch();
  const addSupplierModal = useSelector(selectAddSupplierModal);
  // const editSupplierModal = useSelector(selectEditSupplierModal);

  const validationSchema = Yup.object().shape({
    supInfo: Yup.string().required("Suppliers Info is required"),
    address: Yup.string().required("Address is required"),
    company: Yup.string().required("Company is required"),
    delivDate: Yup.string().required("Delivery date is required"),
    ammount: Yup.string().required("Ammount is required"),
    status: Yup.string().required("Status is required"),
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
    if (addSupplierModal) {
      // dispatch(addProductThunk(data))
      console.log(`Added a product with this parameters: ${data}`);
    } else {
      // dispatch(editProductThunk(data))
      console.log(`Edited a product with this parameters: ${data}`);
    }
  };

  const statuses = ["Active", "Deactive"];

  return (
    <div>
      <h2>{addSupplierModal ? "Add a new product" : "Edit product"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Suppliers Info"
            {...register("supInfo")}
          />
          {errors.supInfo && <p>{errors.supInfo.message}</p>}

          <input type="text" placeholder="Address" {...register("address")} />
          {errors.address && <p>{errors.address.message}</p>}

          <input type="text" placeholder="Company" {...register("company")} />
          {errors.company && <p>{errors.company.message}</p>}

          {/* <input
            type="text"
            placeholder="Delivery date"
            {...register("delivDate")}
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...register("delivDate")} />
          </LocalizationProvider>
          {errors.delivDate && <p>{errors.delivDate.message}</p>}

          <input type="text" placeholder="Ammount" {...register("ammount")} />
          {errors.ammount && <p>{errors.ammount.message}</p>}

          <select {...register("status")} defaultValue="">
            <option value="" disabled hidden>
              Category
            </option>
            {statuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.status && <p>{errors.status.message}</p>}
        </div>
        <div>
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
        </div>
      </form>
    </div>
  );
};

export default AddEditSupplier;
