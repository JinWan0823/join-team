import Link from "next/link";
import { GoNote } from "react-icons/go";

export default function NoClub() {
  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <GoNote className="text-[60px] text-[#787878]" />
        <p className="text-[#878787] font-bold mt-[10px]">
          아직 가입한 클럽이 없습니다.
        </p>
        <Link
          href={"/search"}
          className="mt-[10px] bg-[#3D97FF] text-[#fff] py-[6px] w-[120px] rounded-[6px] text-center"
        >
          가입하기
        </Link>
      </div>
    </>
  );
}
