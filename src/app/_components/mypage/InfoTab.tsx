"use client";
import { useState } from "react";
import FeedWrap from "./FeedWrap";
import ClubWrap from "./ClubWrap";

export default function InfoTab() {
  const [toggleTab, setToggleTab] = useState(true);

  return (
    <>
      <ul className="w-full flex-center relative text-center mt-[20px] border-y-[1px] info-tab-menu">
        <li
          className={`w-[50%] relative py-[10px] font-bold text-md cursor-pointer ${
            toggleTab ? "info-tab-active" : ""
          }`}
          onClick={() => setToggleTab(true)}
        >
          피드
        </li>
        <li
          className={`w-[50%] relative py-[10px] font-bold text-md cursor-pointer ${
            toggleTab ? "" : "info-tab-active"
          }`}
          onClick={() => setToggleTab(false)}
        >
          클럽
        </li>
      </ul>
      {toggleTab ? <FeedWrap /> : <ClubWrap />}
    </>
  );
}
