import Link from "next/link";
import { GoNote } from "react-icons/go";

export default function NoneSearchResult() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-full">
        <GoNote className="text-[60px] text-[#787878]" />
        <p className="text-[#878787] font-bold mt-[10px]">
          검색 결과가 없습니다.
        </p>
        <Link
          href={""}
          className="mt-[10px] bg-[#3D97FF] text-[#fff] py-[6px] w-[120px] rounded-[6px] text-center"
        >
          클럽 개설하기
        </Link>
      </div>
    </>
  );
}
