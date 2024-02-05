import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      alt=""
      width={200}
      height={200}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
