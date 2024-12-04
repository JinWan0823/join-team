import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import LastMessageTime from "./LastMessageTime";
import Thumbnail from "../common/Thumbnail";

interface ClubInfoProps {
  title: string;
  location: string;
  joinedMember: number;
  activityCount: number;
  lastMessageTime: string;
  masterId: string;
}
export default function aClubInfo({
  title,
  location,
  lastMessageTime,
  masterId,
}: ClubInfoProps) {
  return (
    <div className="px-[10px] pt-[16px] rounded-t-[10px] w-full translate-y-[-10px] bg-[#f1f1f1]">
      <div className="flex justify-between items-center">
        <Thumbnail masterId={masterId} />
        <div className=" w-[calc(100%-76px)]">
          <h2 className="font-bold text-lg text-line-2">{title}</h2>
          <p className="flex text-sm items-center text-[#878787] mt-[4px]">
            <span className="flex items-center mr-[6px]">
              &#128205;
              {location}
            </span>
            <span className="flex items-center mr-[6px]">&#128220; 10</span>
            <LastMessageTime lastMessageTime={lastMessageTime} />
          </p>
        </div>
      </div>
    </div>
  );
}
