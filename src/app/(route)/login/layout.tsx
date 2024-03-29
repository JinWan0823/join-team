import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Withgo Login',
  description: 'Generated by create next app',
};

export default function Layout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return <div className="w-full h-full p-[10px] flex-center relative">{props.children}</div>;
}
