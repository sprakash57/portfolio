import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  transform: rotate(-90deg);
  cursor: pointer;

  svg {
    border-bottom-right-radius: 0.875rem;
  }
`;

export const ContainerIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 2px;
  right: 8px;
  transform: rotate(90deg);
  p {
    margin: 0;
  }
`;
