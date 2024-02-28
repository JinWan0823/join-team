"use client";
import { useEffect, useState } from "react";
import ListCard from "../main/ListCard";
import { getData } from "@/app/_utils/axios";
import { ClubData } from "../main/ListWrap";

export default function ClubWrap() {
  const [data, setData] = useState<ClubData[]>([]);
  const url = "http://localhost:9999/club";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubData[]>(url);
        setData(result);
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
