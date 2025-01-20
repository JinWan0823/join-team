import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

interface SelectProps {
  setSelectMenu: Dispatch<SetStateAction<boolean>>;
  setInterestList: Dispatch<SetStateAction<string[]>>;
  interestList: string[];
}

export default function SelectInterest({
  setSelectMenu,
  setInterestList,
  interestList,
}: SelectProps) {
  const interest = [
    "싸이클",
    "수영",
    "축구",
    "골프",
    "야구",
    "탁구",
    "러닝",
    "등산",
    "캠핑",
    "여행",
    "보드게임",
  ];
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInterest = (list: string) => {
    if (interestList.includes(list)) {
      const newInterestList = interestList.filter((item) => item !== list);
      setInterestList(newInterestList);
      return;
    }

    if (interestList.length === 3) {
      return;
    }

    setInterestList((prev) => [...prev, list]);
  };
  return (
    <div className="absolute left-0 bottom-0 bg-[#333333d6] z-50 w-full h-full flex items-end overflow-hidden">
      <div
        className={`absolute bottom-0 w-full bg-[#fff] text-center rounded-t-lg ${
          isVisible ? "select-visible" : "select-hidden"
        }`}
      >
        <div className="py-[10px] relative">
          <p className="font-bold">관심사</p>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-[10px] text-xl"
            onClick={(e) => {
              e.preventDefault();
              setSelectMenu(false);
            }}
          >
            <IoIosClose />
          </button>
        </div>
        <ul className="p-[10px] h-auto max-h-[520px] overflow-y-auto bg-[#ededed] grid grid-cols-3 gap-3 shadow-inner">
          {interest.map((v, i) => (
            <li
              key={i}
              className={`py-[8px] rounded-[8px] shadow-sm cursor-pointer ${
                interestList.includes(v) ? "bg-[#447FFF]" : "bg-[#fff]"
              }`}
              onClick={() => {
                handleInterest(v);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
        <button
          className="w-[calc(100%-10px)] rounded-[8px] py-[10px] my-[8px] text-[#fff] bg-[#3D97FF]"
          onClick={() => setSelectMenu(false)}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
