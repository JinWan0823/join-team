import { FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
interface ClubInfoProps {
  title: string;
  location: string;
  joinedMember: number;
  maximumMember: number;
}
export default function ClubInfo({
  title,
  location,
  joinedMember,
  maximumMember,
}: ClubInfoProps) {
  return (
    <div className="px-[10px] pt-[16px] rounded-t-[10px] w-full translate-y-[-10px] bg-[#f1f1f1]">
      <div className="flex justify-between items-center">
        <div className="thumb w-[65px] h-[65px] rounded-[50%] bg-[#333]"></div>
        <div className=" w-[calc(100%-76px)]">
          <h2 className="font-bold text-lg text-line-2">{title}</h2>
          <p className="flex text-sm items-center text-[#878787] mt-[4px]">
            <span className="flex items-center mr-[6px]">
              <FaMapMarkerAlt />
              {location}
            </span>
            <span className="flex items-center mr-[6px]">
              <FaRegChartBar />
              10 활동
            </span>
            <span className="flex items-center mr-[6px]">
              <FaUsers />
              {joinedMember}/{maximumMember}
            </span>
            <span className="flex items-center text-[#b0d5ff]">
              <FaRegCommentDots />
              4시간 전 대화
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
