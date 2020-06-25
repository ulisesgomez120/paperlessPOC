import React from "react";
import styled from "styled-components";
import logo from "../assets/images/essentium.png";
import { Link } from "react-router-dom";
const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #000000;
  padding: 16px 32px;
`;
const Logo = styled.img`
  width: 115px;
`;

const Nav = () => {
  return (
    <StyledNav>
      {/* anchor tag for navigation to home page */}
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </StyledNav>
  );
};

export default Nav;
