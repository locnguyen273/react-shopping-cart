import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppDispatch } from "../../redux/configStore";
import "./style.scss";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

const eye = <FontAwesomeIcon icon={faEye} />;
export default function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  // show pass
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  // Lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      // Dữ liệu ban đầu mặc định của form
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // check validation
      username: Yup.string().required("Tên đăng nhập không được bỏ trống !"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(3, "Mật khẩu từ 3 - 16 ký tự !")
        .max(16, "Mật khẩu từ 3 - 16 ký tự !"),
    }),
    onSubmit: () => {
      // dispatch(handleLoginUser(values)).then(res => {
      //   if(res?.status && !res.data.isAdmin) {
      //     navigate("/");
      //   }
      // });
    },
  });
  return (
    <div className="login">
      <Typography variant="h2" className="login__title">
        Đăng nhập
      </Typography>
      <form id="login-form" onSubmit={frm.handleSubmit}>
        <div className="login__username">
          <InputBase
            className="login__username--input"
            id="outlined-basic"
            name="username"
            placeholder="Tên đăng nhập"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="text-danger">
          {frm.errors.username && frm.touched.username ? (
            <span className="text-danger">{frm.errors.username}</span>
          ) : (
            ""
          )}
        </div>
        <div className="login__password">
          <InputBase
            id="outlined-basic"
            className="login__password--input"
            type={passwordShow ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          <button
            type="button"
            className="login__password--btn-show"
            onClick={togglePassword}
          >
            <i>{eye}</i>
          </button>
        </div>
        <div className="text-danger">
          {frm.errors.password && frm.touched.password ? (
            <span className="text-danger">{frm.errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className="login__bottom">
          <Button className="login__submit" type="submit">
            Đăng nhập
          </Button>
          <NavLink className="login__redirect" to={"/register"}>
            Đăng ký tài khoản ngay ?
          </NavLink>
        </div>
      </form>
    </div>
  );
}
