import { useSelector } from "react-redux";
import { selectRecentCustomers } from "../../redux/selectors";
import { TableContainer, Table, TableTitle } from "./RecentCustomers.styled";
import { ImageNameWrpr } from "../../pages/AllOrdersPage/AllOrdersPage.styled";

const RecentCustomersTable = () => {
  const recentCustomers = useSelector(selectRecentCustomers);

  return (
    <div>
      <TableTitle>Recent Customers</TableTitle>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {recentCustomers.map((customer, index) => (
              <tr key={index}>
                <th>
                  <ImageNameWrpr>
                    <img
                      src={customer.image || customer.photo}
                      alt={customer.name + "'s Photo"}
                      width={36}
                      height={36}
                    />
                    {customer.name}
                  </ImageNameWrpr>
                </th>
                <th>{customer.email}</th>
                <th>{customer.spent}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecentCustomersTable;
