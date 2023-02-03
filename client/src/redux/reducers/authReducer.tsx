import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import { LoginUserProps, UserInfoRegister, UserType } from "../models/type";
import {
  ACCESS_TOKEN,
  http,
  ID_LOGIN,
  setCookie,
  setStore,
} from "../../utils/config";
import { toast } from "react-toastify";

const initialState: any = {
  user: {},
  userRegister: {}
};

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    registerAction: (state, action: PayloadAction<UserInfoRegister>) => {
      state.userRegister = action.payload;
    },
    logoutAction: (state, action: any) => {
      state.user = {};
      toast.success("Đăng xuất thành công !");
    }
  },
});

export const { loginAction, registerAction, logoutAction } = AuthReducer.actions;
export default AuthReducer.reducer;

// ---------- Action API ---------- //

export const handleLoginUser = (user: LoginUserProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`auth/login`, user);
      console.log(result);
      // set token
      setCookie(ACCESS_TOKEN, result.data.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.accessToken);
      // set id
      setCookie(ID_LOGIN, result.data._id, 30);
      setStore(ID_LOGIN, result.data._id);
      // set role
      setCookie(ID_LOGIN, result.data.isAdmin, 30);
      setStore(ID_LOGIN, result.data.isAdmin);
      if (result.status === 200) {
        toast.success("Đăng nhập thành công !");

        let action = loginAction(result.data);
        dispatch(action);
        return { status: true, data: result.data };
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
};

export const handleRegisterUser = (user: UserInfoRegister) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`auth/register`, user);
      console.log(result);
      
      if (result.status === 201) {
        toast.success("Đăng ký tài khoản thành công !");

        let action = registerAction(result.data);
        dispatch(action);
        return { status: true, data: result.data };
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
};
