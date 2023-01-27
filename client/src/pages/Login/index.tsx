import "./style.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useViewport from "../../hooks/useViewPort";

const Login = () => {
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;
  
  return (
    <div className={isMobile ? "login-mobile" : "login"}>
      <Typography variant="h2" className="login__title">
        Đăng Nhập
      </Typography>
      <TextField className="login__input" label="Tên tài khoản" variant="outlined" />
      <TextField className="login__input" label="Mật khẩu" variant="outlined" />
      <Button className="login__submit" variant="contained">Đăng Nhập</Button>
      <p className="login__redirect">Nếu bạn chưa có tài khoản, click vào <Link to="/register">đây</Link> để đăng ký</p>
      {/* https://codevoweb.com/form-validation-react-hook-form-material-ui-react/ */}
    </div>
  );
};

export default Login;
