import Image from "next/image";

interface ContentProps {
  content: string;
  time: string;
  userInfo: {
    name: string;
    thumbnail: string;
  };
}

export default function MemberChat({ content, time, userInfo }: ContentProps) {
  return (
    <>
      <div className="flex justify-start my-[10px] items-start">
        <div
          className="relative thumb w-[60px] rounded-[10px] mr-[4px] overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          {userInfo ? (
            <Image
              src={userInfo.thumbnail}
              alt="thumbnail"
              fill
              className="object-cover"
              sizes="60px"
            />
          ) : (
            ""
          )}
        </div>
        <div className="max-w-[60%]">
          <p>{userInfo ? userInfo?.name : "알수없음"}</p>
          <div>
            <p className="member-chat bg-gray-200 p-[10px] rounded-[10px]  break-words">
              {content}
            </p>
          </div>
        </div>
        <p className="text-sm ml-[4px] self-end">{time}</p>
      </div>
    </>
  );
}
