import Link from "next/link";
import Banner from "./_components/common/Banner";
import HotWrap from "./_components/main/HotWrap";
import InterestWrap from "./_components/main/InterestWrap";
export default function Home() {
  const noResult =
    "https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/clubBanner.png";

  return (
    <div className="max-h-[calc(100vh-66px)] overflow-y-auto p-[10px] bg-[#f1f1f1] pb-[56px] scroll-track">
      <Banner />
      <Link
        href={"/club/create"}
        className="block w-full h-[80px] bg-[#333] rounded-[12px] my-[10px]"
        style={{
          backgroundImage: `url(${noResult})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></Link>
      <HotWrap />
      <InterestWrap />
    </div>
  );
}
