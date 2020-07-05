import React from "react";
import styled from "styled-components";
import logo from "../assets/images/essentium.png";
import { Link } from "react-router-dom";
const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #000000;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 115px;
`;
const CenterNavContainer = styled.div`
  a {
    color: rgb(219, 219, 219);
    letter-spacing: 1px;
    font-size: 17px;
    :hover {
      color: white;
    }
  }
`;

const Nav = (props) => {
  let LinksRjx;
  if (props.url) {
    LinksRjx = (
      <CenterNavContainer>
        <Link to={props.url}>{props.title}</Link>
      </CenterNavContainer>
    );
  }
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </div>
      {LinksRjx ? LinksRjx : null}
    </StyledNav>
  );
};

export default Nav;
