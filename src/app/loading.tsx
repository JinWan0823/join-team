import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full flex-center flex-col">
      <p className="text-[#878787] text-lg font-bold">잠시만 기다려주세요.</p>
      <PulseLoader className="mt-[10px]" color="#7884ef" margin={6} />
    </div>
  );
}
