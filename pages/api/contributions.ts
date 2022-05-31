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
    repositoriesContributedTo(
      first: 6,
      contributionTypes: [COMMIT, ISSUE, PULL_REQUEST],
      orderBy: {field: PUSHED_AT, direction: DESC}
    ) {
      nodes {
        forkCount
        stargazerCount
        name
        url
        descriptionHTML
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
`;

const contributions = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data } = await apolloInstance(GET_OPEN_SOURCE_PROJECTS);
  return res.status(200).json({ contributions: [...data.user.repositoriesContributedTo.nodes] });
}

export default contributions;
