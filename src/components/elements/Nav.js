import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const NavItem = styled.li`
  font-family: ${props => props.theme.fonts.sans};
  list-style: none;
  padding: 0 0.5em;
  a {
    text-decoration: none;
  }
`;
const NavWrapper = styled(Flex)`
  /*Main Nav*/
  margin: 0;
  padding: 0;
  ${props =>
    props.type === "main" && "flex-direction: row; text-align: center; "}

  /*Footer Nav*/
  ${props =>
    props.type === "footer" &&
    "flex-direction: column; text-align: left; li a:a hrefmin-height: 40px; display: block};"}
`;

const Nav = props => (
  <NavWrapper as="ul" {...props}>
    <NavItem>
      <a href="#">Home</a>
    </NavItem>
    <NavItem>
      <a href="#">About</a>
    </NavItem>
    <NavItem>
      <a href="#">Contact</a>
    </NavItem>
  </NavWrapper>
);

export default Nav;
