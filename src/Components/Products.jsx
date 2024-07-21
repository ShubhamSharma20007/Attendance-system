import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Card from "./Card";
import Product from "./Product";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Itemcard from "./Itemcard";
import LandCard from "./landCard";
export const Products = () => {
  const card = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186812/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Mobiles_ueht5o.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186810/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Air_Conditioners_dmes8r.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186812/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Televisions_hilbar.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186816/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Refrigerators_jezg47.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186810/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Laptops_g9ymac.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186809/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Headphones_Earphones_w7ibqa.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365545/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Cooler_dx0xg8.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186810/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Home_Theatres_Soundbars_nqyuff.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186815/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Washing_Machines_t1r7fe.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186813/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Tablets_knivhx.png?tr=w-720",
    },
  ];

  const card1 = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186815/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Washing_Machines_t1r7fe.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186813/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Tablets_knivhx.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365551/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Wearable_1_gstxxr.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365551/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Wearable_1_gstxxr.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186811/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Kitchen_Appliances_mjwb3l.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186810/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Grooming_x2isvq.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365542/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Accessories_kafthb.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365546/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Fans_oq5qhv.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365547/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Microwave_pgj63e.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713365543/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/Cat%20Nav/Desktop/Camera_e8rnh5.png?tr=w-720",
    },
  ];

  const itemDetails = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715060773/Croma%20Assets/CMS/LP%20Page%20Banners/2024/IPL/May/HP_New-at-Croma_SenheiserTWS_6May2024_rilotz.png?tr=w-1024",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715234092/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/May/09052024/Apple%20Whats%20Hot/Mobile/MHP_New-at-Croma_ipadair_9May2024_iuffjr.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715060033/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/07052024/HP_New-at-Croma_AC_7may24_ii6wtw.png?tr=w-1024",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715234115/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/May/09052024/Apple%20Whats%20Hot/Mobile/MHP_New-at-Croma_Pencilpro_9May2024_oen2lv.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714982338/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/May/6th-7th%20May/desktop/HP_New-at-Croma_ref_6may24_hmiemh.png?tr=w-1024",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715234096/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/May/09052024/Apple%20Whats%20Hot/Mobile/MHP_New-at-Croma_Ipadpro_9May2024_xsv2yg.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715060035/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/07052024/HP_New-at-Croma_tab_7may24_tkgysa.png?tr=w-360",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715234093/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/May/09052024/Apple%20Whats%20Hot/Mobile/MHP_New-at-Croma_Keyboard_9May2024_j0lxve.png?tr=w-360",
    },
  ];

  return (
    <>
      <div className="max-w-screen-lg px-0  sm:px-3 lg:px-0  mx-auto">
        <div>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: ".swiper-button-nextcus1",
              prevEl: ".swiper-button-prevcus1",
            }}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper pt-5 md:pt-10  relative"
          >
            <SwiperSlide className="sm:px-10 px-5  flex justify-center sm:gap-3 sm:flex-nowrap flex-wrap w-full ">
              {card.map((item, index) => {
                return <Card img={item.img} key={index} />;
              })}
            </SwiperSlide>
            <SwiperSlide className="sm:px-10  px-5 flex justify-center sm:gap-3 sm:flex-nowrap flex-wrap w-full ">
              {card1.map((item, index) => {
                return <Card img={item.img} key={index} />;
              })}
            </SwiperSlide>
            <div className="swiper-button-prevcus1  absolute left-[0px] z-30 top-[50%]  text-white">
              <ChevronLeft />
            </div>
            <div className="swiper-button-nextcus1  absolute right-[0px] z-30 top-[50%] text-white">
              <ChevronRight />
            </div>
          </Swiper>
        </div>

        <div className="w-full my-10 flex gap-3 px-3 sm:px-3 md:px-0">
          <div className="w-1/2 ">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713244896/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/neu_offers1_ao2uss.png?tr=w-1024"
              alt=""
              className="w-full h-full object-cover rounded-md hidden  md:block"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713244896/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/neu_offers_mob1_ftmsvg.png?tr=w-360"
              alt=""
              className="w-full h-full object-cover rounded-md block  md:hidden"
            />
          </div>

          <div className="w-1/2  rounded-md">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713849331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/other/April/23042024/HP_TNRL_22April2024_ekmdao.jpg?tr=w-1024"
              alt=""
              className="w-full h-full object-cover rounded-md  hidden  md:block"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713849332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/other/April/23042024/MHP_TNRL_22April2024_ppudc9.jpg?tr=w-360"
              alt=""
              className="w-full h-full object-cover rounded-md  block  md:hidden "
            />
          </div>
        </div>
        <div className="pb-2 pt-5 px-3 sm:px-3 md:px-0">
          <h1 className="text-white font-regular text-2xl px-3 sm:px-0">
            Exciting Bank Offers For You
          </h1>
          <Product />
        </div>
        <div className="mt-5 px-3 sm:px-3 md:px-0 ">
          <h1 className="text-white font-regular text-2xl  pb-8">What's Hot</h1>
          <div className="flex gap-2 mb-2 flex-wrap justify-between p-3 sm:p-0 ">
            {itemDetails.map((item, index) => (
              <Itemcard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-10 px-3 sm:px-3 md:px-0">
          <h1 className="text-white font-regular text-2xl px-3 sm:px-0 pb-8">
            No More Worrying About Your Appliances
          </h1>
          <LandCard />
        </div>
      </div>
    </>
  );
};
