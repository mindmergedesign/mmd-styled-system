import React from "react";
import { Link as LinkStyled } from "rebass";

const LinkExt = props => (
  <LinkStyled
    href={props.to}
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  />
);

export default LinkExt;
