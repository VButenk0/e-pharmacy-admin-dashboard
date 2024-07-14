import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import {
  BlockTitleWrpr,
  BlockWrpr,
  StatText,
  StatisticBlocksWrpr,
} from "./Statistic.styled";
import { selectStatistics } from "../../redux/selectors";

const Statistic = () => {
  const statistics = useSelector(selectStatistics);
  const products = statistics.allProducts;
  const suppliers = statistics.allSuppliers;
  const customers = statistics.allCustomers;

  return (
    <StatisticBlocksWrpr>
      <BlockWrpr>
        <BlockTitleWrpr>
          <svg width="20" height="20">
            <use href={sprite + "#all-products"}></use>
          </svg>
          <p>All products</p>
        </BlockTitleWrpr>
        <StatText>{products.toLocaleString("en-US")}</StatText>
      </BlockWrpr>
      <BlockWrpr>
        <BlockTitleWrpr>
          <svg width="20" height="20">
            <use href={sprite + "#all-users"}></use>
          </svg>
          <p>All suppliers</p>
        </BlockTitleWrpr>
        <StatText>{suppliers}</StatText>
      </BlockWrpr>
      <BlockWrpr>
        <BlockTitleWrpr>
          <svg width="20" height="20">
            <use href={sprite + "#all-users"}></use>
          </svg>
          <p>All customers</p>
        </BlockTitleWrpr>
        <StatText>{customers}</StatText>
      </BlockWrpr>
    </StatisticBlocksWrpr>
  );
};

export default Statistic;
