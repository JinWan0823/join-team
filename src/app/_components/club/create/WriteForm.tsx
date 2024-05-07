"use client";
import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import ClubUploadIMG from "./WriteThumb";
import Category from "./Category";
import imageCompression from "browser-image-compression";
import { postImgData } from "@/app/_utils/axios";
import LocationBtn from "./LocationBtn";
import Location from "./Location";
import { joinTeamUrl } from "@/app/_utils/url";
import { useRouter } from "next/navigation";

interface ResultType {
  insertedId: string;
}

export default function WriteForm() {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [showImages, setShowImages] = useState("");
  const [clubName, setClubName] = useState("");
  const [information, setInformation] = useState("");
  const [locationToggle, setLocationToggle] = useState(false);
  const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");

  const router = useRouter();

  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 520,
  };

  const handleClubData = async () => {
    try {
      const formData = new FormData();
      formData.append("clubName", clubName);
      formData.append("category", selectedCategory.join(""));
      formData.append("information", information);
      formData.append("sido", sido);
      formData.append("gugun", gugun);
      if (images) {
        const compressionFile = await imageCompression(images[0], options);
        formData.append("images", compressionFile);
      }
      const result = await postImgData(`${joinTeamUrl}/club`, formData);
      router.push(`/club/${(result as ResultType).insertedId}`);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  useEffect(() => {
    setGugun("");
  }, [sido]);

  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="text-sm">
        <div className="p-[10px]">
          <input
            type="text"
            className="w-full p-[4px] py-[6px] outline-none border-[1px] border-[#878787] rounded-[4px] focus:border-[#333]"
            placeholder="클럽 이름을 입력해주세요."
            onChange={(e) => setClubName(e.target.value)}
          />
          <ClubUploadIMG
            images={images}
            setImages={setImages}
            showImages={showImages}
            setShowImages={setShowImages}
          />
        </div>
        <textarea
          placeholder="클럽에 대해 소개해주세요."
          className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-y-[1px] outline-none text-sm"
          onChange={(e) => setInformation(e.target.value)}
        ></textarea>
        <CategoryBtn
          setCategoryToggle={setCategoryToggle}
          selectedCategory={selectedCategory}
        />
        <LocationBtn
          setLocationToggle={setLocationToggle}
          sido={sido}
          gugun={gugun}
        />
      </div>
      {categoryToggle && (
        <Category
          setCategoryToggle={setCategoryToggle}
          selectedCategories={selectedCategory}
          setSelectedCategories={setSelectedCategory}
        />
      )}
      {locationToggle && (
        <Location
          setLocationToggle={setLocationToggle}
          sido={sido}
          setSido={setSido}
          gugun={gugun}
          setGugun={setGugun}
        />
      )}
      <button
        onClick={() => handleClubData()}
        className="w-[calc(100%-10px)] text-[#fff] text-md py-[10px] mb-[10px] mt-[20px] mx-auto rounded-[8px] bg-[#3D97FF] pointer-events-auto block"
      >
        클럽 만들기
      </button>
    </div>
  );
}
