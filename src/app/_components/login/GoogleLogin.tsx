"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase-config";
import { FcGoogle } from "react-icons/fc";
interface User {
  displayName: string | null;
  email: string | null;
}

export default function GoogleLogin() {
  const [userData, setUserData] = useState<User | null>();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
        console.log(data.user.email);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button
      className="bg-[#fff] mt-[10px] w-full  py-[10px] rounded-[8px] flex-center border-[1px] border-black-300"
      onClick={handleGoogleLogin}
    >
      <FcGoogle className="text-[18px] mr-[4px]" /> 구글 로그인
    </button>
  );
}
