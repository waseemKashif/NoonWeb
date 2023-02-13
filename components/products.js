import React from "react";
import Image from "next/image";
import { MegaDelsData } from "@/MoretoShop";
import { MoreToShopData } from "@/MoretoShop";
import focus from "../public/images/infoucs.avif";
import oneMob from "../public/images/oneMob.avif";
import samsung from "../public/images/samsung23.avif";

const product = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3 ">
      <div className="bg-white p-4 m-3">
        <Image src={MoreToShopData[0]} alt="title" />

        <div className="grid grid-cols-2 gap-5">
          {MoreToShopData?.map((item, index) => {
            return (
              <>
                {index == 0 ? (
                  " "
                ) : (
                  <Image
                    src={item}
                    alt="moreImage"
                    className="cursor-pointer"
                    key={index}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className="bg-white p-4 m-3">
        <Image src={MegaDelsData[0]} alt="title" />

        <div className="grid grid-cols-2 gap-5">
          {MegaDelsData?.map((item, index) => {
            return (
              <>
                {index == 0 ? (
                  " "
                ) : (
                  <Image
                  key={index}
                    src={item}
                    alt="moreImage"
                    className="cursor-pointer"
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="bg-white p-4 m-3">
        <Image src={focus} alt="foucsIcon" />
        <div className="flex flex-col gap-4">
          <Image src={oneMob} alt="OnePlus image" className="cursor-pointer" />
          <Image src={samsung} alt="samsung image" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default product;
