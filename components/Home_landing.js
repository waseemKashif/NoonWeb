import React from "react";
import Image from "next/image";
import listItems from "../public/images/listItems.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import slide1 from "../public/images/valantine.avif";
import slide2 from "../public/images/slide2.avif";
import slide3 from "../public/images/slide3.avif";
import slide4 from "../public/images/silde4.avif";
import slide5 from "../public/images/slide5.avif";
import slide6 from "../public/images/slide6.avif";
import slide7 from "../public/images/slide7.avif";
import sideImg from "../public/images/sideSlideImg.png";
import sideImg2 from "../public/images/sideSlideImg2.png";

const Home_landing = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  return (
    <div>
      <div>
        <Image src={listItems} alt="items" />
      </div>
      <div className=" bg-white">
        <div className=" flex justify-start  w-full h-full">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="middleSwiper "
            allowSlideNext={true}
            pagination={true}
            freeMode={true}
            autoplay={{
              disableOnInteraction: false,
            }}
          >
            {slides?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image src={item} alt="slideImage" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        <div className=" sm:flex hidden ">
          <Image
            src={sideImg}
            alt="SideImage"
            
          />

          <Image src={sideImg2} alt="SideImg2"  />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home_landing;
