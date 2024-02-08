import Link from "next/link";

export default function RecommendSearch() {
  const recommentList = ["낚시", "보드게임", "캠핑", "여행", "풋살", "농구"];

  return (
    <>
      <div className="p-[10px]">
        <h4 className="font-bold">추천 검색어</h4>
        <ul className="flex flex-wrap gap-2 mt-[10px]">
          {recommentList.map((item, idx) => (
            <li
              key={idx}
              className="p-[8px] px-[20px] border-[1px] rounded-[20px] flex-center cursor-pointer"
            >
              <Link href={"/"}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
