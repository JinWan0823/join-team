import Link from "next/link";
import { GoInfo } from "react-icons/go";

export default function NoneClubActivity() {
  return (
    <li className="w-full text-sm p-[10px] flex flex-col justify-center items-center">
      <GoInfo className="text-[40px] text-[#787878]" />
      <p className="text-[#878787] font-bold mt-[10px]">
        아직 활동내역이 없습니다.
      </p>
      {/* <Link
        href={""}
        className="mt-[10px] bg-[#3D97FF] text-[#fff] py-[6px] w-[120px] rounded-[6px] text-center"
      >
        작성하기
      </Link> */}
    </li>
  );
}
