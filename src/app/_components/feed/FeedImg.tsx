"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

interface FeedImgProsp {
  feedImg: string[];
}

export default function FeedImg({ feedImg }: FeedImgProsp) {
  return (
    <>
      <div className="w-full h-[380px] bg-[#333]">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="swiper-core h-full"
        >
          {feedImg.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt={`Feed-img-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
