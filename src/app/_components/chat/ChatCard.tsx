import { formatTime } from "@/app/_utils/formatTime";
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
        className="w-full px-[16px] py-[16px] hover:bg-[#dfdfdf] first:border-t-[1px] border-b-[1px] border-[#dfdfdf] flex-between items-center"
        href={`/chat/${data.clubId}`}
      >
        <div className="thumb w-[56px] h-[56px] rounded-[10px] bg-[#333] overflow-hidden">
          <Image
            src={data.thumb}
            alt="club-thumbnail"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[calc(100%-64px)]">
          <h4 className="font-bold w-full">{data.clubTitle}</h4>
          <p className="font-bold pt-[2px] text-sm text-[#787878] flex items-center">
            <span className="inline-flex items-center mr-[4px]">
              <FaUsers /> {data.member.length}
            </span>
            <span>
              {data.lastMessageTime ? formatTime(data.lastMessageTime) : ""}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
}
