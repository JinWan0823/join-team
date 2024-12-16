import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="w-full h-[auto] relative bg-[#333] rounded-[10px] overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <Image
        src={"https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/main.png"}
        alt="main-banner"
        fill
        className="w-full h-[auto] object-cover"
      />
    </div>
  );
}
