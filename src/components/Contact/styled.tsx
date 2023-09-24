import styled from '@emotion/styled';
import { TextField } from 'components/common';
import { IconsList } from 'components/common/styled';
import viewport from 'theme/viewport';

export const ContactText = styled(TextField)`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.text.fontWeight.normal};
`;

export const ContactEmail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  width: fit-content;
  height: 60px;
  border-radius: 0.875rem;
  box-shadow: ${({ theme }) => `3px 3px 4px 1px ${theme.colors.black50}, -1px 0px 3px 0px ${theme.colors.burntSienna}`};
`;

export const ContactEmailText = styled(TextField)`
  letter-spacing: 2px;
  padding: 0 0.25rem 0 1rem;
  color: ${({ theme }) => theme.colors.brownYellow};
`;

export const ContactIconsList = styled(IconsList)`
  @media ${viewport} {
    gap: 1.4rem;
  }
`;

export const ContactEmailClip = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem 0 0.25rem;
  height: 100%;
  border-top-right-radius: 0.875rem;
  border-bottom-right-radius: 0.875rem;
  box-shadow: none;
  transition: box-shadow 0.4s ease;

  &:hover {
    cursor: pointer;
    > svg > path {
      fill: ${({ theme }) => theme.colors.brownYellow};
      transition: all 0.2s ease-in-out;
    }
  }

  &:active {
    box-shadow: ${({ theme }) => `inset 6px 6px 4px 0px ${theme.colors.black50}`};
  }
`;

export const SuccessPopoverText = styled.span`
  position: absolute;
  right: -1.5rem;
  border-radius: 0.875rem;
  top: -1.2rem;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.burntSienna};
`;
