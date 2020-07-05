//stateful
//form
//currentCheck
//currentCheckOf9
//link to here
import React, { Component } from "react";
import Nav from "../styledComponents/Nav";

export class QualityCheck extends Component {
  state = {
    diameterCheckInput: 0,
    currentCheck: 1,
    currentStep: 1,
    diameterChecks: {
      check1: {},
    },
  };

  render() {
    const slug = this.props.location.state.runData.work_order_id;
    return (
      <React.Fragment>
        <Nav
          url={{
            pathname: `/scrap/${slug}`,
            state: {
              runData: this.runData,
            },
          }}
          title="Scrap"
        />
      </React.Fragment>
    );
  }
}

export default QualityCheck;
