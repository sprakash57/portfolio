import Header from './Header';
import RouteLink from './RouteLink';

type Props = {
    title: string;
    data: any[];
    renderFn: any;
    listStyle?: string;
}

const List = ({ title, listStyle = "", data, renderFn }: Props) => {
    return (
        <>
            <Header as="h2" label={title} />
            <section className={listStyle}>
                {data.map(d => renderFn(d))}
            </section>
        </>
    )
}

export default List
