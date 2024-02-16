import { GoFileMedia } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import FeedWriteTag from "@/app/_components/feed/FeedWriteTag";

export default function Wrap() {
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
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
      <textarea
        name="feedWrite"
        className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-b-[1px] outline-none"
        placeholder="내용을 입력해주세요."
      ></textarea>
      <div className="flex items-center justify-between p-[10px] border-b-[1px] text-[#878787] cursor-pointer">
        <p># 태그추가</p>
        <span>
          <CiCirclePlus />
        </span>
      </div>
      <button className="absolute bottom-[70px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF]">
        공유하기
      </button>

      <FeedWriteTag />
    </section>
  );
}
