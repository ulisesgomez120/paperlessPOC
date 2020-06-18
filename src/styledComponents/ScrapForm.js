import React from "react";
import styled from "styled-components";
import { BaseInput, ScrapSmallInput } from "../styledComponents/Input";
import { PrimaryBtn } from "../styledComponents/Button";
const Container = styled.div`
  padding: 22px 30px;
`;
const FlexForm = styled.form`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`;
const FlexItem = styled.div`
  flex: 1 1 auto;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    flex-basis: 100%;
    justify-content: flex-end;
    padding: 12px;
    flex-direction: row;
  }
`;
const RadioContainer = styled.div`
  margin-bottom: 5px;
  align-self: start;
`;
const ScrapLable = styled.h3`
  margin-bottom: 11px;
  color: #597a98;
`;
const ScrapForm = () => {
  return (
    <Container>
      <h2>Scrap Log</h2>
      <FlexForm>
        <FlexItem>
          <ScrapLable>Type</ScrapLable>
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
          <ScrapLable>Spool #</ScrapLable>
          <ScrapSmallInput type="number" />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Reason</ScrapLable>
          <BaseInput type="text" />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Weight</ScrapLable>
          <ScrapSmallInput type="number" />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Operator</ScrapLable>
          <ScrapSmallInput type="text" />
        </FlexItem>
        <FlexItem>
          <PrimaryBtn className="large">Scrap Spool</PrimaryBtn>
        </FlexItem>
      </FlexForm>
    </Container>
  );
};

export default ScrapForm;
