import React from "react";
import Slider from "react-slick";
import "./style.scss";
import { sliderItems } from "../../assets/data";
import { SliderType } from "../../types/index";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HandlePrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#5c5c5c73",
        position: "absolute",
        top: "50%",
        left: "1%",
        height: "70px",
        width: "45px",
        transform: "translateY(-50%)",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{
        color: "#fff",
        height: "100%",
        width: "70%",
        display: "block",
        margin: "0 0 0 10px",
      }}/>
    </div>
  );
};

const HandleNextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#5c5c5c73",
        position: "absolute",
        top: "50%",
        right: "1%",
        height: "70px",
        width: "45px",
        transform: "translateY(-50%)",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{
        color: "#fff",
        height: "100%",
        width: "70%",
        display: "block",
        margin: "0 0 0 10px",
      }}/>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HandleNextArrow />,
    prevArrow: <HandlePrevArrow />,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {sliderItems.length > 0 &&
          sliderItems.map((item: SliderType) => {
            return (
              <div key={item.id} className="carousel__slider">
                <img
                  className="carousel__slider--image"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
