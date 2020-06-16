import React, { Component } from "react";
import styled from "styled-components";
import { RunBtn } from "../styledComponents/Button";

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;
  padding: 22px 16px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 24px;
`;
export default class Home extends Component {
  state = {
    workOrders: [
      {
        work_order_id: "WO3105",
        material: "PACF 2.5kg 1.75mm",
        batch_number: "2-200606",
        qty_desired: 40,
        run_date: "06/06/20",
        line: "2",
        qty_actual: 0,
        date_created: "06/05/20",
        time_start: "07:23:34",
        time_finish: "14:04:43",
      },
      {
        work_order_id: "WO3106",
        material: "PACF 2.5kg 2.85mm",
        batch_number: "2-200606",
        qty_desired: 40,
        run_date: "06/06/20",
        line: "2",
        qty_actual: 0,
        date_created: "06/05/20",
        time_start: "07:23:34",
        time_finish: "14:04:43",
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
        <Container>
          <Title>Choose Run:</Title>
          {this.workOrders}
        </Container>
      </React.Fragment>
    );
  }
}
