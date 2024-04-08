interface BadgeProps {
  badge: string;
}

export default function CategoryBadge({ badge }: BadgeProps) {
  return (
    <span className="text-[12px] p-[1px] px-[6px] rounded-[8px] bg-[#b0d5ff] text-[#fff]">
      {badge}
    </span>
  );
}
