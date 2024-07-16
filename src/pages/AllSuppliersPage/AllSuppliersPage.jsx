import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  changeAddSupplierModal,
  changeEditSupplierModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { selectPaginPage, selectSuppliers } from "../../redux/selectors";
import { getSuppliersThunk } from "../../redux/data/operations";
import {
  AllOrdersWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import {
  FilterAndAddWrpr,
  FilterWrpr,
} from "../AllProductsPage/AllProductsPage.styled";
import { AddSupBtn, StatusWrpr, SupEditBtn } from "./AllSuppliersPage.styled";
import {
  displayedFunc,
  filteredFunc,
  handleFilterChange,
  pageOfCustomersFunc,
} from "../../helpers/helperFunctions";
import { changePaginPage } from "../../redux/data/dataSlice";
import { Pagination, PaginationItem } from "@mui/material";

const AllSuppliersPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  const page = useSelector(selectPaginPage);
  const suppliers = useSelector(selectSuppliers);

  useEffect(() => {
    dispatch(getSuppliersThunk());
    setFilter("");
  }, [dispatch]);

  useEffect(() => {
    setFilteredSuppliers(suppliers);
  }, [suppliers]);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filtered = filteredFunc(suppliers, filter);
    setFilteredSuppliers(filtered);
    dispatch(changePaginPage(1));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFilterSubmit(event);
    }
  };

  const handlePageChange = (event, value) => {
    dispatch(changePaginPage(value));
  };

  const displayedSuppliers = displayedFunc(filteredSuppliers, page);

  const handleAddSupplier = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddSupplierModal(true));
  };

  const handleEditSupplier = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeEditSupplierModal(true));
  };

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterAndAddWrpr>
          <FilterWrpr>
            <input
              type="text"
              placeholder="User Name"
              onChange={() => handleFilterChange(event, setFilter)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleFilterSubmit}>
              <svg width="14" height="14">
                <use href={sprite + "#filter"}></use>
              </svg>
              <p>Filter</p>
            </button>
          </FilterWrpr>
          <AddSupBtn onClick={handleAddSupplier}>Add a new suppliers</AddSupBtn>
        </FilterAndAddWrpr>
        <div>
          <TableTitle>All suppliers</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>Suppliers Info</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Delivery date</th>
                  <th>Ammount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedSuppliers.map((supplier, index) => (
                  <tr key={index}>
                    <th>{supplier.name}</th>
                    <th>{supplier.address}</th>
                    <th>{supplier.suppliers}</th>
                    <th>{supplier.date}</th>
                    <th>{supplier.amount}</th>
                    <th>
                      <StatusWrpr className={supplier.status.toLowerCase()}>
                        {supplier.status}
                      </StatusWrpr>
                    </th>
                    <th>
                      <SupEditBtn onClick={handleEditSupplier}>
                        <svg width="16" height="16">
                          <use href={sprite + "#edit"}></use>
                        </svg>
                        <p>Edit</p>
                      </SupEditBtn>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrpr>
        </div>
        <PaginWrpr>
          <Pagination
            page={page}
            count={pageOfCustomersFunc(filteredSuppliers)}
            hidePrevButton
            hideNextButton
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  backgroundColor: "#E7F1ED",
                  border: "1px solid transparent",
                  "&:hover": {
                    border: "1px solid var(--accent)",
                    backgroundColor: "#E7F1ED",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "var(--accent)",
                    "&:hover": {
                      backgroundColor: "var(--accent)",
                    },
                  },
                  "& .MuiPaginationItem-page": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "10px",
                      height: "10px",
                      backgroundColor: "var(--accent)",
                      borderRadius: "50%",
                    },
                    color: "transparent",
                  },
                }}
              />
            )}
          />
        </PaginWrpr>
      </AllOrdersWrpr>
    </Container>
  );
};
export default AllSuppliersPage;
