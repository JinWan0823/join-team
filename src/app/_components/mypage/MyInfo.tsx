import { UserData } from "@/app/_utils/Interface";
import Image from "next/image";

interface UserDataProps {
  user: UserData;
}

export default function MyInfo({ user }: UserDataProps) {
  return (
    <>
      <div className="flex items-center">
        <div className="thumb w-[85px] h-[85px] rounded-[50%] bg-[#333] overflow-hidden">
          <Image
            alt="user-thumbnail"
            src={user.thumbnail}
            width={85}
            height={85}
          />
        </div>
        <div className="ml-[20px]">
          <p className="font-bold text-lg">{user.name}</p>
          <ul className="flex">
            <li className="mr-[8px] info-list">
              피드 <span className="font-bold">{user.feedCount}</span>
            </li>
            <li className="mr-[8px] info-list">
              팔로워 <span className="font-bold">0</span>
            </li>
            <li className="mr-[8px]">
              팔로잉 <span className="font-bold">0</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
