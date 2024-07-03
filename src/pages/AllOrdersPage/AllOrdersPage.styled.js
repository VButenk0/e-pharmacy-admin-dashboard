import styled from "styled-components";

export const AllOrdersWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterWrpr = styled.div`
  display: flex;
  align-content: center;
  gap: 14px;

  padding-top: 55px;

  input {
    width: 224px;
    height: 44px;
    border-radius: 60px;
    padding: 0 18px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: var(--accent);
    border-radius: 60px;
    padding: 13px 30px;

    color: var(--white-text);
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const TableTitle = styled.h2`
  background-color: var(--tab-bg);
  border-radius: 8px 8px 0 0;
  width: 100%;

  font-size: 18px;
  font-family: "Inter SemiBold";
  line-height: 1.33333;

  padding: 20px;
`;

export const TableWrpr = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  border-radius: 0 0 8px 8px;
  padding: 0 20px;
  background-color: var(--white);
  border-top: none;
  border: 1px solid var(--border-color);

  table {
    border-collapse: collapse;
    background-color: var(--white);
    width: 100%;
    height: 100%;

    thead {
      color: var(--trans-text);
      font-size: 14px;
      line-height: 1.28571;
    }

    tbody tr {
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);

      &:last-of-type {
        border-bottom: none;
      }
    }

    tr th {
      padding: 20px;

      text-align: left;
      font-family: "Inter Medium";
      font-size: 16px;
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

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
`;

export const OrderStatusWrpr = styled.div`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.7px;

  &.completed {
    color: var(--completed);
    background-color: var(--completed-bg);
  }
  &.confirmed {
    color: var(--confirmed);
    background-color: var(--confirmed-bg);
  }
  &.pending {
    color: var(--pending);
    background-color: var(--pending-bg);
  }
  &.cancelled {
    color: var(--cancelled);
    background-color: var(--cancelled-bg);
  }
  &.processing {
    color: var(--processing);
    background-color: var(--processing-bg);
  }
`;

export const PaginWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0 auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 19px;
    height: 19px;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--tab-bg);
      &.active {
        background-color: var(--accent);
      }
    }
  }
`;
