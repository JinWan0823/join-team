import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-[250px] bg-[#333] rounded-[10px] overflow-hidden">
      <Image
        src={"https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/main.png"}
        alt="main-banner"
        width={400}
        height={250}
        className="object-cover"
      />
    </div>
  );
}
