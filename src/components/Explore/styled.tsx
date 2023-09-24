import styled from '@emotion/styled';
import { TextField } from 'components/common';
import viewport from 'theme/viewport';

export const ProjectsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${viewport.mobileS} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectItem = styled.li`
  margin: 2rem 0;
  text-align: center;
  border-radius: 0.875rem;
  background-color: #363942;
  box-shadow:
    3px 3px 4px 1px rgb(24 24 24),
    -1px 0px 3px 0px rgb(232 107 77);
  transition: all 0.2s ease-in-out;
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 220px;
    height: 240px;
    text-decoration: none;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.white};
    @media ${viewport.mobileS} {
      width: 260px;
    }
  }
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    &[data-image='crs.png'] {
      background: ${({ theme }) => theme.colors.pastelRed};
    }
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const FindOutMoreText = styled(TextField)`
  font-size: 1.2rem;
  margin: 1rem auto;
  width: fit-content;
  text-align: center;
  position: relative;
  transition: all 0.4s ease-in-out;
  text-shadow: ${({ theme }) => `6px 6px 20px ${theme.colors.black50}`};
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(232, 107, 77, 1);
    transform-origin: bottom right;
    transition: transform 0.2s ease-out;
    transform: scaleX(0);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
