import styled from "styled-components";
import { Card as StyledCard } from "rebass";

const Card = styled(StyledCard)`
  font-family: ${props => props.theme.fonts.sans};
`;

Card.displayName = "Card";

export default Card;
