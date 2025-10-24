import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Cinzel_Decorative} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cinzelDeco = Cinzel_Decorative({ weight: ["400","700"], subsets: ["latin"], variable: "--font-display" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor's Classic Deli",
  description: "Fresh sandwiches, hot off the grill — Victor's Classic Deli in Nashville, TN",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-cocoa-900 text-[15px] text-amber-50 bg-brown-radial`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 w-full px-3 md:px-6 py-10">
  {children}
</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
