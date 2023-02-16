import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "./style.scss";
import { ProductType } from "../../types";

const ProductDetail = () => {
  let { id } = useParams();
  const { listProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const productDetail: ProductType = listProduct.find(
    (item: ProductType) => item._id === id
  );

  return (
    <div>
      
    </div>
  );
}

export default ProductDetail