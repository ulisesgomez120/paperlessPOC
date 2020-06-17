import styled from "styled-components";
import React from "react";
import { PrimaryBtnBlock } from "./Button";
import { FinishRunInput } from "./Input";

const GridContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.03);
  display: grid;
  width: 100%;
  padding: 22px 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.65fr;
  grid-row-gap: 30px;
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const GridItemAlignRight = styled(GridItem)`
  align-items: flex-end;
`;
const StyledP = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;
const Secondary = styled.span`
  color: #597a98;
`;

const Header = (props) => {
  const wo = props.data;
  return (
    <GridContainer>
      <GridItem>
        <StyledP>
          <Secondary>Work Order:</Secondary> {wo.work_order_id}
        </StyledP>
        <StyledP>
          <Secondary>Material:</Secondary> {wo.material}
        </StyledP>
        <StyledP>
          <Secondary>Desired:</Secondary> {wo.qty_desired}
        </StyledP>
      </GridItem>
      <GridItemAlignRight>
        <StyledP>
          <Secondary>Date:</Secondary> {wo.run_date}
        </StyledP>
        <StyledP>
          <Secondary>Batch Number:</Secondary> {wo.batch_number}
        </StyledP>
        <StyledP>
          <Secondary>Start:</Secondary> {wo.time_start}
        </StyledP>
      </GridItemAlignRight>
      <GridItem>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <Secondary>Qty Actual:</Secondary>
          </label>
          <FinishRunInput type="number" />
          <PrimaryBtnBlock type="submit">Finish Run</PrimaryBtnBlock>
        </form>
      </GridItem>
    </GridContainer>
  );
};

export default Header;
