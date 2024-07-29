import Image from "next/image";
import Link from "next/link";

export default function NoClub() {
  const noResult =
    "https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/Nosearch.avif";

  return (
    <>
      <div className="pt-[60px] flex flex-col justify-center items-center">
        <Image src={noResult} width={320} height={320} alt="error-img" />
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
