import React from 'react'
import { getAllFilesFrontMatter } from '../helpers/mdx';

const Blogs = (props: any) => {
    console.log("Blogs pages", props);
    return (
        <div>
            Blog
        </div>
    )
}

export default Blogs;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('posts')

    return { props: { posts } }
}
