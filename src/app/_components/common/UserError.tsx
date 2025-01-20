"use client";
import { useRecoilState } from "recoil";
import { errorState } from "@/app/_state/recoil";

export default function UserError() {
  const [error, setError] = useRecoilState(errorState);

  if (!error.isError) return null;

  const handleConfirm = () => {
    setError({ isError: false, message: "" });
  };

  return (
    <div className="errorbox w-full h-full absolute top-0 left-0 bg-[#333333d1] z-[9999999999999999] flex-center">
      <div className="bg-white p-4 rounded shadow-md">
        <p>{error.message}</p>
        <button
          onClick={handleConfirm}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          확인
        </button>
      </div>
    </div>
  );
}
