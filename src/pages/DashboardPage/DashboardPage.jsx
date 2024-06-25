import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Statistic from "../../components/Statistic/Statistic";

const DashboardPage = () => {
  return (
    <div>
      <Statistic />
      <RecentCustomers />
      <IncomeExpenses />
    </div>
  );
};

export default DashboardPage;
