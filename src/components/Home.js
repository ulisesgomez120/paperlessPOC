import React from "react";
import styled from "styled-components";
import { RunBtn } from "../styledComponents/Button";
import { Link } from "react-router-dom";
import { workOrders } from "../data";
import Nav from "../styledComponents/withProps/Nav";
import { Container } from "../styledComponents/Container";

const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 24px;
`;
const InBtnSpan = styled.span`
  @media (max-width: 520px) {
    margin-bottom: 12px;
  }
`;
const Home = () => {
  const workOrdersData = workOrders;

  const workOrdersJsx = workOrdersData.map(
    ({ work_order_id, line, material }) => {
      let urlSlug = `/scrap/${work_order_id}`;
      return (
        <Link key={work_order_id} to={urlSlug}>
          <RunBtn>
            <InBtnSpan>Line: {line}</InBtnSpan>
            <span>Material: {material}</span>
          </RunBtn>
        </Link>
      );
    }
  );

  return (
    <React.Fragment>
      <Nav />
      <Container>
        <Title>Choose Run:</Title>
        {workOrdersJsx}
      </Container>
    </React.Fragment>
  );
};

export default Home;
