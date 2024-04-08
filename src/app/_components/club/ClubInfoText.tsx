interface textProps {
  text?: string;
}

export default function ClubInfoText({ text }: textProps) {
  return (
    <p className="text-[#333] min-h-[200px] p-[10px] bg-[#dfdfdf] rounded-[10px] ">
      {text}
    </p>
  );
}
