import { useStaticQuery, graphql } from "gatsby";

export const BlogQuery = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulPortfolioBlog(sort:{fields: publishedDate, order: DESC}){
                edges{
                    node{
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `);
    return data.allContentfulPortfolioBlog.edges;
};
