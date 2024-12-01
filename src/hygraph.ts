import { request, gql } from "graphql-request";
const url = import.meta.env.ASTRO_HYGRAPH_ENDPOINT;

type Category = "jamstack" | "frontend" | "motion" | "logo" | "graphic";

const projects = (category: Category) => gql`
    query Projects {
      projects(
        first: 100
        orderBy: createdAt_DESC
        where: { category: ${category} }
      ) {
        title
        description
        url
        tags
        category
        image {
          url
          handle
          mimeType
        }
      }
    }
  `;

const queries = {
  jamstack: projects("jamstack"),
  frontend: projects("frontend"),
  motion: projects("motion"),
  logo: projects("logo"),
  graphic: projects("graphic"),
};

type QueryResponse<T> = T | null;

const hygraph = async <T>(
  query: string,
  queryParam?: string
): Promise<QueryResponse<T>> => {
  try {
    const res = await request(url, queries[query]);
    return (res[queryParam || query] || []) as QueryResponse<T>;
  } catch (error) {
    console.error("Error fetching data from Hygraph:", error);
    return [] as QueryResponse<T>;
  }
};

export default hygraph;
