import Image from "next/image";

export default function NoResultImg() {
  const noResult =
    "https://jointeam.s3.ap-northeast-2.amazonaws.com/utill/Nosearch.avif";

  return (
    <>
      <Image src={noResult} width={320} height={320} alt="error-img" />
    </>
  );
}
