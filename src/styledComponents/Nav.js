import React from "react";
import styled from "styled-components";
import logo from "../assets/images/essentium.png";

const StyledNav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #000000;
  padding: 16px 32px;
`;
const Logo = styled.img`
  width: 125px;
`;

const Nav = () => {
  return (
    <StyledNav>
      {/* anchor tag for navigation to home page */}
      <Logo src={logo} />
    </StyledNav>
  );
};

export default Nav;
