import Image from "next/image";
import { IoCameraSharp } from "react-icons/io5";

export default function ProfileImg() {
  return (
    <>
      <div className="relative inline-block">
        <div className="overflow-hidden w-[220px] h-[220px] rounded-[40px]">
          <Image
            src={
              "https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/defaultThumb.png"
            }
            alt="user-thumbnail"
            width={220}
            height={220}
          ></Image>
        </div>
        <button className="bg-[#d5d5d5] absolute bottom-[-10px] right-[0px] p-[4px] rounded-[10px]">
          <IoCameraSharp className="text-xl text-[#797979]" />
        </button>
      </div>
    </>
  );
}
