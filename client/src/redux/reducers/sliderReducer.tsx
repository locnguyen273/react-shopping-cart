import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { AppDispatch } from "../configStore";
import { SliderType } from "../models/type";

const initialState : any = {
  sliders: []
}

const SlideReducer = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getListSlider: (state, action: PayloadAction<SliderType[]>) => {
      state.sliders = action.payload;
    }
  },
});

export const { getListSlider } = SlideReducer.actions

export const slideReducer = SlideReducer.reducer;

// ---------- Action Call API ---------- //
export const handleGetListSlider = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`sliders`);
      let listSlider : SliderType[] = result.data;
      const action = getListSlider(listSlider);
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  }
}