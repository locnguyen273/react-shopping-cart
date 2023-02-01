import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { AppDispatch } from "../configStore";
import { ThongTinNguoiDungDangKi, UserType } from "../models/type";

const initialState : any = {
  user: {}
}

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    loginAction: (state, action:PayloadAction<UserType>) => {
      state.user = action.payload;
    }
  }
});

export const {
  loginAction
} = AuthReducer.actions;
export default AuthReducer.reducer;

// ---------- Action API ---------- //

export const handleLoginUser = (user : ThongTinNguoiDungDangKi) => {
  return async (dispatch : AppDispatch) => {
    try {
      const result = await http.post(`auth/login`, user);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}