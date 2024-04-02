import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { IoCameraSharp } from "react-icons/io5";
interface ImageProps {
  setImages: Dispatch<SetStateAction<File[] | []>>;
  showImages: string;
  setShowImages: Dispatch<SetStateAction<string>>;
}
export default function ProfileImg({
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
      <div className="relative inline-block">
        <div className="overflow-hidden w-[220px] h-[220px] rounded-[40px]">
          <Image
            src={showImages}
            alt="user-thumbnail"
            width={220}
            height={220}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <label className="bg-[#d5d5d5] absolute bottom-[-10px] right-[0px] p-[4px] rounded-[10px] cursor-pointer">
          <IoCameraSharp className="text-xl text-[#797979]" />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
            onChange={handleAddImages}
          />
        </label>
      </div>
    </>
  );
}
