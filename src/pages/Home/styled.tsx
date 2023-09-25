import styled from '@emotion/styled';
import viewport from 'theme/viewport';

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
`;

export const HomeWrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  background-color: #363942;
  box-shadow: 8px 8px 20px 2px #4a3838;
  transition:
    opacity 0.625s ease 0s,
    transform 0.625s ease 0s;
  color: white;
  padding: 3rem 3rem 1rem;
  border-radius: 0.875rem;

  @media ${viewport.mobileS} {
    padding: 2rem;
    margin-top: 2rem;
  }
`;

export const HomeInner = styled.div`
  width: 29rem;
  max-width: 100%;
  @media ${viewport.mobileS} {
    padding-top: 4rem;
  }
`;
