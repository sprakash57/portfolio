import styled from 'styled-components';

export const BtnContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--arsenic);
  width: 66px;
  height: 66px;
  justify-content: center;
  border-radius: 50%;
  color: white;
  position: fixed;
  right: 18px;
  bottom: 90px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 40%) 0px 4px 8px;
  span:first-child {
    font-size: 1.5rem;
  }
`;
