import { MemberProps } from "@/app/_utils/Interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import MemberCard from "./MemberCard";

interface ClubMemberProps {
  member: MemberProps[];
  setTotalMemberToggle: Dispatch<SetStateAction<boolean>>;
  clubMaster: string;
}

export default function TotalMember({
  member,
  setTotalMemberToggle,
  clubMaster,
}: ClubMemberProps) {
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
        <h4 className="text-lg font-bold">전체 멤버</h4>
        <button onClick={() => setTotalMemberToggle(false)} className="text-xl">
          <IoClose />
        </button>
      </div>
      <ul className="w-full h-full overflow-y-scroll scroll-track">
        {member.map((item, key) => (
          <MemberCard
            key={key}
            memberId={item.memberId}
            clubMaster={clubMaster}
          />
        ))}
      </ul>
    </div>
  );
}
