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
    repositories(
      first: 50
      privacy: PUBLIC
      isFork: true
      orderBy: {field: UPDATED_AT, direction: DESC}
      affiliations: COLLABORATOR
    ) {
      nodes {
        parent {
          name
          isArchived
          forkCount
          descriptionHTML
          isPrivate
          url
          stargazerCount
          owner {
            avatarUrl(size: 50)
            login
          }
          languages(first: 3) {
            nodes {
              name
              color
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
  const requestedRepos = data.user.repositories.nodes.map((node: { parent: Contribution }) => node.parent) as Contribution[];
  const activeRepos = requestedRepos.filter(repo => !repo.isArchived && !repo.isPrivate).slice(0, 6);
  return res.status(200).json({ contributions: activeRepos });
}

export default contributions;
