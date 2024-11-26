"use client";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import { formatDate } from "@/app/_utils/formatTime";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData, postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";

interface FeedHeaderProps {
  dataId: string;
  thumbnail: string;
  name: string;
  date: string;
  writer: string;
}

interface followProps {
  isFollowing: boolean;
}

export default function FeedHeader({
  thumbnail,
  name,
  dataId,
  date,
  writer,
}: FeedHeaderProps) {
  const pathName = usePathname();
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    const followFetching = async () => {
      const result: followProps = await postData(`${joinTeamUrl}/user/follow`, {
        followId: writer,
      });
      console.log(result);
      setFollow(result.isFollowing);
    };
    followFetching();
  }, []);

  return (
    <>
      <div className="bg-[#fff] flex items-center justify-between p-[10px]">
        <div className="flex-center">
          <div className="thumb w-[52px] h-[52px] bg-[#333] rounded-[50%] overflow-hidden">
            <Link href={`/mypage/${writer}`}>
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
            </Link>
          </div>
          <div className="info ml-[8px]">
            <p className="leading-4">{name}</p>
            <span className="text-[#878787] text-sm">{formatDate(date)}</span>
          </div>
        </div>
        {pathName === "/feed" ? (
          follow ? (
            <button className="bg-[#3D97FF] text-[#fff]  py-[2px] px-[4px] rounded-[4px] text-sm">
              팔로우
            </button>
          ) : (
            <button className="bg-[#333] text-[#fff]  py-[2px] px-[4px] rounded-[4px] text-sm">
              언팔
            </button>
          )
        ) : (
          <BurgerMenu dataId={dataId} />
        )}
      </div>
    </>
  );
}
