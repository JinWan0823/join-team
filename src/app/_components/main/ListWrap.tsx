"use client";
import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { getData } from "@/app/_utils/axios";
import { ClubData, ClubDetailData } from "@/app/_utils/Interface";

export default function ListWrap() {
  const [data, setData] = useState<ClubDetailData[]>([]);
  const url = "http://localhost:8080/club";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData[]>(url);
        setData(result.slice(0, 3));
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((item, idx) => (
        <ListCard key={idx} data={item} />
      ))}
    </ul>
  );
}
