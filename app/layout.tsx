import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnoutRadar – Detect Developer Burnout Early",
  description: "Analyze Git commit patterns, code quality metrics, and work hours to identify early burnout signals in your engineering team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66f8f103-cde9-40f3-9011-1d61e4adefbb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
