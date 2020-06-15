import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 6px 18px;
  color: #000000;

  ${(props) => {
    console.log(props);
    props.home &&
      props.disabled &&
      css`
        background-color: rgba(196, 196, 196, 0.3);
        border: none;
      `;
  }}
`;
export const PrimaryBtn = styled(Button)`
  background-color: #00407b;
  color: #ffffff;
  border: none;
  margin-right: 14px;
`;
