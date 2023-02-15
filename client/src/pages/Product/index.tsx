import { useState } from "react";
import Typography from "@mui/material/Typography";
import BgImages from "../../assets/images/bg-product.jpg";
import "./style.scss";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProductType } from "../../redux/models/type";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/reducers/cartReducer";
import { toast } from "react-toastify";
import Pagination from "@mui/material/Pagination";
import useViewport from "../../hooks/useViewPort";
import usePagination from "../../hooks/usePagination";
import ProductSelling from './../../components/ProductSelling/index';

const ariaLabel = { "aria-label": "description" };

const Product = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [value, setValue] = useState([0, 2000000]);
  const [filterProduct, setFilterProduct] = useState<ProductType[]>([]);
  const { listProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const lisProductBeforeFilter = useSelector(
    (state: RootState) => state.productReducer.listProduct
  );
  const [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count =
    filterProduct.length > 0
      ? Math.ceil(filterProduct.length / PER_PAGE)
      : lisProductBeforeFilter.length > 0
      ? Math.ceil(lisProductBeforeFilter.length / PER_PAGE)
      : Math.ceil(listProduct.length / PER_PAGE);
  const dataPagination =
    filterProduct.length > 0
      ? filterProduct
      : lisProductBeforeFilter.length > 0
      ? lisProductBeforeFilter
      : listProduct;
  const _DATA = usePagination(dataPagination, PER_PAGE);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const rangeSelector = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleAddToCart = (item: ProductType) => {
    dispatch(addToCart(item));
    toast.success("Thêm sản phẩm vào giỏ hàng thành công !");
  };

  const handleFilterByPrice = () => {
    const data = lisProductBeforeFilter?.filter(
      (item: ProductType) => item.price >= value[0] && item.price <= value[1]
    );
    setFilterProduct(data);
  };

  const handleClearFilterByPrice = () => {
    setFilterProduct([]);
    setValue([0, 8000000]);
  };

  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className="product">
      <div className="product__container">
        {!isMobile && (
          <div className="product__left">
            <Typography variant="h3" className="product__left--title">
              Danh mục sản phẩm
            </Typography>
            <div className="product__left__group-menu">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText primary="Áo thun" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText primary="Áo sơ mi" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Áo khoác" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Quần dài" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemText primary="Quần short" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemText primary="Phụ kiện" />
              </ListItemButton>
            </div>
            <div className="product__left__find-by-price">
              <Typography
                variant="h5"
                className="product__left__find-by-price--title"
              >
                Tìm kiếm theo giá
              </Typography>
              <div className="product__left__group-price">
                <div className="product__left__group-price__group">
                  <Input
                    className="product__left__group-price--min"
                    value={value[0].toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                    inputProps={ariaLabel}
                  />
                  <span>-</span>
                  <Input
                    className="product__left__group-price--max"
                    value={value[1].toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                    inputProps={ariaLabel}
                  />
                </div>
                <Slider
                  size="small"
                  value={value}
                  max={2000000}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                />
                <Button
                  onClick={handleFilterByPrice}
                  className="product__left__group-price--btn-filter"
                >
                  Lọc giá
                </Button>
                <Button
                  onClick={handleClearFilterByPrice}
                  className="product__left__group-price--btn-un-filter"
                >
                  Bỏ lọc giá
                </Button>
              </div>
            </div>
            <div className="product__left__selling">
              <Typography variant="h3" className="product__left--title">
                Bán chạy
              </Typography>
              <ProductSelling />
            </div>
          </div>
        )}
        <div className="product__right">
          <img
            className="product__right--images"
            src={BgImages}
            alt="bg-images"
          />
          <div className="product__right__list">
            {_DATA.currentData().length > 0 &&
              _DATA.currentData().map((item: ProductType) => {
                return (
                  <div className="productItem" key={item._id}>
                    <img
                      className="productItem__image"
                      src={item.img}
                      alt="img"
                    />
                    <div className="productItem__info">
                      <Typography
                        className="productItem__info--name"
                        variant="h3"
                      >
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
                    <button
                      className="productItem__add"
                      onClick={() => handleAddToCart(item)}
                    >
                      thêm vào giỏ hàng
                    </button>
                  </div>
                );
              })}
          </div>
          <Pagination
            className="product__right--pagination"
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
