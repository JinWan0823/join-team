import Link from "next/link";
import NoResultImg from "../common/NoResultImg";
export default function NoneSearchResult() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-full">
        <NoResultImg />
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
