"use client";
import InfiniteLoading from "@/app/_components/common/InfiniteLoading";
import FeedCard from "@/app/_components/feed/FeedCard";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<FeedData[]>([]);
  const params = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isLowEntryCount, setIsLowEntryCount] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = params.get("val");
      console.log(query);
      try {
        let result: FeedData[];
        if (query) {
          result = await getData<FeedData[]>(
            `${joinTeamUrl}/feed?val=${query}?page=1`
          );
        } else {
          result = await getData<FeedData[]>(`${joinTeamUrl}/feed?page=1`);
        }
        setData(result);

        if (result.length === 0) {
          setHasMore(false);
        } else {
          setPage((prevPage) => prevPage + 1);
        }

        if (result.length < 4) {
          setIsLowEntryCount(true);
        }
      } catch (error) {
        console.error("Data Fetching Error: ", error);
      }
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current && hasMore && !isLoading) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          fetchMoreData();
        }
      }
    };

    if (listRef.current) {
      listRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore, isLoading, params]);

  const fetchMoreData = async () => {
    console.log("데이터호출");
    if (isLoading) return;

    setIsLoading(true);

    try {
      let result: FeedData[];
      const query = params.get("val");
      if (query) {
        result = await getData<FeedData[]>(
          `${joinTeamUrl}/feed?val=${query}?page=${page}`
        );
      } else {
        result = await getData<FeedData[]>(`${joinTeamUrl}/feed?page=${page}`);
      }

      if (result.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...result]);
        setPage((prev) => prev + 1);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Data Fetching Error: ", error);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <section
      ref={listRef}
      className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative"
    >
      {data.map((item, idx) => (
        <FeedCard key={`feed ${idx}`} data={item} />
      ))}
      {isLoading && <InfiniteLoading />}
      {!hasMore && (
        <p className="mt-[4px] mb-[12px] text-sm text-center text-[#9e9e9e]">
          더 이상 불러올 피드가 없습니다.
        </p>
      )}
      {/* {isLowEntryCount && (
        <p className="mt-[20px] text-sm text-center text-[#9e9e9e]">
          관심 항목을 추가하고 더 많은 정보를 받아보세요.
        </p>
      )} */}
    </section>
  );
}
