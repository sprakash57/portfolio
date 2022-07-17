import styled from 'styled-components';

export const Box = styled.p<{ bgColor: string; borderColor: string }>`
  padding: 0.5rem;
  margin: 2rem 0.5rem 2rem 0;
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  border-left: ${({ borderColor }) => `5px solid ${borderColor}`};
`;
