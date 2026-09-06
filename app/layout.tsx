import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ScrollReset } from "@/components/layout/ScrollReset";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "anshuman-portfolio",
  description:
    "Portfolio of Anshuman Kumar Singh, a BCA Data Analytics graduate specializing in Python, SQL, and dashboard-driven insights.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexSans.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
