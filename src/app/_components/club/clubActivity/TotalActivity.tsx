import {
  ActivityInterface,
  ClubDetailData,
  MemberProps,
} from "@/app/_utils/Interface";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import TotalActivityCard from "./TotalActivityCard";
import InfiniteLoading from "../../common/InfiniteLoading";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";

interface TotalMemberProps {
  setClubActivityToggle: Dispatch<SetStateAction<boolean>>;
  activity: ActivityInterface[];
}

export default function TotalActivity({
  setClubActivityToggle,
  activity,
}: TotalMemberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activities, setActivities] = useState(activity);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);
  const params = useParams();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
  }, [hasMore, isLoading]); // hasMore, isLoading 상태 변화에 따라 재적용

  const fetchMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const result = await getData<ActivityInterface[]>(
        `${joinTeamUrl}/club/${params.id}/activity?page=${page}`
      );

      if (result.length === 0) {
        setHasMore(false); // 더 이상 로드할 데이터가 없으면 hasMore를 false로 설정
      } else {
        setActivities((prev) => [...prev, ...result]);
        setPage((prev) => prev + 1);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Data Fetching Error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-full h-full bg-[#f6f6f6] z-[999] absolute top-[0] left-[0] overflow-hidden pb-[56px]  ${
        isVisible ? "category-visible" : "category-hidden"
      }`}
    >
      <div className="flex items-center justify-between py-[20px] px-[10px]">
        <h4 className="text-lg font-bold">클럽 활동</h4>
        <button
          onClick={() => setClubActivityToggle(false)}
          className="text-xl"
        >
          <IoClose />
        </button>
      </div>
      <ul
        ref={listRef}
        className="w-full h-full px-[10px] overflow-y-scroll scroll-track pb-[76px]"
      >
        {activities.map((item, idx) => (
          <TotalActivityCard key={idx} item={item} />
        ))}
        {isLoading && <InfiniteLoading />}
        {!hasMore && (
          <p className="mt-[20px] text-sm text-center text-[#9e9e9e]">
            더 이상 불러올 활동이 없습니다.
          </p>
        )}
      </ul>
    </div>
  );
}
