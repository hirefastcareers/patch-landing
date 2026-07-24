import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "./components/Nav";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Patch — Job tracker for gardeners",
  description:
    "Patch helps sole trader gardeners track jobs, customers and earnings. Know your week, know what you'll earn, know where you're going.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="font-sans text-foreground">
        <Nav />
        {children}
      </body>
    </html>
  );
}
