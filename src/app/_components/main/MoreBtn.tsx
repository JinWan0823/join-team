import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

export default function MoreBtn() {
  return (
    <>
      <Link
        href={"/"}
        className="w-full text-[#333] py-[10px] mt-[10px] rounded-[8px] bg-[#fff] flex-center"
      >
        <CiCirclePlus />
        더보기
      </Link>
    </>
  );
}
