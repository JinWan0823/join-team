import SignUpForm from "@/app/_components/login/SignUpForm";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
export default function Wrap() {
  return (
    <section className="w-full pt-[56px]">
      <Link href={"/login"} className="absolute top-[10px] left-[4px]">
        <MdArrowBackIosNew className="text-[32px]" />
      </Link>
      <h1 className="font-bold text-xl py-[4px]">회원가입</h1>
      <SignUpForm />
    </section>
  );
}
