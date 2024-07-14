import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Statistic from "../../components/Statistic/Statistic";
import { getDashboardInfoThunk } from "../../redux/data/operations";
import { TablesWrpr } from "./DashboardPage.styled";

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardInfoThunk());
  }, [dispatch]);

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
