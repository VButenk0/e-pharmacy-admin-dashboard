import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableTitle,
} from "./IncomeExpenses.styled";

const incomeExpenses = [
  { type: "Expense", description: "Qonto billing", amount: "-49.88" },
  {
    type: "Income",
    description: "Cruip.com Market Ltd 70 Wilson St London",
    amount: "+249.88",
  },
  { type: "Income", description: "Notion Labs Inc", amount: "+99.99" },
  { type: "Income", description: "Market Cap Ltd", amount: "+1,200.88" },
  {
    type: "Error",
    description: "App.com Market Ltd 70 Wilson St London",
    amount: "+99.99",
  },
  {
    type: "Expense",
    description: "App.com Market Ltd 70 Wilson St London",
    amount: "-49.88",
  },
];

const IncomeExpensesTable = () => (
  <TableContainer>
    <TableTitle>Income/Expenses</TableTitle>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incomeExpenses.map((entry, index) => (
          <TableRow key={index} className={entry.type.toLowerCase()}>
            <TableCell>
              <div>{entry.type}</div>
            </TableCell>
            <TableCell>{entry.description}</TableCell>
            <TableCell>{entry.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default IncomeExpensesTable;
