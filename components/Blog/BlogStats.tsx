import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';
import styles from './index.module.scss';
import { classnames, numberOfViews } from '@/helpers/utils';

type Props = {
    stats: {
        publishedAt: string;
        readTime: string;
        slug: string;
    },
    queryType?: string;
    className?: string;
}

const BlogStats = ({ stats, queryType = "read", className }: Props) => {
    const { publishedAt, slug, readTime } = stats;
    const { data } = useSWR(`/api/views?${queryType}=${slug}`, fetcher);
    return (
        <div className={classnames(styles.summary, className)}>
            <span>{publishedAt}</span>
            <span>{readTime}</span>
            <span>{data ? `${numberOfViews(data.views)} views` : ""}</span>
        </div>
    )
}

export default BlogStats;
