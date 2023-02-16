export interface ProductType {
  _id: string;
  title: string;
  img: string;
  imgDetail: string[];
  categories: string;
  forGender: string;
  size: string[];
  color: string;
  price: number;
  selling: boolean;
  inStock: boolean;
  updatedAt: string;
}