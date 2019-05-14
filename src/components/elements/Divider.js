import styled from "styled-components";

const Divider = styled.hr`
  background: ${props => props.theme.colors.gray[200]};
  border: 0;
  height: 1px;
`;

export default Divider;
