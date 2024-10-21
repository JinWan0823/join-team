interface ContentProps {
  content: string;
  time: string;
}

export default function MyChat({ content, time }: ContentProps) {
  return (
    <>
      <div className="flex justify-end my-[10px] items-end">
        <p className="text-sm mr-[4px]">{time}</p>
        <p className="my-chat bg-blue-200 p-[10px] rounded-[10px] max-w-[60%] break-words">
          {content}
        </p>
      </div>
    </>
  );
}
