import { userInfoState } from "@/app/_state/recoil";
import { getData, postData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useRecoilValue } from "recoil";

interface LikedByProps {
  feedId: string;
}

export default function LikedBtn({ feedId }: LikedByProps) {
  const [likedBy, setLikedBy] = useState<string[]>([]);
  const [update, setUpdate] = useState(false);
  const [chkLiked, setChkLiked] = useState(false);
  const userId = useRecoilValue(userInfoState);

  useEffect(() => {
    const LikedDataFetching = async () => {
      try {
        const result: string[] = await getData(
          `${joinTeamUrl}/feed/like/${feedId}`
        );
        setLikedBy(result);
        if (result.includes(userId.id)) {
          setChkLiked(true);
        } else {
          setChkLiked(false);
        }
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };

    LikedDataFetching();
  }, [update]);

  const handleLikeFeed = async () => {
    try {
      await postData(`${joinTeamUrl}/feed/like/${feedId}`, {});
      setUpdate((prev) => !prev);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <>
      <div className="p-[10px] flex items-center">
        <button className="mr-[4px]" onClick={handleLikeFeed}>
          {!chkLiked ? (
            <GoHeart className={`text-lg`} />
          ) : (
            <GoHeartFill
              className={`text-lg ${chkLiked && `text-[#f92c2c]`}`}
            />
          )}
        </button>
        <span>{likedBy.length}</span>
      </div>
    </>
  );
}
