import { getTimeAgo } from "@/app/_utils/formatTime";
import { ChatListData } from "@/app/_utils/Interface";
import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

interface DataProps {
  data: ChatListData;
}

export default function ChatCard({ data }: DataProps) {
  return (
    <li>
      <Link
        className="w-full p-[12px] px-[8px] hover:bg-[#dfdfdf] first:border-t-[1px] border-b-[1px] border-[#dfdfdf] flex-between items-center"
        href={`/chat/${data.clubId}`}
      >
        <div
          className="relative thumb w-[66px] bg-[#333] rounded-[10px] overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            src={data.thumb}
            alt="club-thumbnail"
            fill
            className="object-cover"
            sizes="66px"
            quality={100}
          />
        </div>
        <div className="w-[calc(100%-72px)]">
          <h4 className="font-bold w-full">{data.clubTitle}</h4>
          <span className="block text-sm text-[#919191] text-line-1">
            {data.lastMessage}
          </span>
          <p className="font-bold pt-[2px] text-sm text-[#787878] flex items-center">
            <span className="inline-flex items-center mr-[4px]">
              <FaUsers /> {data.member.length}
            </span>
            <span>{getTimeAgo(data.lastMessageTime)}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
