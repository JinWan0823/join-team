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
          className="h-[140px] text-[#fff] bg-[#333] flex-center font-bold text-lg"
        >
          {thumbnail ? (
            <Image
              src={thumbnail}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              alt=""
              width={140}
              height={140}
              className="w-full h-full"
            ></Image>
          ) : (
            ""
          )}
        </Link>
      </li>
    </>
  );
}
