import { ActivityInterface } from "@/app/_utils/Interface";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ActivityCardProps {
  item: ActivityInterface;
}

export default function ActivityCard({ item }: ActivityCardProps) {
  return (
    <>
      <li className="bg-[#fff] p-[10px] flex rounded-[4px] activity-card items-center">
        <div
          className="relative thumb w-[70px] rounded-[10px] overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            src={item.images}
            alt="activity-thumb"
            fill
            sizes="70px"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="ml-[10px] w-[240px]">
          <p className="font-bold">{item.activityName}</p>
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
