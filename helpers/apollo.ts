import { gql, ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';

export const apolloInstance = async (query: DocumentNode) => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Authorization": `Basic ${process.env.GH_TOKEN}`
    }
  });
  return await client.query({ query });
}

export const GET_GITHUB_ACTIVITY = gql`
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
`;

export const GET_GITHUB_REPOS = gql`
{
  user(login: "sprakash57") {
    repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 12) {
      nodes {
        forkCount
        url
        stargazerCount
        isPrivate
        description
        languages(first: 10) {
          nodes {
            name
          }
        }
        name
        watchers {
          totalCount
        }
      }
    }
  }
}
`;