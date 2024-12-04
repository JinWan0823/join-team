import { FaRegCommentDots } from "react-icons/fa";

interface LastMessageTimeProps {
  lastMessageTime: string;
}

const getTimeAgo = (timeStamp: string) => {
  const now = new Date();
  const messageTime = new Date(timeStamp);

  const kstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const kstMessageTime = new Date(messageTime.getTime() + 9 * 60 * 60 * 1000);

  const diffMs = kstNow.getTime() - kstMessageTime.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    return `방금 전 대화`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전 대화`;
  } else {
    return `${diffDays}일 전 대화`;
  }
};

export default function LastMessageTime({
  lastMessageTime,
}: LastMessageTimeProps) {
  return (
    <span className="flex items-center text-[#b0d5ff]">
      &#128172;
      {getTimeAgo(lastMessageTime)}
    </span>
  );
}
