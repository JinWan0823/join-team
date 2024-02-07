import Link from "next/link";
import { GoNote } from "react-icons/go";

export default function Nofeed() {
  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <GoNote className="text-[60px] text-[#787878]" />
        <p className="text-[#878787] font-bold mt-[10px]">
          아직 공유중인 피드가 없습니다.
        </p>
        <Link
          href={""}
          className="mt-[10px] bg-[#3D97FF] text-[#fff] py-[6px] w-[120px] rounded-[6px] text-center"
        >
          작성하기
        </Link>
      </div>
    </>
  );
}
