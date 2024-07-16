import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@mui/material";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import { getOrdersThunk } from "../../redux/data/operations";
import { changePaginPage } from "../../redux/data/dataSlice";
import {
  displayedFunc,
  filteredFunc,
  handleFilterChange,
  pageOfCustomersFunc,
} from "../../helpers/helperFunctions";
import { selectOrders, selectPaginPage } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  FilterWrpr,
  ImageNameWrpr,
  OrderStatusWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "./AllOrdersPage.styled";

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const page = useSelector(selectPaginPage);
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrdersThunk());
    setFilter("");
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filtered = filteredFunc(orders, filter);
    setFilteredOrders(filtered);
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

  const displayedOrders = displayedFunc(filteredOrders, page);

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
          <TableTitle>All orders</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>User Info</th>
                  <th>Address</th>
                  <th>Products</th>
                  <th>Order date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {displayedOrders.map((order, index) => (
                  <tr key={index}>
                    <th>
                      <ImageNameWrpr>
                        <img
                          src={order.photo}
                          alt={order.name + "'s Photo"}
                          width={36}
                          height={36}
                        />
                        {order.name}
                      </ImageNameWrpr>
                    </th>
                    <th>{order.address}</th>
                    <th>{order.products}</th>
                    <th>{order.order_date}</th>
                    <th>{order.price}</th>
                    <th>
                      <OrderStatusWrpr className={order.status.toLowerCase()}>
                        {order.status}
                      </OrderStatusWrpr>
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
            count={pageOfCustomersFunc(filteredOrders)}
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

export default AllOrdersPage;
