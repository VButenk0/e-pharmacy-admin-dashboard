import { TableContainer, Table, TableTitle } from "./RecentCustomers.styled";

const recentCustomers = [
  { name: "Alex Shatov", email: "alexshatov@gmail.com", spent: "2,890.66" },
  { name: "Philip Harbach", email: "philip.h@gmail.com", spent: "2,767.04" },
  { name: "Mirko Fisuk", email: "mirkofisuk@gmail.com", spent: "2,996.00" },
  { name: "Olga Semklo", email: "olga.s@cool.design", spent: "1,220.66" },
  { name: "Burak Long", email: "longburak@gmail.com", spent: "1,890.66" },
];

const RecentCustomersTable = () => (
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
              <th>{customer.name}</th>
              <th>{customer.email}</th>
              <th>{customer.spent}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  </div>
);

export default RecentCustomersTable;
