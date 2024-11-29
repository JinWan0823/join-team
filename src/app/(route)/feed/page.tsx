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
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const params = useSearchParams();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null); // 감시할 요소

  // 데이터 초기 로드
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const query = params.get("val");
      try {
        const result = await getData<FeedData[]>(
          query
            ? `${joinTeamUrl}/feed?val=${query}&page=1`
            : `${joinTeamUrl}/feed?page=1`
        );

        setData(result);
        setPage(2);
        setHasMore(result.length > 0);
      } catch (error) {
        console.error("Data Fetching Error: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params]);

  // 추가 데이터 호출
  const fetchMoreData = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const query = params.get("val");
    try {
      const result = await getData<FeedData[]>(
        query
          ? `${joinTeamUrl}/feed?val=${query}&page=${page}`
          : `${joinTeamUrl}/feed?page=${page}`
      );

      setData((prev) => [...prev, ...result]);
      setPage((prev) => prev + 1);
      setHasMore(result.length > 0);
    } catch (error) {
      console.error("Data Fetching Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Intersection Observer 설정
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect(); // 기존 옵저버 해제

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && hasMore) {
          fetchMoreData();
        }
      },
      {
        root: null, // 뷰포트 기준
        rootMargin: "200px", // 200px 앞에서 미리 로드
        threshold: 0.1, // 10% 이상 보이면 콜백 실행
      }
    );

    if (triggerRef.current) observerRef.current.observe(triggerRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect(); // 옵저버 해제
    };
  }, [isLoading, hasMore, page]);

  return (
    <section className="scroll-track max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto pb-[56px] relative">
      {data.map((item, idx) => (
        <FeedCard key={`feed ${idx}`} data={item} />
      ))}
      {isLoading && <InfiniteLoading />}
      <div ref={triggerRef} style={{ height: "1px" }} /> {/* 감시 대상 */}
      {!hasMore && (
        <p className="mt-[4px] mb-[12px] text-sm text-center text-[#9e9e9e]">
          더 이상 불러올 피드가 없습니다.
        </p>
      )}
    </section>
  );
}
