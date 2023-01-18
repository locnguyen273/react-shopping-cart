import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.scss";

const Product = () => {
  let x = 390000;
  return (
    <Card sx={{ maxWidth: 300 }} className="card">
      <CardMedia
        className="card__image"
        component="img"
        alt="green iguana"
        height="140"
        image="https://d2iw2fcvhmnafk.cloudfront.net/centralweb/minio/thumb/asset/bipbip/8936211720647.png"
      />
      <CardContent>
        <Typography variant="h5" component="div" className="card__title">
          HỘP QUÀ ĐÓN CHÀO XUÂN MỚI 3
        </Typography>
        <Typography variant="h5" component="div" className="card__price">
          {Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 9}).format(x)}
        </Typography>
      </CardContent>
      <CardActions className="card__action">
        <Button variant="outlined" className="card__action--addToCart">
          <AddShoppingCartIcon style={{ marginRight: "0.5rem" }} />
          thêm vào giỏ
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
