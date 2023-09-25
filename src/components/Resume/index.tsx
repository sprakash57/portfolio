import Icon from 'assets/icons/Icon';
import { Icons } from 'helpers/constants';
import theme from 'theme/index';
import { Container, ContainerIcon } from './styled';

const Resume = () => {
  return (
    <Container>
      <ContainerIcon title='Resume' id='download_resume'>
        <Icon name={Icons.Download} url={require('assets/Sunny_Prakash.pdf')} type='application/pdf' />
      </ContainerIcon>
      <svg viewBox='0 0 8 8'>
        <polygon points='0,8 8,0 8,8' fill={theme.colors.pastelRed} />
      </svg>
    </Container>
  );
};

export default Resume;