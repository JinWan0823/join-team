import { useEffect, useState } from "react";
import MemberChat from "./MemberChat";
import MyChat from "./MyChat";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSocket } from "../SocketProvider";

interface RoomIdProps {
  roomId: string;
  userId: string;
}

interface MessageTypes {
  content: string;
  parentRoom: string;
  time: string;
  who: string;
}

export default function ChatTextWrap({ roomId, userId }: RoomIdProps) {
  const [messageData, setMessageData] = useState<MessageTypes[]>([]);
  const socket = useSocket();
  useEffect(() => {
    // 해당 방의 채팅 메시지 불러오기
    const fetchMessages = async () => {
      try {
        const response = await getData(`${joinTeamUrl}/chat/${roomId}`);
        if (Array.isArray(response)) {
          setMessageData(response);
        }
      } catch (error) {
        console.error("메시지 불러오기 실패:", error);
      }
    };

    if (roomId) {
      fetchMessages();
    }

    if (socket) {
      socket.on("message", (newMessage: MessageTypes) => {
        if (newMessage.parentRoom === roomId) {
          setMessageData((prevMessages) => [...prevMessages, newMessage]);
        }
      });
    }

    return () => {
      socket?.off("message");
    };
  }, [roomId, socket]);
  return (
    <>
      <div className=" p-[10px] overflow-y-scroll h-[calc(100%-46px)] pb-[150px] flex flex-col scroll-track ">
        {messageData?.map((message, index) =>
          message.who === userId ? (
            <MyChat key={index} content={message.content} />
          ) : (
            <MemberChat key={index} content={message.content} />
          )
        )}
      </div>
    </>
  );
}
