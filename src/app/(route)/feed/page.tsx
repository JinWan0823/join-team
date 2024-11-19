"use client";
import FeedCard from "@/app/_components/feed/FeedCard";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<FeedData[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const query = params.get("val");
      console.log(query);
      try {
        let result;
        if (query) {
          result = await getData<FeedData[]>(
            `${joinTeamUrl}/feed?val=${query}`
          );
        } else {
          result = await getData<FeedData[]>(`${joinTeamUrl}/feed`);
        }
        setData(result);
      } catch (error) {
        console.error("Data Fetching Error: ", error);
      }
    };
    fetchData();
  }, [params]);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative">
      {data.map((item, idx) => (
        <FeedCard key={`feed ${idx}`} data={item} />
      ))}
    </section>
  );
}
