export interface SearchSchema {
  data: {
    search: {
      edges: ProductCardDetailSchema[];
    };
  };
}
export interface ProductCardImage {
  nodes: {
    url: string;
  }[];
}
export interface CartItems {
  data: {
    cartLinesAdd: {
      cart: {
        id: string;
        lines: {
          edges: {
            node: {
              id: string;
              quantity: number;
              merchandise: {
                id: string;
                title: string;
              };
            };
          }[];
        };
      };
    };
  };
}
export interface ProductCardDetailSchema {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    tags: string[];
    variants: {
      edges: {
        node: {
          id: string;
        };
      }[];
    };
    priceRange: {
      maxVariantPrice: {
        amount: number;
      };
      minVariantPrice: {
        amount: number;
      };
    };
    images: ProductCardImage;
  };
}
export interface ProductsByTagsSchema {
  data: {
    products: {
      edges: {
        node: {
          id: string;
          handle: string;
          title: string;
          images: ProductCardImage;
        };
      }[];
    };
  };
}

export interface ProductSchema {
  data: {
    product: {
      description: string;
      title: string;
      images: ProductCardImage;
      priceRange: {
        maxVariantPrice: {
          amount: number;
        };
      };
      variants: {
        edges: {
          node: {
            id: string;
          };
        }[];
      };
      totalInventory: number;
    };
  };
}
export interface CartSchema {
  data: {
    cart: {
      totalQuantity: number;
      cost: {
        totalAmount: {
          amount: number;
        };
      };
      lines: {
        edges: CartEdges[];
      };
    };
  };
}
export interface CartEdges {
  node: {
    id: string;
    quantity: number;
    merchandise: {
      id: string;
      quantityAvailable: number;
      product: {
        id: string;
        title: string;
        handle: string;
        images: ProductCardImage;
      };
      price: {
        amount: number;
      };
    };
  };
}
export interface CartId {
  data: {
    cartCreate: {
      cart: {
        id: string;
      };
    };
  };
}
