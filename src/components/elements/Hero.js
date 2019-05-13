import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Box } from "rebass";

import Container from "../layout/Container";
import { H1 } from "./Typography";

const HeroWrapper = styled(Box)`
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.colors.gray[400]};
  ${up("lg")} {
    color: hotpink;
  }
`;

const Hero = props => (
  <HeroWrapper {...props}>
    <Container>
      <H1>{props.title}</H1>
    </Container>
  </HeroWrapper>
);

export default Hero;
