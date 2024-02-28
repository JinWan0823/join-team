import Banner from "./_components/common/Banner";
import HotWrap from "./_components/main/HotWrap";
import InterestWrap from "./_components/main/InterestWrap";
export default function Home() {
  return (
    <div className="max-h-[calc(100vh-66px)] overflow-y-auto p-[10px] bg-[#f1f1f1] pb-[56px] scroll-track">
      <Banner />
      <HotWrap />
      <InterestWrap />
    </div>
  );
}
