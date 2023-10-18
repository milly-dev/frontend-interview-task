import styled from "styled-components";

export const Chip = styled.div`
  background-color: #c2f7e1;
  color: #006b57;
  border-radius: ${(props) => props.theme.space.xl};
  font-size: ${(props) => props.theme.typography.s.fontSize};
  font-weight: bold;
  padding:  ${(props) => props.theme.space.xs};
  padding-left:  ${(props) => props.theme.space.m};
  padding-right:  ${(props) => props.theme.space.m};
  border: none;
`;

