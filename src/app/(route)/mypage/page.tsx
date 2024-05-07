
import MypageWrap from "@/app/_components/mypage/MypageWrap";
import { cookies } from "next/headers";

export default function Wrap() {
  const cookieStore = cookies();
  const theme = cookieStore.get("connect.sid");
  console.log(theme);

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto bg-[#f1f1f1] pb-[56px] scroll-track relative">
      {theme?.value ? <MypageWrap /> : ""}
    </section>
  );
}
