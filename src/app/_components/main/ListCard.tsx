import { FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";

export default function ListCard() {
  return (
    <>
      <li className="w-full py-[10px] px-[8px] flex items-center justify-between bg-[#fff] rounded-[4px] mt-[10px]">
        <div className="lt w-[90px] h-[90px] rounded-[10px] bg-[#333]"></div>
        <div className="rt w-[calc(100%-100px)]">
          <span className="text-sm p-[2px] px-[8px] rounded-[8px] bg-[#b0d5ff] text-[#fff]">
            러닝
          </span>
          <p className="font-bold">내향인들을 위한 러닝크루 🏃&zwj;♂️</p>
          <p className="text-sm text-[#878787] flex items-center">
            <FaMapMarkerAlt className="mr-[4px]" />
            용산구
            <span className="flex items-center ml-[4px] text-[#b0d5ff]">
              <FaRegCommentDots className="mr-[4px]" />
              4시간 전 대화
            </span>
          </p>
        </div>
      </li>
    </>
  );
}
