import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

interface MoreBtnProps {
  category: string;
}

export default function MoreBtn({ category }: MoreBtnProps) {
  return (
    <>
      <Link
        href={`club/category/${category}`}
        className="w-full text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF] flex-center"
      >
        <CiCirclePlus />
        더보기
      </Link>
    </>
  );
}
