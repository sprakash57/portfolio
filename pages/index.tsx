import { useMemo } from "react";
import BlogCard from "../components/Blog/BlogCard";
import { getAllFilesFrontMatter } from "../helpers/mdx";
import { Post } from "../types";

const Home = ({ posts }: { posts: Post[] }) => {

  const recentPosts = useMemo(() => {
    return posts
      .sort((prevPost, nextPost) => new Date(nextPost.publishedAt).getTime() - new Date(prevPost.publishedAt).getTime())
      .slice(0, 3)
  }, [posts])

  return (
    <section>
      <article>
        <h2>Recent Blogs</h2>
        {recentPosts.map(post => <BlogCard key={post.title} post={post} />)}
      </article>
      <article>
        <h2>Featured Projects</h2>
      </article>
      <article>
        <h2>What&apos;s cooking</h2>
      </article>
    </section>
  )
}

export default Home;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts')
  return { props: { posts } }
}
