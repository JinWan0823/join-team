"use client";
import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { getData } from "@/app/_utils/axios";

export interface ClubData {
  id: number;
  clubName: string;
  category: string;
  thumbnail: string;
  location: string;
  information: string;
  joinedMember: number;
  maximumMember: number;
}

export default function ListWrap() {
  const [data, setData] = useState<ClubData[]>([]);
  const url = "http://localhost:9999/club";

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
