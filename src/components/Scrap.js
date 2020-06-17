import React from "react";
import Data from "../data";
import Header from "../styledComponents/Header";

const Scrap = (props) => {
  let runData = Data.find(
    ({ work_order_id: id }) => id === props.match.params.slug
  );

  return <Header data={runData} />;
};

export default Scrap;
