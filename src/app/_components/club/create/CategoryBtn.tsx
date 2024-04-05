import { Dispatch, SetStateAction } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface CategoryToggleProps {
  setCategoryToggle: Dispatch<SetStateAction<boolean>>;
  selectedCategory: string[];
}

export default function CategoryBtn({
  setCategoryToggle,
  selectedCategory,
}: CategoryToggleProps) {
  return (
    <div
      className="flex items-center justify-between p-[10px] py-[6px] border-b-[1px] text-[#878787] cursor-pointer"
      onClick={() => setCategoryToggle(true)}
    >
      <p className="whitespace-nowrap">
        {selectedCategory.length !== 0 ? (
          <span className="text-[#3d97ff] font-bold">
            카테고리 - {selectedCategory.join(",")}
          </span>
        ) : (
          "* 카테고리 선택"
        )}
      </p>
      <span>
        <CiCirclePlus />
      </span>
    </div>
  );
}
