import { RouteLink, Button } from '@/common-components';
import Image from 'next/image';
import ExtLink from '@/public/icons/external.svg';
import SectionHeader from '../Elements/SectionHeader';
import { capitalize } from '@/helpers/utils';

interface Props {
  projects: Project[];
  header: string;
  viewMoreBtn?: boolean;
}

const ProjectsList = ({ projects, header, viewMoreBtn = false }: Props) => {
  const hasProjects = projects && projects.length > 0;

  if (!hasProjects && viewMoreBtn) return null;

  if (!hasProjects) return <small className="alert mv4">Projects are not available right now.</small>;

  return (
    <section className="mv4">
      <SectionHeader title={header} icon="project" />
      <section className="featured">
        {projects.map((project) => {
          const { title, summary, url, image, platforms, thumbnail } = project;
          return (
            <RouteLink key={title} href={url!} isExternal>
              <article className="featured__content" title="Click to know more">
                <figure className="featured__link">
                  <Image className="featured__extlinkIcon" src={ExtLink} alt="External Link" width={16} height={16} />
                </figure>
                <figure className="featured__figure">
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
                <footer className="featured__platforms">
                  {platforms.map((platform, i) => (
                    <figure key={`${platform}-${i}`}>
                      <Image
                        src={require(`../../public/icons/${platform}.svg`)}
                        alt="icon"
                        height={24}
                        width={24}
                        title={capitalize(platform)}
                      />
                    </figure>
                  ))}
                </footer>
              </article>
            </RouteLink>
          );
        })}
      </section>
      {viewMoreBtn && <Button as="link" href="/projects" label="View more" />}
    </section>
  );
};

export default ProjectsList;
