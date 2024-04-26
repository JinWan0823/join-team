"use client";

import ClubActivity from "@/app/_components/club/ClubActivity";
import ClubBanner from "@/app/_components/club/ClubBanner";
import ClubInfo from "@/app/_components/club/ClubInfo";
import ClubInfoText from "@/app/_components/club/ClubInfoText";
import ClubMember from "@/app/_components/club/ClubMember";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData, postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData>();
  const [update, setUpdate] = useState(false);
  const [chkMaster, setChkMaster] = useState(false);
  const params = useParams();

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
  }, [update]);

  const handleJoinClub = async () => {
    try {
      const result = await postData(
        `${joinTeamUrl}/club/join/${params.id}`,
        {}
      );
      console.log(result);
      setUpdate((prev) => !prev);
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
        <ClubActivity
          activity={data.activity}
          clubMaster={data.master}
          setChkMaster={setChkMaster}
        />
        {chkMaster ? (
          <Link
            href={`/club/clubActivity/${params.id}`}
            className="w-full block text-center text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF]"
          >
            클럽 활동 추가하기
          </Link>
        ) : (
          <button
            className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF]"
            onClick={() => handleJoinClub()}
          >
            참가 신청하기
          </button>
        )}
      </div>
    </section>
  );
}
