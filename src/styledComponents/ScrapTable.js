import React from "react";
import styled from "styled-components";

const data = [
  {
    type: "B",
    spoolNum: 1,
    reason: "Start up",
    weight: 2514,
    operator: "ug"
  },
  {
    type: "A",
    spoolNum: 0,
    reason: "Line break",
    weight: 1456,
    operator: "ug"
  },
  {
    type: "A",
    spoolNum: 3,
    reason: "Contamination",
    weight: 2532,
    operator: "ug"
  },
  {
    type: "A",
    spoolNum: 4,
    reason: "Contamination",
    weight: 2493,
    operator: "ug"
  }
];
const tableJsx = data.map(obj => {
  return (
    <tr>
      <td>{obj.type}</td>
      <td>{obj.spoolNum}</td>
      <td>{obj.reason}</td>
      <td>{obj.weight}</td>
      <td>{obj.operator}</td>
    </tr>
  );
});
const ScrapTable = props => {
  return <table>{tableJsx}</table>;
};

export default ScrapTable;
