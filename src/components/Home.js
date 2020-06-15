import React, { Component } from "react";
import styled from "styled-components";
import { RunBtn } from "../styledComponents/Button";
import Nav from "../styledComponents/Nav";

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;
  padding: 22px 16px;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 24px;
`;
export default class Home extends Component {
  state = {
    workOrders: [
      {
        workOrderId: "WO3105",
        material: "PACF 2.5kg 1.75mm",
        batchNumber: "2-200606",
        desired: 40,
        runDate: "06/06/20",
        line: "2",
      },
      {
        workOrderId: "WO3106",
        material: "PACF 2.5kg 2.85mm",
        batchNumber: "2-200606",
        desired: 40,
        runDate: "06/06/20",
        line: "2",
      },
    ],
  };

  workOrders = this.state.workOrders.map(({ workOrderId, line, material }) => {
    return (
      <RunBtn key={workOrderId}>
        <span>Line: {line}</span>
        <span>Material: {material}</span>
      </RunBtn>
    );
  });

  render() {
    return (
      <React.Fragment>
        <Nav></Nav>
        <Container>
          <Title>Choose Run:</Title>
          {this.workOrders}
        </Container>
      </React.Fragment>
    );
  }
}
