"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const UseLoading = () => {
  const [nowLoading, setNowLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setNowLoading(true);
    };
    const end = () => {
      setNowLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  return nowLoading ? <>...로딩중</> : <></>;
};
