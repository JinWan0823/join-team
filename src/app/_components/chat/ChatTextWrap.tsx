import { useEffect } from "react";
import MemberChat from "./MemberChat";
import MyChat from "./MyChat";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";

interface RoomIdProps {
  roomId: string;
}

export default function ChatTextWrap({ roomId }: RoomIdProps) {
  useEffect(() => {
    // 해당 방의 채팅 메시지 불러오기
    const fetchMessages = async () => {
      try {
        const response = await getData(`${joinTeamUrl}/chat/${roomId}`);
        console.log(response);
      } catch (error) {
        console.error("메시지 불러오기 실패:", error);
      }
    };

    if (roomId) {
      fetchMessages();
    }
  }, [roomId]);
  return (
    <>
      <div className="p-[10px] overflow-y-scroll h-[calc(100%-46px)] pb-[150px] flex flex-col scroll-track ">
        <MyChat />
        <MemberChat />
      </div>
    </>
  );
}
