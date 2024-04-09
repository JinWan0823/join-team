import { MemberData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
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
      <li className="member">
        <div className="thumb w-[40px] h-[40px] rounded-[50%] bg-[#333] overflow-hidden">
          {memberData && (
            <Image
              src={memberData.thumbnail}
              alt="member-thumbnail"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <span className="text-sm whitespace-nowrap">{memberData?.name}</span>
      </li>
    </>
  );
}
