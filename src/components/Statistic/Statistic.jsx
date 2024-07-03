import sprite from "../../assets/sprite.svg";
import {
  BlockTitleWrpr,
  BlockWrpr,
  StatText,
  StatisticBlocksWrpr,
} from "./Statistic.styled";

const Statistic = () => {
  const products = 8430;
  const suppliers = 211;
  const customers = 140;

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
