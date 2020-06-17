import styled from "styled-components";
import React from "react";
import { PrimaryBtn } from "./Button";
const GridContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.03);
  display: grid;
  width: 100%;
  padding: 22px 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 30px;
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const GridItemAlignRight = styled(GridItem)`
  align-items: flex-end;
`;
const styledP = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;
const Secondary = styled.span`
  color: #597a98;
`;

const Header = (props) => {
  const wo = props.data;
  console.log(wo);
  return (
    <GridContainer>
      <GridItem>
        <styledP>
          <Secondary>Work Order:</Secondary> {wo.work_order_id}
        </styledP>
        <styledP>
          <Secondary>Material:</Secondary> {wo.material}
        </styledP>
        <styledP>
          <Secondary>Desired:</Secondary> {wo.qty_desired}
        </styledP>
      </GridItem>
      <GridItemAlignRight>
        <styledP>
          <Secondary>Date:</Secondary> {wo.run_date}
        </styledP>
        <styledP>
          <Secondary>Batch Number:</Secondary> {wo.batch_number}
        </styledP>
        <styledP>
          <Secondary>Start:</Secondary> {wo.time_start}
        </styledP>
      </GridItemAlignRight>
      <form>
        <label>
          <Secondary>Qty Actual:</Secondary>
        </label>
        <input type="number" />
        <PrimaryBtn>Finish Run</PrimaryBtn>
      </form>
    </GridContainer>
  );
};

export default Header;
