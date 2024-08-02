import BackBtn from "../common/BackBtn";

export default function ChatHeader() {
  return (
    <>
      {" "}
      <div className="w-full top-0 p-[10px] bg-[#fff] flex justify-between items-center shadow-lg">
        <BackBtn />
        <p>Chat</p>
        <div className="burger w-[40px]"></div>
      </div>
    </>
  );
}
