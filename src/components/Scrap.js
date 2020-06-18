import React from "react";
import Data from "../data";
import Header from "../styledComponents/Header";
import ScrapForm from "../styledComponents/ScrapForm";
import ScrapTable from "../styledComponents/ScrapTable";

const Scrap = (props) => {
  let runData = Data.find(
    ({ work_order_id: id }) => id === props.match.params.slug
  );

  return (
    <React.Fragment>
      <Header data={runData} />
      <ScrapForm />
      <ScrapTable />
    </React.Fragment>
  );
};

export default Scrap;
