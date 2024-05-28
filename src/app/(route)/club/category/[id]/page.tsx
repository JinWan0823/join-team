"use client";
import { ClubDetailData } from "@/app/_utils/Interface";
import { getData, postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const param = useParams();
  const [data, setData] = useState<ClubDetailData[]>();
  useEffect(() => {
    console.log(param);
    const fetchData = async () => {
      const result = await getData<ClubDetailData[]>(
        `${joinTeamUrl}/club/category/${param.id}`
      );
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      {}
    </section>
  );
}
