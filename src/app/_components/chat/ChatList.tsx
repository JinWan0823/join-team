"use client";

import ChatCard from "@/app/_components/chat/ChatCard";
import { getData } from "@/app/_utils/axios";
import { ChatListData } from "@/app/_utils/Interface";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";
import { ImLab } from "react-icons/im";
import NoClub from "../mypage/NoClub";

export default function ChatList() {
  const [listData, setListData] = useState<ChatListData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<ChatListData[]>(
          `${joinTeamUrl}/chat/list`
        );

        setListData(result);
      } catch (error) {
        console.error("Initial Data Fetching Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {listData.length > 0 ? (
        listData.map((item, idx) => <ChatCard key={idx} data={item} />)
      ) : (
        <NoClub />
      )}
    </ul>
  );
}
