import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ProductType } from "../../redux/models/type";
import Typography from "@mui/material/Typography";

const ProductSelling = () => {
  const products = useSelector(
    (state: RootState) => state.productReducer.listProduct
  );
  const productSelling =
    products.length > 0 &&
    products.filter((item: ProductType) => item.selling === true);
  console.log(productSelling);

  return (
    <div className="selling">
      {productSelling
        .sort(() => Math.random() - Math.random())
        .slice(0, 4)
        .map((item: ProductType) => {
          return (
            <div key={item._id} className="selling__item">
              <img
                className="selling__item--image"
                src={item.img}
                alt={item.title}
              />
              <div className="selling__item__content">
                <Typography variant="h5" className="selling__item__content--title">
                  {item.title}
                </Typography>
                <p className="selling__item__content--price">
                  {item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductSelling;
