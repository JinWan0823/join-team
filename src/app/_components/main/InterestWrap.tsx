import ListCard from "./ListCard";
import ListWrap from "./ListWrap";
import MoreBtn from "./MoreBtn";

export default function InterestWrap() {
  return (
    <>
      <section className="interest-section mt-[20px]">
        <h2 className="font-bold text-lg">취향 저격 클럽</h2>
        <p className="text-sm">회원님의 관심사에 어울리는 클럽을 확인하세요.</p>
        <ListWrap category={"interest"} />
        <MoreBtn category={"interest"} />
      </section>
    </>
  );
}
