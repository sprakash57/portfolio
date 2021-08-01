import { Header, RouteLink } from '@/common/index';
import BlogCard from '../Blog/BlogCard';

const ProjectsList = ({ projects, header }: { projects: CardItem[], header: string }) => {
    return (
        <>
            <Header as="h2" label={header} />
            {projects.map(project => (
                <RouteLink key={project.title} href={project.url!} isExternal>
                    <BlogCard key={project.title} content={project} />
                </RouteLink>
            ))}
        </>
    )
}

export default ProjectsList;
