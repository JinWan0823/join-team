import TeamActivity from "@/app/_components/team/TeamActivity";
import TeamBanner from "@/app/_components/team/TeamBanner";
import TeamInfo from "@/app/_components/team/TeamInfo";
import TeamInfoText from "@/app/_components/team/TeamInfoText";
import TeamMember from "@/app/_components/team/TeamMember";

export default function Wrap() {
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      <TeamBanner />
      <TeamInfo />
      <div className="p-[10px]">
        <TeamInfoText />
        <TeamMember />
        <TeamActivity />
        <button className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF] ">
          참가 신청하기
        </button>
      </div>
    </section>
  );
}
