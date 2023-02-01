import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { loginApi } from "../../redux/reducers/userReducer";
import { AppDispatch } from "../../redux/configStore";
import "./style.scss";
import Typography from "@mui/material/Typography";

const eye = <FontAwesomeIcon icon={faEye} />;
export default function Login() {
  // const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
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
        .min(3, "pass từ 3 - 32 ký tự !")
        .max(32, "pass từ 3 - 32 ký tự !"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className="sign-in">
      <div className="container_form">
        <div className="signin-content">
          <div className="login">
            <Typography variant="h2" className="login__title">
              Đăng nhập
            </Typography>
            <form
              className="login-form"
              id="login-form"
              onSubmit={frm.handleSubmit}
            >
              <div className="d-flex flex-row align-items-center mb-4">
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    placeholder="Tên đăng nhập"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.username && frm.touched.username ? (
                      <span className="text-danger">{frm.errors.username}</span>
                    ) : (
                      ""
                    )}
                  </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className=" login-form__password">
                  <input
                    type={passwordShow ? "text" : "password"}
                    className="login-form__password"
                    id="password"
                    name="password"
                    required
                    placeholder="Mật khẩu"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {/* <div className="text-danger position-absolute mt-1">
                    {frm.errors.password && frm.touched.password ? (
                      <span className="text-danger">{frm.errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div> */}
                  <button
                    type="button"
                    className="login-form__show"
                    style={{
                      position: "absolute",
                      top: 8.5,
                      right: 10,
                      border: "none",
                      opacity: "0.5",
                      background: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <i>{eye}</i>
                  </button>
                </div>
              </div>
              {/* <div className="form-group register d-flex justify-content-start align-items-baseline gap-3 ms-5 mt-5"> */}
              {/* <button className="btn btn-success login" type="submit">
                  Login
                </button> */}
              {/* <NavLink className="text_register" to={"/register"}>
                  Register now ?
                </NavLink> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
