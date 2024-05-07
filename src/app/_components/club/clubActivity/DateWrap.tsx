import { Dispatch, SetStateAction } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface DateInfoProps {
  date: number;
  month: number;
  year: number;
}

interface DateWrapProps {
  setOpenDatePicker: Dispatch<SetStateAction<boolean>>;
  dateInfo: DateInfoProps;
}

export default function DateWrap({
  setOpenDatePicker,
  dateInfo,
}: DateWrapProps) {
  return (
    <div
      className="flex items-center justify-between p-[10px] border-b-[1px] text-[#878787] cursor-pointer"
      onClick={() => setOpenDatePicker((prev) => !prev)}
    >
      <p className="whitespace-nowrap">
        {dateInfo.year}-{dateInfo.month}-{dateInfo.date}
      </p>
      <span>
        <CiCirclePlus />
      </span>
    </div>
  );
}
