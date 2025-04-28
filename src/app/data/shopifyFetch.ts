import {
  CartItems,
  CartSchema,
  ProductSchema,
  SearchSchema,
} from "../types/types";

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: object;
}): Promise<{ status: number; body: T | null; error?: string }> {
  const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string;
  if (!endpoint) throw new Error("endpoint not defined");
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

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

export async function searchProducts(
  query: string,
  sortKey?: string,
  reverse?: boolean
) {
  return shopifyFetch<SearchSchema>({
    query: `
      query ($query: String!, $first: Int, $sortKey: SearchSortKeys!, $reverse: Boolean) {
        search(query: $query, first: $first, types: PRODUCT, sortKey: $sortKey, reverse: $reverse) {
          edges {
            node {
              ... on Product {
                id
                handle
                title
                description
                tags
                variants(first: 1) {
                  edges {
                    node {
                      id
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 1) {
                  nodes {
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
      query,
      first: 20,
      sortKey,
      reverse,
    },
  });
}

export async function getProduct(handle: string) {
  return shopifyFetch<ProductSchema>({
    query: `
      query($handle: String!) {
        product(handle: $handle) {
          handle
          title
          description
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images(first: 3) {
            nodes {
              url
            }
          }
          totalInventory
        }
      }
    `,
    variables: {
      handle,
    },
  });
}

// Add the id which is needed for q-selector.
export async function getCart(cartId: string) {
  return shopifyFetch<CartSchema>({
    query: `
      query($cartId: ID!) {
        cart(id: $cartId) {
          totalQuantity
          cost {
            totalAmount {
              amount
            }
          }
          lines(first: 100) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    quantityAvailable
                    product {
                      images(first: 1) {
                        nodes {
                          url
                        }
                      }
                      handle
                      title
                      id
                    }
                    price {
                      amount
                    }
                  }
                }
                quantity
              }
            }
          }
        }
      }
    `,
    variables: {
      cartId,
    },
  });
}

export async function createCart(variantId: string, quantity: number) {
  return shopifyFetch({
    query: `
      mutation cartCreate($input: CartInput) {
        cartCreate(input: $input) {
          cart {
            id
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
          warnings {
            message
          }
        }
      }
    `,
    variables: {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    },
  });
}

export async function addItemToCart(
  cartId: string,
  variantId: string,
  quantity: number
) {
  return shopifyFetch<CartItems>({
    query: `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
          warnings {
            message
          }
        }
      }
    `,
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });
}

export async function updateCartQuantity(
  cartId: string,
  variantId: string,
  quantity: number
) {
  return shopifyFetch({
    query: `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            totalQuantity
            cost {
              totalAmount {
                amount
              }
            }
            lines(first: 100) {
              edges {
                node {
                  id
                  merchandise {
                    ... on ProductVariant {
                      id
                      quantityAvailable
                      product {
                        images(first: 1) {
                          nodes {
                            url
                          }
                        }
                        title
                        id
                      }
                      price {
                        amount
                      }
                    }
                  }
                  quantity
                }
              }
            }
          }
          userErrors {
            field
            message
          }
          warnings {
            message
          }
        }
      }
    `,
    variables: {
      cartId,
      lines: [
        {
          id: variantId,
          quantity,
        },
      ],
    },
  });
}
