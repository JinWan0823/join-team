"use client";

import { useSocket } from "@/app/_components/SocketProvider";
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
  const [userId, setUserId] = useState("");
  const params = useParams();

  const [clubActivityToggle, setClubActivityToggle] = useState(false);
  const [totalMemberToggle, setTotalMemberToggle] = useState(false);

  const socket = useSocket();

  useEffect(() => {
    const user = localStorage.getItem("recoil-persist");
    if (user) {
      const userIdData = JSON.parse(user);
      setUserId(userIdData.userInfo.id);
    }
  }, []);

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
      // const result = await postData(
      //   `${joinTeamUrl}/club/join/${params.id}`
      // );
      // setUpdate((prev) => !prev);

      // const roomId = await getData(`${joinTeamUrl}/club/join/${params.id}`);

      const chatTime = new Date().toISOString();
      socket?.emit("userJoined", {
        content: "system 메세지",
        parentRoom: params.id.toString(),
        who: "System Message", // 시스템 메시지로 통일
        time: chatTime,
      });
      console.log("가입완료");
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  if (!data) return null;

  return (
    <div className="relative overflow-hidden">
      <section
        className={`max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] bg-[#f1f1f1] pb-[56px] scroll-track  ${
          clubActivityToggle || totalMemberToggle
            ? "overflow-y-hidden h-[100vh]"
            : "overflow-y-auto"
        }`}
      >
        <ClubBanner images={data.images} />
        <ClubInfo
          title={data.clubName}
          location={data.location}
          joinedMember={data.joinedMember}
          maximumMember={data.maximumMember}
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
    </div>
  );
}
