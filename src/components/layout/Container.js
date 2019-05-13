import styled from "styled-components";
import { Box } from "rebass";

const Container = styled(Box)`
  max-width: ${props => props.theme.breakpoints.lg};
`;

Container.defaultProps = {
  mx: "auto",
  px: "1em"
};

export default Container;
