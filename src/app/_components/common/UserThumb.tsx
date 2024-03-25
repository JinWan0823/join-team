import Link from "next/link";

export default function UserThumb() {
  return (
    <Link
      href={"/mypage"}
      className="w-[26px] h-[26px] rounded-[50%] bg-[#333] inline-block"
    ></Link>
  );
}
