"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { auth } from "@/app/firebase-config";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("dhksl823@naver.com");
  const [pwd, setPwd] = useState("p056300!");

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pwd)
      .then((data) => {
        alert("로그인 성공");
        console.log(data);
      })
      .catch((e) => {
        alert(e);
        console.log(`로그인 실패`);
      });
  };

  return (
    <form className="mt-[12px] w-full" onSubmit={handleSubmit}>
      <div>
        <Input
          inputType="text"
          holder="ex) withgo@gmail.com"
          id="loginId"
          text="이메일"
          handleInput={handleMail}
        />
      </div>
      <div className="mt-[20px]">
        <Input
          inputType="password"
          id="passwordId"
          text="비밀번호"
          handleInput={handlePwd}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-300 text-[#fff] py-[10px] mt-[10px] rounded-[8px]"
      >
        로그인
      </button>
    </form>
  );
}
