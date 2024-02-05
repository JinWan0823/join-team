import Logo from "../logo";
import { GoBell } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoSearch } from "react-icons/go";

export default function Heather() {
  return (
    <div className="w-full sticky top-0 p-[10px] bg-[#fff] flex justify-between items-center shadow-lg">
      <div className="logo_wrap w-[100px]">
        <Logo />
      </div>
      <ul className="flex-center text-xl text-[#333]">
        <li className="mr-[14px]">
          <GoSearch />
        </li>
        <li className="mr-[14px]">
          <GoHeart />
        </li>
        <li>
          <GoBell />
        </li>
      </ul>
    </div>
  );
}
