import React from "react";
import ItemsData from "../src/itemsdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

const BottomSildeItems = () => {
  return (
    <div>
      <Swiper
        slidesPerView={10}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
        // pagination={true}
      >
        {ItemsData.map((item) => {
          return (
            <SwiperSlide className="">
              <Image
                src={item.show}
                alt="slideImage"
                className="pt-[30px] cursor-pointer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BottomSildeItems;
