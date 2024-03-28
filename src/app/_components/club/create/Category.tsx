import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { IoClose } from "react-icons/io5";
import CategoryLi from "./CategoryLi";
import { hobbyCategories, interestCategories } from "@/app/_utils/categories";
interface CategoryToggleProps {
  setCategoryToggle: Dispatch<SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function Category({
  setCategoryToggle,
  selectedCategory,
  setSelectedCategory,
}: CategoryToggleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const toggleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className={`w-full h-full bg-[#f6f6f6] z-[999] absolute top-[0] left-[0] py-[20px] px-[10px] flex flex-col justify-between ${
        isVisible ? "category-visible" : "category-hidden"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold">카테고리</h4>
          <button onClick={() => setCategoryToggle(false)} className="text-xl">
            <IoClose />
          </button>
        </div>

        <div className="mt-[20px]">
          <h3 className="text-md font-bold">취미 · 액티비티</h3>
          <ul className="flex items-center flex-wrap gap-2 mt-[10px]">
            {hobbyCategories.map((category, idx) => (
              <CategoryLi
                selectedCategory={selectedCategory}
                key={idx}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </CategoryLi>
            ))}
          </ul>
        </div>

        <div className="mt-[20px]">
          <h3 className="text-md font-bold">관심사 · 모임</h3>
          <ul className="flex items-center flex-wrap gap-2 mt-[10px]">
            {interestCategories.map((category, idx) => (
              <CategoryLi
                selectedCategory={selectedCategory}
                key={idx}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </CategoryLi>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="w-full rounded-[8px] py-[10px] text-[#fff] bg-[#3D97FF]"
        onClick={() => setCategoryToggle(false)}
      >
        저장하기
      </button>
    </div>
  );
}