import FeedThumb from "./FeedThumb";
import Nofeed from "./NoFeed";

export default function FeedWrap() {
  const feed = true;

  return feed ? (
    <ul className="grid grid-cols-3 gap-1 ">
      <FeedThumb />
      <FeedThumb />
      <FeedThumb />
      <FeedThumb />
      <FeedThumb />
    </ul>
  ) : (
    <Nofeed />
  );
}
