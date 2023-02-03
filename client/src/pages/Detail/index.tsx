import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import ProductNewArrival from "../../components/ProductNewArrival";
import { ProductType } from "../../redux/models/type";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import NewsLetter from "../../components/NewsLetter";
import "./style.scss";
import { addToCart } from "../../redux/reducers/cartReducer";
import { toast } from "react-toastify";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { listProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const productDetail: ProductType = listProduct.find(
    (item: ProductType) => item._id === id
  );
  const [imgSelected, setImgSelected] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAddToCart = (item: ProductType) => {
    dispatch(addToCart(item));
    toast.success("Thêm sản phẩm vào giỏ hàng thành công !");
  };

  return (
    <>
      {productDetail && (
        <div className="detail">
          <div className="detail__left">
            <img
              className="detail__left--item"
              src={imgSelected !== null ? imgSelected : productDetail.img}
              alt={productDetail.title}
            />
            <div className="detail__left__list">
              {productDetail.imgDetail.length > 0 &&
                productDetail.imgDetail.map((item: any, index) => {
                  return (
                    <img
                      key={index}
                      className={`detail__left__list--item ${
                        imgSelected === item ? "flex-active" : ""
                      }`}
                      src={item}
                      alt={productDetail.title}
                      onClick={() => setImgSelected(item)}
                    />
                  );
                })}
            </div>
          </div>
          <div className="detail__right">
            <Typography variant="h4" className="detail__right--title">
              {productDetail.title}
            </Typography>
            <Typography variant="h5" className="detail__right--price">
              {productDetail.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
            <div className="detail__right__group">
              <Button
                className="detail__right__group--add"
                onClick={() => handleAddToCart(productDetail)}
              >
                thêm vào giỏ hàng
              </Button>
              <Button className="detail__right__group--shop-now">
                mua ngay
              </Button>
              <Button className="detail__right__group--view">
                xem cửa hàng
              </Button>
            </div>
            <Typography variant="h5" className="detail__right__intro">
              Tư vấn mua hàng
              <span className="detail__right__intro--icon">
                <PhoneInTalkIcon />
              </span>
              <span className="detail__right__intro--phone">0987654321</span>
            </Typography>
          </div>
        </div>
      )}
      <ProductNewArrival />
      <NewsLetter />
    </>
  );
};

export default Detail;
