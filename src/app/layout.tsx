import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Healthcare Website Design and Development | Health Web Experts",
  description:
    "Discover expert web design and development services for healthcare providers. Health Web Experts offers custom websites, SEO, hosting, and more to enhance your online presence and engage your patients. Contact us today for a consultation.",
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
        <LiveChat />
      </body>
    </html>
  );
}
