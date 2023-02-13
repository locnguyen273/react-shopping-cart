import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { SliderType } from "../../redux/models/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Carousel = () => {
  const sliders = useSelector(
    (state: RootState) => state.slideReducer.sliders.data
  );

  return (
    <div className="carousel">
      {sliders?.length > 0 && (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {sliders?.map((item: SliderType) => {
            return (
              <SwiperSlide key={item._id} className="carousel__slider">
                <img
                  className="carousel__slider--image"
                  src={item.img}
                  alt={item.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
