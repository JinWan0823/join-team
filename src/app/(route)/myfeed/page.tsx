"use client";
import FeedCard from "@/app/_components/feed/FeedCard";
import { DataUpdate } from "@/app/_state/recoil";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
export default function Wrap() {
  const [data, setData] = useState<FeedData[]>();
  const updateStatus = useRecoilValue(DataUpdate);
  const queryId = useSearchParams();

  useEffect(() => {
    const scrollFeedId = queryId.get("itemId");

    const fetchData = async () => {
      try {
        const result = await getData<FeedData[]>(`${joinTeamUrl}/feed/myfeed`);
        setData(result);
        if (scrollFeedId) {
          scrollToId(scrollFeedId);
        }
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, [updateStatus]);

  const scrollToId = (id: string) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative">
      {data?.map((item, idx) => (
        <FeedCard key={idx} data={item} />
      ))}
    </section>
  );
}
