import { UserData } from "@/app/_utils/Interface";
import Image from "next/image";
import { useState } from "react";
import FollowMember from "./FollowMember";

interface UserDataProps {
  user: UserData;
}

export default function MyInfo({ user }: UserDataProps) {
  const [totalMemberToggle, setTotalMemberToggle] = useState(false);
  const [memberCategory, setMemberCategory] = useState("");
  const [follow, setFollow] = useState<string[]>([]);

  const handleMoreViewBtn = (category: string) => {
    setTotalMemberToggle(true);
    setMemberCategory(category);
    category === "팔로워"
      ? setFollow(user.followers)
      : setFollow(user.followings);
  };

  return (
    <>
      <div className="flex items-center">
        <div
          className="relative thumb w-[85px] rounded-[50%] overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            alt="user-thumbnail"
            src={user.thumbnail}
            fill
            sizes="85px"
            className="object-cover"
          />
        </div>
        <div className="ml-[20px]">
          <p className="font-bold text-lg">{user.name}</p>
          <ul className="flex">
            <li className="mr-[8px] info-list">
              피드 <span className="font-bold">{user.feedCount}</span>
            </li>
            <li className="mr-[8px] info-list">
              <button onClick={() => handleMoreViewBtn("팔로워")}>
                팔로워
                <span className="font-bold">{user.followers.length}</span>
              </button>
            </li>
            <li className="mr-[8px]">
              <button onClick={() => handleMoreViewBtn("팔로잉")}>
                팔로잉{" "}
                <span className="font-bold">{user.followings.length}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {totalMemberToggle && (
        <FollowMember
          setTotalMemberToggle={setTotalMemberToggle}
          memberCategory={memberCategory}
          follow={follow}
        />
      )}
    </>
  );
}
