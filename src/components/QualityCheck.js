import React, { Component } from "react";
import Nav from "../styledComponents/withProps/Nav";
import { Container } from "../styledComponents/Container";

export class QualityCheck extends Component {
  state = {
    currentCheck: 1,
    currentStep: 1,
    inputValue: "",
    diameterChecks: [
      { checkNum: 1, values: [], average: 0 },
      { checkNum: 2, values: [], average: 0 },
      { checkNum: 3, values: [], average: 0 },
      { checkNum: 4, values: [], average: 0 },
      { checkNum: 5, values: [], average: 0 },
      { checkNum: 6, values: [], average: 0 },
      { checkNum: 7, values: [], average: 0 },
      { checkNum: 8, values: [], average: 0 },
      { checkNum: 9, values: [], average: 0 },
      { checkNum: 10, values: [], average: 0 },
    ],
  };
  runData = this.props.location.state.runData;
  slug = this.runData.work_order_id;
  diameterWholeNum = this.runData.material.split(" ")[2].slice(0, 2);

  formHandler = (e) => {
    e.preventDefault();
    const checksArrayCopy = [...this.state.diameterChecks];
    const currCheckIndex = this.state.currentCheck - 1;
    checksArrayCopy[currCheckIndex].values.push(this.state.inputValue);
    if (this.state.currentStep === 9) {
      const resetStep = 1;
      const nextCheck = this.state.currentCheck + 1;
      this.setState({
        diameterChecks: [...checksArrayCopy],
        currentStep: resetStep,
        currentCheck: nextCheck,
        inputValue: "",
      });
    } else {
      const nextStep = this.state.currentStep + 1;
      this.setState({
        diameterChecks: [...checksArrayCopy],
        currentStep: nextStep,
        inputValue: "",
      });
    }
  };
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Nav url={`/scrap/${this.slug}`} title="Scrap" />
        <Container>
          <h1>Quality Check {this.runData.material}</h1>
          <h3>
            Check #{this.state.currentCheck}: {this.state.currentStep} of 9
          </h3>
          <form onSubmit={this.formHandler}>
            <label>{this.diameterWholeNum}</label>
            <input
              type="number"
              onChange={this.inputHandler}
              value={this.state.inputValue}
            />
            <button type="submit">submit</button>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default QualityCheck;
