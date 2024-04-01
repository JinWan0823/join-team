import { ReactNode } from "react";

interface CategoryLiProps {
  children: ReactNode;
  onClick: () => void;
  selected: boolean;
}
export default function CategoryLi({
  children,
  onClick,
  selected,
}: CategoryLiProps) {
  return (
    <li
      className={`text-sm py-[4px] px-[12px] rounded-[12px] border-[1px] border-[#878787] cursor-pointer ${
        selected ? "bg-[#3D97FF] text-[#fff] border-[#3d97ff]" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
