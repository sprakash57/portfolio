import { useMemo } from "react";
import BlogCard from "../components/Blog/BlogCard";
import { getAllFilesFrontMatter } from "../helpers/mdx";
import { Post } from "../types";
import styles from "../styles/Home.module.scss";
import RouteLink from "../components/Common/RouteLink";

const Home = ({ posts }: { posts: Post[] }) => {
    console.log(posts)
    const recentPosts = useMemo(() => {
        return posts
            .sort((prevPost, nextPost) => new Date(nextPost.publishedAt).getTime() - new Date(prevPost.publishedAt).getTime())
            .slice(0, 3)
    }, [posts])

    return (
        <section>
            <article className={styles.agenda}>
                <h1>Recent Blogs</h1>
                {recentPosts.map(post => <BlogCard key={post.title} post={post} />)}
                <RouteLink
                    href="/blogs"
                    classForContainer={styles.viewMore}
                >
                    View more
                </RouteLink>
            </article>
            <article className={styles.agenda}>
                <h1>Featured Projects</h1>
            </article>
            <article className={styles.agenda}>
                <h1>What&apos;s cooking</h1>
            </article>
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('posts')
    return { props: { posts } }
}
