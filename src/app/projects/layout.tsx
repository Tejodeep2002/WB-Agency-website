import type { Metadata } from "next";
import "../globals.css";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Projects",
  description: "This is Project Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Suspense fallback={<Loading/>}> */}

      <body suppressHydrationWarning={true}>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}