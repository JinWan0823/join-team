import Image from "next/image";
import Link from "next/link";

interface FeedThumbProps {
  thumbnail: string;
  link: string;
}

export default function FeedThumb({ thumbnail, link }: FeedThumbProps) {
  return (
    <>
      <li>
        <Link
          href={`/myfeed?itemId=${link}`}
          className="relative w-[140px] text-[#fff] flex-center font-bold text-lg"
          style={{ aspectRatio: "1/1" }}
        >
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt="feed-thumbnail"
              fill
              sizes="140px"
              className="object-cover"
            ></Image>
          ) : (
            ""
          )}
        </Link>
      </li>
    </>
  );
}
