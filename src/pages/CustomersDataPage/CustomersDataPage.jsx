import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import { selectCustomers, selectPaginPage } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  FilterWrpr,
  ImageNameWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import { getCustomersThunk } from "../../redux/data/operations";
import { Pagination } from "@mui/material";
import { changePaginPage } from "../../redux/data/dataSlice";

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const page = useSelector(selectPaginPage);
  const customers = useSelector(selectCustomers);

  console.log(page);

  useEffect(() => {
    dispatch(getCustomersThunk());
  }, [dispatch]);

  useEffect(() => {
    const filtered = filter
      ? customers.filter((customer) =>
          customer.name.toLowerCase().includes(filter.toLowerCase())
        )
      : customers;
    setFilteredCustomers(filtered);
  }, [filter, customers]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filtered = customers.filter((customer) =>
      customer.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCustomers(filtered);
    dispatch(changePaginPage(1));
  };

  const handlePageChange = (event, value) => {
    dispatch(changePaginPage(value));
  };

  const pageOfCustomers = Math.ceil(filteredCustomers.length / 5);
  console.log(pageOfCustomers);

  const displayedCustomers = filteredCustomers.slice((page - 1) * 5, page * 5);

  return (
    <Container>
      <AllOrdersWrpr>
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
        <div>
          <TableTitle>Customers Data</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>User Info</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Register date</th>
                </tr>
              </thead>
              <tbody>
                {displayedCustomers.map((customer, index) => (
                  <tr key={index}>
                    <th>
                      <ImageNameWrpr>
                        <img
                          src={customer.image}
                          alt={customer.name + "'s Photo"}
                          width={36}
                          height={36}
                        />
                        {customer.name}
                      </ImageNameWrpr>
                    </th>
                    <th>{customer.email}</th>
                    <th>{customer.address}</th>
                    <th>{customer.phone}</th>
                    <th>{customer.register_date}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrpr>
        </div>
        {/* color="var(--accent)" boundaryCount={0}*/}
        <PaginWrpr>
          <Pagination
            page={page}
            count={pageOfCustomers}
            hidePrevButton
            hideNextButton
            onChange={handlePageChange}
          />
          {/* <div>
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
          </div> */}
        </PaginWrpr>
      </AllOrdersWrpr>
    </Container>
  );
};

export default CustomersDataPage;
