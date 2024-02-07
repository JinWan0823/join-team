import FeedCard from "./FeedCard";
import Nofeed from "./NoFeed";

export default function FeedWrap() {
  const feed = true;

  return feed ? (
    <ul className="grid grid-cols-3 gap-1 ">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </ul>
  ) : (
    <Nofeed />
  );
}
