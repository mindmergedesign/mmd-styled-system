import styled from "styled-components";
import { Box } from "rebass";
import { up } from "styled-breakpoints";

const Section = styled(Box)`
  padding: ${props => props.theme.space[10]}px 0;
  ${up("lg")} {
    padding: ${props => props.theme.space[12]}px 0;
  }
`;

export default Section;
