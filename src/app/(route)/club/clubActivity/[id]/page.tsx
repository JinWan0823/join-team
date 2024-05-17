"use client";

import DatePicker from "@/app/_components/club/clubActivity/DatePicker";
import DateWrap from "@/app/_components/club/clubActivity/DateWrap";
import ClubUploadIMG from "@/app/_components/club/create/WriteThumb";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData, putImgData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/navigation";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const [images, setImages] = useState<File[]>([]);
  const [showImages, setShowImages] = useState("");
  const [content, setContent] = useState("");
  const [activityName, setActivityName] = useState("");
  const [location, setLocation] = useState("");
  const params = useParams();
  const router = useRouter();

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const [dateInfo, setDateInfo] = useState({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 520,
  };

  const handleWriteActivity = async () => {
    const date = `${dateInfo.year}-${dateInfo.month}-${dateInfo.date}`;
    if (!images) {
      return;
    } else {
      try {
        const formData = new FormData();
        formData.append("activityName", activityName);
        formData.append("content", content);
        formData.append("date", date);
        formData.append("location", location);
        const compressionFile = await imageCompression(images[0], options);
        formData.append("images", compressionFile);
        const result = await putImgData(
          `${joinTeamUrl}/club/${params.id}`,
          formData
        );
        router.push(`/club/${params.id}`);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData>(
          `${joinTeamUrl}/club/${params.id}`
        );
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);
  if (!data) return null;

  return (
    <section className="max-h-[calc(100vh-66px)] bg-[#fff] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      <div className="bg-[#ebebeb] p-[10px]">
        <p className="font-bold">{data.clubName}</p>
      </div>
      <div className="p-[10px]">
        <input
          type="text"
          className="w-full p-[4px] py-[6px] outline-none border-[1px] border-[#878787] rounded-[4px] focus:border-[#333]"
          placeholder="제목을 입력해주세요."
          onChange={(e) => setActivityName(e.target.value)}
        />
        <ClubUploadIMG
          images={images}
          setImages={setImages}
          showImages={showImages}
          setShowImages={setShowImages}
        />
      </div>
      <textarea
        name="feedWrite"
        className="w-full h-[180px]  whitespace-pre-wrap resize-none p-[10px] border-y-[1px] outline-none"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <DateWrap setOpenDatePicker={setOpenDatePicker} dateInfo={dateInfo} />
      {openDatePicker && (
        <DatePicker
          setOpenDatePicker={setOpenDatePicker}
          dateInfo={dateInfo}
          setDateInfo={setDateInfo}
        />
      )}
      <input
        type="text"
        className="flex items-center justify-between w-full p-[10px] border-b-[1px] text-[#878787] cursor-pointer focus:outline-none"
        placeholder="위치를 입력해주세요"
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button
        className="absolute bottom-[70px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF]"
        onClick={() => handleWriteActivity()}
      >
        저장하기
      </button>
    </section>
  );
}
