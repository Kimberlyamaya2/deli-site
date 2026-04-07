import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor's Classic Deli",
  description:
    "Fresh sandwiches, hot off the grill, breakfast, sides, and catering from Victor's Classic Deli in Nashville, TN.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Victor's Classic Deli",
    description:
      "Fresh sandwiches, hot off the grill, breakfast, sides, and catering from Victor's Classic Deli in Nashville, TN.",
    url: "https://victorsclassicdeli.com",
    siteName: "Victor's Classic Deli",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Victor's Classic Deli logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Victor's Classic Deli",
    url: "https://victorsclassicdeli.com",
    logo: "https://victorsclassicdeli.com/logo.png",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-[#f6efe7] text-[#2b211b] text-[15px]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 w-full px-3 md:px-6 pt-28 pb-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}