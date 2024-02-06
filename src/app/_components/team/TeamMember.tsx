import { FaAngleRight } from "react-icons/fa6";

export default function TeamMember() {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[#3D97FF]">가입 멤버</h4>
        <button className="text-sm text-[#878787] flex-center">
          더보기
          <FaAngleRight />
        </button>
      </div>
      <ul className="mt-[10px] flex gap-4 overflow-x-scroll">
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>{" "}
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
        <li>
          <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333]"></div>
          <span className="text-sm">박진완</span>
        </li>
      </ul>
    </div>
  );
}
