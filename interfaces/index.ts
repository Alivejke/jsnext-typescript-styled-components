export interface ProductType {
  productType?: string;
  key: string;
  name?: string;
  description?: string;
  intense?: boolean;
  price?: ProductPriceType;
  image?: ProductImageType;
  stars?: number;
};

export interface ProductPriceType {
  currencyCode: string;
  centAmount: number;
};

export interface ProductImageType {
  altText?: string;
  url: string;
};
