import { Header, RouteLink } from '../common';
import GithubCard from './GithubCard';

const RepoList = ({ header, listStyle, repos }: { header: string, listStyle: string, repos: any[] }) => {
    return (
        <>
            <Header as="h2" label={header} />
            <section className={listStyle}>
                {repos.map(repo => (
                    <RouteLink key={repo.name} href={repo.parent ? repo.parent.url : repo.url} isExternal>
                        <GithubCard key={repo.name} activityDetail={repo} />
                    </RouteLink>
                ))}
            </section>
        </>
    )
}

export default RepoList;
