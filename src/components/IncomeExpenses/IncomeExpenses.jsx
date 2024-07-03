import {
  TableContainer,
  Table,
  TableTitle,
} from "../RecentCustomers/RecentCustomers.styled";
import { TypeWrpr } from "./IncomeExpenses.styled";

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
  <div>
    <TableTitle>Income/Expenses</TableTitle>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeExpenses.map((entry, index) => (
            <tr key={index}>
              <th>
                <TypeWrpr className={entry.type.toLowerCase()}>
                  {entry.type}
                </TypeWrpr>
              </th>
              <th>{entry.description}</th>
              <th>{entry.amount}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  </div>
);

export default IncomeExpensesTable;
