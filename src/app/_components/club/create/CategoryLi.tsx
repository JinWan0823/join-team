import { ReactNode } from "react";

interface CategoryLiProps {
  children: ReactNode;
  onClick: () => void;
  selectedCategory: string;
}
export default function CategoryLi({
  children,
  onClick,
  selectedCategory,
}: CategoryLiProps) {
  return (
    <li
      className={`text-sm py-[4px] px-[12px] rounded-[12px] border-[1px] border-[#878787] cursor-pointer ${
        selectedCategory === children
          ? "bg-[#3D97FF] text-[#fff] border-[#3d97ff]"
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
