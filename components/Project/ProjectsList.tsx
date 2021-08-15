import { Header, RouteLink, Button } from '@/common/index';
import BlogCard from '../Blog/BlogCard';

const ProjectsList = ({ projects, header, viewMoreBtn = false }: { projects: CardItem[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb2">
            <Header as="h2" label={header} />
            {projects.map(project => (
                <RouteLink key={project.title} href={project.url!} isExternal>
                    <BlogCard key={project.title} content={project} />
                </RouteLink>
            ))}
            {viewMoreBtn && <Button as="link" href="/projects" label="View more" />}
        </section>
    )
}

export default ProjectsList;