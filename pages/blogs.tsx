import BlogsList from '@/components/Blog/BlogsList';
import React from 'react'
import { getAllFilesFrontMatter } from '@/helpers/mdx';

const Blogs = ({ posts }: { posts: CardItem[] }) => {
    return (
        <section>
            <BlogsList posts={posts} header="Blogs" />
        </section>
    )
}

export default Blogs;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('posts')
    return { props: { posts } }
}
