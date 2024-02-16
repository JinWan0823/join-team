import { GoFileMedia } from "react-icons/go";

export default function FeedWriteImg() {
  return (
    <div className="file-upload w-full flex-center text-xl h-[310px] border-b-[1px] relative">
      +
      <div className="absolute bottom-[10px] left-[10px]">
        <label
          htmlFor="file"
          className="text-sm flex-center bg-[#3D97FF] text-[#fff] px-[10px] py-[6px] cursor-pointer rounded-[8px]"
        >
          <GoFileMedia className="mr-[4px]" />
          파일선택
        </label>
        <input type="file" id="file" className="hidden" />
      </div>
    </div>
  );
}
