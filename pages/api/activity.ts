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

const GET_GITHUB_ACTIVITY = gql`
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

const activity = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data } = await apolloInstance(GET_GITHUB_ACTIVITY);
        // console.log(data.user.repositories.nodes)
        return res.status(200).json({ activities: data.user.repositories.nodes });
    } catch (error) {
        return res.status(500).json({ error: error.message, activities: [] });
    }
}

export default activity;