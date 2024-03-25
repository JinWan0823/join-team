"use client";
import { usePathname } from "next/navigation";
import Logo from "../logo";
import { GoSearch } from "react-icons/go";
import Link from "next/link";

export default function Heather() {
  const pathName = usePathname();
  if (
    pathName === "/login" ||
    pathName === "/signup" ||
    pathName === "/search"
  ) {
    return <></>;
  } else {
    return (
      <div className="w-full sticky top-0 p-[10px] bg-[#fff] flex justify-between items-center shadow-lg">
        <Link href={"/"} className="logo_wrap w-[100px]">
          <Logo />
        </Link>
        <ul className="flex-center text-xl text-[#333]">
          <li>
            <Link href={"/search"}>
              <GoSearch />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
