import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import { selectCustomers } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  FilterWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";

const CustomersDataPage = () => {
  const [filter, setFilter] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const customers = useSelector(selectCustomers);

  useEffect(() => {
    if (filter === "") setFilteredCustomers(customers);
  }, [filter, customers]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setFilteredCustomers(
      customers.filter((customer) =>
        customer.user.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

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
          <TableTitle>All orders</TableTitle>
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
                {filteredCustomers.map((customer, index) => (
                  <tr key={index}>
                    <th>{customer.user}</th>
                    <th>{customer.email}</th>
                    <th>{customer.address}</th>
                    <th>{customer.phone}</th>
                    <th>{customer.date}</th>
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

export default CustomersDataPage;
