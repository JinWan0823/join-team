"use client";

import { ClubData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Wrap() {
  const url = "http://localhost:8080/search";
  const [data, setData] = useState<ClubData[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const query = params.get("val");
      let result;
      if (query) {
        result = await getData<ClubData[]>(`${url}?val=${query}`);
      } else {
        result = await getData<ClubData[]>(`${url}`);
      }
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track"></section>
  );
}
