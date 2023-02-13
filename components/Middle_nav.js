import React from "react";
import Nav_swiper from "./navSwiper";
import grovery from "../public/images/grocerylogo.gif";
import Image from "next/image";

const Middle_nav = () => {
  const Data = [
    "ELECTRONICS",
    "MEN",
    "WOMEN",
    "HOME",
    "BEAUTI",
    "BABY & TOYS",
    "SPORTS",
    "Dance",
  ];
  return (
    <div className="flex h-fit items-center">
      <Nav_swiper data={Data} className="px-2" />
      <Image
        src={grovery}
        alt="logogif"
        className="md:w-52 sm:w-40 xs:w-20 h-8 px-2"
      />
    </div>
  );
};

export default Middle_nav;
