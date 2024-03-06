import { ActivityInterface } from "@/app/_utils/Interface";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ActivityCardProps {
  item: ActivityInterface;
}

export default function ActivityCard({ item }: ActivityCardProps) {
  return (
    <>
      <li className="bg-[#fff] p-[10px] flex rounded-[4px] activity-card">
        <div className="thumb w-[70px] h-[70px] rounded-[10px] bg-[#333]"></div>
        <div className="ml-[10px] w-[240px]">
          <span className="text-sm p-[2px] rounded-[8px] bg-[#b0d5ff] text-[#fff]">
            {item.category}
          </span>
          <p className="font-bold">{item.title}</p>
          <p className="text-sm text-[#878787] flex items-center">
            <span className="flex items-center mr-[6px]">
              <FaMapMarkerAlt />
              {item.location}
            </span>
            <span className="flex items-center">
              <FaCalendarAlt />
              {item.date}
            </span>
          </p>
        </div>
      </li>
    </>
  );
}
