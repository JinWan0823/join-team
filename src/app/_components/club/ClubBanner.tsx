import Image from "next/image";

interface ClubBannerProps {
  images: string;
}

export default function ClubBanner({ images }: ClubBannerProps) {
  return (
    <>
      <div className="img-slide w-full h-[240px] bg-[#333] flex-center">
        <Image
          src={images}
          alt="club-thumbnail"
          width={420}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
