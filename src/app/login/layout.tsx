import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withgo Login",
  description: "Generated by create next app",
};

export default function Layout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return <div className="h-full flex-center">{props.children}</div>;
}
