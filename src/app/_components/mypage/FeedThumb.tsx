import Image from "next/image";
import Link from "next/link";

interface FeedThumbProps {
  thumbnail: string;
}

export default function FeedThumb({ thumbnail }: FeedThumbProps) {
  return (
    <>
      <li>
        <Link
          href={"/myfeed"}
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
