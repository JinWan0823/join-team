interface ContentProps {
  content: string;
}

export default function MemberChat({ content }: ContentProps) {
  return (
    <>
      {" "}
      <div className="flex justify-start my-[10px] items-end">
        <div className="member-chat bg-gray-200 p-[10px] rounded-[10px] max-w-[60%]">
          {content}
        </div>
        <p className="text-sm ml-[4px]">오후 4:50</p>
      </div>
    </>
  );
}
