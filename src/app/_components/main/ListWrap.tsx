"use client";
import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { getData } from "@/app/_utils/axios";
import { ClubData } from "@/app/_utils/Interface";

export default function ListWrap() {
  const [data, setData] = useState<ClubData[]>([]);
  const url = "http://localhost:8080/club";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubData[]>(url);
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
