import styled from "styled-components";
import { Heading as StyledHeading, Text as StyledText } from "rebass";
import { up } from "styled-breakpoints";

// Headings
export const Heading = styled(StyledHeading)`
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.snug};
`;
export const H1 = styled(Heading).attrs(props => ({
  as: props.as || "h1"
}))`
  font-size: ${props => props.theme.fontSizes[7]}px;
  ${up("md")} {
    font-size: ${props => props.theme.fontSizes[8]}px;
  }
  ${up("xl")} {
    font-size: ${props => props.theme.fontSizes[9]}px;
  }
`;
export const H2 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[6]}px;
  ${up("md")} {
    font-size: ${props => props.theme.fontSizes[7]}px;
  }
  ${up("xl")} {
    font-size: ${props => props.theme.fontSizes[8]}px;
  }
`;
export const H3 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[4]}px;

  ${up("md")} {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
  ${up("xl")} {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;
export const H4 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[3]}px;
  ${up("md")} {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
  ${up("xl")} {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;

// Text Styles
export const Text = styled(StyledText)`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.lineHeights.normal};
  margin: 0 0 1em 0;
  ${up("lg")} {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;
export const Lead = styled(Text)`
  font-size: ${props => props.theme.fontSizes[4]}px;
  ${up("lg")} {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;
export const Footnote = styled(Text)`
  font-size: ${props => props.theme.fontSizes[2]}px;
`;
