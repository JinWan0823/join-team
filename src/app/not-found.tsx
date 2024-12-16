import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page not found",
};

export default function NotFound() {
  const noResult =
    "https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/error404.jpg";

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative flex-center">
      <div className="flex justify-center items-center flex-col text-center">
        <h2 className="font-bold text-[20px]  animate__animated animate__bounceIn">
          페이지를 찾을 수 없습니다!
        </h2>
        <p className="my-[10px]  animate__animated animate__bounceIn">
          죄송합니다. 찾고 계신 페이지를 찾을 수 없습니다.
          <br />
          URL을 잘못 입력하셨나요? 맞춤법을 확인하세요.
        </p>
        <div
          className="relative w-[300px] imgWarp animate__animated animate__bounceIn"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            src={noResult}
            alt="error-404-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
