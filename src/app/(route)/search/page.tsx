"use client";
import { useEffect, useState } from "react";
import LatestSearch from "@/app/_components/search/LatestSearch";
import SearchHeader from "@/app/_components/search/SearchHeader";
import RecommendSearch from "@/app/_components/search/RecommendSearch";

export default function Wrap() {
  const [searchList, setSearchList] = useState<string[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("latestSearch");
    if (storage) {
      setSearchList(JSON.parse(storage));
    }
  }, []);

  return (
    <section className="max-h-[calc(100vh)] h-[calc(100vh)] overflow-y-auto  pb-[56px] scroll-track relative">
      <SearchHeader setSearchList={setSearchList} />
      {searchList.length === 0 ? (
        <></>
      ) : (
        <LatestSearch searchList={searchList} setSearchList={setSearchList} />
      )}
      <RecommendSearch />
    </section>
  );
}
