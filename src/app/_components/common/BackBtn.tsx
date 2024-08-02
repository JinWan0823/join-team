"use client";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BackBtn() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button onClick={handleBackClick}>
      {/* <MdArrowBackIosNew className="text-xl" /> */}
      <BiArrowBack className="text-xl" />{" "}
    </button>
  );
}
