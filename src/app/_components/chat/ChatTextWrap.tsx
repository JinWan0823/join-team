import { useEffect, useRef, useState } from "react";
import MemberChat from "./MemberChat";
import MyChat from "./MyChat";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useSocket } from "../SocketProvider";
import { formatDate, formatTime } from "@/app/_utils/formatTime";
import { v4 as uuidv4 } from "uuid";

interface RoomIdProps {
  roomId: string;
  userId: string;
}

interface UserInfoTypes {
  name: string;
  thumbnail: string;
}

interface MessageTypes {
  _id: string;
  content: string;
  parentRoom: string;
  time: string;
  who: string;
  userInfo: UserInfoTypes;
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
          setMessageData((prevMessages) => [
            ...prevMessages,
            { ...newMessage, _id: newMessage._id || uuidv4() }, // 임시 ID 생성
          ]);
        }
      });

      socket.on("userJoined", (newMessage: MessageTypes) => {
        if (newMessage.parentRoom === roomId) {
          setMessageData((prevMessages) => [
            ...prevMessages,
            { ...newMessage, _id: newMessage._id || uuidv4() }, // 임시 ID 생성
          ]);
        }
      });
    }

    return () => {
      socket?.off("message");
      socket?.off("userJoined");
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
                userInfo={message.userInfo}
              />
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
