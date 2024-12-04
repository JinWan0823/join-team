import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";

interface ThumbnailProps {
  masterId: string;
}

interface UserResponse {
  thumbnail: string;
}

export default function Thumbnail({ masterId }: ThumbnailProps) {
  const [masterThumb, setMasterThumb] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<UserResponse>(
          `${joinTeamUrl}/user/${masterId}`
        );
        setMasterThumb(result.thumbnail);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="thumb w-[65px] h-[65px] rounded-[50%] bg-[#333]"
      style={{
        backgroundImage: `url(${masterThumb})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
