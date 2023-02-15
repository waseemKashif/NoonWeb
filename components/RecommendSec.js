import { recomndData } from "@/recommentItemsData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import express from '../public/images/express.svg'

import "swiper/css";
import "swiper/css/navigation";

const RecommendSec =()=>{
    return (
      <div className=" pb-10">
        <div>
          <p className="font-bold py-5 md:text-xl sm:text-lg">Recommended for you</p>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
          allowSlideNext={true}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            740: {
              slidesPerView: 5,
              spaceBetween:2,
            },
          }}
        >
          {recomndData?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-gray-900 flex flex-col justify-start pb-5  "
              >
                <Image
                  src={item.view}
                  alt="slideImage"
                  className=" cursor-pointer"
                />
                <div className="flex flex-col justify-start items-start pt-2 font-semibold">
                  <p>{item.detail}</p>
                  <p className="text-gray-500 pt-2 pl-2">
                    AED{" "}
                    <span className="text-black font-semibold">{item.AED}</span>{" "}
                  </p>
                  <div className="pt-2 pl-2">
                    <Image
                      src={express}
                      alt="express-icon"
                      width={30}
                      height={5}
                      className=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}
export default RecommendSec;

