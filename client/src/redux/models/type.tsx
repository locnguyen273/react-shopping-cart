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
export interface ThongTinNguoiDungDangKi {
  username: string;
  email: string;
  password: string;
}