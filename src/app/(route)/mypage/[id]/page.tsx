"use client";
import InfoComment from "@/app/_components/mypage/InfoComment";
import InfoTab from "@/app/_components/mypage/InfoTab";
import MyInfo from "@/app/_components/mypage/MyInfo";
import { UserData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [userData, setUserData] = useState<UserData>();
  const params = useParams();
  const endPoint = `/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserData>(
          `${joinTeamUrl}/user/${params.id}`
        );
        setUserData(result);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, []);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      <div className="p-[10px]">
        {userData && <MyInfo user={userData} />}
        {userData && <InfoComment comment={userData?.introComment} />}
      </div>
      <InfoTab endPoint={endPoint} />
    </section>
  );
}
