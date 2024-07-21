import React from "react";
import Header from "./Components/Header";
import Craousel from "./Components/Craousel";
import LocomotiveScroll from "locomotive-scroll";
import { Products } from "./Components/Products";
import Collaboration from "./Components/Collaboration";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const caraouselImg = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713554114/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Summer%20LP%20-New/HP_SummerCampaign_19April24_daunkc.png",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713554109/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Summer%20LP%20-New/MHP_SummerCampaign_19April24_qxdufi.png",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715060038/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/07052024/HP_Rotating_gaminglaptop_07May2024_bhcqnq.jpg",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715146652/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/08052024/MHP_Rotating_AC_8May24_goigwe.jpg",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715060037/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/07052024/HP_Rotating_AC_07May2024_lvfrrt.jpg",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715146653/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/08052024/MHP_Rotating_TV_8May24_qn11f6.jpg",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715083660/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/08052024/Desktop/HP_Rotating_Ref_8May24_sdygdz.jpg",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715083658/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/08052024/Mobile/MHP_Rotating_Ref_8May24_kc2mtl.jpg",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714987955/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/07052024/Desktop/HP_Rotating_Printers_07May2024_ilmbpw.jpg",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715169611/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/09052024/Mobile/MHP_Rotating_OnePlusNord_09May2024_gunbtl.jpg",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715061940/Croma%20Assets/CMS/LP%20Page%20Banners/2024/IPL/May/HP_Rotating_Speakers_07May2024_adqatz.jpg",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715226307/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/May/09052024/MHP_Rotating_Printers_09May2024_rrrsvk.jpg",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713964240/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/April/IPL/HP_IPL_2_24April2024_ongdvh.png",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715169611/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/09052024/Mobile/MHP_Rotating_FLWM_09May2024_utel3r.jpg",
    },
  ];

  const caraouselImg1 = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743524/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Desktop/HP_Blog_1_3May2023_rduyyl.png",
      title: "Here’s how ChatGPT helped me plan a vacation to Japan",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743927/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Mobile/MHP_Blog_1_3May2023_jntcpi.png",
      subtitle:
        "Have AI tools reached a point where they can take care of your summer travels all by themselves? Read on to find out !",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743606/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Desktop/HP_Blog_3_3May2023_dv2r5l.png",
      title: "How NVIDIA is using AI so you can game better",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743931/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Mobile/MHP_Blog_2_3May2023_lwjlrv.png",
      subtitle:
        "RTX GPUs are powering AI upscaling, higher framerates and more",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743701/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Desktop/HP_Blog_4_3May2023_wcpjco.png",
      title:
        "How to protect your appliances from overheating during a heatwave",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743935/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Mobile/MHP_Blog_3_3May2023_dh5fen.png",
      subtitle: "Keep your home and personal appliances cool with these tips",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743528/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Desktop/HP_Blog_2_3May2023_f9jklv.png",
      title: "Important guidelines to keep in mind during AC installation",
      mobImg:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714743936/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/May/Blog%20Banners/Mobile/MHP_Blog_4_3May2023_czr53m.png",
      subtitle:
        "Make sure your AC is setup and installed properly for a worry-free experience",
    },
  ];
  const chunks = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713269877/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/Croma_Collections_aer8cq.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278421/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/04_6_go4wv6.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278435/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/03_30_fhwssf.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278460/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/01_50_sa0hk3.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278428/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/02_17_epxyzy.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713273508/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/E-waste_disposal_-_Desktop_wewkot.png?tr=w-720",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713273472/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/Deals_of_the_week_-_Desktop_cdvjjx.png?tr=w-720",
    },
  ];
  const parentImg = [
    {
      Img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743257/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/1Gift_dflts4.png?tr=w-480",
    },
    {
      Img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743258/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/Indulge_rve6v9.png?tr=w-480",
    },
  ];

  const chunks2 = [
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249301/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/1_trfali.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713447619/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/2_kj0z3t.png?tr=w-360",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/4_akzof7.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249304/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/2_qcuix7.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249325/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/7_euz6d8.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249330/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/8_ejmzg3.png?tr=w-480",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249316/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/5_xsvgvj.png?tr=w-480",
    },
  ];

  const parentImg2 =
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743309/Croma%20Assets/CMS/Testing/2024/March/18th/Why%20Croma/Desktop/JPG/Why-Croma_t2lgxr.png?tr=w-1024";
  const parentImgmob =
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713377577/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/MHP_Neubanner_18April24_ci1qy8.png?tr=w-720";
   
  return (
    <>
  
      <Craousel caraouselImg={caraouselImg} />
      <Products />
      <Craousel caraouselImg={caraouselImg1} condition={true} />
      <Collaboration
        imgs={chunks}
        parentImage={parentImg}
        title={"Exclusively Curated For You"}
      />
      <Collaboration
        imgs={chunks2}
        parentImage={parentImg}
        title={"Brands We Are Passionate About"}
        condition={true}
        subtitle={"Why Croma?"}
        parentImg2={parentImg2}
        parentImgmob={parentImgmob}
      />
      <Footer />
    </>
  );
};

export default App;
