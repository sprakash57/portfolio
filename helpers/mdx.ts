import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content)

  return {
    mdxSource,
    frontMatter: {
      readTime: readingTime(content).text,
      slug: slug || null,
      ...data
    }
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts: any[], postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data, content } = matter(source)
    return [
      { ...data, slug: postSlug.replace('.mdx', ''), readTime: readingTime(content).text },
      ...allPosts
    ]
  }, [])
}
