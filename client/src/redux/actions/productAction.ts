import { http } from "../../utils/config"
import { AppDispatch } from "../configStore";

export const fetchListProduct = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/products`);
      console.log(result.data);
      
    } catch (err) {
      console.log(err);
    }
  }
}