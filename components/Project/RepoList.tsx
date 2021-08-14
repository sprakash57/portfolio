import { Header, RouteLink } from '../common';
import GithubCard from './GithubCard';
import styles from '@/styles/components/Project/RepoList.module.scss';
import Button from '../common/Button';

const RepoList = ({ header, viewMoreBtn = false, repos }: { header: string, viewMoreBtn?: boolean, repos: any[] }) => {
    if (!repos?.length) return null;
    return (
        <section className="mb2">
            <Header as="h2" label={header} />
            <section className={styles.githubRepos}>
                {repos.map(repo => (
                    <RouteLink key={repo.name} href={repo.parent ? repo.parent.url : repo.url} isExternal>
                        <GithubCard key={repo.name} activityDetail={repo} />
                    </RouteLink>
                ))}
            </section>
            {viewMoreBtn && <Button
                as="link"
                href="https://github.com/sprakash57?tab=repositories"
                label="View more"
                external
            />}
        </section>
    )
}

export default RepoList;
