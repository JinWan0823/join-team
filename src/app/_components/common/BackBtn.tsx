"use client";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BackBtn() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button onClick={handleBackClick}>
      <MdArrowBackIosNew className="text-xl" />
    </button>
  );
}
