"use client";
import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { getData } from "@/app/_utils/axios";
import { ClubDetailData } from "@/app/_utils/Interface";
import { joinTeamUrl } from "@/app/_utils/url";

interface ListWrapProps {
  category: string;
}

export default function ListWrap({ category }: ListWrapProps) {
  const [data, setData] = useState<ClubDetailData[]>([]);

  console.log(joinTeamUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ClubDetailData[]>(
          `${joinTeamUrl}/club/${category}`
        );
        console.log(result);
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
