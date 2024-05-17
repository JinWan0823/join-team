import { MemberProps } from "@/app/_utils/Interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface TotalMemberProps {
  setClubActivityToggle: Dispatch<SetStateAction<boolean>>;
}

export default function TotalActivity({
  setClubActivityToggle,
}: TotalMemberProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`w-full h-full bg-[#f6f6f6] z-[999] absolute top-[0] left-[0] overflow-hidden pb-[56px]  ${
        isVisible ? "category-visible" : "category-hidden"
      }`}
    >
      <div className="flex items-center justify-between py-[20px] px-[10px]">
        <h4 className="text-lg font-bold">클럽 활동</h4>
        <button
          onClick={() => setClubActivityToggle(false)}
          className="text-xl"
        >
          <IoClose />
        </button>
      </div>
      <ul className="w-full h-full overflow-y-scroll scroll-track"></ul>
    </div>
  );
}
