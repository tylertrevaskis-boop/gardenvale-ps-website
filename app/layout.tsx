import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gardenvale Primary School | Challenge. Engage. Inspire.",
  description: "Gardenvale Primary School — Two campuses of excellence in East Brighton, Victoria. Prep to Year 6.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}