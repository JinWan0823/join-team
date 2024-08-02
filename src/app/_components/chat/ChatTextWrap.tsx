import MemberChat from "./MemberChat";
import MyChat from "./MyChat";

export default function ChatTextWrap() {
  return (
    <>
      <div className="p-[10px] overflow-y-scroll h-[calc(100%-46px)] pb-[150px] flex flex-col scroll-track ">
        <MyChat />
        <MemberChat />
      </div>
    </>
  );
}
