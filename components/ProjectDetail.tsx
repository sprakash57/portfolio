import { CardItem } from '../types';

type Props = {
    project: CardItem;
}

const ProjectDetail = ({ project }: Props) => {

    return (
        <div>
            {project.details}
        </div>
    )
}

export default ProjectDetail;
