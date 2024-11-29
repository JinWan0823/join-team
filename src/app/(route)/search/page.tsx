"use client";
import LatestSearch from "@/app/_components/search/LatestSearch";
import RecommendSearch from "@/app/_components/search/RecommendSearch";
import { useEffect, useState } from "react";

export default function Wrap() {
  const [latestSearch, setLatestSearch] = useState<string[]>([]);
  useEffect(() => {
    const searchList = localStorage.getItem("latestSearch");
    if (searchList) {
      setLatestSearch(JSON.parse(searchList));
    }
  }, []);

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh)] overflow-y-auto  pb-[56px] scroll-track relative">
      {latestSearch.length === 0 ? (
        <></>
      ) : (
        <LatestSearch
          latestSearch={latestSearch}
          setLatestSearch={setLatestSearch}
        />
      )}
      <RecommendSearch />
    </section>
  );
}
