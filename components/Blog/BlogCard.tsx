import Link from 'next/link';

const BlogCard = ({ slug }: any) => {
    return (
        <Link href={`blog/${slug}`} passHref>
            BlogCard
        </Link>
    )
}

export default BlogCard;
