import { FaChevronRight } from "react-icons/fa";
import ProfileImg from "./ProfileImg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UserData } from "@/app/_utils/Interface";
import Category from "../club/create/Category";

interface ProfileUpdateProps {
  setProfileUpdate: Dispatch<SetStateAction<boolean>>;
  user: UserData;
}

export default function ProfileUpdateWrap({
  setProfileUpdate,
  user,
}: ProfileUpdateProps) {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    console.log(user.interestList);
    setSelectedCategories(user.interestList.split("/"));
    console.log(selectedCategories);
  }, []);

  return (
    <div className="w-full min-h-full bg-[#f1f1f1] z-[99] flex flex-col items-center justify-between py-[20px] px-[10px]">
      <div className="w-full flex flex-col items-center">
        <ProfileImg />
        <div className="w-full mt-[20px]">
          <p className="font-bold">이름</p>
          <input
            type="text"
            className="p-[4px] w-full mt-[4px] border-[#3d97ff] border-[1px] outline-none focus:shadow-md"
            value={user.name}
            placeholder="이름을 입력해주세요."
            onChange={() => {}}
          />
        </div>

        <div className="w-full mt-[20px]">
          <p className="font-bold">관심사</p>
          <div
            onClick={() => setCategoryToggle(true)}
            className="border-[1px] border-[#3d97ff] p-[4px] flex items-center justify-between cursor-pointer mt-[4px] bg-[#fff]"
          >
            {user.interestList ? (
              <p>{selectedCategories.join(",")}</p>
            ) : (
              <p className="text-[#878787]">관심사를 선택해주세요.</p>
            )}
            <FaChevronRight className="text-[#3d97ff]" />
          </div>
        </div>
      </div>
      {categoryToggle && (
        <Category
          setCategoryToggle={setCategoryToggle}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      )}

      <div className="w-full">
        <button className="w-full text-[#fff] py-[10px] mt-[10px] rounded-[8px]  bg-[#3D97FF] pointer-events-auto">
          프로필 저장
        </button>
        <button
          onClick={() => setProfileUpdate(false)}
          className="w-full text-[#fff] py-[10px] mt-[10px] rounded-[8px]  bg-[#ff7f7f] pointer-events-auto"
        >
          취소
        </button>
      </div>
    </div>
  );
}
