import { Dispatch, SetStateAction } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface LocationToggleProps {
  setLocationToggle: Dispatch<SetStateAction<boolean>>;
  sido: string;
  gugun: string;
}

export default function LocationBtn({
  setLocationToggle,
  sido,
  gugun,
}: LocationToggleProps) {
  return (
    <div
      className="flex items-center justify-between p-[10px] border-b-[1px] text-[#878787] cursor-pointer"
      onClick={() => setLocationToggle(true)}
    >
      <p className="whitespace-nowrap">
        {sido ? (
          <span className="text-[#3d97ff] font-bold">
            활동지역 - {sido} {gugun}
          </span>
        ) : (
          "* 클럽 활동 지역 선택"
        )}
      </p>
      <span>
        <CiCirclePlus />
      </span>
    </div>
  );
}
