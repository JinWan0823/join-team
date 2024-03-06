"use client";
import { FaAngleRight } from "react-icons/fa6";
import Member from "./Member";
import { useRef, useState } from "react";
import { MemberData } from "@/app/_utils/Interface";

interface TeamMemberProps {
  member: MemberData[];
}

export default function TeamMember({ member }: TeamMemberProps) {
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
    <div className="mt-[20px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[#3D97FF]">가입 멤버</h4>
        <button className="text-sm text-[#878787] flex-center">
          더보기
          <FaAngleRight />
        </button>
      </div>
      <ul
        ref={ref}
        className="list mt-[10px] flex gap-4 overflow-x-auto row-scroll"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {member.map((item, idx) => (
          <Member
            key={idx}
            memberId={item.memberId}
            thumbnail={item.thumbnail}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
}
