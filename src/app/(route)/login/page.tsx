"use client";
import GoogleLogin from "@/app/_components/login/GoogleLogin";
import Logo from "../../_components/logo";
import LoginForm from "@/app/_components/login/LoginForm";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";
import { checkIfLoggedIn } from "@/app/_utils/authUtils";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = checkIfLoggedIn();
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router]);

  return (
    <section className="flex-col flex-center w-full">
      <Link
        href={"/"}
        className="absolute right-[5px] top-[5px] text-[45px] text-[#333] text-gray-400"
      >
        <IoCloseOutline />
      </Link>
      <div className="w-[260px]">
        <Logo />
      </div>
      <LoginForm />
      <GoogleLogin />
      <Link href="/signup" className="underline mt-[10px]">
        회원가입
      </Link>
    </section>
  );
}
