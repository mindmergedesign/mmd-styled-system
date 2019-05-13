import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";

import Nav from "../elements/Nav";
import Logo from "../elements/Logo";
import Container from "./Container";

const NavBar = styled(Box)`
  background-color: ${props => props.theme.colors.gray[200]};
  .logo {
    display: block;
    width: 90px;
    padding: 0.5em 0;
  }
`;

const Header = props => {
  const [state, setState] = useState(true);

  function toggle() {
    state ? setState(false) : setState(true);
  }

  return (
    <Box id="header">
      <NavBar>
        <Container>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box justifyContent="center">
              <a href="#" aria-label="Logo">
                <Logo />
              </a>
            </Box>
            <Box>
              <Nav type="main" />
            </Box>
          </Flex>
        </Container>
      </NavBar>
    </Box>
  );
};

export default Header;
