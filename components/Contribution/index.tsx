import { RouteLink, Button, Tag, Loader } from '@/common-components';
import Image from 'next/image';
import useSWR from 'swr';
import dompurify from 'dompurify';
import ExtLink from '@/public/icons/external.svg';
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import fetcher from '@/helpers/fetcher';
import styles from './index.module.scss';
import SectionHeader from '../Elements/SectionHeader';
import { concatEllipsis } from '@/helpers/utils';

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
                  <figure className={styles.contributions__link}>
                    <Image
                      className={styles.contributions__extlinkIcon}
                      src={ExtLink}
                      alt="External Link"
                      height={16}
                      width={16}
                    />
                  </figure>
                </header>
                <summary
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(
                      descriptionHTML !== '<div></div>' ? concatEllipsis(descriptionHTML) : '--'
                    ),
                  }}
                />
                <footer className={styles.contributions__footer}>
                  <div className={styles.contributions__languages}>
                    {languages.nodes.map(({ name }: { name: string }) => <Tag key={name} label={name} />) || '--'}
                  </div>
                  <div className={styles.contributions__forkStar}>
                    <figure>
                      <Image src={Fork} alt="Fork" width={16} height={16} />
                      <span>{forkCount}</span>
                    </figure>
                    <figure>
                      <Image src={Star} alt="Star" width={16} height={16} />
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
        <Button
          as="link"
          href="https://github.com/sprakash57?tab=repositories&q=&type=fork&language=&sort="
          label="View more"
          external
        />
      )}
    </section>
  );
};

export default Contributions;
