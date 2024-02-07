"use client";
import { useState } from "react";
import SelectInterest from "../login/SelectInterest";

export default function InterestReset() {
  const [selectMenu, setSelectMenu] = useState<boolean>(false);
  const [interestList, setInterestList] = useState<string[]>([]);
  return (
    <>
      <button className="text-sm ml-[6px] bg-[#373737] mt-[4px] text-[#fff] p-[4px] rounded-[4px]">
        관심목록 설정
      </button>
      <SelectInterest
        setSelectMenu={setSelectMenu}
        setInterestList={setInterestList}
        interestList={interestList}
      />
    </>
  );
}
