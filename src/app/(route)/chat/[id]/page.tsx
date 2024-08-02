import ChatHeader from "@/app/_components/chat/ChatHeader";
import ChatInfut from "@/app/_components/chat/ChatInput";
import ChatTextWrap from "@/app/_components/chat/ChatTextWrap";

export default function Wrap() {
  return (
    <section className="bg-[#777] max-h-[100vh] h-[100vh] relative">
      <ChatHeader />
      <ChatTextWrap />
      <ChatInfut />
    </section>
  );
}
