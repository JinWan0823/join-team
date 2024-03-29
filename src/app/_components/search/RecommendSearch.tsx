import { recommendCategories } from "@/app/_utils/categories";
import Link from "next/link";

export default function RecommendSearch() {
  return (
    <>
      <div className="p-[10px]">
        <h4 className="font-bold">추천 검색어</h4>
        <ul className="flex flex-wrap gap-2 mt-[10px]">
          {recommendCategories.map((item, idx) => (
            <li
              key={idx}
              className="p-[8px] px-[20px] border-[1px] rounded-[20px] flex-center cursor-pointer"
            >
              <Link href={`club/?val=${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
