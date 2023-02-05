import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
  sliderItems: [
    {
      id: 1,
      img: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_1.jpg?1673021351308",
      title:"img 1"
    },
    {
      id: 2,
      img: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_4.jpg?1673021351308",
      imgMobile: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_mobile_2.jpg?1673021351308",
      title:"img 2"
    },
    {
      id: 3,
      img: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_5.jpg?1673021351308",
      imgMobile: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_mobile_4.jpg?1673021351308",
      title:"img 3"
    },
    {
      id: 4,
      img: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_2.jpg?1673021351308",
      imgMobile: "https://bizweb.dktcdn.net/100/395/283/themes/776535/assets/slider_mobile_5.jpg?1673021351308",
      title:"img 4"
    },
  ],
}

const slideSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
});

export const slideReducer = slideSlice.reducer;