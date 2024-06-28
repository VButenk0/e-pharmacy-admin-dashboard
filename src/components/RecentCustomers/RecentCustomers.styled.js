import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: var(--tab-bg);
  border-radius: 8px 8px 0 0;
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
  border-radius: 0 0 8px 8px;
`;

export const TableHeader = styled.thead`
  tr th {
    color: var(--trans-text);
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableBody = styled.tbody``;
