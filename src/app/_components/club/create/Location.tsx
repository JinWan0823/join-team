import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { IoClose } from "react-icons/io5";
import { locationCategory, regionData } from "@/app/_utils/categories";

interface LocationToggleProps {
  setLocationToggle: Dispatch<SetStateAction<boolean>>;
  sido: string;
  setSido: Dispatch<SetStateAction<string>>;
  gugun: string;
  setGugun: Dispatch<SetStateAction<string>>;
}

export default function Location({
  setLocationToggle,
  sido,
  setSido,
  gugun,
  setGugun,
}: LocationToggleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSidoSelect = (item: string) => {
    setSido(item);
  };
  const handleGugunSelect = (item: string) => {
    setGugun(item);
  };

  return (
    <div
      className={`w-full h-full bg-[#f6f6f6] z-[999] absolute top-[0] left-[0] py-[20px] px-[10px] flex flex-col justify-between ${
        isVisible ? "category-visible" : "category-hidden"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold">지역</h4>
          <button onClick={() => setLocationToggle(false)} className="text-xl">
            <IoClose />
          </button>
        </div>
        <div className="mt-[20px]">
          <h3 className="text-md font-bold">시 · 도</h3>
          <ul className="mt-[10px] grid grid-cols-4 gap-4">
            {locationCategory.map((item, idx) => (
              <li
                key={idx}
                className={`text-center cursor-pointer py-[6px] text-sm rounded-[10px] border-[1px] ${
                  sido === item
                    ? "border-[#878787] text-[#fff] bg-[#3D97FF]"
                    : ""
                }`}
                onClick={() => handleSidoSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[20px]">
          <h3 className="text-md font-bold">구 · 군</h3>
          <ul className="mt-[10px] grid grid-cols-4 gap-4 mb-[30px]">
            {sido
              ? regionData[sido as keyof typeof regionData].map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-center cursor-pointer py-[6px] text-sm rounded-[10px] border-[1px] ${
                      gugun === item
                        ? "border-[#878787] text-[#fff] bg-[#3D97FF]"
                        : ""
                    }`}
                    onClick={() => handleGugunSelect(item)}
                  >
                    {item}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <button
        className="w-full rounded-[8px] py-[10px] text-[#fff] bg-[#3D97FF] "
        onClick={() => setLocationToggle(false)}
      >
        저장하기
      </button>
    </div>
  );
}
