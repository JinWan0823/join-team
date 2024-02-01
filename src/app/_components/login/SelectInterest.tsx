import React, { Dispatch, SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface SelectProps {
  setSelectMenu: Dispatch<SetStateAction<boolean>>;
}

export default function SelectInterest({ setSelectMenu }: SelectProps) {
  const interest = ['싸이클', '수영', '축구', '골프', '야구', '탁구', '러닝', '등산', '캠핑', '여행'];

  return (
    <div className="absolute left-0 bottom-0 bg-[#333333d6] z-50 w-full h-full">
      <div className="absolute left-0 bottom-0 z-50 w-full bg-[#fff] text-center rounded-t-lg">
        <div className="py-[10px] relative">
          <p className="font-bold">관심사</p>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-[10px] text-xl"
            onClick={(e) => {
              e.preventDefault();
              setSelectMenu(false);
            }}
          >
            <IoIosClose />
          </button>
        </div>
        <ul className="p-[10px] h-auto max-h-[520px] overflow-y-auto bg-[#ededed] grid grid-cols-3 gap-4 shadow-inner">
          {interest.map((v, i) => (
            <li key={i} className="py-[8px] bg-[#fff] rounded-[12px] shadow-sm cursor-pointer">
              {v}
            </li>
          ))}
        </ul>
        <button className="w-[calc(100%-10px)] rounded-[8px] py-[10px] my-[8px] text-[#fff] bg-gray-300 pointer-events-none">
          저장하기
        </button>
      </div>
    </div>
  );
}
