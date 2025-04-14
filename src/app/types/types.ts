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
export interface ProductCardDetailSchema {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    tags: string[];
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
      totalInventory: number;
    };
  };
}
