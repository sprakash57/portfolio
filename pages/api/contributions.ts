import { gql, ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

const apolloInstance = async (query: DocumentNode) => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Authorization": `Bearer ${process.env.GH_TOKEN}`
    }
  });
  return await client.query({ query });
}

const GET_OPEN_SOURCE_PROJECTS = gql`
query {
    user(login: "sprakash57") {
      repositories(first: 9, orderBy: {field: CREATED_AT, direction: DESC}, isFork: true) {
        nodes {
          parent {
            forkCount
            stargazerCount
            name
            url
            description
            owner {
              avatarUrl(size: 50)
              login
            }
            languages(orderBy: {field: SIZE, direction: DESC}, first: 1) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const contributions = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data } = await apolloInstance(GET_OPEN_SOURCE_PROJECTS);
  return res.status(200).json({ contributions: data.user.repositories.nodes.map((node: { parent: Contribution }) => node.parent) });
}

export default contributions;
