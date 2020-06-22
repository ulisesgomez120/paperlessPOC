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
    type: "B",
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
const Table = styled.div`
  padding: 22px 30px;
  width: 100%;
`;
const Td = styled.div`
  font-size: 18px;
  text-align: center;
  flex-basis: 20%;
`;
const Tr = styled.div`
  display: flex;
  padding: 17px 0;
  border: 1px solid #c4c4c4;
  margin-bottom: 12px;
`;
const TdReason = styled(Td)`
  flex-basis: 35%;
`;
const tableJsx = data.map(obj => {
  return (
    <Tr>
      <Td>{obj.type}</Td>
      <Td>{obj.spoolNum === 0 ? "--" : obj.spoolNum}</Td>
      <TdReason>{obj.reason}</TdReason>
      <Td>{obj.weight}</Td>
      <Td>{obj.operator}</Td>
    </Tr>
  );
});
const ScrapTable = props => {
  return <Table>{tableJsx}</Table>;
};

export default ScrapTable;
