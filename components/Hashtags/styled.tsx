import styled from 'styled-components';

export const TagText = styled.span`
  padding: 3px;
  background: var(--tomato);
  border-radius: 5px;
  font-weight: 300;
  color: var(--white);
  margin-right: 0.5rem;
`;

export const TagsContainer = styled.section<{ inList?: boolean }>`
  display: inline-block;
  margin-bottom: ${({ inList }) => (inList ? '0' : '1rem')};
  ${TagText} {
    font-size: ${({ inList }) => (inList ? '0.6rem' : '0.8rem')};
  }
`;
