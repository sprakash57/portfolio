import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';
import styles from './index.module.scss';
import { classnames, numberOfViews } from '@/helpers/utils';
import Loader from 'common-components/Loader';

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
    const { data, error } = useSWR(`/api/views?${queryType}=${slug}`, fetcher);
    return (
        <div className={classnames(styles.summary, className)}>
            <span>{publishedAt}</span>
            <span>{readTime}</span>
            {!data
                ? (!error ? <Loader size={15} className={styles.statsLoader} /> : "")
                : <span>{numberOfViews(data.views)} views</span>
            }
        </div>
    )
}

export default BlogStats;
