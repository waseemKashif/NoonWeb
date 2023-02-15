import React from "react";
// import Nav_swiper from "./navSwiper";
import grovery from "../public/images/grocerylogo.gif";
import Image from "next/image";
import DropdownComponent from "./Dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Navigation } from "swiper";


const Middle_nav = () => {
  // const []
  const ItemsData = [
    "ELECTRONICS",
    "MEN",
    "WOMEN",
    "HOME",
    "BEAUTI",
    "BABY & TOYS",
    "SPORTS",
    "Dance",
    "SELLERS",
    "SELL ON NOON",
  ];
  return (
    <div className=" flex flex-row  justify-center items-center  flex-wrap sm:flex-nowrap h-full  w-full  ">
      <DropdownComponent className="order-second sm:order-first" />
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="middleSwiper sm:flex-1 order-first sm:order-2 flex-nowrap overflow-hidden "
        breakpoints={{
          320:{
            slidesPerView:2,
            spaceBetween:10
          },
          480:{
            slidesPerView:4,
            spaceBetween:5
          },
           740: {
      slidesPerView: 6,
      spaceBetween: 2
    }
        }}
      >
        {ItemsData?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex  sm:text-[10px] p-2 whitespace-nowrap cursor-pointer hover:bg-gray-200 mySwiperSlide md:font-semibold text-sm sm:text-lg "
            >
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Image
        src={grovery}
        alt="logogif"
        className="md:w-52 sm:w-40 xs:w-20 h-8 px-2 order-last "
      />
    </div>
  );
};

export default Middle_nav;
