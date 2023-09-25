import { Icons, Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import { FindOutMoreText, ProjectItem, ProjectsList } from './styled';
import { TextField } from 'components/common';
import { IconsList, IconsListItem } from 'components/common/styled';
import Icon from 'assets/icons/Icon';

const projects = [
  {
    id: '1',
    url: 'https://expattravelfinds.com',
    title: 'Expat Travel Finds',
    image: 'Extraf.png',
  },
  {
    id: '2',
    url: 'https://sprakash57.github.io/create-react-saga',
    title: 'Create React Saga',
    image: 'crs.png',
  },
  {
    id: '3',
    url: 'https://discogspedia.netlify.app',
    title: 'Discogspedia',
    image: 'discogspedia.png',
  },
  {
    id: '4',
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
    title: 'Mealander',
    image: 'mealander.png',
  },
];

const Explore = () => {
  return (
    <Layout header={Sections.Explore} scrollTo={Sections.Watch}>
      <ProjectsList>
        {projects.map(({ id, url, title, image }) => (
          <ProjectItem key={id}>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <img src={require(`assets/images/${image}`)} alt={title} data-image={image} />
              <TextField variant='P2'>{title}</TextField>
            </a>
          </ProjectItem>
        ))}
      </ProjectsList>
      <FindOutMoreText variant='P2'>Find out more</FindOutMoreText>
      <IconsList>
        {[Icons.Github, Icons.Stackoverflow, Icons.Codewars, Icons.Playstore].map(icon => (
          <IconsListItem key={icon}>
            <Icon name={icon} url={Urls[icon as keyof typeof Urls]} />
          </IconsListItem>
        ))}
      </IconsList>
    </Layout>
  );
};

export default Explore;
