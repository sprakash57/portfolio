import Icon from 'assets/icons/Icon';
import { Icons } from 'helpers/constants';
import theme from 'theme/index';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 56px;
  width: 56px;
  background: #363942;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 4rem 0 2rem;
  box-shadow:
    3px 3px 4px 1px rgb(24 24 24),
    -1px 0px 3px 0px rgb(232 107 77);
  cursor: pointer;
`;

const ScrollToView = ({ elementId }: { elementId: string }) => {
  const handleClick = () => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <Container role='button' onClick={handleClick} title='Next section'>
      <Icon name={Icons.Arrow} size='36' fill={theme.colors.burntSienna} />
    </Container>
  );
};

export default ScrollToView;
