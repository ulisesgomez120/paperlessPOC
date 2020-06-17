import React from "react";
import Data from "../data";
import Header from "../styledComponents/Header";
import ScrapForm from "../styledComponents/ScrapForm";

const Scrap = (props) => {
  let runData = Data.find(
    ({ work_order_id: id }) => id === props.match.params.slug
  );

  return (
    <React.Fragment>
      <Header data={runData} />
      <ScrapForm />
    </React.Fragment>
  );
};

export default Scrap;
