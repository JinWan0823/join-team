"use client";

import DatePicker from "@/app/_components/club/clubActivity/DatePicker";
import DateWrap from "@/app/_components/club/clubActivity/DateWrap";
import FeedWriteImg from "@/app/_components/feed/write/FeedWriteImg";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const [images, setImages] = useState<File[]>([]);
  const [showImages, setShowImages] = useState<string[]>([]);
  const [text, setText] = useState("");
  const params = useParams();

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const [dateInfo, setDateInfo] = useState({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

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
      <FeedWriteImg
        images={images}
        setImages={setImages}
        showImages={showImages}
        setShowImages={setShowImages}
      />
      <textarea
        name="feedWrite"
        className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-b-[1px] outline-none"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <DateWrap setOpenDatePicker={setOpenDatePicker} dateInfo={dateInfo} />
      {openDatePicker && (
        <DatePicker
          setOpenDatePicker={setOpenDatePicker}
          dateInfo={dateInfo}
          setDateInfo={setDateInfo}
        />
      )}
    </section>
  );
}
