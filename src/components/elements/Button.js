import styled from "styled-components";
import { Button as BaseButton } from "rebass";

const Button = styled(BaseButton)`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 1.5;
  border-radius: ${props => props.theme.radii.default};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

Button.defaultProps = {
  bg: "primary.5",
  borderColor: "transparent",
  border: "2px solid",
  color: "white",
  px: "1.5em",
  py: "0.5em"
};

Button.displayName = "Button";

export default Button;
