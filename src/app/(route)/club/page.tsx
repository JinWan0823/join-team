"use client";

import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ListCard from "@/app/_components/main/ListCard";
import NoneSearchResult from "@/app/_components/search/NoneSearchResult";
import { joinTeamUrl } from "@/app/_utils/url";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const query = params.get("val");
      let result;
      if (query) {
        result = await getData<ClubDetailData[]>(
          `${joinTeamUrl}/search?val=${query}`
        );
      } else {
        result = await getData<ClubDetailData[]>(`${joinTeamUrl}/search`);
      }
      setData(result);
    };

    fetchData();
  }, [params]);

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      {data.length > 0 ? (
        data.map((item, idx) => <ListCard key={idx} data={item} />)
      ) : (
        <NoneSearchResult />
      )}
    </section>
  );
}
