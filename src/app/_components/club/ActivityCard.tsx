import { ActivityInterface } from "@/app/_utils/Interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ActivityCardProps {
  item: ActivityInterface;
}

export default function ActivityCard({ item }: ActivityCardProps) {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <>
      <li className="activity-card">
        <Link
          href={"/"}
          className="flex items-center bg-[#fff] p-[10px] rounded-[4px]"
        >
          <div className="thumb w-[70px] h-[70px] rounded-[10px] bg-[#333] overflow-hidden">
            <Image
              src={item.images}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              alt="activity-thumb"
              width={70}
              height={70}
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
        </Link>
      </li>
    </>
  );
}
