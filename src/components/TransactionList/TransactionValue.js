import React from "react";
import styled from "styled-components";
import { transactionExpense, transactionIncome } from "../../constants/colors";

const FlexContaner = styled.div`
  display: flex;
  align-items: center;
`;

const Value = styled.div`
  font-weight: bold;
  margin-right: 5px;
  color: ${({ type }) =>
    type === "income" ? transactionIncome : transactionExpense};
`;

const Currency = styled.span`
  display: inline-block;
  font-size: 10px;
`;

export default ({ type, children }) => (
  <FlexContaner>
    <Value type={type}>
      {type === "income" ? `+ ${children}` : `- ${children}`}
    </Value>
    <Currency>CZK</Currency>
  </FlexContaner>
);
