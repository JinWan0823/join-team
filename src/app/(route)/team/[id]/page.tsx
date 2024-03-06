"use client";
import TeamActivity from "@/app/_components/team/TeamActivity";
import TeamBanner from "@/app/_components/team/TeamBanner";
import TeamInfo from "@/app/_components/team/TeamInfo";
import TeamInfoText from "@/app/_components/team/TeamInfoText";
import TeamMember from "@/app/_components/team/TeamMember";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const params = useParams();
  const url = `http://localhost:9999/club/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData>(url);
        console.log(result);
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
      <TeamBanner />
      <TeamInfo
        title={data.clubName}
        location={data.location}
        joinedMember={data.joinedMember}
        maximumMember={data.maximumMember}
      />
      <div className="p-[10px]">
        <TeamInfoText text={data.information} />
        <TeamMember member={data.member} />
        <TeamActivity activity={data.activity} />
        <button className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF] ">
          참가 신청하기
        </button>
      </div>
    </section>
  );
}
