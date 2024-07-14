import styled from "styled-components";

export const TableTitle = styled.h2`
  background-color: var(--tab-bg);
  border-radius: 8px 8px 0 0;
  font-family: "Inter SemiBold";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33333;
  padding: 20px;
`;

export const TableContainer = styled.div`
  background-color: var(--white);
  border-radius: 0 0 8px 8px;
  width: 630px;
  height: 512px;
  padding: 0 20px;
  border: 1px solid var(--border-color);

  overflow-x: auto;
  -webkit-overflow-scrolling: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border-radius: 0 0 8px 8px;

  thead {
    position: sticky;
    top: 0;
    background-color: var(--white);

    color: var(--trans-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28571;

    tr {
      border-bottom: 1px solid var(--border-color);
    }
  }

  tr th {
    padding: 20px;

    text-align: left;
    font-family: "Inter Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.125;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);

    &:first-of-type {
      border-left: none;
      padding-left: 0;
    }
    &:last-of-type {
      border-right: none;
      padding-right: 0;
    }
  }

  tbody {
    overflow-x: auto;
  }

  tbody tr {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    &:last-of-type {
      border-bottom: none;
    }
  }
`;
