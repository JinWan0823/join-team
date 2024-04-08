"use client";
import { ClubDetailData } from "@/app/_utils/Interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";
import CategoryBadge from "../common/categoryBadge";

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
          href={`/club/${data._id}`}
          className="flex items-center justify-between py-[10px] px-[8px]"
        >
          <div className="lt w-[90px] h-[90px] rounded-[10px] bg-[#878787] overflow-hidden">
            <Image
              src={data.images}
              alt="club-thumbnail"
              width={90}
              height={90}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rt w-[calc(100%-100px)]">
            <CategoryBadge badge={data.category} />
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
