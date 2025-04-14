import { ProductSchema, SearchSchema } from "../types/types";

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: object;
}): Promise<{ status: number; body: T | null; error?: string }> {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN as string;
  if (!endpoint) throw new Error("endpoint not defined");
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      } as HeadersInit,
      body: JSON.stringify({ query, variables }),
    });
    const body = await result.json();

    return {
      status: result.status,
      body: body as T,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
      body: null,
    };
  }
}

export async function searchProducts(query: string) {
  return shopifyFetch<SearchSchema>({
    query: `
    query ($query: String!, $first: Int) {
  search(query: $query, first: $first, types: PRODUCT) {
    edges {
      node {
        ... on Product {
          id
          handle
          title
          description
          tags
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice{
              amount
            }
          }
            images(first:1){
            nodes{
            url
            }
            }
        }
      }
    }
  }
}
    `,
    variables: {
      query: query,
      first: 20,
    },
  });
}
export async function getProduct(handle: string) {
  return shopifyFetch<ProductSchema>({
    query: `
    query($handle:String!){
    product(handle: $handle) {
          title
          description
          priceRange {
            maxVariantPrice {
              amount
            }
            
            }
            images(first:3){
            nodes{
            url
            }
            }
            totalInventory
  }
  }
    `,
    variables: {
      handle: handle,
    },
  });
}
