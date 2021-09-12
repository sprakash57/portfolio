import { gql, ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const apolloInstance = async (query: DocumentNode) => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Authorization": `Bearer ${process.env.GH_TOKEN}`
    }
  });
  return await client.query({ query });
}

export const GET_GITHUB_REPOS = gql`
query {
  user(login: "sprakash57") {
    repositories(first: 9, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name
        languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
          nodes {
            name
          }
        }
        url
        stargazerCount
        forkCount
        isPrivate
        isFork
        description
      }
    }
  }
}
`;

const projects = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data } = await apolloInstance(GET_GITHUB_REPOS);
  res.status(200).json({ repos: data.user.repositories.nodes });
}

export default projects;