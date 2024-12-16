import Link from "next/link";
import ClubActivity from "./ClubActivity";
import ClubBanner from "./ClubBanner";
import ClubInfo from "./ClubInfo";
import ClubInfoText from "./ClubInfoText";
import ClubMember from "./ClubMember";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getData } from "@/app/_utils/axios";
import { ClubDetailData } from "@/app/_utils/Interface";
import { joinTeamUrl } from "@/app/_utils/url";
import ClubJoinBtn from "./ClubJoinBtn";

interface ClubProps {
  userId: string;
  params: string;
  totalMemberToggle: boolean;
  setTotalMemberToggle: Dispatch<SetStateAction<boolean>>;
  setClubActivityToggle: Dispatch<SetStateAction<boolean>>;
  clubActivityToggle: boolean;
}

export default function ClubPage({
  userId,
  params,
  totalMemberToggle,
  setTotalMemberToggle,
  setClubActivityToggle,
  clubActivityToggle,
}: ClubProps) {
  const [data, setData] = useState<ClubDetailData>();
  const [update, setUpdate] = useState(false);
  const [chkMaster, setChkMaster] = useState(false);
  const [joinedMember, setJoinedMember] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData>(
          `${joinTeamUrl}/club/${params}`
        );
        setData(result);
        setJoinedMember(result.isJoined);
      } catch (error) {
        console.error("Data Fetching Error:", error);
      }
    };
    fetchData();
  }, [update, userId]);

  if (!data) {
    return null;
  }

  return (
    <>
      <ClubBanner images={data.images} />
      <ClubInfo
        title={data.clubName}
        location={`${data.sido} ${data.gugun}`}
        joinedMember={data.member.length}
        activityCount={data.activity.length}
        lastMessageTime={data.lastMessageTime}
        masterId={data.master}
      />
      <div className="p-[10px]">
        <ClubInfoText text={data.information} />
        <ClubMember
          member={data.member}
          clubMaster={data.master}
          totalMemberToggle={totalMemberToggle}
          setTotalMemberToggle={setTotalMemberToggle}
        />
        <ClubActivity
          activity={data.activity}
          clubMaster={data.master}
          setChkMaster={setChkMaster}
          setClubActivityToggle={setClubActivityToggle}
          clubActivityToggle={clubActivityToggle}
          userId={userId}
        />
        {chkMaster && (
          <Link
            href={`/club/clubActivity/${params}`}
            className="w-full block text-center text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF]"
          >
            클럽 활동 추가하기
          </Link>
        )}
        {!joinedMember && (
          <ClubJoinBtn params={params} setUpdate={setUpdate} userId={userId} />
        )}
      </div>
    </>
  );
}
