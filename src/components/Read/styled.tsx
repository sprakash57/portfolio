import styled from '@emotion/styled';
import { TextField } from 'components/common';

export const PostsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1rem;
  margin: 1rem 0;
  background-image: ${({ theme }) =>
    `linear-gradient(30deg, ${theme.colors.pastelRed} 60%, ${theme.colors.brownYellow} 100%)`};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
`;

export const PostTitle = styled(TextField)`
  max-width: 90%;
`;

export const FurtherPosts = styled.div`
  padding: 2rem 1rem 0 0;
  margin-left: -1.4rem;
  display: flex;
  place-items: center;
`;

export const FurtherPostTitle = styled(TextField)`
  margin: 0;
`;
