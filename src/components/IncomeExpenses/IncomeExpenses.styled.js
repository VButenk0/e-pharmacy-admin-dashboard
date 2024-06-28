import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: var(--tab-bg);
  border-radius: 8px;
  width: 630px;
  height: 512px;
`;

export const TableTitle = styled.h2`
  font-family: "Inter SemiBold";
  font-size: 18px;
  line-height: 1.33333;
  padding: 20px;
`;

export const Table = styled.table`
  padding: 20px;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  background-color: var(--white);
`;

export const TableHeader = styled.thead`
  tr th {
    color: var(--trans-text);
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const TableRow = styled.tr`
  th div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 13.5px;
    border-radius: 40px;

    font-size: 14px;
    letter-spacing: -0.7px;
  }

  &.expense th div {
    color: var(--accent2);
    background-color: var(--light-red);
  }
  &.income th div {
    color: var(--accent);
    background-color: var(--light-green);
  }
  &.error th div {
    background-color: var(--border-color);
  }

  &.expense th:last-of-type {
    color: var(--accent2);
  }
  &.income th:last-of-type {
    color: var(--accent);
  }
`;

export const TableCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableBody = styled.tbody``;
