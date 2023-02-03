import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { AppDispatch } from "../configStore";
import { ProductType } from "../models/type";

const initialState : any = {
  listProduct: []
}

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    getAllProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.listProduct = action.payload;
    }
  }
});

export const {
  getAllProductsAction
} = ProductReducer.actions;

export default ProductReducer.reducer;

// ---------- Action API ---------- //

export const getListProduct = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`products/`);
      let listProduct : ProductType[] = result.data.products;
      const action = getAllProductsAction(listProduct);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}