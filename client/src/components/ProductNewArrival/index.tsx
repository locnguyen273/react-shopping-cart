import Typography from "@mui/material/Typography";
import useViewport from "../../hooks/useViewPort";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { RootState } from "../../redux/configStore";
import { ProductType } from "../../redux/models/ProductModel";

const ProductNewArrival = () => {
  let navigate = useNavigate();
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;
  const { listProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className={isMobile ? "products-mobile" : "products"}>
      <Typography
        variant="h4"
        className={isMobile ? "products-mobile__title" : "products__title"}
      >
        hàng mới về
      </Typography>
      <div className={isMobile ? "products-mobile__list" : "products__list"}>
        {listProduct.length > 0 &&
          listProduct.slice(0,8).map((item: ProductType) => {
            return (
              <div className="productItem" key={item._id}>
                <img
                  className="productItem__image"
                  src={item.img}
                  alt="img"
                />
                <div className="productItem__info">
                  <Typography className="productItem__info--name" variant="h3">
                    {item.title}
                  </Typography>
                  <p className="productItem__info--price">
                    {item.price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
                <button
                  className="productItem__overlay"
                  onClick={() => navigate(`/product/${item._id}`)}
                >
                  <VisibilityIcon />
                </button>
                <button className="productItem__add">thêm vào giỏ hàng</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductNewArrival;
