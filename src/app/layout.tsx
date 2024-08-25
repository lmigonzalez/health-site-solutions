import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Analytics } from "@vercel/analytics/react";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Healthcare Web Design Company | Custom Website Development",
  description:
    "HealthWebExperts offers specialized web design & development for healthcare. We build secure, responsive websites for hospitals, clinics, and medical practices.",

  alternates: {
    canonical: "https://www.healthwebexperts.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} relative flex min-h-screen w-full flex-col overflow-x-hidden scroll-smooth bg-slate-50 text-gray-700`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        {/* <LiveChat /> */}
      </body>
    </html>
  );
}
