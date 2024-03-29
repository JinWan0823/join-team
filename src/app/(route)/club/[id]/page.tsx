"use client";

import ClubActivity from "@/app/_components/club/ClubActivity";
import ClubBanner from "@/app/_components/club/ClubBanner";
import ClubInfo from "@/app/_components/club/ClubInfo";
import ClubInfoText from "@/app/_components/club/ClubInfoText";
import ClubMember from "@/app/_components/club/ClubMember";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const params = useParams();
  const url = `http://localhost:8080/club/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData>(url);
        setData(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      <ClubBanner images={data.images} />
      <ClubInfo
        title={data.clubName}
        location={data.location}
        joinedMember={data.joinedMember}
        maximumMember={data.maximumMember}
      />
      <div className="p-[10px]">
        <ClubInfoText text={data.information} />
        <ClubMember member={data.member} />
        {data.activity && <ClubActivity activity={data.activity} />}
        <button className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF] ">
          참가 신청하기
        </button>
      </div>
    </section>
  );
}
