import { useEffect, useRef, useState } from "react";
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
  const [isInitialLoad, setIsInitialLoad] = useState(true); // 첫 로딩 여부
  const socket = useSocket();
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (messagesEndRef.current) {
      if (isInitialLoad) {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
        setIsInitialLoad(false);
      } else {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    console.log(messageData);
  }, [messageData]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;

    hours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = isPM ? "오후" : "오전";

    return `${period} ${hours}:${formattedMinutes}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 변환
  };

  return (
    <div className="p-[10px] overflow-y-scroll h-[calc(100%-46px)] pb-[150px] flex flex-col scroll-track">
      {messageData?.map((message, index) => {
        const showDate =
          index === 0 ||
          formatDate(message.time) !== formatDate(messageData[index - 1].time);

        return (
          <div key={index}>
            {showDate && (
              <div className="text-sm text-center my-[30px] text-[#fff] bg-[#333] rounded-[12px] py-[2px]">
                {formatDate(message.time)}
              </div>
            )}
            {message.who === userId ? (
              <MyChat
                content={message.content}
                time={formatTime(message.time)}
              />
            ) : (
              <MemberChat
                content={message.content}
                time={formatTime(message.time)}
              />
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
