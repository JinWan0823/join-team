import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface DateInfoProps {
  date: number;
  month: number;
  year: number;
}

interface DatePickerProps {
  setOpenDatePicker: Dispatch<SetStateAction<boolean>>;
  dateInfo: DateInfoProps;
  setDateInfo: Dispatch<SetStateAction<DateInfoProps>>;
}

export default function DatePicker({
  setOpenDatePicker,
  dateInfo,
  setDateInfo,
}: DatePickerProps) {
  const nowDate = new Date();
  const [pickerMonth, setPickerMonth] = useState(nowDate.getMonth() + 1);
  const [pickerYear, setPickerYear] = useState(nowDate.getFullYear());

  const handlePrevMonth = () => {
    if (pickerMonth === 1) {
      setPickerYear((prev) => prev - 1);
      setPickerMonth(12);
    } else {
      setPickerMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (pickerMonth === 12) {
      setPickerYear((prev) => prev + 1);
      setPickerMonth(1);
    } else {
      setPickerMonth((prev) => prev + 1);
    }
  };

  const handleDatePick = (e: React.MouseEvent<HTMLDivElement>) => {
    setDateInfo({
      date: Number(e.currentTarget.innerText),
      month: pickerMonth,
      year: pickerYear,
    });
    setOpenDatePicker(false);
  };

  const renderCalendarBody = () => {
    const pickerDate = new Date();
    pickerDate.setUTCFullYear(pickerYear, pickerMonth - 1, 1);
    const currentMonth = pickerDate.getMonth();
    const firstDay = pickerDate.getDay();
    const lastDate = new Date(
      pickerDate.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();

    const calendarItems = [];

    for (let i = 0; i < firstDay; i++) {
      calendarItems.push(<div key={`prev_${i}`} className="prev_date"></div>);
    }

    for (let i = 1; i <= lastDate; i++) {
      const isToday =
        nowDate.getMonth() + 1 === pickerMonth && i === nowDate.getDate();
      const isSunday = (firstDay + i - 1) % 7 === 0;

      calendarItems.push(
        <div
          key={i}
          className={`date py-[16px] cursor-pointer ${
            isToday ? "text-[#3d97ff]" : ""
          } ${isSunday ? "text-red-400" : ""}
          ${
            dateInfo.date === i &&
            dateInfo.month === pickerMonth &&
            dateInfo.year === pickerYear
              ? "picker-date"
              : ""
          }`}
          onClick={(e) => {
            handleDatePick(e);
          }}
        >
          {i}
        </div>
      );
    }
    const limitDay = firstDay + lastDate;
    const nextDay = Math.ceil(limitDay / 7) * 7;
    for (let i = 1; i <= nextDay - limitDay; i++) {
      calendarItems.push(
        <div key={`next_${i}`} className="next_month_date"></div>
      );
    }

    return calendarItems;
  };

  return (
    <>
      <div className="w-full h-full absolute position-center flex-center bg-[#000000ab] z-50">
        <div className="w-[calc(100%-16px)] bg-[#fff] rounded-[8px] overflow-hidden">
          <div className="bg-[#3d97ff] p-[8px] text-[#fff] text-center font-bold flex justify-between items-center">
            <button
              onClick={() => {
                handlePrevMonth();
              }}
            >
              <FaChevronLeft />
            </button>
            <span>
              {pickerYear}년 {pickerMonth}월
            </span>
            <button
              onClick={() => {
                handleNextMonth();
              }}
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="calendar p-[2px]">
            <div className="calendar_head mt-[10px] grid grid-cols-7 text-center text-[#bbbabc]">
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>
            <div
              id="calendar"
              className="calendar_body grid grid-cols-7 text-center"
            >
              {renderCalendarBody()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
