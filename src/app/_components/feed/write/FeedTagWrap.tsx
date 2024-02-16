import { CiCirclePlus } from "react-icons/ci";
import { Dispatch, SetStateAction } from "react";

interface FeedProps {
  tag: string[];
  setTagInput: Dispatch<SetStateAction<boolean>>;
}

export default function FeedTagWrap({ setTagInput, tag }: FeedProps) {
  return (
    <div
      onClick={() => setTagInput(true)}
      className="flex items-center justify-between p-[10px] border-b-[1px] text-[#878787] cursor-pointer"
    >
      <p className="whitespace-nowrap">
        {tag.length > 0
          ? tag.map((item, idx) => (
              <span className="mr-[4px]" key={idx}>
                #{item}
              </span>
            ))
          : "# 태그추가"}
      </p>
      <span>
        <CiCirclePlus />
      </span>
    </div>
  );
}
