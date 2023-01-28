import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UserTemplate = () => {
  const layoutStyle : any = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "space-between",
  }
  return (
    <div style={layoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplate;
