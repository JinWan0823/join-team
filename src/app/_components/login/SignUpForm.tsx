"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import SelectInterest from "./SelectInterest";
import InputWrap from "./InputWrap";
import { postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import ErrorMessage from "../common/ErrorMessage";
import { AxiosError } from "axios";
import SuccessMessage from "../common/SuccessMessage";
import { UserData } from "@/app/_utils/Interface";

interface ErrorResponseData {
  message: string;
}

export default function SignUpForm() {
  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [interestList, setInterestList] = useState<string[]>([]);
  const [selectMenu, setSelectMenu] = useState<boolean>(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

  const isNameValid = (name: string) => {
    if (name.length === 0) return true;
    return name.length > 1;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    if (
      !(
        isEmailValid(email) &&
        isPwdValid(pwd) &&
        email.length !== 0 &&
        pwd.length !== 0
      )
    )
      return;
    e.preventDefault();

    try {
      const data = await postData(`${joinTeamUrl}/signup`, {
        username: email,
        password: pwd,
        name: name,
        interestList: interestList.join("\\"),
      });
      console.log("회원가입 성공 : ", data);

      const loginData: UserData = await postData(`${joinTeamUrl}/login`, {
        username: email,
        password: pwd,
      });

      console.log("로그인 성공 : ", loginData);

      setSuccess(true);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponseData>;
      console.error("Data Fetching Error : ", axiosError);
      setError(true);
      setErrorMessage(
        axiosError.response?.data?.message || "Unknown error occurred"
      );
    }
  };

  return (
    <form>
      {error && <ErrorMessage message={errorMessage} setError={setError} />}
      {success && <SuccessMessage type={"signup"} />}
      <InputWrap
        inputType="text"
        holder="ex) withgo@gmail.com"
        id="loginId"
        text="*이메일"
        handleInput={handleMail}
        warning="이메일 형식을 입력해주세요."
        isTargetValid={isEmailValid(email)}
      />
      <InputWrap
        inputType="password"
        id="passwordId"
        text="*비밀번호"
        handleInput={handlePwd}
        warning="영문,숫자,특수문자를 조합해주세요. (8 - 16 글자)"
        isTargetValid={isPwdValid(pwd)}
      />
      <InputWrap
        inputType="text"
        id="name"
        text="*이름"
        handleInput={handleName}
        warning="2글자 이상 입력해주세요."
        isTargetValid={isNameValid(name)}
      />

      <div className="mt-[4px]">
        <label htmlFor="" className="font-bold ">
          * 관심사 (최대 3가지)
        </label>
        <div
          className="border-b-[1px] border-gray-400 py-[4px] flex items-center justify-between cursor-pointer"
          onClick={() => {
            setSelectMenu(true);
          }}
        >
          <p className="">
            {interestList.length > 0
              ? interestList.join(",")
              : "관심사를 최소 한개 선택해주세요."}
          </p>
          <FaChevronDown />
        </div>
      </div>
      <button
        type="submit"
        className={`absolute bottom-[10px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px]  ${
          isEmailValid(email) &&
          isPwdValid(pwd) &&
          isNameValid(name) &&
          email.length > 0 &&
          pwd.length > 0 &&
          name.length > 0 &&
          interestList.length > 0
            ? "bg-[#3D97FF] pointer-events-auto"
            : "bg-gray-300 pointer-events-none"
        }`}
        onClick={handleSignUp}
      >
        회원가입
      </button>
      {selectMenu && (
        <SelectInterest
          setSelectMenu={setSelectMenu}
          setInterestList={setInterestList}
          interestList={interestList}
        />
      )}
    </form>
  );
}
