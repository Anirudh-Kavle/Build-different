import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Build Different",
  description: "Break from the norm, check if your idea stands out",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased bg-[#f8fafc]`}>
        {/* Future: <Navbar /> or <Footer /> could be imported here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
