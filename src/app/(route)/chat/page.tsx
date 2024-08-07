import ChatList from "@/app/_components/chat/ChatList";

export default function Wrap() {
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      <ChatList />
    </section>
  );
}
