import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  AllOrdersWrpr,
  FilterWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";

const CustomersDataPage = () => {
  const customers = [
    {
      user: "Alex Shatov",
      email: "alexshatov@gmail.com",
      address: "Mripur-1",
      phone: "+8801736985253",
      date: "Aug 1, 2023",
    },
    {
      user: "Philip Harbach",
      email: "philip.h@gmail.com",
      address: "Dhonmondi",
      phone: "+8801636985275",
      date: "Aug 1, 2023",
    },
    {
      user: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      address: "Uttara-6",
      phone: "+8801336985214",
      date: "Aug 1, 2023",
    },
    {
      user: "Olga Semklo",
      email: "olga.s@cool.design",
      address: "Gulshan-1",
      phone: "+8801736985264",
      date: "Aug 1, 2023",
    },
    {
      user: "Burak Long",
      email: "longburak@gmail.com",
      address: "Mirpur-12",
      phone: "+8801736984514",
      date: "Aug 1, 2023",
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
                {customers.map((customer, index) => (
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
