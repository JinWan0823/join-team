interface ContentProps {
  content: string;
}

export default function MyChat({ content }: ContentProps) {
  return (
    <>
      <div className="flex justify-end my-[10px] items-end">
        <p className="text-sm mr-[4px]">오후 4:50</p>
        <div className="my-chat bg-blue-200 p-[10px] rounded-[10px] max-w-[60%]">
          {content}
        </div>
      </div>
    </>
  );
}
