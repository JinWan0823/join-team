import { FaUsers } from "react-icons/fa";

export default function ChatCard() {
  return (
    <li className="w-full px-[16px] py-[16px] hover:bg-[#dfdfdf] first:border-t-[1px] border-b-[1px] border-[#dfdfdf] flex-between items-center">
      <div className="thumb w-[56px] h-[56px] rounded-[10px] bg-[#333]"></div>
      <div className="w-[calc(100%-64px)]">
        <h4 className="font-bold w-full">내향인들을 위한 러닝크루</h4>
        <p className="font-bold pt-[2px] text-sm text-[#787878] flex items-center">
          <span className="inline-flex items-center mr-[4px]">
            <FaUsers /> 15
          </span>
          <span>오후 3:38</span>
        </p>
      </div>
    </li>
  );
}
