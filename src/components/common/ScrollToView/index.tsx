import { Arrow } from 'assets/icons';
import { Container } from './styled';

const ScrollToView = ({ elementId }: { elementId: string }) => {
  const handleClick = () => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <Container role='button' onClick={handleClick} title='Next section'>
      <Arrow fill='#e86b4d' size='36' />
    </Container>
  );
};

export default ScrollToView;
