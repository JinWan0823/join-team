import InfoComment from "@/app/_components/mypage/InfoComment";
import MyInfo from "@/app/_components/mypage/MyInfo";
import InterestReset from "@/app/_components/mypage/InterestReset";
import InfoTab from "@/app/_components/mypage/InfoTab";

export default function Wrap() {
  return (
    <div className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[70px] scroll-track relative">
      <div className="p-[10px]">
        <MyInfo />
        <InfoComment />
        {/* <InterestReset /> */}
      </div>
      <InfoTab />
    </div>
  );
}
