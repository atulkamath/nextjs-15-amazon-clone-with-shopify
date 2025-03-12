import { shopifyFetch } from "@/app/data/shopifyFetch";
import { ProductsByTagsSchema } from "@/app/types/types";

export async function getProductsByTags(query: string) {
  return shopifyFetch<ProductsByTagsSchema>({
    query: `
    query GetProductsByTags($query: String!, $first: Int!){
   
  products(query: $query, first: $first) {
    edges {
      node {
        id
        title
        images(first: 1){
        nodes {
        url
        }
        }
      }
    }
  }
  }
    `,
    variables: {
      query: `tag:${query}`,
      first: 20,
    },
  });
}
