import GoogleLogin from "@/app/_components/login/GoogleLogin";
import Logo from "../../_components/logo";
import LoginForm from "@/app/_components/login/LoginForm";
import Link from "next/link";

export default function Wrap() {
  return (
    <div className=" flex-col flex-center w-full">
      <Logo />
      <LoginForm />
      <GoogleLogin />
      <Link href="/" className="underline mt-[10px]">
        회원가입
      </Link>
    </div>
  );
}
