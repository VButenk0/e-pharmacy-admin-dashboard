import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableTitle,
} from "./RecentCustomers.styled";

const recentCustomers = [
  { name: "Alex Shatov", email: "alexshatov@gmail.com", spent: "2,890.66" },
  { name: "Philip Harbach", email: "philip.h@gmail.com", spent: "2,767.04" },
  { name: "Mirko Fisuk", email: "mirkofisuk@gmail.com", spent: "2,996.00" },
  { name: "Olga Semklo", email: "olga.s@cool.design", spent: "1,220.66" },
  { name: "Burak Long", email: "longburak@gmail.com", spent: "1,890.66" },
];

const RecentCustomersTable = () => (
  <TableContainer>
    <TableTitle>Recent Customers</TableTitle>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Spent</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentCustomers.map((customer, index) => (
          <TableRow key={index}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.spent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default RecentCustomersTable;
