import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDivider = styled.hr`
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => `linear-gradient(66deg, ${theme.colors.pastelRed} 40%, ${theme.colors.brownYellow} 100%)`};
  height: 4px;
  width: 100%;
  box-shadow: ${({ theme }) => `0px 0px 20px 0px ${theme.colors.black50}`};
  margin: 2rem 0;
`;

export const ContainerHeader = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: ${({ theme }) => `6px 6px 20px ${theme.colors.black50}`};
`;
