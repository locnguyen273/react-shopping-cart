import "./style.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useViewport from "../../hooks/useViewPort";

const Register = () => {
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;

  return (
    <div className={isMobile ? "register-mobile" : "register"}>
      <Typography variant="h2" className="register__title">
        Đăng Ký
      </Typography>
      <TextField className="register__input" label="Tên tài khoản" variant="outlined" />
      <TextField className="register__input" label="Email" variant="outlined" />
      <TextField className="register__input" label="Số điện thoại" variant="outlined" />
      <TextField className="register__input" label="Mật khẩu" variant="outlined" />
      <Button className="register__submit" variant="contained">Đăng Ký</Button>
      <p className="register__redirect">Nếu bạn đã có tài khoản, click vào <Link to="/login">đây</Link> để đăng nhập</p>
    </div>
  );
};

export default Register;
