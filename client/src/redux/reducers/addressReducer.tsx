import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { AppDispatch } from "../configStore";

const initialState: any = {
  listAddresses: [],
};

const AddressReducer = createSlice({
  name: "AddressReducer",
  initialState,
  reducers: {
    getListAddressAction: (state, action: PayloadAction) => {
      state.listAddresses = action.payload;
    },
  },
});

export const { getListAddressAction } = AddressReducer.actions;
export default AddressReducer.reducer;

// ---------- Action Call API ----------//
export const handleFetchListAddress = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`address`);
      let action = getListAddressAction(result.data);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
};