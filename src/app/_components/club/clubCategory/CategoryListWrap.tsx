import { ClubDetailData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ListCard from "../../main/ListCard";
import InfiniteLoading from "../../common/InfiniteLoading";

interface DataProps {
  data: ClubDetailData[];
}

export default function ClubCategoryWrap({ data }: DataProps) {
  const [list, setList] = useState<ClubDetailData[]>(data);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);
  const params = useParams();
  useEffect(() => {
    console.log(list);
    const fetchMoreData = async () => {
      if (isLoading) return;

      setIsLoading(true);

      try {
        const result = await getData<ClubDetailData[]>(
          `${joinTeamUrl}/club/category/${params.id}?page=${page}`
        );

        if (result.length === 0) {
          setHasMore(false);
        } else {
          setList((prev) => [...prev, ...result]);
          setPage((prev) => prev + 1);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Data Fetching Error: ", error);
        setIsLoading(false);
      }
    };

    const handleScroll = () => {
      if (listRef.current && hasMore && !isLoading) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          fetchMoreData();
        }
      }
    };

    if (listRef.current) {
      listRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <>
      <ul
        ref={listRef}
        className="w-full h-full px-[10px] overflow-y-scroll scroll-track pb-[76px]"
      >
        {list.map((item, idx) => (
          <ListCard key={idx} data={item} />
        ))}
        {isLoading && <InfiniteLoading />}
        {!hasMore && (
          <p className="mt-[20px] text-sm text-center text-[#9e9e9e]">
            더 이상 불러올 활동이 없습니다.
          </p>
        )}
      </ul>
    </>
  );
}
