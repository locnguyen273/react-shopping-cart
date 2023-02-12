import { Outlet } from "react-router-dom";

const AuthTemplate = () => {
  const styles : any = {
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
    backgroundImage: `url("https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "auto",
  }
  return (
    <div style={styles}>
      <Outlet />
    </div>
  )
}

export default AuthTemplate