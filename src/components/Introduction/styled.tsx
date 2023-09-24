import styled from '@emotion/styled';
import { TextField } from 'components/common';

export const PhotoContainer = styled.figure`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  border: ${({ theme }) => `4px solid ${theme.colors.burntSienna}`};
`;

export const Photo = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  filter: grayscale(0.9);
  &:hover {
    filter: grayscale(0);
  }
`;

export const NameTextField = styled(TextField)`
  margin-top: 2.8rem;
  text-shadow: ${({ theme }) => `6px 6px 20px ${theme.colors.black50}`};
  text-align: center;
`;

export const BioTextField = styled(TextField)`
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.earthYellow};
  margin: 1rem 0 2rem;
`;
