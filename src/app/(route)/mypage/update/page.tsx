"use client";
import ProfileUpdateWrap from "@/app/_components/mypage/ProfileUpdateWrap";
import { UserData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [userData, setUserData] = useState<UserData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserData>(`${joinTeamUrl}/user`);
        setUserData(result);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, []);

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      {userData && <ProfileUpdateWrap user={userData} />}
    </section>
  );
}
