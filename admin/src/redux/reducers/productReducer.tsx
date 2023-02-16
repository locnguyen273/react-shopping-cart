
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types';
import { http } from '../../utils/config';
import { AppDispatch } from '../configStore';
const initialState : any = {
  listProduct: []
}

const ProductReducer = createSlice({
  name : "ProductReducer",
  initialState,
  reducers: {
    getListProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.listProduct = action.payload;
    }
  }
})

export const { getListProduct } = ProductReducer.actions;
export default ProductReducer.reducer;

// ---------- Action Call API ---------- //
export const handleGetListProduct = () => {
  return async ( dispatch: AppDispatch ) => {
    try {
      const result = await http.get(`products`);
      let listProduct : ProductType[] = result.data.data;
      const action = getListProduct(listProduct);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}