//stateful
//form
//currentCheck
//currentCheckOf9
//link to here
import React, { Component } from "react";
import Nav from "../styledComponents/withProps/Nav";
import { Container } from "../styledComponents/Container";

export class QualityCheck extends Component {
  state = {
    diameterCheckInput: 0,
    currentCheck: 1,
    currentStep: 1,
    diameterChecks: {
      check1: {},
    },
  };
  runData = this.props.location.state.runData;
  slug = this.runData.work_order_id;
  diameterWholeNum = this.runData.material.split(" ")[2].slice(0, 2);

  render() {
    return (
      <React.Fragment>
        <Nav url={`/scrap/${this.slug}`} title="Scrap" />
        <Container>
          <h1>Quality Check {this.runData.material}</h1>
          <form>
            <label>Diameter: {this.diameterWholeNum}</label>
            <input type="number" />
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default QualityCheck;
