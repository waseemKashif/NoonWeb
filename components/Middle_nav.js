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
    <div className=" flex flex-row  bg-gray-50 justify-center items-center divide-x  flex-wrap sm:flex-nowrap h-full  w-full  ">
      <DropdownComponent className="order-second sm:order-first" />
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="middleSwiper sm:flex-1 order-first sm:order-2 flex-nowrap overflow-hidden "
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          580: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          740: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          840: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          960: {
            slidesPerView: 7,
            spaceBetween: 2,
          },
        }}
      >
        {ItemsData?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex bg-gray-50  sm:text-[10px] p-2 whitespace-nowrap cursor-pointer hover:bg-gray-200  mySwiperSlide md:font-bold text-xs sm:text-sm "
            >
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="order-last">
        <Image
          src={grovery}
          alt="logogif"
          className="lg:w-44 md:40 sm:w-24 xs:w-12 h-5 px-2 pb-1 sm:pb-0  "
        />
      </div>
    </div>
  );
};

export default Middle_nav;
