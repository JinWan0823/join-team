import { MemberData } from "@/app/_utils/Interface";

export default function Member({ memberId, thumbnail, name }: MemberData) {
  return (
    <>
      <li className="member">
        <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
        <span className="text-sm whitespace-nowrap">{name}</span>
      </li>
    </>
  );
}
