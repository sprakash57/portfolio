import { ProjectCard } from '../types';
import Image from 'next/image';
import ExtLink from '../public/external.svg';

type Props = {
    project: ProjectCard;
}

const ProjectDetail = ({ project }: Props) => {
    const { title, summary, technology, platform } = project;
    return (
        <section>
            <header>
                <h2>{title}</h2>
                <Image src={ExtLink} alt="Open Modal" />
                <small>Platform: {platform}</small>
            </header>
            <hr />
            <h2>Introduction</h2>
            { }
        </section>
    )
}

export default ProjectDetail;
