import { useSelector } from "react-redux";
import { selectIncomeExpenses } from "../../redux/selectors";
import {
  TableContainer,
  Table,
  TableTitle,
} from "../RecentCustomers/RecentCustomers.styled";
import { AmountText, TypeWrpr } from "./IncomeExpenses.styled";

const IncomeExpensesTable = () => {
  const incomeExpenses = useSelector(selectIncomeExpenses);

  return (
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
                <th>{entry.name}</th>
                <th>
                  <AmountText className={entry.type.toLowerCase()}>
                    {entry.amount}
                  </AmountText>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IncomeExpensesTable;
