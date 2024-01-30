"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";

interface User {
  displayName: string | null;
  email: string | null;
}

export default function Wrap() {
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
    <div className="text-center">
      <button className="bg-[#333] text-[#fff]" onClick={handleGoogleLogin}>
        구글 로그인
      </button>
      <p>
        로그인 결과:
        {userData?.displayName ? userData.displayName : "로그인해주세요"}
      </p>
    </div>
  );
}
