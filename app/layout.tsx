import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Anime App",
  description: "This is anime app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
