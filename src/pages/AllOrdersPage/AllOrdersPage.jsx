import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import { selectOrders } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  FilterWrpr,
  ImageNameWrpr,
  OrderStatusWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "./AllOrdersPage.styled";
import { useState, useEffect } from "react";
import { getOrdersThunk } from "../../redux/data/operations";

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (filter === "") setFilteredOrders(orders);
  }, [filter, orders]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setFilteredOrders(
      orders.filter((order) =>
        order.user.toLowerCase().includes(filter.toLowerCase())
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
            value={filter}
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
                {filteredOrders.map((order, index) => (
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

export default AllOrdersPage;
