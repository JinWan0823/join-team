import Link from "next/link";

export default function SuccessMessage() {
  const MessageHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[#333333d1] z-[9999] flex-center">
      <div className="w-[calc(100%-20px)]  bg-[#fff] rounded-[12px] overflow-hidden text-center animate__animated animate__bounceIn">
        <div className="top w-full p-[10px] bg-[#3d97ff]">
          <p className="font-bold text-[#fff]">&#127881;</p>
        </div>
        <p className="p-[10px] py-[30px]">회원가입에 성공했습니다!</p>

        <Link
          href="/"
          className="inline-block bg-[#3d97ff] text-[#fff] font-bold w-[calc(100%-20px)] py-[4px] rounded-[4px] mb-[10px]"
        >
          확인
        </Link>
      </div>
    </div>
  );
}
