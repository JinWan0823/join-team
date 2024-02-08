import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
interface LatestSearchProps {
  searchList: string[];
  setSearchList: Dispatch<SetStateAction<string[]>>;
}

export default function LatestSearch({
  searchList,
  setSearchList,
}: LatestSearchProps) {
  const storage = localStorage.getItem("latestSearch");

  const handleRemoveItem = (itemToRemove: string) => {
    const updatedSearchList = searchList.filter(
      (item) => item !== itemToRemove
    );
    localStorage.setItem("latestSearch", JSON.stringify(updatedSearchList));
    setSearchList(updatedSearchList);
  };

  return (
    <div className="p-[10px]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">최근 검색어</h4>
        <button
          className="text-sm text-[#a1a8b3]"
          onClick={() => {
            localStorage.removeItem("latestSearch");
            setSearchList([]);
          }}
        >
          지우기
        </button>
      </div>
      <ul className="flex flex-wrap gap-2 mt-[10px]">
        {searchList &&
          searchList.map((item, idx) => (
            <li
              key={idx}
              className="p-[8px] px-[20px] bg-[#f1f1f1] rounded-[20px] flex-center cursor-pointer"
            >
              <Link href={"/"}>{item}</Link>
              <button
                className="ml-[4px]"
                onClick={() => handleRemoveItem(item)}
              >
                <IoCloseCircleOutline />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
