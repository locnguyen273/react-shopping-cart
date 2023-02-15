
import { createSlice } from '@reduxjs/toolkit';
const initialState : any = {
  listProduct: []
}

const ProductReducer = createSlice({
  name : "ProductReducer",
  initialState,
  reducers: {}
})

export default ProductReducer.reducer;