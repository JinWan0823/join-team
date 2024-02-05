import Link from "next/link";
import { GoBell } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoNote } from "react-icons/go";
import { GoCommentDiscussion } from "react-icons/go";
import { GoHome } from "react-icons/go";

export default function TabMenu() {
  return (
    <div className="w-full absolute bottom-0 p-[10px] bg-[#fff] border-t-2">
      <ul className="w-full grid grid-cols-5 gap-2 text-center">
        <li>
          <Link href={""} className="flex flex-col justify-center items-center">
            <GoHome />
            <span className="text-sm">클럽</span>
          </Link>
        </li>
        <li>
          <Link href={""} className="flex flex-col justify-center items-center">
            <GoNote />
            <span className="text-sm">피드</span>
          </Link>
        </li>
        <li></li>
        <li>
          <Link href={""} className="flex flex-col justify-center items-center">
            <GoCommentDiscussion />
            <span className="text-sm">채팅</span>
          </Link>
        </li>
        <li>
          <Link href={""} className="flex flex-col justify-center items-center">
            <GoPerson />
            <span className="text-sm">정보</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
