import { RouteLink, Button } from '@/common-components';
import Image from 'next/image';
import ExtLink from '@/public/icons/external.svg';
import SectionHeader from '../Elements/SectionHeader';
import { capitalize } from '@/helpers/utils';

const newProj = [
  {
    id: 1,
    title: 'Mealander',
    summary: 'Calendar that is specially made for your meal plans. It also generate plans for you in one click.',
    image: 'https://i.ibb.co/1RB3gM8/Mealander-800.png',
    thumbnail: 'https://i.ibb.co/p4Ng7QJ/Mealander-800.png',
    platform: 'android',
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
  },
  {
    id: 2,
    title: 'Create React Saga',
    summary: 'A CLI tool to quickly setup your next Redux-Saga in React ecosystem backed by Webpack.',
    image: 'https://i.ibb.co/FK5Z23f/wrs.png',
    thumbnail: 'https://i.ibb.co/zrX9pxL/wrs.png',
    platform: 'npm-color',
    url: 'https://sprakash57.github.io/create-react-saga',
  },
  {
    id: 3,
    title: 'Ecslate',
    summary:
      'Why open web browser and confiscate all your data online, when you can execute code snippets, compare files and format them offline on your PC.',
    image: 'https://i.ibb.co/zQPPtRc/ecslate.png',
    thumbnail: 'https://i.ibb.co/PF11Vhp/ecslate.png',
    platform: 'windows',
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
  },
  {
    id: 4,
    title: 'Discogspedia',
    summary:
      'Modern search tool to find music releases published over Discogs website. Oh! Did I tell you it has clutter-free and clean UI. 🧹',
    image: 'https://i.ibb.co/Jc9CQN9/discogspedia.png',
    thumbnail: 'https://i.ibb.co/VLs3mds/discogspedia.png',
    platform: 'chrome',
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
  },
  {
    id: 5,
    title: 'Connect 3',
    summary: 'Play old classis tic tac toe on your android. Play against your friend or challange your smartphone 😉',
    image: 'https://i.ibb.co/8jJ53rd/logo.png',
    thumbnail: 'https://i.ibb.co/gDGT1SP/logo.png',
    platform: 'android',
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
  },
];

const ProjectsList = ({
  projects,
  header,
  viewMoreBtn = false,
}: {
  projects: Project[];
  header: string;
  viewMoreBtn?: boolean;
}) => {
  return (
    <section style={{ margin: '2rem 0' }}>
      <SectionHeader title={header} icon="project" />
      <article className="featured">
        {newProj.map((project) => {
          const { title, summary, url, image, platform, thumbnail } = project;
          return (
            <RouteLink key={title} href={url!} isExternal>
              <article className="featured_content" title="Click to know more">
                <figure className="featured_link">
                  <Image className="extLink" src={ExtLink} alt="External Link" width={16} height={16} />
                </figure>
                <figure className="featured_figure">
                  <Image
                    src={image}
                    alt={title}
                    placeholder="blur"
                    blurDataURL={thumbnail}
                    width={140}
                    height={140}
                    style={{ borderRadius: '50%' }}
                  />
                </figure>
                <h3 style={{ textAlign: 'center' }}>{title}</h3>
                <summary>{summary}</summary>
                <figure className="platform_icon">
                  <Image
                    src={require(`../../public/icons/${platform}.svg`)}
                    alt="icon"
                    height={24}
                    width={24}
                    title={capitalize(platform)}
                  />
                </figure>
              </article>
            </RouteLink>
          );
        })}
      </article>
      {viewMoreBtn && <Button as="link" href="/projects" label="View more" />}
    </section>
  );
};

export default ProjectsList;
