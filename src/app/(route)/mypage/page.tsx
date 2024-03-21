"use client";
import InfoComment from "@/app/_components/mypage/InfoComment";
import MyInfo from "@/app/_components/mypage/MyInfo";
import InterestReset from "@/app/_components/mypage/InterestReset";
import InfoTab from "@/app/_components/mypage/InfoTab";
import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/axios";
import { UserData } from "@/app/_utils/Interface";

export default function Wrap() {
  const url = "http://localhost:8080/user";

  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserData>(url);
        console.log(result);
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
        {/* <InterestReset /> */}
      </div>
      <InfoTab />
    </section>
  );
}
