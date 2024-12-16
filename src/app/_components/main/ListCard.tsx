"use client";
import { ClubDetailData } from "@/app/_utils/Interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";
import CategoryBadge from "../common/CategoryBadge";
import { getTimeAgo } from "@/app/_utils/formatTime";

interface ListCardProps {
  data: ClubDetailData;
}

export default function ListCard({ data }: ListCardProps) {
  const pathName = usePathname();
  console.log(data);

  return (
    <>
      <li
        className={`w-full bg-[#fff] ${
          pathName === "/" ? "mt-[20px] rounded-[4px]" : "border-b-[1px]"
        }`}
      >
        <Link
          href={`/club/${data._id}`}
          className={`flex items-center justify-between ${
            pathName !== "/" && "p-[10px]"
          }`}
        >
          <div
            className="lt w-[90px] relative bg-[#878787] rounded-[10px] overflow-hidden"
            style={{ aspectRatio: "1/1" }}
          >
            <Image
              src={data.images}
              alt="club-thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="rt w-[calc(100%-100px)]">
            <CategoryBadge badge={data.category} />
            <p className="font-bold  mt-[4px]">{data.clubName}</p>
            <p className="text-sm text-[#878787] flex items-center">
              <span className="mr-[4px]">&#128205;</span>
              {data.sido} {data.gugun}
              <span className="flex items-center ml-[4px] text-[#b0d5ff]">
                <span className="mr-[4px]">&#128172;</span>
                {getTimeAgo(data.lastMessageTime)}
              </span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}
