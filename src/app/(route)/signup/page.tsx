import SignUpForm from "@/app/_components/login/SignUpForm";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function Wrap() {
  return (
    <div className="w-full pt-[56px]">
      <Link href={"/login"} className="absolute top-0 left-0">
        <IoIosArrowRoundBack className="text-[60px]" />
      </Link>
      <h1 className="font-bold text-xl py-[4px]">회원가입</h1>
      <SignUpForm />
    </div>
  );
}
