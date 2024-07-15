import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  changeAddSupplierModal,
  changeEditSupplierModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { selectSuppliers } from "../../redux/selectors";
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

const AllSuppliersPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  const suppliers = useSelector(selectSuppliers);

  useEffect(() => {
    dispatch(getSuppliersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (filter === "") setFilteredSuppliers(suppliers);
  }, [filter, suppliers]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setFilteredSuppliers(
      suppliers.filter((supplier) =>
        supplier.user.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

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
              onChange={handleFilterChange}
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
                {filteredSuppliers.map((supplier, index) => (
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
          <div>
            <span className="active"></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </PaginWrpr>
      </AllOrdersWrpr>
    </Container>
  );
};
export default AllSuppliersPage;
