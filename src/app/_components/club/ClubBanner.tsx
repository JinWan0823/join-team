import Image from "next/image";

interface ClubBannerProps {
  images: string;
}

export default function ClubBanner({ images }: ClubBannerProps) {
  return (
    <>
      <div
        className="relative img-slide w-full wflex-center"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={images}
          alt="club-thumbnail"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
