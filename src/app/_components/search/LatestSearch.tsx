import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface SearchProps {
  latestSearch: string[];
  setLatestSearch: Dispatch<SetStateAction<string[]>>;
}

export default function LatestSearch({
  latestSearch,
  setLatestSearch,
}: SearchProps) {
  const storage = localStorage.getItem("latestSearch");

  const handleRemoveItem = (itemToRemove: string) => {
    const updatedSearchList = latestSearch.filter(
      (item) => item !== itemToRemove
    );
    setLatestSearch(updatedSearchList);
    localStorage.setItem("latestSearch", JSON.stringify(updatedSearchList));
  };

  return (
    <div className="p-[10px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">최근 검색어</h4>
        <button
          className="text-sm text-[#a1a8b3]"
          onClick={() => {
            setLatestSearch([]);
            localStorage.setItem("latestSearch", JSON.stringify([]));
          }}
        >
          지우기
        </button>
      </div>
      <ul className="flex flex-wrap gap-2 mt-[10px]">
        {latestSearch.map((item, idx) => (
          <li
            key={idx}
            className="p-[8px] px-[20px] bg-[#f1f1f1] rounded-[20px] flex-center cursor-pointer"
          >
            <Link href={`club/?val=${item}`}>{item}</Link>
            <button className="ml-[4px]" onClick={() => handleRemoveItem(item)}>
              <IoCloseCircleOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
