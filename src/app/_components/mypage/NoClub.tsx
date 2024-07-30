import Link from "next/link";
import NoResultImg from "../common/NoResultImg";

export default function NoClub() {
  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <NoResultImg />
        <Link
          href={"/search"}
          className="mt-[10px] bg-[#3D97FF] text-[#fff] px-[16px] py-[12px]  rounded-[10px] text-center"
        >
          클럽 가입하기
        </Link>
      </div>
    </>
  );
}
