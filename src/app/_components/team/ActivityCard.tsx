import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ActivityCard() {
  return (
    <>
      <li className="bg-[#fff] p-[10px] flex rounded-[4px] activity-card">
        <div className="thumb w-[70px] h-[70px] rounded-[10px] bg-[#333]"></div>
        <div className="ml-[10px] w-[240px]">
          <span className="text-sm p-[2px] rounded-[8px] bg-[#b0d5ff] text-[#fff]">
            정기모임
          </span>
          <p className="font-bold">2월 정규 2번째 러닝 🏃&zwj;♂️</p>
          <p className="text-sm text-[#878787] flex items-center">
            <span className="flex items-center mr-[6px]">
              <FaMapMarkerAlt />
              용산구
            </span>
            <span className="flex items-center">
              <FaCalendarAlt />
              2.6 (화) 오후 5:00
            </span>
          </p>
        </div>
      </li>
    </>
  );
}
