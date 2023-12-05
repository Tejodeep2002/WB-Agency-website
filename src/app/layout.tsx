import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WebFlexrr Digital Services ",
    template: `%s | WebFlexrr Digital Services`,
  },
  description:
    "Welcome to WebFlexrr Digital Services, Transforming visions into captivating online experiences, our team specializes in cutting-edge web design, seamless web development, powerful digital marketing strategies, SEO optimization, and compelling content creation. Elevate your online presence with our tailored solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
