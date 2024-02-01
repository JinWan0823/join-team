import { MdErrorOutline } from "react-icons/md";

export default function LoginError() {
  return (
    <div className="absolute w-[calc(100%-10px)] p-[12px] bg-[#000000a6] top-[0] flex-center text-[#fff] rounded-[20px] text-sm">
      <MdErrorOutline className="mr-[4px] text-md text-[#ffa26f]" /> 아이디와
      비밀번호를 다시 확인해보세요.
    </div>
  );
}
