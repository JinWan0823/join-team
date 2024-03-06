interface textProps {
  text?: string;
}

export default function TeamInfoText({ text }: textProps) {
  return <p className="text-[#333] ">{text}</p>;
}
