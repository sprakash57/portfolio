import { gql, ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';

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

export const GET_GITHUB_ACTIVITY = gql`
query {
  user(login: "sprakash57") {
    repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 6) {
      nodes {
        stargazerCount
        url
        forkCount
        description
        isPrivate
        owner { login }
        parent {
          stargazerCount
          url
          forkCount
          description
          isPrivate
          owner { login }
        }
        languages(first: 3) {
          nodes { name }
        }
        name
      }
    }
  }
}
`;

export const GET_GITHUB_REPOS = gql`
query {
  user(login: "sprakash57") {
    repositories(first: 12, orderBy: {field: STARGAZERS, direction: DESC}) {
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