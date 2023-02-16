
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ProductType } from "../../types";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ManageProduct = () => {
  const navigate = useNavigate();
  const productList = useSelector(
    (state: RootState) => state.productReducer.listProduct
  );

  return (
    <div className="manage-product">
      <div className="manage-product__top">
        <Typography variant="h5">Danh sách sản phẩm</Typography>
        <Button className="manage-product__top--btn-add" onClick={() => navigate("/create-product")}>
          <AddIcon /> Tạo sản phẩm mới
        </Button>
      </div>
      <div className="manage-product__body">
        <table>
          <tr className="manage-product__title">
            <th className="manage-product__title--choose">
              <Checkbox {...label} />
            </th>
            <th className="manage-product__title--name">Tên sản phẩm</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Ngày cập nhật gần nhất</th>
            <th></th>
          </tr>
          {productList.map((item: ProductType) => {
            return (
              <tr key={item._id} className="manage-product__item">
                <td>
                  <Checkbox {...label} />
                </td>
                <td className="manage-product__item--name">
                  <img src={item.img} alt={item.title} />
                  <Typography variant="h5">{item.title}</Typography>
                </td>
                <td>
                  {item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td>
                  {item.inStock ? (
                    <p className="manage-product__item--inStock">Còn hàng</p>
                  ) : (
                    <p className="manage-product__item--outStock">Hết hàng</p>
                  )}
                </td>
                <td>{dateFormat(item.updatedAt)}</td>
                <td>
                  <Button className="manage-product__item--view" onClick={() => navigate(`/manage-product/${item._id}`)}>
                    <VisibilityIcon />
                  </Button>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
