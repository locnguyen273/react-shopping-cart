import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  decrementQuantity,
  incrementQuantity,
  removerItem,
} from "../../redux/reducers/cartReducer";
import Typography from "@mui/material/Typography";
import ImgEmptyCart from "../../assets/images/empty-cart.jpg";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const Cart = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cartStore = useSelector((state: RootState) => state.cartReducer.cart);

  const handleDeleteFromCart = (cartItem: any) => {
    dispatch(removerItem(cartItem));
    toast.error("Đã xóa sản phẩm thành công !");
  };
  const handleDecrease = (cartItem: any) => {
    dispatch(decrementQuantity(cartItem));
    toast.warning("Giảm số lượng sản phẩm thành công !");
  };
  const handleIncrease = (cartItem: any) => {
    dispatch(incrementQuantity(cartItem));
    toast.success("Tăng số lượng sản phẩm thành công !");
  };

  const getPaymentForUser = () => {
    let totalPayment = 0;
    cartStore.forEach((item: any) => {
      totalPayment += item.price * item.quantity;
    });
    return totalPayment;
  };

  return (
    <div className="cart-container">
      {cartStore.length > 0 ? (
        <div className="cart">
          <Typography className="cart__title" variant="h5">
            Giỏ hàng của bạn
          </Typography>
          <TableContainer component={Paper} className="cart__container">
            <Table
              sx={{ minWidth: 700, maxWidth: "100%" }}
              aria-label="spanning table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Ảnh sản phẩm</TableCell>
                  <TableCell align="center">Tên sản phẩm</TableCell>
                  <TableCell align="center">Đơn giá</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="center">Thành tiền</TableCell>
                  <TableCell align="center">Xóa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartStore.map((item: any) => (
                  <TableRow key={item._id}>
                    <TableCell align="center">
                      <img
                        className="cart__column--image"
                        src={item.img}
                        alt={item.title}
                      />
                    </TableCell>
                    <TableCell align="center" className="cart__column">
                      {item.title}
                    </TableCell>
                    <TableCell align="center" className="cart__column">
                      {item.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center" className="cart__column">
                      <div className="cart__column__wrapper">
                        <Button
                          className="cart__column__wrapper--decrease"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </Button>
                        <input type="number" value={item.quantity} />
                        <Button
                          className="cart__column__wrapper--increase"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell align="center" className="cart__column">
                      {(item.price * item.quantity).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center" className="cart__column">
                      <Button
                        className="cart__column--delete"
                        onClick={() => handleDeleteFromCart(item)}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="cart__bottom">
            <Button
              className="cart__bottom--continue"
              onClick={() => navigate("/")}
            >
              tiếp tục mua hàng
            </Button>
            <div className="cart__bottom__group">
              <p>Tổng tiền thanh toán</p>
              <p>
                {(getPaymentForUser() || 0).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          </div>
          <Button className="cart__process-payment">tiến hành thanh toán</Button>
        </div>
      ) : (
        <div className="cart-empty">
          <img
            src={ImgEmptyCart}
            alt="empty-cart"
            className="cart-empty__img"
          />
          <Typography variant="h5">
            Bạn chưa có sản phẩm nào trong giỏ hàng !!!
          </Typography>
          <Button
            className="cart-empty__redirect"
            onClick={() => navigate("/")}
          >
            Mua ngay
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
