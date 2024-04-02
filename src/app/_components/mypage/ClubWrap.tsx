"use client";
import { useEffect, useState } from "react";
import ListCard from "../main/ListCard";
import { getData } from "@/app/_utils/axios";
import { ClubDetailData } from "@/app/_utils/Interface";
import NoClub from "./NoClub";

export default function ClubWrap() {
  const [data, setData] = useState<ClubDetailData[]>([]);
  const url = "http://localhost:8080/club/myclub";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData[]>(url);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ul>
      {data.length === 0 ? (
        <NoClub />
      ) : (
        data.map((item, idx) => <ListCard key={idx} data={item} />)
      )}
    </ul>
  );
}
