import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@mui/material";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import { changePaginPage } from "../../redux/data/dataSlice";
import { getCustomersThunk } from "../../redux/data/operations";
import {
  displayedFunc,
  filteredFunc,
  handleFilterChange,
  pageOfCustomersFunc,
} from "../../helpers/helperFunctions";
import { selectCustomers, selectPaginPage } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  FilterWrpr,
  ImageNameWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const page = useSelector(selectPaginPage);
  const customers = useSelector(selectCustomers);

  useEffect(() => {
    dispatch(getCustomersThunk());
    setFilter("");
  }, [dispatch]);

  useEffect(() => {
    setFilteredCustomers(customers);
  }, [customers]);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filtered = filteredFunc(customers, filter);
    setFilteredCustomers(filtered);
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

  const displayedCustomers = displayedFunc(filteredCustomers, page);

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterWrpr>
          <input
            type="text"
            placeholder="User Name"
            value={filter}
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
        <PaginWrpr>
          <Pagination
            page={page}
            count={pageOfCustomersFunc(filteredCustomers)}
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

export default CustomersDataPage;
