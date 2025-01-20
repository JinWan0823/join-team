"use client";

import { useLoading } from "@/app/_utils/useLoading";
import LoadingSpinner from "./LoadingSpinner";

export default function ClientSideLoadingSpinner() {
  const isLoading = useLoading();
  console.log("Is loading:", isLoading); // 로딩 상태 확인

  return isLoading ? <LoadingSpinner /> : null;
}
