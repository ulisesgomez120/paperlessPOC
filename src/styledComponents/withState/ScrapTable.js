import React from "react";
import styled from "styled-components";

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

const ScrapTable = (props) => {
  const tableJsx = props.tableData.map((obj) => {
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

  return <Table>{tableJsx}</Table>;
};

export default ScrapTable;
