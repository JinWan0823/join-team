"use client";

import { Dispatch, useEffect, useState } from "react";
import Logout from "../login/Logout";
import ProfileUpdateWrap from "./ProfileUpdateWrap";
import { UserData } from "@/app/_utils/Interface";

interface SettingProps {
  setSettingMenu: Dispatch<React.SetStateAction<boolean>>;
  user: UserData;
}

export default function Setting({ setSettingMenu, user }: SettingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="absolute left-0 bottom-0 bg-[#333333d6] z-[99999] w-full h-full flex items-end overflow-hidden">
        <div
          className={`absolute position-center  w-[calc(100%-110px)] bg-[#fff] text-center rounded-lg overflow-hidden ${
            isVisible ? "setting-visible" : "setting-hidden"
          }`}
        >
          <ul className="overflow-hidden">
            <li className="py-[10px] border-b-[1px]">
              <button onClick={() => setProfileUpdate(true)}>
                프로필 수정
              </button>
            </li>
            <li className="py-[10px] text-red-400 border-b-[1px] font-bold">
              <Logout />
            </li>
            <li className="py-[10px]">
              <button onClick={() => setSettingMenu(false)}>닫기</button>
            </li>
          </ul>
        </div>
        {profileUpdate && (
          <ProfileUpdateWrap setProfileUpdate={setProfileUpdate} user={user} />
        )}
      </div>
    </>
  );
}
