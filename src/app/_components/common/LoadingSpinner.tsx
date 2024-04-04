import { PulseLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full absolute top-0 left-0 flex-center flex-col z-[9999] bg-[#333]">
      <p className="text-[#878787] text-lg font-bold">잠시만 기다려주세요.</p>
      <PulseLoader className="mt-[10px]" color="#7884ef" margin={6} />
    </div>
  );
}
