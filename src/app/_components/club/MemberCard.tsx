import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/axios";
import { MemberData } from "@/app/_utils/Interface";
import Image from "next/image";
import CategoryBadge from "../common/CategoryBadge";

interface MemberIdProps {
  memberId: string;
  clubMaster: string;
}

export default function MemberCard({ memberId, clubMaster }: MemberIdProps) {
  const [memberData, setMemberData] = useState<MemberData>();
  useEffect(() => {
    const fetchingMember = async () => {
      try {
        const result = await getData(`/user/${memberId}`);
        console.log(result);
        setMemberData(result as MemberData);
      } catch (error) {
        console.log("Data Fetching Error : ", error);
      }
    };

    fetchingMember();
  }, []);

  return (
    <>
      <li className="p-[10px] py-[14px] bg-[#fff] border-t-[1px] border-b-[1px]">
        <Link
          href={`/mypage/${memberId}`}
          className="flex items-center justify-between"
        >
          <div className="thumb w-[65px] h-[65px] rounded-[50%] overflow-hidden">
            {memberData && (
              <Image
                src={memberData.thumbnail}
                alt="member-thumbnail"
                width={65}
                height={65}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-[calc(100%-75px)]">
            <ul className="flex gap-1">
              {memberData?.interestList.split("\\").map(
                (item, idx) =>
                  idx < 3 && (
                    <li key={idx}>
                      <CategoryBadge badge={item} />
                    </li>
                  )
              )}
            </ul>
            <p className="mt-[4px] font-bold">
              {clubMaster === memberId ? "👑" : ""}
              {memberData?.name}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}
