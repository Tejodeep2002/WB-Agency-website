import type { Metadata } from "next";
import "../globals.css";
import { Suspense } from "react";
import Loading from "./Loading";

export const metadata: Metadata = {
  title: "Our team",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading/>}>

      <body suppressHydrationWarning={true}>{children}</body>
      </Suspense>
    </html>
  );
}
