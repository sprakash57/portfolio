import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';
import { classnames, numberOfViews } from '@/helpers/utils';
import Loader from 'common-components/Loader';
import styles from './index.module.scss';

type Props = {
  stats: {
    publishedAt: string;
    readTime: string;
    slug: string;
  };
  queryType?: string;
  className?: string;
};

const BlogStats = ({ stats, queryType = 'read', className }: Props) => {
  const { publishedAt, slug, readTime } = stats;
  const { data, error } = useSWR(`/api/views?${queryType}=${slug}`, fetcher);
  return (
    <div className={classnames(styles.stats, className)}>
      <span>{publishedAt}</span>
      <span>{readTime}</span>
      {!data ? (
        !error ? (
          <Loader size={15} className={styles.stats__loader} />
        ) : (
          ''
        )
      ) : (
        <span>{numberOfViews(data.views)} views</span>
      )}
    </div>
  );
};

export default BlogStats;
