import type { Metadata } from "next";
import { Noto_Sans_KR } from "@next/font/google";
import "./globals.css";
import Heather from "./_components/common/Heather";
import TabMenu from "./_components/common/TabMenu";
import RecoilRootProvider from "./_components/RecoilRootProvider";
import { Suspense } from "react";
import LoadingSpinner from "./_components/common/LoadingSpinner";
import { SocketProvider } from "./_components/SocketProvider";
import "animate.css";

export const metadata: Metadata = {
  title: "Work Out",
  description: "Generated by create next app",
};

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={noto.className}>
        <RecoilRootProvider>
          <SocketProvider>
            <div className="w-[420px] mx-auto h-screen min-h-screen bg-[#fff] text-md relative">
              <Heather />
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
              <TabMenu />
            </div>
          </SocketProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
