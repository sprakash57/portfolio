import React, { useEffect } from 'react';
import BlogPost from '@/components/Blog/BlogPost';
import { SectionHeader, Dropdown, ScrollTopButton } from '@/components/Elements';
import { useDebounce } from '@/helpers/hooks';
import { getAllFilesFrontMatter } from '@/helpers/mdx';
import styles from './index.module.scss';

const Blogs = ({ posts, tagsFilter }: { posts: Post[]; tagsFilter: Record<string, number> }) => {
  const [category, setCategory] = React.useState('');
  const [blogs, setBlogs] = React.useState(posts);
  const options = React.useMemo(
    () => [
      { label: 'NA', value: '' },
      ...Object.keys(tagsFilter)
        .sort()
        .map((key) => ({ label: `${key}(${tagsFilter[key]})`, value: key })),
    ],
    [posts]
  );
  const [value, debouncedValue, setValue] = useDebounce('', 1000);

  const handleFilter = (value: string) => {
    setCategory(value);
    const filteredBlogs = posts
      .filter((blog) => blog.tags.some((tag) => tag.includes(value)))
      .filter((blog) => blog.title.toLowerCase().includes(debouncedValue.toLowerCase()));
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    const filteredPosts = posts
      .filter((post) => post.title.toLowerCase().includes(debouncedValue.toLowerCase()))
      .filter((blog) => blog.tags.some((tag) => tag.includes(category)));
    setBlogs(filteredPosts);
  }, [value, debouncedValue]);

  return (
    <section className="mv2">
      <SectionHeader title="Blogs" icon="blog" />
      <summary className={styles.summary}>
        Total available blog posts are <strong style={{ color: 'var(--red)' }}>{posts.length}</strong>. Use search bar
        or dropdown to filter them by title or tags.
      </summary>
      <div className={styles.filter}>
        <input
          className={styles.filter__input}
          type="text"
          placeholder="Search by title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Dropdown options={options} onChange={handleFilter} selected={category} />
      </div>
      {blogs.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
      <ScrollTopButton />
    </section>
  );
};

export default Blogs;

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter('posts')) as Post[];
  const tagsFilter = posts.reduce((memo, current) => {
    current.tags.forEach((tag) => {
      memo[tag] = (memo[tag] || 0) + 1;
    });
    return memo;
  }, {} as Record<string, number>);
  return { props: { posts: posts.sort((prev, next) => next.id - prev.id), tagsFilter } };
}
