import React, { Component } from "react";
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
class ScrapForm extends Component {
  render() {
    return (
      <Container>
        <h2>Scrap Log</h2>
        <FlexForm onSubmit={this.props.submit}>
          <FlexItem>
            <ScrapLable>Type</ScrapLable>
            <RadioContainer>
              <Radio
                type="radio"
                id="A"
                name="type"
                value="A"
                checked={this.props.selectedType === "A"}
                onChange={this.props.change}
              />
              <label htmlFor="A">A - Cause Clear/Actionable</label>
            </RadioContainer>
            <RadioContainer>
              <Radio
                type="radio"
                id="B"
                name="type"
                value="B"
                checked={this.props.selectedType === "B"}
                onChange={this.props.change}
              />
              <label htmlFor="B">B - Cause Clear/Not Actionable</label>
            </RadioContainer>
            <RadioContainer>
              <Radio
                type="radio"
                id="C"
                name="type"
                value="C"
                checked={this.props.selectedType === "C"}
                onChange={this.props.change}
              />
              <label htmlFor="C">C - Cause Unclear</label>
            </RadioContainer>
          </FlexItem>
          <FlexItem>
            <ScrapLable>Spool #</ScrapLable>
            <ScrapSmallInput
              type="number"
              name="spoolNum"
              onChange={this.props.change}
            />
          </FlexItem>
          <FlexItem>
            <ScrapLable>Reason</ScrapLable>
            <BaseInput type="text" name="reason" onChange={this.props.change} />
          </FlexItem>
          <FlexItem>
            <ScrapLable>Weight</ScrapLable>
            <ScrapSmallInput
              type="number"
              name="weight"
              onChange={this.props.change}
            />
          </FlexItem>
          <FlexItem>
            <ScrapLable>Operator</ScrapLable>
            <ScrapSmallInput
              type="text"
              name="operator"
              onChange={this.props.change}
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
  }
}

export default ScrapForm;
