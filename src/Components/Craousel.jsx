import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
const Craousel = ({ caraouselImg, condition }) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      effect={"fade"}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper h-[50vh] sm:h-[40vh]  lg:h-[90vh] w-full relative"
    >
      {!condition
        ? caraouselImg.map((item, index) => (
            <SwiperSlide key={index} className="object-cover w-full h-full">
              <img
                className="object-cover w-full h-full hidden sm:block"
                src={item.img}
                alt={item.alt}
              />
              <img
                className="  w-full h-full block sm:hidden"
                src={item.mobImg}
                alt={item.alt}
              />
            </SwiperSlide>
          ))
        : caraouselImg.map((item, index) => (
            <SwiperSlide key={index} className="object-cover w-full h-full">
              <img
                className="object-cover w-full h-full hidden sm:block "
                src={item.img}
                alt={item.alt}
              />
              <img
                className="object-cover w-full h-full block sm:hidden brightness-50"
                src={item.mobImg}
                alt={item.alt}
              />
              <div className="sm:left-[45%] left-2 sm:top-20  bottom-10 absolute ">
                <h1 className="text-white font-semibold text-w-lg  sm:max-w-xl text-4xl  sm:text-6xl">
                  {item.title}
                </h1>

                <p className="text-white mt-10 text-lg">{item.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Craousel;
