import Image from 'next/image';
import useSWR from 'swr';
import dompurify from 'dompurify';
import { SectionHeader, RouteLink, Loader, Icon } from '@/components/Elements';
import { fetcher } from '@/helpers/utils';
import styles from './index.module.scss';
import { Icons } from '@/helpers/constants';

const Contributions = ({ header, viewMoreBtn = false }: { header: string; viewMoreBtn?: boolean }) => {
  const { data, error } = useSWR('/api/contributions', fetcher);

  if (error) return <small className="alert mv4">Contributions are not available right now.</small>;

  if (!data?.contributions) return <Loader />;

  return (
    <section className="mv4">
      <SectionHeader title={header} icon="opensource" />
      <section className={styles.contributions}>
        {data.contributions.map((repo: Contribution) => {
          const { owner, name, descriptionHTML, languages, forkCount, stargazerCount, url } = repo;
          return (
            <RouteLink key={name} href={url} isExternal>
              <article className={styles.contributions__content} title="To the repo">
                <header>
                  <figure>
                    <Image
                      className={styles.contributions__avatar}
                      src={owner.avatarUrl}
                      alt="User Avatar"
                      height={35}
                      width={35}
                    />
                  </figure>
                  <h3 title="Author">{owner.login}</h3>
                  <figure className={styles.contributions__link} title={Icons.EXTLINK}>
                    <Icon name={Icons.EXTLINK} styles={styles.contributions__extlinkIcon} width="16" height="16" />
                  </figure>
                </header>
                <summary
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(descriptionHTML !== '<div></div>' ? descriptionHTML : '--'),
                  }}
                />
                <footer className={styles.contributions__footer}>
                  <div className={styles.contributions__languages}>
                    {languages.nodes.map(({ name, color }: Language) => (
                      <span
                        key={name}
                        className={styles.contributions__tag}
                        style={{ borderLeft: `12px solid ${color}` }}
                      >
                        {name}
                      </span>
                    )) || '--'}
                  </div>
                  <div className={styles.contributions__forkStar}>
                    <figure title={Icons.FORK}>
                      <Icon name={Icons.FORK} width="16" height="16" color="#626262" />
                      <span>{forkCount}</span>
                    </figure>
                    <figure title={Icons.STAR}>
                      <Icon name={Icons.STAR} width="16" height="16" />
                      <span>{stargazerCount}</span>
                    </figure>
                  </div>
                </footer>
              </article>
            </RouteLink>
          );
        })}
      </section>
      {viewMoreBtn && (
        <RouteLink
          href="https://github.com/sprakash57?tab=repositories&q=&type=fork&language=&sort="
          isExternal
          classForContainer="btn__viewMore"
        >
          View more
        </RouteLink>
      )}
    </section>
  );
};

export default Contributions;
