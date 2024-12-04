import { getTimeAgo } from "@/app/_utils/formatTime";

interface LastMessageTimeProps {
  lastMessageTime: string;
}

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
