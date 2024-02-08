import Banner from "./_components/common/Banner";
import ListCard from "./_components/main/ListCard";
import { CiCirclePlus } from "react-icons/ci";
export default function Home() {
  return (
    <div className="max-h-[calc(100vh-66px)] overflow-y-auto p-[10px] bg-[#f1f1f1] pb-[56px] scroll-track">
      <Banner />
      <section className="interest-section mt-[20px]">
        <h2 className="font-bold text-lg">취향 저격 클럽</h2>
        <p className="text-sm">회원님의 관심사에 어울리는 클럽을 확인하세요.</p>
        <ul>
          <ListCard />
          <ListCard />
          <ListCard />
        </ul>
        <button className="w-full text-[#333] py-[10px] mt-[10px] rounded-[8px] bg-[#fff] flex-center">
          <CiCirclePlus />
          더보기
        </button>
      </section>
      <section className="hot-section mt-[20px]">
        <h2 className="font-bold text-lg">인기 클럽</h2>
        <p className="text-sm">회원님의 관심사에 어울리는 클럽을 확인하세요.</p>
        <ul>
          <ListCard />
          <ListCard />
          <ListCard />
        </ul>
        <button className="w-full text-[#333] py-[10px] mt-[10px] rounded-[8px] bg-[#fff] flex-center">
          <CiCirclePlus /> 더보기
        </button>
      </section>
    </div>
  );
}
