import Image from 'next/image';
import { SectionHeader, RouteLink, Icon } from '@/components/Elements';
import styles from './index.module.scss';
import { Alerts, Icons } from '@/helpers/constants';
import NoData from '@/components/NoData';

interface Props {
  projects: Project[];
  header: string;
  viewMoreBtn?: boolean;
}

const ProjectsList = ({ projects, header, viewMoreBtn = false }: Props) => {
  const hasProjects = projects && projects.length > 0;

  if (!hasProjects && viewMoreBtn) return null;

  return (
    <section className={viewMoreBtn ? 'mv4' : 'mv2'}>
      <SectionHeader title={header} icon="project" />
      {hasProjects ? (
        <>
          <section className={styles.project}>
            {projects.map((project) => {
              const { title, summary, url, image, platforms, thumbnail } = project;
              return (
                <RouteLink key={title} href={url!} isExternal>
                  <article className={styles.project__content} title="Click to know more">
                    <div className={styles.project__header}>
                      <div className={styles.project__platforms}>
                        {platforms.map((platform, i) => (
                          <figure key={`${platform}-${i}`} title={platform}>
                            <Icon name={platform} width="20" height="20" />
                          </figure>
                        ))}
                      </div>
                      <figure className={styles.project__link} title={Icons.EXTLINK}>
                        <Icon name={Icons.EXTLINK} styles={styles.project__extlinkIcon} width="16" height="16" />
                      </figure>
                    </div>
                    <div className={styles.project__body}>
                      <figure className={styles.project__figure}>
                        <Image
                          src={image}
                          alt={title}
                          placeholder="blur"
                          blurDataURL={thumbnail}
                          width={120}
                          height={120}
                          style={{ borderRadius: '50%' }}
                        />
                      </figure>
                      <h3 style={{ textAlign: 'center' }}>{title}</h3>
                      <summary className={styles.project__summary}>{summary}</summary>
                    </div>
                  </article>
                </RouteLink>
              );
            })}
          </section>
          {viewMoreBtn && (
            <RouteLink href="/projects" classForContainer="btn__viewMore" role="button">
              View more
            </RouteLink>
          )}
        </>
      ) : (
        <NoData message="Projects are not available right now." type={Alerts.DANGER} />
      )}
    </section>
  );
};

export default ProjectsList;
