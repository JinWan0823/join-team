import Link from "next/link";
import NoResultImg from "../common/NoResultImg";

export default function Nofeed() {
  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <NoResultImg />
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
