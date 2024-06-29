import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  AllOrdersWrpr,
  FilterWrpr,
  PaginWrpr,
  TableWrpr,
} from "./AllOrdersPage.styled";

const AllOrdersPage = () => {
  const orders = [
    {
      user: "Alex Shatov",
      address: "Mripur-1",
      products: "12",
      date: "July 31, 2023",
      price: "890.66",
      status: "Completed",
    },
    {
      user: "Philip Harbach",
      address: "Dhonmondi",
      products: "19",
      date: "July 31, 2023",
      price: "340.16",
      status: "Confirmed",
    },
    {
      user: "Mirko Fisuk",
      address: "Uttara-6",
      products: "09",
      date: "July 31, 2023",
      price: "530.76",
      status: "Pending",
    },
    {
      user: "Olga Semklo",
      address: "Gulshan-1",
      products: "14",
      date: "July 31, 2023",
      price: "280.57",
      status: "Cancelled",
    },
    {
      user: "Burak Long",
      address: "Mirpur-12",
      products: "10",
      date: "July 31, 2023",
      price: "567.34",
      status: "Processing",
    },
  ];

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterWrpr>
          <input type="text" placeholder="User Name" />
          <button>
            <svg width="14" height="14">
              <use href={sprite + "#filter"}></use>
            </svg>
            <p>Filter</p>
          </button>
        </FilterWrpr>
        <TableWrpr>
          <h2>All orders</h2>
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
              {orders.map((order, index) => (
                <tr key={index}>
                  <th>{order.user}</th>
                  <th>{order.address}</th>
                  <th>{order.products}</th>
                  <th>{order.date}</th>
                  <th>{order.price}</th>
                  <th>
                    <div className={order.status.toLowerCase()}>
                      {order.status}
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrpr>
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
