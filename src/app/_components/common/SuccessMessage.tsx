import Link from "next/link";

interface MessageTypeProsp {
  type: string;
}

export default function SuccessMessage({ type }: MessageTypeProsp) {
  console.log(type);
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[#333333d1] z-[9999] flex-center">
      <div className="w-[calc(100%-20px)]  bg-[#fff] rounded-[12px] overflow-hidden text-center animate__animated animate__bounceIn">
        <div className="top w-full p-[10px] bg-[#3d97ff]">
          <p className="font-bold text-[#fff]">&#127881;</p>
        </div>
        <p className="p-[10px] py-[30px]">
          {type === "signup" ? "회원가입" : "클럽생성"}에 성공했습니다!
        </p>

        <Link
          href={type === "signup" ? "/" : `/club/${type.replace("club/", "")}`}
          className="inline-block bg-[#3d97ff] text-[#fff] font-bold w-[calc(100%-20px)] py-[4px] rounded-[4px] mb-[10px]"
        >
          확인
        </Link>
      </div>
    </div>
  );
}
