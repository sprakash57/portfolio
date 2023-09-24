import styled from '@emotion/styled';

export const IconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.8rem;
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

export const IconsListItem = styled.li`
  padding: 4px;
  background: ${({ theme }) => theme.colors.burntSienna};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.4);
    background: none;
  }
`;

export const Dot = styled.span`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 4px;
  background: ${({ theme }) => theme.colors.white};
`;

export const VerticalDivider = styled.span`
  font-weight: 600;
  display: inline-block;
  border-radius: 0.875rem;
  font-size: 24px;
  margin: 0 0.5rem;
  background: linear-gradient(to top, rgba(232, 107, 77, 1) 40%, rgba(227, 162, 100, 1) 100%);
  -webkit-text-fill-color: transparent;
`;

export const AnimateLink = styled.a`
  color: white;
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
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
