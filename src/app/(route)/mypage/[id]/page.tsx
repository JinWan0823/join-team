"use client";
import InfoComment from "@/app/_components/mypage/InfoComment";
import InfoTab from "@/app/_components/mypage/InfoTab";
import MyInfo from "@/app/_components/mypage/MyInfo";
import { UserData } from "@/app/_utils/Interface";
import { getData, putData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuCheck } from "react-icons/lu";

interface FollowStatus {
  isFollowing: boolean;
}

export default function Wrap() {
  const [userData, setUserData] = useState<UserData>();
  const [updateFollow, setUpdateFollow] = useState(false);
  const [chkFollow, setChkFollow] = useState(false);
  const params = useParams();
  const endPoint = `/${params.id}`;

  const handleFollow = async () => {
    try {
      const result = await putData(`${joinTeamUrl}/user/follow${endPoint}`, {});
      setUpdateFollow((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserData>(
          `${joinTeamUrl}/user/${params.id}`
        );
        setUserData(result);
        const isFollowing = await getData<FollowStatus>(
          `${joinTeamUrl}/user/isfollow/${params.id}`
        );
        if (isFollowing.isFollowing) {
          setChkFollow(true);
        } else {
          setChkFollow(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [updateFollow]);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      <div className="p-[10px]">
        {userData && <MyInfo user={userData} />}
        {userData && <InfoComment comment={userData?.introComment} />}
        {chkFollow ? (
          <button
            className="bg-[#dfdfdf] flex-center p-[10px] py-[6px] rounded-[10px] mt-[20px] text-[#fff] w-full"
            onClick={() => handleFollow()}
          >
            팔로우 <LuCheck />
          </button>
        ) : (
          <button
            className="bg-[#333] p-[10px] py-[6px] rounded-[10px] mt-[20px] text-[#fff] w-full"
            onClick={() => handleFollow()}
          >
            팔로우
          </button>
        )}
      </div>
      <InfoTab endPoint={endPoint} />
    </section>
  );
}
