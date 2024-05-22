import { ActivityInterface, MemberProps } from "@/app/_utils/Interface";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import TotalActivityCard from "./TotalActivityCard";
import InfiniteLoading from "../../common/InfiniteLoading";

interface TotalMemberProps {
  setClubActivityToggle: Dispatch<SetStateAction<boolean>>;
  activity: ActivityInterface[];
}

export default function TotalActivity({
  setClubActivityToggle,
  activity,
}: TotalMemberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1); // 현재 페이지
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollHeight - containerRef.current.scrollTop ===
        containerRef.current.scrollHeight
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div
      ref={containerRef}
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
      <ul className="w-full h-full px-[10px] overflow-y-scroll scroll-track pb-[76px]">
        {activity.map((item, idx) => (
          <TotalActivityCard key={idx} item={item} />
        ))}
        <InfiniteLoading />
      </ul>
    </div>
  );
}
