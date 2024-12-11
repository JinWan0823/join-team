import Link from "next/link";
import NoResultImg from "../common/NoResultImg";

export default function Nofeed() {
  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <NoResultImg />
        <Link
          href={"/feed/write"}
          className="mt-[10px] bg-[#3D97FF] text-[#fff] px-[16px] py-[12px]  rounded-[10px] text-center"
        >
          피드 작성하기
        </Link>
      </div>
    </>
  );
}
