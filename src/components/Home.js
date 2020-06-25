import React, { Component } from "react";
import styled from "styled-components";
import { RunBtn } from "../styledComponents/Button";
import { Link } from "react-router-dom";
import { workOrders } from "../data";

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

const Home = () => {
  const workOrdersData = workOrders;

  const workOrdersJsx = workOrdersData.map(
    ({ work_order_id, line, material }) => {
      let urlSlug = `/scrap/${work_order_id}`;
      return (
        <Link key={work_order_id} to={urlSlug}>
          <RunBtn>
            <span>Line: {line}</span>
            <span>Material: {material}</span>
          </RunBtn>
        </Link>
      );
    }
  );

  return (
    <Container>
      <Title>Choose Run:</Title>
      {workOrdersJsx}
    </Container>
  );
};

export default Home;
