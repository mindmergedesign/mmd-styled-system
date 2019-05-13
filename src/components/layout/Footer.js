import React from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";

import Nav from "../elements/Nav";
import Container from "./Container";
import Logo from "../elements/Logo";
import { Text, Footnote } from "../elements/Typography";

const FooterWrap = styled(Box)`
  background-color: ${props => props.theme.colors.gray[900]};
  color: ${props => props.theme.colors.gray[500]};
  a {
    color: ${props => props.theme.colors.gray[500]};
  }
  .logo {
    width: 80px;
    opacity: 0.5;
  }
`;
const FooterCredits = styled(Box)`
  border-top: 1px solid ${props => props.theme.colors.gray[600]};
  text-align: center;
`;

const Footer = () => {
  const d = new Date();
  const n = d.getFullYear();

  return (
    <FooterWrap>
      <Container>
        <Flex flexWrap="wrap" justifyContent="space-between" py={12}>
          <Box width={{ xs: 1, sm: 1, md: 1 / 3, lg: 1 / 4 }}>
            <Logo />
            <Footnote>Contact Info</Footnote>
          </Box>
          <Box width={{ xs: 1, sm: 1, md: 2 / 3, lg: 3 / 4 }}>
            <Nav type="footer" />
          </Box>
        </Flex>
        <FooterCredits width={1} py={4}>
          <Footnote>&copy; {n} Copyright info</Footnote>
        </FooterCredits>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
