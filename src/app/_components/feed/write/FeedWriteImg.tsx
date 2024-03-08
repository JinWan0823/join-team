import {
  ChangeEvent,
  ReactElement,
  ReactHTML,
  ReactHTMLElement,
  useState,
} from "react";
import { GoFileMedia, GoTrash, GoAlert } from "react-icons/go";
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
    <div className="file-upload w-full flex-center text-xl h-[410px] border-b-[1px] relative bg-[#fff]">
      {showImages.length > 1 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="swiper-core h-full"
        >
          {showImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt={"Upload-img"}
                  className="w-full h-full object-cover"
                />
                <button
                  className="text-sm flex-center bg-[#333] absolute top-[10px] right-[10px] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px] z-50"
                  onClick={() => handleDeleteImg(idx)}
                >
                  <GoTrash /> 삭제
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : showImages.length === 1 ? (
        <div className="w-full h-full relative">
          <Image
            src={showImages[0]}
            width={200}
            height={200}
            alt={"Upload-img"}
            className="w-full h-full object-cover"
          />
          <button
            className="text-sm flex-center bg-[#333] absolute top-[10px] right-[10px] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px] z-50"
            onClick={() => handleDeleteImg(0)}
          >
            <GoTrash /> 삭제
          </button>
        </div>
      ) : (
        <span className="text-[#878787] text-md flex-center flex-col">
          <GoAlert className="text-lg mb-[4px]" />
          선택된 이미지가 없습니다.
        </span>
      )}
      <div className="absolute bottom-[10px] left-[50%] translate-x-[-50%] w-[calc(100%-20px)] z-50 flex items-center justify-between">
        <label
          htmlFor="file"
          className="text-sm flex-center bg-[#3D97FF] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px] z-50"
        >
          <GoFileMedia className="mr-[4px]" />
          파일선택
          <input
            type="file"
            multiple
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
            onChange={handleAddImages}
          />
        </label>

        <div className="text-sm flex-center bg-[#333] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px] z-50">
          {showImages.length} / 10
        </div>
      </div>
    </div>
  );
}
