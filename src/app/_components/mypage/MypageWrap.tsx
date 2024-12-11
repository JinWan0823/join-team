"use client";
import InfoComment from "@/app/_components/mypage/InfoComment";
import MyInfo from "@/app/_components/mypage/MyInfo";
import InfoTab from "@/app/_components/mypage/InfoTab";
import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/axios";
import { UserData } from "@/app/_utils/Interface";
import { IoIosSettings } from "react-icons/io";
import Setting from "@/app/_components/mypage/Setting";
import { useRouter } from "next/navigation";
import { joinTeamUrl } from "@/app/_utils/url";
import { AxiosError } from "axios";

export default function MypageWrap() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>();
  const [settingMenu, setSettingMenu] = useState<boolean>(false);

  const endPoint = ``;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserData>(`${joinTeamUrl}/user`);
        console.log(result);
        setUserData(result);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status === 401) {
          router.push("/login");
        }
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="p-[10px]">
        {userData && <MyInfo user={userData} />}
        {userData && <InfoComment comment={userData?.introComment} />}

        <div
          className="absolute right-[10px] top-[10px] cursor-pointer"
          onClick={() => {
            setSettingMenu(true);
          }}
        >
          <IoIosSettings className="text-xl text-[#878787]" />
        </div>

        {/* <InterestReset /> */}
      </div>
      <InfoTab endPoint={endPoint} />
      {settingMenu && userData && (
        <Setting setSettingMenu={setSettingMenu} user={userData} />
      )}
    </>
  );
}
