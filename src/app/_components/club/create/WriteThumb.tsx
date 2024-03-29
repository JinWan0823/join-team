import Image from "next/image";
import { ChangeEvent, SetStateAction, Dispatch, useState } from "react";
import { GoAlert, GoFileMedia } from "react-icons/go";

interface ImageProps {
  images: File[];
  setImages: Dispatch<SetStateAction<File[] | []>>;
  showImages: string;
  setShowImages: Dispatch<SetStateAction<string>>;
}

export default function ClubUploadIMG({
  images,
  setImages,
  showImages,
  setShowImages,
}: ImageProps) {
  const handleAddImages = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files;
    if (image) {
      const currentImageUrl = URL.createObjectURL(image[0]);
      setShowImages(currentImageUrl);
      const fileImage = [image[0]];
      setImages(fileImage);
    }
  };

  return (
    <>
      <div className="my-[10px] w-full flex-center text-xl h-[210px] border-b-[1px] relative bg-[#fff] rounded-[8px] overflow-hidden border-[1px] border-[#878787]">
        {showImages ? (
          <Image
            src={showImages}
            width={200}
            height={200}
            alt={"Upload-img"}
            className="w-full h-full object-cover"
          ></Image>
        ) : (
          <span className="text-[#878787] text-md flex-center flex-col">
            <GoAlert className="text-lg mb-[4px]" />
            선택된 이미지가 없습니다.
          </span>
        )}
      </div>
      <label className="text-sm flex-center bg-[#3D97FF] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px] z-50">
        <GoFileMedia className="mr-[4px]" />
        이미지 선택
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          onChange={handleAddImages}
        />
      </label>
      {showImages ? (
        ""
      ) : (
        <p className="text-sm mt-[4px] text-red-400">
          * 대표 이미지를 업로드해주세요.
        </p>
      )}
    </>
  );
}
