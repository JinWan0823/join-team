import {
  ChangeEvent,
  ReactElement,
  ReactHTML,
  ReactHTMLElement,
  useState,
} from "react";
import { GoFileMedia } from "react-icons/go";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FeedWriteImg() {
  const [showImages, setShowImages] = useState<string[]>([]);

  const handleAddImages = (e: ChangeEvent<HTMLInputElement>) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    if (imageLists) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImg = (id: number) => {
    setShowImages(showImages.filter((_, idx) => idx !== id));
  };

  return (
    <div className="file-upload w-full flex-center text-xl h-[310px] border-b-[1px] relative">
      {showImages ? (
        <Swiper slidesPerView={1} spaceBetween={0} className="swiper-core">
          {showImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt={"ㅇㅇ"}
                  className="w-full h-full"
                />
                <button onClick={() => handleDeleteImg(idx)}>삭제</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "+"
      )}
      <div className="absolute bottom-[10px] left-[10px]">
        <label
          htmlFor="file"
          className="text-sm flex-center bg-[#3D97FF] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px]"
        >
          <GoFileMedia className="mr-[4px]" />
          파일선택
          <input
            type="file"
            multiple
            id="file"
            className="hidden"
            onChange={handleAddImages}
          />
        </label>
      </div>
    </div>
  );
}
