export interface ProductType {
  _id: string;
  title: string;
  img: string;
  imgDetail: [];
  categories: [];
  size: [];
  color: string;
  price: number;
  inStock: boolean;
}