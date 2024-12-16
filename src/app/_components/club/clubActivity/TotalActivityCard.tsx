import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ItemProps {
  images: string;
  location: string;
  date: string;
  activityName: string;
  content: string;
}

interface ActivityCardProps {
  item: ItemProps;
}

export default function TotalActivityCard({ item }: ActivityCardProps) {
  return (
    <>
      <li className="mt-[20px] rounded-[10px] overflow-hidden w-full first:mt-0 shadow-lg card-shadow">
        <div className="w-full relative" style={{ aspectRatio: "1/1" }}>
          <Image
            src={item.images}
            alt={`club-activity`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-[10px]">
          <p className="text-md text-[#878787] flex items-center">
            <span className="flex items-center mr-[6px]">
              <FaMapMarkerAlt />
              {item.location}
            </span>
            <span className="flex items-center">
              <FaCalendarAlt />
              {item.date}
            </span>
          </p>
          <div className="mt-[4px]">
            <p className="font-bold">{item.activityName}</p>
            <p className="mt-[4px]">{item.content}</p>
          </div>
        </div>
      </li>
    </>
  );
}
