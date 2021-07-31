import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

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
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
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
    const { data } = matter(source)

    return [
      { ...data, slug: postSlug.replace('.mdx', '') },
      ...allPosts
    ]
  }, [])
}

export async function getGithubActivity() {
  try {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache(),
      headers: {
        "Authorization": `Basic ${process.env.GH_TOKEN}`
      }
    })

    const { data } = await client.query({
      query: gql`
          {
            user(login: "sprakash57") {
              repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 6) {
                nodes {
                  forkCount
                  url
                  stargazerCount
                  isPrivate
                  description
                  languages(first: 3) {
                    nodes {
                      name
                    }
                  }
                  name
                  owner {
                    avatarUrl(size: 60)
                    url
                    login
                  }
                  parent {
                    stargazerCount
                    url
                    forkCount
                    description
                    owner {
                      avatarUrl(size: 60)
                      url
                      login
                    }
                    isPrivate
                  }
                }
              }
            }
          }
          `
    })
    return data.user.repositories.nodes;
  } catch (error) {
    return { message: error.message }
  }
}
