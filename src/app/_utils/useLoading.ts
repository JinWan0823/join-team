"use client"; // 클라이언트 전용 코드로 지정

import Router from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [nowLoading, setNowLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      console.log("Route change started...");
      setNowLoading(true);

      // 인위적인 2초 지연을 추가
      setTimeout(() => {
        console.log("Loading spinner activated...");
        setNowLoading(true);
      }, 30000);
    };

    const end = () => {
      console.log("Route change ended...");
      setNowLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return nowLoading;
};
