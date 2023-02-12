import { useState } from "react";
import "./style.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import useViewport from "../../hooks/useViewPort";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputBase from "@mui/material/InputBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import { handleRegisterUser } from "../../redux/reducers/authReducer";

const eye = <FontAwesomeIcon icon={faEye} />;
const Register = () => {
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  // show pass
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const frm = useFormik({
    initialValues: {
      // Dữ liệu ban đầu mặc định của form
      name: "",
      email: "",
      username: "",
      password: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      // check validation
      name: Yup.string()
        .matches(
          /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
          " Name Không đúng định dạng "
        )
        .required(" Name không được bỏ trống "),
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng !"),
      username: Yup.string().required("Tên đăng nhập không được bỏ trống !"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(3, "Mật khẩu từ 3 - 16 ký tự !")
        .max(16, "Mật khẩu từ 3 - 16 ký tự !"),
      phone: Yup.string()
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "  Phone phải từ 03 05 07 08 09 và có 10 số "
        )
        .required(" Phone không được bỏ trống "),
    }),
    onSubmit: (values : any) => {
      dispatch(handleRegisterUser(values)).then(res => {
        if(res?.status === true) {
          navigate("/login");
        }
      });
    },
  });

  return (
    <div className={isMobile ? "register-mobile" : "register"}>
      <Typography variant="h2" className="register__title">
        Đăng Ký
      </Typography>
      <form
        id="login-form"
        onSubmit={frm.handleSubmit}
        className={
          isMobile ? "register-mobile__container" : "register__container"
        }
      >
        <InputBase
          className={isMobile ? "register-mobile__input" : "register__input"}
          id="outlined-basic"
          name="name"
          placeholder="Tên người dùng"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        <div className="text-danger">
          {frm.errors.name && frm.touched.name ? (
            <span className="text-danger">{frm.errors.name}</span>
          ) : (
            ""
          )}
        </div>
        <InputBase
          className={isMobile ? "register-mobile__input" : "register__input"}
          id="outlined-basic"
          name="email"
          placeholder="Email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        <div className="text-danger">
          {frm.errors.email && frm.touched.email ? (
            <span className="text-danger">{frm.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <InputBase
          className={isMobile ? "register-mobile__input" : "register__input"}
          id="outlined-basic"
          name="username"
          placeholder="Tên tài khoản"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        <div className="text-danger">
          {frm.errors.username && frm.touched.username ? (
            <span className="text-danger">{frm.errors.username}</span>
          ) : (
            ""
          )}
        </div>
        {/* mật khẩu */}
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
        <InputBase
          className={isMobile ? "register-mobile__input" : "register__input"}
          id="outlined-basic"
          name="phone"
          placeholder="Số điện thoại"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        <div className="text-danger">
          {frm.errors.phone && frm.touched.phone ? (
            <span className="text-danger">{frm.errors.phone}</span>
          ) : (
            ""
          )}
        </div>
        <Button className="register__submit" variant="contained" type="submit">
        Đăng Ký
      </Button>
      <p className="register__redirect">
        Nếu bạn đã có tài khoản, click vào <Link to="/login">đây</Link> để đăng
        nhập
      </p>
      </form>
    </div>
  );
};

export default Register;
