import React, { useRef, useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = () => {
  return (
    <>
      <div className="mt-5 mb-5 relative sm:block hidden">
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-nextcus",
            prevEl: ".swiper-button-prevcus",
          }}
          mousewheel={true}
          allowTouchMove={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="pt-4 px-10">
            <div className="w-full flex gap-2 items-center">
              <div className="w-1/3">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714655578/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/2%20split/BrandxBank/Revised/02052024/HP_2Split_MFYMP_ICICI_2May2024_rbdxmo.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
              <div className="w-1/3">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713455293/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/Wed%20-%20Federal/LP_2Split_MFYMP_Wed1_18April2024_nf0hks.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
              <div className="w-1/3">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714397585/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/2%20split/Wed%20-%20Federal/New%202%20Split/HP_2Split_MFYMP_Fedrel2_29April2024_hhz5wg.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-4 pl-10">
       
              <div className="w-1/3">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714655578/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/2%20split/BrandxBank/Revised/02052024/HP_2Split_MFYMP_Brands_HDFC_ICICI_2May2024_mltbxp.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
            
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prevcus absolute left-[0px] top-[40%] z-30 text-white">
          <ChevronLeft />
        </div>
        <div className="swiper-button-nextcus absolute right-[0px] top-[40%] z-30 text-white">
          <ChevronRight />
        </div>
      </div>


      <div className="my-5 relative sm:hidden block">
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-nextcus",
            prevEl: ".swiper-button-prevcus",
          }}
          mousewheel={true}
          allowTouchMove={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="pt-4">
            <div className="w-full flex gap-2 px-10 items-center">
              <div className="w-full ">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714655578/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/2%20split/BrandxBank/Revised/02052024/HP_2Split_MFYMP_ICICI_2May2024_rbdxmo.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
             
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-3">
            <div className="w-full flex px-10 gap-3 items-center">
            <div className="w-full ">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713455293/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/Wed%20-%20Federal/LP_2Split_MFYMP_Wed1_18April2024_nf0hks.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-3">
            <div className="w-full flex px-10 gap-3 items-center">
            <div className="w-full ">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713455293/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/Wed%20-%20Federal/LP_2Split_MFYMP_Wed1_18April2024_nf0hks.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-3">
            <div className="w-full flex gap-3 items-center px-10">
            <div className="w-full ">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714397585/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/April/BAU/Homepage%20New%20Layout/BAU/2%20split/Wed%20-%20Federal/New%202%20Split/HP_2Split_MFYMP_Fedrel2_29April2024_hhz5wg.png?tr=w-720"
                  className="rounded-md"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prevcus absolute left-[0px] top-[40%] text-white z-30">
          <ChevronLeft />
        </div>
        <div className="swiper-button-nextcus absolute right-[0px] top-[40%] text-white z-30">
          <ChevronRight />
        </div>
      </div>
    </>
  );
};

export default Product;
