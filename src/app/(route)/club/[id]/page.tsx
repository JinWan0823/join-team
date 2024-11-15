"use client";

import ClubPage from "@/app/_components/club/ClubPage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [userId, setUserId] = useState("");
  const params = useParams();
  const [clubActivityToggle, setClubActivityToggle] = useState(false);
  const [totalMemberToggle, setTotalMemberToggle] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("recoil-persist");
    if (user) {
      const userIdData = JSON.parse(user);
      if (
        userIdData &&
        Object.keys(userIdData).length > 0 &&
        userIdData.userInfo?.id
      ) {
        setUserId(userIdData.userInfo.id);
        console.log(userIdData.userInfo.id);
      }
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section
        className={`max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] bg-[#f1f1f1] pb-[56px] scroll-track  ${
          clubActivityToggle || totalMemberToggle
            ? "overflow-y-hidden h-[100vh]"
            : "overflow-y-auto"
        }`}
      >
        <ClubPage
          userId={userId}
          params={params.id.toString()}
          totalMemberToggle={totalMemberToggle}
          setTotalMemberToggle={setTotalMemberToggle}
          setClubActivityToggle={setClubActivityToggle}
          clubActivityToggle={clubActivityToggle}
        />
      </section>
    </div>
  );
}
