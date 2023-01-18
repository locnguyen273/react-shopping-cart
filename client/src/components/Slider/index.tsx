import { useEffect, useState } from "react";
import { sliderItems } from "../../assets/data";
import Slider from "react-slick";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./style.scss";

export interface ISlider {
  id: number;
  img: string;
  imgMobile: string;
  title: string;
}

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "2%"
      }}
      onClick={onClick}
    >
      <ArrowForwardIosOutlinedIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "2%"
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewOutlinedIcon />
    </div>
  );
}

const Sliders = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if(window.innerWidth <= 425) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [setIsMobile]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="slider">
      {sliderItems.length > 0 &&
        sliderItems.map((item: ISlider) => {
          return (
            <div key={item.id}>
              <img
                className="slider__image"
                src={isMobile ? item.imgMobile : item.img}
                alt={item.title}
              />
            </div>
          );
        })}
    </Slider>
  );
};

export default Sliders;
