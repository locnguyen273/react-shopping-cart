import "./style.scss";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductItem = () => {
  let price = 580000;
  return (
    <div className="productItem">
      <img
        className="productItem__image"
        src="https://bizweb.dktcdn.net/thumb/large/100/395/283/products/z4038005604943-6c4fbd2b4c8972f4429e98926026508d.jpg?v=1673695159000"
        alt="img"
      />
      <div className="productItem__info">
        <Typography className="productItem__info--name" variant="h3">
          HOODIE FAPAS REGULAR BKLI
        </Typography>
        <p className="productItem__info--price">
          {price.toLocaleString("vi", { style: "currency", currency: "VND" })}
        </p>
      </div>
      <button className="productItem__overlay">
        <VisibilityIcon />
      </button>
      <button className="productItem__add">
        thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductItem;
