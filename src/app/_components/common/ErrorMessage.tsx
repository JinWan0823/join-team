import { Dispatch, SetStateAction } from "react";

interface MessageProps {
  message: string;
  setError: Dispatch<SetStateAction<boolean>>;
}

export default function ErrorMessage({ message, setError }: MessageProps) {
  const Errorhandle = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(false);
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[#333333d1] z-[9999] flex-center">
      <div className="w-[calc(100%-20px)]  bg-[#fff] rounded-[12px] overflow-hidden text-center animate__animated animate__bounceIn">
        <div className="top w-full p-[10px] bg-[#3d97ff]">
          <p className="font-bold text-[#fff]">ERROR</p>
        </div>
        <p className="p-[10px] py-[30px]">{message}</p>

        <button
          onClick={Errorhandle}
          className="cursor-pointer bg-[#3d97ff] text-[#fff] font-bold w-[calc(100%-20px)] py-[4px] rounded-[4px] mb-[10px]"
        >
          확인
        </button>
      </div>
    </div>
  );
}
