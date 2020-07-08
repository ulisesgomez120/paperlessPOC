import React from "react";
import styled from "styled-components";

const Table = styled.div`
  padding: 22px 30px;
  width: 100%;
`;
const Tr = styled.div`
  display: flex;
  padding: 17px 0;
  border: 1px solid #c4c4c4;
  margin-bottom: 12px;
`;
const Td = styled.div`
  font-size: 18px;
  text-align: center;
  flex-basis: 25%;
`;
const TdReason = styled(Td)`
  flex-basis: 35%;
`;
const TrQuality = styled(Tr)`
  padding: 0;
`;
const TdQuality = styled(Td)`
  border-right: 1px solid #c4c4c4;
  padding: 17px;
  &:nth-child(9) {
    border: none;
  }
`;

export const ScrapTable = (props) => {
  const tableJsx = props.data.map((obj) => {
    return (
      <Tr>
        <Td>{obj.selectedType}</Td>
        <Td>{obj.spoolNum === 0 ? "--" : obj.spoolNum}</Td>
        <TdReason>{obj.reason}</TdReason>
        <Td>{obj.weight}</Td>
        <Td>{obj.operator}</Td>
      </Tr>
    );
  });

  return <Table>{tableJsx}</Table>;
};
export const QualityTable = (props) => {
  const tableJsx = props.data.map((obj) => {
    let tdJsx;
    if (obj.values.length > 0) {
      tdJsx = obj.values.map((val) => <TdQuality>{val}</TdQuality>);
    }
    return <TrQuality>{tdJsx}</TrQuality>;
  });
  return <Table>{tableJsx}</Table>;
};
