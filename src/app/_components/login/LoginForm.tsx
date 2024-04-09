"use client";
import Input from "./InputWrap";
import { useState } from "react";
import LoginError from "./LoginError";
import InputWrap from "./InputWrap";
import { useSetRecoilState } from "recoil";
import { userInfoState, userLoginState } from "@/app/_state/recoil";
import { postData } from "@/app/_utils/axios";
import { UserData } from "@/app/_utils/Interface";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const router = useRouter();

  const setLoginInfo = useSetRecoilState(userLoginState);
  const setUserInfo = useSetRecoilState(userInfoState);

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const isEmailValid = (email: string) => {
    if (email.length === 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPwdValid = (pwd: string) => {
    if (pwd.length === 0) return true;
    const pwdRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return pwdRegex.test(pwd);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !(
        isEmailValid(email) &&
        isPwdValid(pwd) &&
        email.length !== 0 &&
        pwd.length !== 0
      )
    ) {
      return;
    }

    try {
      const data: UserData = await postData("/login", {
        username: email,
        password: pwd,
      });
      console.log("data", data);
      setLoginInfo(true);
      setUserInfo({
        id: data._id,
        username: data.username,
        name: data.name,
        thumbnail: data.thumbnail,
        interestList: data.interestList,
      });
      router.push("/mypage");
    } catch (error) {
      console.error("Data Fetching Error : ", error);
      setLoginFailed(true);

      setTimeout(() => {
        setLoginFailed(false);
      }, 2000);
    }
  };

  return (
    <form className="mt-[12px] w-full" onSubmit={handleSubmit}>
      {loginFailed && <LoginError />}
      <InputWrap
        inputType="text"
        holder="ex) withgo@gmail.com"
        id="loginId"
        text="이메일"
        handleInput={handleMail}
        isTargetValid={isEmailValid(email)}
        warning="이메일 형식을 입력해주세요."
      />
      <InputWrap
        inputType="password"
        id="passwordId"
        text="비밀번호"
        handleInput={handlePwd}
        isTargetValid={isPwdValid(pwd)}
        warning="영문,숫자,특수문자를 조합해주세요. (8 - 16 글자)"
      />
      <button
        type="submit"
        className={`w-full text-[#fff] py-[10px] mt-[10px] rounded-[8px] ${
          isEmailValid(email) &&
          isPwdValid(pwd) &&
          email.length > 0 &&
          pwd.length > 0
            ? "bg-[#3D97FF] pointer-events-auto"
            : "bg-gray-300 pointer-events-none"
        }`}
      >
        로그인
      </button>
    </form>
  );
}
