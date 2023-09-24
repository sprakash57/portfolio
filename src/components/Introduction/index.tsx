import ProfilePhoto from 'assets/images/sunny.jpg';
import { Icons, Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import Icon from 'assets/icons/Icon';
import { Photo, PhotoContainer, NameTextField, BioTextField } from './styled';
import { IconsList, IconsListItem, Dot } from 'components/common/styled';

const Introduction = () => {
  return (
    <Layout scrollTo={Sections.Read}>
      <PhotoContainer>
        <Photo src={ProfilePhoto} alt='Profile photo' />
      </PhotoContainer>
      <NameTextField variant='H1'>Sunny Prakash</NameTextField>
      <BioTextField variant='S'>
        Coder <Dot /> Blogger <Dot /> Story teller
      </BioTextField>
      <IconsList>
        {[Icons.Linkedin, Icons.Medium, Icons.Github, Icons.Twitter].map(icon => (
          <IconsListItem key={icon}>
            <Icon name={icon} url={Urls[icon as keyof typeof Urls]} />
          </IconsListItem>
        ))}
      </IconsList>
    </Layout>
  );
};

export default Introduction;
