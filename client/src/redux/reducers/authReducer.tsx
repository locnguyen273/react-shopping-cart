import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import {
  LoginUserProps,
  UserInfoRegister,
  UserInfoUpdate,
  UserType,
} from "../models/type";
import {
  ACCESS_TOKEN,
  getStore,
  http,
  ID_LOGIN,
  setCookie,
  setStore,
} from "../../utils/config";
import { toast } from "react-toastify";

const initialState: any = {
  user: {},
  userProfile: {},
};

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logoutAction: (state, action: any) => {
      state.user = {};
      state.userProfile = {};
      toast.success("Đăng xuất thành công !");
    },
    getUserProfileAction: (state, action: PayloadAction<UserInfoRegister>) => {
      state.userProfile = action.payload;
    },
    updateUserProfileAction: (state, action: PayloadAction<UserInfoRegister>) => {
      state.userProfile = action.payload;
      toast.success("Cập nhật tài khoản thành công !");
    },
  },
});

export const {
  loginAction,
  logoutAction,
  getUserProfileAction,
  updateUserProfileAction,
} = AuthReducer.actions;
export default AuthReducer.reducer;

// ---------- Action API ---------- //

export const handleLoginUser = (user: LoginUserProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`auth/login`, user);
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

        let action = loginAction(result.data.data);
        dispatch(action);
        dispatch(handleGetUserProfile(action.payload._id));
        return { status: result.data.status, data: result.data.data };
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
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
        return { status: true, data: result.data };
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
};

export const handleGetUserProfile = (id_login = getStore(ID_LOGIN)) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`users/profile/${id_login}`);
      const action = getUserProfileAction(result.data.data);
      dispatch(action);
      return { data: result.data };
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleUpdateUserProfile = (
  id_login = getStore(ID_LOGIN),
  userUpdate: UserInfoUpdate
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(`users/profile/${id_login}`, userUpdate);
      const action = updateUserProfileAction(result.data.data);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleUpdatePassword = (user: any) => {
  return async () => {
    try {
      const result = await http.post(`users/change-password`, user);
      toast.success(result.data.message);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };
};
