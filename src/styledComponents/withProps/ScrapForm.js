import React from "react";
import styled from "styled-components";
import { BaseInput, ScrapSmallInput, Radio } from "../Input";
import { PrimaryBtn } from "../Button";
const Container = styled.div`
  padding: 22px 30px;
`;
const FlexForm = styled.form`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (max-width: 520px) {
    display: initial;
  }
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
  @media (max-width: 520px) {
    margin-top: 12px;
    :last-child {
      justify-content: center;
    }
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
const ScrapForm = (props) => {
  return (
    <Container>
      <h2>Scrap Log</h2>
      <FlexForm onSubmit={props.submit}>
        <FlexItem>
          <ScrapLable>Type</ScrapLable>
          <RadioContainer>
            <Radio
              type="radio"
              id="A"
              name="type"
              value="A"
              checked={props.formData.selectedType === "A"}
              onChange={props.change}
            />
            <label htmlFor="A">A - Cause Clear/Actionable</label>
          </RadioContainer>
          <RadioContainer>
            <Radio
              type="radio"
              id="B"
              name="type"
              value="B"
              checked={props.formData.selectedType === "B"}
              onChange={props.change}
            />
            <label htmlFor="B">B - Cause Clear/Not Actionable</label>
          </RadioContainer>
          <RadioContainer>
            <Radio
              type="radio"
              id="C"
              name="type"
              value="C"
              checked={props.formData.selectedType === "C"}
              onChange={props.change}
            />
            <label htmlFor="C">C - Cause Unclear</label>
          </RadioContainer>
        </FlexItem>
        <FlexItem>
          <ScrapLable>Spool #</ScrapLable>
          <ScrapSmallInput
            type="number"
            name="spoolNum"
            onChange={props.change}
            value={props.formData.spoolNum}
          />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Reason</ScrapLable>
          <BaseInput
            type="text"
            name="reason"
            onChange={props.change}
            value={props.formData.reason}
          />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Weight</ScrapLable>
          <ScrapSmallInput
            type="number"
            name="weight"
            onChange={props.change}
            value={props.formData.weight}
          />
        </FlexItem>
        <FlexItem>
          <ScrapLable>Operator</ScrapLable>
          <ScrapSmallInput
            type="text"
            name="operator"
            onChange={props.change}
            value={props.formData.operator}
          />
        </FlexItem>
        <FlexItem>
          <PrimaryBtn className="large" type="submit">
            Scrap Spool
          </PrimaryBtn>
        </FlexItem>
      </FlexForm>
    </Container>
  );
};

export default ScrapForm;
