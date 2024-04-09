"use client";
import { useEffect, useState } from "react";
import FeedWrap from "./FeedWrap";
import ClubWrap from "./ClubWrap";
import { getData } from "@/app/_utils/axios";
import { ClubDetailData, FeedData } from "@/app/_utils/Interface";

interface InfoTabProps {
  endPoint: string;
}

export default function InfoTab({ endPoint }: InfoTabProps) {
  const [toggleTab, setToggleTab] = useState(true);
  const [feedData, setFeedData] = useState<FeedData[]>();
  const [clubData, setClubData] = useState<ClubDetailData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedResult = (await getData(
          `/feed/myfeed${endPoint}`
        )) as FeedData[];
        const clubResult = (await getData(
          `/club/myclub${endPoint}`
        )) as ClubDetailData[];

        setFeedData(feedResult);
        setClubData(clubResult);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);

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
      {toggleTab ? (
        <FeedWrap data={feedData as FeedData[]} />
      ) : (
        <ClubWrap data={clubData as ClubDetailData[]} />
      )}
    </>
  );
}
