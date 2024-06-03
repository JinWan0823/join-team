"use client";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";

interface FeedHeaderProps {
  dataId: string;
  thumbnail: string;
  name: string;
}

export default function FeedHeader({
  thumbnail,
  name,
  dataId,
}: FeedHeaderProps) {
  const pathName = usePathname();

  return (
    <>
      <div className="bg-[#fff] flex items-center justify-between p-[10px]">
        <div className="flex-center">
          <div className="thumb w-[52px] h-[52px] bg-[#333] rounded-[50%] overflow-hidden">
            <Image
              src={thumbnail}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              alt="activity-thumb"
              width={52}
              height={52}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="info ml-[8px]">
            <p className="leading-4">{name}</p>
            <span className="text-[#878787] text-sm">2월 8일</span>
          </div>
        </div>
        {pathName === "/feed" ? (
          <button className="bg-[#3D97FF] text-[#fff]  py-[2px] px-[4px] rounded-[4px] text-sm">
            팔로우
          </button>
        ) : (
          <BurgerMenu dataId={dataId} />
        )}
      </div>
    </>
  );
}
