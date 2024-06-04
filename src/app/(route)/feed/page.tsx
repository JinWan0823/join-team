"use client";
import FeedCard from "@/app/_components/feed/FeedCard";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<FeedData[]>([]);

  const url = `${joinTeamUrl}/feed`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<FeedData[]>(url);
        setData(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative">
      {data.map((item, idx) => (
        <FeedCard key={`feed ${idx}`} data={item} />
      ))}
    </section>
  );
}
