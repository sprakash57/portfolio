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
                        timeToRead
                        tags
                        images{
                            file{
                                url
                            }
                        }
                        summaryText{
                            summaryText
                        }
                    }
                }
            }
        }
    `);
    return data.allContentfulPortfolioBlog.edges;
};
