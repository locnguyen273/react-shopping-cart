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

export interface UserType {
  _id: string;
  username: string;
  email: string;
  isAdmin: true,
  createdAt: string;
  updatedAt: string;
  __v: 0;
  accessToken: string;

}
export interface LoginUserProps {
  username: string;
  password: string;
}
export interface UserInfoRegister {
  name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: string;
  gender: boolean;
}
export interface UserInfoUpdate {
  name: string;
  email: string;
  username: string;
  phone: string;
  address: string;
  gender: string;
}

export interface SliderType {
  _id: string;
  title: string;
  img: string;
}