import { useSelector } from "react-redux";
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

const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cartReducer.cart);
  console.log(cartStore);
  return (
    <div>
      {cartStore.length > 0 && (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700, maxWidth: 1200 }}
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
                      <img width={150} height={150} src={item.img} alt={item.title} />
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">
                      {item.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                      <Button><DeleteOutlineIcon /></Button>
                    </TableCell>
                  </TableRow>
                ))}
                {/* <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default Cart;
