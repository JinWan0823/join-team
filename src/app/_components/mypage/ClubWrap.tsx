"use client";
import ListCard from "../main/ListCard";
import { ClubDetailData } from "@/app/_utils/Interface";
import NoClub from "./NoClub";

interface ClubProps {
  data: ClubDetailData[];
}

export default function ClubWrap({ data }: ClubProps) {
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
