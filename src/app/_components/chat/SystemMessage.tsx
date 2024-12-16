import { getData } from "@/app/_utils/axios";
import { UserData } from "@/app/_utils/Interface";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";

interface UserIdPros {
  userId: string;
}

export default function SystemMessage({ userId }: UserIdPros) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await getData<UserData>(`${joinTeamUrl}/user/${userId}`);
        console.log(result.name);
        setUserName(result.name);
      };
      fetchData();
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  }, []);

  return (
    <div className="text-sm text-center mt-[12px] text-[#fff] bg-[#333] rounded-[12px] py-[2px]">
      <p>{userName}님이 채팅에 참여했습니다.</p>
    </div>
  );
}
