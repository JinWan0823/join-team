import { ChangeEvent, SetStateAction, Dispatch, useState } from "react";
import { GoFileMedia, GoTrash, GoAlert } from "react-icons/go";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImageProps {
  images: File[];
  setImages: Dispatch<SetStateAction<File[] | []>>;
  showImages: string[];
  setShowImages: Dispatch<SetStateAction<string[]>>;
}

export default function FeedWriteImg({
  images,
  setImages,
  showImages,
  setShowImages,
}: ImageProps) {
  console.log(images);
  const handleAddImages = (e: ChangeEvent<HTMLInputElement>) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    if (imageLists) {
      let newImages: File[] = images ? [...images] : []; // 기존 이미지 배열 복사
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        newImages.push(imageLists[i]);
      }

      if (newImages.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
        newImages = newImages.slice(0, 10);
      }
      setShowImages(imageUrlLists);
      setImages(newImages); // 기존 이미지 배열을 업데이트
    }
  };
  const handleDeleteImg = (id: number) => {
    console.log(images);
    setShowImages(showImages.filter((_, idx) => idx !== id));
    setImages(images.filter((_, idx) => idx !== id));
  };

  return (
    <div className="file-upload w-full flex-center text-xl h-[410px] border-b-[1px] relative bg-[#fff]">
      {showImages.length > 0 ? (
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

        <div className="text-sm flex-center bg-[#333] text-[#fff] px-[10px] py-[6px]  rounded-[8px] z-50">
          {showImages.length} / 10
        </div>
      </div>
    </div>
  );
}
