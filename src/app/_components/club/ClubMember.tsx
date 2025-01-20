"use client";
import { FaAngleRight } from "react-icons/fa6";
import Member from "./Member";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MemberProps } from "@/app/_utils/Interface";
import TotalMember from "./TotalMember";

interface ClubMemberProps {
  member: MemberProps[];
  clubMaster: string;
  totalMemberToggle: boolean;
  setTotalMemberToggle: Dispatch<SetStateAction<boolean>>;
}

export default function ClubMember({
  member,
  clubMaster,
  totalMemberToggle,
  setTotalMemberToggle,
}: ClubMemberProps) {
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
    <>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-[#3D97FF]">가입 멤버</h4>
          <button
            onClick={() => setTotalMemberToggle(true)}
            className="text-sm text-[#878787] flex-center"
          >
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
          {member.map(
            (item, idx) =>
              idx < 10 && <Member key={idx} memberId={item.memberId} />
          )}
        </ul>
      </div>
      {totalMemberToggle && (
        <TotalMember
          member={member}
          clubMaster={clubMaster}
          setTotalMemberToggle={setTotalMemberToggle}
        />
      )}
    </>
  );
}
