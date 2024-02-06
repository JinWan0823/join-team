import { FaAngleRight, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import ActivityCard from "./ActivityCard";

export default function TeamActivity() {
  return (
    <div className="mt-[40px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[#3D97FF]">클럽 활동</h4>
        <button className="text-sm text-[#878787] flex-center">
          더보기
          <FaAngleRight />
        </button>
      </div>
      <ul className="mt-[10px] flex overflow-x-scroll">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </ul>
    </div>
  );
}
