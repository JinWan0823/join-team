import { GoHeart } from "react-icons/go";
import FeedHeader from "./FeedHeader";
import FeedImg from "./FeedImg";
import FeedText from "./FeedText";

export default function FeedCard() {
  return (
    <article className="pb-[20px]">
      <FeedHeader />
      <FeedImg />
      <FeedText />
      <div className="p-[10px] flex items-center">
        <button className="mr-[4px]">
          <GoHeart className="text-lg" />
        </button>
        <span>1,023</span>
      </div>
    </article>
  );
}
