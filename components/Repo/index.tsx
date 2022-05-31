import { RouteLink, Button, Tag, Loader } from '@/common-components';
import Image from 'next/image';
import ExtLink from '@/public/icons/external.svg';
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';
import SectionHeader from '../Elements/SectionHeader';

const RepoList = ({ header, viewMoreBtn = false }: { header: string; viewMoreBtn?: boolean }) => {
  const { data, error } = useSWR('/api/repos', fetcher);

  if (error) return <div className="repos__alert">Failed to fetch GitHub Data!!</div>;

  if (!data?.repos) return <Loader />;

  return (
    <section className="mv4">
      <SectionHeader title={header} icon="star-white" />
      <section className="repos">
        {data.repos.map((repo: Repo) => {
          const { isPrivate, isFork, name, description, languages, forkCount, stargazerCount, url } = repo;
          return (
            <RouteLink key={name} href={url} isExternal>
              <article className="repos__content">
                <figure className="repos__extlink">
                  <Image className="repos__extlinkIcon" src={ExtLink} alt="External Link" height={16} width={16} />
                </figure>
                <header>
                  <h3>{name}</h3>
                  {isPrivate && <Tag label="private" variant="outline" />}
                  {isFork && <Tag label="forked" variant="outline" />}
                </header>
                <summary>{description || '--'}</summary>
                <footer>
                  <section className="repos__stats">
                    <figure>
                      <Image src={Fork} alt="Fork" width={12} height={12} />
                      <small>{forkCount}</small>
                    </figure>
                    <figure>
                      <Image src={Star} alt="Star" width={12} height={12} />
                      <small>{stargazerCount}</small>
                    </figure>
                  </section>
                  <section className="repos__tags">
                    {languages.nodes.map(({ name }: { name: string }) => <Tag key={name} label={name} />) || '--'}
                  </section>
                </footer>
              </article>
            </RouteLink>
          );
        })}
      </section>
      {viewMoreBtn && (
        <Button as="link" href="https://github.com/sprakash57?tab=repositories" label="All GitHub repos" external />
      )}
    </section>
  );
};

export default RepoList;
