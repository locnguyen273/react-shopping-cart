/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getListProduct } from "../redux/reducers/productReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/configStore";

const UserTemplate = () => {
  const layoutStyle: any = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };
  const scrollToTop : any = {
    width: "40px",
    height: "40px",
    color: "#fff",
    background: "#000",
    minWidth: "0px",
    position: "fixed",
    bottom: "10%",
    right: "2%",
  };

  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const handleScrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    });
  };
  window.addEventListener("scroll", toggleVisible);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div style={layoutStyle}>
      <Header />
      <Outlet />
      <Footer />
      {visible && (
        <Button style={scrollToTop} onClick={handleScrollToTop}>
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </div>
  );
};

export default UserTemplate;
