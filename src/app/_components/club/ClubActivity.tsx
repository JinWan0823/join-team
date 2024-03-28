"use client";
import { FaAngleRight, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import ActivityCard from "./ActivityCard";
import { useRef, useState } from "react";
import { ActivityInterface } from "@/app/_utils/Interface";

interface ClubActivityProps {
  activity: ActivityInterface[];
}

export default function ClubActivity({ activity }: ClubActivityProps) {
  const ref = useRef<HTMLUListElement>(null);
  const div = ref.current;
  const refId = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, SetPreviousX] = useState(0);
  const tickEvent = useRef<{ start: Date; tickCnt: number }>({
    start: new Date(),
    tickCnt: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    SetPreviousX(e.clientX);
    tickEvent.current = { start: new Date(), tickCnt: 0 };
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(false);
    console.log(
      `${(+new Date() - +tickEvent.current.start) / 1000}초`,
      tickEvent.current.tickCnt
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging || !div || refId.current) {
      return;
    }

    refId.current = requestAnimationFrame(() => {
      if (div) {
        const delta = e.clientX - previousX;
        div.scrollLeft -= delta;
        SetPreviousX(e.clientX);
      }
      refId.current = null;
      tickEvent.current.tickCnt += 1;
    });
  };
  return (
    <div className="mt-[40px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[#3D97FF]">클럽 활동</h4>
        <button className="text-sm text-[#878787] flex-center">
          더보기
          <FaAngleRight />
        </button>
      </div>
      <ul
        className="mt-[10px] flex overflow-x-auto row-scroll"
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {activity.map((item, idx) => (
          <ActivityCard key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
}
