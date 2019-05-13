import styled from "styled-components";
import { Button as BaseButton } from "rebass";

const Button = styled(BaseButton)`
  border-radius: 0.25em;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.sans};
`;

Button.defaultProps = {
  bg: "primary.5",
  borderColor: "transparent",
  border: "2px solid",
  color: "white",
  px: "1.75em",
  py: "0.75em"
};

export default Button;
