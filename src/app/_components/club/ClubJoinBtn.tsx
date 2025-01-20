import { postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSocket } from "../SocketProvider";
import { Dispatch, SetStateAction } from "react";

interface BtnProps {
  params: string;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  userId: string;
}

export default function ClubJoinBtn({ params, setUpdate, userId }: BtnProps) {
  const socket = useSocket();

  const handleJoinClub = async () => {
    try {
      const result = await postData(`${joinTeamUrl}/club/join/${params}`, {});
      setUpdate((prev) => !prev);

      const chatTime = new Date().toISOString();
      socket?.emit("userJoined", {
        content: "system 메세지",
        parentRoom: params.toString(),
        who: "System Message",
        time: chatTime,
        userId: userId,
      });
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <>
      <button
        className="w-full text-[#fff] py-[10px] mt-[40px] rounded-[8px] bg-[#3D97FF]"
        onClick={handleJoinClub}
      >
        참가 신청하기
      </button>
    </>
  );
}
