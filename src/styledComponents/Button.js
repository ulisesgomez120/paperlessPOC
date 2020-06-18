import styled from "styled-components";

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 6px 18px;
  color: #000000;
  cursor: pointer;
`;
export const PrimaryBtn = styled(Button)`
  background-color: #00407b;
  color: #ffffff;
  border: none;
  &.large {
    font-size: 20px;
    padding: 9px 38px;
  }
`;
export const RunBtn = styled(PrimaryBtn)`
  width: 95%;
  padding: 16px 28px;
  margin: 0 auto 16px;
  font-size: 19px;
  display: flex;
  justify-content: space-between;
`;
export const PrimaryBtnBlock = styled(PrimaryBtn)`
  display: block;
`;
