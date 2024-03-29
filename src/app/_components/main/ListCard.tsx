"use client";
import { ClubDetailData } from "@/app/_utils/Interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";

interface ListCardProps {
  data: ClubDetailData;
}

export default function ListCard({ data }: ListCardProps) {
  const pathName = usePathname();

  return (
    <>
      <li
        className={`w-full bg-[#fff]  ${
          pathName === "/" ? "mt-[10px] rounded-[4px]" : "border-b-[1px]"
        }`}
      >
        <Link
          href={`/team/${data._id}`}
          className="flex items-center justify-between py-[10px] px-[8px]"
        >
          <div className="lt w-[90px] h-[90px] rounded-[10px] bg-[#333]"></div>
          <div className="rt w-[calc(100%-100px)]">
            <span className="text-[12px] p-[1px] px-[6px] rounded-[8px] bg-[#b0d5ff] text-[#fff]">
              {data.category}
            </span>
            <p className="font-bold  mt-[4px]">{data.clubName}</p>
            <p className="text-sm text-[#878787] flex items-center">
              <FaMapMarkerAlt className="mr-[4px]" />
              {data.location}
              <span className="flex items-center ml-[4px] text-[#b0d5ff]">
                <FaRegCommentDots className="mr-[4px]" />
                4시간 전 대화
              </span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}
