import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 22px 30px;
`;
const FlexForm = styled.form`
  display: flex;
  margin-top: 16px;
`;
const FlexItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
  padding: 0 5px;
`;
const RadioContainer = styled.div`
  margin: 5px 0;
`;
const ScrapForm = () => {
  return (
    <Container>
      <h2>Scrap Log</h2>
      <FlexForm>
        <FlexItem>
          <h3>Type</h3>
          <RadioContainer>
            <input type="radio" id="A" name="type" value="A" checked />
            <label for="A">A - Cause Clear/Actionable</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="B" name="type" value="B" />
            <label for="B">B - Cause Clear/Not Actionable</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="C" name="type" value="C" />
            <label for="C">C - Cause Unclear</label>
          </RadioContainer>
        </FlexItem>
        <FlexItem>
          <h3>Spool #</h3>
          <input type="number" />
        </FlexItem>
        <FlexItem>
          <h3>Reason</h3>
          <input type="text" />
        </FlexItem>
        <FlexItem>
          <h3>Weight</h3>
          <input type="number" />
        </FlexItem>
        <FlexItem>
          <h3>Operator</h3>
          <input type="text" />
        </FlexItem>
      </FlexForm>
    </Container>
  );
};

export default ScrapForm;
