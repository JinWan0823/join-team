"use client";
import InfiniteLoading from "@/app/_components/common/InfiniteLoading";
import ListCard from "@/app/_components/main/ListCard";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Wrap() {
  const [data, setData] = useState<ClubDetailData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const params = useParams(); // useRouter 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData[]>(
          `${joinTeamUrl}/club/category/${params.id}?page=1`
        );
        setData(result);
        if (result.length === 0) {
          setHasMore(false);
        } else {
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Initial Data Fetching Error: ", error);
      }
    };

    if (data.length === 0) {
      // data가 비어있을 때만 fetchData 함수 호출
      fetchData();
    }
  }, []);

  useEffect(() => {
    console.log(listRef.current);
    const handleScroll = () => {
      console.log("dddd");
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
  }, [hasMore, isLoading]);

  const fetchMoreData = async () => {
    console.log("데이터호출");
    if (isLoading) return;

    setIsLoading(true);

    try {
      const result = await getData<ClubDetailData[]>(
        `${joinTeamUrl}/club/category/${params.id}?page=${page}` // 페이지 번호를 증가시킴
      );

      if (result.length === 0) {
        setHasMore(false); // 더 이상 로드할 데이터가 없으면 hasMore를 false로 설정
      } else {
        setData((prev) => [...prev, ...result]);
        setPage((prev) => prev + 1); // 페이지 번호를 증가시킴
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
      className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track"
      ref={listRef}
    >
      <div className="w-full bg-[#3d97ff] p-[10px] absolute">
        <p className="text-[#fff] font-bold">HOT 인기 클럽</p>
      </div>
      <ul className="pt-[40px]">
        {data?.map((item, idx) => (
          <ListCard key={idx} data={item} />
        ))}
      </ul>
      {isLoading && <InfiniteLoading />}
      {!hasMore && (
        <p className="mt-[20px] text-sm text-center text-[#9e9e9e]">
          더 이상 불러올 활동이 없습니다.
        </p>
      )}
    </section>
  );
}
