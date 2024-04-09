"use client";

import ClubActivity from "@/app/_components/club/ClubActivity";
import ClubBanner from "@/app/_components/club/ClubBanner";
import ClubInfo from "@/app/_components/club/ClubInfo";
import ClubInfoText from "@/app/_components/club/ClubInfoText";
import ClubMember from "@/app/_components/club/ClubMember";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData, postData } from "@/app/_utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData>(`/club/${params.id}`);
        setData(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);

  const handleJoinClub = async () => {
    try {
      const result = await postData(`/club/join/${params.id}`, {});
      console.log(result);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

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
        <ClubMember member={data.member} clubMaster={data.master} />
        {data.activity && <ClubActivity activity={data.activity} />}
        <button
          className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF]"
          onClick={() => handleJoinClub()}
        >
          참가 신청하기
        </button>
      </div>
    </section>
  );
}
