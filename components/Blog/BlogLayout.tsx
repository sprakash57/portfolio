const BlogLayout = ({ children, frontMatter }: Record<string, any>) => {
    console.log(frontMatter);
    return (
        <div>
            {children}
        </div>
    )
}

export default BlogLayout;
