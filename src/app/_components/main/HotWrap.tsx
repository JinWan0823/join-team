import ListWrap from "./ListWrap";
import MoreBtn from "./MoreBtn";

export default function HotWrap() {
  return (
    <>
      <section className="interest-section mt-[20px]">
        <h2 className="font-bold text-lg">인기 클럽</h2>
        <p className="text-sm">회원님의 관심사에 어울리는 클럽을 확인하세요.</p>
        <ListWrap category={"hot"} />
        <MoreBtn category={"hot"} />
      </section>
    </>
  );
}
