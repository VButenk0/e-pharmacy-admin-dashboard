import Container from "../../components/Container/Container";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Statistic from "../../components/Statistic/Statistic";
import { TablesWrpr } from "./DashboardPage.styled";

const DashboardPage = () => {
  return (
    <Container>
      <Statistic />
      <TablesWrpr>
        <RecentCustomers />
        <IncomeExpenses />
      </TablesWrpr>
    </Container>
  );
};

export default DashboardPage;
