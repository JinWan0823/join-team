import { GoHeart } from "react-icons/go";
import FeedHeader from "./FeedHeader";
import FeedImg from "./FeedImg";
import FeedText from "./FeedText";
import { FeedData } from "@/app/_utils/Interface";

interface FeedCardProps {
  data: FeedData;
}

export default function FeedCard({ data }: FeedCardProps) {
  return (
    <article className="pb-[20px]">
      <FeedHeader dataId={data._id} />
      <FeedImg />
      <FeedText text={data.content} hashTag={data.hashTag} />
      <div className="p-[10px] flex items-center">
        <button className="mr-[4px]">
          <GoHeart className="text-lg" />
        </button>
        <span>1,023</span>
      </div>
    </article>
  );
}
