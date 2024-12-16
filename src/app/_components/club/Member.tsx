import { MemberData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MemberIdProps {
  memberId: string;
}

export default function Member({ memberId }: MemberIdProps) {
  const [memberData, setMemberData] = useState<MemberData>();

  useEffect(() => {
    const fetchingMember = async () => {
      try {
        const result = await getData(`${joinTeamUrl}/user/${memberId}`);
        setMemberData(result as MemberData);
      } catch (error) {
        console.log("Data Fetching Error : ", error);
      }
    };

    fetchingMember();
  }, []);

  return (
    <>
      <li className="member">
        <div
          className="relative thumb w-[40px] rounded-[50%] overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          {memberData && (
            <Image
              src={memberData.thumbnail}
              alt="member-thumbnail"
              fill
              sizes="40px"
              className="object-cover"
            />
          )}
        </div>
        <span className="text-sm whitespace-nowrap">{memberData?.name}</span>
      </li>
    </>
  );
}
