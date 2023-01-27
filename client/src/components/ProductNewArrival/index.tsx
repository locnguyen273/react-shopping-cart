import Typography from "@mui/material/Typography";
import ProductItem from "../ProductItem";
import useViewport from "../../hooks/useViewPort";
import "./style.scss";

const ProductNewArrival = () => {
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;

  return (
    <div className={isMobile ? "products-mobile" : "products"}>
      <Typography
        variant="h4"
        className={isMobile ? "products-mobile__title" : "products__title"}
      >
        hàng mới về
      </Typography>
      <div className={isMobile ? "products-mobile__list" : "products__list"}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductNewArrival;
