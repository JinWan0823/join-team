interface textProps {
  text?: string;
}

export default function ClubInfoText({ text }: textProps) {
  return <p className="text-[#333] ">{text}</p>;
}
