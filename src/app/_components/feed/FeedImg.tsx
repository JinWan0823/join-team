"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

interface FeedImgProsp {
  feedImg: string[];
}

export default function FeedImg({ feedImg }: FeedImgProsp) {
  const [imgNum, setImgNum] = useState(1);

  const handleSwiperChange = (swiper: any) => {
    console.log(swiper);
    setImgNum(swiper.activeIndex + 1);
  };

  return (
    <>
      <div className="w-full h-[380px] relative">
        <div className="number absolute bottom-[10px] right-[10px] px-[10px] py-[4px] rounded-[8px] bg-[#3333339e] z-[999] text-bold text-[#fff] text-sm">
          {`${imgNum} / ${feedImg.length}`}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="swiper-core h-full"
          onSlideChange={(swiper) => handleSwiperChange(swiper)}
        >
          {feedImg.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  width={420}
                  height={380}
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
