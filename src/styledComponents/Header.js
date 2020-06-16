import styled from "styled-components";
import React from "react";

const GridContainer = styled.header`
  background-color: #c4c4c4;
  display: grid;
  width: 100%;
  padding: 22px 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const GridItemAlignRight = styled(GridItem)`
  align-items: flex-end;
`;

const Header = (props) => {
  return (
    <GridContainer>
      <GridItem>hello</GridItem>
      <GridItemAlignRight>Goodbye</GridItemAlignRight>
      <form>
        <input type="number"></input>
        <button>sub</button>
      </form>
    </GridContainer>
  );
};

export default Header;
