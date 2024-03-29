import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withgo Search",
  description: "Generated by create next app",
};

export default function SearchLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return <div>{props.children}</div>;
}
