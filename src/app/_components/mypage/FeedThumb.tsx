import Link from "next/link";

export default function FeedThumb() {
  return (
    <>
      <li>
        <Link
          href={"/myfeed"}
          className="h-[140px] text-[#fff] bg-[#333] flex-center font-bold text-lg"
        >
          IMG
        </Link>
      </li>
    </>
  );
}
